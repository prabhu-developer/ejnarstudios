'use client';

import React, { useState } from 'react';
import CtaBanner from '@/components/sections/CtaBanner';
import AnimatedHeroBanner from '@/components/ui/AnimatedHeroBanner';
import { JOB_OPENINGS, JobOpening } from '@/lib/data/jobs';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock,
  GraduationCap,
  Mail,
  MapPin,
  Sparkles,
  Zap,
} from 'lucide-react';

export default function CareersClient() {
  const [expandedJobId, setExpandedJobId] = useState<string | null>(JOB_OPENINGS[0].id);

  const getJobMailtoUrl = (job: JobOpening) => {
    const subject = encodeURIComponent(`Application for ${job.title} - [Your Name]`);
    const body = encodeURIComponent(
      `Dear EJNARSTUDIOS Talent Team,\n\nI am writing to express my strong interest in the ${job.title} position (${job.department} • ${job.location}).\n\nCandidate Details:\n- Full Name: \n- Phone Number: \n- Portfolio / GitHub / Showreel URL: \n- Current Location: \n- Years of Experience: \n\nBrief Introduction & Why EJNARSTUDIOS:\n[Please share a few sentences about your proudest projects and design / engineering background]\n\nBest regards,\n[Your Name]`
    );
    return `mailto:hr@ejnarstudios.com?subject=${subject}&body=${body}`;
  };

  const perks = [
    {
      title: 'Creative Autonomy',
      desc: 'Freedom to experiment with cutting-edge 3D, WebGL, GSAP, and unconventional design concepts.',
      icon: Sparkles,
    },
    {
      title: 'High-Impact Ownership',
      desc: 'No corporate middle management layers. You own client-facing deliverables from day one.',
      icon: Zap,
    },
    {
      title: 'Learning & Equipment Grant',
      desc: 'Generous stipend for design books, courses, Figma plugins, and premium hardware rigs.',
      icon: GraduationCap,
    },
    {
      title: 'Predictable Work Rhythm',
      desc: 'Disciplined sprint pacing with strict boundaries against uncompensated agency crunch.',
      icon: Clock,
    },
  ];

  return (
    <div className="pt-28 bg-dark text-cream min-h-screen">
      {/* Animated Careers Hero */}
      <AnimatedHeroBanner
        badgeText="Deck p.27 • Talent & Careers"
        headlinePrefix="Join Our Creative"
        highlightText="Studio Roster."
        description="We are a small, elite squad of digital artisans in Chennai crafting extraordinary branding and software. We hire obsessives who care deeply about craft."
      />

      {/* Culture & Perks Grid */}
      <section className="py-20 px-6 lg:px-8 border-b border-white/5 bg-dark-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-primary mb-2 block">
              Studio Environment
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-cream">
              Why Craft Your Career at <span className="text-gold-gradient">EJNARSTUDIOS.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, pIdx) => {
              const Icon = perk.icon;
              return (
                <div
                  key={pIdx}
                  className="p-6 rounded-2xl bg-dark-secondary/70 border border-white/5 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-base text-cream mb-2">
                      {perk.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed">
                      {perk.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions Accordion */}
      <section id="openings" className="py-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-primary mb-2 block">
                Immediate Openings
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-cream">
                Explore Available <span className="text-gold-gradient">Roles.</span>
              </h2>
            </div>
            <span className="text-xs font-mono text-primary font-semibold">
              {JOB_OPENINGS.length} Active Positions in Chennai
            </span>
          </div>

          <div className="space-y-4">
            {JOB_OPENINGS.map((job) => {
              const isExpanded = expandedJobId === job.id;
              return (
                <div
                  key={job.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? 'bg-dark-secondary border-primary/40 shadow-xl'
                      : 'bg-dark-secondary/50 border-white/5 hover:border-white/20'
                  }`}
                >
                  <button
                    onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                    className="w-full p-6 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white/[0.02] cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-mono font-bold text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                          {job.department}
                        </span>
                        <span className="text-xs text-muted flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {job.location}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-xl text-cream">
                        {job.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-muted">{job.type} • {job.experience}</span>
                      <div className={`p-2 rounded-full bg-white/5 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-primary' : 'text-muted'}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-8 pt-2 border-t border-white/5 space-y-6">
                      <p className="text-xs sm:text-sm text-muted leading-relaxed">
                        {job.shortSummary}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                        <div>
                          <span className="text-xs font-semibold uppercase tracking-wider text-cream block mb-3">
                            Key Responsibilities:
                          </span>
                          <ul className="space-y-2 text-xs text-muted">
                            {job.responsibilities.map((resp, rIdx) => (
                              <li key={rIdx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <span className="text-xs font-semibold uppercase tracking-wider text-cream block mb-3">
                            Candidate Profile Requirements:
                          </span>
                          <ul className="space-y-2 text-xs text-muted">
                            {job.requirements.map((req, rIdx) => (
                              <li key={rIdx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/5">
                        <div className="flex items-center gap-2 text-xs text-muted">
                          <Mail className="w-4 h-4 text-primary" />
                          <span>Direct inquiries: <strong className="text-cream">hr@ejnarstudios.com</strong></span>
                        </div>

                        <a
                          href={getJobMailtoUrl(job)}
                          className="px-7 py-3 rounded-full bg-gold-gradient text-dark text-xs font-bold uppercase tracking-wider hover:brightness-110 shadow-md inline-flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95 transition-all"
                        >
                          <span>Apply For This Position</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
