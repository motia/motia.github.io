# Moutia Portfolio — Astro

Static Astro/TypeScript conversion of the Operator-style portfolio template.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

`npm run build` validates `src/data/portfolio.json` with `src/data/schema.ts` before building.

## Data model

Edit profile/project content in `src/data/portfolio.json`.

Fixed website structure lives outside the editable JSON. For now, the lifecycle bar entries are defined in `src/data/site-structure.ts` and validated by `src/data/schema.ts` through `websiteStructureSchema`. This keeps `portfolio.json` focused on content that an Experience Vault GPT should fill.

`src/data/schema.ts` is the contract for generated portfolio content. It rejects unknown top-level keys, so structural fields such as `lifecycle` should not be emitted into `portfolio.json`.

The site uses Astro components only, no client-side framework or hydrated islands. Zod is a dev dependency used by the validation script and is not imported by the browser-side script. The shipped JavaScript is the small vanilla behavior file in `src/scripts/main.ts`.
