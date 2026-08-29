import { Metadata } from 'next';
import { BRAND } from './constants';

export function constructMetadata({
  title,
  description = BRAND.description,
  image = '/images/og-cover.jpg',
  path = '',
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const fullTitle = title ? `${title} | ${BRAND.name}` : `${BRAND.name} — Creative Branding, Web & App Development Agency Chennai`;
  const url = `${BRAND.siteUrl}${path}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(BRAND.siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: BRAND.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
      creator: '@ejnarstudios',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
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
