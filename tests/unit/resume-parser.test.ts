import assert from 'node:assert/strict';
import { ResumeParserService } from '../../src/services/resume-parser';
import { MOCK_RESUMES } from '../../src/lib/mock-resumes';

console.log('🧪 Running Unit Tests: ResumeParserService...\n');

// Test 1: Basic text parsing and metadata extraction
{
  const sample = MOCK_RESUMES['Software Engineer']; // Alamin Mondal
  const parsed = ResumeParserService.parse(sample.rawText, sample.fileName);

  assert.ok(parsed, 'Parsed resume object should exist');
  assert.equal(parsed.fileName, sample.fileName, 'File name should match parameter');
  assert.ok(parsed.rawText.length > 100, 'Raw text should be preserved');
  assert.ok(parsed.email, 'Email should be extracted');
  assert.match(parsed.email, /@/, 'Email should contain @ symbol');
  console.log('  ✅ Test 1 Passed: Basic text parsing & metadata extraction');
}

// Test 2: Contact Information extraction heuristics
{
  const rawText = `
    Jane Doe
    jane.doe@techcorp.io | (555) 123-4567 | San Francisco, CA
    https://linkedin.com/in/janedoe | https://github.com/janedoe
    
    Professional Summary
    Senior Software Engineer with 6+ years of experience.
  `;

  const parsed = ResumeParserService.parse(rawText, 'jane_resume.pdf');
  assert.equal(parsed.email, 'jane.doe@techcorp.io', 'Email should match exact address');
  assert.ok(parsed.phone, 'Phone number should be parsed');
  assert.ok(parsed.linkedinUrl, 'LinkedIn URL should be captured');
  assert.ok(parsed.githubUrl, 'GitHub URL should be captured');
  console.log('  ✅ Test 2 Passed: Contact info extraction heuristics');
}

// Test 3: Technical Skills extraction against taxonomy
{
  const rawText = `
    Skills & Competencies:
    Languages: TypeScript, JavaScript, Python, Java, SQL, Go
    Frameworks: Next.js, React, Node.js, Express, Tailwind CSS
    DevOps: Docker, Kubernetes, AWS, CI/CD, Git
    Databases: PostgreSQL, MongoDB, Redis
  `;

  const parsed = ResumeParserService.parse(rawText);
  assert.ok(parsed.skills.length >= 8, 'Should extract at least 8 unique technical skills');
  
  const skillNames = parsed.skills.map(s => s.toLowerCase());
  assert.ok(skillNames.includes('typescript'), 'Should extract TypeScript');
  assert.ok(skillNames.includes('react'), 'Should extract React');
  assert.ok(skillNames.includes('docker'), 'Should extract Docker');
  assert.ok(skillNames.includes('postgresql'), 'Should extract PostgreSQL');
  console.log('  ✅ Test 3 Passed: Technical skills extraction against taxonomy');
}

// Test 4: Section chunking and summary extraction
{
  const sample = MOCK_RESUMES['AI/ML Engineer'];
  const parsed = ResumeParserService.parse(sample.rawText);

  assert.ok(parsed.summary.length > 20, 'Summary section should be populated');
  assert.ok(parsed.rawText.length > 0, 'Raw text should be preserved');
  console.log('  ✅ Test 4 Passed: Section chunking and summary extraction');
}

console.log('🎉 All ResumeParserService Unit Tests Passed!\n');
