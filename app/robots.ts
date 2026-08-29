import { MetadataRoute } from 'next';
import { BRAND } from '@/lib/constants';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${BRAND.siteUrl}/sitemap.xml`,
  };
}
