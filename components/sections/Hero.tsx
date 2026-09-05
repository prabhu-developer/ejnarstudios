'use client';

import { useContactModal } from '@/context/ContactModalContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

// Fluid animation variants with custom cubic-bezier easing
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemFadeUp = {
  hidden: { opacity: 0, y: 28, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const badgeVariant = {
  hidden: { opacity: 0, scale: 0.9, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const { openContactModal } = useContactModal();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 25;
      const y = (e.clientY / innerHeight - 0.5) * 25;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-28 sm:pt-32 pb-16 px-6 lg:px-8 overflow-hidden bg-dark"
    >
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute inset-0 gold-radial-glow pointer-events-none" />

      {/* Animated Floating Light Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.15, 0.08],
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] sm:w-[800px] h-[450px] bg-primary/10 rounded-full blur-[150px] pointer-events-none"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.04, 0.09, 0.04],
          x: [0, -30, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[350px] bg-primary/8 rounded-full blur-[140px] pointer-events-none"
      />

      {/* Floating 3D-Style Antler Logo Icon behind text (Parallax & Breathing Motion) */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 0.5, 0, -0.5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          x: mouseOffset.x * 1.6,
          y: mouseOffset.y * 1.6,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[480px] md:w-[620px] h-[320px] sm:h-[480px] md:h-[620px] opacity-25 pointer-events-none select-none z-0 flex items-center justify-center"
      >
        <div className="relative w-full h-full">
          <Image
            src="/bg-hero.png"
            alt="Ejnar Studios  Antler Mark"
            fill
            priority
            className="object-contain"
          />
        </div>
      </motion.div>

      {/* Main Animated Hero Content */}
      <motion.div
        style={{ scale: heroScale, opacity: heroOpacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center"
      >
        {/* Animated Eyebrow Badge */}
        <motion.div variants={badgeVariant} className="relative group mb-6">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 via-primary/60 to-primary/30 rounded-full blur-[2px] opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse" />
          <div className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dark-secondary/90 backdrop-blur-md border border-primary/40 text-primary text-xs font-semibold uppercase tracking-[0.2em] shadow-lg">
            <span>Award-Winning Creative & Digital Agency • Chennai</span>
          </div>
        </motion.div>

        {/* Main Animated Headline */}
        <motion.h1
          variants={itemFadeUp}
          className="font-banner font-black text-2xl  md:text-6xl lg:text-7xl tracking-tight leading-[1.08] text-cream mb-6 select-none"
        >
          <span className="block mr-2">We help brands make</span>
          <motion.span
            className="text-gold-gradient inline-block relative"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            smarter decisions.
          </motion.span>
        </motion.h1>

        {/* Smooth Sub-Copy */}
        <motion.p
          variants={itemFadeUp}
          className="text-base sm:text-lg md:text-xl text-muted max-w-3xl font-body leading-relaxed mb-10"
        >
          A premier creative digital agency in Chennai crafting bespoke branding, high-performance websites, native mobile apps, and algorithmic marketing campaigns that command attention and drive conversion.
        </motion.p>

        {/* Animated Call to Action Buttons */}
        <motion.div
          variants={itemFadeUp}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <motion.div
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto"
          >
            <button
              onClick={() =>
                openContactModal({
                  title: 'Start Your Project',
                  subtitle: 'Ejnar Studios  Consultation',
                  contextTag: 'Ejnar Studios  Architecture & Strategy',
                  defaultMessage: 'I would like to discuss our project objectives, target launch date, and key deliverables with Ejnar Studios .',
                  submitButtonText: 'Send Project Inquiry',
                })
              }
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-display font-bold text-sm tracking-wider uppercase bg-gold-gradient text-dark shadow-[0_0_30px_rgba(214,180,136,0.4)] hover:shadow-[0_0_45px_rgba(214,180,136,0.65)] transition-all duration-300 group cursor-pointer"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4 text-dark transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/#portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-display font-bold text-sm tracking-wider uppercase bg-dark-secondary/90 backdrop-blur-md border border-primary/30 text-cream hover:text-primary hover:border-primary transition-all duration-300 shadow-md"
            >
              <span>See Our Work</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Quick Highlights Row with Staggered Entrance */}
        <motion.div
          variants={itemFadeUp}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-12 mt-16 pt-12 border-t border-white/10 w-full max-w-3xl text-left"
        >
          <motion.div
            whileHover={{ y: -3, scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-3 p-2 rounded-lg transition-colors hover:bg-white/[0.02]"
          >
            <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shadow-sm shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-cream">100% Ready</p>
              <p className="text-[11px] text-muted">Turnkey Product Delivery</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -3, scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-3 p-2 rounded-lg transition-colors hover:bg-white/[0.02]"
          >
            <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shadow-sm shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-cream">Full Documentation</p>
              <p className="text-[11px] text-muted">Complete Tech Ownership</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -3, scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="hidden md:flex items-center gap-3 p-2 rounded-lg transition-colors hover:bg-white/[0.02]"
          >
            <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shadow-sm shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-cream">Awwwards Grade</p>
              <p className="text-[11px] text-muted">Superior Luxury Aesthetics</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bouncing Scroll Cue Indicator */}
      <motion.a
        href="#clients"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted hover:text-primary transition-colors cursor-pointer group z-20"
        aria-label="Scroll to clients"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase font-mono">Scroll</span>
        <ArrowDown className="w-4 h-4 text-primary" />
      </motion.a>
    </section>
  );
}
