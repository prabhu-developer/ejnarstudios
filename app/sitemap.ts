import { BRAND } from '@/lib/constants';
import { SERVICES_DATA } from '@/lib/data/services';
import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

// Update these dates when the corresponding pages receive significant content changes
const SITE_LAUNCH_DATE = '2024-01-01';
const LAST_MAJOR_UPDATE = '2026-09-01';
const SERVICES_LAST_UPDATED = '2026-08-01';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: { route: string; priority: number; freq: MetadataRoute.Sitemap[number]['changeFrequency']; date: string }[] = [
    { route: '',                    priority: 1.0, freq: 'weekly',  date: LAST_MAJOR_UPDATE },
    { route: '/about',              priority: 0.7, freq: 'monthly', date: LAST_MAJOR_UPDATE },
    { route: '/services',           priority: 0.9, freq: 'monthly', date: SERVICES_LAST_UPDATED },
    { route: '/portfolio',          priority: 0.8, freq: 'monthly', date: LAST_MAJOR_UPDATE },
    { route: '/marketplace',        priority: 0.6, freq: 'monthly', date: SERVICES_LAST_UPDATED },
    { route: '/careers',            priority: 0.6, freq: 'weekly',  date: LAST_MAJOR_UPDATE },
    { route: '/contact-us',         priority: 0.8, freq: 'yearly',  date: SITE_LAUNCH_DATE },
    { route: '/privacy-policy',     priority: 0.3, freq: 'yearly',  date: SITE_LAUNCH_DATE },
    { route: '/terms-and-conditions', priority: 0.3, freq: 'yearly', date: SITE_LAUNCH_DATE },
  ];

  const routes = staticRoutes.map(({ route, priority, freq, date }) => ({
    url: `${BRAND.siteUrl}${route}/`,
    lastModified: date,
    changeFrequency: freq,
    priority,
  }));

  // Correct homepage URL (no double slash)
  routes[0].url = `${BRAND.siteUrl}/`;

  const serviceRoutes = SERVICES_DATA.map((service) => ({
    url: `${BRAND.siteUrl}/services/${service.slug}/`,
    lastModified: SERVICES_LAST_UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...routes, ...serviceRoutes];
}

