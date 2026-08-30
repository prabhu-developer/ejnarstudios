'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface AnimatedHeroBannerProps {
  badgeText: string;
  headlinePrefix?: string;
  highlightText?: string;
  headlineSuffix?: string;
  description: string;
  actions?: React.ReactNode;
  children?: React.ReactNode;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22, filter: 'blur(3px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function AnimatedHeroBanner({
  badgeText,
  headlinePrefix,
  highlightText,
  headlineSuffix,
  description,
  actions,
  children,
}: AnimatedHeroBannerProps) {
  return (
    <section className="py-20 px-6 lg:px-8 relative overflow-hidden text-center border-b border-white/5 bg-dark">
      {/* Background Animated Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/10 rounded-full blur-[160px] pointer-events-none"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto relative z-10 flex flex-col items-center"
      >
        {/* Animated Badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dark-secondary/90 backdrop-blur-md border border-primary/25 text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-6 shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
          <span>{badgeText}</span>
        </motion.div>

        {/* Animated Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-banner font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cream tracking-tight mb-6 leading-[1.08]"
        >
          {headlinePrefix && <span>{headlinePrefix} </span>}
          {highlightText && (
            <span className="text-gold-gradient inline-block">
              {highlightText}
            </span>
          )}
          {headlineSuffix && <span> {headlineSuffix}</span>}
        </motion.h1>

        {/* Animated Description */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed mb-8 font-body"
        >
          {description}
        </motion.p>

        {/* Animated Actions if provided */}
        {actions && (
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3.5"
          >
            {actions}
          </motion.div>
        )}

        {children && (
          <motion.div variants={itemVariants} className="w-full mt-8">
            {children}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
