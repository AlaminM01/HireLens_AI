import { NextRequest, NextResponse } from 'next/server';
import { AICareerCoachService } from '@/services/ai-career-coach';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message, resumeContext, targetRole = 'Software Engineer' } = body;

    if (!message) {
      return NextResponse.json(
        { success: false, error: 'Message is required' },
        { status: 400 }
      );
    }

    const response = await AICareerCoachService.respond(message, resumeContext, targetRole);

    return NextResponse.json({
      success: true,
      data: response,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
