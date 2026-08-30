import React from 'react';
import Image from 'next/image';
import { SERVICES_DATA } from '@/lib/data/services';
import ServiceSubpageHero from '@/components/ui/ServiceSubpageHero';
import CtaBanner from '@/components/sections/CtaBanner';
import { constructMetadata, generateServiceSchema } from '@/lib/seo';
import { CheckCircle2 } from 'lucide-react';

const service = SERVICES_DATA.find((s) => s.slug === 'website')!;

export const metadata = constructMetadata({
  title: 'Website Development Company in Chennai — Next.js & Modern Web',
  description: 'Custom Next.js website engineering with sub-second page loads, Lenis inertia scrolling, GSAP micro-animations, and responsive mobile architecture.',
  path: '/services/website',
});

export default function WebsiteDevelopmentPage() {
  const schema = generateServiceSchema({
    name: service.name,
    description: service.description,
    slug: service.slug,
  });

  const devProcess = [
    { step: '01', title: 'Wireframes & Blueprint', desc: 'Low-fidelity layout architecture, sitemaps, and user journey funnels (deck p.8).' },
    { step: '02', title: 'UI/UX Visual Design', desc: 'High-fidelity Figma prototypes with custom dark aesthetic, gold typography, and micro-interaction states.' },
    { step: '03', title: 'Front-End Development', desc: 'Next.js 14+ App Router, Tailwind CSS, Lenis inertia scrolling, and GSAP ScrollTrigger.' },
    { step: '04', title: 'Back-End & API Integration', desc: 'Connecting endpoints, form submission webhooks, databases, and third-party services.' },
    { step: '05', title: 'QA, Security & Launch', desc: 'Cross-browser testing, Core Web Vitals optimization, and global CDN static deployment.' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="bg-dark text-cream">
        <ServiceSubpageHero service={service} />

        {/* 5-Step Process Timeline */}
        <section className="py-24 px-6 lg:px-8 bg-[#151515] border-b border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-primary mb-2 block">
                Development Lifecycle
              </span>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-cream">
                From Strategy to <span className="text-gold-gradient">Production Code.</span>
              </h2>
              <p className="text-sm text-muted mt-3">
                From low-fidelity wireframe blueprints to high-refresh front-end engineering and CDN deployment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {devProcess.map((st, idx) => (
                <div
                  key={st.step}
                  className="relative p-6 rounded-2xl bg-dark-secondary border border-white/5 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="badge-circle text-xs">{st.step}</span>
                      <span className="text-[10px] font-mono text-muted uppercase">Stage 0{idx + 1}</span>
                    </div>
                    <h3 className="font-display font-bold text-base text-cream mb-2">
                      {st.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Capabilities & Stack */}
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-primary mb-2 block">
                Technical Rigor
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-cream mb-6">
                Engineered for <br />
                <span className="text-gold-gradient">Sub-Second Velocity.</span>
              </h2>
              <p className="text-sm text-muted leading-relaxed mb-6">
                We believe websites must be as fast as they are beautiful. Sourced from deck p.9, we engineer static, dynamic, API-driven, and full-stack web applications that never leave users waiting.
              </p>

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
                  Next.js Modern Architecture
                </h3>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 px-4 rounded-2xl bg-dark border border-white/5">
                    <span className="text-primary font-bold block">SSG Architecture</span>
                    <span className="text-muted text-[10px]">Zero Server Latency</span>
                  </div>
                  <div className="p-3.5 px-4 rounded-2xl bg-dark border border-white/5">
                    <span className="text-primary font-bold block">Lenis + GSAP</span>
                    <span className="text-muted text-[10px]">Inertia Smooth Scroll</span>
                  </div>
                  <div className="p-3.5 px-4 rounded-2xl bg-dark border border-white/5">
                    <span className="text-primary font-bold block">100/100 Core Vitals</span>
                    <span className="text-muted text-[10px]">SEO & Speed Guarantee</span>
                  </div>
                  <div className="p-3.5 px-4 rounded-2xl bg-dark border border-white/5">
                    <span className="text-primary font-bold block">Global Edge CDN</span>
                    <span className="text-muted text-[10px]">Instant Global Delivery</span>
                  </div>
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
