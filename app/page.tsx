import React from 'react';
import Hero from '@/components/sections/Hero';
import Marquee from '@/components/sections/Marquee';
import ServiceTabs from '@/components/sections/ServiceTabs';
import StrengthsGrid from '@/components/sections/StrengthsGrid';
import HorizontalProcess from '@/components/sections/HorizontalProcess';
import PortfolioGrid from '@/components/sections/PortfolioGrid';
import StatsCounter from '@/components/sections/StatsCounter';
import AwardsTimeline from '@/components/sections/AwardsTimeline';
import TestimonialSection from '@/components/sections/TestimonialSection';
import CtaBanner from '@/components/sections/CtaBanner';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'EJNARSTUDIOS — Creative Branding, Web/App Development & Marketing Agency Chennai',
  description: 'Award-winning creative digital agency in Chennai crafting luxury brand identities, high-performance Next.js websites, mobile apps, and full-funnel digital marketing.',
});

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Client Logo Marquee Strip */}
      <Marquee />

      {/* 3. What We Do (4 Categories & 14 Services Tabbed Grid) */}
      <ServiceTabs />

      {/* 4. Why EJNARSTUDIOS (6 Core Strengths from Deck p.21) */}
      <StrengthsGrid />

      {/* 5. Process Timeline (Deck p.10–12 Step Walkthrough) */}
      <HorizontalProcess />

      {/* 6. Featured Work / Portfolio Case Studies */}
      <PortfolioGrid />

      {/* 7. Digital Presence Stats & Metrics (Deck p.17) */}
      <StatsCounter />

      {/* 8. Awards & Industry Recognition (Deck p.25) */}
      <AwardsTimeline />

      {/* 9. Pull-Quote Testimonial */}
      <TestimonialSection />

      {/* 10. High-Conversion CTA Banner */}
      <CtaBanner />
    </>
  );
}
