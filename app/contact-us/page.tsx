'use client';

import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from '@/components/ui/SocialIcons';
import AnimatedHeroBanner from '@/components/ui/AnimatedHeroBanner';
import UnifiedContactForm from '@/components/forms/UnifiedContactForm';
import { BRAND } from '@/lib/constants';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactUsPage() {
  return (
    <div className="pt-28 pb-20 bg-dark text-cream min-h-screen">
      {/* Animated Contact Header */}
      <AnimatedHeroBanner
        badgeText="Connect With Our Studio"
        headlinePrefix="Let’s Build Something"
        highlightText="Unprecedented Together."
        description="Schedule an exploratory roadmap session or request a custom proposal for your branding, engineering, and digital growth needs."
      />

      {/* Split-Screen Contact Block */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Reusable Unified Form (7 Cols) */}
          <div className="lg:col-span-7">
            <UnifiedContactForm
              title="Tell Us About Your Project"
              subtitle="Discovery Form"
              submitButtonText="Send Project Inquiry"
              defaultMessage="I would like to discuss our project objectives, target launch date, and key deliverables with EJNARSTUDIOS."
            />
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
