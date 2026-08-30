'use client';

import React, { useState } from 'react';
import {
  Users,
  BarChart2,
  Layers,
  CheckSquare,
  Code2,
  TrendingUp,
  Clock,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { PROCESS_TIMELINE } from '@/lib/data/process';

const iconMap: Record<string, React.ElementType> = {
  Users,
  BarChart2,
  Layers,
  CheckSquare,
  Code2,
  TrendingUp,
};

export default function HorizontalProcess() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 px-6 lg:px-8 bg-dark relative overflow-hidden">
      {/* Background radial lighting */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <span>Deck p.10–12 • Strategic Flow</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-cream tracking-tight">
              Our Process <span className="text-gold-gradient">Timeline.</span>
            </h2>
          </div>
          <p className="text-muted text-sm sm:text-base max-w-md">
            From initial stakeholder discovery to high-scale marketing deployment, our timeline is predictable, transparent, and battle-tested.
          </p>
        </div>

        {/* Horizontal Stepper Progress Indicator */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {PROCESS_TIMELINE.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStep(idx)}
                className={`flex flex-col items-start p-4 rounded-2xl border text-left transition-all duration-300 ${
                  isSelected
                    ? 'bg-dark-secondary border-primary shadow-[0_0_15px_rgba(214,180,136,0.2)]'
                    : 'bg-dark-secondary/40 border-white/5 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <span className={`font-mono text-xs font-bold ${isSelected ? 'text-primary' : 'text-muted'}`}>
                    STEP {step.stepNumber}
                  </span>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/[0.05] text-cream/70 font-mono border border-white/5">
                    {step.days}
                  </span>
                </div>
                <span className={`font-display font-semibold text-xs leading-tight ${isSelected ? 'text-cream' : 'text-muted'}`}>
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Showcase Card */}
        {(() => {
          const step = PROCESS_TIMELINE[activeStep];
          const Icon = iconMap[step.icon] || Users;
          return (
            <div className="relative rounded-3xl bg-dark-secondary/80 border border-primary/20 p-8 sm:p-12 overflow-hidden shadow-2xl">
              {/* Subtle top gold accent line */}
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent absolute top-0 left-0 right-0" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Col: Step Info */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest">
                          Stage {step.stepNumber} • {step.subtitle}
                        </span>
                      </div>
                      <h3 className="font-display font-black text-2xl sm:text-3xl text-cream">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-muted leading-relaxed font-body">
                    {step.description}
                  </p>

                  {/* Deliverables in this stage */}
                  <div className="pt-4 border-t border-white/10">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-cream/90 mb-3">
                      Stage Deliverables & Milestone Outputs:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {step.deliverables.map((deliv, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-xs text-muted">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Col: Timeline & Duration Callout */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-xl bg-[#181818] border border-white/5 text-center">
                  <Clock className="w-10 h-10 text-primary mb-3" />
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-muted">
                    Estimated Timeframe
                  </span>
                  <p className="font-display font-black text-3xl sm:text-4xl text-gold-gradient my-2">
                    {step.days}
                  </p>
                  <p className="text-xs text-muted max-w-xs">
                    Phase timelines are adjusted precisely based on your scope and delivery urgency.
                  </p>

                  <div className="flex items-center gap-2 mt-6">
                    {PROCESS_TIMELINE.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveStep(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          activeStep === i ? 'w-8 bg-primary' : 'w-2 bg-white/20'
                        }`}
                        aria-label={`Go to step ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
}
