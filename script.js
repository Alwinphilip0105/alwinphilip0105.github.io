'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
// modalCloseBtn.addEventListener("click", testimonialsModalFunc);
// overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (filterItems[i].dataset.category && (filterItems[i].dataset.category.toLowerCase().includes(selectedValue) || selectedValue.includes(filterItems[i].dataset.category.toLowerCase()))) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}

const projectItems = document.querySelectorAll(".project-item[data-filter-item]");
const projectModalContainer = document.querySelector("[data-project-modal-container]");
const projectModalOverlay = document.querySelector("[data-project-overlay]");
const projectModalCloseBtn = document.querySelector("[data-project-modal-close-btn]");
const projectModalTitle = document.querySelector("[data-project-modal-title]");
const projectModalCategory = document.querySelector("[data-project-modal-category]");
const projectModalProblem = document.querySelector("[data-project-modal-problem]");
const projectModalApproach = document.querySelector("[data-project-modal-approach]");
const projectModalImpact = document.querySelector("[data-project-modal-impact]");
const projectModalLiveLink = document.querySelector("[data-project-modal-live-link]");
const projectModalDemoLink = document.querySelector("[data-project-modal-demo-link]");
const projectModalHubLink = document.querySelector("[data-project-modal-hub-link]");
const projectModalSourceLink = document.querySelector("[data-project-modal-source-link]");
const projectModalBanner = document.querySelector("[data-project-modal-banner]");
const projectModalImg = document.querySelector("[data-project-modal-img]");

const openProjectModal = function (projectItem, projectLink) {
  if (!projectModalContainer) {
    return;
  }

  const titleElement = projectItem.querySelector(".project-title");
  const categoryElement = projectItem.querySelector(".project-category");
  const title = titleElement ? titleElement.textContent.trim() : "Project";
  const category = categoryElement ? categoryElement.textContent.trim() : "Category";

  projectModalTitle.textContent = title;
  projectModalCategory.textContent = category;

  const cardImg = projectItem.querySelector(".project-img img");
  if (projectModalBanner && projectModalImg && cardImg && cardImg.src) {
    projectModalImg.src = cardImg.currentSrc || cardImg.src;
    projectModalImg.alt = cardImg.alt || title;
    projectModalBanner.removeAttribute("hidden");
  } else if (projectModalBanner) {
    projectModalBanner.setAttribute("hidden", "");
  }

  projectModalProblem.textContent = projectItem.getAttribute("data-case-problem") || projectItem.dataset.caseProblem || "Built to solve a real-world product and user-flow challenge.";
  projectModalApproach.textContent = projectItem.getAttribute("data-case-approach") || projectItem.dataset.caseApproach || "Implemented a practical architecture with iterative development and integration testing.";
  projectModalImpact.textContent = projectItem.getAttribute("data-case-impact") || projectItem.dataset.caseImpact || "Delivered measurable improvements in user experience and system reliability.";

  const sourceHref = projectItem.getAttribute("data-source-link") || projectItem.dataset.sourceLink || (projectLink ? projectLink.getAttribute("href") : "#");
  const liveHref = projectItem.getAttribute("data-live-link") || projectItem.dataset.liveLink || "";
  const demoHref = (projectLink && projectLink.getAttribute("data-demo-link")) || projectItem.getAttribute("data-demo-link") || projectItem.dataset.demoLink || "";
  const hubHref = (projectLink && projectLink.getAttribute("data-hub-link")) || projectItem.getAttribute("data-hub-link") || projectItem.dataset.hubLink || "";

  const isCoreSentinel = title === "Core Sentinel";

  projectModalSourceLink.setAttribute("href", sourceHref || "#");

  if (projectModalDemoLink) {
    if (demoHref && isCoreSentinel) {
      projectModalDemoLink.setAttribute("href", demoHref);
      projectModalDemoLink.removeAttribute("hidden");
    } else {
      projectModalDemoLink.setAttribute("hidden", "");
    }
  }

  if (projectModalHubLink) {
    if (hubHref && isCoreSentinel) {
      projectModalHubLink.setAttribute("href", hubHref);
      projectModalHubLink.removeAttribute("hidden");
    } else {
      projectModalHubLink.setAttribute("hidden", "");
    }
  }

  const hasCoreSentinelExtras = isCoreSentinel && (demoHref || hubHref);

  if (liveHref) {
    projectModalLiveLink.textContent = hasCoreSentinelExtras ? "Landing / walkthrough" : "Live Demo";
    projectModalLiveLink.setAttribute("href", liveHref);
    projectModalLiveLink.removeAttribute("aria-disabled");
    projectModalLiveLink.classList.remove("disabled");
    if (hasCoreSentinelExtras) {
      projectModalLiveLink.classList.add("secondary");
    } else {
      projectModalLiveLink.classList.remove("secondary");
    }
  } else {
    projectModalLiveLink.textContent = "Demo on Request";
    projectModalLiveLink.setAttribute("href", "#");
    projectModalLiveLink.setAttribute("aria-disabled", "true");
    projectModalLiveLink.classList.add("disabled");
    projectModalLiveLink.classList.remove("secondary");
  }

  projectModalContainer.classList.add("active");
};

const closeProjectModal = function () {
  if (!projectModalContainer) {
    return;
  }
  projectModalContainer.classList.remove("active");
};

projectItems.forEach((projectItem) => {
  const projectLink = projectItem.querySelector("a");
  if (!projectLink) {
    return;
  }

  projectLink.addEventListener("click", function (event) {
    event.preventDefault();
    openProjectModal(projectItem, projectLink);
  });
});

if (projectModalOverlay) {
  projectModalOverlay.addEventListener("click", closeProjectModal);
}

if (projectModalCloseBtn) {
  projectModalCloseBtn.addEventListener("click", closeProjectModal);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeProjectModal();
    closeBlogModal();
  }
});

if (projectModalLiveLink) {
  projectModalLiveLink.addEventListener("click", function (event) {
    if (projectModalLiveLink.getAttribute("aria-disabled") === "true") {
      event.preventDefault();
    }
  });
}

// Blog posts loading and modal functionality
const blogPostsList = document.querySelector(".blog-posts-list");
const blogModalContainer = document.querySelector("[data-blog-modal-container]");
const blogModalOverlay = document.querySelector("[data-blog-overlay]");
const blogModalCloseBtn = document.querySelector("[data-blog-modal-close-btn]");
const blogModalTitle = document.querySelector("[data-blog-modal-title]");
const blogModalSubtitle = document.querySelector("[data-blog-modal-subtitle]");
const blogModalDate = document.querySelector("[data-blog-modal-date]");
const blogModalTags = document.querySelector("[data-blog-modal-tags]");
const blogModalReadingTime = document.querySelector("[data-blog-modal-reading-time]");
const blogModalHeroGraphic = document.querySelector("[data-blog-modal-hero-graphic]");
const blogModalBody = document.querySelector("[data-blog-modal-body]");
const blogModalStructured = document.querySelector("[data-blog-modal-structured]");
const blogModalProblem = document.querySelector("[data-blog-modal-problem]");
const blogModalApproach = document.querySelector("[data-blog-modal-approach]");
const blogModalImpact = document.querySelector("[data-blog-modal-impact]");
const blogModalClosingNote = document.querySelector("[data-blog-modal-closing-note]");
const blogModalMorePosts = document.querySelector("[data-blog-modal-more-posts]");

// Global state for claps and follows
let currentPostSlug = null;
const postClaps = {};
const hasClapped = {};

const COUNTAPI_BASE = 'https://countapi.mileshilliard.com/api/v1';

const getInitialSeedClaps = function (slug) {
  const seed = slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return (seed % 65) + 18;
};

const getClapsCount = function (slug) {
  if (postClaps[slug] === undefined) {
    postClaps[slug] = getInitialSeedClaps(slug);
  }
  return postClaps[slug];
};

const checkHasClapped = function (slug) {
  try {
    return localStorage.getItem('ap_has_clapped_' + slug) === 'true';
  } catch (e) {
    return !!hasClapped[slug];
  }
};

const setHasClapped = function (slug, val) {
  hasClapped[slug] = val;
  try {
    localStorage.setItem('ap_has_clapped_' + slug, val ? 'true' : 'false');
  } catch (e) {}
};

const updateClapsUI = function (slug) {
  const count = getClapsCount(slug);
  const userClapped = checkHasClapped(slug);
  
  // 1. Update modal clap UI if currently showing this post
  if (currentPostSlug === slug) {
    const clapsButtons = document.querySelectorAll("[data-clap-button]");
    const clapCounts = document.querySelectorAll("[data-clap-count]");
    
    clapCounts.forEach(el => el.textContent = count);
    
    clapsButtons.forEach(btn => {
      const icon = btn.querySelector(".clap-icon-heart");
      if (userClapped) {
        btn.classList.add("active");
        if (icon) icon.setAttribute("name", "heart");
      } else {
        btn.classList.remove("active");
        if (icon) icon.setAttribute("name", "heart-outline");
      }
    });
  }
  
  // 2. Update card likes UI if it exists in the feed
  const cardLikes = document.querySelector(`[data-likes-slug="${slug}"]`);
  if (cardLikes) {
    const countEl = cardLikes.querySelector(".likes-count");
    if (countEl) countEl.textContent = count;
    
    const icon = cardLikes.querySelector("ion-icon");
    if (userClapped) {
      cardLikes.classList.add("active");
      cardLikes.style.color = "var(--orange-yellow-crayola)";
      if (icon) icon.setAttribute("name", "heart");
    } else {
      cardLikes.classList.remove("active");
      cardLikes.style.color = "var(--light-gray-70)";
      if (icon) icon.setAttribute("name", "heart-outline");
    }
  }
};

const fetchGlobalClaps = async function (slug) {
  if (!slug) return;
  const apiKey = 'ap_blog_likes_' + slug.replace(/[^a-zA-Z0-9_-]/g, '_');
  try {
    const res = await fetch(`${COUNTAPI_BASE}/get/${apiKey}`);
    if (res.status === 404) {
      const initVal = getInitialSeedClaps(slug);
      const setRes = await fetch(`${COUNTAPI_BASE}/set/${apiKey}?value=${initVal}`);
      if (setRes.ok) {
        const setData = await setRes.json();
        postClaps[slug] = setData.value;
      }
    } else if (res.ok) {
      const data = await res.json();
      postClaps[slug] = data.value;
    }
  } catch (err) {
    console.warn("Could not fetch global likes count:", err);
  }
  updateClapsUI(slug);
};

const incrementGlobalClaps = async function (slug) {
  if (!slug) return;
  const apiKey = 'ap_blog_likes_' + slug.replace(/[^a-zA-Z0-9_-]/g, '_');
  try {
    const res = await fetch(`${COUNTAPI_BASE}/hit/${apiKey}`);
    if (res.ok) {
      const data = await res.json();
      postClaps[slug] = data.value;
    }
  } catch (err) {
    console.warn("Could not increment global likes:", err);
  }
  updateClapsUI(slug);
};

const decrementGlobalClaps = async function (slug) {
  if (!slug) return;
  const apiKey = 'ap_blog_likes_' + slug.replace(/[^a-zA-Z0-9_-]/g, '_');
  try {
    const currentVal = getClapsCount(slug);
    const res = await fetch(`${COUNTAPI_BASE}/set/${apiKey}?value=${currentVal}`);
    if (res.ok) {
      const data = await res.json();
      postClaps[slug] = data.value;
    }
  } catch (err) {
    console.warn("Could not decrement global likes:", err);
  }
  updateClapsUI(slug);
};

const toggleLike = function (slug) {
  const isClapped = checkHasClapped(slug);
  if (!isClapped) {
    setHasClapped(slug, true);
    postClaps[slug] = getClapsCount(slug) + 1;
    updateClapsUI(slug);
    incrementGlobalClaps(slug);
  } else {
    setHasClapped(slug, false);
    postClaps[slug] = Math.max(0, getClapsCount(slug) - 1);
    updateClapsUI(slug);
    decrementGlobalClaps(slug);
  }
};

const formatDate = function (dateStr) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', options);
};

// Markdown parsing function to support rich articles
const parseMarkdown = function (text) {
  if (!text) return '';
  
  // Store placeholders for code blocks and inline code
  const placeholders = [];
  let placeholderCounter = 0;
  
  let html = text;
  
  // 1. Code blocks: ```[lang]\n...\n```
  html = html.replace(/```(\w*)\n([\s\S]*?)\n```/g, function (match, lang, code) {
    const language = lang || 'javascript';
    const trimmedCode = code.trim();
    const escapedCode = trimmedCode
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    const placeholder = `<!--CODE_BLOCK_PLACEHOLDER_${placeholderCounter++}-->`;
    placeholders.push({
      placeholder: placeholder,
      content: `
      <div class="code-block-wrapper">
        <div class="code-block-header">
          <span class="code-block-lang">${language}</span>
          <button class="copy-code-btn" data-code="${encodeURIComponent(trimmedCode)}">
            <ion-icon name="copy-outline"></ion-icon>
            <span>Copy</span>
          </button>
        </div>
        <pre class="code-block-pre"><code class="code-block language-${language}">${escapedCode}</code></pre>
      </div>
    `
    });
    return placeholder;
  });

  // 2. Inline Code: `code`
  html = html.replace(/`([^`]+)`/g, function (match, code) {
    const placeholder = `<!--INLINE_CODE_PLACEHOLDER_${placeholderCounter++}-->`;
    placeholders.push({
      placeholder: placeholder,
      content: `<code class="inline-code">${code}</code>`
    });
    return placeholder;
  });

  // 3. Bold: **text**
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

  // 4. Italic: *text*
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');

  // 5. Links: [text](url)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

  // 6. Headers
  html = html.replace(/^#### (.*)$/gm, '<h4>$1</h4>');
  html = html.replace(/^### (.*)$/gm, '<h4>$1</h4>');
  html = html.replace(/^## (.*)$/gm, '<h4>$1</h4>');

  // 7. Blockquotes: lines starting with ">"
  const lines = html.split('\n');
  let inBlockquote = false;
  let blockquoteContent = [];
  let processedLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('>')) {
      if (!inBlockquote) {
        inBlockquote = true;
      }
      blockquoteContent.push(line.substring(1).trim());
    } else {
      if (inBlockquote) {
        processedLines.push(`<blockquote class="blog-blockquote">${blockquoteContent.join('<br>')}</blockquote>`);
        blockquoteContent = [];
        inBlockquote = false;
      }
      processedLines.push(lines[i]);
    }
  }
  if (inBlockquote) {
    processedLines.push(`<blockquote class="blog-blockquote">${blockquoteContent.join('<br>')}</blockquote>`);
  }
  html = processedLines.join('\n');

  // 8. Section breaks
  html = html.replace(/^\s*\.\.\.\s*$/gm, '<hr class="blog-divider" value="..." />');
  html = html.replace(/^\s*---\s*$/gm, '<hr class="blog-divider" />');

  // 9. Paragraphs and List processing
  const parts = html.split(/\n\n+/);
  html = parts.map(part => {
    const trimmed = part.trim();
    if (!trimmed) return '';
    
    // Check if the trimmed part is a placeholder
    if (trimmed.startsWith('<!--CODE_BLOCK_PLACEHOLDER_') || trimmed.startsWith('<!--INLINE_CODE_PLACEHOLDER_')) {
      return trimmed;
    }
    
    if (trimmed.startsWith('<div') || 
        trimmed.startsWith('<blockquote') || 
        trimmed.startsWith('<pre') || 
        trimmed.startsWith('<h') || 
        trimmed.startsWith('<ul') || 
        trimmed.startsWith('<ol') || 
        trimmed.startsWith('<hr')) {
      return trimmed;
    }
    
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      const items = trimmed.split(/\n\s*[-*]\s+/);
      const listItems = items.map(item => {
        const itemText = item.replace(/^[-*]\s+/, '').trim();
        return itemText ? `<li>${itemText}</li>` : '';
      }).filter(Boolean).join('');
      return `<ul>${listItems}</ul>`;
    }
    
    if (/^\d+\.\s+/.test(trimmed)) {
      const items = trimmed.split(/\n\s*\d+\.\s+/);
      const listItems = items.map(item => {
        const itemText = item.replace(/^\d+\.\s+/, '').trim();
        return itemText ? `<li>${itemText}</li>` : '';
      }).filter(Boolean).join('');
      return `<ol>${listItems}</ol>`;
    }

    return `<p>${trimmed}</p>`;
  }).join('');

  // 10. Restore placeholders
  for (let i = placeholders.length - 1; i >= 0; i--) {
    html = html.replace(placeholders[i].placeholder, placeholders[i].content);
  }

  return html;
};

const renderDiagramHTML = function (graphic) {
  if (!graphic || !graphic.type || typeof blogDiagrams === 'undefined') return '';
  const svgHTML = blogDiagrams.render(graphic.type, graphic.props);
  return `
    <div class="blog-diagram-container">
      ${svgHTML}
      <div class="blog-diagram-caption">${graphic.caption}</div>
    </div>
  `;
};

const openBlogModal = function (post) {
  if (!blogModalContainer) return;

  currentPostSlug = post.slug;

  // -- Header metadata --
  blogModalTitle.textContent = post.title;
  if (blogModalSubtitle) {
    blogModalSubtitle.textContent = post.summary || '';
  }
  blogModalDate.textContent = formatDate(post.date);
  blogModalDate.setAttribute("datetime", post.date);
  blogModalTags.textContent = post.tags.join(", ");
  if (blogModalReadingTime) blogModalReadingTime.textContent = post.readingTime || '5 min read';

  // -- Hero image / graphic --
  if (blogModalHeroGraphic) {
    if (post.coverImage) {
      blogModalHeroGraphic.innerHTML = `<img src="${post.coverImage}" alt="${post.title}" loading="lazy">`;
    } else if (post.coverGraphic) {
      blogModalHeroGraphic.innerHTML = renderDiagramHTML({
        type: post.coverGraphic.type,
        props: post.coverGraphic.props,
        caption: "Visual Overview"
      });
    } else {
      blogModalHeroGraphic.innerHTML = '';
    }
  }

  // -- Detect format and render accordingly --
  const isNarrative = post.format === 'narrative';

  if (blogModalBody) blogModalBody.style.display = isNarrative ? '' : 'none';
  if (blogModalStructured) blogModalStructured.style.display = isNarrative ? 'none' : '';

  if (isNarrative) {
    // Narrative: render free-form sections
    if (blogModalBody && post.sections && post.sections.length) {
      blogModalBody.innerHTML = post.sections.map(section => `
        <div class="blog-narrative-section">
          ${section.heading ? `<h4 class="blog-narrative-heading">${section.heading}</h4>` : ''}
          <div>${parseMarkdown(section.text)}</div>
          ${renderDiagramHTML(section.graphic)}
        </div>
      `).join('');
    }
  } else {
    // Technical: render Problem / Approach / Impact
    if (blogModalProblem && post.problem) {
      blogModalProblem.innerHTML = `
        <div>${parseMarkdown(post.problem.text)}</div>
        ${renderDiagramHTML(post.problem.graphic)}
      `;
    }

    if (blogModalApproach && post.approach) {
      blogModalApproach.innerHTML = post.approach.map(step => `
        <div class="blog-approach-step">
          <h5>${step.stepTitle}</h5>
          <div>${parseMarkdown(step.text)}</div>
          ${renderDiagramHTML(step.graphic)}
        </div>
      `).join('');
    }

    if (blogModalImpact && post.impact) {
      blogModalImpact.innerHTML = `
        <div>${parseMarkdown(post.impact.text)}</div>
        ${renderDiagramHTML(post.impact.graphic)}
      `;
      if (post.demoLink || post.sourceLink) {
        let actionButtons = '<div class="project-modal-actions" style="margin-top: 15px; display: flex; flex-wrap: wrap; gap: 10px;">';
        if (post.demoLink) {
          actionButtons += `<a class="project-modal-link" href="${post.demoLink}" target="_blank" rel="noopener noreferrer">Interactive Demo</a>`;
        }
        if (post.sourceLink) {
          actionButtons += `<a class="project-modal-link secondary" href="${post.sourceLink}" target="_blank" rel="noopener noreferrer">Source Code</a>`;
        }
        actionButtons += '</div>';
        blogModalImpact.innerHTML += actionButtons;
      }
    }
  }

  // -- Closing note (both formats) --
  if (blogModalClosingNote) {
    blogModalClosingNote.textContent = post.closingNote || '';
  }

  // -- Recommended "More from Alwin Philip" posts --
  if (blogModalMorePosts && typeof blogPosts !== 'undefined') {
    const recommended = blogPosts
      .filter(p => p.slug !== post.slug)
      .slice(0, 3);
      
    blogModalMorePosts.innerHTML = recommended.map(rec => {
      const recCoverHTML = rec.coverImage 
        ? `<img src="${rec.coverImage}" alt="${rec.title}" loading="lazy">` 
        : (typeof blogDiagrams !== 'undefined' ? blogDiagrams.render(rec.coverGraphic.type, rec.coverGraphic.props) : '');
        
      return `
        <li class="more-post-card" data-rec-slug="${rec.slug}">
          <div class="more-post-banner">
            ${recCoverHTML}
          </div>
          <div class="more-post-content">
            <span class="more-post-meta">${formatDate(rec.date)}</span>
            <h4 class="more-post-title">${rec.title}</h4>
            <span class="more-post-read-time">${rec.readingTime || '3 min read'}</span>
          </div>
        </li>
      `;
    }).join('');
    
    // Add click handler to navigate to another recommended post directly inside the modal
    const recCards = blogModalMorePosts.querySelectorAll(".more-post-card");
    recCards.forEach(card => {
      card.addEventListener("click", function() {
        const recSlug = this.getAttribute("data-rec-slug");
        const recPost = blogPosts.find(p => p.slug === recSlug);
        if (recPost) {
          blogModalContainer.querySelector(".blog-case-modal").scrollTo({ top: 0, behavior: 'smooth' });
          openBlogModal(recPost);
        }
      });
    });
  }

  blogModalContainer.classList.add("active");
};

const closeBlogModal = function () {
  if (!blogModalContainer) return;
  blogModalContainer.classList.remove("active");
  currentPostSlug = null;
};
// Global Event Listeners for Blog Interactions
document.addEventListener("click", function (event) {
  // 3. Share Button functionality
  const shareBtn = event.target.closest("[data-share]");
  if (shareBtn) {
    const platform = shareBtn.getAttribute("data-share");
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    let shareUrl = "";
    
    if (platform === "linkedin") {
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    } else if (platform === "twitter") {
      shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
    }
    
    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400,resizable=yes,scrollbars=yes");
    }
  }

  // 4. Copy article link functionality
  const copyLinkBtn = event.target.closest("[data-copy-link]");
  if (copyLinkBtn) {
    const originalText = copyLinkBtn.innerHTML;
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        copyLinkBtn.innerHTML = `<ion-icon name="checkmark-outline" style="color: var(--orange-yellow-crayola)"></ion-icon>`;
        setTimeout(() => {
          copyLinkBtn.innerHTML = originalText;
        }, 2000);
      })
      .catch(err => {
        console.error("Failed to copy link: ", err);
      });
  }

  // 5. Copy code block functionality
  const copyCodeBtn = event.target.closest(".copy-code-btn");
  if (copyCodeBtn) {
    const codeText = decodeURIComponent(copyCodeBtn.getAttribute("data-code"));
    const copyLabel = copyCodeBtn.querySelector("span");
    const copyIcon = copyCodeBtn.querySelector("ion-icon");
    
    navigator.clipboard.writeText(codeText)
      .then(() => {
        if (copyLabel) copyLabel.textContent = "Copied!";
        if (copyIcon) copyIcon.setAttribute("name", "checkmark-outline");
        setTimeout(() => {
          if (copyLabel) copyLabel.textContent = "Copy";
          if (copyIcon) copyIcon.setAttribute("name", "copy-outline");
        }, 2000);
      })
      .catch(err => {
        console.error("Failed to copy code: ", err);
      });
  }

  // 6. Bookmark toggle functionality
  const bookmarkBtn = event.target.closest("[data-bookmark-button]");
  if (bookmarkBtn) {
    const isBookmarked = bookmarkBtn.classList.contains("active");
    const bookmarkBtns = document.querySelectorAll("[data-bookmark-button]");
    
    bookmarkBtns.forEach(btn => {
      const icon = btn.querySelector("ion-icon");
      if (isBookmarked) {
        btn.classList.remove("active");
        if (icon) icon.setAttribute("name", "bookmark-outline");
      } else {
        btn.classList.add("active");
        if (icon) icon.setAttribute("name", "bookmark");
      }
    });
  }
});

// Render blog posts dynamically
if (blogPostsList && typeof blogPosts !== 'undefined') {
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

  blogPostsList.innerHTML = sortedPosts.map(post => {
    const coverHTML = post.coverImage 
      ? `<img src="${post.coverImage}" alt="${post.title}" loading="lazy">` 
      : (typeof blogDiagrams !== 'undefined' ? blogDiagrams.render(post.coverGraphic.type, post.coverGraphic.props) : '');
    
    const tagsHTML = post.tags.map(tag => `<span class="blog-tag-pill">${tag}</span>`).join('');
    
    return `
      <li class="blog-post-item">
        <a href="#" data-blog-slug="${post.slug}">
          <div class="blog-card-left">
            <div class="blog-author-meta">
              <img src="images/my-avatar.png" alt="Alwin Philip" class="blog-author-avatar">
              <span class="blog-author-name">Alwin Philip</span>
              <span class="dot"></span>
              <time datetime="${post.date}">${formatDate(post.date)}</time>
              <span class="dot"></span>
              <span class="blog-reading-time">${post.readingTime || '5 min read'}</span>

            </div>
            
            <h3 class="h3 blog-item-title">${post.title}</h3>
            <p class="blog-text">${post.summary}</p>
            
            <div class="blog-card-footer">
              <div class="blog-tags-container">
                ${tagsHTML}
              </div>
              <div class="blog-read-more-btn">
                <span>Read More</span>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
            </div>
          </div>
          
          <div class="blog-banner-box">
            ${coverHTML}
          </div>
        </a>
      </li>
    `;
  }).join('');

  blogPostsList.addEventListener("click", function (event) {

    const cardLink = event.target.closest(".blog-post-item > a");
    if (cardLink) {
      event.preventDefault();
      const slug = cardLink.getAttribute("data-blog-slug");
      const post = blogPosts.find(p => p.slug === slug);
      if (post) {
        openBlogModal(post);
      }
    }
  });


}

// Bind close handlers for blog modal
if (blogModalCloseBtn) {
  blogModalCloseBtn.addEventListener("click", closeBlogModal);
}
if (blogModalOverlay) {
  blogModalOverlay.addEventListener("click", closeBlogModal);
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
// for (let i = 0; i < formInputs.length; i++) {
//   formInputs[i].addEventListener("input", function () {

    // check form validation
//     if (form.checkValidity()) {
//       formBtn.removeAttribute("disabled");
//     } else {
//       formBtn.setAttribute("disabled", "");
//     }

//   });
// }

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
navigationLinks.forEach((link) => {
  link.addEventListener("click", function () {
    const targetPage = this.textContent.trim().toLowerCase();

    for (let i = 0; i < pages.length; i++) {
      if (targetPage === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
});

var icon = document.getElementById("icon");
icon.onclick = function() {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.setAttribute("name", "sunny-outline");
  } else {
    icon.setAttribute("name", "moon-outline");
  }
};
