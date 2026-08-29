import React from 'react';
import { SERVICES_DATA } from '@/lib/data/services';
import { LOGO_TYPES } from '@/lib/data/logo-types';
import ServiceSubpageHero from '@/components/ui/ServiceSubpageHero';
import CtaBanner from '@/components/sections/CtaBanner';
import { constructMetadata, generateServiceSchema } from '@/lib/seo';
import {
  Type,
  Image as ImageIcon,
  Shield,
  Compass,
  Smile,
  Layers,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Type,
  Image: ImageIcon,
  Shield,
  Compass,
  Smile,
  Layers,
};

const service = SERVICES_DATA.find((s) => s.slug === 'logo')!;

export const metadata = constructMetadata({
  title: 'Logo Design & Visual Identity Systems in Chennai',
  description: 'Bespoke corporate logo design covering 6 core typologies: Wordmark, Pictorial, Emblem, Abstract, Mascot, and Combination marks. 100% vector scalability.',
  path: '/services/logo',
});

export default function LogoDesignPage() {
  const schema = generateServiceSchema({
    name: service.name,
    description: service.description,
    slug: service.slug,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="bg-dark text-cream">
        {/* Service Hero */}
        <ServiceSubpageHero service={service} />

        {/* 6 Types of Logos Explainer (Deck p.4) */}
        <section className="py-24 px-6 lg:px-8 bg-[#151515] border-b border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-primary mb-2 block">
                Deck p.4 • Brand Anatomy
              </span>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-cream">
                6 Architectural <span className="text-gold-gradient">Types of Logos.</span>
              </h2>
              <p className="text-sm text-muted mt-3">
                We conceptualize and execute across the full spectrum of logo design disciplines based on your industry and naming cadence.
              </p>
            </div>

            {/* 6-Card Interactive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {LOGO_TYPES.map((lt, idx) => {
                const Icon = iconMap[lt.iconName] || Sparkles;
                return (
                  <div
                    key={lt.id}
                    className="group p-8 rounded-xl bg-dark-secondary border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-dark transition-all duration-300">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="badge-circle text-xs">0{idx + 1}</span>
                      </div>

                      <span className="text-[10px] font-mono uppercase tracking-widest text-primary block mb-1">
                        {lt.subtitle}
                      </span>
                      <h3 className="font-display font-bold text-xl text-cream mb-3">
                        {lt.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">
                        {lt.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/5 space-y-2 text-xs">
                      <div>
                        <span className="font-semibold text-cream/90">Global Benchmarks: </span>
                        <span className="text-muted">{lt.examples}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-primary">Ideal For: </span>
                        <span className="text-muted">{lt.bestFor}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Deliverables & Vector Features */}
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-primary mb-2 block">
                Deliverables Kit
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-cream mb-6">
                Everything Included In <br />
                <span className="text-gold-gradient">Your Logo Handover.</span>
              </h2>
              <p className="text-sm text-muted leading-relaxed mb-6">
                You receive 100% full intellectual property ownership, source vector master files, and comprehensive guideline specifications for print and digital deployments.
              </p>

              <div className="space-y-3">
                {service.deliverables.map((deliv, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-3 text-sm text-cream/90">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Vector Specs Callout Box */}
            <div className="p-8 rounded-2xl bg-dark-secondary/80 border border-primary/25 shadow-2xl space-y-6">
              <h3 className="font-display font-bold text-xl text-cream">
                Vector Precision & Scalability
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                Rendered with mathematical golden ratio curves. Whether scaled down to a 16px favicon or expanded to a 100-foot billboard, our marks preserve razor-sharp fidelity.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 font-mono text-xs">
                <div className="p-3 rounded bg-dark border border-white/5">
                  <span className="text-primary font-bold block">AI, EPS, SVG</span>
                  <span className="text-muted text-[10px]">Master Source Files</span>
                </div>
                <div className="p-3 rounded bg-dark border border-white/5">
                  <span className="text-primary font-bold block">CMYK & RGB</span>
                  <span className="text-muted text-[10px]">Print & Web Calibrated</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CtaBanner />
      </div>
    </>
  );
}
