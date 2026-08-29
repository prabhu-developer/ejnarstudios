'use client';

import { ServiceItem } from '@/lib/data/services';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceSubpageHeroProps {
  service: ServiceItem;
}

export default function ServiceSubpageHero({ service }: ServiceSubpageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 px-6 lg:px-8 bg-dark overflow-hidden border-b border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-primary/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted mb-8 font-mono">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-muted/60" />
          <Link href="/services" className="hover:text-primary transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3 h-3 text-muted/60" />
          <span className="text-primary font-semibold">{service.name}</span>
        </nav>

        {/* 2-Column Hero Grid: Left Content, Right Matching Service Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & Actions (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Category & Badge */}
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.2em] bg-primary/10 text-primary border border-primary/20">
                {service.category}
              </span>
              {service.badge && (
                <span className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-gold-gradient text-dark">
                  {service.badge}
                </span>
              )}
            </div>

            {/* Headlines */}
            <h1 className="font-banner font-black text-3xl sm:text-4xl md:text-5xl md:text-6xl text-cream tracking-tight leading-[1.08]">
              {service.heroHeadline}
            </h1>

            <p className="text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
              {service.description}
            </p>

            {/* Key Stats Bar if available */}
            {service.stats && service.stats.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-5 px-6 rounded-xl bg-dark-secondary/80 border border-primary/20 max-w-xl">
                {service.stats.map((st, sIdx) => (
                  <div key={sIdx}>
                    <span className="font-display font-black text-2xl sm:text-3xl text-gold-gradient">
                      {st.value}
                    </span>
                    <span className="block text-xs text-muted mt-0.5">
                      {st.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Link
                href="/contact-us"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded font-display font-bold text-sm tracking-wider uppercase bg-gold-gradient text-dark hover:brightness-110 shadow-lg transition-all transform active:scale-95"
              >
                <span>Book {service.name} Consultation</span>
                <ArrowRight className="w-4 h-4 text-dark" />
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded font-display font-bold text-sm tracking-wider uppercase bg-dark-secondary border border-white/10 text-cream hover:text-primary hover:border-primary transition-all"
              >
                <span>View All Packages</span>
              </Link>
            </div>
          </div>

          {/* Right Column: High-Impact Visual Card (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[360px] sm:h-[420px] w-full rounded-2xl overflow-hidden border border-primary/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
              <Image
                src={service.heroImage}
                alt={service.heroImageAlt}
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Subtle dark luxury gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

              {/* Bottom Card Annotation */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-dark/85 backdrop-blur-md border border-white/10">
                <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-primary block mb-0.5">
                  {service.category} • Core Capability
                </span>
                <h3 className="font-display font-bold text-sm text-cream">
                  {service.name}
                </h3>
                <p className="text-[11px] text-muted line-clamp-1 mt-0.5">
                  {service.shortDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
