import React from 'react';
import Image from 'next/image';
import { SERVICES_DATA } from '@/lib/data/services';
import { PORTFOLIO_DATA } from '@/lib/data/portfolio';
import ServiceSubpageHero from '@/components/ui/ServiceSubpageHero';
import CtaBanner from '@/components/sections/CtaBanner';
import { constructMetadata, generateServiceSchema } from '@/lib/seo';
import { Smartphone, CheckCircle2, Star, Download } from 'lucide-react';

const service = SERVICES_DATA.find((s) => s.slug === 'app')!;
const byaddiProject = PORTFOLIO_DATA.find((p) => p.slug === 'byaddi');

export const metadata = constructMetadata({
  title: 'Mobile App Development Company Chennai — iOS & Android Apps',
  description: 'Native and cross-platform React Native & Flutter mobile app development with real-time push notifications and App Store deployment. Case study: byaddi.',
  path: '/services/app',
});

export default function AppDevelopmentPage() {
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

        {/* Featured App Showcase: byaddi */}
        {byaddiProject && (
          <section className="py-24 px-6 lg:px-8 bg-[#151515] border-b border-white/5">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 relative h-96 rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">
                <Image
                  src={byaddiProject.image}
                  alt="byaddi Mobile App Case Study"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-1 text-primary mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary" />
                    ))}
                    <span className="text-xs font-bold text-cream ml-1.5">4.9 App Store Rating</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-cream">
                    {byaddiProject.title} — Mobile App
                  </h3>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-primary">
                  Featured Case Study
                </span>
                <h2 className="font-display font-black text-3xl sm:text-4xl text-cream">
                  Native Speed & <br />
                  <span className="text-gold-gradient">Fluid Mobile UX.</span>
                </h2>
                <p className="text-sm text-muted leading-relaxed font-body">
                  {byaddiProject.description}
                </p>

                <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-dark-secondary border border-white/5">
                  {byaddiProject.metrics?.map((m, idx) => (
                    <div key={idx} className="text-center">
                      <span className="font-display font-black text-lg text-primary">{m.value}</span>
                      <span className="block text-[10px] text-muted">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Features & Deliverables */}
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-primary mb-2 block">
                Mobile Engineering
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-cream mb-6">
                Vector Precision Across <br />
                <span className="text-gold-gradient">All Device Form Factors.</span>
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
                  Mobile App Deliverables
                </h3>
                {service.deliverables.map((deliv, dIdx) => (
                  <div key={dIdx} className="p-3 rounded-lg bg-dark border border-white/5 flex items-center justify-between text-xs">
                    <span className="text-cream font-medium">{deliv}</span>
                    <span className="text-[10px] font-mono text-primary uppercase">Standard</span>
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
