import { ResumeImprovementSuggestion, ResumeData, TargetRole } from '@/types';

export class ResumeSuggesterService {
  /**
   * Generate Before vs After improvement suggestions for a resume
   */
  public static generateSuggestions(
    resume: ResumeData,
    targetRole: TargetRole = 'Software Engineer'
  ): ResumeImprovementSuggestion[] {
    return [
      {
        category: 'Summary',
        title: 'Executive Impact Statement Alignment',
        before: resume.summary && resume.summary.length > 20
          ? resume.summary
          : 'Software Engineer with experience in web applications, programming languages, and working with team members to deliver code on time.',
        after: `High-velocity ${targetRole} with 4+ years of production experience architecting distributed cloud systems, high-concurrency microservices, and modern web architectures. Proven record slashing latency by 43%, sustaining 99.99% uptime for 2.4M active users, and driving automated test coverage from 68% to 94%.`,
        rationale: 'Replaces generic, passive descriptions with targeted technical domains, quantifiable user scale (2.4M), and explicit latency optimization metrics.',
        impactScoreIncrease: 14,
      },
      {
        category: 'Projects',
        title: 'High-Concurrency Project Bullet Re-architecture (STAR)',
        before: 'Worked on a microservices platform with Node.js and TypeScript. Made database queries faster and added Redis for caching.',
        after: 'Architected distributed event-driven microservices processing 45,000 requests/sec with Apache Kafka and Redis, slashing P99 database query latency by 58% across PostgreSQL read-replicas.',
        rationale: 'Applies the Google X-Y-Z formula (Accomplished [X], as measured by [Y], by doing [Z]). Shows exact throughput and architectural trade-offs.',
        impactScoreIncrease: 18,
      },
      {
        category: 'Achievements',
        title: 'DevOps & CI/CD Pipeline Velocity Quantification',
        before: 'Configured Docker and GitHub Actions for continuous integration. Helped developers deploy faster without breaking production.',
        after: 'Engineered zero-downtime CI/CD deployment pipelines on AWS ECS and GitHub Actions, trimming production release cycles from 4 hours to 11 minutes while maintaining 100% rollback reliability.',
        rationale: 'Quantifies concrete business efficiency (4h to 11m) and showcases production reliability mechanisms.',
        impactScoreIncrease: 15,
      },
      {
        category: 'Technical Skills',
        title: 'Categorized High-Density Taxonomy Organization',
        before: 'Skills: React, Next.js, Node, JavaScript, Python, AWS, Docker, Git, SQL, Postgres, Kafka, CSS, HTML.',
        after: 'Languages: TypeScript, JavaScript (ES6+), Python, Go, Java, SQL\nFrontend & UI: Next.js 14, React 18, Tailwind CSS, Framer Motion, Redux\nBackend & Systems: Node.js, Express, FastAPI, GraphQL, Microservices, REST\nDatabases & Cloud: PostgreSQL, Redis, Apache Kafka, AWS (ECS, S3), Docker, CI/CD',
        rationale: 'Disorganized flat skill lists fail ATS categorization parsers. Structuring by domain elevates searchability and visual recruiter scanning speed.',
        impactScoreIncrease: 12,
      },
      {
        category: 'Projects',
        title: 'Testing & Code Quality Verification',
        before: 'Wrote unit tests and integration tests with Jest to make sure there are fewer bugs in the application.',
        after: 'Implemented comprehensive test automation framework with Jest and Cypress, elevating test coverage from 64% to 92% and preventing regression defects across 18 microservices.',
        rationale: 'Provides before/after coverage numbers and demonstrates engineering maturity.',
        impactScoreIncrease: 11,
      },
    ];
  }
}
