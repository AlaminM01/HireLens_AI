import assert from 'node:assert/strict';
import { CareerRoadmapService } from '../../src/services/career-roadmap';

console.log('🧪 Running Integration Tests: CareerRoadmapService...\n');

// Test 1: Full 30-60-90 day roadmap generation
{
  const roadmap = CareerRoadmapService.generate('Software Engineer', ['JavaScript', 'React', 'HTML', 'CSS']);

  assert.ok(Array.isArray(roadmap), 'Roadmap should return an array of phases');
  assert.equal(roadmap.length, 3, 'Roadmap must contain exactly 3 phases (30, 60, 90 days)');

  const [phase1, phase2, phase3] = roadmap;
  assert.equal(phase1.phaseTitle, '30-Day Plan', 'Phase 1 should be 30-Day Plan');
  assert.equal(phase2.phaseTitle, '60-Day Plan', 'Phase 2 should be 60-Day Plan');
  assert.equal(phase3.phaseTitle, '90-Day Plan', 'Phase 3 should be 90-Day Plan');

  assert.ok(phase1.actionChecklist.length >= 3, 'Phase 1 checklist should have at least 3 items');
  assert.ok(phase2.actionChecklist.length >= 3, 'Phase 2 checklist should have at least 3 items');
  assert.ok(phase3.actionChecklist.length >= 3, 'Phase 3 checklist should have at least 3 items');

  const totalHours = phase1.actionChecklist.reduce((sum, item) => sum + item.estimatedHours, 0);
  assert.ok(totalHours > 20, 'Phase 1 should represent meaningful study investment (>20 hrs)');
  console.log(`  ✅ Test 1 Passed: 3-phase roadmap synthesized (${totalHours} estimated study hrs in Phase 1)`);
}

// Test 2: Role customized roadmap goals
{
  const aiRoadmap = CareerRoadmapService.generate('AI/ML Engineer', ['Python', 'SQL']);
  const firstGoal = aiRoadmap[0].goals[0];

  assert.ok(firstGoal.includes('AI/ML Engineer'), 'First goal must reference the target role');
  console.log('  ✅ Test 2 Passed: Role-specific goal tailoring verified');
}

console.log('🎉 All CareerRoadmapService Integration Tests Passed!\n');
