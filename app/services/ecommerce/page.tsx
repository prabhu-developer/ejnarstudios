import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SERVICES_DATA } from '@/lib/data/services';
import { PORTFOLIO_DATA } from '@/lib/data/portfolio';
import ServiceSubpageHero from '@/components/ui/ServiceSubpageHero';
import CtaBanner from '@/components/sections/CtaBanner';
import { constructMetadata, generateServiceSchema } from '@/lib/seo';
import { ShoppingBag, ArrowUpRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

const service = SERVICES_DATA.find((s) => s.slug === 'ecommerce')!;
const relatedProjects = PORTFOLIO_DATA.filter((p) =>
  ['jucoholic', 'dimah-fashions'].includes(p.slug)
);

export const metadata = constructMetadata({
  title: 'E-commerce Development Company Chennai — Shopify, WooCommerce & Custom Stores',
  description: 'Scalable e-commerce store engineering with frictionless checkout, payment gateway integrations, and inventory automation. Case studies: Jucoholic & DimahFashions.',
  path: '/services/ecommerce',
});

export default function EcommercePage() {
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
        <ServiceSubpageHero service={service} />

        {/* Featured Case Studies (Jucoholic & DimahFashions from Deck) */}
        <section className="py-24 px-6 lg:px-8 bg-[#151515] border-b border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-primary mb-2 block">
                Proof of Execution
              </span>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-cream">
                E-Commerce <span className="text-gold-gradient">Case Studies.</span>
              </h2>
              <p className="text-sm text-muted mt-3">
                Real-world e-commerce platforms engineered by EJNARSTUDIOS to drive conversions and seamless logistics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="rounded-2xl bg-dark-secondary overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-300 shadow-xl"
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-secondary via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-mono bg-dark/80 text-primary border border-primary/30">
                      {proj.category}
                    </span>
                  </div>

                  <div className="p-8">
                    <span className="text-xs font-mono text-muted uppercase">{proj.client}</span>
                    <h3 className="font-display font-bold text-2xl text-cream mt-1 mb-3">
                      {proj.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">
                      {proj.description}
                    </p>

                    {proj.metrics && (
                      <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-dark border border-white/5 mb-6">
                        {proj.metrics.map((m, idx) => (
                          <div key={idx} className="text-center">
                            <span className="font-display font-black text-lg text-primary">{m.value}</span>
                            <span className="block text-[10px] text-muted truncate">{m.label}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {proj.deliverables.map((deliv, dIdx) => (
                        <span key={dIdx} className="px-2.5 py-1 rounded bg-white/[0.04] text-[11px] text-cream/80">
                          {deliv}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features & Deliverables */}
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-primary mb-2 block">
                Architecture Specs
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-cream mb-6">
                Conversion-Focused <br />
                <span className="text-gold-gradient">Storefront Engineering.</span>
              </h2>
              <div className="space-y-3">
                {service.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3 text-sm text-cream/90">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-dark-secondary/80 border border-primary/20 shadow-2xl space-y-4">
              <h3 className="font-display font-bold text-xl text-cream">
                E-Commerce Deliverables
              </h3>
              {service.deliverables.map((deliv, dIdx) => (
                <div key={dIdx} className="p-3.5 rounded-lg bg-dark border border-white/5 flex items-center justify-between text-xs">
                  <span className="text-cream font-medium">{deliv}</span>
                  <span className="text-[10px] font-mono text-primary uppercase">Standard</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner />
      </div>
    </>
  );
}
