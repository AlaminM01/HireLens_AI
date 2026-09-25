# HireLens AI - AI Engineering Context & Domain Primer

> **Document:** `project_knowledge/AI_CONTEXT.md`  
> **Audience:** Autonomous AI coding agents, LLM inference engines, and engineering auditors.  
> **Platform:** HireLens AI ("See Your Resume Through a Recruiter's Eyes")  
> **Author:** Alamin Mondal  

---

## 1. Project Overview & System Purpose

**HireLens AI** is an AI-powered Career Intelligence and Resume Optimization platform designed to eliminate the information asymmetry between technical job seekers (students, freshers, engineers) and commercial Applicant Tracking Systems (ATS) / talent acquisition teams.

Commercial ATS algorithms (e.g., Workday, Taleo, Greenhouse, Lever, iCIMS) reject up to 75% of candidate resumes prior to recruiter review due to:
1. Unparseable multi-column layouts, canvas elements, tables, or non-standard fonts.
2. Missing canonical technical taxonomy keywords.
3. Lack of quantifiable achievement metrics (failing the Google "XYZ Formula" / STAR methodology).
4. Missing semantic role markers (Summary, Experience, Education, Projects).

HireLens AI acts as a diagnostic mirror, analyzing candidate resumes through the mathematical lens of ATS algorithms and the qualitative standards of senior engineering hiring managers.

---

## 2. Technical Stack & Architectural Principles

| Layer | Technologies Selected | Justification |
|:---|:---|:---|
| **Frontend Framework** | Next.js 14 (App Router) + React 18 | High-speed server rendering, edge routing, optimized client-side hydration. |
| **Language & Typings** | TypeScript 5.6 (Strict Mode) | Full type-safety across resume ASTs, ATS scoring models, and API payloads. |
| **Styling & Theme** | Tailwind CSS 3.4 + Custom Glass Tokens | Sleek dark-mode palette (`#0F172A`, `#3B82F6`, `#8B5CF6`) and modern glassmorphism. |
| **Motion & Micro-interactions** | Framer Motion 11 + Lucide React | High-frame-rate spring physics, interactive gauge animations, and tactile feedback. |
| **LLM Runtimes** | Google Gemini 1.5/2.0 + OpenAI GPT-4o | Dual-provider LLM support with graceful, deterministic heuristic fallbacks for offline demo resilience. |
| **Database Architecture** | PostgreSQL + Prisma ORM | Relational data integrity for user profiles, versioned resume audits, and job applications. |
| **State & Storage** | React Context (`AuthContext`) + LocalStorage Cache | Instant UI responsiveness, zero cold-start delay for demo profiles, offline testing ready. |

---

## 3. Directory Layout & Mental Map

When navigating the HireLens AI codebase, understand this structural separation of concerns:

```
HireLens_AI/
├── public/                     # Vector assets, favicon.svg, logo.svg
├── src/
│   ├── app/                    # Next.js 14 App Router routes & API endpoints
│   │   ├── page.tsx            # SaaS landing page (Hero, Features, Stats, Testimonials, CTA)
│   │   ├── layout.tsx          # Root layout with AuthProvider & Ambient Glow backdrop
│   │   ├── upload/             # Resume ingestion sandbox & drag-and-drop file processor
│   │   ├── ats-analysis/       # 4-gauge circular score visualization & diagnostic breakdown
│   │   ├── skill-gap/          # Role benchmarking & missing skill discovery matrix
│   │   ├── career-coach/       # "HireLens Career Coach" conversational AI interface
│   │   ├── resume-optimizer/   # Before vs After interactive STAR bullet diff optimizer
│   │   ├── job-match/          # Custom Job Description analyzer & keyword density auditor
│   │   ├── portfolio-analyzer/ # GitHub repository & LinkedIn profile presence audit
│   │   ├── roadmap/            # 30-60-90 day milestone progression & career plan
│   │   ├── analytics/          # Longitudinal score trends & application pipeline tracking
│   │   ├── dashboard/          # Command center with 6-axis Interview Readiness Radar
│   │   ├── features/           # Deep-dive 8-module architectural capability showcase
│   │   ├── pricing/            # Tier pricing calculator with annual discount switch
│   │   ├── login/ & signup/    # Glassmorphic auth with 1-click candidate/recruiter demo bypass
│   │   ├── settings/           # API key manager (Gemini/OpenAI) & profile preferences
│   │   └── api/                # Serverless Next.js API endpoints
│   │       ├── skill-gap/      # REST API for on-demand skill gap analysis
│   │       └── career-coach/   # Streaming / REST API for career coaching dialogue
│   ├── components/             # Reusable UI component library
│   │   ├── layout/             # Glass Navbar with mobile drawer, Footers
│   │   ├── ui/                 # GlassCard, GlassButton, Badge, CircularProgress, StatCard, Typography
│   │   ├── landing/            # HeroSection, FeatureShowcase, StatsSection, CTASection
│   │   └── resume/             # ResumeUploader drag-and-drop component
│   ├── lib/                    # Shared utilities, design tokens, mock resumes, auth context
│   │   ├── auth-context.tsx    # Session management & user roles
│   │   ├── design-tokens.ts    # Brand colors, typography, glassmorphism presets
│   │   ├── mock-resumes.ts     # 5 pre-loaded candidate resumes for instant zero-friction demoing
│   │   ├── skill-taxonomy.ts   # 500+ curated technical skill database across 7 engineering tracks
│   │   └── utils.ts            # clsx / tailwind-merge helper function
│   ├── services/               # Core business logic & deterministic engines
│   │   ├── resume-parser.ts    # NLP regex parsing, token extraction, AST creation
│   │   ├── ats-scorer.ts       # Mathematical 4-gauge weighting algorithm (Formatting, Content, Keyword)
│   │   ├── skill-engine.ts     # Gap detector & benchmark comparator
│   │   ├── ai-career-coach.ts  # Multi-turn coaching dialog with Gemini/OpenAI & offline heuristics
│   │   ├── resume-suggester.ts # Before vs After STAR bullet transformer
│   │   ├── job-matcher.ts      # Jaccard index keyword matcher against job descriptions
│   │   ├── career-roadmap.ts   # 30-60-90 day milestone synthesizer
│   │   └── portfolio-analyzer.ts # GitHub/LinkedIn auditing heuristics
│   └── types/                  # Universal TypeScript domain interfaces
├── project_knowledge/          # System Architecture, AI context, 300+ Q&A, Project Log
└── tests/                      # Unit & integration verification suites
```

---

## 4. Key Domain Concepts for AI Agents

### 4.1 The Google XYZ Formula / STAR Methodology
The ATS Content scoring algorithm looks specifically for structural bullet formulations:
* **X**: Accomplished [what goal / objective]
* **Y**: As measured by [quantifiable metric: %, $, ms, count, scaling factor]
* **Z**: By doing [specific technical action, framework, or algorithm]

*Example Bad Bullet:* "Helped build backend APIs for user authentication."  
*Example Optimized Bullet:* "Architected stateless JWT authentication microservice in Go and Redis, reducing auth latency by 42% across 1.2M daily active users."

### 4.2 Deterministic + Probabilistic Synergy
* When API keys (`GEMINI_API_KEY`, `OPENAI_API_KEY`) are present, HireLens AI queries generative LLMs for natural language polish, hyper-specific contextual advice, and dynamic simulated technical screen interviews.
* When API keys are NOT present, all core engines fall back gracefully to **built-in deterministic heuristics** without crashing or displaying empty screens. This guarantees 100% demo resilience during portfolio evaluations.

---

## 5. Coding & Contribution Rules for AI Systems

1. **Zero Hallucination of Dependencies:** Do not introduce external packages unless strictly necessary. Rely on native Next.js, React, Tailwind, and Node.js primitives.
2. **Strict TypeScript:** Never use `any` when a domain model exists in `src/types/index.ts`. Extend existing interfaces if new fields are required.
3. **Glassmorphic Design Adherence:** Always utilize standard design tokens from `src/lib/design-tokens.ts` and glass classes (`bg-slate-900/60`, `border-white/10`, `backdrop-blur-xl`).
4. **Git Commit Discipline:** Every modification must adhere to the 40-commit roadmap and be logged synchronously in `project_knowledge/PROJECT_LOG.md`.
