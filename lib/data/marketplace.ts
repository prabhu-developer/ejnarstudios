export interface MarketplaceProduct {
  id: string;
  slug: string;
  title: string;
  category: 'Logos' | 'Website Templates' | 'Social Media Kits' | 'Video Templates';
  price: string;
  originalPrice?: string;
  badge?: string;
  rating: number;
  reviewsCount: number;
  shortDescription: string;
  description: string;
  image: string;
  deliverables: string[];
  techStack?: string[];
  livePreviewUrl?: string;
}

export const MARKETPLACE_PRODUCTS: MarketplaceProduct[] = [
  {
    id: 'aurora-nextjs-agency',
    slug: 'aurora-nextjs-agency',
    title: 'Aurora — Luxury Agency Next.js 14 Template',
    category: 'Website Templates',
    price: '₹4,999',
    originalPrice: '₹8,999',
    badge: 'Best Seller',
    rating: 4.9,
    reviewsCount: 38,
    shortDescription: 'Awwwards-grade luxury agency template with smooth Lenis scroll and dark aesthetic.',
    description: 'A complete, turnkey Next.js 14 template engineered for creative studios, design agencies, and high-ticket freelancers.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Full Next.js 14 Codebase', 'Figma Source File', 'Lenis & GSAP Animation Setup', 'Tailwind Config'],
    techStack: ['Next.js 14', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
  },
  {
    id: 'solaris-ecommerce-storefront',
    slug: 'solaris-ecommerce-storefront',
    title: 'Solaris — Modern Headless E-commerce Kit',
    category: 'Website Templates',
    price: '₹6,499',
    originalPrice: '₹11,999',
    badge: 'Popular',
    rating: 5.0,
    reviewsCount: 24,
    shortDescription: 'High-converting e-commerce template with instant search and cart drawer.',
    description: 'Turnkey online store with fast product filtering, cart drawer, and WhatsApp order checkout support.',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Next.js Storefront', 'Stripe & Razorpay Ready', 'Responsive UI Kit', 'Documentation'],
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Zustand'],
  },
  {
    id: 'apex-geometric-logo-pack',
    slug: 'apex-geometric-logo-pack',
    title: 'Apex — 50 Luxury Geometric Vector Marks',
    category: 'Logos',
    price: '₹2,499',
    originalPrice: '₹4,999',
    badge: 'Vector Suite',
    rating: 4.8,
    reviewsCount: 52,
    shortDescription: 'Golden ratio geometric abstract marks with complete vector source files.',
    description: 'A curated collection of 50 minimalist, luxury geometric logos tailored for fintech, luxury goods, and architecture firms.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
    deliverables: ['50 Vector Marks (AI, EPS, SVG)', 'Dark & Light Variants', 'Typography Pairings', 'Commercial License'],
  },
  {
    id: 'viral-reel-motion-pack',
    slug: 'viral-reel-motion-pack',
    title: 'Kinetic — 30 Ad & Reel Video Motion Templates',
    category: 'Video Templates',
    price: '₹3,299',
    originalPrice: '₹5,999',
    badge: 'New',
    rating: 4.9,
    reviewsCount: 19,
    shortDescription: 'High-energy 9:16 vertical motion templates for DaVinci Resolve & Premiere Pro.',
    description: 'Stop scrolling thumbs with 30 kinetic typography, split-screen, and cinematic product showcase templates.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
    deliverables: ['30 9:16 Motion Templates', 'Premiere Pro & DaVinci Files', 'Sound Effects Pack', 'Tutorial Guide'],
  },
  {
    id: 'bold-social-media-bundle',
    slug: 'bold-social-media-bundle',
    title: 'Vanguard — 120+ High-Converting Social Creatives',
    category: 'Social Media Kits',
    price: '₹1,999',
    originalPrice: '₹3,999',
    rating: 4.8,
    reviewsCount: 44,
    shortDescription: 'Figma and Canva customizable Instagram post and story templates in dark luxury gold theme.',
    description: 'Designed specifically for B2B brands, coaches, tech companies, and agencies wanting high-authority feeds.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    deliverables: ['120+ Figma Templates', 'Canva Link Kit', 'Content Hook Swipe File', 'Free Font Links'],
  },
  {
    id: 'monarch-corporate-identity',
    slug: 'monarch-corporate-identity',
    title: 'Monarch — Complete Corporate Stationery Kit',
    category: 'Logos',
    price: '₹2,999',
    originalPrice: '₹5,499',
    rating: 4.9,
    reviewsCount: 31,
    shortDescription: 'Complete print-ready stationery bundle: visiting cards, letterheads, envelopes, and pitch decks.',
    description: 'Corporate elegance at its peak. Includes bleed-ready print files and customizable vector mockups.',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80',
    deliverables: ['Business Card Templates', 'Letterhead & Envelopes', 'Keynote Pitch Deck', 'Brand Manual PDF'],
  },
];
