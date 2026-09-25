import { TargetRole, SkillGapAnalysisResult } from '@/types';

export interface RoleBenchmark {
  role: TargetRole;
  coreSkills: string[];
  secondarySkills: string[];
  recommendedSkillsWithResources: {
    skill: string;
    priority: 'Critical' | 'High' | 'Medium' | 'Nice-to-have';
    learningCurve: 'Quick Win' | 'Moderate' | 'Advanced';
    resourceRecommendation: string;
  }[];
}

export const ROLE_SKILL_BENCHMARKS: Record<TargetRole, RoleBenchmark> = {
  'Software Engineer': {
    role: 'Software Engineer',
    coreSkills: ['TypeScript', 'JavaScript', 'Python', 'Data Structures', 'Algorithms', 'System Design', 'Git', 'SQL', 'Docker', 'REST API'],
    secondarySkills: ['Kubernetes', 'Redis', 'Kafka', 'CI/CD', 'AWS', 'Microservices', 'GraphQL'],
    recommendedSkillsWithResources: [
      {
        skill: 'Distributed Systems & Caching (Redis/Kafka)',
        priority: 'Critical',
        learningCurve: 'Moderate',
        resourceRecommendation: 'Designing Data-Intensive Applications (DDIA) & Redis University'
      },
      {
        skill: 'Containerization & Orchestration (Docker/K8s)',
        priority: 'High',
        learningCurve: 'Quick Win',
        resourceRecommendation: 'Docker & Kubernetes Mastery (freeCodeCamp / KodeKloud)'
      },
      {
        skill: 'System Design Interview Patterns',
        priority: 'High',
        learningCurve: 'Advanced',
        resourceRecommendation: 'Alex Xu System Design Interview Vol 1 & 2'
      },
      {
        skill: 'Infrastructure as Code (Terraform)',
        priority: 'Medium',
        learningCurve: 'Moderate',
        resourceRecommendation: 'HashiCorp Official Certified Associate Tutorials'
      },
    ],
  },

  'Java Developer': {
    role: 'Java Developer',
    coreSkills: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'JPA', 'SQL', 'Maven', 'REST API', 'Git'],
    secondarySkills: ['Microservices', 'Apache Kafka', 'Docker', 'Redis', 'PostgreSQL', 'JUnit', 'AWS'],
    recommendedSkillsWithResources: [
      {
        skill: 'Spring Cloud & Distributed Tracing',
        priority: 'Critical',
        learningCurve: 'Moderate',
        resourceRecommendation: 'Spring Cloud Fundamentals & Baeldung Enterprise Guides'
      },
      {
        skill: 'Kafka Event-Driven Architecture',
        priority: 'High',
        learningCurve: 'Moderate',
        resourceRecommendation: 'Confluent Developer Kafka 101 Course'
      },
      {
        skill: 'JVM Performance & Garbage Collection Tuning',
        priority: 'High',
        learningCurve: 'Advanced',
        resourceRecommendation: 'Optimizing Java by Benjamin Evans'
      },
    ],
  },

  'Full Stack Developer': {
    role: 'Full Stack Developer',
    coreSkills: ['React', 'Next.js', 'Node.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'PostgreSQL', 'REST API', 'Git'],
    secondarySkills: ['GraphQL', 'Prisma', 'Docker', 'Redis', 'WebSockets', 'Jest', 'AWS'],
    recommendedSkillsWithResources: [
      {
        skill: 'Next.js 14 Server Actions & SSR',
        priority: 'Critical',
        learningCurve: 'Quick Win',
        resourceRecommendation: 'Next.js Official Documentation & Learn Course'
      },
      {
        skill: 'PostgreSQL Advanced Indexing & Query Tuning',
        priority: 'High',
        learningCurve: 'Moderate',
        resourceRecommendation: 'Use The Index, Luke! & High Performance SQL'
      },
      {
        skill: 'End-to-End Automated Testing (Playwright / Cypress)',
        priority: 'High',
        learningCurve: 'Quick Win',
        resourceRecommendation: 'Testing JavaScript with Kent C. Dodds'
      },
    ],
  },

  'Data Analyst': {
    role: 'Data Analyst',
    coreSkills: ['SQL', 'Python', 'Tableau', 'Power BI', 'Excel', 'Pandas', 'Statistics', 'A/B Testing'],
    secondarySkills: ['Snowflake', 'dbt', 'BigQuery', 'Metabase', 'Machine Learning', 'NumPy'],
    recommendedSkillsWithResources: [
      {
        skill: 'Advanced SQL Window Functions & CTEs',
        priority: 'Critical',
        learningCurve: 'Quick Win',
        resourceRecommendation: 'Mode Analytics Advanced SQL & LeetCode Database'
      },
      {
        skill: 'Data Modeling with dbt & Snowflake',
        priority: 'High',
        learningCurve: 'Moderate',
        resourceRecommendation: 'dbt Learn Fundamentals certification track'
      },
      {
        skill: 'Causal Inference & Experimentation Design',
        priority: 'High',
        learningCurve: 'Advanced',
        resourceRecommendation: 'Trustworthy Online Controlled Experiments (Kohavi)'
      },
    ],
  },

  'AI/ML Engineer': {
    role: 'AI/ML Engineer',
    coreSkills: ['Python', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'Machine Learning', 'Deep Learning', 'SQL', 'Git'],
    secondarySkills: ['LangChain', 'Hugging Face', 'Vector Databases', 'Docker', 'MLflow', 'FastAPI', 'Kubernetes'],
    recommendedSkillsWithResources: [
      {
        skill: 'Large Language Models (LLM) & RAG Architecture',
        priority: 'Critical',
        learningCurve: 'Moderate',
        resourceRecommendation: 'DeepLearning.AI LangChain & Vector Databases for LLMs'
      },
      {
        skill: 'Model Serving & Inference Optimization (vLLM / Triton)',
        priority: 'High',
        learningCurve: 'Advanced',
        resourceRecommendation: 'NVIDIA Triton Inference Server tutorials'
      },
      {
        skill: 'Parameter-Efficient Fine-Tuning (LoRA / QLoRA)',
        priority: 'High',
        learningCurve: 'Moderate',
        resourceRecommendation: 'Hugging Face PEFT Library guides'
      },
    ],
  },
};

export class SkillEngineService {
  /**
   * Get all benchmarked roles
   */
  public static getAvailableRoles(): TargetRole[] {
    return Object.keys(ROLE_SKILL_BENCHMARKS) as TargetRole[];
  }

  /**
   * Analyze skill gaps between candidate resume and target role benchmark
   */
  public static analyze(
    candidateSkills: string[],
    targetRole: TargetRole = 'Software Engineer'
  ): SkillGapAnalysisResult {
    const benchmark = ROLE_SKILL_BENCHMARKS[targetRole] || ROLE_SKILL_BENCHMARKS['Software Engineer'];
    const lowerCandidate = candidateSkills.map(s => s.toLowerCase());

    const allRoleSkills = [...benchmark.coreSkills, ...benchmark.secondarySkills];
    
    // Find current matching skills
    const currentSkills = allRoleSkills.filter(roleSkill => 
      lowerCandidate.includes(roleSkill.toLowerCase())
    );

    // Find missing core skills
    const missingSkills = benchmark.coreSkills.filter(coreSkill => 
      !lowerCandidate.includes(coreSkill.toLowerCase())
    );

    // Match percentage
    const matchPercentage = Math.round(
      (currentSkills.length / Math.max(1, benchmark.coreSkills.length)) * 100
    );

    // Domain readiness
    const domainReadinessScore = Math.min(98, Math.max(35, Math.round(matchPercentage * 0.85 + 15)));

    return {
      targetRole,
      matchPercentage: Math.min(100, matchPercentage),
      currentSkills,
      missingSkills,
      recommendedSkills: benchmark.recommendedSkillsWithResources,
      domainReadinessScore,
    };
  }
}
