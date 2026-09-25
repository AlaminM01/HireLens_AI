import assert from 'node:assert/strict';
import { JobMatcherService, SAMPLE_JOB_DESCRIPTIONS } from '../../src/services/job-matcher';
import { ResumeParserService } from '../../src/services/resume-parser';
import { MOCK_RESUMES } from '../../src/lib/mock-resumes';

console.log('🧪 Running Integration Tests: JobMatcherService...\n');

// Test 1: Full-length JD parsing and match score calculation
{
  const resume = ResumeParserService.parse(
    MOCK_RESUMES['Software Engineer'].rawText,
    MOCK_RESUMES['Software Engineer'].fileName
  );
  const jd = SAMPLE_JOB_DESCRIPTIONS['Google - Senior Software Engineer'];

  const result = JobMatcherService.analyze(resume, jd, 'Senior Software Engineer');

  assert.ok(result, 'Job match result should exist');
  assert.ok(result.matchPercentage >= 0 && result.matchPercentage <= 100, 'Match percentage must be 0-100');
  assert.ok(result.matchingKeywords.length > 0, 'High-qualification resume should have matched keywords');
  assert.ok(Array.isArray(result.missingKeywords), 'Missing keywords should be an array');
  assert.ok(result.tailoringRecommendations.length > 0, 'Tailoring recommendations should be populated');
  console.log(`  ✅ Test 1 Passed: Google Senior SWE JD matching (Score: ${result.matchPercentage}%)`);
}

// Test 2: Role specificity and gap sensitivity
{
  // Compare a Data Analyst resume against an AI/ML role JD
  const resume = ResumeParserService.parse(
    MOCK_RESUMES['Data Analyst'].rawText,
    MOCK_RESUMES['Data Analyst'].fileName
  );
  const jd = SAMPLE_JOB_DESCRIPTIONS['Amazon - AI/ML Systems Engineer'];

  const result = JobMatcherService.analyze(resume, jd, 'Machine Learning Engineer');

  assert.ok(result.missingKeywords.length > 0, 'Data Analyst should have missing skills for AI/ML role');
  assert.ok(result.matchPercentage <= 100, 'Cross-domain match percentage computed');
  console.log(`  ✅ Test 2 Passed: Cross-domain gap sensitivity verified (Score: ${result.matchPercentage}%)`);
}

console.log('🎉 All JobMatcherService Integration Tests Passed!\n');
