import React from 'react';
import Image from 'next/image';
import { SERVICES_DATA } from '@/lib/data/services';
import ServiceSubpageHero from '@/components/ui/ServiceSubpageHero';
import CtaBanner from '@/components/sections/CtaBanner';
import { constructMetadata, generateServiceSchema } from '@/lib/seo';
import { Video, Film, Camera, Sparkles, CheckCircle2, Clapperboard } from 'lucide-react';

const service = SERVICES_DATA.find((s) => s.slug === 'video-design')!;

export const metadata = constructMetadata({
  title: 'Cinematic Video Production, Ad-Shoots & DI Color Grading Chennai',
  description: 'Full commercial production, 4K multi-cam filming, drone aerial cinematography, DaVinci Resolve DI color grading, corporate films, and viral social reels.',
  path: '/services/video-design',
});

export default function VideoDesignPage() {
  const schema = generateServiceSchema({
    name: service.name,
    description: service.description,
    slug: service.slug,
  });

  const productionPipeline = [
    { step: '01', title: 'Concept & Scripting', desc: 'Creative treatment, script writing, shot lists, and moodboards.' },
    { step: '02', title: 'Ad-Shoot & Production', desc: 'On-set cinematography with 4K cinema rigs, studio lighting, and licensed drone aerial passes.' },
    { step: '03', title: 'Full DI Color Grading', desc: 'Mastering color tone, grain, and high dynamic range curves in DaVinci Resolve.' },
    { step: '04', title: 'Sound & VFX Editing', desc: 'Bespoke foley, voiceover synchronization, 2D/3D title motion graphics, and master render.' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="bg-dark text-cream">
        <ServiceSubpageHero service={service} />

        {/* Shoot to Screen Production Pipeline (Deck p.3) */}
        <section className="py-24 px-6 lg:px-8 bg-[#151515] border-b border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-primary mb-2 block">
                Deck p.3 • Shoot to Screen
              </span>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-cream">
                From Studio Shoot to <span className="text-gold-gradient">Master DI Screen.</span>
              </h2>
              <p className="text-sm text-muted mt-3">
                Full-service in-house production crew handling equipment, talent direction, lighting, aerial cinematography, and high-fidelity post-production.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {productionPipeline.map((pipe, pIdx) => (
                <div
                  key={pipe.step}
                  className="p-6 rounded-xl bg-dark-secondary border border-white/5 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="badge-circle text-xs">{pipe.step}</span>
                      <Clapperboard className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-cream mb-2">
                      {pipe.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed">
                      {pipe.desc}
                    </p>
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
                High-Bitrate Standards
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-cream mb-6">
                Cinema-Grade Resolution & <br />
                <span className="text-gold-gradient">Multi-Aspect Ratio Crops.</span>
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
                  Production Master Deliverables
                </h3>
                {service.deliverables.map((deliv, dIdx) => (
                  <div key={dIdx} className="p-3 rounded-lg bg-dark border border-white/5 flex items-center justify-between text-xs">
                    <span className="text-cream font-medium">{deliv}</span>
                    <span className="text-[10px] font-mono text-primary uppercase">ProRes / 4K</span>
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
