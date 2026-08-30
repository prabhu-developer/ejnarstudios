'use client';

import { STRENGTHS_DATA } from '@/lib/data/strengths';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Check,
  CheckCircle2,
  FileText,
  Headphones,
  ShieldCheck,
  Sparkles,
  Zap
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';

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
    <section className="py-24 sm:py-32 px-6 lg:px-8 bg-[#121212] relative overflow-hidden border-t border-b border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-96 h-96 bg-primary/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-secondary border border-primary/25 text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-4 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Studio Trust Blueprint</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-cream tracking-tight mb-4">
            Why Choose <span className="text-gold-gradient">EJNARSTUDIOS.</span>
          </h2>
          <p className="text-muted text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            We combine high-concept architectural design with strict commercial accountability, sub-second engineering, and zero vendor lock-in.
          </p>
        </div>
        {/* 2. Main Infographic 6-Pillar Feature Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STRENGTHS_DATA.map((item, idx) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative p-7 sm:p-8 rounded-3xl bg-dark-secondary/80 border border-white/10 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-xl hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
              >
                <div>
                  {/* Top Row: Icon Container + Stat Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-dark transition-all duration-300 shadow-inner group-hover:rotate-6">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-primary">
                        {item.stat}
                      </span>
                      <span className="text-xs font-mono text-muted">
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  {/* Highlight Pill & Title */}
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-primary block mb-1">
                    {item.highlight}
                  </span>
                  <h3 className="font-display font-bold text-xl text-cream group-hover:text-primary transition-colors mb-2.5">
                    {item.title}
                  </h3>

                  {/* Short 1-2 sentence description */}
                  <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Infographic Visual Checklist / Chips */}
                <div className="pt-4 border-t border-white/5 space-y-2">
                  <div className="flex flex-wrap gap-1.5">
                    {item.chips.map((chip, cIdx) => (
                      <span
                        key={cIdx}
                        className="inline-flex items-center gap-1.5 text-[10px] font-medium px-2.5 py-1 rounded-full bg-dark/80 border border-white/5 text-cream/80 group-hover:border-primary/30 group-hover:text-cream transition-colors"
                      >
                        <Check className="w-3 h-3 text-primary shrink-0" />
                        <span>{chip}</span>
                      </span>
                    ))}
                  </div>

                  {/* Bottom Subtle Visual Indicator Bar */}
                  <div className="pt-3">
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-gold-gradient w-3/4 group-hover:w-full transition-all duration-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 3. Bottom Connected Infographic Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-dark-secondary/50 border border-primary/20 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center text-primary shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base sm:text-lg text-cream">
                Guaranteed Execution & Architectural Rigor
              </h4>
              <p className="text-xs text-muted mt-0.5">
                Every project is backed by transparent milestones, staged testing, and direct senior lead governance.
              </p>
            </div>
          </div>

          <Link
            href="/contact-us"
            className="px-6 py-3 rounded-full bg-gold-gradient text-dark font-display font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 self-start sm:self-auto shrink-0 shadow-lg cursor-pointer"
          >
            <span>Start A Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
