import React from 'react';
import MarketplaceClient from '@/components/views/MarketplaceClient';
import { getPageMetadata } from '@/lib/metadata.config';

export const metadata = getPageMetadata('marketplace');

export default function MarketplacePage() {
  return <MarketplaceClient />;
}
