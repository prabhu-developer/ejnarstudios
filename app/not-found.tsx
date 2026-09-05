import { BRAND } from '@/lib/constants';
import NotFoundClient from '@/components/views/NotFoundClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Page Not Found — ${BRAND.name}`,
  description: 'The page you are looking for could not be found.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return <NotFoundClient />;
}
