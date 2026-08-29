'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { ServiceItem } from '@/lib/data/services';

interface ServiceSubpageHeroProps {
  service: ServiceItem;
}

export default function ServiceSubpageHero({ service }: ServiceSubpageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 px-6 lg:px-8 bg-dark overflow-hidden border-b border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
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

        {/* Category & Badge */}
        <div className="flex items-center gap-3 mb-6">
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
        <h1 className="font-banner font-black text-4xl sm:text-5xl md:text-6xl text-cream tracking-tight leading-[1.1] mb-6">
          {service.heroHeadline}
        </h1>

        <p className="text-base sm:text-lg text-muted max-w-3xl leading-relaxed mb-10">
          {service.description}
        </p>

        {/* Key Stats Bar if available */}
        {service.stats && service.stats.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-6 px-8 rounded-xl bg-dark-secondary/80 border border-primary/20 max-w-2xl mb-10">
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
        <div className="flex flex-col sm:flex-row items-center gap-4">
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
    </section>
  );
}
