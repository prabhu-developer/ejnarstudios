'use client';

import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from '@/components/ui/SocialIcons';
import { BRAND } from '@/lib/constants';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Send
} from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(8, 'Please enter a valid phone number'),
  companyName: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  budgetRange: z.string().optional(),
  message: z.string().min(10, 'Please describe your project requirements (min 10 chars)'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactUsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      companyName: '',
      service: '',
      budgetRange: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    if (typeof window !== 'undefined') {
      try {
        const confetti = (await import('canvas-confetti')).default;
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#d6b488', '#e8d0a8', '#ffffff'],
        });
      } catch (err) {
        console.log('Form submission handled locally', err);
      }
    }
    // Submit directly via browser client to static-compatible endpoint or fallback
    const formEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
    if (formEndpoint) {
      try {
        await fetch(formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
      } catch (err) {
        console.log('Form submission handled locally', err);
      }
    } else {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
  };

  const servicesOptions = [
    'Logo Design & Visual Identity',
    'Full Corporate Branding & Stationery',
    'Website Development (Next.js / SSG)',
    'E-Commerce Development',
    'Mobile App (iOS & Android)',
    'SEO, SMO & Digital Marketing Retainer',
    'Video Shoot, DI Color Grading & Ad Production',
    'Digital Consulting & Tech Advisory',
  ];

  return (
    <div className="pt-28 pb-20 bg-dark text-cream min-h-screen">
      {/* Contact Header */}
      <section className="py-16 px-6 lg:px-8 text-center relative overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-secondary border border-primary/25 text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-6">
            <span>Deck p.27 • Connect With Our Studio</span>
          </div>

          <h1 className="font-banner font-black text-3xl sm:text-4xl md:text-5xl text-cream tracking-tight mb-6">
            Let’s Build Something <br />
            <span className="text-gold-gradient">Unprecedented Together.</span>
          </h1>

          <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Schedule an exploratory roadmap session or request a custom proposal for your branding, engineering, and digital growth needs.
          </p>
        </div>
      </section>

      {/* Split-Screen Contact Block */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-dark-secondary/80 border border-primary/20 shadow-2xl">
              <div className="mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-primary block mb-1">
                  Discovery Form
                </span>
                <h3 className="font-display font-bold text-2xl text-cream">
                  Tell Us About Your Project
                </h3>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-cream mb-2 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      {...register('fullName')}
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-dark border border-white/10 rounded px-4 py-3 text-xs text-cream focus:outline-none focus:border-primary transition-colors"
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-rose-400 mt-1">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-cream mb-2 uppercase tracking-wider">
                      Corporate Email *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="rahul@company.com"
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
                      placeholder="+91 90032 06449"
                      className="w-full bg-dark border border-white/10 rounded px-4 py-3 text-xs text-cream focus:outline-none focus:border-primary transition-colors"
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-rose-400 mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-cream mb-2 uppercase tracking-wider">
                      Service of Interest *
                    </label>
                    <select
                      {...register('service')}
                      className="w-full bg-dark border border-white/10 rounded px-4 py-3 text-xs text-cream focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="">Select a service...</option>
                      {servicesOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-[11px] text-rose-400 mt-1">{errors.service.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-cream mb-2 uppercase tracking-wider">
                    Target Project Budget (Optional)
                  </label>
                  <select
                    {...register('budgetRange')}
                    className="w-full bg-dark border border-white/10 rounded px-4 py-3 text-xs text-cream focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Select an investment range...</option>
                    <option value="₹50,000 – ₹1,50,000">₹50,000 – ₹1,50,000 (Starter / Design Plan)</option>
                    <option value="₹1,50,000 – ₹4,00,000">₹1,50,000 – ₹4,00,000 (Development / Storefront)</option>
                    <option value="₹4,00,000 – ₹10,00,000+">₹4,00,000 – ₹10,00,000+ (Full Suite / Enterprise)</option>
                    <option value="Monthly Retainer">Monthly Growth Retainer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-cream mb-2 uppercase tracking-wider">
                    Project Requirements & Timeline *
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    placeholder="Briefly describe your objectives, target launch date, and key deliverables..."
                    className="w-full bg-dark border border-white/10 rounded px-4 py-3 text-xs text-cream focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.message.message}</p>
                  )}
                </div>

                {isSuccess && (
                  <div className="p-4 rounded-lg bg-emerald-500/20 border border-emerald-500 text-emerald-400 text-xs font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Thank you! Your project inquiry has been received. Our leads will respond within 24 hours.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded bg-gold-gradient text-dark font-display font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Dispatching Inquiry...</span>
                  ) : (
                    <>
                      <span>Send Project Inquiry</span>
                      <Send className="w-4 h-4 text-dark" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Address, Phone, Dark Map Embed (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Details Card */}
            <div className="p-8 rounded-2xl bg-dark-secondary/80 border border-white/10 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-primary block">
                Headquarters
              </span>

              <div className="space-y-4 text-xs text-muted">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-cream block font-display text-sm mb-0.5">Physical Studio Address</strong>
                    <span>{BRAND.address.street}, {BRAND.address.area}, Chennai - {BRAND.address.postalCode}, {BRAND.address.country}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-cream block font-display text-sm mb-0.5">Direct Telephony</strong>
                    <p>Mobile: <a href={`tel:${BRAND.contact.mobileRaw}`} className="text-primary hover:underline">{BRAND.contact.mobile}</a></p>
                    <p>Hotline: <a href={`tel:${BRAND.contact.hotlineRaw}`} className="text-primary hover:underline">{BRAND.contact.hotline}</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-cream block font-display text-sm mb-0.5">Electronic Inquiries</strong>
                    <a href={`mailto:${BRAND.contact.email}`} className="text-primary hover:underline">{BRAND.contact.email}</a>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-[11px] font-semibold text-cream uppercase tracking-wider block mb-3">
                  Follow Studio Updates
                </span>
                <div className="flex items-center gap-3">
                  {[
                    { icon: InstagramIcon, href: BRAND.socials.instagram, label: 'Instagram' },
                    { icon: FacebookIcon, href: BRAND.socials.facebook, label: 'Facebook' },
                    { icon: TwitterIcon, href: BRAND.socials.twitter, label: 'Twitter' },
                    { icon: LinkedinIcon, href: BRAND.socials.linkedin, label: 'LinkedIn' },
                  ].map((s) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-dark hover:border-primary transition-all duration-300"
                        aria-label={s.label}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Dark Styled Google Maps Embed (Greeta Towers, Perungudi, Chennai) */}
            <div className="rounded-2xl overflow-hidden border border-primary/20 shadow-2xl relative h-64 bg-dark-secondary">
              <iframe
                title="EJNARSTUDIOS Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8967909388377!2d80.24430587572702!3d12.978436987337373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d629a8a3f81%3A0xbce5bf769502804b!2sGreeta%20Towers!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
