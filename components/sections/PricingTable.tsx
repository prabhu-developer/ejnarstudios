'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check, Minus, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';
import { PACKAGE_PLANS, PACKAGE_FEATURES } from '@/lib/data/packages';
import { useContactModal } from '@/context/ContactModalContext';

export default function PricingTable() {
  const [selectedPlanMobile, setSelectedPlanMobile] = useState('marketing-plan-2');
  const { openContactModal } = useContactModal();

  return (
    <section id="packages" className="py-24 px-6 lg:px-8 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-secondary border border-primary/25 text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <span>Full Package Tiers</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-cream tracking-tight mb-4">
            Packages & <span className="text-gold-gradient">Comparison.</span>
          </h2>
          <p className="text-muted text-sm sm:text-base leading-relaxed">
            Transparent modular capabilities across Design, Engineering, and Growth Marketing.
          </p>
        </div>

        {/* Pricing Summary Cards (Top Overview) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {PACKAGE_PLANS.map((plan) => {
            const isPopular = plan.popular;
            return (
              <div
                key={plan.id}
                className={`relative rounded-xl p-6 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-dark-secondary border-2 border-primary shadow-[0_0_30px_rgba(214,180,136,0.15)] -translate-y-2'
                    : 'bg-dark-secondary/60 border border-white/10 hover:border-white/25'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-primary text-dark text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                    Most Popular
                  </div>
                )}

                <div>
                  <h3 className="font-display font-bold text-lg text-cream mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-primary font-medium mb-3">
                    {plan.tagline}
                  </p>
                  <p className="text-xs text-muted leading-relaxed mb-6">
                    {plan.summary}
                  </p>

                  <div className="space-y-2 mb-6 pt-4 border-t border-white/5">
                    {plan.keyHighlights.map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-[11px] text-cream/80">
                        <Check className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() =>
                    openContactModal({
                      title: `Discuss ${plan.name}`,
                      subtitle: `${plan.tagline} • Modular Scope`,
                      contextTag: `${plan.name} Tier`,
                      defaultMessage: `I would like to discuss the ${plan.name} (${plan.tagline}) tier for our business. Please share full deliverables specifications and timeline.`,
                      submitButtonText: 'Request Plan Discussion',
                    })
                  }
                  className={`w-full py-2.5 rounded-full text-center text-xs font-display font-bold uppercase tracking-wider transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer ${
                    isPopular
                      ? 'bg-gold-gradient text-dark hover:brightness-110 shadow-md'
                      : 'bg-white/[0.05] text-cream hover:bg-primary hover:text-dark'
                  }`}
                >
                  Discuss Plan
                </button>
              </div>
            );
          })}
        </div>

        {/* Detailed Feature Comparison Table (Desktop) */}
        <div className="hidden lg:block overflow-x-auto rounded-xl border border-white/10 bg-dark-secondary/40">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-dark-secondary">
                <th className="p-4 font-display font-bold text-sm text-cream uppercase tracking-wider w-1/4">
                  Feature Inclusions
                </th>
                <th className="p-4 font-display font-bold text-xs text-cream uppercase tracking-wider text-center">
                  Design Plan
                </th>
                <th className="p-4 font-display font-bold text-xs text-cream uppercase tracking-wider text-center">
                  Development Plan
                </th>
                <th className="p-4 font-display font-bold text-xs text-cream uppercase tracking-wider text-center">
                  Marketing Plan I
                </th>
                <th className="p-4 font-display font-bold text-xs text-primary uppercase tracking-wider text-center bg-primary/10 border-x border-primary/20">
                  Marketing Plan II ★
                </th>
                <th className="p-4 font-display font-bold text-xs text-cream uppercase tracking-wider text-center">
                  Marketing Plan III
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {PACKAGE_FEATURES.map((feature, fIdx) => (
                <tr key={fIdx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-medium text-cream/90">
                    <span className="text-[10px] uppercase font-mono text-muted block mb-0.5">
                      {feature.category}
                    </span>
                    {feature.name}
                  </td>
                  {/* Design Plan Cell */}
                  <td className="p-4 text-center text-muted">
                    {renderCell(feature.designPlan)}
                  </td>
                  {/* Dev Plan Cell */}
                  <td className="p-4 text-center text-muted">
                    {renderCell(feature.devPlan)}
                  </td>
                  {/* Marketing 1 Cell */}
                  <td className="p-4 text-center text-muted">
                    {renderCell(feature.marketingPlan1)}
                  </td>
                  {/* Marketing 2 (Popular) Cell */}
                  <td className="p-4 text-center font-semibold text-cream bg-primary/5 border-x border-primary/20">
                    {renderCell(feature.marketingPlan2, true)}
                  </td>
                  {/* Marketing 3 Cell */}
                  <td className="p-4 text-center text-muted">
                    {renderCell(feature.marketingPlan3)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Disclaimer Note from Deck */}
        <div className="mt-8 p-4 rounded-lg bg-dark-secondary/60 border border-primary/20 flex items-start gap-3 text-xs text-muted max-w-4xl mx-auto">
          <HelpCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
          <p>
            <strong className="text-cream">Pricing Note (from deck p.26):</strong> Cost is customized based on individual client branding, architectural requirements, and volume needs. Tailor-made features and third-party advertising budgets (Meta / Google ad spend) are managed separately from agency retainer fees.
          </p>
        </div>
      </div>
    </section>
  );
}

function renderCell(val: string | boolean, isHighlighted = false) {
  if (typeof val === 'boolean') {
    if (val) {
      return (
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary">
          <Check className="w-3.5 h-3.5" />
        </span>
      );
    }
    return <Minus className="w-3.5 h-3.5 text-muted/40 mx-auto" />;
  }
  return <span className={isHighlighted ? 'text-primary font-bold' : 'text-cream/90 font-medium'}>{val}</span>;
}
