import { Metadata } from 'next';
import { BRAND } from './constants';
import {
  DEFAULT_METADATA,
  getPageMetadata,
  PAGE_METADATA,
  PageKey,
  PageMetadataConfig,
} from './metadata.config';

export {
  DEFAULT_METADATA, getPageMetadata,
  PAGE_METADATA, type PageKey, type PageMetadataConfig
};

export function constructMetadata({
  title,
  description,
  image,
  path = '',
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return getPageMetadata(path, {
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
    ...(image ? { image } : {}),
    path,
    noIndex,
  });
}

/**
 * Organization schema — injected globally on every page via root layout.
 * Enhanced with ImageObject logo, @id, description, and multi-region areaServed.
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BRAND.siteUrl}/#organization`,
    name: BRAND.name,
    url: BRAND.siteUrl,
    description: BRAND.description,
    logo: {
      '@type': 'ImageObject',
      '@id': `${BRAND.siteUrl}/#logo`,
      url: `${BRAND.siteUrl}/logo.svg`,
      contentUrl: `${BRAND.siteUrl}/logo.svg`,
      caption: BRAND.name,
      width: 200,
      height: 60,
    },
    image: {
      '@type': 'ImageObject',
      url: `${BRAND.siteUrl}/images/og-cover.webp`,
      width: 1200,
      height: 630,
    },
    founder: {
      '@type': 'Person',
      '@id': `${BRAND.siteUrl}/#founder`,
      name: BRAND.founder,
    },
    foundingDate: BRAND.foundedYear,
    foundingLocation: {
      '@type': 'Place',
      name: 'Chennai, Tamil Nadu, India',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: BRAND.address.street,
      addressLocality: BRAND.address.area,
      addressRegion: BRAND.address.city,
      postalCode: BRAND.address.postalCode,
      addressCountry: 'IN',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: BRAND.contact.mobile,
        contactType: 'customer service',
        areaServed: ['IN', 'GB', 'US'],
        availableLanguage: ['English', 'Tamil'],
      },
      {
        '@type': 'ContactPoint',
        telephone: BRAND.contact.hotline,
        contactType: 'sales',
        areaServed: ['IN', 'GB', 'US'],
        availableLanguage: ['English', 'Tamil'],
      },
    ],
    sameAs: [
      BRAND.socials.instagram,
      BRAND.socials.pinterest,
      BRAND.socials.facebook,
      BRAND.socials.linkedin,
    ],
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 5,
      maxValue: 20,
    },
  };
}

/**
 * LocalBusiness schema — critical for local SEO / Google Maps / local pack eligibility.
 * Inject on homepage and/or contact page.
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': `${BRAND.siteUrl}/#localbusiness`,
    name: BRAND.name,
    description: BRAND.description,
    url: BRAND.siteUrl,
    telephone: BRAND.contact.mobile,
    email: BRAND.contact.email,
    image: `${BRAND.siteUrl}/images/og-cover.webp`,
    logo: `${BRAND.siteUrl}/logo.svg`,
    priceRange: '₹₹₹',
    currenciesAccepted: 'INR, USD, GBP',
    paymentAccepted: 'Bank Transfer, UPI, Credit Card',
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${BRAND.address.street}, ${BRAND.address.area}`,
      addressLocality: BRAND.address.city,
      addressRegion: BRAND.address.state,
      postalCode: BRAND.address.postalCode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BRAND.address.geo.latitude,
      longitude: BRAND.address.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      BRAND.socials.instagram,
      BRAND.socials.facebook,
      BRAND.socials.linkedin,
    ],
    parentOrganization: {
      '@id': `${BRAND.siteUrl}/#organization`,
    },
  };
}

/**
 * WebSite schema — enables Google Sitelinks Searchbox for branded searches.
 * Inject once in root layout.
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BRAND.siteUrl}/#website`,
    name: BRAND.name,
    url: BRAND.siteUrl,
    description: BRAND.description,
    publisher: {
      '@id': `${BRAND.siteUrl}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BRAND.siteUrl}/services/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'en-IN',
  };
}

/**
 * Service schema — inject on each individual service sub-page.
 */
export function generateServiceSchema(service: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${BRAND.siteUrl}/services/${service.slug}/#service`,
    serviceType: service.name,
    name: service.name,
    description: service.description,
    url: `${BRAND.siteUrl}/services/${service.slug}/`,
    provider: {
      '@id': `${BRAND.siteUrl}/#organization`,
    },
    areaServed: [
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'United States' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.name} Packages`,
    },
  };
}

/**
 * BreadcrumbList schema — inject on service sub-pages, portfolio, careers, etc.
 * Pairs with the visual breadcrumb UI in ServiceSubpageHero.
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * FAQPage schema — inject on service pages that have FAQ data.
 * Enables expandable Q&A rich results directly in Google search.
 */
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * JobPosting schema — inject for each open position on the Careers page.
 * Enables Google Jobs rich results and direct job listing visibility.
 */
export function generateJobPostingSchema(job: {
  title: string;
  description: string;
  datePosted?: string;
  location: string;
  type: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    datePosted: job.datePosted || '2026-09-01',
    validThrough: '2027-03-01',
    employmentType: job.type.toLowerCase().includes('full') ? 'FULL_TIME' : 'CONTRACTOR',
    hiringOrganization: {
      '@type': 'Organization',
      '@id': `${BRAND.siteUrl}/#organization`,
      name: BRAND.name,
      sameAs: BRAND.siteUrl,
      logo: `${BRAND.siteUrl}/logo.svg`,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        streetAddress: BRAND.address.street,
        addressLocality: BRAND.address.area,
        addressRegion: BRAND.address.city,
        postalCode: BRAND.address.postalCode,
        addressCountry: 'IN',
      },
    },
    applicantLocationRequirements: {
      '@type': 'Country',
      name: 'India',
    },
    jobLocationType: 'TELECOMMUTE',
    directApply: true,
    applicationContact: {
      '@type': 'ContactPoint',
      email: BRAND.contact.hr,
      contactType: 'Human Resources',
    },
  };
}

/**
 * Person schema — inject on the About page or Team page for the founder/leaders.
 * Elevates E-E-A-T signals by connecting the founder to the organization.
 */
export function generatePersonSchema(person: {
  name: string;
  role: string;
  description: string;
  image?: string;
  sameAs?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${BRAND.siteUrl}/#${person.name.toLowerCase().replace(/\s+/g, '-')}`,
    name: person.name,
    jobTitle: person.role,
    description: person.description,
    ...(person.image && { image: person.image }),
    url: `${BRAND.siteUrl}/about`,
    worksFor: {
      '@id': `${BRAND.siteUrl}/#organization`,
    },
    ...(person.sameAs && person.sameAs.length > 0 && { sameAs: person.sameAs }),
  };
}
