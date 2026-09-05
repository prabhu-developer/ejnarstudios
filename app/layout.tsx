import CustomCursor from '@/components/layout/CustomCursor';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import LoadingScreen from '@/components/layout/LoadingScreen';
import ScrollProgress from '@/components/layout/ScrollProgress';
import SmoothScroll from '@/components/layout/SmoothScroll';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import AutoLeadPopup from '@/components/modals/AutoLeadPopup';
import ContactModal from '@/components/modals/ContactModal';
import { ContactModalProvider } from '@/context/ContactModalContext';
import { getPageMetadata } from '@/lib/metadata.config';
import { generateLocalBusinessSchema, generateOrganizationSchema, generateWebSiteSchema } from '@/lib/seo';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import Script from 'next/script';
import { androidFont } from './fonts';
import './globals.css';

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
export const metadata: Metadata = getPageMetadata('home');

// ─────────────────────────────────────────────────────────────────────────────
// ANALYTICS CONFIGURATION
// Replace these placeholder values with real credentials:
//   GA4_MEASUREMENT_ID  → Your Google Analytics 4 ID (format: G-XXXXXXXXXX)
//   GSC_VERIFICATION    → Your Google Search Console HTML-tag verification code
// ─────────────────────────────────────────────────────────────────────────────
const GA4_MEASUREMENT_ID = "G-02G7FY4KMZ";
const GSC_VERIFICATION = "Z5lW_-M1KoZCV8v_IBYaN37qGzgLfTpbO6kHvC3fFz0";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();
  const localBusinessSchema = generateLocalBusinessSchema();
  const webSiteSchema = generateWebSiteSchema();

  return (
    <html lang="en" className={`${androidFont.variable} ${spaceGrotesk.variable} ${inter.variable} dark`}>
      <head>
        {/* Google Search Console Verification — replace value with your actual verification code */}
        {GSC_VERIFICATION && (
          <meta name="google-site-verification" content={GSC_VERIFICATION} />
        )}

        {/* Organization Schema — global entity definition */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* LocalBusiness Schema — critical for local pack / maps eligibility */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        {/* WebSite Schema — enables Sitelinks Searchbox for branded searches */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body className="bg-dark text-cream font-body antialiased selection:bg-primary selection:text-dark">
        {/* Google Analytics 4 — loads after page is interactive (no LCP impact) */}
        {GA4_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA4_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: true,
                });
              `}
            </Script>
          </>
        )}

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

          {/* Smart Auto Lead Generation Popup (Timer, Exit Intent & Scroll Triggers) */}
          <AutoLeadPopup />

          {/* Floating WhatsApp Action */}
          <WhatsAppButton />
        </ContactModalProvider>
      </body>
    </html>
  );
}

