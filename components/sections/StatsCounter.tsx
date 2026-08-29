'use client';

import { Globe, Smartphone, Sparkles, Zap } from 'lucide-react';

const STATS = [
  {
    id: 'interactions',
    value: '1.4B+',
    number: 1.4,
    suffix: 'B+',
    label: 'Daily Social Interactions',
    description: 'Generated across managed client campaigns and viral channels (deck p.17).',
    icon: Globe,
  },
  {
    id: 'mobile',
    value: '89%',
    number: 89,
    suffix: '%',
    label: 'Mobile-First Audience',
    description: 'Tailored responsive viewports and aspect-ratio precision across all builds.',
    icon: Smartphone,
  },
  {
    id: 'speed',
    value: '98+',
    number: 98,
    suffix: '+',
    label: 'Lighthouse Performance Score',
    description: 'Sub-second first contentful paints and optimized Core Web Vitals.',
    icon: Zap,
  },
  {
    id: 'clients',
    value: '100%',
    number: 100,
    suffix: '%',
    label: 'Turnkey Delivery Readiness',
    description: 'Zero unfinished handovers with complete source code & documentation.',
    icon: Sparkles,
  },
];

export default function StatsCounter() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-[#181818] border-y border-white/5 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="relative p-6 rounded-xl bg-dark-secondary/60 border border-white/5 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded bg-primary/10 text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-muted uppercase tracking-widest">
                    METRIC 0{idx + 1}
                  </span>
                </div>

                <div>
                  <span className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-gold-gradient tracking-tight">
                    {stat.value}
                  </span>
                  <h4 className="font-display font-bold text-sm text-cream mt-2 mb-1">
                    {stat.label}
                  </h4>
                  <p className="text-xs text-muted leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
