import React from 'react';
import CareersClient from '@/components/views/CareersClient';
import { getPageMetadata } from '@/lib/metadata.config';

export const metadata = getPageMetadata('careers');

export default function CareersPage() {
  return <CareersClient />;
}
