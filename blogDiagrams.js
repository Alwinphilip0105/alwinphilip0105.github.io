const blogDiagrams = {
  render(type, props) {
    if (this[type]) {
      return this[type](props);
    }
    return '';
  },

  // 1. Cover Post 1: People & Spark
  peopleSpark(props) {
    return `
      <svg viewBox="0 0 400 180" class="blog-diagram-svg" width="100%" height="100%">
        <defs>
          <radialGradient id="sparkGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="var(--orange-yellow-crayola)" stop-opacity="1" />
            <stop offset="100%" stop-color="var(--orange-yellow-crayola)" stop-opacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" rx="12" fill="var(--eerie-black-1)" />
        
        <!-- Left person & desk -->
        <g transform="translate(60, 40)">
          <rect x="0" y="50" width="80" height="40" rx="6" fill="var(--eerie-black-2)" stroke="var(--jet)" stroke-width="2" />
          <circle cx="40" cy="25" r="16" fill="var(--onyx)" stroke="var(--purple)" stroke-width="2" />
          <path d="M20,60 C20,45 60,45 60,60" fill="var(--onyx)" />
          <rect x="25" y="55" width="30" height="20" rx="3" fill="var(--jet)" />
          <text x="40" y="80" fill="var(--light-gray)" font-size="10" font-family="Poppins" text-anchor="middle">Skeptic Dev</text>
        </g>
        
        <!-- Center Spark Connection -->
        <path d="M140,90 Q200,50 260,90" fill="none" stroke="var(--orange-yellow-crayola)" stroke-width="2" stroke-dasharray="5 5" />
        <circle cx="200" cy="65" r="25" fill="url(#sparkGrad)" />
        <g transform="translate(192, 57)" fill="var(--orange-yellow-crayola)">
          <path d="M8,0 L10,5 L16,6 L11,10 L13,16 L8,12 L3,16 L5,10 L0,6 L6,5 Z" />
        </g>
        
        <!-- Right person & desk -->
        <g transform="translate(260, 40)">
          <rect x="0" y="50" width="80" height="40" rx="6" fill="var(--eerie-black-2)" stroke="var(--jet)" stroke-width="2" />
          <circle cx="40" cy="25" r="16" fill="var(--onyx)" stroke="var(--purple)" stroke-width="2" />
          <path d="M20,60 C20,45 60,45 60,60" fill="var(--onyx)" />
          <rect x="25" y="55" width="30" height="20" rx="3" fill="var(--orange-yellow-crayola)" opacity="0.3" />
          <text x="40" y="80" fill="var(--light-gray)" font-size="10" font-family="Poppins" text-anchor="middle">AI Assisted</text>
        </g>
      </svg>
    `;
  },

  // 2. Friction
  friction(props) {
    return `
      <svg viewBox="0 0 400 180" class="blog-diagram-svg" width="100%" height="100%">
        <rect width="100%" height="100%" rx="12" fill="var(--eerie-black-1)" />
        
        <!-- Central Gear -->
        <g transform="translate(200, 90)">
          <circle cx="0" cy="0" r="32" fill="var(--onyx)" stroke="var(--jet)" stroke-width="3" />
          ${[0, 45, 90, 135, 180, 225, 270, 315].map(deg => `
            <rect x="-8" y="-42" width="16" height="15" rx="3" fill="var(--onyx)" transform="rotate(${deg})" />
          `).join('')}
          <circle cx="0" cy="0" r="12" fill="var(--eerie-black-1)" />
          <text x="0" y="5" fill="var(--white-2)" font-size="10" font-family="Poppins" font-weight="600" text-anchor="middle">Workflow</text>
        </g>
        
        <!-- Blocker 1: Clock -->
        <g transform="translate(60, 90)">
          <circle cx="0" cy="0" r="22" fill="var(--eerie-black-2)" stroke="var(--bittersweet-shimmer)" stroke-width="2" />
          <path d="M0,-12 L0,0 L8,0" fill="none" stroke="var(--light-gray)" stroke-width="2" />
          <text x="0" y="36" fill="var(--light-gray)" font-size="10" font-family="Poppins" text-anchor="middle">Time Loss</text>
          <path d="M28,0 L60,0" fill="none" stroke="var(--bittersweet-shimmer)" stroke-width="2" marker-end="url(#redArrow)" stroke-dasharray="3 3" />
        </g>

        <!-- Blocker 2: Document (Repetitive Tasks) -->
        <g transform="translate(200, 25)">
          <rect x="-15" y="-15" width="30" height="30" rx="3" fill="var(--eerie-black-2)" stroke="var(--bittersweet-shimmer)" stroke-width="2" />
          <line x1="-8" y1="-7" x2="8" y2="-7" stroke="var(--light-gray)" stroke-width="1.5" />
          <line x1="-8" y1="0" x2="8" y2="0" stroke="var(--light-gray)" stroke-width="1.5" />
          <line x1="-8" y1="7" x2="2" y2="7" stroke="var(--light-gray)" stroke-width="1.5" />
          <text x="50" y="4" fill="var(--light-gray)" font-size="10" font-family="Poppins">Boilerplate</text>
        </g>
        
        <!-- Blocker 3: Refactor / Settings -->
        <g transform="translate(340, 90)">
          <circle cx="0" cy="0" r="22" fill="var(--eerie-black-2)" stroke="var(--bittersweet-shimmer)" stroke-width="2" />
          <path d="M-8,-8 L8,8 M8,-8 L-8,8" stroke="var(--light-gray)" stroke-width="2" />
          <text x="0" y="36" fill="var(--light-gray)" font-size="10" font-family="Poppins" text-anchor="middle">Busywork</text>
          <path d="M-28,0 L-60,0" fill="none" stroke="var(--bittersweet-shimmer)" stroke-width="2" marker-end="url(#redArrow)" stroke-dasharray="3 3" />
        </g>
        
        <defs>
          <marker id="redArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--bittersweet-shimmer)" />
          </marker>
        </defs>
      </svg>
    `;
  },
  
  // 3. Icon Row
  iconRow(props) {
    const items = props.items || [];
    return `
      <svg viewBox="0 0 400 130" class="blog-diagram-svg" width="100%" height="100%">
        <rect width="100%" height="100%" rx="12" fill="var(--eerie-black-1)" />
        
        <!-- Items -->
        ${items.map((item, idx) => {
          const width = 310 / items.length;
          const x = 50 + idx * width;
          return `
            <g transform="translate(${x}, 65)">
              <rect x="-35" y="-20" width="70" height="40" rx="6" fill="var(--eerie-black-2)" stroke="var(--jet)" stroke-width="1.5" />
              <text x="0" y="5" fill="var(--white-2)" font-size="9" font-family="Poppins" font-weight="500" text-anchor="middle">${item}</text>
              
              <!-- Connection Arrow -->
              ${idx < items.length - 1 ? `
                <path d="M38,0 L62,0" fill="none" stroke="var(--purple)" stroke-width="1.5" marker-end="url(#purpleArrow)" />
              ` : `
                <path d="M38,0 L85,0" fill="none" stroke="var(--orange-yellow-crayola)" stroke-width="1.5" marker-end="url(#goldArrow)" />
              `}
            </g>
          `;
        }).join('')}
        
        <!-- Copilot Node -->
        <g transform="translate(350, 65)">
          <circle cx="0" cy="0" r="22" fill="var(--onyx)" stroke="var(--orange-yellow-crayola)" stroke-width="2" />
          <text x="0" y="4" fill="var(--white-1)" font-size="9" font-family="Poppins" font-weight="600" text-anchor="middle">Copilot</text>
        </g>
        
        <defs>
          <marker id="purpleArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--purple)" />
          </marker>
          <marker id="goldArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--orange-yellow-crayola)" />
          </marker>
        </defs>
      </svg>
    `;
  },
  
  // 4. Branching
  branching(props) {
    const roles = props.roles || [];
    return `
      <svg viewBox="0 0 400 160" class="blog-diagram-svg" width="100%" height="100%">
        <rect width="100%" height="100%" rx="12" fill="var(--eerie-black-1)" />
        
        <!-- Central Hub -->
        <g transform="translate(60, 80)">
          <rect x="-40" y="-22" width="80" height="44" rx="8" fill="var(--onyx)" stroke="var(--orange-yellow-crayola)" stroke-width="2" />
          <text x="0" y="5" fill="var(--white-1)" font-size="11" font-family="Poppins" font-weight="600" text-anchor="middle">Copilot</text>
        </g>
        
        <!-- Branches -->
        ${roles.map((role, idx) => {
          const y = 30 + idx * 50;
          return `
            <path d="M100,80 Q165,${y} 220,${y}" fill="none" stroke="var(--jet)" stroke-width="2" />
            <g transform="translate(230, ${y})">
              <rect x="0" y="-20" width="130" height="40" rx="6" fill="var(--eerie-black-2)" stroke="var(--purple)" stroke-width="1.5" />
              <text x="10" y="-2" fill="var(--white-2)" font-size="9" font-family="Poppins" font-weight="600">${role.name}</text>
              <text x="10" y="12" fill="var(--light-gray-70)" font-size="8" font-family="Poppins">${role.use}</text>
            </g>
          `;
        }).join('')}
      </svg>
    `;
  },
  
  // 5. Document Compare
  documentCompare(props) {
    return `
      <svg viewBox="0 0 400 140" class="blog-diagram-svg" width="100%" height="100%">
        <rect width="100%" height="100%" rx="12" fill="var(--eerie-black-1)" />
        
        <!-- Left: Long Doc -->
        <g transform="translate(100, 70)">
          <rect x="-25" y="-40" width="50" height="80" rx="3" fill="var(--eerie-black-2)" stroke="var(--jet)" stroke-width="2" />
          <line x1="-15" y1="-28" x2="15" y2="-28" stroke="var(--light-gray-70)" stroke-width="2" />
          <line x1="-15" y1="-16" x2="15" y2="-16" stroke="var(--light-gray-70)" stroke-width="2" />
          <line x1="-15" y1="-4" x2="15" y2="-4" stroke="var(--light-gray-70)" stroke-width="2" />
          <line x1="-15" y1="8" x2="15" y2="8" stroke="var(--light-gray-70)" stroke-width="2" />
          <line x1="-15" y1="20" x2="5" y2="20" stroke="var(--light-gray-70)" stroke-width="2" />
          <circle cx="15" cy="24" r="8" fill="var(--bittersweet-shimmer)" />
          <text x="15" y="27" fill="#ffffff" font-size="10" font-family="Poppins" font-weight="600" text-anchor="middle">×</text>
          <text x="0" y="54" fill="var(--light-gray)" font-size="9" font-family="Poppins" text-anchor="middle">40-Page Manual</text>
        </g>
        
        <!-- Right: Short Doc -->
        <g transform="translate(300, 70)">
          <rect x="-25" y="-25" width="50" height="50" rx="3" fill="var(--eerie-black-2)" stroke="var(--purple)" stroke-width="2" />
          <line x1="-15" y1="-14" x2="15" y2="-14" stroke="var(--light-gray-70)" stroke-width="2" />
          <line x1="-15" y1="-3" x2="15" y2="-3" stroke="var(--light-gray-70)" stroke-width="2" />
          <line x1="-15" y1="8" x2="5" y2="8" stroke="var(--light-gray-70)" stroke-width="2" />
          <circle cx="15" cy="12" r="8" fill="#2e7d32" />
          <path d="M12,12 L14,14 L18,10" fill="none" stroke="#ffffff" stroke-width="1.5" />
          <text x="0" y="40" fill="var(--light-gray)" font-size="9" font-family="Poppins" text-anchor="middle">Short Guide</text>
        </g>
      </svg>
    `;
  },
  
  // 6. Bar Compare
  barCompare(props) {
    const beforeVal = props.beforeVal || 100;
    const afterVal = props.afterVal || 40;
    const unit = props.unit || "min";
    const label = props.label || "Task Time";
    return `
      <svg viewBox="0 0 400 130" class="blog-diagram-svg" width="100%" height="100%">
        <rect width="100%" height="100%" rx="12" fill="var(--eerie-black-1)" />
        
        <text x="30" y="25" fill="var(--white-2)" font-size="10" font-family="Poppins" font-weight="600">${label}</text>
        
        <!-- Before -->
        <text x="30" y="55" fill="var(--light-gray-70)" font-size="9" font-family="Poppins">Before</text>
        <rect x="80" y="45" width="220" height="15" rx="3" fill="var(--eerie-black-2)" stroke="var(--jet)" stroke-width="1.5" />
        <rect x="80" y="45" width="220" height="15" rx="3" fill="var(--purple)" />
        <text x="310" y="57" fill="var(--white-2)" font-size="9" font-family="Poppins">${beforeVal} ${unit}</text>
        
        <!-- After -->
        <text x="30" y="90" fill="var(--light-gray-70)" font-size="9" font-family="Poppins">After</text>
        <rect x="80" y="80" width="220" height="15" rx="3" fill="var(--eerie-black-2)" stroke="var(--jet)" stroke-width="1.5" />
        <rect x="80" y="80" width="${(afterVal / beforeVal) * 220}" height="15" rx="3" fill="var(--orange-yellow-crayola)" />
        <text x="310" y="92" fill="var(--white-2)" font-size="9" font-family="Poppins">${afterVal} ${unit}</text>
      </svg>
    `;
  },
  
  // 7. Metric Callout / Row
  metricCallout(props) {
    const metrics = props.metrics || [{ val: props.val, label: props.label }];
    return `
      <svg viewBox="0 0 400 120" class="blog-diagram-svg" width="100%" height="100%">
        <rect width="100%" height="100%" rx="12" fill="var(--eerie-black-1)" />
        
        ${metrics.map((m, idx) => {
          const width = 400 / metrics.length;
          const x = width * idx + width / 2;
          return `
            <g transform="translate(${x}, 60)">
              <text x="0" y="-5" fill="var(--orange-yellow-crayola)" font-size="28" font-family="Poppins" font-weight="600" text-anchor="middle">${m.val}</text>
              <text x="0" y="20" fill="var(--white-2)" font-size="9" font-family="Poppins" text-anchor="middle">${m.label}</text>
              ${idx < metrics.length - 1 ? `
                <line x1="${width / 2}" y1="-30" x2="${width / 2}" y2="30" stroke="var(--jet)" stroke-width="1" />
              ` : ''}
            </g>
          `;
        }).join('')}
      </svg>
    `;
  },
  
  // 8. Shield & CPU
  shieldCpu(props) {
    return `
      <svg viewBox="0 0 400 180" class="blog-diagram-svg" width="100%" height="100%">
        <rect width="100%" height="100%" rx="12" fill="var(--eerie-black-1)" />
        
        <!-- Large Shield -->
        <g transform="translate(140, 90)">
          <path d="M-25,-35 L25,-35 C25,-35 25,5 0,32 C-25,5 -25,-35 -25,-35 Z" fill="var(--eerie-black-2)" stroke="var(--orange-yellow-crayola)" stroke-width="2.5" />
          <path d="M-18,-28 L18,-28 C18,-28 18,2 0,22 C-18,2 -18,-28 -18,-28 Z" fill="var(--onyx)" opacity="0.4" />
        </g>
        
        <!-- CPU Chip -->
        <g transform="translate(260, 90)">
          ${[-16, -8, 0, 8, 16].map(coord => `
            <line x1="${coord}" y1="-28" x2="${coord}" y2="28" stroke="var(--purple)" stroke-width="1.5" />
            <line x1="-28" y1="${coord}" x2="28" y2="${coord}" stroke="var(--purple)" stroke-width="1.5" />
          `).join('')}
          <rect x="-20" y="-20" width="40" height="40" rx="4" fill="var(--eerie-black-2)" stroke="var(--jet)" stroke-width="1.5" />
          <rect x="-10" y="-10" width="20" height="20" rx="2" fill="var(--purple)" />
          <text x="0" y="3" fill="var(--white-1)" font-size="7" font-family="Poppins" font-weight="600" text-anchor="middle">LOCAL</text>
        </g>
        
        <!-- Connection line -->
        <path d="M170,90 L225,90" fill="none" stroke="var(--orange-yellow-crayola)" stroke-width="1.5" stroke-dasharray="3 3" />
      </svg>
    `;
  },
  
  // 9. Typical vs Local
  typicalVsLocal(props) {
    return `
      <svg viewBox="0 0 420 180" class="blog-diagram-svg" width="100%" height="100%">
        <rect width="100%" height="100%" rx="12" fill="var(--eerie-black-1)" />
        
        <!-- Row 1: Typical Cloud Agent -->
        <g transform="translate(10, 30)">
          <text x="10" y="22" fill="var(--white-2)" font-size="9" font-family="Poppins" font-weight="600">TYPICAL CLOUD AGENT</text>
          <rect x="150" y="8" width="55" height="25" rx="3" fill="var(--eerie-black-2)" stroke="var(--jet)" />
          <text x="177" y="24" fill="var(--light-gray)" font-size="8" font-family="Poppins" text-anchor="middle">Device</text>
          
          <path d="M210,20 L285,20" fill="none" stroke="var(--bittersweet-shimmer)" stroke-width="1.5" marker-end="url(#redArrow)" />
          <circle cx="245" cy="11" r="6" fill="var(--bittersweet-shimmer)" />
          <text x="245" y="14" fill="#ffffff" font-size="7" font-family="Poppins" font-weight="600" text-anchor="middle">!</text>
          
          <rect x="290" y="8" width="100" height="25" rx="3" fill="var(--eerie-black-2)" stroke="var(--bittersweet-shimmer)" />
          <text x="340" y="24" fill="var(--white-2)" font-size="8" font-family="Poppins" text-anchor="middle">Cloud API (Risk)</text>
        </g>
        
        <!-- Row 2: Core Sentinel Local Agent -->
        <g transform="translate(10, 100)">
          <text x="10" y="22" fill="var(--white-2)" font-size="9" font-family="Poppins" font-weight="600">CORE SENTINEL (LOCAL)</text>
          <rect x="150" y="6" width="115" height="34" rx="4" fill="var(--onyx)" stroke="var(--orange-yellow-crayola)" stroke-width="1.5" />
          <text x="207" y="24" fill="var(--white-1)" font-size="8" font-family="Poppins" font-weight="600" text-anchor="middle">Device (ONNX Local)</text>
          
          <path d="M275,23 A12,12 0 1,1 275,22" fill="none" stroke="var(--orange-yellow-crayola)" stroke-width="1.5" marker-end="url(#goldArrow)" />
          <text x="325" y="26" fill="var(--orange-yellow-crayola)" font-size="9" font-family="Poppins">Zero Outbound</text>
        </g>
        
        <defs>
          <marker id="redArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--bittersweet-shimmer)" />
          </marker>
        </defs>
      </svg>
    `;
  },
  
  // 10. Model Shrink
  modelShrink(props) {
    return `
      <svg viewBox="0 0 400 130" class="blog-diagram-svg" width="100%" height="100%">
        <rect width="100%" height="100%" rx="12" fill="var(--eerie-black-1)" />
        
        <g transform="translate(80, 65)">
          <rect x="-35" y="-25" width="70" height="50" rx="4" fill="var(--eerie-black-2)" stroke="var(--jet)" stroke-width="1.5" />
          <text x="0" y="2" fill="var(--white-2)" font-size="10" font-family="Poppins" font-weight="600" text-anchor="middle">TinyBERT</text>
          <text x="0" y="14" fill="var(--light-gray-70)" font-size="8" font-family="Poppins" text-anchor="middle">Raw Model</text>
        </g>
        
        <g transform="translate(195, 65)">
          <path d="M-20,0 L10,0" fill="none" stroke="var(--purple)" stroke-width="2.5" marker-end="url(#purpleArrow)" />
          <text x="-5" y="-10" fill="var(--purple)" font-size="8" font-family="Poppins" font-weight="600" text-anchor="middle">Quantization</text>
        </g>
        
        <g transform="translate(310, 65)">
          <rect x="-35" y="-22" width="70" height="44" rx="4" fill="var(--onyx)" stroke="var(--orange-yellow-crayola)" stroke-width="1.5" />
          <text x="0" y="2" fill="var(--white-1)" font-size="9" font-family="Poppins" font-weight="600" text-anchor="middle">ONNX</text>
          <text x="0" y="12" fill="var(--orange-yellow-crayola)" font-size="8" font-family="Poppins" font-weight="600" text-anchor="middle">&lt;100ms</text>
        </g>
      </svg>
    `;
  },
  
  // 11. Hub & Spoke
  hubSpoke(props) {
    return `
      <svg viewBox="0 0 400 150" class="blog-diagram-svg" width="100%" height="100%">
        <rect width="100%" height="100%" rx="12" fill="var(--eerie-black-1)" />
        
        <g transform="translate(200, 75)">
          <circle cx="0" cy="0" r="26" fill="var(--onyx)" stroke="var(--orange-yellow-crayola)" stroke-width="2" />
          <text x="0" y="3" fill="var(--white-1)" font-size="8" font-family="Poppins" font-weight="600" text-anchor="middle">pywin32 API</text>
        </g>
        
        ${[
          { x: 90, y: 35, label: "Chrome" },
          { x: 310, y: 35, label: "Word" },
          { x: 90, y: 115, label: "Excel" },
          { x: 310, y: 115, label: "Teams" }
        ].map(node => `
          <line x1="200" y1="75" x2="${node.x}" y2="${node.y}" stroke="var(--jet)" stroke-width="1.5" />
          <g transform="translate(${node.x}, ${node.y})">
            <rect x="-30" y="-12" width="60" height="24" rx="3" fill="var(--eerie-black-2)" stroke="var(--purple)" stroke-width="1" />
            <text x="0" y="3" fill="var(--white-2)" font-size="8" font-family="Poppins" text-anchor="middle">${node.label}</text>
          </g>
        `).join('')}
      </svg>
    `;
  },
  
  // 12. Config Adjustment
  configAdjustment(props) {
    return `
      <svg viewBox="0 0 400 140" class="blog-diagram-svg" width="100%" height="100%">
        <rect width="100%" height="100%" rx="12" fill="var(--eerie-black-1)" />
        
        <g transform="translate(100, 70)">
          <rect x="-30" y="-35" width="60" height="70" rx="3" fill="var(--eerie-black-2)" stroke="var(--orange-yellow-crayola)" stroke-width="1.5" />
          <text x="-20" y="-18" fill="var(--orange-yellow-crayola)" font-size="8" font-family="Courier New">rules:</text>
          <text x="-12" y="-7" fill="var(--light-gray)" font-size="7" font-family="Courier New">- PII: block</text>
          <text x="-12" y="4" fill="var(--light-gray)" font-size="7" font-family="Courier New">- SSN: mask</text>
          <text x="0" y="50" fill="var(--light-gray)" font-size="9" font-family="Poppins" text-anchor="middle">YAML Rules</text>
        </g>
        
        <g transform="translate(300, 70)">
          <rect x="-30" y="-35" width="60" height="70" rx="3" fill="var(--eerie-black-2)" stroke="var(--jet)" stroke-width="1" />
          <circle cx="0" cy="-5" r="16" fill="none" stroke="var(--bittersweet-shimmer)" stroke-width="2.5" />
          <line x1="-11" y1="-16" x2="11" y2="6" stroke="var(--bittersweet-shimmer)" stroke-width="2.5" />
          <text x="0" y="-2" fill="var(--light-gray-70)" font-size="9" font-family="Poppins" text-anchor="middle">Dev Ticket</text>
          <text x="0" y="50" fill="var(--light-gray)" font-size="9" font-family="Poppins" text-anchor="middle">Direct Edit</text>
        </g>
      </svg>
    `;
  },
  
  // 13. Mock UI
  mockUI(props) {
    return `
      <svg viewBox="0 0 400 150" class="blog-diagram-svg" width="100%" height="100%">
        <rect width="100%" height="100%" rx="12" fill="var(--eerie-black-1)" />
        
        <rect x="40" y="20" width="320" height="110" rx="5" fill="var(--eerie-black-2)" stroke="var(--jet)" stroke-width="1.5" />
        <line x1="40" y1="35" x2="360" y2="35" stroke="var(--jet)" stroke-width="1" />
        
        <circle cx="50" cy="27" r="2.5" fill="#ff5f56" />
        <circle cx="58" cy="27" r="2.5" fill="#ffbd2e" />
        <circle cx="66" cy="27" r="2.5" fill="#27c93f" />
        
        <g transform="translate(225, 45)">
          <rect x="0" y="0" width="120" height="46" rx="5" fill="var(--onyx)" stroke="var(--orange-yellow-crayola)" stroke-width="1.5" />
          <text x="10" y="16" fill="var(--orange-yellow-crayola)" font-size="8" font-family="Poppins" font-weight="600">Compliance Nudge</text>
          <text x="10" y="30" fill="var(--white-1)" font-size="8" font-family="Poppins">Protected Data - Masked</text>
        </g>
        
        <line x1="55" y1="55" x2="160" y2="55" stroke="var(--jet)" stroke-width="2" />
        <line x1="55" y1="70" x2="185" y2="70" stroke="var(--jet)" stroke-width="2" />
        <line x1="55" y1="85" x2="110" y2="85" stroke="var(--jet)" stroke-width="2" />
      </svg>
    `;
  },
  
  // 14. Scatter Plot 3D
  scatterPlot3D(props) {
    return `
      <svg viewBox="0 0 400 180" class="blog-diagram-svg" width="100%" height="100%">
        <rect width="100%" height="100%" rx="12" fill="var(--eerie-black-1)" />
        
        <g transform="translate(200, 100)" stroke="var(--jet)" stroke-width="1" opacity="0.6">
          <line x1="-120" y1="40" x2="0" y2="-40" />
          <line x1="120" y1="40" x2="0" y2="-40" />
          <line x1="-160" y1="0" x2="160" y2="0" />
          <line x1="-60" y1="20" x2="60" y2="-20" />
          <line x1="60" y1="20" x2="-60" y2="-20" />
        </g>
        
        ${[
          { x: 120, y: 110, h: 40, col: "var(--orange-yellow-crayola)" },
          { x: 160, y: 90, h: 25, col: "var(--purple)" },
          { x: 180, y: 130, h: 55, col: "var(--orange-yellow-crayola)" },
          { x: 220, y: 80, h: 30, col: "var(--purple)" },
          { x: 250, y: 110, h: 50, col: "var(--orange-yellow-crayola)" },
          { x: 280, y: 95, h: 15, col: "var(--purple)" }
        ].map(p => `
          <line x1="${p.x}" y1="${p.y}" x2="${p.x}" y2="${p.y - p.h}" stroke="var(--jet)" stroke-dasharray="2 2" />
          <circle cx="${p.x}" cy="${p.y}" r="1.5" fill="var(--light-gray-70)" opacity="0.6" />
          <circle cx="${p.x}" cy="${p.y - p.h}" r="5" fill="${p.col}" />
        `).join('')}
        
        <text x="35" y="140" fill="var(--light-gray-70)" font-size="8" font-family="Poppins">X Coordinate</text>
        <text x="200" y="30" fill="var(--light-gray-70)" font-size="8" font-family="Poppins" text-anchor="middle">Y Coordinate</text>
        <text x="340" y="140" fill="var(--light-gray-70)" font-size="8" font-family="Poppins">Z Level</text>
      </svg>
    `;
  },
  
  // 15. Spreadsheet vs Map
  spreadsheetVsMap(props) {
    return `
      <svg viewBox="0 0 400 130" class="blog-diagram-svg" width="100%" height="100%">
        <rect width="100%" height="100%" rx="12" fill="var(--eerie-black-1)" />
        
        <g transform="translate(30, 25)">
          <rect x="0" y="0" width="120" height="80" rx="3" fill="var(--eerie-black-2)" stroke="var(--jet)" stroke-width="1.5" />
          <line x1="0" y1="20" x2="120" y2="20" stroke="var(--jet)" />
          <line x1="0" y1="40" x2="120" y2="40" stroke="var(--jet)" />
          <line x1="0" y1="60" x2="120" y2="60" stroke="var(--jet)" />
          <line x1="30" y1="0" x2="30" y2="80" stroke="var(--jet)" />
          <line x1="75" y1="0" x2="75" y2="80" stroke="var(--jet)" />
          
          <text x="15" y="12" fill="var(--light-gray-70)" font-size="7" font-family="Poppins" text-anchor="middle">ID</text>
          <text x="52" y="12" fill="var(--light-gray-70)" font-size="7" font-family="Poppins" text-anchor="middle">X Coord</text>
          <text x="97" y="12" fill="var(--light-gray-70)" font-size="7" font-family="Poppins" text-anchor="middle">Y Coord</text>
          
          <text x="75" y="93" fill="var(--light-gray)" font-size="9" font-family="Poppins" text-anchor="middle">Static Spreadsheet</text>
        </g>
        
        <path d="M175,65 L215,65" fill="none" stroke="var(--purple)" stroke-width="2" marker-end="url(#purpleArrow)" />
        
        <g transform="translate(250, 25)">
          <rect x="0" y="0" width="120" height="80" rx="3" fill="var(--eerie-black-2)" stroke="var(--jet)" stroke-width="1.5" />
          <circle cx="20" cy="20" r="3" fill="var(--orange-yellow-crayola)" />
          <circle cx="60" cy="50" r="3" fill="var(--orange-yellow-crayola)" />
          <circle cx="100" cy="30" r="3" fill="var(--orange-yellow-crayola)" />
          <circle cx="40" cy="60" r="3" fill="var(--purple)" />
          <circle cx="80" cy="25" r="3" fill="var(--purple)" />
          
          ${[15, 35, 55, 75, 95, 115].map(x => `
            <circle cx="${x}" cy="10" r="0.5" fill="var(--jet)" />
            <circle cx="${x}" cy="30" r="0.5" fill="var(--jet)" />
            <circle cx="${x}" cy="50" r="0.5" fill="var(--jet)" />
            <circle cx="${x}" cy="70" r="0.5" fill="var(--jet)" />
          `).join('')}
          <text x="60" y="93" fill="var(--light-gray)" font-size="9" font-family="Poppins" text-anchor="middle">3D Site Map</text>
        </g>
      </svg>
    `;
  },
  
  // 16. Interactive Scatter Plot
  interactiveScatterPlot(props) {
    return `
      <svg viewBox="0 0 400 130" class="blog-diagram-svg" width="100%" height="100%">
        <rect width="100%" height="100%" rx="12" fill="var(--eerie-black-1)" />
        
        <g transform="translate(200, 65)" stroke="var(--jet)" stroke-width="1" opacity="0.6">
          <line x1="-80" y1="15" x2="80" y2="-15" />
          <line x1="-80" y1="-15" x2="80" y2="15" />
          <circle cx="-30" cy="5" r="3.5" fill="var(--purple)" />
          <circle cx="15" cy="-10" r="3.5" fill="var(--orange-yellow-crayola)" />
          <circle cx="40" cy="5" r="3.5" fill="var(--orange-yellow-crayola)" />
        </g>
        
        <g transform="translate(30, 30)">
          <circle cx="0" cy="0" r="12" fill="var(--eerie-black-2)" stroke="var(--jet)" stroke-width="1" />
          <path d="M-5,-3 A6,6 0 1,1 5,3" fill="none" stroke="var(--light-gray)" stroke-width="1" marker-end="url(#purpleArrow)" />
          <text x="0" y="22" fill="var(--light-gray-70)" font-size="8" font-family="Poppins" text-anchor="middle">Rotate</text>
        </g>
        
        <g transform="translate(30, 90)">
          <circle cx="0" cy="0" r="12" fill="var(--eerie-black-2)" stroke="var(--jet)" stroke-width="1" />
          <circle cx="-1.5" cy="-1.5" r="4" fill="none" stroke="var(--light-gray)" stroke-width="1" />
          <line x1="1" y1="1" x2="5" y2="5" stroke="var(--light-gray)" stroke-width="1.5" />
          <text x="0" y="22" fill="var(--light-gray-70)" font-size="8" font-family="Poppins" text-anchor="middle">Zoom</text>
        </g>
      </svg>
    `;
  },
  
  // 17. DBSCAN Cluster
  cluster(props) {
    return `
      <svg viewBox="0 0 400 130" class="blog-diagram-svg" width="100%" height="100%">
        <rect width="100%" height="100%" rx="12" fill="var(--eerie-black-1)" />
        
        ${[40, 80, 120, 160, 200, 240, 280, 320, 360].map(x => `
          ${[20, 45, 70, 95, 110].map(y => `
            <circle cx="${x}" cy="${y}" r="0.5" fill="var(--jet)" opacity="0.3" />
          `).join('')}
        `).join('')}
        
        <!-- Cluster 1 -->
        <ellipse cx="120" cy="65" rx="35" ry="25" fill="var(--orange-yellow-crayola)" opacity="0.15" stroke="var(--orange-yellow-crayola)" stroke-width="1" stroke-dasharray="3 3" />
        <circle cx="100" cy="55" r="4.5" fill="var(--orange-yellow-crayola)" />
        <circle cx="130" cy="75" r="4.5" fill="var(--orange-yellow-crayola)" />
        <circle cx="115" cy="70" r="4.5" fill="var(--orange-yellow-crayola)" />
        <text x="120" y="112" fill="var(--orange-yellow-crayola)" font-size="8" font-family="Poppins" text-anchor="middle">Plot A</text>
        
        <!-- Cluster 2 -->
        <ellipse cx="280" cy="65" rx="35" ry="25" fill="var(--purple)" opacity="0.15" stroke="var(--purple)" stroke-width="1" stroke-dasharray="3 3" />
        <circle cx="260" cy="50" r="4.5" fill="var(--purple)" />
        <circle cx="290" cy="70" r="4.5" fill="var(--purple)" />
        <circle cx="270" cy="75" r="4.5" fill="var(--purple)" />
        <text x="280" y="112" fill="var(--purple)" font-size="8" font-family="Poppins" text-anchor="middle">Plot B</text>
      </svg>
    `;
  },
  
  // 18. Bayesian Confidence Gauge
  confidenceGauge(props) {
    const val = props.val || 60;
    const angle = (val / 100) * 180 - 180;
    return `
      <svg viewBox="0 0 400 150" class="blog-diagram-svg" width="100%" height="100%">
        <rect width="100%" height="100%" rx="12" fill="var(--eerie-black-1)" />
        
        <g transform="translate(200, 110)">
          <path d="M-80,0 A80,80 0 0,1 80,0" fill="none" stroke="var(--eerie-black-2)" stroke-width="15" />
          <path d="M-80,0 A80,80 0 0,1 -26,-75.6" fill="none" stroke="var(--bittersweet-shimmer)" stroke-width="15" />
          <path d="M-26,-75.6 A80,80 0 0,1 26,-75.6" fill="none" stroke="var(--orange-yellow-crayola)" stroke-width="15" />
          <path d="M26,-75.6 A80,80 0 0,1 80,0" fill="none" stroke="#2e7d32" stroke-width="15" />
          
          <g transform="rotate(${angle})">
            <line x1="0" y1="0" x2="70" y2="0" stroke="var(--white-2)" stroke-width="3.5" stroke-linecap="round" />
            <polygon points="65,-5 78,0 65,5" fill="var(--white-2)" />
          </g>
          <circle cx="0" cy="0" r="9" fill="var(--white-2)" />
          <circle cx="0" cy="0" r="3.5" fill="var(--eerie-black-1)" />
          <text x="0" y="26" fill="var(--orange-yellow-crayola)" font-size="16" font-family="Poppins" font-weight="600" text-anchor="middle">${val}% Confidence</text>
        </g>
      </svg>
    `;
  },
  
  // 19. Google Sheets pipeline
  pipeline(props) {
    return `
      <svg viewBox="0 0 400 130" class="blog-diagram-svg" width="100%" height="100%">
        <rect width="100%" height="100%" rx="12" fill="var(--eerie-black-1)" />
        
        <!-- Sheets -->
        <g transform="translate(60, 65)">
          <rect x="-20" y="-20" width="40" height="40" rx="4" fill="var(--eerie-black-2)" stroke="var(--purple)" stroke-width="1.5" />
          <rect x="-12" y="-12" width="24" height="6" fill="#2e7d32" opacity="0.8" />
          <rect x="-12" y="-2" width="24" height="6" fill="var(--jet)" />
          <rect x="-12" y="8" width="24" height="6" fill="var(--jet)" />
          <text x="0" y="34" fill="var(--light-gray)" font-size="9" font-family="Poppins" text-anchor="middle">Google Sheets</text>
        </g>
        
        <!-- Sync -->
        <g transform="translate(140, 65)">
          <path d="M-20,0 L15,0" fill="none" stroke="var(--purple)" stroke-width="2" marker-end="url(#purpleArrow)" />
          <text x="-2" y="-8" fill="var(--purple)" font-size="8" font-family="Poppins" font-weight="600" text-anchor="middle">Sync</text>
        </g>
        
        <!-- Dashboard -->
        <g transform="translate(200, 65)">
          <rect x="-22" y="-22" width="44" height="44" rx="4" fill="var(--eerie-black-2)" stroke="var(--jet)" stroke-width="1.5" />
          <rect x="-16" y="-16" width="32" height="6" fill="var(--onyx)" />
          <circle cx="-8" cy="8" r="6" fill="var(--orange-yellow-crayola)" />
          <rect x="4" y="4" width="12" height="12" fill="var(--purple)" />
          <text x="0" y="34" fill="var(--light-gray)" font-size="9" font-family="Poppins" text-anchor="middle">Dashboard</text>
        </g>
        
        <!-- Deploy -->
        <g transform="translate(280, 65)">
          <path d="M-20,0 L15,0" fill="none" stroke="var(--orange-yellow-crayola)" stroke-width="2" marker-end="url(#goldArrow)" />
          <text x="-2" y="-8" fill="var(--orange-yellow-crayola)" font-size="8" font-family="Poppins" font-weight="600" text-anchor="middle">Netlify CI</text>
        </g>
        
        <!-- Live Site -->
        <g transform="translate(340, 65)">
          <circle cx="0" cy="0" r="20" fill="var(--onyx)" stroke="var(--orange-yellow-crayola)" stroke-width="2" />
          <text x="0" y="3" fill="var(--white-1)" font-size="9" font-family="Poppins" font-weight="600" text-anchor="middle">Live Site</text>
        </g>
      </svg>
    `;
  },
  
  // 20. Before / After Compare
  beforeAfterCompare(props) {
    return `
      <svg viewBox="0 0 400 130" class="blog-diagram-svg" width="100%" height="100%">
        <rect width="100%" height="100%" rx="12" fill="var(--eerie-black-1)" />
        
        <!-- Left: Before -->
        <g transform="translate(100, 65)">
          <rect x="-35" y="-25" width="70" height="50" rx="3" fill="var(--eerie-black-2)" stroke="var(--jet)" stroke-width="1.5" />
          <line x1="-25" y1="-14" x2="25" y2="-14" stroke="var(--jet)" stroke-width="2" />
          <line x1="-25" y1="-4" x2="25" y2="-4" stroke="var(--jet)" stroke-width="2" />
          <line x1="-25" y1="6" x2="5" y2="6" stroke="var(--jet)" stroke-width="2" />
          <text x="0" y="40" fill="var(--light-gray)" font-size="9" font-family="Poppins" text-anchor="middle">Spreadsheet</text>
        </g>
        
        <!-- Arrow -->
        <g transform="translate(200, 65)">
          <path d="M-15,0 L15,0" fill="none" stroke="var(--purple)" stroke-width="2" marker-end="url(#purpleArrow)" />
        </g>
        
        <!-- Right: After -->
        <g transform="translate(300, 65)">
          <rect x="-35" y="-30" width="70" height="60" rx="4" fill="var(--onyx)" stroke="var(--orange-yellow-crayola)" stroke-width="1.5" />
          <rect x="-25" y="-20" width="22" height="16" fill="var(--eerie-black-2)" rx="2" />
          <rect x="3" y="-20" width="22" height="16" fill="var(--eerie-black-2)" rx="2" />
          <rect x="-25" y="2" width="50" height="16" fill="var(--eerie-black-2)" rx="2" />
          <circle cx="-14" cy="-12" r="4" fill="var(--orange-yellow-crayola)" />
          <rect x="8" y="-16" width="12" height="8" fill="var(--purple)" />
          <text x="0" y="43" fill="var(--light-gray)" font-size="9" font-family="Poppins" text-anchor="middle">3D Dashboard</text>
        </g>
      </svg>
    `;
  }
};
