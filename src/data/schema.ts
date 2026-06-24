import { z } from 'zod';

const nonEmpty = z.string().min(1);
const href = z.string().min(1);
const rgb = z.string().regex(/^\d{1,3},\d{1,3},\d{1,3}$/, 'Expected RGB triplet like "217,119,6"');

const actionSchema = z.object({
  label: nonEmpty,
  href,
  variant: z.enum(['primary', 'ghost']),
  external: z.boolean().optional()
});

const richPartSchema = z.object({
  text: z.string(),
  strong: z.boolean().optional()
});

const splitTitleSchema = z.object({
  main: nonEmpty,
  emphasis: nonEmpty
});

const navLinkSchema = z.object({
  label: nonEmpty,
  href: href.refine((value) => value.startsWith('#'), 'Navigation links should target page sections'),
  section: nonEmpty
});

const availabilityLinkSchema = z.object({
  type: z.enum(['email', 'linkedin', 'github', 'toptal', 'location']),
  label: nonEmpty,
  value: nonEmpty,
  href: href.optional()
});

const capabilitySchema = z.object({
  icon: z.enum(['money', 'systems', 'architecture', 'modernization', 'data', 'ai']),
  title: nonEmpty,
  body: nonEmpty,
  tags: z.array(nonEmpty).min(1)
});

const stageSchema = z.object({
  id: z.string().regex(/^s\d+$/),
  phase: nonEmpty,
  label: nonEmpty,
  range: nonEmpty,
  phaseBadge: nonEmpty,
  company: nonEmpty,
  role: nonEmpty,
  meta: z.array(nonEmpty).min(1),
  industry: nonEmpty,
  outcomesTitle: nonEmpty,
  outcomes: z.array(nonEmpty).min(1),
  tech: z.array(nonEmpty).min(1)
});

const projectSchema = z.object({
  number: nonEmpty,
  domain: nonEmpty,
  title: nonEmpty,
  description: nonEmpty,
  stack: z.array(nonEmpty).min(1),
  accentRgb: rgb
});

const pipelineStepSchema = z.object({
  number: nonEmpty,
  icon: z.enum(['folder', 'flask', 'database', 'chart', 'ai']),
  label: nonEmpty,
  description: nonEmpty
});

export const portfolioSchema = z.object({
  site: z.object({
    title: nonEmpty,
    description: nonEmpty,
    author: nonEmpty,
    year: z.number().int().min(2000)
  }),
  nav: z.object({
    logo: nonEmpty,
    links: z.array(navLinkSchema).min(1)
  }),
  hero: z.object({
    eyebrow: nonEmpty,
    name: nonEmpty,
    phrases: z.array(nonEmpty).min(1),
    descriptionParts: z.array(richPartSchema).min(1),
    stats: z.array(z.object({ value: nonEmpty, label: nonEmpty })).min(1),
    actions: z.array(actionSchema).min(1)
  }),
  proof: z.object({
    kicker: nonEmpty,
    title: nonEmpty,
    descriptionParts: z.array(richPartSchema).min(1),
    badge: z.object({
      stars: nonEmpty,
      title: nonEmpty,
      subtitle: nonEmpty,
      brand: nonEmpty,
      cta: nonEmpty,
      href
    })
  }),
  availability: z.object({
    eyebrow: nonEmpty,
    title: z.object({ prefix: nonEmpty, strong: nonEmpty }),
    description: nonEmpty,
    links: z.array(availabilityLinkSchema).min(1)
  }),
  lifecycle: z.array(z.object({ number: nonEmpty, name: nonEmpty, description: nonEmpty })).min(1),
  capabilitiesSection: z.object({
    label: nonEmpty,
    title: splitTitleSchema,
    subtitle: nonEmpty
  }),
  capabilities: z.array(capabilitySchema).min(1),
  stagesSection: z.object({
    label: nonEmpty,
    title: splitTitleSchema,
    subtitle: nonEmpty
  }),
  stages: z.array(stageSchema).min(1),
  projectsSection: z.object({
    label: nonEmpty,
    title: splitTitleSchema
  }),
  projects: z.array(projectSchema).min(1),
  aiSection: z.object({
    label: nonEmpty,
    title: splitTitleSchema,
    subtitle: nonEmpty,
    pipeline: z.array(pipelineStepSchema).min(1),
    strengthsLabel: nonEmpty,
    strengths: z.array(nonEmpty).min(1),
    deepeningLabel: nonEmpty,
    deepening: z.array(nonEmpty).min(1),
    quote: nonEmpty
  }),
  contact: z.object({
    eyebrow: nonEmpty,
    title: splitTitleSchema,
    copy: nonEmpty,
    actions: z.array(actionSchema).min(1),
    footerTech: z.array(nonEmpty).min(1)
  })
}).superRefine((data, ctx) => {
  const ids = new Set(data.stages.map((stage) => stage.id));
  if (ids.size !== data.stages.length) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'Stage IDs must be unique', path: ['stages'] });
  }

  const firstStageId = data.stages[0]?.id;
  if (firstStageId !== 's0') {
    ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'First stage should use id "s0" so the default active panel is predictable', path: ['stages', 0, 'id'] });
  }
});

export type PortfolioData = z.infer<typeof portfolioSchema>;
