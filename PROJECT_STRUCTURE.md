# HireLens AI - Project Structure & Directory Blueprint

> **Platform:** HireLens AI ("See Your Resume Through a Recruiter's Eyes")  
> **Repository:** [AlaminM01/HireLens_AI](https://github.com/AlaminM01/HireLens_AI)  
> **Author:** Alamin Mondal  

---

```
HireLens_AI/
│
├── .env.example                     # Sample environment variable template (Gemini, OpenAI, DB)
├── .eslintrc.json                   # Strict ESLint configuration extending Next.js core vitals
├── .gitignore                       # Git ignore patterns (node_modules, .next, local envs)
├── CHANGELOG.md                     # Semantic versioning release chronicle
├── CODE_OF_CONDUCT.md               # Contributor Covenant v2.1 code of conduct
├── CONTRIBUTING.md                  # Development guidelines, branch workflows, and PR standards
├── LICENSE                          # MIT Open Source License (Author: Alamin Mondal)
├── next.config.mjs                  # Production Next.js compiler & security header configs
├── package.json                     # Monorepo scripts, metadata, and production dependencies
├── postcss.config.mjs               # PostCSS plugin pipeline for Tailwind CSS
├── PROJECT_STRUCTURE.md             # This document: Comprehensive architecture blueprint
├── README.md                        # World-class enterprise hero showcase and installation guide
├── tailwind.config.ts               # Custom glassmorphism utilities, animations, and color tokens
├── tsconfig.json                    # Strict TypeScript 5.x compiler configuration
│
├── public/                          # Static web assets
│   ├── favicon.svg                  # Vector aperture icon for browser tab
│   └── logo.svg                     # Vector HireLens AI brand icon
│
├── project_knowledge/               # Enterprise AI Knowledge System
│   ├── AI_CONTEXT.md                # System context and domain primer for AI coding assistants
│   ├── CHATGPT_PROMPT.txt           # Master system prompt turning any LLM into HireLens Coach
│   ├── PROJECT_LOG.md               # 40-commit engineering lifecycle ledger with hashes
│   ├── PROJECT_QA.md                # 300+ Q&A: 105 Viva, 105 Deep Technical, 105 Behavioral
│   ├── QUICK_START_FOR_AI.md        # 60-second onboarding guide for autonomous agents
│   └── SYSTEM_ARCHITECTURE.md       # C4 diagrams, sequence flows, mathematical formulas & ERD
│
├── src/                             # Source code root
│   ├── app/                         # Next.js 14 App Router routes & API endpoints
│   │   ├── globals.css              # Universal styles, Tailwind base directives, glass classes
│   │   ├── layout.tsx               # Root application layout with AuthContext & ambient backdrop
│   │   ├── page.tsx                 # SaaS homepage (Hero, Features, Stats, Testimonials, CTA)
│   │   │
│   │   ├── analytics/page.tsx       # ATS score velocity trends & application tracker
│   │   ├── ats-analysis/page.tsx    # 4-gauge circular analytics & diagnostic breakdown
│   │   ├── career-coach/page.tsx    # Conversational AI coach chatbot interface
│   │   ├── dashboard/page.tsx       # Unified candidate command center & readiness radar
│   │   ├── features/page.tsx        # 8-module architectural capability showcase
│   │   ├── job-match/page.tsx       # Job description parser & keyword deficit auditor
│   │   ├── login/page.tsx           # Glassmorphic auth with 1-click recruiter/demo bypass
│   │   ├── portfolio-analyzer/page.tsx # GitHub repository & LinkedIn profile auditor
│   │   ├── pricing/page.tsx         # Tier pricing calculator with annual discount switch
│   │   ├── resume-optimizer/page.tsx # Before vs After comparative STAR bullet diff optimizer
│   │   ├── roadmap/page.tsx         # 30-60-90 day milestone progression & career plan
│   │   ├── settings/page.tsx        # AI API key manager (Gemini/OpenAI) & user settings
│   │   ├── signup/page.tsx          # Account registration with role selection
│   │   ├── upload/page.tsx          # Resume upload sandbox with 5 preloaded demo profiles
│   │   │
│   │   └── api/                     # Serverless Next.js API route handlers
│   │       ├── career-coach/route.ts# Streaming/REST endpoint for career coach responses
│   │       ├── health/route.ts      # Automated uptime & latency probe endpoint
│   │       └── skill-gap/route.ts   # REST endpoint for on-demand skill gap analysis
│   │
│   ├── components/                  # Reusable UI component library
│   │   ├── layout/                  # Structural layout components
│   │   │   ├── Footer.tsx           # Enterprise footer with brand links, status, and newsletter
│   │   │   └── Navbar.tsx           # Glassmorphic navbar with mobile responsive drawer
│   │   │
│   │   ├── landing/                 # SaaS landing page sections
│   │   │   ├── CTASection.tsx       # Conversion call-to-action banner
│   │   │   ├── FeatureShowcase.tsx  # 9-module interactive feature showcase with filtering
│   │   │   ├── HeroSection.tsx      # High-conversion hero with aperture mockups & CTAs
│   │   │   ├── StatsSection.tsx     # Animated telemetry cards & ATS impact indicators
│   │   │   └── TestimonialsSection.tsx # Social proof & candidate placement reviews
│   │   │
│   │   ├── resume/                  # Resume management components
│   │   │   └── ResumeUploader.tsx   # Drag-and-drop file uploader with multi-stage progress
│   │   │
│   │   └── ui/                      # Atomic design system components
│   │       ├── Badge.tsx            # Contextual status badges (Success, Warning, Tech)
│   │       ├── BrandLogo.tsx        # Vector aperture lens brand component
│   │       ├── CircularProgress.tsx # Animated SVG radial progress gauge with status colors
│   │       ├── GlassButton.tsx      # Multi-variant button with hover springs & loading states
│   │       ├── GlassCard.tsx        # Base glassmorphic surface with frosted glass effects
│   │       ├── StatCard.tsx         # Telemetry statistic card with trend indicators
│   │       └── Typography.tsx       # Semantic headings, lead text, and gradient highlights
│   │
│   ├── lib/                         # Core libraries, data, and context providers
│   │   ├── auth-context.tsx         # React Context managing user authentication & sessions
│   │   ├── design-tokens.ts         # Brand colors, typography scales, glass presets
│   │   ├── mock-resumes.ts          # 5 pre-loaded realistic candidate resumes for zero-friction demoing
│   │   ├── skill-taxonomy.ts        # 500+ curated technical skill database across 7 engineering tracks
│   │   └── utils.ts                 # Class merging utilities (`clsx` + `tailwind-merge`)
│   │
│   ├── services/                    # Pure TypeScript business logic engines
│   │   ├── ai-career-coach.ts       # Multi-turn coaching dialog with Gemini/OpenAI & offline heuristics
│   │   ├── ats-scorer.ts            # Mathematical 4-gauge weighting algorithm (Formatting, Content, Keyword)
│   │   ├── career-roadmap.ts        # 30-60-90 day milestone synthesizer
│   │   ├── job-matcher.ts           # Jaccard index keyword matcher against job descriptions
│   │   ├── portfolio-analyzer.ts    # GitHub repository & LinkedIn profile presence auditor
│   │   ├── resume-parser.ts         # NLP regex parsing, token extraction, AST creation
│   │   ├── resume-suggester.ts      # Before vs After STAR bullet transformer
│   │   └── skill-engine.ts          # Role benchmarking & missing skill discovery matrix
│   │
│   └── types/                       # Universal domain model interfaces
│       └── index.ts                 # Type definitions for ParsedResume, ATSScore, SkillGap, etc.
│
└── tests/                           # Verification and testing suites
    ├── unit/                        # Unit tests for core services (Parser, Scorer, Taxonomy)
    └── integration/                 # Integration tests for Next.js API endpoints
```
