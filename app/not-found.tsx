'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import {
  Home,
  ArrowLeft,
  Compass,
  Search,
  Sparkles,
  Layers,
  ShoppingBag,
  Mail,
  Zap,
  RefreshCw,
} from 'lucide-react';
import { BRAND } from '@/lib/constants';

export default function NotFound() {
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();
  const [funFactIndex, setFunFactIndex] = useState(0);

  const funFacts = [
    'Fun Fact: Even our sub-second Next.js Turbopack engine cannot render a page that doesn’t exist.',
    'ejnarstudios Theory: A developer probably refactored this route while enjoying Chennai filter coffee.',
    'Design Verdict: This page scored a 100% in minimalism by having zero DOM elements.',
    'Dev Status: 404 Error • 0 Bytes transferred • 100% Mystery.',
  ];

  const cycleFact = () => {
    setFunFactIndex((prev) => (prev + 1) % funFacts.length);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen bg-dark text-cream relative flex flex-col items-center justify-center overflow-hidden px-6 py-28 select-none">
      
      {/* 1. Atmospheric Ambient Glow Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-Center Gold Radial Spotlight */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-primary/10 rounded-full blur-[160px]" />
        
        {/* Subtle Cyber Grid */}
        <div
          className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#d6b488_1px,transparent_1px)] [background-size:32px_32px]"
          aria-hidden="true"
        />

        {/* Orbiting Golden Light Dots */}
        {!shouldReduceMotion && (
          <>
            <motion.div
              animate={{
                x: [-20, 20, -20],
                y: [-30, 30, -30],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/3 left-1/4 w-3 h-3 rounded-full bg-primary/40 blur-sm"
            />
            <motion.div
              animate={{
                x: [30, -30, 30],
                y: [20, -20, 20],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-1/3 right-1/4 w-4 h-4 rounded-full bg-primary/30 blur-sm"
            />
          </>
        )}
      </div>

      {/* 2. Main Content Card */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-3xl w-full mx-auto text-center flex flex-col items-center"
      >
        {/* Animated Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono font-bold uppercase tracking-[0.25em] mb-6 shadow-sm"
        >
          <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
          <span>Coordinates Not Found • Error 404</span>
        </motion.div>

        {/* Giant Hero 404 Interactive Visual */}
        <motion.div
          variants={itemVariants}
          className="relative mb-6 select-none"
        >
          {/* Background Blurred Big Glow */}
          <span className="font-banner font-black text-8xl sm:text-9xl md:text-[13rem] leading-none text-primary/10 absolute inset-0 blur-2xl flex items-center justify-center">
            404
          </span>

          {/* Foreground Stylized Typographic 404 */}
          <h1 className="font-banner font-black text-8xl sm:text-9xl md:text-[13rem] leading-none tracking-tighter text-gold-gradient relative drop-shadow-[0_10px_35px_rgba(214,180,136,0.3)]">
            404
          </h1>

          {/* Floating Floating Micro Tag */}
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [-4, 4, -4], rotate: [-2, 2, -2] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-dark-secondary/90 border border-primary/40 backdrop-blur-md shadow-xl text-[10px] sm:text-xs font-mono text-cream flex items-center gap-1.5 whitespace-nowrap"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>git checkout -b lost-page</span>
          </motion.div>
        </motion.div>

        {/* Main Headline */}
        <motion.h2
          variants={itemVariants}
          className="font-display font-black text-2xl sm:text-4xl md:text-5xl text-cream tracking-tight mb-4 mt-2"
        >
          Whoops! You Stepped Into the <br className="hidden sm:inline" />
          <span className="text-gold-gradient">Digital Multiverse.</span>
        </motion.h2>

        {/* Humorous Supporting Description */}
        <motion.p
          variants={itemVariants}
          className="text-muted text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-6 font-body"
        >
          Our design squad searched every Figma layer, our engineers grepped through 100,000+ lines of Next.js code, and our founder even checked behind the studio coffee machine. <strong className="text-cream">This URL does not exist or has been relocated.</strong>
        </motion.p>

        {/* Interactive Fun Fact Generator Box */}
        <motion.div
          variants={itemVariants}
          onClick={cycleFact}
          className="mb-8 p-3.5 sm:p-4 rounded-xl bg-dark-secondary/70 border border-white/10 hover:border-primary/40 transition-all cursor-pointer group flex items-center justify-between gap-3 max-w-lg w-full text-left shadow-lg"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && cycleFact()}
          aria-label="Click to cycle humorous ejnarstudios facts"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Zap className="w-4 h-4" />
            </div>
            <p className="text-xs text-cream/90 font-mono leading-tight">
              {funFacts[funFactIndex]}
            </p>
          </div>
          <RefreshCw className="w-3.5 h-3.5 text-muted group-hover:text-primary group-hover:rotate-180 transition-all flex-shrink-0" />
        </motion.div>

        {/* Primary and Secondary Navigation Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12"
        >
          {/* Primary: Return Home */}
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gold-gradient text-dark font-display font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg hover:shadow-[0_0_30px_rgba(214,180,136,0.4)] transition-all transform active:scale-95 hover:scale-105 inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Return to Mission Control</span>
          </Link>

          {/* Secondary: Go Back */}
          <button
            onClick={() => router.back()}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-dark-secondary border border-white/10 hover:border-primary/40 text-cream text-xs font-semibold uppercase tracking-wider hover:bg-white/5 transition-all transform active:scale-95 inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-primary" />
            <span>Step Back One Page</span>
          </button>
        </motion.div>

        {/* Quick Portal Navigation Links */}
        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-white/10 w-full"
        >
          <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-muted block mb-4">
            Or Teleport to Popular ejnarstudios Coordinates:
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <Link
              href="/services"
              className="p-3 rounded-xl bg-dark-secondary/40 border border-white/5 hover:border-primary/40 hover:bg-white/5 transition-all text-center flex flex-col items-center gap-1.5 text-cream/90 hover:text-primary group"
            >
              <Layers className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Our 14 Services</span>
            </Link>

            <Link
              href="/portfolio"
              className="p-3 rounded-xl bg-dark-secondary/40 border border-white/5 hover:border-primary/40 hover:bg-white/5 transition-all text-center flex flex-col items-center gap-1.5 text-cream/90 hover:text-primary group"
            >
              <Sparkles className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Case Studies</span>
            </Link>

            <Link
              href="/marketplace"
              className="p-3 rounded-xl bg-dark-secondary/40 border border-white/5 hover:border-primary/40 hover:bg-white/5 transition-all text-center flex flex-col items-center gap-1.5 text-cream/90 hover:text-primary group"
            >
              <ShoppingBag className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Marketplace Kits</span>
            </Link>

            <Link
              href="/contact-us"
              className="p-3 rounded-xl bg-dark-secondary/40 border border-white/5 hover:border-primary/40 hover:bg-white/5 transition-all text-center flex flex-col items-center gap-1.5 text-cream/90 hover:text-primary group"
            >
              <Mail className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Start a Project</span>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
