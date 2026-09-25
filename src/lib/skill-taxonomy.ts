// Comprehensive Multi-Domain Skill Taxonomy

export interface SkillCategoryMap {
  category: string;
  skills: string[];
}

export const SKILL_TAXONOMY: SkillCategoryMap[] = [
  {
    category: 'Programming Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'Golang', 'C++', 'C#', 'Rust', 'SQL', 'Ruby', 'PHP', 'Swift', 'Kotlin'],
  },
  {
    category: 'Frontend & UI Frameworks',
    skills: ['React', 'Next.js', 'Vue.js', 'Angular', 'Svelte', 'Tailwind CSS', 'Redux', 'HTML5', 'CSS3', 'Framer Motion', 'Webpack', 'Vite'],
  },
  {
    category: 'Backend & APIs',
    skills: ['Node.js', 'Express.js', 'NestJS', 'FastAPI', 'Spring Boot', 'Django', 'REST API', 'GraphQL', 'gRPC', 'WebSockets', 'Microservices'],
  },
  {
    category: 'Cloud, DevOps & Infra',
    skills: ['AWS', 'Azure', 'Google Cloud (GCP)', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Terraform', 'Helm', 'Prometheus', 'Grafana'],
  },
  {
    category: 'Databases & Distributed Caching',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Apache Kafka', 'Elasticsearch', 'RabbitMQ', 'Prisma ORM', 'DynamoDB', 'Snowflake', 'Cassandra'],
  },
  {
    category: 'AI, Machine Learning & Data',
    skills: ['PyTorch', 'TensorFlow', 'Hugging Face', 'LangChain', 'LlamaIndex', 'Vector Databases', 'Pandas', 'NumPy', 'Tableau', 'Scikit-learn', 'LLM Fine-tuning'],
  },
  {
    category: 'Architecture & Testing',
    skills: ['System Design', 'Design Patterns', 'Test-Driven Development (TDD)', 'Jest', 'Cypress', 'Playwright', 'Agile / Scrum', 'Clean Architecture'],
  },
];

export function categorizeSkill(skillName: string): string {
  const lower = skillName.toLowerCase();
  for (const cat of SKILL_TAXONOMY) {
    if (cat.skills.some(s => s.toLowerCase() === lower)) {
      return cat.category;
    }
  }
  return 'Other Technologies';
}

export function groupSkillsByCategory(skills: string[]): Record<string, string[]> {
  const result: Record<string, string[]> = {};
  skills.forEach((skill) => {
    const category = categorizeSkill(skill);
    if (!result[category]) {
      result[category] = [];
    }
    result[category].push(skill);
  });
  return result;
}
