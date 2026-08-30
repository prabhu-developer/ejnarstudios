import React from 'react';
import Image from 'next/image';
import { SERVICES_DATA } from '@/lib/data/services';
import ServiceSubpageHero from '@/components/ui/ServiceSubpageHero';
import CtaBanner from '@/components/sections/CtaBanner';
import { constructMetadata, generateServiceSchema } from '@/lib/seo';
import { Users, CheckCircle2 } from 'lucide-react';

const service = SERVICES_DATA.find((s) => s.slug === 'influencer-marketing')!;

export const metadata = constructMetadata({
  title: 'Influencer Marketing Agency Chennai — Creator Campaigns & Collaborations',
  description: 'Targeted micro and nano influencer campaigns, creator network sourcing, gifting, deliverable tracking, and trackable affiliate funnels.',
  path: '/services/influencer-marketing',
});

export default function InfluencerMarketingPage() {
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
                Creator Alliances
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-cream mb-6">
                Authentic Endorsements That <br />
                <span className="text-gold-gradient">Spark Virality & Trust.</span>
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
                  Influencer Campaign Deliverables
                </h3>
                {service.deliverables.map((deliv, dIdx) => (
                  <div key={dIdx} className="p-3.5 px-5 rounded-full bg-dark border border-white/5 flex items-center justify-between text-xs">
                    <span className="text-cream font-medium">{deliv}</span>
                    <span className="text-[10px] font-mono text-primary uppercase font-bold">Deliverable</span>
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
