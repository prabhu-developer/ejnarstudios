export interface StrengthItem {
  id: string;
  badge: string;
  title: string;
  highlight: string;
  description: string;
  icon: string;
  stat?: string;
}

export const STRENGTHS_DATA: StrengthItem[] = [
  {
    id: 'ready-product',
    badge: '01',
    title: '100% Ready Product',
    highlight: 'Turnkey Delivery',
    description: 'We don’t hand over half-baked concepts. Every project is delivered feature-complete, rigorously tested, and primed for immediate commercial launch.',
    icon: 'CheckCircle2',
    stat: '100%',
  },
  {
    id: 'full-support',
    badge: '02',
    title: 'Full Support',
    highlight: 'Always By Your Side',
    description: 'Direct access to senior engineering and design leads. We provide continuous technical SLAs, proactive monitoring, and real-time maintenance.',
    icon: 'Headphones',
    stat: '24/7',
  },
  {
    id: 'full-documentation',
    badge: '03',
    title: 'Full Documentation',
    highlight: 'Zero Dependency',
    description: 'Clean source code, comprehensive architectural blueprints, API catalogs, and brand identity manuals that empower your internal teams.',
    icon: 'FileText',
    stat: '100%',
  },
  {
    id: 'superior-design',
    badge: '04',
    title: 'Superior Design',
    highlight: 'Awwwards Quality',
    description: 'Bespoke aesthetic systems, subtle micro-interactions, and gold-standard typography that immediately elevate brand equity and user trust.',
    icon: 'Sparkles',
    stat: 'Top 1%',
  },
  {
    id: 'minimum-risks',
    badge: '05',
    title: 'Minimum Risks',
    highlight: 'Battle-Tested Tech',
    description: 'We use verified enterprise frameworks, strict security protocols, and phased milestones to eliminate scope creep and downtime.',
    icon: 'ShieldCheck',
    stat: '0% Fluff',
  },
  {
    id: 'high-readiness',
    badge: '06',
    title: 'High Readiness',
    highlight: 'Rapid Go-To-Market',
    description: 'Pre-built component libraries, battle-tested boilerplate engines, and agile sprint cadence cut time-to-market by up to 60%.',
    icon: 'Zap',
    stat: '60% Faster',
  },
];
