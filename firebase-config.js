/**
 * firebase-config.js
 * Handles blog comments and live view counts via Firebase Firestore.
 *
 * HOW TO SET UP (one-time, free):
 * 1. Go to https://console.firebase.google.com and create a new project
 * 2. In your project, click "Add app" → Web (</> icon)
 * 3. Copy the firebaseConfig object and paste it below
 * 4. In Firestore → Rules, paste the rules from the FIRESTORE_RULES comment below
 * 5. Deploy — done! Comments and views are now live.
 *
 * FIRESTORE_RULES (copy into Firebase Console → Firestore → Rules):
 *
 * rules_version = '2';
 * service cloud.firestore {
 *   match /databases/{database}/documents {
 *     // Anyone can read
 *     match /{document=**} {
 *       allow read: if true;
 *     }
 *     // Views: only server-side atomic increment via field update
 *     match /blog_views/{slug} {
 *       allow write: if true;
 *     }
 *     // Comments: require non-empty name and message, max lengths
 *     match /blog_comments/{slug}/comments/{commentId} {
 *       allow create: if request.resource.data.keys().hasAll(['name', 'message', 'timestamp'])
 *         && request.resource.data.name is string
 *         && request.resource.data.name.size() > 0
 *         && request.resource.data.name.size() <= 100
 *         && request.resource.data.message is string
 *         && request.resource.data.message.size() > 0
 *         && request.resource.data.message.size() <= 2000;
 *       allow update, delete: if false;
 *     }
 *   }
 * }
 */

// ─── PASTE YOUR FIREBASE CONFIG HERE ────────────────────────────────────────
const FIREBASE_CONFIG = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
// ─────────────────────────────────────────────────────────────────────────────

let _db = null;
let _firebaseReady = false;
let _activeListeners = {};

function isFirebaseConfigured() {
  return FIREBASE_CONFIG.projectId && FIREBASE_CONFIG.projectId.length > 0;
}

function getDb() {
  return _db;
}

function initFirebase() {
  if (!isFirebaseConfigured()) {
    console.warn('Firebase not configured — comments and live views disabled. See firebase-config.js for setup instructions.');
    return;
  }
  try {
    firebase.initializeApp(FIREBASE_CONFIG);
    _db = firebase.firestore();
    _firebaseReady = true;
    console.log('Firebase ready.');
  } catch (e) {
    console.warn('Firebase init failed:', e);
  }
}

// ── VIEW COUNTS ──────────────────────────────────────────────────────────────

/**
 * Fetch current view count for a slug (without incrementing).
 * @param {string} slug
 * @param {function} callback  called with (count: number)
 */
async function fetchViews(slug, callback) {
  if (!_firebaseReady || !_db) {
    if (callback) callback(null);
    return;
  }
  try {
    const ref = _db.collection('blog_views').doc(slug);
    const snap = await ref.get();
    if (snap.exists) {
      if (callback) callback(snap.data().count || 0);
    } else {
      if (callback) callback(0);
    }
  } catch (e) {
    console.warn('fetchViews error:', e);
    if (callback) callback(null);
  }
}

/**
 * Atomically increment view count and return new value.
 * @param {string} slug
 * @param {function} callback  called with (newCount: number)
 */
async function incrementViews(slug, callback) {
  if (!_firebaseReady || !_db) {
    if (callback) callback(null);
    return;
  }
  try {
    const ref = _db.collection('blog_views').doc(slug);
    await ref.set(
      { count: firebase.firestore.FieldValue.increment(1) },
      { merge: true }
    );
    const snap = await ref.get();
    const newCount = snap.exists ? (snap.data().count || 1) : 1;
    if (callback) callback(newCount);
  } catch (e) {
    console.warn('incrementViews error:', e);
    if (callback) callback(null);
  }
}

// ── COMMENTS ─────────────────────────────────────────────────────────────────

/**
 * Submit a comment for a blog post.
 * @param {string} slug
 * @param {string} name
 * @param {string} message
 * @returns {Promise<boolean>}  true on success
 */
async function submitComment(slug, name, message) {
  if (!_firebaseReady || !_db) {
    console.warn('Firebase not ready — cannot submit comment.');
    return false;
  }
  const trimmedName = (name || '').trim().slice(0, 100);
  const trimmedMsg = (message || '').trim().slice(0, 2000);
  if (!trimmedName || !trimmedMsg) return false;

  try {
    await _db
      .collection('blog_comments')
      .doc(slug)
      .collection('comments')
      .add({
        name: trimmedName,
        message: trimmedMsg,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
    return true;
  } catch (e) {
    console.warn('submitComment error:', e);
    return false;
  }
}

/**
 * Listen for comments on a blog post in real-time.
 * @param {string} slug
 * @param {function} callback  called with (comments: Array<{name, message, timestamp}>)
 * @returns {function}  unsubscribe function
 */
function listenComments(slug, callback) {
  if (!_firebaseReady || !_db) {
    if (callback) callback([]);
    return () => {};
  }
  const unsubscribe = _db
    .collection('blog_comments')
    .doc(slug)
    .collection('comments')
    .orderBy('timestamp', 'asc')
    .onSnapshot(
      (snapshot) => {
        const comments = snapshot.docs.map((doc) => {
          const d = doc.data();
          return {
            id: doc.id,
            name: d.name,
            message: d.message,
            timestamp: d.timestamp ? d.timestamp.toDate() : new Date()
          };
        });
        if (callback) callback(comments);
      },
      (err) => {
        console.warn('listenComments error:', err);
        if (callback) callback([]);
      }
    );
  return unsubscribe;
}

/**
 * Detach all active Firestore listeners.
 */
function detachAllListeners() {
  Object.values(_activeListeners).forEach((unsub) => {
    if (typeof unsub === 'function') unsub();
  });
  _activeListeners = {};
}

/**
 * Register a listener so it can be cleaned up.
 * @param {string} key
 * @param {function} unsubscribeFn
 */
function registerListener(key, unsubscribeFn) {
  if (_activeListeners[key]) _activeListeners[key]();
  _activeListeners[key] = unsubscribeFn;
}

// Init on load
initFirebase();
