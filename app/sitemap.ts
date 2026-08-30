import { BRAND } from '@/lib/constants';
import { SERVICES_DATA } from '@/lib/data/services';
import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/marketplace',
    '/careers',
    '/contact-us',
    '/privacy-policy',
    '/terms-and-conditions',
  ].map((route) => ({
    url: `${BRAND.siteUrl}${route}/`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const serviceRoutes = SERVICES_DATA.map((service) => ({
    url: `${BRAND.siteUrl}/services/${service.slug}/`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...routes, ...serviceRoutes];
}
