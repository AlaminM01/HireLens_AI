import { CareerRoadmapPhase, TargetRole } from '@/types';

export class CareerRoadmapService {
  /**
   * Generate 30-Day, 60-Day, and 90-Day progression blueprint
   */
  public static generate(
    targetRole: TargetRole = 'Software Engineer',
    currentSkills: string[] = []
  ): CareerRoadmapPhase[] {
    return [
      {
        phaseTitle: '30-Day Plan',
        timeframe: 'Days 1 - 30',
        focusArea: 'Foundational Gaps & Resume Modernization',
        keyMilestone: '100% ATS Single-Stream Resume & Core Distributed Systems Foundations',
        goals: [
          `Eliminate primary technical keyword deficits for ${targetRole}`,
          'Transform all work experience bullets into STAR format with quantifiable outcomes',
          'Refresh GitHub profile with modern documentation and automated CI/CD badges'
        ],
        actionChecklist: [
          { item: 'Master Redis data structures (Strings, Hashes, Sorted Sets, Pub/Sub)', isCompleted: true, estimatedHours: 12 },
          { item: 'Build a Dockerized microservice sample with health check probes', isCompleted: true, estimatedHours: 10 },
          { item: 'Incorporate quantifiable latency and throughput metrics on resume', isCompleted: true, estimatedHours: 4 },
          { item: 'Complete 30 foundational Data Structures & Algorithms challenges (Blind 75)', isCompleted: false, estimatedHours: 25 },
        ],
      },
      {
        phaseTitle: '60-Day Plan',
        timeframe: 'Days 31 - 60',
        focusArea: 'High-Concurrency Project & System Design Mastery',
        keyMilestone: 'Production-Grade Architecture Project Deployed Live with Telemetry',
        goals: [
          'Design and deploy an end-to-end distributed systems project on AWS or GCP',
          'Deepen understanding of horizontal scaling, caching strategies, and database indexing',
          'Begin weekly peer mock interviews covering system design diagrams'
        ],
        actionChecklist: [
          { item: 'Architect an event-driven worker queue with Apache Kafka or RabbitMQ', isCompleted: false, estimatedHours: 20 },
          { item: 'Study System Design patterns: Rate Limiters, Distributed Locks, CDN caching', isCompleted: false, estimatedHours: 18 },
          { item: 'Conduct PostgreSQL EXPLAIN ANALYZE optimizations on 1M+ rows', isCompleted: false, estimatedHours: 8 },
          { item: 'Publish live project with interactive demo URL and clean architecture diagrams', isCompleted: false, estimatedHours: 14 },
        ],
      },
      {
        phaseTitle: '90-Day Plan',
        timeframe: 'Days 61 - 90',
        focusArea: 'Interview Execution & Tier-1 Company Applications',
        keyMilestone: 'Landing Recruiter Screen Invites and Cracking Technical Loops',
        goals: [
          'Target 20 top-tier tech companies using customized JD tailoring',
          'Master behavioral questions using the STAR framework with leadership examples',
          'Negotiate competitive offers with counter-offer strategies'
        ],
        actionChecklist: [
          { item: 'Tailor resume for 5 specific dream roles with 90%+ match score', isCompleted: false, estimatedHours: 6 },
          { item: 'Rehearse 10 behavioral stories covering conflict, failure, and mentorship', isCompleted: false, estimatedHours: 10 },
          { item: 'Execute 5 full-length mock technical rounds with senior engineers', isCompleted: false, estimatedHours: 12 },
          { item: 'Engage with internal engineering hiring managers on LinkedIn & GitHub', isCompleted: false, estimatedHours: 8 },
        ],
      },
    ];
  }
}
