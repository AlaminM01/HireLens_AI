import { NextRequest, NextResponse } from 'next/server';
import { SkillEngineService } from '@/services/skill-engine';
import { TargetRole } from '@/types';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { skills = [], targetRole = 'Software Engineer' } = body;

    const result = SkillEngineService.analyze(skills, targetRole as TargetRole);

    return NextResponse.json({
      success: true,
      data: result,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
