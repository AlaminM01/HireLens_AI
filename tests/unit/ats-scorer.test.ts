import assert from 'node:assert/strict';
import { ATSScorerService } from '../../src/services/ats-scorer';
import { ResumeParserService } from '../../src/services/resume-parser';
import { MOCK_RESUMES } from '../../src/lib/mock-resumes';

console.log('🧪 Running Unit Tests: ATSScorerService...\n');

// Test 1: Full scoring calculation and bounds check
{
  const sample = MOCK_RESUMES['Software Engineer'];
  const parsed = ResumeParserService.parse(sample.rawText, sample.fileName);
  const scoreResult = ATSScorerService.calculate(parsed, 'Software Engineer');

  assert.ok(scoreResult, 'ATS score result should exist');
  assert.ok(scoreResult.overallScore >= 0 && scoreResult.overallScore <= 100, 'Overall score should be 0-100');
  assert.ok(scoreResult.formattingScore >= 0 && scoreResult.formattingScore <= 100, 'Formatting score should be 0-100');
  assert.ok(scoreResult.contentScore >= 0 && scoreResult.contentScore <= 100, 'Content score should be 0-100');
  assert.ok(scoreResult.keywordScore >= 0 && scoreResult.keywordScore <= 100, 'Keyword score should be 0-100');
  console.log('  ✅ Test 1 Passed: Score calculations and bounds check (0-100)');
}

// Test 2: Formula weighting consistency (40% Content, 35% Keyword, 25% Formatting)
{
  const sample = MOCK_RESUMES['Data Analyst'];
  const parsed = ResumeParserService.parse(sample.rawText, sample.fileName);
  const scoreResult = ATSScorerService.calculate(parsed, 'Data Analyst');

  const calculatedWeighted = Math.round(
    scoreResult.contentScore * 0.40 +
    scoreResult.keywordScore * 0.35 +
    scoreResult.formattingScore * 0.25
  );

  assert.equal(scoreResult.overallScore, calculatedWeighted, 'Overall score must strictly follow 40/35/25 weighting');
  console.log('  ✅ Test 2 Passed: Formula weighting consistency verified');
}

// Test 3: Critical issues detection on weak resumes
{
  const bareMinimumResume = `
    Bob
    Summary: Want a coding job.
    Skills: HTML, CSS.
  `;
  const parsed = ResumeParserService.parse(bareMinimumResume);
  const scoreResult = ATSScorerService.calculate(parsed, 'Software Engineer');

  assert.ok(scoreResult.criticalIssues.length > 0, 'Weak resume should trigger critical issues');
  assert.ok(scoreResult.overallScore < 70, 'Weak resume should score below 70');
  console.log('  ✅ Test 3 Passed: Critical issues correctly detected on weak resume');
}

// Test 4: Positive highlights generation on strong resumes
{
  const sample = MOCK_RESUMES['Software Engineer'];
  const parsed = ResumeParserService.parse(sample.rawText, sample.fileName);
  const scoreResult = ATSScorerService.calculate(parsed, 'Software Engineer');

  assert.ok(scoreResult.positiveHighlights.length > 0, 'Strong resume should generate positive highlights');
  assert.ok(scoreResult.metrics.hasContactInfo, 'Contact info flag should be true');
  assert.ok(scoreResult.metrics.hasQuantifiableMetrics, 'Quantifiable metrics flag should be true');
  console.log('  ✅ Test 4 Passed: Positive highlights and metrics validation verified');
}

console.log('🎉 All ATSScorerService Unit Tests Passed!\n');
