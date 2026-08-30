import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import { androidFont } from './fonts';
import './globals.css';
import { BRAND } from '@/lib/constants';
import { constructMetadata, generateOrganizationSchema } from '@/lib/seo';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/layout/CustomCursor';
import ScrollProgress from '@/components/layout/ScrollProgress';
import LoadingScreen from '@/components/layout/LoadingScreen';
import SmoothScroll from '@/components/layout/SmoothScroll';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import { ContactModalProvider } from '@/context/ContactModalContext';
import ContactModal from '@/components/modals/ContactModal';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en" className={`${androidFont.variable} ${spaceGrotesk.variable} ${inter.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="bg-dark text-cream font-body antialiased selection:bg-primary selection:text-dark">
        <ContactModalProvider>
          {/* Subtle Film Grain Noise Texture */}
          <div className="grain-overlay" aria-hidden="true" />

          {/* Global Loading Screen Animation */}
          <LoadingScreen />

          {/* Scroll Progress Bar */}
          <ScrollProgress />

          {/* Custom Desktop Magnetic Cursor */}
          <CustomCursor />

          {/* Smooth Inertial Scrolling Engine */}
          <SmoothScroll>
            <div className="flex min-h-screen flex-col justify-between">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </SmoothScroll>

          {/* Global Accessible Contact Modal */}
          <ContactModal />

          {/* Floating WhatsApp Action */}
          <WhatsAppButton />
        </ContactModalProvider>
      </body>
    </html>
  );
}
