import { readFileSync } from 'node:fs';
import { portfolioSchema, websiteStructureSchema } from './schema';
import { lifecycleEntries } from './site-structure';

const raw = readFileSync(new URL('./portfolio.json', import.meta.url), 'utf8');
const portfolio = JSON.parse(raw) as unknown;
const contentResult = portfolioSchema.safeParse(portfolio);
const structureResult = websiteStructureSchema.safeParse({ lifecycle: lifecycleEntries });

if (!contentResult.success) {
  console.error('Invalid portfolio data:');
  console.error(contentResult.error.format());
  process.exit(1);
}

if (!structureResult.success) {
  console.error('Invalid hardcoded website structure:');
  console.error(structureResult.error.format());
  process.exit(1);
}

console.log('Portfolio data and hardcoded website structure validated.');
