import { Metadata } from 'next';
import { BRAND } from './constants';

export interface PageMetadataConfig {
  title: string;
  description: string;
  keywords?: string[];
  path: string;
  image?: string;
  noIndex?: boolean;
  openGraphType?: 'website' | 'article';
}

export type PageKey =
  | 'home'
  | 'about'
  | 'services'
  | 'portfolio'
  | 'marketplace'
  | 'careers'
  | 'contact'
  | 'privacyPolicy'
  | 'termsAndConditions'
  // Service Subpages
  | 'services.website'
  | 'services.app'
  | 'services.ecommerce'
  | 'services.webApps'
  | 'services.softwareSolutions'
  | 'services.branding'
  | 'services.logo'
  | 'services.graphicDesign'
  | 'services.videoDesign'
  | 'services.seoSmo'
  | 'services.paidAds'
  | 'services.socialMedia'
  | 'services.influencerMarketing'
  | 'services.emailWhatsapp'
  | 'services.digitalConsulting';

/**
 * Global fallback metadata configuration
 */
export const DEFAULT_METADATA: PageMetadataConfig = {
  title: `${BRAND.name} — Creative Branding, Web/App Development & Marketing Agency Chennai`,
  description:
    'Award-winning creative digital agency in Chennai crafting luxury brand identities, high-performance Next.js websites, mobile apps, and full-funnel digital marketing.',
  keywords: [
    'creative agency chennai',
    'branding agency chennai',
    'website development chennai',
    'mobile app development chennai',
    'digital marketing chennai',
    'nextjs development agency',
    'ui ux design chennai',
    'pos billing software',
    'erp software chennai',
  ],
  path: '',
  image: '/images/og-cover.jpg',
  noIndex: false,
  openGraphType: 'website',
};

/**
 * Centralized metadata registry for all application pages
 */
export const PAGE_METADATA: Record<PageKey, PageMetadataConfig> = {
  home: {
    title: 'EJNARSTUDIOS — Creative Branding, Web/App Development & Marketing Agency Chennai',
    description:
      'Award-winning creative digital agency in Chennai crafting luxury brand identities, high-performance Next.js websites, mobile apps, and full-funnel digital marketing.',
    keywords: [
      'creative agency chennai',
      'branding studio chennai',
      'next.js web development',
      'react native mobile apps',
      'digital marketing agency chennai',
      'luxury brand identity',
    ],
    path: '/',
  },
  about: {
    title: 'About Us — Creative Heritage, Principles & Leadership',
    description:
      'Founded in 2018 in Chennai by Ranjeth Bhuvaneswaran. EJNARSTUDIOS bridges architectural design systems, sub-second engineering, and full-funnel digital growth.',
    keywords: [
      'about ejnarstudios',
      'chennai digital agency history',
      'ranjeth bhuvaneswaran',
      'agency leadership',
      'design engineering philosophy',
    ],
    path: '/about',
  },
  services: {
    title: 'Services, Packages & Retainers — Branding, Web, Mobile, Marketing',
    description:
      'Explore our full-service digital agency offerings across 4 core divisions and 14 specialized practices. Fixed-scope packages and dedicated monthly retainers.',
    keywords: [
      'digital agency services',
      'branding packages chennai',
      'web development cost',
      'monthly marketing retainers',
      'app development packages',
    ],
    path: '/services',
  },
  portfolio: {
    title: 'Portfolio & Client Case Studies — Flagship Deployments',
    description:
      'Explore our portfolio of award-winning websites, mobile apps, e-commerce stores, POS/ERP systems, and brand identities crafted for ambitious enterprises.',
    keywords: [
      'ejnarstudios portfolio',
      'web design case studies',
      'mobile app portfolio',
      'e-commerce client work',
      'branding showcase',
    ],
    path: '/portfolio',
  },
  marketplace: {
    title: 'Digital Marketplace & Asset Kits — Templates, Design Systems & Logos',
    description:
      'Premium production-ready digital assets, Figma design systems, corporate presentation pitch decks, and brand identity kits built by EJNARSTUDIOS.',
    keywords: [
      'digital marketplace',
      'figma templates',
      'brand identity assets',
      'presentation pitch deck templates',
      'logo design kits',
    ],
    path: '/marketplace',
  },
  careers: {
    title: 'Careers & Open Positions — Join Our Creative & Engineering Studio',
    description:
      'We are hiring visionary UI/UX designers, Next.js engineers, mobile developers, and performance marketers in Chennai. Explore open studio roles and apply.',
    keywords: [
      'careers at ejnarstudios',
      'chennai design jobs',
      'next.js developer jobs',
      'react native jobs chennai',
      'digital marketing careers',
    ],
    path: '/careers',
  },
  contact: {
    title: 'Contact Us & Start a Project — Exploratory Roadmap Session',
    description:
      'Connect with our senior team at Greeta Towers, Perungudi, Chennai. Schedule an exploratory roadmap session or request a custom proposal for your project.',
    keywords: [
      'contact ejnarstudios',
      'hire digital agency chennai',
      'perungudi agency contact',
      'request project proposal',
    ],
    path: '/contact-us',
  },
  privacyPolicy: {
    title: 'Privacy Policy — Data Protection, Cookies & Security',
    description:
      'Learn how EJNARSTUDIOS collects, uses, protects, and handles your personal and business data across our website, contact discovery forms, and services.',
    keywords: [
      'ejnarstudios privacy policy',
      'data protection chennai agency',
      'cookie policy',
      'user data security',
    ],
    path: '/privacy-policy',
  },
  termsAndConditions: {
    title: 'Terms & Conditions — Client Agreements, Licenses & IP Ownership',
    description:
      'Review the terms of service, project engagements, intellectual property transfer terms, marketplace licenses, and warranties of EJNARSTUDIOS.',
    keywords: [
      'ejnarstudios terms and conditions',
      'agency client agreement',
      'intellectual property terms',
      'marketplace licensing terms',
    ],
    path: '/terms-and-conditions',
  },

  // 1. Development Services
  'services.website': {
    title: 'Website Development Company in Chennai — Next.js & Modern Web',
    description:
      'Custom Next.js website engineering with sub-second page loads, Lenis inertia scrolling, GSAP micro-animations, and responsive mobile architecture.',
    keywords: [
      'website development chennai',
      'next.js development agency',
      'custom react websites',
      'high performance web development',
      'seo optimized websites',
    ],
    path: '/services/website',
  },
  'services.app': {
    title: 'Mobile App Development Company Chennai — React Native, Flutter & Expo',
    description:
      'Cross-platform iOS and Android mobile app development with React Native, Flutter, Expo SDK, Firebase realtime sync, and AWS cloud backend infrastructure.',
    keywords: [
      'mobile app development chennai',
      'react native agency',
      'flutter app development',
      'ios and android apps',
      'expo sdk development',
    ],
    path: '/services/app',
  },
  'services.ecommerce': {
    title: 'E-commerce Development Agency Chennai — WooCommerce, Shopify & Headless',
    description:
      'Conversion-engineered online stores, Shopify Plus setups, bespoke WooCommerce platforms, and custom payment gateway checkout funnels.',
    keywords: [
      'ecommerce website development',
      'woocommerce agency chennai',
      'shopify plus development',
      'headless ecommerce',
      'high conversion checkout',
    ],
    path: '/services/ecommerce',
  },
  'services.webApps': {
    title: 'Custom Web Applications & SaaS Development Chennai — React.js & Laravel',
    description:
      'Bespoke web applications, custom admin panels, interactive dashboards, and SaaS portals engineered with React.js, Node.js, Express, MongoDB, and Laravel.',
    keywords: [
      'web application development',
      'custom saas development',
      'admin panel dashboards',
      'enterprise web apps chennai',
      'cloud software development',
    ],
    path: '/services/web-apps',
  },
  'services.softwareSolutions': {
    title: 'POS Billing Software, ERP & Electron JS Desktop Apps Chennai',
    description:
      'Custom retail POS billing software, enterprise ERP systems, and cross-platform Electron JS desktop applications with offline SQLite sync and thermal printing.',
    keywords: [
      'pos billing software chennai',
      'electron js desktop development',
      'enterprise erp software',
      'thermal printing pos system',
      'offline first desktop app',
    ],
    path: '/services/software-solutions',
  },

  // 2. Design & Branding Services
  'services.branding': {
    title: 'Branding & Corporate Identity Design Studio Chennai — Brand Guidelines',
    description:
      'Comprehensive brand systems: corporate stationery, pitch decks, luxury business cards, brand strategy books, and cohesive marketing collateral.',
    keywords: [
      'branding studio chennai',
      'corporate identity design',
      'brand guidelines manual',
      'luxury stationery design',
      'investor pitch deck design',
    ],
    path: '/services/branding',
  },
  'services.logo': {
    title: 'Logo Design Company in Chennai — 6 Iconic Typologies & Vector Mastery',
    description:
      'Custom bespoke logo design across 6 core styles: Emblem, Pictorial, Monogram, Wordmark, Abstract, and Mascot. 100% scalable vector master deliverables.',
    keywords: [
      'logo design chennai',
      'custom logo design',
      'vector logo creation',
      'brand identity logo',
      'premium logo designer chennai',
    ],
    path: '/services/logo',
  },
  'services.graphicDesign': {
    title: 'Graphic Design Company in Chennai — Marketing Creatives & Print Media',
    description:
      'High-impact promotional campaign posters, social media creative packs, brochures, trade show banners, and digital display advertising assets.',
    keywords: [
      'graphic design chennai',
      'social media creative design',
      'promotional poster design',
      'corporate brochure design',
      'marketing collateral design',
    ],
    path: '/services/graphic-design',
  },
  'services.videoDesign': {
    title: 'Video Design & Motion Graphics Studio Chennai — 3D, CGI & 4K Animation',
    description:
      'Cinematic brand showreels, 3D CGI product renders, commercial video editing, TikTok/Reels motion packages, and explainer animations.',
    keywords: [
      'video production chennai',
      'motion graphics studio',
      '3d cgi product rendering',
      'brand showreels',
      'commercial video editing',
    ],
    path: '/services/video-design',
  },

  // 3. Digital Marketing Services
  'services.seoSmo': {
    title: 'SEO & SMO Services Company in Chennai — Technical Search & Organic Growth',
    description:
      'Data-driven search engine optimization (SEO), technical audits, keyword dominance, schema scaffolding, and social media optimization (SMO).',
    keywords: [
      'seo services chennai',
      'technical seo agency',
      'organic search ranking',
      'smo services chennai',
      'core web vitals optimization',
    ],
    path: '/services/seo-smo',
  },
  'services.paidAds': {
    title: 'Performance Marketing & Paid Ads Agency Chennai — Google & Meta ROI',
    description:
      'Targeted paid advertising across Google Search, Meta (Instagram & Facebook), YouTube, and LinkedIn Ads optimized for high ROAS and low CPA.',
    keywords: [
      'paid ads agency chennai',
      'google ads management',
      'meta performance marketing',
      'roas optimization',
      'ppc advertising chennai',
    ],
    path: '/services/paid-ads',
  },
  'services.socialMedia': {
    title: 'Social Media Management Agency Chennai — Content Creation & Strategy',
    description:
      'End-to-end social media growth, editorial content calendars, high-engagement carousels, community management, and brand storytelling.',
    keywords: [
      'social media management chennai',
      'instagram marketing agency',
      'social media content creation',
      'community management',
      'brand social strategy',
    ],
    path: '/services/social-media',
  },
  'services.influencerMarketing': {
    title: 'Influencer Marketing Agency Chennai — Creator Partnerships & Brand Collabs',
    description:
      'Strategic creator outreach, nano/micro/macro influencer matchmaking, contract negotiation, campaign execution, and authentic brand endorsements.',
    keywords: [
      'influencer marketing chennai',
      'creator partnerships',
      'instagram influencer agency',
      'brand collaborations',
      'influencer campaign management',
    ],
    path: '/services/influencer-marketing',
  },

  // 4. Content & Strategy Services
  'services.emailWhatsapp': {
    title: 'Email & WhatsApp Marketing Agency Chennai — Automated Funnels & CRM',
    description:
      'High-converting email marketing flows (Klaviyo / Mailchimp), WhatsApp Business API campaigns, automated cart recovery, and broadcast drip sequences.',
    keywords: [
      'email marketing agency',
      'whatsapp marketing api',
      'klaviyo automated flows',
      'cart recovery emails',
      'broadcast marketing sequences',
    ],
    path: '/services/email-whatsapp',
  },
  'services.digitalConsulting': {
    title: 'Digital Consulting & Strategy Advisory Chennai — Growth & Tech Audit',
    description:
      'Strategic digital transformation, legacy system modernization, brand positioning audits, conversion rate optimization (CRO), and tech stack advisory.',
    keywords: [
      'digital consulting chennai',
      'brand strategy advisory',
      'tech stack audit',
      'conversion rate optimization',
      'digital transformation consulting',
    ],
    path: '/services/digital-consulting',
  },
};

/**
 * Resolves Next.js Metadata object from the centralized configuration.
 *
 * @param pageKeyOrPath - PageKey identifier or relative path string
 * @param overrides - Optional overrides for custom properties
 */
export function getPageMetadata(
  pageKeyOrPath: PageKey | string,
  overrides: Partial<PageMetadataConfig> = {}
): Metadata {
  // 1. Direct key match
  let config: PageMetadataConfig = PAGE_METADATA[pageKeyOrPath as PageKey];

  // 2. Path lookup fallback
  if (!config) {
    const foundEntry = Object.values(PAGE_METADATA).find(
      (item) => item.path === pageKeyOrPath || item.path === `/${pageKeyOrPath.replace(/^\//, '')}`
    );
    config = foundEntry || DEFAULT_METADATA;
  }

  // 3. Merge with overrides
  const merged: PageMetadataConfig = {
    ...config,
    ...overrides,
  };

  const fullTitle = merged.title.includes(BRAND.name)
    ? merged.title
    : `${merged.title} | ${BRAND.name}`;

  const canonicalUrl = `${BRAND.siteUrl}${merged.path}`;
  const ogImage = merged.image || DEFAULT_METADATA.image || '/images/og-cover.jpg';

  return {
    title: fullTitle,
    description: merged.description,
    keywords: merged.keywords || DEFAULT_METADATA.keywords,
    metadataBase: new URL(BRAND.siteUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description: merged.description,
      url: canonicalUrl,
      siteName: BRAND.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: 'en_IN',
      type: merged.openGraphType || 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: merged.description,
      images: [ogImage],
      creator: '@ejnarstudios',
    },
    robots: {
      index: !merged.noIndex,
      follow: !merged.noIndex,
      googleBot: {
        index: !merged.noIndex,
        follow: !merged.noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
