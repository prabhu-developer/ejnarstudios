export interface ProcessStep {
  stepNumber: string;
  days: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export const PROCESS_TIMELINE: ProcessStep[] = [
  {
    stepNumber: '01',
    days: '01–05 Days',
    title: 'Meeting with Client',
    subtitle: 'Strategic Alignment',
    description: 'We sit down with key stakeholders to dissect business goals, target demographics, brand vision, and exact technical requirements.',
    deliverables: ['Scope of Work Blueprint', 'Brand Questionnaire Matrix', 'Technical Requirements Document (TRD)'],
    icon: 'Users',
  },
  {
    stepNumber: '02',
    days: '06–15 Days',
    title: 'Analytics & Research',
    subtitle: 'Data-Driven Insights',
    description: 'Conducting in-depth competitor gap analysis, search intent audits, audience behavioral patterns, and technological feasibility studies.',
    deliverables: ['Competitor Benchmark Audit', 'User Persona & Journey Maps', 'Keyword & Market Opportunity Deck'],
    icon: 'BarChart2',
  },
  {
    stepNumber: '03',
    days: '16–35 Days',
    title: 'Design Stage',
    subtitle: 'Aesthetic Architecture',
    description: 'Developing high-fidelity visual concepts, responsive layouts, motion prototypes, and interactive Figma design systems.',
    deliverables: ['Full-Screen UI Prototypes', 'Design System & Token Library', 'Micro-interaction Motion Previews'],
    icon: 'Layers',
  },
  {
    stepNumber: '04',
    days: '36–45 Days',
    title: 'Design Confirmation',
    subtitle: 'Client Sign-Off',
    description: 'Iterative feedback cycles, design revisions, and final stakeholder signoff before committing architecture to code.',
    deliverables: ['Approved Figma Master File', 'Asset Export Bundle', 'Production Readiness Sign-Off'],
    icon: 'CheckSquare',
  },
  {
    stepNumber: '05',
    days: '46–120 Days',
    title: 'Development & Build',
    subtitle: 'Pixel-Perfect Engineering',
    description: 'Translating approved designs into lightning-fast Next.js code, robust APIs, database structures, and seamless mobile apps.',
    deliverables: ['Production Next.js Codebase', 'API & Database Integration', 'Cross-Browser & WCAG Accessibility QA'],
    icon: 'Code2',
  },
  {
    stepNumber: '06',
    days: '121–200 Days',
    title: 'Marketing Flow & Scale',
    subtitle: 'Growth & Dominance',
    description: 'Rolling out the full-funnel digital strategy: SEO ranking acceleration, high-impact social media cadence, ad campaigns, and PR release.',
    deliverables: ['Live Search Engine Indexing', 'Multi-Channel Ad Campaigns', 'Monthly Analytics & Growth Dashboards'],
    icon: 'TrendingUp',
  },
];
