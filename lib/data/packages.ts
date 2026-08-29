export interface PackageFeature {
  name: string;
  category: 'Design' | 'Development' | 'SEO & Content' | 'Social & Ads' | 'Deliverables';
  designPlan: string | boolean;
  devPlan: string | boolean;
  marketingPlan1: string | boolean;
  marketingPlan2: string | boolean;
  marketingPlan3: string | boolean;
}

export interface PackagePlan {
  id: string;
  name: string;
  tagline: string;
  highlighted?: boolean;
  popular?: boolean;
  badge?: string;
  priceNote: string;
  summary: string;
  bestFor: string;
  keyHighlights: string[];
}

export const PACKAGE_PLANS: PackagePlan[] = [
  {
    id: 'design-plan',
    name: 'Design Plan',
    tagline: 'Brand foundations & visual identity',
    priceNote: 'Custom quote based on scope',
    summary: 'Everything required to establish an iconic, memorable corporate identity across print and digital media.',
    bestFor: 'Startups & existing businesses needing a complete visual rebrand.',
    keyHighlights: [
      'Primary & Responsive Logos',
      'Letterheads & Visiting Cards',
      'Envelopes & Corporate Stationery',
      'Full Vector Asset Kit & Guidelines',
    ],
  },
  {
    id: 'dev-plan',
    name: 'Development Plan',
    tagline: 'Engineering digital products & platforms',
    priceNote: 'Custom quote based on architecture',
    summary: 'High-performance web, e-commerce, and mobile applications built with modern architectural standards.',
    bestFor: 'Brands launching or upgrading modern websites, stores, or mobile apps.',
    keyHighlights: [
      'Static / Dynamic / E-Commerce Website',
      'Web Application with Admin Panel',
      'iOS & Android App Development',
      'Custom Software & API Integrations',
    ],
  },
  {
    id: 'marketing-plan-1',
    name: 'Marketing Plan I',
    tagline: 'Essential organic presence & growth',
    priceNote: 'Monthly retainer',
    summary: 'Consistent organic reach, search foundation, and monthly visual content production.',
    bestFor: 'Early-stage brands establishing a steady digital pulse.',
    keyHighlights: [
      '4–6 Blogs & 100 Directory Submissions',
      '15 Posters + 2 Video Reels',
      '3 Social Media Handles Managed',
      'Ad Campaign Management (Ad budget separate)',
    ],
  },
  {
    id: 'marketing-plan-2',
    name: 'Marketing Plan II',
    tagline: 'Aggressive brand expansion',
    popular: true,
    badge: 'Most Popular',
    priceNote: 'Monthly retainer',
    summary: 'Expanded content output, deeper backlink authority, and multi-channel campaign orchestration.',
    bestFor: 'Growth-stage businesses scaling search rankings and audience community.',
    keyHighlights: [
      '8–10 Blogs & 150 Directory Submissions',
      '20 Posters + 3 Video Reels',
      '4 Social Media Handles Managed',
      'Ad Campaign Management (Ad budget separate)',
    ],
  },
  {
    id: 'marketing-plan-3',
    name: 'Marketing Plan III',
    tagline: 'Maximum market domination & PR',
    priceNote: 'Monthly retainer',
    summary: 'Full-spectrum content machinery, national PR distribution, and high-frequency video production.',
    bestFor: 'Established brands demanding market authority and omni-channel presence.',
    keyHighlights: [
      '13 Blogs & 250 Submissions + PR Release',
      '25 Posters + 5 Video Reels',
      '5 Social Media Handles Managed',
      'Ad Campaign Management (Ad budget separate)',
    ],
  },
];

export const PACKAGE_FEATURES: PackageFeature[] = [
  // Design features
  {
    name: 'Primary Logo Design (Concepts & Revisions)',
    category: 'Design',
    designPlan: '3 Concepts',
    devPlan: false,
    marketingPlan1: false,
    marketingPlan2: false,
    marketingPlan3: false,
  },
  {
    name: 'Responsive Logo Suite (Mobile/App/Favicon)',
    category: 'Design',
    designPlan: true,
    devPlan: false,
    marketingPlan1: false,
    marketingPlan2: false,
    marketingPlan3: false,
  },
  {
    name: 'Visiting Cards & Letterhead Stationery',
    category: 'Design',
    designPlan: true,
    devPlan: false,
    marketingPlan1: false,
    marketingPlan2: false,
    marketingPlan3: false,
  },
  {
    name: 'Envelopes & Corporate Packaging Design',
    category: 'Design',
    designPlan: true,
    devPlan: false,
    marketingPlan1: false,
    marketingPlan2: false,
    marketingPlan3: false,
  },
  // Dev features
  {
    name: 'Static / Dynamic Website Build',
    category: 'Development',
    designPlan: false,
    devPlan: true,
    marketingPlan1: false,
    marketingPlan2: false,
    marketingPlan3: false,
  },
  {
    name: 'E-Commerce Storefront with Payment Gateway',
    category: 'Development',
    designPlan: false,
    devPlan: true,
    marketingPlan1: false,
    marketingPlan2: false,
    marketingPlan3: false,
  },
  {
    name: 'Custom Web Application with Admin Panel',
    category: 'Development',
    designPlan: false,
    devPlan: true,
    marketingPlan1: false,
    marketingPlan2: false,
    marketingPlan3: false,
  },
  {
    name: 'Native / Hybrid iOS & Android Mobile Apps',
    category: 'Development',
    designPlan: false,
    devPlan: true,
    marketingPlan1: false,
    marketingPlan2: false,
    marketingPlan3: false,
  },
  {
    name: 'Custom Software Solutions & RPA Bridges',
    category: 'Development',
    designPlan: false,
    devPlan: true,
    marketingPlan1: false,
    marketingPlan2: false,
    marketingPlan3: false,
  },
  // Marketing & SEO features
  {
    name: 'Long-Form SEO Articles / Month',
    category: 'SEO & Content',
    designPlan: false,
    devPlan: false,
    marketingPlan1: '4–6 Blogs',
    marketingPlan2: '8–10 Blogs',
    marketingPlan3: '13 Blogs',
  },
  {
    name: 'High-Authority Directory Submissions & Backlinks',
    category: 'SEO & Content',
    designPlan: false,
    devPlan: false,
    marketingPlan1: '100 Submissions',
    marketingPlan2: '150 Submissions',
    marketingPlan3: '250 Submissions + PR',
  },
  {
    name: 'Social Media Posters / Month',
    category: 'Social & Ads',
    designPlan: false,
    devPlan: false,
    marketingPlan1: '15 Posters',
    marketingPlan2: '20 Posters',
    marketingPlan3: '25 Posters',
  },
  {
    name: 'High-Definition Video Reels / Month',
    category: 'Social & Ads',
    designPlan: false,
    devPlan: false,
    marketingPlan1: '2 Reels',
    marketingPlan2: '3 Reels',
    marketingPlan3: '5 Reels',
  },
  {
    name: 'Social Handles Managed',
    category: 'Social & Ads',
    designPlan: false,
    devPlan: false,
    marketingPlan1: '3 Handles',
    marketingPlan2: '4 Handles',
    marketingPlan3: '5 Handles',
  },
  {
    name: 'Paid Ad Campaign Setup & Optimization',
    category: 'Social & Ads',
    designPlan: false,
    devPlan: false,
    marketingPlan1: 'Included (Budget sep.)',
    marketingPlan2: 'Included (Budget sep.)',
    marketingPlan3: 'Included (Budget sep.)',
  },
  {
    name: 'Dedicated Account Manager & Monthly Review',
    category: 'Deliverables',
    designPlan: true,
    devPlan: true,
    marketingPlan1: 'Monthly Call',
    marketingPlan2: 'Bi-Weekly Call',
    marketingPlan3: 'Weekly Strategic Review',
  },
];
