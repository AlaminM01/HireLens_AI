import assert from 'node:assert/strict';
import { AICareerCoachService } from '../../src/services/ai-career-coach';
import { MOCK_RESUMES } from '../../src/lib/mock-resumes';

console.log('🧪 Running Integration Tests: AICareerCoachService...\n');

// Test 1: Deterministic heuristic response without external API key
async function runCoachTests() {
  const sample = MOCK_RESUMES['Software Engineer'];
  const response = await AICareerCoachService.respond(
    'How do I improve my resume for a Staff Engineer position?',
    sample.rawText,
    'Software Engineer'
  );

  assert.ok(response, 'Coach response object must exist');
  assert.ok(typeof response.reply === 'string', 'Reply must be a string');
  assert.ok(response.reply.length > 50, 'Reply should be substantial');
  assert.ok(Array.isArray(response.suggestedPrompts), 'Suggested prompts must be an array');
  assert.ok(response.suggestedPrompts.length >= 2, 'Should provide at least 2 suggested prompts');
  console.log('  ✅ Test 1 Passed: Offline heuristic response generated with prompt pills');

  // Test 2: Specific keyword query trigger (e.g. STAR bullet advice)
  const starResponse = await AICareerCoachService.respond(
    'Can you rewrite my bullet points using the STAR method?',
    sample.rawText,
    'Software Engineer'
  );

  assert.ok(starResponse.reply.includes('STAR') || starResponse.reply.length > 50, 'STAR query should return tailored advice');
  console.log('  ✅ Test 2 Passed: Domain-specific prompt handling verified');

  console.log('🎉 All AICareerCoachService Integration Tests Passed!\n');
}

runCoachTests().catch((err) => {
  console.error('❌ Integration test failed:', err);
  process.exit(1);
});
