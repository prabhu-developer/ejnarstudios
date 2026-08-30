export interface StrengthItem {
  id: string;
  badge: string;
  title: string;
  highlight: string;
  description: string;
  icon: string;
  stat?: string;
  metric: string;
  metricLabel: string;
  chips: string[];
}

export const STRENGTHS_DATA: StrengthItem[] = [
  {
    id: 'ready-product',
    badge: '01',
    title: '100% Turnkey Delivery',
    highlight: 'Production Complete',
    description: 'We don’t deliver half-baked prototypes. Every system arrives feature-complete, security-audited, and primed for immediate revenue generation.',
    icon: 'CheckCircle2',
    stat: '100%',
    metric: '100%',
    metricLabel: 'Turnkey Output',
    chips: ['Fully Tested & Seeded', 'Automated CI/CD', 'Immediate Go-Live'],
  },
  {
    id: 'superior-design',
    badge: '02',
    title: 'Awwwards-Grade Visuals',
    highlight: 'Top 1% Aesthetic',
    description: 'Bespoke design systems, gold typography curves, and smooth micro-interactions that command premium market positioning and customer trust.',
    icon: 'Sparkles',
    stat: 'Top 1%',
    metric: 'Top 1%',
    metricLabel: 'Design Standard',
    chips: ['Bespoke Typography', 'Lenis Smooth Scroll', 'Pixel Precision'],
  },
  {
    id: 'full-documentation',
    badge: '03',
    title: 'Full IP & Source Code',
    highlight: 'Zero Dependency',
    description: 'Complete intellectual property handover: clean Git repositories, Swagger API docs, and brand identity design books with zero vendor lock-in.',
    icon: 'FileText',
    stat: '100%',
    metric: '100%',
    metricLabel: 'IP Ownership',
    chips: ['Clean GitHub Repo', 'OpenAPI / Swagger Specs', 'Zero Lock-in'],
  },
  {
    id: 'full-support',
    badge: '04',
    title: '24/7 Dedicated Support',
    highlight: 'Direct Senior Access',
    description: 'Direct Slack / WhatsApp channel with lead architects and designers. Continuous SLA monitoring, rapid hotfixes, and proactive maintenance.',
    icon: 'Headphones',
    stat: '24/7',
    metric: '24/7',
    metricLabel: 'Active SLA Response',
    chips: ['<15m Urgent SLA', 'Direct Senior Devs', 'Proactive Health Watch'],
  },
  {
    id: 'minimum-risks',
    badge: '05',
    title: 'Zero-Risk Architecture',
    highlight: 'Battle-Tested Tech',
    description: 'Modern Next.js, Laravel, and native stacks with automated backups, DDoS mitigation, and transparent milestone-based escrow signoffs.',
    icon: 'ShieldCheck',
    stat: '0% Fluff',
    metric: '0% Fluff',
    metricLabel: 'Risk Elimination',
    chips: ['OWASP Compliant', 'Bank-Grade Auth', 'Transparent Milestones'],
  },
  {
    id: 'high-readiness',
    badge: '06',
    title: 'Rapid Market Velocity',
    highlight: 'Agile Acceleration',
    description: 'Pre-optimized design systems and mature micro-frameworks reduce engineering timelines by up to 60% without cutting quality corners.',
    icon: 'Zap',
    stat: '60% Faster',
    metric: '60%',
    metricLabel: 'Faster Delivery',
    chips: ['Agile 2-Week Sprints', 'Prebuilt UI Tokens', 'Sub-Second TTFB'],
  },
];

