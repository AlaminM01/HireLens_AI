#!/usr/bin/env node

/**
 * HireLens AI - Master Automated Test Runner
 * Executes all unit and integration test suites and provides a unified CI/CD report.
 */

import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const testSuites = [
  // Unit Test Suites
  { name: 'ResumeParserService (Unit)', file: 'tests/unit/resume-parser.test.ts' },
  { name: 'ATSScorerService (Unit)', file: 'tests/unit/ats-scorer.test.ts' },
  { name: 'SkillEngineService (Unit)', file: 'tests/unit/skill-engine.test.ts' },
  // Integration Test Suites
  { name: 'JobMatcherService (Integration)', file: 'tests/integration/job-matcher.test.ts' },
  { name: 'AICareerCoachService (Integration)', file: 'tests/integration/career-coach.test.ts' },
  { name: 'CareerRoadmapService (Integration)', file: 'tests/integration/roadmap.test.ts' },
];

console.log('===============================================================');
console.log('🚀 HIRELENS AI - AUTOMATED TEST RUNNER & VERIFICATION SUITE');
console.log('===============================================================\n');

let passedSuites = 0;
let failedSuites = 0;
const startTime = Date.now();

for (const suite of testSuites) {
  process.stdout.write(`▶ Running suite: ${suite.name} ... `);
  try {
    const isWindows = process.platform === 'win32';
    const tsxCmd = isWindows ? 'npx.cmd tsx' : 'npx tsx';
    
    execSync(`${tsxCmd} ${suite.file}`, {
      cwd: rootDir,
      stdio: 'pipe',
      encoding: 'utf-8',
    });

    console.log('\x1b[32mPASSED\x1b[0m');
    passedSuites++;
  } catch (error) {
    console.log('\x1b[31mFAILED\x1b[0m');
    console.error(error.stdout || error.message);
    failedSuites++;
  }
}

const duration = ((Date.now() - startTime) / 1000).toFixed(2);

console.log('\n---------------------------------------------------------------');
console.log(`📊 TEST EXECUTION SUMMARY:`);
console.log(`   Total Suites: ${testSuites.length}`);
console.log(`   Passed:       \x1b[32m${passedSuites}\x1b[0m`);
console.log(`   Failed:       ${failedSuites > 0 ? `\x1b[31m${failedSuites}\x1b[0m` : '0'}`);
console.log(`   Elapsed Time: ${duration}s`);
console.log('---------------------------------------------------------------\n');

if (failedSuites > 0) {
  console.error('❌ Test run completed with failures.\n');
  process.exit(1);
} else {
  console.log('✨ All 6 test suites passed successfully! Quality verified.\n');
  process.exit(0);
}
