import { readFileSync } from 'node:fs';
import { portfolioSchema } from './schema';

const raw = readFileSync(new URL('./portfolio.json', import.meta.url), 'utf8');
const portfolio = JSON.parse(raw) as unknown;
const result = portfolioSchema.safeParse(portfolio);

if (!result.success) {
  console.error('Invalid portfolio data:');
  console.error(result.error.format());
  process.exit(1);
}

console.log('Portfolio data validated.');
