import { JobMatchResult, ResumeData } from '@/types';
import { TECH_SKILLS_DICTIONARY } from './resume-parser';

export const SAMPLE_JOB_DESCRIPTIONS = {
  'Google - Senior Software Engineer': `Title: Senior Software Engineer - Core Infrastructure & Cloud
Company: Google
Location: Mountain View, CA / Remote

About the Role:
We are looking for a Senior Software Engineer to design, scale, and optimize next-generation distributed systems, storage engines, and high-concurrency microservices.

Requirements:
- BS/MS in Computer Science or equivalent technical field.
- 4+ years of professional experience in TypeScript, Go, Java, or C++.
- Deep expertise in Distributed Systems, System Design, and Microservices Architecture.
- Strong proficiency in PostgreSQL, Redis, Apache Kafka, or Spanner.
- Experience with Kubernetes, Docker, and CI/CD pipelines on Google Cloud (GCP) or AWS.
- Demonstrated success leading code reviews, optimizing query latency, and mentoring team members.`,

  'Stripe - Full Stack Engineer': `Title: Full Stack Engineer - Payments Experience
Company: Stripe
Location: San Francisco, CA / Seattle, WA

About the Role:
Stripe builds the financial infrastructure of the internet. We are looking for Full Stack Engineers to build beautiful, resilient, and accessible payment checkout experiences for millions of global businesses.

Requirements:
- Strong experience in modern React, Next.js, TypeScript, and CSS/Tailwind.
- Proven backend development experience with Node.js, Ruby, or Go.
- Solid understanding of REST APIs, GraphQL, and database design with PostgreSQL.
- Experience with unit and integration testing (Jest, Playwright).
- High empathy for developer and merchant user experience.`,

  'Amazon - AI/ML Systems Engineer': `Title: Machine Learning Engineer - GenAI Platform
Company: Amazon Web Services (AWS)
Location: Seattle, WA

About the Role:
Build and scale high-throughput inference serving platforms for generative AI models and Foundation Models.

Requirements:
- 3+ years experience with Python, PyTorch, and Hugging Face.
- Experience deploying LLMs, RAG architectures, and Vector Databases (Pinecone, Qdrant).
- Familiarity with vLLM, TensorRT-LLM, Triton Inference Server, and Docker/Kubernetes.
- Experience with AWS services (SageMaker, ECS, S3).`
};

export class JobMatcherService {
  /**
   * Compare candidate resume against pasted Job Description
   */
  public static analyze(
    resume: ResumeData,
    jobDescription: string,
    jobTitle: string = 'Software Engineer'
  ): JobMatchResult {
    const jdLower = jobDescription.toLowerCase();
    const resumeLower = resume.rawText.toLowerCase();

    // 1. Extract keywords from JD
    const jdKeywords: string[] = [];
    TECH_SKILLS_DICTIONARY.forEach((kw) => {
      const regex = new RegExp(`\\b${kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
      if (regex.test(jdLower)) {
        const formatted = kw
          .split(' ')
          .map(w => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' ');
        jdKeywords.push(formatted);
      }
    });

    const uniqueJdKeywords = Array.from(new Set(jdKeywords));

    // 2. Classify matching vs missing keywords
    const matchingKeywords: string[] = [];
    const missingKeywords: string[] = [];

    uniqueJdKeywords.forEach((kw) => {
      const regex = new RegExp(`\\b${kw.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
      if (regex.test(resumeLower)) {
        matchingKeywords.push(kw);
      } else {
        missingKeywords.push(kw);
      }
    });

    // 3. Compute match percentage
    const matchPercentage = uniqueJdKeywords.length > 0
      ? Math.round((matchingKeywords.length / uniqueJdKeywords.length) * 100)
      : 80;

    // 4. ATS pass probability
    let atsPassProbability: 'High' | 'Medium' | 'Low' = 'Low';
    if (matchPercentage >= 75) atsPassProbability = 'High';
    else if (matchPercentage >= 50) atsPassProbability = 'Medium';

    // 5. Tailoring recommendations
    const tailoringRecommendations: string[] = [];

    if (missingKeywords.length > 0) {
      tailoringRecommendations.push(
        `Explicitly incorporate high-frequency target keywords: ${missingKeywords.slice(0, 4).join(', ')} into your project or experience bullets.`
      );
    }

    if (jdLower.includes('kubernetes') && !resumeLower.includes('kubernetes')) {
      tailoringRecommendations.push(
        'The job emphasizes container orchestration. Mention how you deployed or monitored containers on Kubernetes or AWS ECS.'
      );
    }

    if (jdLower.includes('latency') || jdLower.includes('throughput')) {
      tailoringRecommendations.push(
        'The job stresses performance. Quantify your P95/P99 latency reduction numbers or request throughput metrics.'
      );
    }

    tailoringRecommendations.push(
      'Align your professional summary heading with the exact title in the JD to maximize initial recruiter screen match.'
    );

    return {
      jobTitle,
      matchPercentage: Math.min(100, Math.max(25, matchPercentage)),
      atsPassProbability,
      matchingKeywords,
      missingKeywords,
      missingSkills: missingKeywords,
      tailoringRecommendations,
    };
  }
}
