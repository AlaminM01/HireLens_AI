import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const startTime = Date.now();

  return NextResponse.json({
    status: 'healthy',
    platform: 'HireLens AI',
    tagline: "See Your Resume Through a Recruiter's Eyes",
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    latencyMs: Date.now() - startTime,
    checks: {
      atsScoringEngine: 'operational',
      skillTaxonomyMatrix: 'operational',
      jobMatcher: 'operational',
      careerCoachAI: 'ready',
      storageCache: 'operational',
    },
    author: {
      name: 'Alamin Mondal',
      email: 'alaminmondal297@outlook.com',
      github: 'https://github.com/AlaminM01/HireLens_AI',
    },
  });
}
