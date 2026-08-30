'use client';

import React from 'react';
import {
  CheckCircle2,
  Headphones,
  FileText,
  Sparkles,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { STRENGTHS_DATA } from '@/lib/data/strengths';

const iconMap: Record<string, React.ElementType> = {
  CheckCircle2,
  Headphones,
  FileText,
  Sparkles,
  ShieldCheck,
  Zap,
};

export default function StrengthsGrid() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-[#151515] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-secondary border border-primary/25 text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <span>Our Strengths & Guarantees</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-cream tracking-tight mb-4">
            Why <span className="text-gold-gradient">EJNARSTUDIOS</span>
          </h2>
          <p className="text-muted text-sm sm:text-base leading-relaxed">
            Built from the core values of our agency deck (p.21) — we combine architectural precision with uncompromised commercial accountability.
          </p>
        </div>

        {/* 6-Item Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STRENGTHS_DATA.map((item) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={item.id}
                className="group relative p-8 rounded-2xl bg-dark-secondary/80 border border-white/5 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-[0_10px_30px_rgba(214,180,136,0.08)]"
              >
                {/* Top Row: Circular Number Badge & Stat Pill */}
                <div className="flex items-center justify-between mb-6">
                  <div className="badge-circle group-hover:bg-primary group-hover:text-dark transition-colors">
                    {item.badge}
                  </div>
                  {item.stat && (
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white/[0.04] text-primary border border-white/5">
                      {item.stat}
                    </span>
                  )}
                </div>

                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-full bg-primary/10 text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-cream group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                </div>

                <span className="inline-block text-[11px] font-semibold text-primary uppercase tracking-widest mb-3">
                  {item.highlight}
                </span>

                {/* Description */}
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
