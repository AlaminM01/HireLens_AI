# Contributing to HireLens AI

Thank you for your interest in contributing to **HireLens AI** ("See Your Resume Through a Recruiter's Eyes")! We welcome contributions from engineers, designers, data scientists, and technical recruiters across the globe.

---

## 📜 Code of Conduct

This project is governed by the [HireLens AI Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code and foster an inclusive, respectful, and harassment-free environment.

---

## 🛠️ Development Workflow

### 1. Prerequisites
- **Node.js**: `v18.18.0` or higher (`v20.x` recommended)
- **Package Manager**: `npm` (v9+)
- **Git**: Configured with your standard GitHub credentials

### 2. Fork & Clone
```bash
# Clone your fork
git clone https://github.com/AlaminM01/HireLens_AI.git
cd HireLens_AI

# Install dependencies
npm install
```

### 3. Branch Naming Conventions
Create a descriptive feature branch:
- `feat/ats-custom-rules`
- `fix/pdf-page-splitting`
- `docs/system-architecture-update`
- `perf/tokenizer-optimization`
- `refactor/career-coach-context`

### 4. Code Standards & Linting
- **TypeScript**: Strict mode is enabled. No untyped `any` without an explicit comment explaining why.
- **Linting**: Run `npm run lint` before committing.
- **Tailwind & Glassmorphism**: Use the semantic design tokens in `src/lib/design-tokens.ts`.
- **Commit Messages**: Follow Conventional Commits:
  - `feat: add export to PDF functionality for resume reviews`
  - `fix: correct regex boundary for multi-word technical skills`
  - `docs: update system sequence diagram in README`

---

## 🧪 Testing Guidelines

Before opening a Pull Request, run the local test suite:
```bash
npm test
```
All unit tests in `tests/` must pass, and new features must include corresponding test coverage.

---

## 🚀 Submitting a Pull Request (PR)

1. Push your branch to GitHub:
   ```bash
   git push origin feat/your-feature-name
   ```
2. Open a Pull Request against the `main` branch.
3. Fill out the PR template:
   - **Summary of Changes**: High-level explanation of what was built or fixed.
   - **Motivation / Issue Linked**: Why this change is necessary.
   - **Screenshots / GIFs**: Required for any visual UI modifications.
   - **Testing Verification**: Proof that `npm test` and `npm run build` succeeded.

---

## 💬 Community & Questions

Have questions or need guidance?
- Open an Issue on GitHub: [Issues Tracker](https://github.com/AlaminM01/HireLens_AI/issues)
- Reach out to project maintainer: **Alamin Mondal** (`alaminmondal297@outlook.com`)
