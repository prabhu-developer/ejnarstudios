'use client';

import React from 'react';
import { Award, Trophy, Star, CheckCircle2 } from 'lucide-react';
import { AWARDS_DATA } from '@/lib/data/awards';

export default function AwardsTimeline() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-secondary border border-primary/25 text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Trophy className="w-3.5 h-3.5 text-primary" />
            <span>Deck p.25 • Industry Recognition</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-cream tracking-tight mb-4">
            Awards & <span className="text-gold-gradient">Recognition.</span>
          </h2>
          <p className="text-muted text-sm sm:text-base">
            Validated by global and national industry bodies for digital innovation, branding craft, and enterprise execution.
          </p>
        </div>

        {/* Awards Horizontal/Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AWARDS_DATA.map((award, idx) => (
            <div
              key={`${award.title}-${idx}`}
              className="group p-8 rounded-xl bg-dark-secondary/70 border border-white/5 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              {/* Year & Category */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono font-bold text-lg text-primary px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20">
                  {award.year}
                </span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-muted px-3 py-1 rounded-full bg-white/[0.04] border border-white/5">
                  {award.category}
                </span>
              </div>

              {/* Title & Organization */}
              <h3 className="font-display font-bold text-xl text-cream group-hover:text-primary transition-colors mb-1">
                {award.title}
              </h3>
              <p className="text-xs font-semibold text-primary/80 mb-3">
                {award.organization}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
