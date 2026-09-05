'use client';

import Logo from '@/components/ui/Logo';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon
} from '@/components/ui/SocialIcons';
import { BRAND, NAV_LINKS } from '@/lib/constants';
import { SERVICES_DATA } from '@/lib/data/services';
import {
  ArrowRight,
  Check,
  Mail,
  MapPin,
  Phone
} from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <footer className="relative bg-[#141414] text-cream border-t border-primary/15 overflow-hidden pt-20 pb-12">
      {/* Huge Ghost-Text Wordmark Backdrop */}
      <div className="absolute top-14 left-1/2 opacity-[0.05] -translate-x-1/2 select-none pointer-events-none  text-center w-full whitespace-nowrap overflow-hidden">
        <span className="font-banner font-extrabold text-[8vw] tracking-widest text-white uppercase stroke-text">
          Ejnar Studios
        </span>
      </div>

      {/* Top ambient gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Socials (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Logo size="lg" />
            <p className="text-sm text-muted leading-relaxed pr-6">
              A premier creative branding, web/app engineering, and digital marketing studio in Chennai, India. We architect high-converting digital products for forward-thinking brands worldwide.
            </p>

            {/* Social Icons Row */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: InstagramIcon, href: BRAND.socials.instagram, label: 'Instagram' },
                { icon: FacebookIcon, href: BRAND.socials.facebook, label: 'Facebook' },
                { icon: LinkedinIcon, href: BRAND.socials.linkedin, label: 'LinkedIn' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-dark hover:border-primary transition-all duration-300 transform hover:scale-110"
                    aria-label={item.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Sitemap Navigation (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Sitemap
            </h4>
            <ul className="space-y-2.5 text-sm text-muted">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                  <span>Packages & Pricing</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Key Services (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Expertise
            </h4>
            <ul className="space-y-2 text-xs text-muted">
              {SERVICES_DATA.slice(0, 7).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-primary transition-colors block py-0.5 line-clamp-1"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-primary font-semibold hover:underline inline-flex items-center gap-1 mt-1 text-xs"
                >
                  <span>View All 14 Services</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter (3 Cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Ejnar Studios  & Contact
            </h4>
            <div className="space-y-3 text-xs text-muted">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Perungudi, India | Buckinghamshire,{' '}
                  <a
                    href="https://zephyr-solutions.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream hover:text-primary underline decoration-primary/40 underline-offset-2 transition-colors font-medium"
                  >
                    UK
                  </a>{' '}
                  | Texas,{' '}
                  <a
                    href="https://qshae.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream hover:text-primary underline decoration-primary/40 underline-offset-2 transition-colors font-medium"
                  >
                    USA
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <div className="flex flex-col">
                  <a href={`tel:${BRAND.contact.mobileRaw}`} className="hover:text-primary transition-colors">
                    {BRAND.contact.mobile}
                  </a>
                  <a href={`tel:${BRAND.contact.hotlineRaw}`} className="hover:text-primary transition-colors">
                    {BRAND.contact.hotline}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href={`mailto:${BRAND.contact.email}`} className="hover:text-primary transition-colors">
                  {BRAND.contact.email}
                </a>
              </div>
            </div>

            {/* Newsletter Input */}
            <div className="pt-2">
              <span className="block text-[11px] font-semibold text-cream/90 uppercase tracking-wider mb-2">
                Join Our Agency Dispatch
              </span>
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your corporate email"
                  className="w-full bg-dark-secondary border border-primary/25 rounded-full px-4 py-2.5 text-xs text-cream placeholder-muted/60 focus:outline-none focus:border-primary transition-colors pr-12 shadow-inner"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary text-dark hover:brightness-110 shadow-sm transition-all"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
              {isSubscribed && (
                <p className="text-[11px] text-primary flex items-center gap-1 mt-1.5">
                  <Check className="w-3 h-3" />
                  <span>Thank you for subscribing!</span>
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal Policies & Accreditations */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted border-t border-white/5">
          <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>

          <div className="flex items-center gap-4 sm:gap-6 text-[11px] sm:text-xs">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <Link href="/terms-and-conditions" className="hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>
              Perungudi, India | Buckinghamshire,{' '}
              <a
                href="https://zephyr-solutions.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary underline decoration-primary/40 underline-offset-2 transition-colors font-medium"
              >
                UK
              </a>{' '}
              | Texas,{' '}
              <a
                href="https://qshae.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary underline decoration-primary/40 underline-offset-2 transition-colors font-medium"
              >
                USA
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
