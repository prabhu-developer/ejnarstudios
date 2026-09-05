'use client';

import { BRAND } from '@/lib/constants';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Home, Layers, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

export default function ThankYouClient() {
  useEffect(() => {
    // Fire GA4 conversion event
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as Window & { gtag: (...args: unknown[]) => void }).gtag('event', 'form_submission_success', {
        event_category: 'Lead Generation',
        event_label: 'Contact Form',
        value: 1,
      });
    }

    // Mark as submitted so auto-popup won't show
    try {
      localStorage.setItem('ejnar_form_submitted', 'true');
    } catch {
      // Ignore
    }
  }, []);

  return (
    <div className="min-h-screen bg-dark text-cream flex flex-col items-center justify-center px-6 py-28 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#d6b488_1px,transparent_1px)] [background-size:28px_28px]"
          aria-hidden="true"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-2xl w-full mx-auto text-center flex flex-col items-center"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5, type: 'spring', stiffness: 200 }}
          className="w-20 h-20 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(16,185,129,0.25)]"
        >
          <CheckCircle2 className="w-10 h-10 text-emerald-400" />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono font-bold uppercase tracking-[0.25em] mb-6"
        >
          <span>Inquiry Received</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="font-banner font-black text-4xl sm:text-5xl md:text-6xl text-cream tracking-tight mb-5"
        >
          Thank You for{' '}
          <span className="text-gold-gradient">Reaching Out.</span>
        </motion.h1>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-muted text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-10 font-body"
        >
          Your inquiry has been securely delivered to our studio team. A senior {BRAND.name} account director will review your brief and reach out within <strong className="text-cream">24 business hours</strong> to schedule your complimentary strategy session.
        </motion.p>

        {/* Contact Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="w-full max-w-sm grid grid-cols-2 gap-3 mb-10"
        >
          <a
            href={`tel:${BRAND.contact.mobileRaw}`}
            className="flex flex-col items-center gap-1.5 p-4 rounded-2xl bg-dark-secondary border border-white/5 hover:border-primary/40 transition-all text-xs text-muted hover:text-cream"
          >
            <Phone className="w-4 h-4 text-primary" />
            <span className="font-semibold">Call Studio</span>
            <span className="text-[10px]">{BRAND.contact.mobile}</span>
          </a>
          <a
            href={`mailto:${BRAND.contact.email}`}
            className="flex flex-col items-center gap-1.5 p-4 rounded-2xl bg-dark-secondary border border-white/5 hover:border-primary/40 transition-all text-xs text-muted hover:text-cream"
          >
            <Mail className="w-4 h-4 text-primary" />
            <span className="font-semibold">Email Studio</span>
            <span className="text-[10px]">{BRAND.contact.email}</span>
          </a>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold-gradient text-dark font-display font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg transition-all transform hover:scale-105 active:scale-95"
          >
            <Home className="w-4 h-4" />
            <span>Return to Studio</span>
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-dark-secondary border border-white/10 hover:border-primary/40 text-cream text-xs font-semibold uppercase tracking-wider transition-all transform active:scale-95"
          >
            <Layers className="w-4 h-4 text-primary" />
            <span>Explore Our Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
