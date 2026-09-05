export interface JobOpening {
  id: string;
  slug: string;
  title: string;
  department: 'Design' | 'Engineering' | 'Marketing' | 'Production';
  location: string;
  type: 'Full-Time' | 'Contract' | 'Hybrid / Remote';
  experience: string;
  shortSummary: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'senior-uiux-designer',
    slug: 'senior-uiux-designer',
    title: 'Senior UI/UX & Brand Designer',
    department: 'Design',
    location: 'Perungudi, India | Buckinghamshire, UK | Texas, USA (Hybrid)',
    type: 'Full-Time',
    experience: '3–6 Years',
    shortSummary: 'Lead visual design systems, brand identities, and Awwwards-tier web/mobile interfaces.',
    responsibilities: [
      'Architect bespoke design systems and component libraries in Figma.',
      'Craft distinctive logo marks, vector illustrations, and brand identity manuals.',
      'Prototype micro-interactions and collaborate directly with front-end engineers.',
      'Mentor junior designers and participate in client concept presentations.',
    ],
    requirements: [
      'Strong portfolio demonstrating high-end typography, layout mastery, and dark-theme aesthetics.',
      'Deep fluency in Figma, Illustrator, and motion prototyping tools (Principle / After Effects / Protopie).',
      'Understanding of HTML/CSS/Tailwind box models and responsive constraints.',
    ],
    benefits: [
      'Competitive compensation + performance incentives.',
      'Latest Apple Silicon workstation & high-refresh 4K monitors.',
      'Generous learning & design conference allowances.',
    ],
  },
  {
    id: 'lead-frontend-engineer',
    slug: 'lead-frontend-engineer',
    title: 'Lead Front-End Engineer (Next.js & GSAP)',
    department: 'Engineering',
    location: 'Perungudi, India | Buckinghamshire, UK | Texas, USA / Remote',
    type: 'Full-Time',
    experience: '4–7 Years',
    shortSummary: 'Build buttery-smooth, award-winning digital experiences with Next.js, Framer Motion, and GSAP.',
    responsibilities: [
      'Develop high-performance, accessible Next.js web applications with clean TypeScript.',
      'Implement fluid scroll-triggered animations (GSAP ScrollTrigger, Lenis, WebGL/Three.js).',
      'Optimize Core Web Vitals to consistently achieve 95+ Lighthouse scores.',
      'Establish front-end engineering standards and review pull requests.',
    ],
    requirements: [
      'Expert proficiency in React 18/19, Next.js App Router, TypeScript, and Tailwind CSS.',
      'Demonstrated expertise in complex interactive animation with GSAP and Framer Motion.',
      'Obsession with performance, semantic markup, and cross-browser stability.',
    ],
    benefits: [
      'Industry-leading salary package with annual equity/bonus sharing.',
      'Flexible remote/hybrid work structure.',
      'Direct client impact and creative freedom.',
    ],
  },
  {
    id: 'performance-marketing-manager',
    slug: 'performance-marketing-manager',
    title: 'Performance Marketing & Growth Lead',
    department: 'Marketing',
    location: 'Perungudi, India | Buckinghamshire, UK | Texas, USA',
    type: 'Full-Time',
    experience: '3–5 Years',
    shortSummary: 'Drive scalable customer acquisition and ROAS across Meta Ads, Google Ads, and influencer funnels.',
    responsibilities: [
      'Manage and scale paid advertising budgets across Meta, Google Search/Display, and YouTube.',
      'Implement Conversion API (CAPI), GA4 event tracking, and advanced attribution models.',
      'Direct creative testing pipelines (video hooks, ad copy variations, landing page CRO).',
      'Generate transparent monthly ROI performance decks for agency clientele.',
    ],
    requirements: [
      'Proven track record scaling e-commerce and B2B ad accounts past ₹50L+ monthly spend with profitable ROAS.',
      'Analytical mindset with mastery over Google Tag Manager, Looker Studio, and Meta Ads Manager.',
    ],
    benefits: [
      'High-growth bonus incentives tied to client account performance.',
      'Comprehensive health coverage and wellness stipends.',
    ],
  },
  {
    id: 'cinema-video-editor',
    slug: 'cinema-video-editor',
    title: 'Cinematic Video Editor & Colorist (DaVinci / Premiere)',
    department: 'Production',
    location: 'Perungudi, India | Buckinghamshire, UK | Texas, USA',
    type: 'Full-Time',
    experience: '2–5 Years',
    shortSummary: 'Edit high-impact corporate films, viral reels, and commercials with precision DI color grading.',
    responsibilities: [
      'Edit multi-cam commercial shoots, ad films, and fast-paced vertical video reels.',
      'Perform high-end DI color grading in DaVinci Resolve.',
      'Create 2D motion graphics, kinetic typography, and audio mastering.',
      'Manage raw camera archives, proxy workflows, and final export standards.',
    ],
    requirements: [
      'Showreel exhibiting high visual rhythm, seamless transitions, and color harmony.',
      'Mastery of DaVinci Resolve, Adobe Premiere Pro, and After Effects.',
      'Experience handling 4K drone cinematography and anamorphic footage.',
    ],
    benefits: [
      'Access to state-of-the-art studio gear, cinema cameras, and color-calibrated suites.',
      'Creative ownership over commercial video releases.',
    ],
  },
];
