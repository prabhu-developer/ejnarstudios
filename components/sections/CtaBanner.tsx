'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Sparkles, PhoneCall } from 'lucide-react';
import { BRAND } from '@/lib/constants';
import { motion } from 'framer-motion';

const ctaVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(3px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function CtaBanner() {
  return (
    <section className="py-24 px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-dark to-[#161616]">
      {/* Background glow and gold ambient mesh */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent pointer-events-none"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="rounded-3xl p-10 sm:p-16 bg-gradient-to-br from-dark-secondary via-[#222] to-dark border border-primary/35 shadow-[0_25px_70px_rgba(0,0,0,0.85)] text-center relative overflow-hidden group"
        >
          {/* Animated Top gold hairline shimmer */}
          <motion.div
            animate={{
              backgroundPosition: ['-200% 0', '200% 0'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="w-full h-[2px] bg-[linear-gradient(90deg,transparent_0%,rgba(214,180,136,0.8)_50%,transparent_100%)] bg-[length:200%_100%] absolute top-0 left-0 right-0"
          />

          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-primary animate-spin-slow" />
            <span>Ready for the next level?</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="font-banner font-black text-3xl sm:text-5xl md:text-6xl text-cream tracking-tight mb-6"
          >
            Ready to Build <br />
            <span className="text-gold-gradient inline-block">
              Your Digital Flagship?
            </span>
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-muted text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-10 font-body"
          >
            Let’s craft a brand identity, web experience, and marketing engine that outpaces your competition. Schedule an exploratory discovery session with our senior leadership today.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/contact-us"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-display font-bold text-sm tracking-wider uppercase bg-gold-gradient text-dark hover:brightness-110 shadow-[0_0_25px_rgba(214,180,136,0.4)] hover:shadow-[0_0_40px_rgba(214,180,136,0.65)] transition-all duration-300 group"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 text-dark transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto"
            >
              <a
                href={`tel:${BRAND.contact.mobileRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-display font-bold text-sm tracking-wider uppercase bg-dark-tertiary border border-primary/30 text-cream hover:text-primary hover:border-primary transition-all duration-300 shadow-md"
              >
                <PhoneCall className="w-4 h-4 text-primary" />
                <span>Call +91-73581 00831</span>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
