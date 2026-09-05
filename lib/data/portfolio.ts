export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: string;
  categoryTag: 'E-commerce' | 'Web Development' | 'Mobile App' | 'Branding' | 'Custom Solutions';
  description: string;
  deliverables: string[];
  metrics?: { value: string; label: string }[];
  image: string;
  images?: string[]; // Array of images for multi-screen slide view (e.g. mobile apps)
  featured: boolean;
  testimonial?: { quote: string; author: string; role: string };
  link?: string;
}

export const PORTFOLIO_DATA: ProjectItem[] = [
  {
    id: 'applepoint',
    slug: 'applepoint',
    title: 'Apple Point',
    client: 'Apple Point — Authorized Apple Reseller',
    category: 'Apple Devices & Electronics Retail Platform',
    categoryTag: 'E-commerce',
    description: 'A sleek, high-conversion electronics e-commerce and retail experience for genuine Apple products, featuring streamlined product lineups (Mac, iPhone, iPad, Vision Pro, iWatch), EMI calculators, and instant chat checkout.',
    deliverables: ['E-Commerce Storefront', 'Interactive Product Lineup Catalog', 'EMI & Payment Integrations', 'WhatsApp Direct Checkout'],
    metrics: [
      { value: '100%', label: 'Genuine Apple Lineup' },
      { value: '0.6s', label: 'Page Load Speed' },
      { value: '4.8★', label: 'Customer Trust Score' },
    ],
    image: '/images/websites/applepoint.png',
    featured: true,
    link: 'https://www.applepoint.in/',
  },
  {
    id: 'fefine',
    slug: 'fefine',
    title: 'Fefine',
    client: 'Fefine Sanitary & Hygiene Care',
    category: 'Biodegradable Organic Hygiene E-Commerce',
    categoryTag: 'E-commerce',
    description: 'A vibrant, modern wellness and e-commerce brand platform dedicated to natural health and hygiene with ISO-certified biodegradable cotton sanitary pads, worldwide shipping, and frictionless order flows.',
    deliverables: ['Direct-to-Consumer Storefront', 'Product Packaging Showcase', 'Global Shipping Funnel', 'ISO Certification & Specs'],
    metrics: [
      { value: '100%', label: 'Biodegradable Cotton' },
      { value: 'ISO', label: 'Certified Medical Absorbent' },
      { value: 'Global', label: 'International Delivery' },
    ],
    image: '/images/websites/fefine.png',
    featured: true,
    link: 'http://fefine.in/',
  },
  {
    id: 'binlees-maritime',
    slug: 'binlees-maritime',
    title: 'Binlees Maritime',
    client: 'BINLEES MARITIME LLP (Kochi Port)',
    category: 'Global Shipping, Vessel Chartering & Maritime Logistics',
    categoryTag: 'Web Development',
    description: 'An authoritative corporate maritime portal engineered for a premier shipping firm based at Kochi Port, facilitating global ship chartering, multimodal container logistics, marine bunkering, and international trade routes.',
    deliverables: ['Corporate Web Architecture', 'Chartering & Inquiry Engine', 'Multimodal Logistics Showcase', 'SEO & Speed Optimization'],
    metrics: [
      { value: '24/7', label: 'Operations Support' },
      { value: 'IMO/SOLAS', label: 'Standard Compliance' },
      { value: '4+ Continents', label: 'Global Trade Corridors' },
    ],
    image: '/images/websites/binleesmaritime.png',
    featured: true,
    link: 'https://binleesmaritime.com/',
  },
  {
    id: 'marina-residences',
    slug: 'marina-residences',
    title: 'Marina Residences & Realty',
    client: 'Marina Residences & Realty (TNRERA Registered)',
    category: 'Luxury Real Estate, Plots & Villas Portal',
    categoryTag: 'Web Development',
    description: 'A luxury real estate web portal showcasing premium apartments, gated community plots, and architectural villas in Tamil Nadu with interactive project floorplans, TNRERA compliance, and high-converting lead capture.',
    deliverables: ['Luxury Real Estate UI/UX', 'Project Showcase & Floorplans', 'High-Converting Lead Funnel', 'TNRERA Compliance Architecture'],
    metrics: [
      { value: '3.8x', label: 'Inquiry Conversion Lift' },
      { value: '100%', label: 'TNRERA Verified Listings' },
      { value: '15K+', label: 'Monthly Active Buyers' },
    ],
    image: '/images/websites/marinaresidences.png',
    featured: true,
    link: 'https://www.marinaresidences.in/',
  },
  {
    id: 'pinnacle-star-services',
    slug: 'pinnacle-star-services',
    title: 'Pinnacle Star Services',
    client: 'Pinnacle Star Services FZCO (Dubai, UAE)',
    category: 'Investment Core, Architecture & Project Management',
    categoryTag: 'Custom Solutions',
    description: 'A prestigious multi-disciplinary corporate platform for a Dubai Silicon Oasis IFZA firm integrating capital investment advisory, architectural consultation, and large-scale project execution discipline under one digital roof.',
    deliverables: ['Multi-Disciplinary Web Portal', 'Institutional Investor Engine', 'Bespoke Inquiries Funnel', 'Modern Corporate Identity'],
    metrics: [
      { value: 'Dubai IFZA', label: 'Global Headquarters' },
      { value: '3 Disciplines', label: 'Under One Roof' },
      { value: '100%', label: 'Execution Discipline' },
    ],
    image: '/images/websites/pinnaclestarserv.png',
    featured: true,
    link: 'http://pinnaclestarserv.com/',
  },
  {
    id: 'relax-washrooms',
    slug: 'relax-washrooms',
    title: 'Relax Washrooms',
    client: 'Relax Washrooms (A Unit of Relax Caravans)',
    category: 'Commercial Bus & Caravan Sanitation Tech',
    categoryTag: 'Web Development',
    description: 'A dynamic industrial web presence showcasing revolutionary, sustainable, and water-efficient sanitary solutions for bus travel and luxury caravans, trusted by nationwide coach fabricators and fleet operators.',
    deliverables: ['Industrial Product Catalog', 'Interactive Technical Specs', 'Fabricator Inquiry Portal', 'Cross-Platform Responsive UX'],
    metrics: [
      { value: '70+ Buses', label: 'Fleet Installations' },
      { value: '40%', label: 'Water Efficiency Gain' },
      { value: '#1', label: 'Bus Sanitation in India' },
    ],
    image: '/images/websites/relaxwashrooms.png',
    featured: true,
    link: 'https://relaxwashrooms.com/',
  },
  {
    id: 'sifel-life-school',
    slug: 'sifel-life-school',
    title: 'SIFEL Life School',
    client: 'SIFEL Life School (SLS Foundation)',
    category: 'Holistic Youth Education & Non-Profit Platform',
    categoryTag: 'Web Development',
    description: 'A vibrant and purposeful digital platform for a youth holistic development movement, featuring student impact stories, WHO & NIMHANS-aligned methodology showcases, and seamless donor onboarding.',
    deliverables: ['Non-Profit Web Architecture', 'Donor Engagement Funnel', 'Interactive Curriculum Showcase', 'Fast Static CDN Delivery'],
    metrics: [
      { value: '100%', label: 'Free Holistic Education' },
      { value: 'WHO/NIMHANS', label: 'Published Standards' },
      { value: '500+ Youth', label: 'Empowered Students' },
    ],
    image: '/images/websites/sifel.png',
    featured: true,
    link: 'https://sifellifeschool.com/',
  },
  {
    id: 'byaddi',
    slug: 'byaddi',
    title: 'byaddi (بيّدي)',
    client: 'byaddi Food & Refreshment Tech (Saudi Arabia)',
    category: 'Saudi Home Chef & Confectionery Mobile Marketplace',
    categoryTag: 'Mobile App',
    description: 'An agile, localized iOS & Android marketplace connecting Saudi home culinary artisans, confectioners, and traditional chefs with consumers across Riyadh, Al Kharj, Buraidah, Majmaah, Shaqra, and Al-Ahsa with WhatsApp order synchronization.',
    deliverables: [
      'iOS & Android App (React Native)',
      'Arabic-first UI/UX Design System',
      'Regional & Category Multi-filtering',
      'Direct WhatsApp Cart & Order Routing',
    ],
    metrics: [
      { value: '6+ Cities', label: 'Saudi Regional Coverage' },
      { value: '4.9★', label: 'App Store Rating' },
      { value: '100%', label: 'Authentic Saudi Artisans' },
    ],
    image: '/images/apps/byaddi-app-01.jpeg',
    images: [
      '/images/apps/byaddi-app-01.jpeg',
      '/images/apps/byaddi-app-02.jpeg',
      '/images/apps/byaddi-app-03.jpeg',
    ],
    featured: true,
    testimonial: {
      quote: 'ejnarstudios created an intuitive, authentic Arabic mobile app experience that empowered hundreds of our home chefs to receive and manage direct orders smoothly.',
      author: 'Byaddi Operations Team',
      role: 'Product Lead, Byaddi',
    },
    link: "https://byaddi.com/"
  },
];
