import React from 'react';
import Image from 'next/image';
import { SERVICES_DATA } from '@/lib/data/services';
import ServiceSubpageHero from '@/components/ui/ServiceSubpageHero';
import CtaBanner from '@/components/sections/CtaBanner';
import { generateServiceSchema } from '@/lib/seo';
import { getPageMetadata } from '@/lib/metadata.config';
import { TrendingUp, BarChart2, Search, Share2, Target, CheckCircle2 } from 'lucide-react';

const service = SERVICES_DATA.find((s) => s.slug === 'seo-smo')!;

export const metadata = getPageMetadata('services.seoSmo');

export default function SeoSmoPage() {
  const schema = generateServiceSchema({
    name: service.name,
    description: service.description,
    slug: service.slug,
  });

  const funnelSteps = [
    { step: '01', title: 'Data Analytics', desc: 'Keyword intent modeling, competitor backlink crawl, and technical crawl analysis (deck p.16).' },
    { step: '02', title: 'SEO Architecture', desc: 'On-page schema tags, Core Web Vitals fixes, semantic keyword hierarchy, and indexing.' },
    { step: '03', title: 'SMO & Content Distribution', desc: 'Publishing optimized articles (4 to 13+ monthly) and syndicating positive social signals.' },
    { step: '04', title: 'Campaigns & Scaling', desc: 'High-authority directory submissions (100 to 250+ submissions) and national PR releases.' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="bg-dark text-cream">
        <ServiceSubpageHero service={service} />

        {/* 4-Step Digital Process Funnel (Deck p.16) */}
        <section className="py-24 px-6 lg:px-8 bg-[#151515] border-b border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-primary mb-2 block">
                Deck p.16 • Growth Methodology
              </span>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-cream">
                The 4-Stage <span className="text-gold-gradient">Digital Funnel.</span>
              </h2>
              <p className="text-sm text-muted mt-3">
                Our systematic progression engineered to elevate domain authority and capture high-intent search traffic.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {funnelSteps.map((fStep, idx) => (
                <div
                  key={fStep.step}
                  className="p-6 rounded-xl bg-dark-secondary border border-white/5 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="badge-circle text-xs">{fStep.step}</span>
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-cream mb-2">
                      {fStep.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed">
                      {fStep.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content & Backlink Volume Tiers */}
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-primary mb-2 block">
                Package Volume Tiers
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-cream mb-6">
                Consistent Backlinks & <br />
                <span className="text-gold-gradient">Editorial Authority.</span>
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

            <div className="rounded-2xl bg-dark-secondary/80 border border-primary/20 shadow-2xl overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={service.showcaseImage || service.heroImage}
                  alt={service.showcaseImageAlt || service.heroImageAlt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-secondary via-dark-secondary/40 to-transparent" />
              </div>
              <div className="p-8 space-y-4">
                <h3 className="font-display font-bold text-xl text-cream">
                  Organic Retainer Deliverables
                </h3>
                {service.deliverables.map((deliv, dIdx) => (
                  <div key={dIdx} className="p-3.5 px-5 rounded-full bg-dark border border-white/5 flex items-center justify-between text-xs">
                    <span className="text-cream font-medium">{deliv}</span>
                    <span className="text-[10px] font-mono text-primary uppercase font-bold">Monthly</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CtaBanner />
      </div>
    </>
  );
}
