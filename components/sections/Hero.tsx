'use client';

import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 lg:px-8 overflow-hidden bg-dark">
      {/* Background Radial Glow & Floating Geometry */}
      <div className="absolute inset-0 gold-radial-glow pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary/8 rounded-full blur-[140px] pointer-events-none" />

      {/* Floating 3D-Style Antler Logo Icon behind text (Parallax driven) */}
      <motion.div
        style={{
          x: mouseOffset.x * 1.5,
          y: mouseOffset.y * 1.5,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[460px] md:w-[600px] h-[320px] sm:h-[460px] md:h-[600px] opacity-25 pointer-events-none select-none z-0 flex items-center justify-center"
      >
        <div className="relative w-full h-full">
          <Image
            src="/logo-icon.png"
            alt="EJNARSTUDIOS Antler Mark"
            fill
            priority
            className="object-contain filter drop-shadow-[0_0_50px_rgba(214,180,136,0.3)]"
          />
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-secondary border border-primary/30 text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span>Award-Winning Creative & Digital Agency • Chennai</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-banner font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] text-cream mb-6"
        >
          We help brands make{' '}
          <span className="text-gold-gradient inline-block">
            smarter decisions.
          </span>
        </motion.h1>

        {/* Sub-Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-muted max-w-3xl font-body leading-relaxed mb-10"
        >
          A creative digital agency in Chennai crafting bespoke branding, high-performance websites, mobile apps, and algorithmic marketing campaigns that command attention.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/contact-us"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded font-display font-bold text-sm tracking-wider uppercase bg-gold-gradient text-dark hover:brightness-110 shadow-[0_0_25px_rgba(214,180,136,0.35)] hover:shadow-[0_0_35px_rgba(214,180,136,0.55)] transition-all duration-300 transform active:scale-95"
          >
            <span>Start Your Project</span>
            <ArrowUpRight className="w-4 h-4 text-dark" />
          </Link>

          <Link
            href="/#portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded font-display font-bold text-sm tracking-wider uppercase bg-dark-secondary border border-primary/30 text-cream hover:text-primary hover:border-primary transition-all duration-300 transform active:scale-95"
          >
            <span>See Our Work</span>
          </Link>
        </motion.div>

        {/* Quick Highlights Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-12 mt-16 pt-12 border-t border-white/10 w-full max-w-3xl text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-cream">100% Ready</p>
              <p className="text-[11px] text-muted">Turnkey Product Delivery</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-cream">Full Documentation</p>
              <p className="text-[11px] text-muted">Complete Tech Ownership</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-cream">Awwwards Grade</p>
              <p className="text-[11px] text-muted">Superior Luxury Aesthetics</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bouncing Scroll Cue Indicator */}
      <motion.a
        href="#clients"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted hover:text-primary transition-colors cursor-pointer group"
        aria-label="Scroll to clients"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase font-mono">Scroll</span>
        <ArrowDown className="w-4 h-4 text-primary" />
      </motion.a>
    </section>
  );
}
