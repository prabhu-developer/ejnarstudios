import { Metadata } from 'next';
import { BRAND } from './constants';
import {
  getPageMetadata,
  PAGE_METADATA,
  DEFAULT_METADATA,
  PageMetadataConfig,
  PageKey,
} from './metadata.config';

export {
  getPageMetadata,
  PAGE_METADATA,
  DEFAULT_METADATA,
  type PageMetadataConfig,
  type PageKey,
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

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BRAND.name,
    url: BRAND.siteUrl,
    logo: `${BRAND.siteUrl}/logo.svg`,
    founder: {
      '@type': 'Person',
      name: BRAND.founder,
    },
    foundingDate: BRAND.foundedYear,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BRAND.address.street,
      addressLocality: BRAND.address.area,
      addressRegion: BRAND.address.city,
      postalCode: BRAND.address.postalCode,
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BRAND.contact.mobile,
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Tamil'],
    },
    sameAs: [
      BRAND.socials.instagram,
      BRAND.socials.pinterest,
      BRAND.socials.facebook,
      BRAND.socials.twitter,
      BRAND.socials.linkedin,
    ],
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    provider: {
      '@type': 'Organization',
      name: BRAND.name,
      url: BRAND.siteUrl,
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    description: service.description,
    url: `${BRAND.siteUrl}/services/${service.slug}`,
  };
}

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
    datePosted: job.datePosted || '2024-01-01',
    employmentType: job.type.includes('Full') ? 'FULL_TIME' : 'CONTRACTOR',
    hiringOrganization: {
      '@type': 'Organization',
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
  };
}
