# HireLens AI - Quick Start Guide for AI Agents

> **File:** `project_knowledge/QUICK_START_FOR_AI.md`  
> **Target:** Autonomous AI Agents, Cursor, Windsurf, GitHub Copilot, ChatGPT, Claude  
> **Repository:** [AlaminM01/HireLens_AI](https://github.com/AlaminM01/HireLens_AI)  

---

## ⚡ 60-Second Orientation

You are working on **HireLens AI**, an enterprise-grade AI Resume Analysis and Career Optimization Platform built with **Next.js 14 (App Router)**, **React 18**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

### Key Facts:
1. **Operating Environment:** Windows PowerShell. Use `npm.cmd` and `npx.cmd` for shell commands.
2. **Offline-First Demo Mode:** The app requires NO external database or API key to demo. Pre-loaded candidate profiles exist in `src/lib/mock-resumes.ts`.
3. **Core Services:** All resume analysis engines are pure TypeScript services located in `src/services/`.
4. **Theme / Style:** Dark mode palette (`bg-slate-950` / `#0F172A`), glassmorphism cards (`rgba(255,255,255,0.08)`), brand gradients (`#3B82F6` blue to `#8B5CF6` purple).

---

## 🛠️ Essential Commands

```powershell
# Install dependencies
npm.cmd install

# Start local Next.js development server (runs on http://localhost:3000)
npm.cmd run dev

# Run full production build verification
npm.cmd run build

# Run automated test suites
npm.cmd test

# Run ESLint validation
npm.cmd run lint
```

---

## 🗺️ Key File Locations

| Intent | Target File |
|:---|:---|
| Modify ATS Scoring Logic | `src/services/ats-scorer.ts` |
| Add Technical Skills to Taxonomy | `src/lib/skill-taxonomy.ts` |
| Modify Resume Parsing Regex | `src/services/resume-parser.ts` |
| Tune AI Career Coach Prompt | `src/services/ai-career-coach.ts` |
| Modify Before/After Suggestions | `src/services/resume-suggester.ts` |
| Adjust Job Matching Algorithm | `src/services/job-matcher.ts` |
| Update Design Tokens / Theme | `src/lib/design-tokens.ts` & `tailwind.config.ts` |
| Add Preloaded Demo Resumes | `src/lib/mock-resumes.ts` |

---

## 💡 Testing Without API Keys

HireLens AI is architected with dual-mode heuristics:
* **With API Key:** Set `GEMINI_API_KEY` or `OPENAI_API_KEY` in `.env.local` or via `/settings`. The app invokes Google Gemini 1.5/2.0 Pro or OpenAI GPT-4o.
* **Without API Key:** The system automatically executes deterministic NLP heuristics (pattern matching, keyword Jaccard indices, and STAR rule engines). No error modals or dead ends are shown.

---

## ⚠️ Important Windows & Node Caveats

* **PowerShell Execution Policy:** Never call `npm` or `npx` directly if scripts are disabled; always invoke `npm.cmd` or `npx.cmd`.
* **Statement Separators:** In PowerShell, separate commands using `;` (semicolon), NOT `&&`.
* **Git Logging:** After each commit, update `project_knowledge/PROJECT_LOG.md` with commit number, hash, date, files changed, purpose, and impact.
