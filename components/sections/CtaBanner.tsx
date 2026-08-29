'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Sparkles, PhoneCall } from 'lucide-react';
import { BRAND } from '@/lib/constants';

export default function CtaBanner() {
  return (
    <section className="py-24 px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-dark to-[#161616]">
      {/* Background glow and gold ambient mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="rounded-3xl p-10 sm:p-16 bg-gradient-to-br from-dark-secondary via-[#242424] to-dark border border-primary/30 shadow-[0_20px_60px_rgba(0,0,0,0.8)] text-center relative overflow-hidden">
          {/* Top gold hairline */}
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent absolute top-0 left-0 right-0" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready for the next level?</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-cream tracking-tight mb-6">
            Ready to Build <br />
            <span className="text-gold-gradient">Your Digital Flagship?</span>
          </h2>

          <p className="text-muted text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-10">
            Let’s craft a brand identity, web experience, and marketing engine that outpaces your competition. Schedule an exploratory discovery session with our senior leadership today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact-us"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded font-display font-bold text-sm tracking-wider uppercase bg-gold-gradient text-dark hover:brightness-110 shadow-[0_0_25px_rgba(214,180,136,0.4)] hover:shadow-[0_0_35px_rgba(214,180,136,0.6)] transition-all duration-300 transform active:scale-95"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 text-dark" />
            </Link>

            <a
              href={`tel:${BRAND.contact.mobileRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded font-display font-bold text-sm tracking-wider uppercase bg-dark-tertiary border border-primary/30 text-cream hover:text-primary hover:border-primary transition-all duration-300"
            >
              <PhoneCall className="w-4 h-4 text-primary" />
              <span>Call +91-73581 00831</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
