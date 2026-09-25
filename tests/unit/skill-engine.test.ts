import assert from 'node:assert/strict';
import { SkillEngineService } from '../../src/services/skill-engine';
import { ResumeParserService } from '../../src/services/resume-parser';
import { MOCK_RESUMES } from '../../src/lib/mock-resumes';

console.log('🧪 Running Unit Tests: SkillEngineService...\n');

// Test 1: Available roles check
{
  const roles = SkillEngineService.getAvailableRoles();
  assert.ok(roles.length >= 5, 'Should support at least 5 target roles');
  assert.ok(roles.includes('Software Engineer'), 'Should include Software Engineer');
  assert.ok(roles.includes('Full Stack Developer'), 'Should include Full Stack Developer');
  assert.ok(roles.includes('Java Developer'), 'Should include Java Developer');
  assert.ok(roles.includes('Data Analyst'), 'Should include Data Analyst');
  assert.ok(roles.includes('AI/ML Engineer'), 'Should include AI/ML Engineer');
  console.log('  ✅ Test 1 Passed: Supported benchmark roles verified');
}

// Test 2: Gap analysis matching and gap detection
{
  const sample = MOCK_RESUMES['Full Stack Developer'];
  const parsed = ResumeParserService.parse(sample.rawText, sample.fileName);

  const gapResult = SkillEngineService.analyze(parsed.skills, 'Full Stack Developer');

  assert.equal(gapResult.targetRole, 'Full Stack Developer');
  assert.ok(gapResult.matchPercentage >= 0 && gapResult.matchPercentage <= 100, 'Match % should be 0-100');
  assert.ok(gapResult.currentSkills.length > 0, 'Should have verified skills for strong resume');
  assert.ok(Array.isArray(gapResult.missingSkills), 'Missing skills should be an array');
  assert.ok(Array.isArray(gapResult.recommendedSkills), 'Recommended skills should be an array');
  console.log('  ✅ Test 2 Passed: Role gap analysis & match percentage calculation');
}

// Test 3: Cross-role gap variation
{
  const sample = MOCK_RESUMES['AI/ML Engineer'];
  const parsed = ResumeParserService.parse(sample.rawText, sample.fileName);

  const aimlResult = SkillEngineService.analyze(parsed.skills, 'AI/ML Engineer');
  const javaResult = SkillEngineService.analyze(parsed.skills, 'Java Developer');

  assert.ok(aimlResult.matchPercentage > javaResult.matchPercentage, 'AI/ML candidate should match AI role better than Java Developer');
  console.log('  ✅ Test 3 Passed: Cross-role domain specificity verified');
}

console.log('🎉 All SkillEngineService Unit Tests Passed!\n');
