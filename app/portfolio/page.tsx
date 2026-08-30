import CtaBanner from '@/components/sections/CtaBanner';
import PortfolioGrid from '@/components/sections/PortfolioGrid';
import { getPageMetadata } from '@/lib/metadata.config';
import {
  CheckCircle2,
  Cpu,
  Globe,
  Layers,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export const metadata = getPageMetadata('portfolio');

export default function PortfolioPage() {
  return (
    <div className="bg-dark text-cream pt-28 sm:pt-36">
      {/* Portfolio Hero Header */}
      <section className="relative px-6 lg:px-8 pb-16 sm:pb-24 border-b border-white/5 overflow-hidden">
        {/* Ambient background lighting */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[180px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Flagship Works & Case Studies</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-cream tracking-tight mb-6 max-w-5xl mx-auto leading-[1.1]">
            Architecting Digital Flagships &{' '}
            <span className="text-gold-gradient">High-Growth Systems.</span>
          </h1>

          <p className="text-muted text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-12">
            Every project represents a bespoke fusion of Awwwards-grade aesthetic precision, sub-second engineering, and measurable commercial transformation.
          </p>

          {/* Quick Metrics Ribbon */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-5 rounded-2xl bg-dark-secondary/60 border border-white/5">
              <span className="font-display font-black text-2xl sm:text-3xl text-primary block">
                50+
              </span>
              <span className="text-xs text-muted block mt-1">
                Digital Deployments
              </span>
            </div>
            <div className="p-5 rounded-2xl bg-dark-secondary/60 border border-white/5">
              <span className="font-display font-black text-2xl sm:text-3xl text-primary block">
                100%
              </span>
              <span className="text-xs text-muted block mt-1">
                IP & Code Handover
              </span>
            </div>
            <div className="p-5 rounded-2xl bg-dark-secondary/60 border border-white/5">
              <span className="font-display font-black text-2xl sm:text-3xl text-primary block">
                &lt;0.8s
              </span>
              <span className="text-xs text-muted block mt-1">
                LCP Load Times
              </span>
            </div>
            <div className="p-5 rounded-2xl bg-dark-secondary/60 border border-white/5">
              <span className="font-display font-black text-2xl sm:text-3xl text-primary block">
                10+
              </span>
              <span className="text-xs text-muted block mt-1">
                Industries Served
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Portfolio Case Studies Grid */}
      <PortfolioGrid />

      {/* Engineering & Design Methodology Spotlight */}
      <section className="py-24 px-6 lg:px-8 bg-[#151515] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-secondary border border-primary/20 text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>Execution Philosophy</span>
            </div>
            <h2
              className="font-banner font-black text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.08] text-cream mb-6 select-none"
            >
              How We Build <span className="text-gold-gradient">World-Class Products.</span>
            </h2>
            <p className="text-muted text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              We eliminate technical debt and design mediocrity through disciplined engineering sprints and rigorous QA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="p-8 rounded-3xl bg-dark-secondary/70 border border-white/5 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between shadow-lg">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary mb-6">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-bold text-primary uppercase tracking-widest block mb-2">
                  Stage 01 • Design Architecture
                </span>
                <h3 className="font-display font-bold text-xl text-cream mb-3">
                  Bespoke Visual Systems
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">
                  We don’t rely on generic templates. Every brand universe, typography scale, and layout grid is custom-tailored to communicate authority and prestige.
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/5 text-xs text-cream/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Figma High-Fidelity Tokens</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Micro-Interactions & Motion States</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>WCAG 2.1 AA Accessibility</span>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-8 rounded-3xl bg-dark-secondary/70 border border-white/5 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between shadow-lg">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary mb-6">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-bold text-primary uppercase tracking-widest block mb-2">
                  Stage 02 • High-Velocity Code
                </span>
                <h3 className="font-display font-bold text-xl text-cream mb-3">
                  Sub-Second Modern Stacks
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">
                  Powered by Next.js, React Native, Expo, Laravel, and Electron JS. Our codebases deliver sub-second TTFB, offline data sync, and effortless horizontal scalability.
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/5 text-xs text-cream/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>React Server Components (RSC)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Lenis Inertia Scrolling Physics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Real-Time Cloud & Local SQLite</span>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-8 rounded-3xl bg-dark-secondary/70 border border-white/5 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between shadow-lg">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-bold text-primary uppercase tracking-widest block mb-2">
                  Stage 03 • Commercial Readiness
                </span>
                <h3 className="font-display font-bold text-xl text-cream mb-3">
                  Turnkey Launch & IP Handover
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">
                  We provide full intellectual property transfer: clean Git repositories, automated CI/CD deployment pipelines, Swagger documentation, and 24/7 priority SLA support.
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/5 text-xs text-cream/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>100% Source Code Ownership</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Automated Backup & DDoS Shield</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Dedicated Senior Engineer SLAs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <CtaBanner />
    </div>
  );
}
