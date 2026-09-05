import AwardsTimeline from '@/components/sections/AwardsTimeline';
import CtaBanner from '@/components/sections/CtaBanner';
import Hero from '@/components/sections/Hero';
import HorizontalProcess from '@/components/sections/HorizontalProcess';
import Marquee from '@/components/sections/Marquee';
import ServiceTabs from '@/components/sections/ServiceTabs';
import StatsCounter from '@/components/sections/StatsCounter';
import StrengthsGrid from '@/components/sections/StrengthsGrid';
import TestimonialSection from '@/components/sections/TestimonialSection';
import { getPageMetadata } from '@/lib/metadata.config';

export const metadata = getPageMetadata('home');

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Client Logo Marquee Strip */}
      <Marquee />

      {/* 3. What We Do (4 Categories & 14 Services Tabbed Grid) */}
      <ServiceTabs />

      {/* 4. Why Ejnar Studios  (Infographic Blueprint & Strengths) */}
      <StrengthsGrid />

      {/* 5. Process Timeline (Deck p.10–12 Step Walkthrough) */}
      <HorizontalProcess />

      {/* 6. Digital Presence Stats & Metrics (Deck p.17) */}
      <StatsCounter />

      {/* 7. Awards & Industry Recognition (Deck p.25) */}
      <AwardsTimeline />

      {/* 8. Pull-Quote Testimonial */}
      <TestimonialSection />

      {/* 9. High-Conversion CTA Banner */}
      <CtaBanner />
    </>
  );
}
