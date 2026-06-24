export const lifecycleEntries = [
  {
    number: '0 → 1',
    name: 'Build It',
    description: 'Idea to working product'
  },
  {
    number: '1 → 10',
    name: 'Stabilize It',
    description: 'Reliability under load'
  },
  {
    number: '10 → 100',
    name: 'Scale It',
    description: 'Architecture for growth'
  },
  {
    number: 'Legacy',
    name: 'Modernize It',
    description: 'Pragmatic evolution'
  }
] as const;

export type LifecycleEntry = typeof lifecycleEntries[number];
