import React from 'react';
import { SERVICES_DATA } from '@/lib/data/services';
import ServiceSubpageHero from '@/components/ui/ServiceSubpageHero';
import CtaBanner from '@/components/sections/CtaBanner';
import { constructMetadata, generateServiceSchema } from '@/lib/seo';
import { Palette, CheckCircle2 } from 'lucide-react';

const service = SERVICES_DATA.find((s) => s.slug === 'graphic-design')!;

export const metadata = constructMetadata({
  title: 'Graphic Design & Creative Marketing Collateral Chennai',
  description: 'High-impact marketing posters, social media carousel kits, digital ad banners, print brochures, and event exhibition collateral.',
  path: '/services/graphic-design',
});

export default function GraphicDesignPage() {
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

        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-primary mb-2 block">
                Visual Impact
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-cream mb-6">
                Graphics Built To <br />
                <span className="text-gold-gradient">Stop The Scroll.</span>
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
                Graphic Design Inclusions
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
