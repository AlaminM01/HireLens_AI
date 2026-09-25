# HireLens AI - System Architecture & Engineering Specifications

> **Tagline:** "See Your Resume Through a Recruiter's Eyes."  
> **Author:** Alamin Mondal  
> **Platform Version:** 1.0.0 (Enterprise Production Edition)

---

## 1. Executive Technical Summary

**HireLens AI** is an enterprise-grade resume intelligence, ATS compatibility auditing, and career acceleration platform. Designed with a decoupled, high-performance architecture, HireLens AI combines deterministic computational linguistics (NLP regular expressions, keyword vector density, STAR formula validation) with probabilistic LLM reasoning (Google Gemini 1.5/2.0 Pro & OpenAI GPT-4o) to deliver sub-second resume diagnostics, actionable gap analysis, and tailored career roadmaps.

```
+---------------------------------------------------------------------------------------+
|                                    HIRELENS AI PLATFORM                               |
+---------------------------------------------------------------------------------------+
|  [Presentation Layer]    Next.js 14 App Router, React 18, Tailwind CSS, Framer Motion  |
|  [Security & Auth]       Client Session Context, Edge Middleware, Token Encryption    |
|  [Core Engines]          ResumeParser, ATSScorer, SkillEngine, JobMatcher, AI Coach   |
|  [AI Integration]        Gemini Pro / GPT-4o API Clients + Deterministic Fallbacks    |
|  [Data Persistence]      PostgreSQL / Prisma ORM + Client Session Storage Caching     |
|  [Infrastructure]        Vercel Serverless & Edge Network + Node.js API Runtimes       |
+---------------------------------------------------------------------------------------+
```

---

## 2. C4 Model Architecture

### Level 1: System Context Diagram

The System Context diagram illustrates how users (Candidates, Freshers, Recruiters) interact with HireLens AI and how HireLens AI interfaces with external identity, LLM, and repository providers.

```mermaid
C4Context
    title System Context Diagram - HireLens AI

    Person(candidate, "Candidate / Engineer", "Job seeker optimizing resume for ATS passability and interview readiness.")
    Person(recruiter, "Recruiter / Talent Lead", "Auditing applicant pool resumes against technical benchmarks.")

    Enterprise_Boundary(b0, "HireLens AI System Boundary") {
        System(hirelens, "HireLens AI Platform", "Full-stack Next.js application delivering ATS scoring, skill gap analysis, and career coaching.")
    }

    System_Ext(gemini, "Google Gemini API", "LLM provider for semantic resume review and interactive coaching.")
    System_Ext(openai, "OpenAI GPT-4o API", "Alternative LLM provider for STAR bullet transformation.")
    System_Ext(github, "GitHub REST API", "Fetches candidate public repository telemetry and commit cadence.")
    System_Ext(db, "PostgreSQL Database", "Stores persistent user accounts, resume snapshots, and audit metrics.")

    Rel(candidate, hirelens, "Uploads resume, runs ATS audit, chats with Coach", "HTTPS / WSS")
    Rel(recruiter, hirelens, "Reviews candidate benchmarks and gap reports", "HTTPS")
    Rel(hirelens, gemini, "Sends sanitized resume tokens for qualitative critique", "HTTPS / JSON")
    Rel(hirelens, openai, "Generates Before-vs-After STAR bullets", "HTTPS / JSON")
    Rel(hirelens, github, "Queries commit history, repo languages, and star counts", "HTTPS / JSON")
    Rel(hirelens, db, "Reads / Writes application tracking, user sessions, score history", "Prisma / TCP")
```

---

### Level 2: Container Diagram

```mermaid
C4Container
    title Container Diagram - HireLens AI Application Layer

    Person(user, "User (Candidate/Recruiter)", "Web browser client")

    Container_Boundary(c0, "HireLens AI Cloud Infrastructure (Vercel)") {
        Container(spa, "Single Page App / UI", "Next.js 14, React 18, Tailwind CSS, Lucide Icons", "Delivers responsive glassmorphic interfaces, interactive score gauges, and dashboards.")
        Container(api, "Serverless API Routes", "Next.js Route Handlers (Node.js)", "Handles file validation, skill gap benchmarking, and AI proxy requests.")
        
        ContainerDb(cache, "Browser Storage & Memory Cache", "localStorage & SessionState", "Immediate client-side caching for instant UI hydration and offline demo resilience.")
        ContainerDb(postgres, "PostgreSQL Database", "Relational Database (Prisma)", "Stores normalized entities: Users, Resumes, Scores, Roadmaps, JobMatches.")
    }

    System_Ext(ai_providers, "External AI Providers", "Google Gemini & OpenAI", "LLM inferencing")

    Rel(user, spa, "Visits hirelens-ai.vercel.app", "HTTPS")
    Rel(spa, api, "Dispatches analysis queries, JD matching, chat prompts", "JSON / REST")
    Rel(spa, cache, "Reads/writes local mock profiles and telemetry", "Browser API")
    Rel(api, ai_providers, "Streams structured prompt payloads", "TLS / REST")
    Rel(api, postgres, "Queries persistent candidate data", "Prisma Connection Pool")
```

---

### Level 3: Component Diagram (Core Engines)

Inside the Next.js application runtime, the system is partitioned into specialized services:

```mermaid
classDiagram
    direction TB
    class ResumeParserService {
        +parse(text, fileMeta): ParsedResume
        -extractContactInfo(text)
        -extractSkills(text)
        -extractSections(text)
        -extractExperience(text)
    }

    class ATSScorerService {
        +calculateATSScore(resume): ATSScoreResult
        -evaluateFormatting(resume, issues): number
        -evaluateContent(resume, issues, highlights): number
        -evaluateKeywords(resume, issues, highlights): number
        -computeReadinessRadar(resume): ReadinessScores
    }

    class SkillEngineService {
        +analyzeGaps(candidateSkills, targetRole): SkillGapResult
        +getAvailableRoles(): string[]
        +getTaxonomy(): SkillTaxonomy
    }

    class JobMatcherService {
        +matchJob(resumeText, candidateSkills, jobDescription): JobMatchResult
        -extractKeywords(text): string[]
        -computeJaccardIndex(setA, setB): number
    }

    class AICareerCoachService {
        +generateChatResponse(messages, resumeContext): CoachResponse
        -callGemini(prompt, history)
        -callOpenAI(prompt, history)
        -generateDeterministicFallback(prompt)
    }

    ResumeParserService --> ATSScorerService : feeds ParsedResume
    ResumeParserService --> SkillEngineService : feeds candidate skills
    ResumeParserService --> JobMatcherService : feeds text & skills
    ATSScorerService --> AICareerCoachService : contextualizes coaching
```

---

## 3. Data Flow & Request Lifecycles

### 3.1 Resume Ingestion and Scoring Pipeline

```mermaid
sequenceDiagram
    autonumber
    actor Candidate as User Browser
    participant Uploader as ResumeUploader (React)
    participant Parser as ResumeParserService
    participant Scorer as ATSScorerService
    participant Taxon as SkillTaxonomy Engine
    participant Store as State / Cache Store

    Candidate->>Uploader: Drops PDF / DOCX or selects Mock Resume
    Uploader->>Uploader: Validates MIME type & File Size (<= 10MB)
    Uploader->>Parser: Executes text extraction & Regex tokenizer
    Parser->>Taxon: Matches n-grams against 500+ Skill Dictionary
    Taxon-->>Parser: Returns normalized SkillSet & categorized tags
    Parser-->>Uploader: Emits ParsedResume AST (Contact, Experience, Skills, Education)
    
    Uploader->>Scorer: calculateATSScore(parsedResume)
    Scorer->>Scorer: 1. Evaluate Formatting (25% weight)
    Scorer->>Scorer: 2. Evaluate Content & Action Verbs (40% weight)
    Scorer->>Scorer: 3. Evaluate Keyword Density (35% weight)
    Scorer->>Scorer: 4. Synthesize 6-Axis Interview Readiness Radar
    Scorer-->>Uploader: Returns ATSScoreResult (Scores, Issues, Highlights)
    Uploader->>Store: Saves to active state & localStorage
    Uploader-->>Candidate: Navigates to /ats-analysis dashboard (<500ms)
```

---

## 4. Mathematical Scoring Model

The HireLens ATS Scoring Engine does not rely on subjective arbitrary scores. It calculates a deterministic, weighted composite score across three core vectors:

$$\text{ATS}_{\text{Overall}} = \left(0.25 \times S_{\text{Formatting}}\right) + \left(0.40 \times S_{\text{Content}}\right) + \left(0.35 \times S_{\text{Keyword}}\right)$$

### 4.1 Formatting Score ($S_{\text{Formatting}}$, Weight: 25%)

Measures structural passability for automated parser engines:

$$S_{\text{Formatting}} = \text{Base}(100) - \sum \text{Penalties}$$

* **Section Completeness:** $-15$ if Summary missing; $-20$ if Experience missing; $-15$ if Skills missing; $-10$ if Education missing.
* **Length Optimization:** $-15$ if total word count $< 250$ (too brief) or $> 1200$ (excessive multi-page bloat for non-executive roles).
* **Contact PII Integrity:** $-10$ if Email missing; $-10$ if Phone missing; $-5$ if LinkedIn URL missing.

### 4.2 Content Quality Score ($S_{\text{Content}}$, Weight: 40%)

Measures semantic strength, action-verb initiative, and quantifiable business outcomes:

$$S_{\text{Content}} = \min\left(100, \, (V_{\text{Action}} \times 3) + (M_{\text{Quant}} \times 8) + (E_{\text{Depth}} \times 10)\right)$$

Where:
* $V_{\text{Action}}$: Count of unique high-impact action verbs (e.g., *Architected, Spearheaded, Engineered, Accelerated, Automated*).
* $M_{\text{Quant}}$: Count of quantified metric patterns matched via Regex:
  $$\text{Regex: } \backslash\d+[\%|\times|k|M|B] \quad \text{or} \quad \backslash\$\backslashd+$$
* $E_{\text{Depth}}$: Experience depth score calculated across chronological career milestones.

### 4.3 Keyword & Technical Density ($S_{\text{Keyword}}$, Weight: 35%)

Measures technical alignment against standardized engineering taxonomies:

$$S_{\text{Keyword}} = \min\left(100, \, \left(\frac{|K_{\text{Identified}}|}{|K_{\text{Benchmark}}|} \times 70\right) + \left(\text{CategoryDiversity} \times 30\right)\right)$$

Where Category Diversity rewards balanced skills across Languages, Frameworks, Cloud/DevOps, Databases, and Architecture.

---

## 5. PostgreSQL Database ERD Schema

The relational schema is configured for production PostgreSQL via Prisma ORM:

```mermaid
erDiagram
    User ||--o{ Resume : owns
    User ||--o{ JobMatch : creates
    User ||--o{ CareerRoadmap : tracks
    User ||--o{ Application : submits
    Resume ||--|| ATSReport : generates
    Resume ||--o{ SkillGap : yields

    User {
        string id PK
        string email UK
        string name
        string targetRole
        string experienceLevel
        datetime createdAt
        datetime updatedAt
    }

    Resume {
        string id PK
        string userId FK
        string fileName
        int fileSize
        string rawText
        json parsedData
        datetime createdAt
    }

    ATSReport {
        string id PK
        string resumeId FK
        int overallScore
        int formattingScore
        int contentScore
        int keywordScore
        json radarScores
        json criticalIssues
        json positiveHighlights
        datetime auditedAt
    }

    SkillGap {
        string id PK
        string resumeId FK
        string targetRole
        int matchPercentage
        string[] verifiedSkills
        string[] missingSkills
        json learningResources
    }

    JobMatch {
        string id PK
        string userId FK
        string jobTitle
        string company
        text jobDescription
        int matchPercentage
        string[] missingKeywords
        datetime analyzedAt
    }

    Application {
        string id PK
        string userId FK
        string company
        string role
        string status
        int matchScore
        datetime appliedDate
    }

    CareerRoadmap {
        string id PK
        string userId FK
        string targetRole
        json plan30Day
        json plan60Day
        json plan90Day
        int completionPercent
    }
```

---

## 6. Security, Privacy & Data Compliance

1. **Client-Side Sandbox Isolation:** Resume documents are parsed in-memory. No raw PDF binary is stored permanently unless the user explicitly logs in and enables cloud syncing.
2. **PII Sanitization:** Before sending prompt context to Google Gemini or OpenAI APIs, contact numbers, email addresses, and physical street addresses are masked with synthetic tokens `[REDACTED_EMAIL]`, `[REDACTED_PHONE]`.
3. **Encrypted API Secret Keys:** Users can provide their own Google Gemini or OpenAI API keys directly in the Settings dashboard. These keys are stored client-side in encrypted local storage and injected only in transient header requests.
4. **Rate Limiting & Abuse Prevention:** Serverless edge endpoints are wrapped with token-bucket rate limiters preventing automated bot exhaustion.

---

## 7. High-Availability Deployment Topology

HireLens AI is built to deploy seamlessly on **Vercel's Edge Network**:
* **Static Assets:** Cached globally across 300+ edge locations (Cloudflare/Vercel Edge).
* **Next.js Serverless Functions:** Auto-scaling Node.js micro-runtimes with cold-start latency $< 80\text{ms}$.
* **Zero-Downtime Releases:** Atomic deployments with preview URLs and automated rollback support.
