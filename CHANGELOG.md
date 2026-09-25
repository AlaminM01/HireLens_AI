# Changelog

All notable changes to the **HireLens AI** platform will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] - 2026-09-25

### Added - Enterprise Initial Release

#### 1. Core Platform & Architecture
- **Next.js 14 App Router Framework:** Hybrid rendering with Server & Client Component separation, TypeScript 5.6 strict mode, and zero-runtime Tailwind CSS.
- **Glassmorphic Design System:** Custom frosted glass tokens (`bg-slate-900/60`, `backdrop-blur-xl`, `border-white/10`), brand colors (`#3B82F6` primary blue, `#8B5CF6` secondary purple, `#0F172A` canvas), and physics-based Framer Motion springs.
- **Auth Provider & Session Management:** `AuthContext` with mock user state, persistent sessions, and 1-click candidate/recruiter demo authentication bypass.

#### 2. Resume Ingestion & ATS Intelligence
- **Resume Upload Sandbox:** Multi-stage simulated ingestion pipeline (Virus Scan, OCR/PDF extraction, Structural parsing) with drag-and-drop and 5 pre-loaded realistic candidate profiles.
- **NLP Resume Parser:** Regex-based tokenizer extracting contact information, experience milestones, education, and categorized skills into a strongly-typed AST.
- **Deterministic ATS Scoring Engine:** 4-gauge mathematical scoring system (*Overall*, *Formatting [25%]*, *Content [40%]*, *Keywords [35%]*) detecting critical parser blockers and positive highlights.
- **Interactive ATS Dashboard:** Radial SVG gauges, critical issues callouts, and 6-axis Interview Readiness Radar.

#### 3. Career Optimization & AI Modules
- **Skill Gap Analysis Matrix:** Benchmark comparison against 5 target roles (*Software Engineer*, *Full Stack Developer*, *Java Developer*, *Data Analyst*, *AI/ML Engineer*) with direct curated learning links.
- **AI Career Coach Chatbot:** Multi-turn conversational interface powered by Google Gemini and OpenAI with deterministic heuristic fallback for offline reliability.
- **Before vs After Resume Suggester:** Comparative diff optimizer transforming passive task descriptions into quantified Google XYZ / STAR bullet points.
- **Job Match Analyzer:** Jaccard/keyword density parser evaluating resumes against user-provided Job Descriptions with match percentage and keyword deficit badges.
- **Portfolio & Profile Auditor:** Evaluates GitHub repositories (commits, stars, READMEs) and LinkedIn profile presence with actionable recruiter tips.
- **30-60-90 Day Career Roadmap:** Structured timeline with estimated hours, interactive task checklists, and progression milestones.
- **Analytics & Pipeline Tracker:** Longitudinal ATS score trajectory tracking across resume revisions and application Kanban tracker.

#### 4. Documentation & AI Knowledge System
- **Comprehensive README:** Hero banner, architecture diagrams, feature matrix, installation guide, and author credentials.
- **System Architecture Guide (`SYSTEM_ARCHITECTURE.md`):** C4 diagrams, sequence workflows, mathematical formulas, and PostgreSQL Prisma ERD schema.
- **AI Context & Agent Primer (`AI_CONTEXT.md`, `QUICK_START_FOR_AI.md`):** Architectural mental map and instructions for autonomous coding agents.
- **Master ChatGPT Prompt (`CHATGPT_PROMPT.txt`):** System prompt turning any LLM into the HireLens Career Coach.
- **Project Q&A (`PROJECT_QA.md`):** 315 questions and answers (105 Viva Voce, 105 Deep Technical & System Design, 105 Behavioral STAR scenarios).
- **Engineering Ledger (`PROJECT_LOG.md`):** 40-commit detailed audit trail tracking Commit #, Hash, Date, Files Changed, Purpose, and Impact.
- **Governance:** `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `PROJECT_STRUCTURE.md`, and MIT `LICENSE`.
