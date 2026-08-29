'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Sparkles,
  ChevronDown,
  ArrowRight,
  Briefcase,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
  Zap,
  HeartHandshake,
  Compass,
  GraduationCap,
} from 'lucide-react';
import { JOB_OPENINGS, JobOpening } from '@/lib/data/jobs';
import CtaBanner from '@/components/sections/CtaBanner';

const applicationSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  role: z.string().min(1, 'Please select a target role'),
  portfolioUrl: z.string().url('Please enter a valid URL (e.g., https://behance.net/you or github.com/you)'),
  message: z.string().min(10, 'Please tell us briefly about yourself'),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

export default function CareersPage() {
  const [expandedJobId, setExpandedJobId] = useState<string | null>(JOB_OPENINGS[0].id);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
  });

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true);
    // Simulate static form submission to client endpoint or fallback
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
  };

  const perks = [
    {
      title: 'Creative Autonomy',
      desc: 'Freedom to experiment with cutting-edge 3D, WebGL, GSAP, and unconventional design concepts.',
      icon: Sparkles,
    },
    {
      title: 'Learning & Growth',
      desc: 'Annual conference allowances, design book stipends, and continuous mentorship from leadership.',
      icon: GraduationCap,
    },
    {
      title: 'Flexible Environment',
      desc: 'Hybrid studio options, flexible daily hours, and focus on output over hours logged.',
      icon: Clock,
    },
    {
      title: 'High-Impact Ownership',
      desc: 'Work directly on flagship products for prominent enterprise clients with full attribution.',
      icon: Zap,
    },
  ];

  return (
    <div className="pt-28 bg-dark text-cream min-h-screen">
      {/* Careers Hero */}
      <section className="py-20 px-6 lg:px-8 relative overflow-hidden text-center border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-secondary border border-primary/25 text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join Our Creative Ranks</span>
          </div>

          <h1 className="font-banner font-black text-4xl sm:text-6xl md:text-7xl text-cream tracking-tight mb-6">
            Build Unprecedented <br />
            <span className="text-gold-gradient">Digital Experiences.</span>
          </h1>

          <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            As a small, impactful team, every contribution makes a visible difference. We value curiosity over convention and treat every project as a chance to build something extraordinary.
          </p>
        </div>
      </section>

      {/* Culture Perks Grid */}
      <section className="py-20 px-6 lg:px-8 bg-[#151515] border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-primary mb-2 block">
              Life at EJNARSTUDIOS
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-cream">
              Why You'll <span className="text-gold-gradient">Thrive Here.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, pIdx) => {
              const Icon = perk.icon;
              return (
                <div
                  key={pIdx}
                  className="p-6 rounded-xl bg-dark-secondary border border-white/5 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-cream mb-2">
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

      {/* Open Roles Accordion */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-primary mb-2 block">
              Current Openings
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-cream">
              Explore Available <span className="text-gold-gradient">Positions.</span>
            </h2>
            <p className="text-xs sm:text-sm text-muted mt-2">
              Select a position to view responsibilities, requirements, and apply directly.
            </p>
          </div>

          <div className="space-y-4">
            {JOB_OPENINGS.map((job) => {
              const isExpanded = expandedJobId === job.id;
              return (
                <div
                  key={job.id}
                  className="rounded-xl bg-dark-secondary border border-white/10 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                    className="w-full p-6 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white/[0.02]"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-mono font-bold text-primary px-2.5 py-0.5 rounded bg-primary/10">
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

                      <div className="pt-4 flex items-center justify-between border-t border-white/5">
                        <a
                          href="#application-form"
                          onClick={() => setValue('role', job.title)}
                          className="px-6 py-2.5 rounded bg-gold-gradient text-dark text-xs font-bold uppercase tracking-wider hover:brightness-110 shadow-md inline-flex items-center gap-2"
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

      {/* Application Form Section */}
      <section id="application-form" className="py-24 px-6 lg:px-8 bg-[#161616] border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-primary mb-2 block">
              Direct Application
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-cream">
              Submit Your <span className="text-gold-gradient">Candidate Profile.</span>
            </h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-dark-secondary/80 p-8 sm:p-10 rounded-2xl border border-primary/20 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-cream mb-2 uppercase tracking-wider">
                  Full Name *
                </label>
                <input
                  {...register('fullName')}
                  type="text"
                  placeholder="e.g. Anand Kumar"
                  className="w-full bg-dark border border-white/10 rounded px-4 py-3 text-xs text-cream focus:outline-none focus:border-primary transition-colors"
                />
                {errors.fullName && (
                  <p className="text-[11px] text-rose-400 mt-1">{errors.fullName.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-cream mb-2 uppercase tracking-wider">
                  Email Address *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  placeholder="anand@example.com"
                  className="w-full bg-dark border border-white/10 rounded px-4 py-3 text-xs text-cream focus:outline-none focus:border-primary transition-colors"
                />
                {errors.email && (
                  <p className="text-[11px] text-rose-400 mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-cream mb-2 uppercase tracking-wider">
                  Phone Number *
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full bg-dark border border-white/10 rounded px-4 py-3 text-xs text-cream focus:outline-none focus:border-primary transition-colors"
                />
                {errors.phone && (
                  <p className="text-[11px] text-rose-400 mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-cream mb-2 uppercase tracking-wider">
                  Target Role *
                </label>
                <select
                  {...register('role')}
                  className="w-full bg-dark border border-white/10 rounded px-4 py-3 text-xs text-cream focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">Select a role...</option>
                  {JOB_OPENINGS.map((j) => (
                    <option key={j.id} value={j.title}>
                      {j.title}
                    </option>
                  ))}
                  <option value="General Application">Other / General Talent Pool</option>
                </select>
                {errors.role && (
                  <p className="text-[11px] text-rose-400 mt-1">{errors.role.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-cream mb-2 uppercase tracking-wider">
                Portfolio / GitHub / Showreel Link *
              </label>
              <input
                {...register('portfolioUrl')}
                type="url"
                placeholder="https://behance.net/profile or https://github.com/profile"
                className="w-full bg-dark border border-white/10 rounded px-4 py-3 text-xs text-cream focus:outline-none focus:border-primary transition-colors"
              />
              {errors.portfolioUrl && (
                <p className="text-[11px] text-rose-400 mt-1">{errors.portfolioUrl.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-cream mb-2 uppercase tracking-wider">
                Brief Introduction & Past Impact *
              </label>
              <textarea
                {...register('message')}
                rows={4}
                placeholder="Tell us about the proudest project you built and why you want to join EJNARSTUDIOS..."
                className="w-full bg-dark border border-white/10 rounded px-4 py-3 text-xs text-cream focus:outline-none focus:border-primary transition-colors resize-none"
              />
              {errors.message && (
                <p className="text-[11px] text-rose-400 mt-1">{errors.message.message}</p>
              )}
            </div>

            {isSuccess && (
              <div className="p-4 rounded-lg bg-emerald-500/20 border border-emerald-500 text-emerald-400 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Application submitted successfully! Our talent lead will review your portfolio.</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded bg-gold-gradient text-dark font-display font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Submitting Profile...</span>
              ) : (
                <>
                  <span>Submit Application</span>
                  <Send className="w-4 h-4 text-dark" />
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
