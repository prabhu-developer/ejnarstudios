import CtaBanner from '@/components/sections/CtaBanner';
import PricingTable from '@/components/sections/PricingTable';
import AnimatedHeroBanner from '@/components/ui/AnimatedHeroBanner';
import { SERVICE_CATEGORIES } from '@/lib/data/services';
import { constructMetadata } from '@/lib/seo';
import {
  ArrowRight,
  Compass,
  Cpu,
  Feather,
  Globe,
  Layers,
  LayoutDashboard,
  MessageSquare,
  Palette,
  Share2,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Video
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const iconMap: Record<string, React.ElementType> = {
  Feather,
  Sparkles,
  Palette,
  Globe,
  ShoppingBag,
  Smartphone,
  LayoutDashboard,
  Cpu,
  TrendingUp,
  Share2,
  Users,
  Target,
  MessageSquare,
  Compass,
  Video,
};

export const metadata = constructMetadata({
  title: 'Services & Digital Capabilities — EJNARSTUDIOS Chennai',
  description: 'Explore our 14 end-to-end services across Design & Branding, Website & Mobile Development, Marketing & Growth, and Cinema Video Production.',
  path: '/services',
});

export default function ServicesPage() {
  const requirementsWeConsider = [
    {
      step: '01',
      title: 'Target Audience Profile',
      subtitle: 'Demographics & Intent',
      desc: 'Identifying psychographics, device preferences, and buyer behaviors to tailor user flows and visual tone.',
      icon: Users,
    },
    {
      step: '02',
      title: 'Industry & Competitor Landscape',
      subtitle: 'Market Positioning',
      desc: 'Benchmarking top players to identify differentiation vectors and establish market leadership.',
      icon: Compass,
    },
    {
      step: '03',
      title: 'Commercial Business Goals',
      subtitle: 'CAC, LTV & Conversions',
      desc: 'Aligning design deliverables directly to unit economics, lead capture, and revenue acceleration.',
      icon: Target,
    },
    {
      step: '04',
      title: 'Scalable Tech Stack Alignment',
      subtitle: 'Technical Architecture',
      desc: 'Determining optimal tech stacks (Next.js SSG, custom APIs, native apps, or headless e-commerce) to guarantee speed and longevity.',
      icon: Layers,
    },
  ];

  return (
    <div className="pt-28 bg-dark text-cream">
      {/* Services Hub Animated Hero */}
      <AnimatedHeroBanner
        badgeText="End-To-End Agency Capabilities"
        headlinePrefix="We Offer"
        highlightText="End-to-End"
        headlineSuffix="Services."
        description="From iconic visual identities and high-performance Next.js architectures to algorithmic marketing funnels and full-scale commercial ad production."
        actions={
          <>
            <a
              href="#packages"
              className="px-6 py-3.5 rounded-xl text-xs font-display font-bold uppercase tracking-wider bg-gold-gradient text-dark hover:brightness-110 shadow-md transition-all transform hover:scale-105 active:scale-95"
            >
              Jump to Packages Table
            </a>
            <a
              href="#categories"
              className="px-6 py-3.5 rounded-xl text-xs font-display font-bold uppercase tracking-wider bg-dark-secondary border border-white/10 text-cream hover:text-primary transition-all transform hover:scale-105 active:scale-95 shadow-sm"
            >
              Browse 14 Services
            </a>
          </>
        }
      />

      {/* Requirements We Consider Section (Deck p.5) */}
      <section className="py-24 px-6 lg:px-8 bg-[#151515] border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-primary mb-2 block">
              Strategic Foundation • Deck p.5
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-cream">
              Requirements We <span className="text-gold-gradient">Consider.</span>
            </h2>
            <p className="text-sm text-muted mt-2">
              Every client engagement begins with a 4-pillar foundational audit before executing creative or engineering work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {requirementsWeConsider.map((req) => {
              const Icon = req.icon;
              return (
                <div
                  key={req.step}
                  className="p-6 rounded-xl bg-dark-secondary/70 border border-white/5 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-full bg-primary/10 text-primary">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="badge-circle text-xs">{req.step}</span>
                    </div>

                    <span className="text-[11px] font-mono text-primary uppercase tracking-widest block mb-1">
                      {req.subtitle}
                    </span>
                    <h3 className="font-display font-bold text-base text-cream mb-3">
                      {req.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed">
                      {req.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4 Categorized Service Matrices */}
      <section id="categories" className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-24">
          {SERVICE_CATEGORIES.map((cat, catIdx) => (
            <div key={cat.id} className="scroll-mt-32">
              {/* Category Heading */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-primary/20 mb-8">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest">
                      Category 0{catIdx + 1}
                    </span>
                  </div>
                  <h2 className="font-display font-black text-2xl sm:text-4xl text-cream mt-1">
                    {cat.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-muted mt-1">
                    {cat.description}
                  </p>
                </div>
                <span className="text-xs font-mono text-primary/80">
                  {cat.services.length} Dedicated Services
                </span>
              </div>

              {/* Category Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.services.map((service) => {
                  const Icon = iconMap[service.icon] || Sparkles;
                  return (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      className="group p-6 rounded-xl bg-dark-secondary/60 border border-white/5 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="p-2.5 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-dark transition-all">
                            <Icon className="w-5 h-5" />
                          </div>
                          {service.badge && (
                            <span className="px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-primary/20 text-primary border border-primary/30">
                              {service.badge}
                            </span>
                          )}
                        </div>

                        <h3 className="font-display font-bold text-lg text-cream group-hover:text-primary transition-colors mb-2">
                          {service.name}
                        </h3>
                        <p className="text-xs text-muted leading-relaxed line-clamp-3 mb-6">
                          {service.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-primary">
                        <span>View Specifications</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Package Comparison Table Section */}
      <PricingTable />

      {/* CTA */}
      <CtaBanner />
    </div>
  );
}
