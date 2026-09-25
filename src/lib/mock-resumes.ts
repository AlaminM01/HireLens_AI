// Pre-loaded realistic sample resumes for instant user testing across all 5 target roles

export interface MockResume {
  role: string;
  name: string;
  title: string;
  fileName: string;
  rawText: string;
  initialScore: number;
}

export const MOCK_RESUMES: Record<string, MockResume> = {
  'Software Engineer': {
    role: 'Software Engineer',
    name: 'Alamin Mondal',
    title: 'Senior Software Engineer (Distributed Systems & Full Stack)',
    fileName: 'Alamin_Mondal_Software_Engineer_Resume.pdf',
    initialScore: 88,
    rawText: `ALAMIN MONDAL
Email: alaminmondal297@outlook.com | Phone: +1 (555) 392-1084 | Location: San Francisco, CA
LinkedIn: linkedin.com/in/alaminmondal | GitHub: github.com/AlaminM01 | Portfolio: hirelens-ai.vercel.app

PROFESSIONAL SUMMARY
High-velocity Software Engineer with 4+ years of production experience architecting distributed cloud systems, real-time analytics microservices, and AI-driven SaaS applications. Proven track record optimizing latency by 43%, scaling Redis & PostgreSQL pipelines for 2.4M active users, and mentoring junior engineers.

TECHNICAL SKILLS
- Programming Languages: TypeScript, JavaScript, Python, Go, Java, SQL, C++
- Frameworks & Libraries: Next.js, React, Node.js, Express, FastAPI, Tailwind CSS, Framer Motion
- Cloud & DevOps: AWS (EC2, S3, ECS, Lambda), Docker, Kubernetes, CI/CD (GitHub Actions), Terraform
- Databases & Caching: PostgreSQL, MongoDB, Redis, Prisma ORM, Kafka, Elasticsearch
- Architecture & Practices: Microservices, RESTful APIs, GraphQL, TDD, Agile/Scrum, System Design

WORK EXPERIENCE
Senior Full Stack Engineer | Apex Cloud Solutions, San Francisco, CA | 2023 - Present
- Architected event-driven microservices architecture using Node.js, TypeScript, and Apache Kafka, handling 45,000 requests/sec with 99.99% uptime.
- Reduced PostgreSQL query latency by 58% across high-volume transaction tables via automated indexing strategies, read-replicas, and Redis distributed caching.
- Spearheaded the redesign of user dashboard using Next.js 14 and Tailwind CSS, improving Core Web Vitals score from 64 to 98 and reducing bounce rate by 22%.
- Established robust end-to-end CI/CD deployment pipelines using GitHub Actions and AWS ECS, trimming release cycle duration from 4 hours to 11 minutes.

Software Engineer | NovaTech Labs, Boston, MA | 2021 - 2023
- Built and maintained scalable RESTful and GraphQL APIs supporting multi-tenant enterprise billing engines processing $14M+ in ARR.
- Engineered asynchronous worker queues in Python and RabbitMQ to process 1.2M document conversions daily without memory leaks.
- Authored 300+ comprehensive integration and unit tests using Jest and Pytest, boosting test coverage from 68% to 94%.

KEY PROJECTS
HireLens AI - AI Resume & Career Optimization Platform (2024)
- Engineered a full-stack Next.js and Node.js platform analyzing resume ATS compatibility, skill gaps, and recruiter readiness in under 3.5 seconds.
- Integrated OpenAI GPT-4o & Gemini APIs with custom heuristic NLP fallback parsers, supporting PDF and DOCX document extraction.
- GitHub: github.com/AlaminM01/HireLens_AI | Live: hirelens-ai.vercel.app

Distributed Task Scheduler & Job Engine (2023)
- Implemented high-throughput distributed worker queue in Go and Redis with leader election via Raft consensus.
- Handled automatic retry policies, dead-letter queues, and real-time WebSocket metrics monitoring.

EDUCATION
Bachelor of Science in Computer Science & Engineering
University Institute of Technology | Graduated: 2021 | GPA: 3.8 / 4.0
- Relevant Coursework: Data Structures & Algorithms, Distributed Systems, Operating Systems, Database Management`,
  },

  'Java Developer': {
    role: 'Java Developer',
    name: 'Devin Patel',
    title: 'Senior Java Backend Developer',
    fileName: 'Devin_Patel_Java_Developer.docx',
    initialScore: 74,
    rawText: `DEVIN PATEL
Email: devin.patel@techmail.io | Phone: +1 (555) 782-9901 | Location: Austin, TX
LinkedIn: linkedin.com/in/devinpatel-java | GitHub: github.com/devin-backend

SUMMARY
Java Backend Developer with 3 years of hands-on experience in enterprise Spring Boot microservices, multithreading, Hibernate/JPA, and relational database tuning.

TECHNICAL SKILLS
- Core Java 17/21, Spring Boot, Spring Security, Spring Cloud, Hibernate, JPA
- Apache Kafka, RabbitMQ, REST APIs, Microservices Architecture
- PostgreSQL, MySQL, Redis Caching, Maven, Gradle, Docker, Jenkins

EXPERIENCE
Java Backend Engineer | FinCorp Systems | 2022 - Present
- Developed high-throughput REST APIs using Spring Boot and Hibernate for payment authorization processing.
- Integrated Apache Kafka consumer/producer workflows to ingest 20,000 payment webhooks per minute.
- Configured Spring Security OAuth2 and JWT authentication for internal microservices.

Junior Software Engineer | Global Logic | 2020 - 2022
- Maintained legacy Java EE banking portals and migrated monolithic modules to Spring Boot microservices.
- Optimized Oracle SQL queries, reducing batch processing execution times by 30%.

EDUCATION
B.Tech in Information Technology | 2020`,
  },

  'Data Analyst': {
    role: 'Data Analyst',
    name: 'Maya Lin',
    title: 'Senior Product Data Analyst',
    fileName: 'Maya_Lin_Data_Analyst.pdf',
    initialScore: 79,
    rawText: `MAYA LIN
Email: maya.lin@analytics.co | Phone: +1 (555) 234-8899 | Location: Seattle, WA
LinkedIn: linkedin.com/in/mayalin-data | Portfolio: mayalin.dev

PROFILE
Data Analyst with 4 years translating raw transactional and behavioral datasets into revenue-generating business insights using SQL, Python, Tableau, and Snowflake.

SKILLS
- SQL (Advanced Window Functions, CTEs, Query Optimization), Python (Pandas, NumPy, Scikit-learn)
- Tableau, Power BI, Metabase, Snowflake, dbt, BigQuery
- A/B Testing, Cohort Retention Analysis, Statistical Modeling, LTV Forecasting

EXPERIENCE
Lead Product Data Analyst | StreamLine Media | 2022 - Present
- Conducted 40+ rigorous A/B experiments on onboarding funnels, increasing conversion by 18.5%.
- Architected automated dbt data models in Snowflake, saving the business intelligence team 14 manual hours weekly.
- Built Tableau executive dashboard tracked by C-suite executives to monitor ARR and churn metrics.

Data Analyst | MarketPulse Inc. | 2020 - 2022
- Analyzed customer churn data using logistic regression and decision trees in Python.
- Automated weekly KPI metric reporting using Python scripts and Slack webhook notifications.

EDUCATION
BS in Applied Statistics & Economics | University of Washington | 2020`,
  },

  'AI/ML Engineer': {
    role: 'AI/ML Engineer',
    name: 'Kavita Iyer',
    title: 'Machine Learning & LLM Systems Engineer',
    fileName: 'Kavita_Iyer_AIML_Engineer.pdf',
    initialScore: 85,
    rawText: `KAVITA IYER
Email: k.iyer@machineintelligence.ai | Location: San Jose, CA
GitHub: github.com/kavitaiyer-ai | LinkedIn: linkedin.com/in/kavitaiyer-ai

SUMMARY
AI/ML Engineer specializing in Large Language Model (LLM) fine-tuning, RAG (Retrieval-Augmented Generation), vector databases, PyTorch, and deploying production inference pipelines on Kubernetes.

SKILLS
- Machine Learning & Deep Learning: PyTorch, TensorFlow, Hugging Face Transformers, LangChain, LlamaIndex
- MLOps & Deployment: Triton Inference Server, vLLM, Docker, Kubernetes, MLflow, AWS SageMaker
- Data & Vector Stores: Pinecone, Qdrant, ChromaDB, FAISS, PostgreSQL pgvector
- Languages: Python, C++, CUDA (basics), SQL

EXPERIENCE
Machine Learning Engineer | Synthetix AI | 2023 - Present
- Designed and deployed end-to-end RAG pipelines using LangChain, Pinecone, and Claude 3.5 Sonnet, reducing hallucinations by 64% for 50 enterprise clients.
- Optimized LLM inference throughput using vLLM and TensorRT-LLM, cutting GPU serving costs by 48%.
- Fine-tuned open-source Llama 3 models on 200,000 domain-specific medical documents using LoRA and QLoRA.

Data Scientist & ML Intern | Visionary Labs | 2022 - 2023
- Built computer vision anomaly detection models using ResNet and YOLOv8 with 96.2% precision.

EDUCATION
M.S. in Artificial Intelligence | Stanford University (2022)
B.S. in Computer Science | UC Berkeley (2020)`,
  },

  'Full Stack Developer': {
    role: 'Full Stack Developer',
    name: 'Marcus Vance',
    title: 'Full Stack Developer (React / Node / PostgreSQL)',
    fileName: 'Marcus_Vance_FullStack.pdf',
    initialScore: 82,
    rawText: `MARCUS VANCE
Email: marcus.vance@codelab.dev | Phone: +1 (555) 431-2900 | Location: Chicago, IL
Portfolio: marcusvance.tech | GitHub: github.com/marcusvance

SUMMARY
Full Stack Web Developer with 3+ years experience building responsive, accessible web applications with React, Next.js, Node.js, TypeScript, and PostgreSQL.

SKILLS
- Frontend: React, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Redux Toolkit
- Backend: Node.js, Express.js, NestJS, REST APIs, GraphQL, Socket.io
- Database & Tools: PostgreSQL, Prisma ORM, Supabase, Git, Docker, Jest, Cypress

EXPERIENCE
Full Stack Developer | HyperScale Web Studios | 2022 - Present
- Created e-commerce storefronts using Next.js 14 and Stripe API, serving 120,000 monthly shoppers.
- Built real-time collaboration features using WebSockets and Redis Pub/Sub.
- Integrated automated testing suites with Jest and Cypress achieving 88% branch coverage.

Web Developer | Creative Pixel Labs | 2021 - 2022
- Built 15+ custom web applications for client startups using React and Tailwind CSS.
- Optimized client site performance to score 90+ on Google Lighthouse metrics.

EDUCATION
B.S. in Software Engineering | Illinois Institute of Technology | 2021`,
  },
};
