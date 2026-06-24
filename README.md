# Moutia Portfolio — Astro

Static Astro/TypeScript conversion of the Operator-style portfolio template.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

`npm run build` validates `src/data/portfolio.json` with `src/data/schema.ts` before building. The schema and Zod are build-time only and are not imported by the page or shipped to the browser output.

## Data

Edit portfolio content in `src/data/portfolio.json`.
Edit validation in `src/data/schema.ts`.

The site uses Astro components only, no client-side framework or hydrated islands. The shipped JavaScript is the small vanilla behavior file in `src/scripts/main.ts`.
