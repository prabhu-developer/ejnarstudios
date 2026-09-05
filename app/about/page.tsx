import { BRAND } from '@/lib/constants';
import { AWARDS_DATA } from '@/lib/data/awards';
import { STRENGTHS_DATA } from '@/lib/data/strengths';
import { getPageMetadata } from '@/lib/metadata.config';
import AnimatedHeroBanner from '@/components/ui/AnimatedHeroBanner';
import {
  ArrowRight,
  Compass,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = getPageMetadata('about');

export default function AboutPage() {
  const cultureImages = [
    {
      src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      alt: 'Creative strategy session at studio',
      caption: 'Collaborative Design Sprints',
    },
    {
      src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
      alt: 'Front-end development and code reviews',
      caption: 'Engineering & Craft',
    },
    {
      src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
      alt: 'Client strategy discovery session',
      caption: 'Strategic Advisory',
    },
    {
      src: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
      alt: 'Cinematic ad-shoot and editing suite',
      caption: 'Content Production Suite',
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-dark text-cream">
      {/* Animated Hero Section */}
      <AnimatedHeroBanner
        badgeText="Creative Agency • Chennai, India"
        headlinePrefix="Crafting Attractive Experiences"
        highlightText="For The Modern Web."
        description="Digital agency based in Chennai, India that loves to craft attractive experiences for the web. We help brands make smarter decisions through design distinction and technical excellence."
      />

      {/* Mission & Narrative Section (deck p.24) */}
      <section className="py-20 px-6 lg:px-8 bg-dark-secondary/40 border-y border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Founder Callout */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-primary/30 p-8 bg-gradient-to-br from-dark-secondary to-dark shadow-2xl">
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center text-primary mb-6">
                <Compass className="w-8 h-8" />
              </div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-primary block mb-2">
                Leadership Note
              </span>
              <h3 className="font-display font-bold text-2xl text-cream mb-4">
                Founded by {BRAND.founder}
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6 font-body">
                "We set out to build an agency free from bureaucratic bloat — where every single client receives senior-level attention, uncompromised design standards, and turnkey commercial solutions."
              </p>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-primary font-mono">
                <span>ejnarstudios</span>
                <span>Est. {BRAND.foundedYear} • Chennai</span>
              </div>
            </div>
          </div>

          {/* Right: Mission Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-primary">
              Our Ethos & Culture
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-cream tracking-tight">
              Small, Impactful, and <span className="text-gold-gradient">Obsessed with Quality.</span>
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed font-body">
              As a small, impactful team, every contribution makes a visible difference. We value curiosity over convention, comfort-zone-breaking over industry standard, and treat every project as an opportunity to build something unprecedented.
            </p>
            <p className="text-sm sm:text-base text-muted leading-relaxed font-body">
              Whether architecting full-stack Next.js web applications, conceptualizing vector-precise logo systems, or orchestrating multi-channel paid marketing campaigns, our focus remains singular: tangible business impact for our clients.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-lg bg-dark border border-white/5">
                <span className="font-display font-black text-2xl text-primary">100%</span>
                <span className="block text-xs text-muted mt-1">Source Code & Asset Ownership</span>
              </div>
              <div className="p-4 rounded-lg bg-dark border border-white/5">
                <span className="font-display font-black text-2xl text-primary">0% Fluff</span>
                <span className="block text-xs text-muted mt-1">Data-Driven Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid (Deck p.21 framed as values) */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-primary mb-2 block">
              Guiding Principles
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-cream">
              The Values That <span className="text-gold-gradient">Define Us.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STRENGTHS_DATA.slice(0, 6).map((val) => (
              <div
                key={val.id}
                className="p-8 rounded-xl bg-dark-secondary/60 border border-white/5 hover:border-primary/40 transition-all duration-300"
              >
                <div className="badge-circle mb-6">
                  {val.badge}
                </div>
                <h3 className="font-display font-bold text-xl text-cream mb-2">
                  {val.title}
                </h3>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-3">
                  {val.highlight}
                </span>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones / Awards History (2018–2023 Vertical Timeline) */}
      <section className="py-24 px-6 lg:px-8 bg-[#161616] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-primary mb-2 block">
              Agency History
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-cream">
              Milestone <span className="text-gold-gradient">Roadmap.</span>
            </h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 md:before:-translate-x-px before:h-full before:w-[2px] before:bg-primary/20">
            {AWARDS_DATA.map((award, aIdx) => {
              const isEven = aIdx % 2 === 0;
              return (
                <div
                  key={aIdx}
                  className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''
                    } gap-8 pl-10 md:pl-0`}
                >
                  {/* Center Node */}
                  <div className="absolute left-2.5 md:left-1/2 -translate-x-1/2 top-4 w-3.5 h-3.5 rounded-full bg-primary border-4 border-dark z-10 shadow-[0_0_10px_rgba(214,180,136,0.8)]" />

                  {/* Card Content */}
                  <div className="w-full md:w-1/2 p-6 rounded-xl bg-dark-secondary border border-white/10 hover:border-primary/40 transition-colors shadow-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono font-bold text-primary text-sm">
                        {award.year}
                      </span>
                      <span className="text-[10px] uppercase font-mono text-muted">
                        {award.category}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-cream mb-1">
                      {award.title}
                    </h3>
                    <p className="text-xs font-semibold text-primary/80 mb-2">
                      {award.organization}
                    </p>
                    <p className="text-xs text-muted leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team & Studio Gallery */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-primary mb-2 block">
                Life At ejnarstudios
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-cream">
                Our Environment & <span className="text-gold-gradient">Culture.</span>
              </h2>
            </div>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline"
            >
              <span>Explore Open Roles in Careers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cultureImages.map((img, iIdx) => (
              <div
                key={iIdx}
                className="group relative h-72 rounded-xl overflow-hidden bg-dark-secondary border border-white/5"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="font-display font-semibold text-xs text-cream">
                    {img.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to Careers */}
      <section className="py-16 px-6 lg:px-8 text-center bg-dark-secondary/50 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-cream mb-4">
            Want to build extraordinary digital products with us?
          </h2>
          <p className="text-sm text-muted mb-8">
            We are always looking for passionate UI/UX designers, Next.js engineers, and growth marketers.
          </p>
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-bold text-xs uppercase tracking-wider bg-gold-gradient text-dark hover:brightness-110 shadow-lg hover:shadow-[0_0_25px_rgba(214,180,136,0.4)] transition-all transform hover:scale-105 active:scale-95"
          >
            <span>View Open Positions</span>
            <ArrowRight className="w-4 h-4 text-dark" />
          </Link>
        </div>
      </section>
    </div>
  );
}
