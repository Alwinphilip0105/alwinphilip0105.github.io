const blogPosts = [
  {
    slug: "rutgers-graduate-featured",
    coverImage: "images/rutgers-graduation-banner.png",
    readingTime: "2 min read",
    format: "narrative",
    title: "Featured by Rutgers Graduate School of Arts and Sciences",
    date: "2026-07-15",
    tags: ["leadership", "rutgers", "community", "spotlight"],
    summary: "Honored to be featured by the Graduate School of Arts and Sciences at Rutgers-Camden for balancing AI/ML research, student leadership, and GSO advocacy.",
    sections: [
      {
        heading: null,
        text: "Getting a feature from the Rutgers Graduate School of Arts and Sciences wasn't something I had on my radar. I was heads-down finishing my thesis project, wrapping up GSO responsibilities, and preparing for graduation — and then the email came in. Genuinely caught me off guard.",
        graphic: null
      },
      {
        heading: "Leading the Graduate Student Organization",
        text: "I served as President of the Rutgers Graduate Student Organization (GSO) at Rutgers-Camden for the past year. The role was less glamorous than the title sounds — a lot of it was emails, logistics, and making sure the right people were in the same room at the right time. But it also meant being the person advocating for international students navigating visa bureaucracy, organizing the campus hackathon, and representing graduate student concerns at the university level.\n\nWe also took that advocacy to Washington, D.C., which was its own kind of experience — sitting in rooms where funding decisions get made and realizing that showing up matters more than most people think.",
        graphic: {
          type: "peopleSpark",
          props: {},
          caption: "Advocating for international and graduate student resources at Rutgers-Camden."
        }
      },
      {
        heading: "What the Spotlight Actually Means",
        text: "The feature highlighted the balance between research, leadership, and student life — which is a generous framing for what mostly felt like juggling too many things at once. But I think that's the honest version of grad school for a lot of people, especially those of us who came in with goals outside of just the degree.\n\nI'm grateful Rutgers-Camden took the time to spotlight graduate students this way. And if anyone reading this is on the fence about getting involved in their campus community — do it. The work compounds in ways you don't see until later.",
        graphic: null
      }
    ],
    closingNote: "Truly humbled by the feature — this journey has been about community, growth, and memories I'll carry forever."
  },

  {
    slug: "agents-in-production",
    coverImage: "images/agents-production-banner.png",
    readingTime: "6 min read",
    format: "narrative",
    title: "What Building Agents in Production Actually Looks Like",
    date: "2026-08-08",
    tags: ["claude-code", "agentic-ai", "ehr-automation", "production-ml", "healthcare"],
    summary: "Six months into building agentic AI systems for healthcare automation with Claude Code, here's what nobody's demo video tells you about the gap between 'the agent works' and 'the agent works in production.'",
    sections: [
      {
        heading: null,
        text: "Most agentic AI content online is a demo: watch an agent complete a multi-step task in a clean sandbox, cut to applause. What that format almost never shows is what happens when the same agent has to run continuously, on real data, inside a system that other people already depend on — where \"it worked that one time I recorded it\" isn't the bar.\n\nAt Beacon Health AI, I work on agentic systems that automate real operational work inside EHR workflows — things like document intake and processing that used to require a person reading a fax line by line and typing it into the right fields. The demo version of this is easy to imagine. The production version is where almost all the actual engineering happens, and it's the part I want to write about.",
        graphic: {
          type: "agentObservability",
          props: {},
          caption: "What a real agent decision trace looks like — not a happy path, but a branching system with a logging layer underneath every move."
        }
      },
      {
        heading: "Building with Claude Code Changes What Writing the Agent Even Means",
        text: "A meaningful amount of my day-to-day is spent working inside Claude Code — not just asking it to write a function, but using it as an active collaborator for debugging agent behavior, reasoning through edge cases, and iterating on how the agent itself should be structured.\n\nThe workflow looks less like \"write code, then test it\" and more like a continuous back-and-forth: describe the failure, look at what actually happened, adjust the approach, try again. That loop is faster than traditional debugging, but it also means you have to get much more disciplined about how you describe problems — because a vague prompt gets you a vague fix.",
        graphic: {
          type: "agentDebugLoop",
          props: {},
          caption: "The Claude Code debug loop in practice — four steps that compress what used to take hours into a tight, repeatable iteration cycle."
        }
      },
      {
        heading: "The Hard Part Isn't the Happy Path",
        text: "Any agent can handle the input that looks like every other input it's seen before. What actually takes the engineering time is the long tail: a fax that's rotated 90 degrees, a form field that's been handwritten over a printed template, a document that's technically valid but structured in a way nobody anticipated.\n\nProduction agent work is mostly the accumulation of handling one more edge case than you handled yesterday. That's unglamorous — it doesn't make for a great slide deck — but it's where the actual reliability lives.",
        graphic: {
          type: "friction",
          props: {},
          caption: "Where production agent time actually goes — not model quality, but edge cases, malformed inputs, and the long tail of things nobody thought to test."
        }
      },
      {
        heading: "Observability Has to Exist Before You Need It, Not After",
        text: "Early on, when something went wrong, my honest answer to \"why did the agent do that?\" was sometimes just: I don't know. That's not an acceptable answer in a system touching real operational data.\n\nA real chunk of the engineering effort has gone into making agent decisions traceable after the fact — logging not just what the agent did, but what it saw and why it chose that path — so a failure becomes a five-minute investigation instead of a guessing game. If you can't reconstruct the decision, you can't fix it confidently. And if you can't fix it confidently, you're just patching until the next failure.",
        graphic: null
      },
      {
        heading: "Multiple Systems of Record Means Multiple Sources of Truth",
        text: "A recurring theme in this work is reconciling data across systems that don't always agree with each other. Deciding which system to trust, and building validation that catches discrepancies before they propagate downstream, has been just as important as anything about the AI itself.\n\nThis is the unglamorous 80% of agentic engineering that never makes it into a conference talk. It's also the part where most of the actual risk lives.",
        graphic: {
          type: "branching",
          props: {
            roles: [
              { name: "EHR System A", use: "Source of record for patient intake" },
              { name: "EHR System B", use: "Billing and claims data" },
              { name: "Agent Layer", use: "Reconcile, validate, flag conflicts" }
            ]
          },
          caption: "When multiple systems disagree, the agent has to decide who to trust — and that decision needs to be logged, auditable, and reversible."
        }
      },
      {
        heading: "Guardrails Aren't a Checkbox — They're Ongoing Design Work",
        text: "Working in healthcare-adjacent automation means every agent decision has to be built with the assumption that it could be wrong, and the system needs to fail safely when it is — flagging for human review rather than confidently pushing a bad output downstream.\n\nThat tension — between making the agent genuinely useful (autonomous enough to save real time) and keeping a human in the loop where it matters — is something I've had to actively design around rather than solve once and move on. The goal isn't a fully autonomous agent. The goal is an agent that's reliably right, and reliably catchable when it isn't.",
        graphic: {
          type: "metricCallout",
          props: {
            metrics: [
              { val: "Auto", label: "high-confidence decisions" },
              { val: "Flag", label: "uncertain outputs → human review" },
              { val: "0", label: "silent failures by design" }
            ]
          },
          caption: "The only metric that matters at the end of the day: the people who rely on this system trust it enough to use it daily, and when it's wrong, someone finds out fast."
        }
      },
      {
        heading: "What This Has Actually Taught Me",
        text: "The honest measure of success for this kind of work isn't \"the agent is impressive\" — it's \"the people who used to do this manually trust it enough to rely on it every day, and when it's wrong, someone finds out fast.\" That's a much less exciting-sounding goal than \"we built an autonomous agent,\" but it's the one that actually matters once the thing is running in production instead of a demo.\n\nThe broader lesson I keep relearning: agentic AI's hardest problems right now aren't really about the model. They're about observability, edge cases, and designing for graceful failure — the same problems that have always defined reliable software engineering, just with a probabilistic component now sitting in the middle of the system.",
        graphic: null
      }
    ],
    closingNote: "I'm continuing to build in this space at Beacon Health AI, and I'm increasingly convinced that the engineers who'll do this well long-term are the ones who treat 'the agent is confidently wrong' as the default failure mode to design against — not an edge case to patch later."
  },

  {
    slug: "devrelcon-experience",
    coverImage: "images/devrelcon-banner.png",
    readingTime: "5 min read",
    format: "narrative",
    title: "skills.md Just Got a New Roommate: Two Days at DevRelCon 2026",
    date: "2026-07-20",
    tags: ["devrel", "community", "devrelcon", "networking", "agentic", "ai", "mlh", "nyc"],
    summary: "Two days, a packed unconference hall, and one line I can't stop thinking about: \"skills.md just got a new roommate. It's soul.md, apparently.\" My full DevRelCon 2026 retrospective — the talks, the people, the takeaways, and a soft launch announcement.",
    sections: [
      {
        heading: null,
        text: "Developer relations has always occupied an uncomfortable middle ground — close enough to engineering to need credibility there, close enough to marketing to carry that stigma, and expected to hold communities together through both. Two days at DevRelCon 2026 in New York made that tension feel productive rather than exhausting, mostly because the people in the room were willing to talk about it honestly.",
        graphic: null
      },
      {
        heading: "Day 1 — Ecosystem Models & Vector Community Building",
        text: "Day one was a deep dive into how developer ecosystems actually function under the hood: what causes open source communities to sustain themselves versus fade, why so much documentation gets written and so little gets read, and how to design feedback loops that outlast the initial launch excitement. A standout conversation was with Dylan Couzon from Qdrant — getting a close look at how a high-speed vector search community scales in the LLM era made clear that relevance retrieval has moved from backend implementation detail to core product differentiator.",
        graphic: null
      },
      {
        heading: "The Keynote Line I Can't Stop Repeating",
        text: "Tim Falls opened Day 2 with a line that immediately got screenshot-shared across half the room: \"`skills.md` just got a new roommate. It's `soul.md`, apparently.\"\n\nIt landed because it named something everyone was already circling. Agent tooling is maturing rapidly, but the next unsolved gap isn't capability — it's judgment. What does an agent do when instructions are ambiguous? Whose values shape its decisions when no explicit rule applies? The technical infrastructure is being built out fast. The character layer is still wide open.",
        graphic: {
          type: "iconRow",
          props: { items: ["skills.md", "+", "soul.md", "=", "??"] },
          caption: "The new question in agentic systems: capability is table stakes. What comes next?"
        }
      },
      {
        heading: "\"Developer-First Is Agent-First\"",
        text: "Hahnbee Lee, co-founder of **Mintlify**, opened with a framing that reordered how I think about product surfaces: *\"developer-first is agent-first.\"*\n\nFor a long time, products offered two interaction modes — a UI for less technical users, an API for developers. That model is already obsolete for anything serious. Modern products need to support **MCP endpoints**, **CLIs**, **REST APIs**, and visual interfaces simultaneously, because both people and automated agents move through those surfaces. Everyone is busy writing docs for agents at the moment. The deeper question — who's thinking carefully about the developers building those agents — is still largely unanswered.",
        graphic: {
          type: "branching",
          props: {
            roles: [
              { name: "Non-Technical Users", use: "UI surfaces" },
              { name: "Developers", use: "API & CLI" },
              { name: "Agents", use: "MCP + all of the above" }
            ]
          },
          caption: "Product surface evolution: from two modes to four, serving humans and agents simultaneously."
        }
      },
      {
        heading: "The Unconference Session",
        text: "Yes, it's really called the unconference. And yes, it actually works.\n\nThe format brought together a room of people who've been building and thinking about developer relations for a long time — Frédéric Harper, Joey de Villa, Wesley Faulkner, Kevin Blanco, Kovvuri Vamshi Kumar Reddy, Mark Birch, Christian Heilmann, Joel Lord, Prachi Sethi, Kevin Whinnery, Kenya Cobbs, Staceyann King, Ray Stephenson, Fred Gallagher, Divya Sudha, Ramya Ravi, and others. No slides. No agenda enforced from the front of the room. The conversations went where they needed to go, and that unstructured energy made the whole thing more valuable than most scheduled sessions.",
        graphic: null
      },
      {
        heading: "Five Takeaways for Breaking Into DevRel",
        text: "Across the talks and the unconference, a few concrete ideas kept resurfacing. Worth keeping:\n\n1. Writing regularly on platforms like dev.to and daily.dev builds an audience steadily — consistency compounds in ways that a single well-timed post rarely does.\n2. Own your distribution channel. Using social to drive traffic to your own blog beats depending on someone else's algorithm.\n3. Start by adding genuine value to a small group. Reach tends to follow depth, not the other way around.\n4. Discoverability now has two audiences — human readers and AI systems. SEO still matters, but GEO (Generative Engine Optimization) is becoming just as relevant for anyone building a personal brand.\n5. DevRel practitioners come from machine learning, solutions architecture, software engineering, marketing, product. That breadth is increasingly an advantage, not a gap.",
        graphic: {
          type: "metricCallout",
          props: {
            metrics: [
              { val: "5", label: "Paths into DevRel" },
              { val: "2", label: "Audiences: Humans + Agents" }
            ]
          },
          caption: "Key takeaways from the DevRelCon unconference on breaking into developer relations."
        }
      },
      {
        heading: "The Moment of the Day",
        text: "MLH has been part of my story for almost eight years — it started back in high school, long before developer conferences were even on my radar. The scholarship that made this trip to New York possible came from that same community, and I wasn't going to take that lightly.\n\nMeeting MLH founder Mike Swift in person was one of those moments that's genuinely hard to put into words. Years of hackathons, mentorship, and community in the background, and then a handshake and a photo in a conference hallway. That kind of full-circle doesn't show up anywhere on a resume, but it stays with you.\n\nI also had two conversations that I'll be thinking about for a while — one with Drew Gorton on what long-game community building actually looks like in practice, and one with Dana Oshiro on how investors think about early bets and what signals actually matter at the angel stage.",
        graphic: null
      },
      {
        heading: "The People Made It",
        text: "The talks were good. The hallways were better. Two days of conversations with people who take developer community seriously — Frédéric Harper, Joey de Villa, Kevin Whinnery, Kenya Cobbs, Staceyann King, Ray Stephenson, Fred Gallagher, Kevin Blanco, Divya Sudha, Ramya Ravi, and many others — left me with more questions than I arrived with, and that's the best outcome a conference can produce. Looking forward to the next one.",
        graphic: {
          type: "photo",
          props: { src: "images/devrelcon-group.png", alt: "DevRelCon 2026 — the crew" },
          caption: "Some of the amazing people from DevRelCon 2026. 🤙"
        }
      },
      {
        heading: "What I'm Taking Away",
        text: "Two days at DevRelCon gave me language for things I was already doing by instinct, and a framework for things I hadn't started yet.\n\nThe SEO-to-GEO shift is real — discoverability now has to account for how AI systems surface your work, and that changes how you write, how you structure content, and how you think about your audience in ways that go beyond keyword research. The agent-first framing extends well past product design: it affects documentation strategy, content architecture, and what it means for something to be genuinely useful in 2026.\n\nAnd once again, the unconference proved that the conversations worth having most often happen in rooms no one planned in advance.",
        graphic: {
          type: "iconRow",
          props: { items: ["Community", "Content", "Agents", "Brand"] },
          caption: "The four pillars of modern developer relations in an agent-first world."
        }
      }
    ],
    closingNote: "This trip quietly marks the start of something — I'm going to lean into tech content creation and share what I'm building and learning as I go. DevRelCon was the nudge I needed. More to come. 👀"
  },

  {
    slug: "ai-campus-cohort-completion",
    coverImage: "images/ai-campus-banner.png",
    readingTime: "3 min read",
    title: "Completing the Rutgers-Camden AI Campus Research Cohort",
    date: "2026-05-08",
    tags: ["ai-campus", "machine-learning", "rutgers", "data-science"],
    summary: "Reflecting on my experience in the inaugural AI Campus AI/ML Project Learning Cohort at Rutgers, where we developed the 3D Arch Street Excavation scatter plot dashboard.",
    coverGraphic: {
      type: "scatterPlot3D",
      props: {}
    },
    problem: {
      text: "Uncovering demographics and identity correlation from 324 sets of unnamed remains excavated at a historic Philadelphia cemetery required cross-disciplinary data integration.",
      graphic: {
        type: "typicalVsLocal",
        props: {},
        caption: "Translating static historical excavation logs to spatial datasets."
      }
    },
    approach: [
      {
        stepTitle: "Step 1 — Forensic 3D Modeling",
        text: "Collaborated with forensic anthropologists, archaeologists, and computer science graduates to build a Three.js 3D scatter plot dig site coordinate model.",
        graphic: null
      },
      {
        stepTitle: "Step 2 — Density Clustering & Probability Matching",
        text: "Utilized DBSCAN density-based spatial clustering and Bayesian probability name-identity matching algorithms to correlate unnamed remains.",
        graphic: null
      }
    ],
    impact: {
      text: "Successfully designed and shipped the functional Netlify dashboard, enabling researchers to search biological and archaeological variables with automatic Google Sheets live synchronization.",
      graphic: null
    },
    closingNote: "This project sat at the intersection of forensic science, anthropology, and machine learning, and pushed me to think beyond code and consider the human story behind the data."
  },
  {
    slug: "rolling-out-copilot",
    coverImage: "images/copilot-banner.png",
    readingTime: "4 min read",
    title: "Rolling Out GitHub Copilot to a Team That Didn't Ask For It",
    date: "2025-07-15",
    tags: ["developer-tools", "ai-adoption", "github-copilot", "change-management"],
    summary: "What actually happens when you introduce an AI coding assistant to a team that's skeptical, busy, and has zero patience for another tool nobody asked for.",
    coverGraphic: {
      type: "peopleSpark",
      props: {}
    },
    problem: {
      text: "Thayer Distribution didn't ask for GitHub Copilot. Nobody on the team submitted a ticket saying \"please give us an AI pair programmer.\" I brought it to them as part of a broader AI training initiative through Rutgers–Camden School of Business, and the honest starting point was: most people were mildly skeptical, moderately busy, and not especially interested in learning a new tool on top of their existing workload. That's the real starting condition for almost every developer tool rollout, and it's the part most \"here's how we 10x'd productivity\" posts skip over.",
      graphic: {
        type: "friction",
        props: {},
        caption: "Where the team's time was actually going before adoption."
      }
    },
    approach: [
      {
        stepTitle: "Step 1 — Lead with friction, not features",
        text: "I didn't lead with a features list. I led with friction — the specific, boring, repetitive tasks that were already eating people's time: boilerplate code, repetitive documentation, small refactors nobody wanted to do by hand.",
        graphic: {
          type: "iconRow",
          props: { items: ["Boilerplate", "Docs", "Refactors"] },
          caption: "Primary repetitive developer friction categories targeted for automation."
        }
      },
      {
        stepTitle: "Step 2 — Role-specific onboarding, not a generic demo",
        text: "A blanket \"here's what Copilot can do\" session doesn't land, because everyone's actual daily friction is different, so I built role-specific integration strategies instead.",
        graphic: {
          type: "branching",
          props: {
            roles: [
              { name: "Frontend Devs", use: "Mock data & HTML skeletons" },
              { name: "Backend Devs", use: "Database queries & unit tests" },
              { name: "Data Analysts", use: "Data manipulation & cleanup" }
            ]
          },
          caption: "Custom developer functional onboarding pathways mapped to specific needs."
        }
      },
      {
        stepTitle: "Step 3 — Documentation people would actually reopen",
        text: "Short enough to get read a second time, not a 40-page manual skimmed once and forgotten.",
        graphic: {
          type: "documentCompare",
          props: {},
          caption: "Contrasting heavy corporate manuals with lightweight interactive cheat-sheets."
        }
      },
      {
        stepTitle: "Step 4 — Measuring the boring stuff",
        text: "I tracked task completion time on the categories of work Copilot was actually suited for, so results weren't just vibes.",
        graphic: {
          type: "barCompare",
          props: { beforeVal: 100, afterVal: 40, unit: "m", label: "Boilerplate & Unit Test Tasks" },
          caption: "Measured task time improvement on targeted boilerplate and testing activities."
        }
      }
    ],
    closingNote: "I'm currently working on agentic AI systems in production healthcare automation, and still find myself applying the same lesson: the technology is rarely the hard part. Getting people to trust it enough to actually use it is.",
    impact: {
      text: "The rollout measured a 20% improvement in delivery velocity — not from any single dramatic change, but from removing a lot of small friction across a lot of small tasks, consistently, across the team. The bigger lesson wasn't really about Copilot specifically. It's that developer tool adoption isn't a technical problem, it's a trust problem. People adopt tools when the tool respects their actual workflow instead of asking them to reorganize their day around it.",
      graphic: {
        type: "metricCallout",
        props: {
          metrics: [
            { val: "20%", label: "delivery velocity improvement" }
          ]
        },
        caption: "Measured impact in team deployment and velocity metrics post-rollout."
      }
    }
  },
  {
    slug: "core-sentinel-deep-dive",
    coverImage: "images/core-sentinel-banner.png",
    readingTime: "5 min read",
    title: "Building a Local, Zero-Exfiltration AI Compliance Agent",
    date: "2026-04-17",
    tags: ["ai-engineering", "onnx", "privacy", "compliance", "capstone"],
    summary: "How I built Core Sentinel — a Windows agent that enforces HIPAA/FERPA/SEC compliance in real time using a locally-quantized model, without a single byte of data ever leaving the machine.",
    coverGraphic: {
      type: "shieldCpu",
      props: {}
    },
    problem: {
      text: "Most AI-powered compliance tools work the same way: something on your machine watches your activity, sends it to a cloud API, and a response comes back telling you whether you did something wrong. That works fine right up until the thing you're trying to protect is the data itself — healthcare records, financial filings, student data — at which point sending it to a third-party API to check if it's sensitive is a little bit like mailing your house key to a locksmith to ask if your lock is secure. I wanted to know: could a compliance agent actually run entirely on-device, catch violations in real time, and never transmit a single byte of the content it's protecting?",
      graphic: {
        type: "typicalVsLocal",
        props: {},
        caption: "Privacy threat comparison: cloud-reliant API exfiltration vs. Core Sentinel's local on-device check loop."
      }
    },
    approach: [
      {
        stepTitle: "Step 1 — Model selection and quantization",
        text: "I started with TinyBERT and quantized it to ONNX format specifically to get inference small and fast enough to run locally without noticeable lag, targeting under 100ms end-to-end latency and under 5% CPU usage, so the agent could run in the background without anyone noticing it was there.",
        graphic: {
          type: "modelShrink",
          props: {},
          caption: "Converting and quantizing large neural weights to runtime-efficient edge formats."
        }
      },
      {
        stepTitle: "Step 2 — Clipboard-level monitoring via pywin32",
        text: "Rather than hooking into every application individually, I built a Windows background service that monitors clipboard activity directly, meaning one integration point instead of dozens.",
        graphic: {
          type: "hubSpoke",
          props: {},
          caption: "Centralized clipboard hook capturing text payloads before application submission."
        }
      },
      {
        stepTitle: "Step 3 — A policy engine humans can actually edit",
        text: "Compliance rules live in a no-code `YAML`/`JSON` policy engine, so admins can add or adjust a rule themselves, same day, without filing a ticket.\n\n```yaml\n# policy.yaml\nrules:\n  - name: HIPAA-Patient-Names\n    pattern: \"(?:[A-Z][a-z]+ ){1,2}[A-Z][a-z]+\"\n    risk: high\n    action: Warn\n```",
        graphic: {
          type: "configAdjustment",
          props: {},
          caption: "Decoupled YAML config parser loading compliance parameters without recompilation."
        }
      },
      {
        stepTitle: "Step 4 — A UI that doesn't get in the way",
        text: "A frameless PyQt6 overlay for real-time nudges, visible enough to catch attention, unobtrusive enough not to feel like nagging.",
        graphic: {
          type: "mockUI",
          props: {},
          caption: "Visual layout of the desktop nudge alerting the user to policy match constraints."
        }
      }
    ],
    closingNote: "Core Sentinel was my M.S. capstone project at Rutgers University–Camden. I'm currently applying similar thinking — reliability, auditability, and taking data sensitivity seriously — in production agentic AI work in healthcare automation.",
    impact: {
      text: "Sub-100ms latency, under 5% CPU, roughly 50MB RAM footprint, and — the number I care about most — zero data exfiltration by design. Not \"we promise not to log it,\" but architecturally incapable of sending the protected content anywhere, because there's no network call in that code path at all. The bigger takeaway was about the shape of the tradeoff: building small, fast, local, and boring (in the best sense) is a legitimate design choice for sensitive data, not just a constraint you accept when you don't have API budget.",
      graphic: {
        type: "metricCallout",
        props: {
          metrics: [
            { val: "<100ms", label: "latency threshold" },
            { val: "<5%", label: "CPU utilization" },
            { val: "0 bytes", label: "exfiltrated" }
          ]
        },
        caption: "Core Sentinel baseline local performance and security stats."
      }
    }
  },
  {
    slug: "arch-street-deep-dive",
    coverImage: "images/arch-street-banner.png",
    readingTime: "6 min read",
    title: "3D Visualizing Forgotten History: Building the Arch Street Dashboard",
    date: "2024-12-10",
    tags: ["react", "threejs", "data-visualization", "machine-learning", "ai-for-good"],
    summary: "How I helped build an interactive 3D dashboard to help identify 324 unnamed burials from a historic Philadelphia cemetery — using clustering, Bayesian matching, and a browser-based 3D excavation map.",
    coverGraphic: {
      type: "scatterPlot3D",
      props: {}
    },
    problem: {
      text: "In 2017, excavation at a historic 18th–19th century burial ground in Philadelphia uncovered 324 sets of remains — most of them unnamed. Connecting an unnamed set of remains back to a real historical identity is normally slow, manual work: cross-referencing burial records, biological data, and archaeological notes by hand, one case at a time. As part of Rutgers–Camden's inaugural AI Campus ML/AI Project Learning Cohort, our team was given a real, unsolved version of this problem: could machine learning and a better interface help researchers move faster through this data, without pretending the technology could replace the judgment of the forensic anthropologists actually doing the identification work?",
      graphic: {
        type: "spreadsheetVsMap",
        props: {},
        caption: "Translating static coordinates to spatial point indicators."
      }
    },
    approach: [
      {
        stepTitle: "Step 1 — A 3D map people could actually explore",
        text: "Built an interactive 3D scatter plot of the real excavation site using Three.js and actual dig coordinates, letting researchers rotate, zoom, and filter visually.",
        graphic: {
          type: "interactiveScatterPlot",
          props: {},
          caption: "Isometric excavation coordinate layout displaying interactive rotation and scaling controls."
        }
      },
      {
        stepTitle: "Step 2 — Clustering to surface patterns humans might miss",
        text: "Applied DBSCAN clustering to identify groupings not obvious from records alone — potential family plots, shared timeframes, spatial patterns worth a second look.",
        graphic: {
          type: "cluster",
          props: {},
          caption: "Grouping archaeological remains via DBSCAN density parameters to map family boundaries."
        }
      },
      {
        stepTitle: "Step 3 — Bayesian matching, not black-box answers",
        text: "Used Bayesian identity-confidence matching, deliberately outputting a confidence level rather than false certainty.\n\n```javascript\n// Bayesian probability update\nfunction updateConfidence(prior, likelihood) {\n  return (prior * likelihood) / (prior * likelihood + (1 - prior) * (1 - likelihood));\n}\n```",
        graphic: {
          type: "confidenceGauge",
          props: { val: 60 },
          caption: "Outputting relative probability confidences rather than strict binary classifiers."
        }
      },
      {
        stepTitle: "Step 4 — A dashboard built for researchers, not just engineers",
        text: "Searchable interface per burial, role-based authentication, live Google Sheets sync, CI/CD on Netlify for automatic updates.",
        graphic: {
          type: "pipeline",
          props: {},
          caption: "Google sheets sync pipeline pushing automated Netlify web deployments."
        }
      }
    ],
    closingNote: "You can explore the live dashboard at arch-st-project.netlify.app — the code is open on GitHub. This project is part of why I care about explainability in AI systems — a theme that shows up again in my Core Sentinel capstone project.",
    demoLink: "https://arch-st-project.netlify.app/",
    sourceLink: "https://github.com/Alwinphilip0105/Arch_St_Project_live",
    impact: {
      text: "The result is a working, publicly viewable dashboard that turns a static, hard-to-navigate historical dataset into something researchers can actually explore, query, and build on — honest about what the model does and doesn't know.",
      graphic: {
        type: "beforeAfterCompare",
        props: {},
        caption: "Outcome comparison: flat tabular record-keeping vs. interactive 3D database."
      }
    }
  },
  {
    slug: "parking-finder-app",
    coverImage: "images/project-1.png",
    readingTime: "4 min read",
    title: "Building a Full-Stack Parking Finder & Reservation System",
    date: "2026-02-24",
    tags: ["java", "spring-boot", "web-development", "sql", "bootstrap"],
    summary: "How I built a secure, full-stack parking management system enabling real-time spot reservations, payment flows, and analytics for drivers.",
    coverGraphic: {
      type: "mockUI",
      props: {}
    },
    problem: {
      text: "Urban parking is plagued by inefficiency. Drivers spend significant time cruising for empty spots, while operators struggle to manage real-time utilization. Payment processing is often fragmented, leading to billing disputes and lost revenue. I wanted to design a system that seamlessly connects parking occupancy tracking with an automated booking and checkout portal, reducing reservation friction to under two minutes.",
      graphic: {
        type: "friction",
        props: {},
        caption: "Where time is wasted during traditional spot locating and payment."
      }
    },
    approach: [
      {
        stepTitle: "Step 1 — Designing the Entity Model and DB Constraints",
        text: "I established normalized database tables with robust transaction isolation levels, preventing double-booking of parking spots during peak traffic hours.",
        graphic: {
          type: "documentCompare",
          props: {},
          caption: "Database transaction isolation preventing simultaneous double-booking requests."
        }
      },
      {
        stepTitle: "Step 2 — Integrating a Responsive Booking Engine",
        text: "Created a backend service mapping active lot configurations to user reservation requests, checking spot status dynamically.",
        graphic: {
          type: "hubSpoke",
          props: {},
          caption: "Mapping web and mobile endpoints to the centralized booking engine."
        }
      },
      {
        stepTitle: "Step 3 — Digital Checkout and Billing Automation",
        text: "Connected secure checkout flows, validating credentials and booking durations to dynamically compute pricing before releasing reservation codes.",
        graphic: {
          type: "pipeline",
          props: {},
          caption: "Checkout validation and booking code issuance pipeline."
        }
      }
    ],
    closingNote: "This project highlighted the importance of transaction atomicity in reservation architectures — a theme that carries over into high-availability systems.",
    demoLink: "",
    sourceLink: "https://github.com/Alwinphilip0105/Park_Company_Parking_App",
    impact: {
      text: "The parking application delivered a streamlined booking flow. In testing, spot selection and digital checkout was completed in under 90 seconds. Operators gained a live dashboard to track utilization, resulting in zero double-booking occurrences over simulation tests.",
      graphic: {
        type: "metricCallout",
        props: {
          metrics: [
            { val: "<90s", label: "checkout time" },
            { val: "0", label: "double-bookings" }
          ]
        },
        caption: "Key metrics validating system performance and throughput."
      }
    }
  },
  {
    slug: "quantum-networking-simulation",
    coverImage: "images/quantum-networking-banner.png",
    readingTime: "5 min read",
    title: "Quantum Networking: Simulating Secure Quantum Key Distribution (QKD)",
    date: "2025-11-05",
    tags: ["quantum-computing", "python", "cryptography", "network-security", "simulation"],
    summary: "An exploration of quantum cryptography through a Python-based BB84 protocol simulation, testing photon polarization states and eavesdropping thresholds.",
    coverGraphic: {
      type: "shieldCpu",
      props: {}
    },
    problem: {
      text: "Classical cryptography relies on mathematical hardness assumptions that quantum computers will eventually break. Quantum Key Distribution (QKD), specifically the BB84 protocol, offers unconditional security based on quantum physics laws. However, physically prototyping quantum networks is incredibly expensive. I needed to build a software simulation that models quantum state preparation, basis switching, and error rate changes during eavesdropping attempts.",
      graphic: {
        type: "typicalVsLocal",
        props: {},
        caption: "Vulnerability comparison: mathematical assumptions vs. quantum physics security."
      }
    },
    approach: [
      {
        stepTitle: "Step 1 — Simulating Photon Polarization States",
        text: "Implemented random state preparation in Python, encoding qubits using rectilinear and diagonal bases to represent polarization angles.",
        graphic: {
          type: "branching",
          props: {
            roles: [
              { name: "Rectilinear Basis", use: "0° (0) or 90° (1) polarization" },
              { name: "Diagonal Basis", use: "45° (0) or 135° (1) polarization" },
              { name: "Quantum State", use: "Superposition until measurement" }
            ]
          },
          caption: "Polarization bases configuration for simulated photon transport."
        }
      },
      {
        stepTitle: "Step 2 — Simulating Alice-to-Bob Transmission",
        text: "Modeled the quantum channel where Bob measures received qubits using randomly selected bases, preparing for the key sifting phase.",
        graphic: {
          type: "iconRow",
          props: { items: ["Generate Qubits", "Select Bases", "Measure Qubits"] },
          caption: "Qubit transmission and measurement workflow stages."
        }
      },
      {
        stepTitle: "Step 3 — Detecting Eavesdropping (Eve's Intervention)",
        text: "Simulated a middle-man eavesdropper. According to the Heisenberg uncertainty principle, Eve's measurements alter photon states, which Bob detects as a sudden spike in Quantum Bit Error Rate (QBER).",
        graphic: {
          type: "confidenceGauge",
          props: { val: 25 },
          caption: "Simulated Quantum Bit Error Rate (QBER) indicator under active interception."
        }
      }
    ],
    closingNote: "This simulator bridges abstract quantum physics and concrete network design, demonstrating how quantum channels can detect interception proactively.",
    demoLink: "",
    sourceLink: "https://github.com/Alwinphilip0105/Quantum-Networking",
    impact: {
      text: "The simulation successfully demonstrated key sifting and error detection. In trials with zero eavesdropping, QBER remained under 1%. When Eve intervened, QBER rose above the 25% threshold, immediately triggering key invalidation and securing the channel.",
      graphic: {
        type: "barCompare",
        props: { beforeVal: 1, afterVal: 27, unit: "%", label: "Quantum Bit Error Rate (QBER)" },
        caption: "QBER threshold comparison indicating immediate interception detection."
      }
    }
  },
  {
    slug: "career-suggestion-dashboard",
    coverImage: "images/project-3.png",
    readingTime: "5 min read",
    title: "Visualizing Employment Trends: A Personality-Driven Career Dashboard",
    date: "2026-03-02",
    tags: ["data-analytics", "python", "streamlit", "big-data", "data-visualization"],
    summary: "Mapping job seekers to labor market trends using personality profiles, interactive radar charts, and ten-year Bureau of Labor Statistics (BLS) datasets.",
    coverGraphic: {
      type: "scatterPlot3D",
      props: {}
    },
    problem: {
      text: "Job seekers face a fragmented landscape. Career counselors rely on static brochures, while online sites throw lists of job titles without connecting them to labor market trends (like salary growth, education requirements, and future demand). For this big data algorithms project, I wanted to create a dashboard that ingests ten-year BLS projections and aligns them directly with personality profiles.",
      graphic: {
        type: "spreadsheetVsMap",
        props: {},
        caption: "Transforming static spreadsheets of employment tables into interactive recommendations."
      }
    },
    approach: [
      {
        stepTitle: "Step 1 — Ingesting and Cleaning BLS Datasets",
        text: "Extracted and standardized employment projections, growth rates, and median salaries across BLS datasets covering 2019-2029 and 2023-2033 cycles.",
        graphic: {
          type: "pipeline",
          props: {},
          caption: "Data cleaning and standardization pipeline for BLS datasets."
        }
      },
      {
        stepTitle: "Step 2 — Implementing Personality-to-Career Mapping",
        text: "Coded a scoring model that evaluates interest profiles against occupational categories, outputting matching scores and confidence metrics.",
        graphic: {
          type: "cluster",
          props: {},
          caption: "Grouping occupations based on shared skill requirements and personality fit."
        }
      },
      {
        stepTitle: "Step 3 — Radar Chart and Projection Visuals",
        text: "Rendered interactive Streamlit views, showing occupation alignment across key metrics: growth rate, average wages, and automation risks.",
        graphic: {
          type: "mockUI",
          props: {},
          caption: "Layout of the career analytics workspace displaying occupational fit."
        }
      }
    ],
    closingNote: "By bringing database projections into an interactive layout, we turn abstract numbers into practical guidance for career planning.",
    demoLink: "https://alwinphilip.online/Big-Data-Algorithms-2024-Fall-Rutgers/",
    sourceLink: "https://github.com/Alwinphilip0105/Big-Data-Algorithms-2024-Fall-Rutgers",
    impact: {
      text: "The dashboard successfully aggregated thousands of data points into a fast, client-side application. Users can explore top occupational paths, compare growth rates, and see detailed skill alignment instantly in their browser.",
      graphic: {
        type: "metricCallout",
        props: {
          metrics: [
            { val: "10 Years", label: "data timeline" },
            { val: "Instant", label: "visual updates" }
          ]
        },
        caption: "Key metrics of the visual analysis tool."
      }
    }
  },
  {
    slug: "intelliserve-portal",
    coverImage: "images/project-4.png",
    readingTime: "4 min read",
    title: "Building Intelliserve: A Responsive Web Portal for Operations Management",
    date: "2025-11-05",
    tags: ["web-development", "javascript", "css", "html", "responsive-design"],
    summary: "Designing a responsive, component-driven operations dashboard featuring role-aware views and real-time request tracking.",
    coverGraphic: {
      type: "mockUI",
      props: {}
    },
    problem: {
      text: "Internal ticketing systems are often clunky, slow, and non-responsive. Agents in the field struggle to update ticket status on mobile devices, while managers lack high-level metrics of system performance. Intelliserve was designed to provide a lightweight, responsive web portal for request intake, queue assignment, and performance reporting.",
      graphic: {
        type: "friction",
        props: {},
        caption: "Inefficiencies in outdated legacy queue systems."
      }
    },
    approach: [
      {
        stepTitle: "Step 1 — Creating a Clean Layout Design System",
        text: "I established a design system using CSS variables, custom media queries, and flexbox to ensure the layout matches all screen widths automatically.",
        graphic: {
          type: "documentCompare",
          props: {},
          caption: "Designing lightweight layouts vs. heavy framework templates."
        }
      },
      {
        stepTitle: "Step 2 — Role-Aware Interactive Components",
        text: "Built interactive views that adjust options based on whether the logged-in user is a customer submitting a request or a technician resolving a ticket.",
        graphic: {
          type: "branching",
          props: {
            roles: [
              { name: "Customers", use: "Submit and monitor requests" },
              { name: "Technicians", use: "Claim tickets and log updates" },
              { name: "Admins", use: "Configure queue rules and metrics" }
            ]
          },
          caption: "Routing views according to user account permissions."
        }
      },
      {
        stepTitle: "Step 3 — Connecting the Queue Logic",
        text: "Implemented event handling in JavaScript to update, filter, and sort tickets dynamically without full page reloads.",
        graphic: {
          type: "pipeline",
          props: {},
          caption: "Data flow of service tickets from entry to resolution."
        }
      }
    ],
    closingNote: "Keeping components light and focusing on clean layouts ensures web portals remain usable under any field conditions.",
    demoLink: "",
    sourceLink: "https://github.com/Alwinphilip0105/InteliServe",
    impact: {
      text: "The frontend portal delivered a modern, fast workspace. Load times are near-instantaneous due to vanilla scripting, and layout shifts are completely eliminated, providing a solid workflow for day-to-day operations.",
      graphic: {
        type: "metricCallout",
        props: {
          metrics: [
            { val: "<1s", label: "client load time" },
            { val: "100%", label: "layout responsiveness" }
          ]
        },
        caption: "Performance metrics recorded on mobile and desktop layout tests."
      }
    }
  },
  {
    slug: "lit-parking-android",
    coverImage: "images/project-5.png",
    readingTime: "4 min read",
    title: "Lit Parking: Mobile Parking Spot Discovery on Android",
    date: "2025-11-05",
    tags: ["android", "java", "google-maps-api", "mobile-development", "gps"],
    summary: "Building an Android utility that connects drivers to parking spot coordinates using real-time location mapping and map indicators.",
    coverGraphic: {
      type: "interactiveScatterPlot",
      props: {}
    },
    problem: {
      text: "Locating parking spaces in unfamiliar neighborhoods is incredibly stressful when driving. Drivers need a quick, distraction-free mobile map that shows active spaces nearby, directions to selected spots, and operating hours — all while using minimal data.",
      graphic: {
        type: "spreadsheetVsMap",
        props: {},
        caption: "Transforming static parking location coordinate listings into interactive map coordinates."
      }
    },
    approach: [
      {
        stepTitle: "Step 1 — Integrating Google Maps API and GPS",
        text: "Configured location services in Java, centering the map view on the user's GPS coordinates and managing marker updates dynamically.",
        graphic: {
          type: "hubSpoke",
          props: {},
          caption: "Connecting client location indicators to mapping services."
        }
      },
      {
        stepTitle: "Step 2 — Designing Custom Map Pin Overlays",
        text: "Created status-dependent marker pins (green for available, red for occupied) to allow immediate decision making at a glance.",
        graphic: {
          type: "configAdjustment",
          props: {},
          caption: "Marker rendering logic based on spot availability state."
        }
      },
      {
        stepTitle: "Step 3 — Mobile Layout Optimizations",
        text: "Optimized background thread usage to ensure the UI stays responsive at 60fps, even when loading multiple map pins during movement.",
        graphic: {
          type: "barCompare",
          props: { beforeVal: 60, afterVal: 15, unit: "ms", label: "Main Thread Block Time" },
          caption: "Minimizing UI thread block time during map marker updates."
        }
      }
    ],
    closingNote: "This Android project demonstrated the importance of keeping heavy computations off the UI thread for mobile applications.",
    demoLink: "",
    sourceLink: "https://github.com/Alwinphilip0105/Lit-Parking",
    impact: {
      text: "Lit Parking delivers a fluid mobile experience. Spot updates load within milliseconds, and thread optimizations keep average frame rates high, preventing stuttering or input lag during map navigation.",
      graphic: {
        type: "metricCallout",
        props: {
          metrics: [
            { val: "60 fps", label: "UI frame rate" },
            { val: "<100ms", label: "marker load time" }
          ]
        },
        caption: "Performance diagnostics logged on physical Android hardware."
      }
    }
  },
  {
    slug: "toonslate-gags",
    coverImage: "images/project-6.jpg",
    readingTime: "3 min read",
    title: "Toonslate-Gags: Building an Engaging Comic Sharing Platform",
    date: "2025-11-05",
    tags: ["web-development", "javascript", "responsive-design", "content-delivery", "css-grid"],
    summary: "Developing a lightweight, high-performance web platform for comic creators and readers with fluid navigation grids.",
    coverGraphic: {
      type: "mockUI",
      props: {}
    },
    problem: {
      text: "Online comic sites are often crowded with heavy banners, intrusive ads, and layouts that break on mobile screens. Creators need a clean interface that highlights their work, while readers want smooth infinite scroll and responsive navigation grids.",
      graphic: {
        type: "friction",
        props: {},
        caption: "Where page bloat and formatting errors degrade reader retention."
      }
    },
    approach: [
      {
        stepTitle: "Step 1 — Designing the Comic Grid Layout",
        text: "Used CSS Grid and Flexbox to build a layout that transitions from a multi-column desktop layout to a single-column mobile view.",
        graphic: {
          type: "documentCompare",
          props: {},
          caption: "Dynamic column scaling vs. fixed dimensions."
        }
      },
      {
        stepTitle: "Step 2 — Fluid Navigation and Infinite Scroll",
        text: "Implemented simple AJAX requests in vanilla JavaScript to fetch and append the next page of comics as the reader approaches the bottom of the page.",
        graphic: {
          type: "pipeline",
          props: {},
          caption: "Comic loading pipeline triggering on scroll markers."
        }
      },
      {
        stepTitle: "Step 3 — Asset Compression and Caching",
        text: "Configured client-side caching parameters and set up image lazy loading to minimize data consumption for mobile readers.",
        graphic: {
          type: "beforeAfterCompare",
          props: {},
          caption: "Layout responsiveness comparison: standard pagination vs. infinite scroll layout."
        }
      }
    ],
    closingNote: "By focusing on vanilla design and direct rendering, web pages can stay incredibly lightweight and fast.",
    demoLink: "",
    sourceLink: "https://github.com/Alwinphilip0105/Toonslate-Gags",
    impact: {
      text: "Toonslate-Gags achieved excellent load speeds. Comic pages load in under a second on typical connections, and layouts adjust seamlessly to smartphones, tablets, and wide monitors.",
      graphic: {
        type: "metricCallout",
        props: {
          metrics: [
            { val: "<0.8s", label: "average page load" },
            { val: "100%", label: "layout alignment" }
          ]
        },
        caption: "Loading performance metrics captured during layout audits."
      }
    }
  },
  {
    slug: "cvlens-resume-parser",
    coverImage: "images/cvlens-banner.png",
    readingTime: "5 min read",
    title: "Building CVLens: Machine Learning for Resume and Job Fit Analysis",
    date: "2026-02-24",
    tags: ["machine-learning", "nlp", "python", "streamlit", "cosine-similarity"],
    summary: "Leveraging TF-IDF vectorization and cosine similarity to extract skills and analyze alignment between candidate resumes and job profiles.",
    coverGraphic: {
      type: "scatterPlot3D",
      props: {}
    },
    problem: {
      text: "Recruiters spend hours scanning hundreds of resumes for a single opening, while candidates struggle to tailor their CVs to job descriptions. Automated screening tools are often black boxes, rejecting qualified candidates without explanation. I wanted to build CVLens — an interactive tool that compares CVs and job descriptions, highlighting keyword overlaps and giving transparent similarity scores.",
      graphic: {
        type: "spreadsheetVsMap",
        props: {},
        caption: "Replacing flat file text scanning with multi-dimensional similarity mapping."
      }
    },
    approach: [
      {
        stepTitle: "Step 1 — Text Extraction and Tokenization",
        text: "Developed a Python pipeline to ingest PDF and DOCX files, extract plain text, and remove stopwords and noise using spaCy.",
        graphic: {
          type: "pipeline",
          props: {},
          caption: "Resume parsing and text cleaning pipeline."
        }
      },
      {
        stepTitle: "Step 2 — Vectorization and Similarity Matching",
        text: "Implemented TF-IDF (Term Frequency-Inverse Document Frequency) vectorization to map resumes and job profiles into a shared vector space, computing alignment using Cosine Similarity.",
        graphic: {
          type: "cluster",
          props: {},
          caption: "Grouping skill terms to find overlaps between CV and job description."
        }
      },
      {
        stepTitle: "Step 3 — Streamlit Interface and Match Meter",
        text: "Built a Streamlit frontend with file upload capabilities, listing matching keywords and rendering a match confidence dial.",
        graphic: {
          type: "confidenceGauge",
          props: { val: 82 },
          caption: "Match score indicating alignment between parsed CV and targeted role."
        }
      }
    ],
    closingNote: "Using transparent cosine similarity models ensures both candidates and recruiters can trust the screening outputs.",
    demoLink: "https://alwinphilip0105-cvlens-frontendstreamlit-app-ouogqa.streamlit.app/",
    sourceLink: "https://github.com/Alwinphilip0105/CVLens",
    impact: {
      text: "CVLens runs in real time, delivering a similarity breakdown in under a second. In testing, it parsed resume keywords and computed alignment scores with high accuracy, helping users optimize their resumes and screen profiles transparently.",
      graphic: {
        type: "metricCallout",
        props: {
          metrics: [
            { val: "<0.5s", label: "parse latency" },
            { val: "82%", label: "sample fit score" }
          ]
        },
        caption: "CVLens speed and scoring parameters."
      }
    }
  }
];
