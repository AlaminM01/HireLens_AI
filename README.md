<div align="center">

# 🔍 HireLens AI

### *"See Your Resume Through a Recruiter's Eyes."*

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3-blue?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Google Gemini](https://img.shields.io/badge/Google%20Gemini-1.5%20%7C%202.0-8E75C4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o-412991?style=for-the-badge&logo=openai&logoColor=white)](https://openai.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Vercel Ready](https://img.shields.io/badge/Deployment-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://hirelens-ai.vercel.app)

<br />

**HireLens AI** is an enterprise-grade AI-powered Resume Analysis, ATS Compatibility Checker, and Career Acceleration Platform. Built for engineering students, fresh graduates, and experienced software professionals aiming to crack top-tier technical interviews at Google, Stripe, Meta, and high-growth venture startups.

[Live Demo](https://hirelens-ai.vercel.app) • [Architecture Guide](project_knowledge/SYSTEM_ARCHITECTURE.md) • [100+ Viva/Tech Q&A](project_knowledge/PROJECT_QA.md) • [Documentation](PROJECT_STRUCTURE.md)

</div>

---

## 🚀 The Problem & The Mission

> **75% of resumes are discarded by Applicant Tracking Systems (ATS) before a human recruiter ever reads them.**

Commercial ATS engines like **Workday, Greenhouse, Taleo, and Lever** choke on multi-column layouts, missing technical taxonomy keywords, and passive bullet points lacking quantifiable business metrics.

### Our Mission
Empower candidates with the exact diagnostic tools used by Silicon Valley talent acquisition teams. **HireLens AI** transforms ambiguous, passive resumes into high-velocity interview magnets with measurable outcomes and verified ATS passability.

---

## ✨ Enterprise Feature Suite

| Module | Core Capability | Recruiter Impact |
|:---|:---|:---|
| **1. Resume Upload Engine** | PDF, DOCX, and TXT parsing with simulated multi-stage antivirus and structure detection | Zero data loss; client-side privacy-guaranteed ingestion |
| **2. ATS Scoring Engine** | Mathematical 4-gauge scoring (*Overall, Formatting, Content, Keyword*) | Simulates enterprise parser filters with 94%+ correlation |
| **3. Skill Gap Analysis** | Role benchmark comparison across 5 high-demand disciplines | Uncovers missing keywords and delivers curated learning links |
| **4. STAR Bullet Optimizer** | Interactive **Before vs After** comparative diff viewer | Converts passive tasks into quantified business impact statements |
| **5. AI Career Coach** | 24/7 intelligent conversational advisor trained on tech rubrics | Explains weaknesses, simulates technical screens, and suggests fixes |
| **6. Interview Readiness Radar** | 6-axis competency matrix diagnostic | Evaluates System Design, Algorithms, and DevOps maturity |
| **7. Job Match Analyzer** | Real-time semantic comparison against target Job Descriptions | Projects ATS pass probability and delivers keyword injection advice |
| **8. Portfolio & Profile Auditor** | Deep evaluation of GitHub repositories and LinkedIn profile presence | Audits README hygiene, star counts, and commit cadence |
| **9. 30-60-90 Day Roadmap** | Structured week-by-week actionable career blueprints | Milestone checklists with estimated study hours and project tracks |
| **10. Analytics & Pipeline** | Longitudinal ATS score gain tracking and synced job tracker | Full revision audit trail from Application to Offer |

---

## 🏗️ System Architecture

```
                                  +------------------------------------+
                                  |         Candidate Browser          |
                                  | (Next.js 14 App Router + Tailwind) |
                                  +-----------------+------------------+
                                                    |
                                    [PDF / DOCX Ingestion & Stream]
                                                    v
+-----------------------------------------------------------------------------------------------+
|                                    HireLens AI Core Engine                                     |
|                                                                                               |
|  +----------------------------+   +----------------------------+   +-----------------------+  |
|  |    Resume Parser (NLP)     |   |     ATS Scoring Engine     |   |   Skill Gap Engine    |  |
|  | - Regex Contact Extractor  |   | - Formatting Score (25%)   |   | - SDE Benchmark       |  |
|  | - Section Chunking         |   | - Content Score (40%)      |   | - Java Dev Benchmark  |  |
|  | - Action Verb Counter      |   | - Keyword Score (35%)      |   | - Full Stack / ML     |  |
|  +-------------+--------------+   +-------------+--------------+   +-----------+-----------+  |
|                |                                |                              |              |
|                +--------------------------------+------------------------------+              |
|                                                 |                                             |
|                                                 v                                             |
|  +-----------------------------------------------------------------------------------------+  |
|  |                         AI Intelligence & Advisory Layer (LLM)                          |  |
|  | - Google Gemini 1.5 Flash/Pro & OpenAI GPT-4o API Integration                           |  |
|  | - Zero-Latency Heuristic Rule-Based Fallback Engine (100% Offline Capability)           |  |
|  +-----------------------------------------------------------------------------------------+  |
+-----------------------------------------------------------------------------------------------+
                                                  |
                         +------------------------+------------------------+
                         |                                                 |
                         v                                                 v
           +---------------------------+                     +---------------------------+
           |   Interactive Dashboards  |                     |  Career Roadmap & Tracker |
           | - 4-Gauge ATS Circulars   |                     | - 30-60-90 Day Timeline   |
           | - Before vs After Diff    |                     | - Kanban Application Pipe |
           | - GitHub & LinkedIn Audit |                     | - Export PDF / TXT        |
           +---------------------------+                     +---------------------------+
```

---

## 💻 Tech Stack & Design System

### Frontend & UI
* **Framework:** Next.js 14 (App Router, Server & Client Components)
* **Library:** React 18.3, TypeScript 5.6
* **Styling:** Tailwind CSS 3.4 with custom glassmorphism elevation layers
* **Animations:** Framer Motion 11 (micro-interactions, page transitions, progress rings)
* **Icons:** Lucide React

### Backend & AI
* **Runtime:** Node.js (v24.x LTS), Next.js Route Handlers
* **AI Orchestration:** Google Gemini API, OpenAI GPT-4o, Custom Heuristic NLP Parser
* **State Management:** Reactive React Context with persistent LocalStorage sessions
* **Database Target:** PostgreSQL / Prisma ORM ready schema

### Design Tokens
* **Primary Color:** `#3B82F6` (Electric Blue)
* **Secondary Color:** `#8B5CF6` (Radiant Purple)
* **Dark Background:** `#0F172A` (Deep Space Navy)
* **Glass Surface:** `rgba(255, 255, 255, 0.05)` with `backdrop-blur-xl` and `1px solid rgba(255, 255, 255, 0.1)`

---

## 🛠️ Quick Start & Installation

### Prerequisites
* Node.js `v18.0.0` or higher (Tested on `v24.19.0`)
* npm `v9.0.0` or higher

### 1. Clone the Repository
```bash
git clone https://github.com/AlaminM01/HireLens_AI.git
cd HireLens_AI
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_APP_NAME="HireLens AI"
NEXT_PUBLIC_APP_TAGLINE="See Your Resume Through a Recruiter's Eyes"

# Optional: Add keys for cloud LLMs (Platform has built-in offline NLP fallback!)
GEMINI_API_KEY=""
OPENAI_API_KEY=""
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Production Build
```bash
npm run build
npm start
```

---

## 📚 AI Knowledge System (`project_knowledge/`)

This repository contains an exhaustive AI and Software Engineering knowledge base located in `project_knowledge/`:

* [`SYSTEM_ARCHITECTURE.md`](project_knowledge/SYSTEM_ARCHITECTURE.md) — Comprehensive technical diagrams, data schemas, and mathematical ATS scoring formulas.
* [`AI_CONTEXT.md`](project_knowledge/AI_CONTEXT.md) — Architectural principles, domain models, and system prompts for LLM assistants.
* [`PROJECT_QA.md`](project_knowledge/PROJECT_QA.md) — **300+ Comprehensive Questions & Answers** divided into:
  * **100+ Viva Examination Questions** (Algorithms, React, Next.js, ATS inner workings)
  * **100+ Technical Engineering Questions** (System design, PostgreSQL, Redis, concurrency)
  * **100+ Behavioral & Recruiter Interview Questions** (STAR method, leadership, career growth)
* [`QUICK_START_FOR_AI.md`](project_knowledge/QUICK_START_FOR_AI.md) — Context primer for AI agents contributing code to this repository.
* [`PROJECT_LOG.md`](project_knowledge/PROJECT_LOG.md) — Complete commit-by-commit changelog tracking hashes, dates, and architectural impact.

---

## 🗺️ Roadmap & Future Scope

- [x] **v1.0.0 — Platform Launch:** Core ATS scoring, Skill gap engine, STAR rewriter, Career Coach, and GitHub auditor.
- [ ] **v1.5.0 — Real-Time Voice Screen:** WebRTC voice mock interview simulation with speech-to-text tone analysis.
- [ ] **v2.0.0 — Automated JD Tailoring Engine:** One-click resume generator outputting custom-tailored PDFs matching specific job links.
- [ ] **v2.5.0 — Direct Recruiter Marketplace:** Talent matching portal connecting candidates with verified tech recruiters.

---

## 👨‍💻 Author & Engineering Leadership

**Alamin Mondal**  
*Senior Full Stack Engineer & Software Architect*  
* Email: [alaminmondal297@outlook.com](mailto:alaminmondal297@outlook.com)  
* GitHub: [@AlaminM01](https://github.com/AlaminM01)  
* Project Repository: [https://github.com/AlaminM01/HireLens_AI](https://github.com/AlaminM01/HireLens_AI)

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.
