'use client';

import { useContactModal } from '@/context/ContactModalContext';
import { ServiceItem } from '@/lib/data/services';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceSubpageHeroProps {
  service: ServiceItem;
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

const cardVisualVariants = {
  hidden: { opacity: 0, scale: 0.94, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: 0.2,
    },
  },
};

export default function ServiceSubpageHero({ service }: ServiceSubpageHeroProps) {
  const { openContactModal } = useContactModal();

  return (
    <section className="relative pt-32 pb-20 px-6 lg:px-8 bg-dark overflow-hidden border-b border-white/5">
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
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] sm:w-[900px] h-[450px] bg-primary/10 rounded-full blur-[170px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Breadcrumb Navigation */}
        <motion.nav
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs text-muted mb-8 font-mono"
        >
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-muted/60" />
          <Link href="/services" className="hover:text-primary transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3 h-3 text-muted/60" />
          <span className="text-primary font-semibold">{service.name}</span>
        </motion.nav>

        {/* 2-Column Hero Grid: Left Content, Right Matching Service Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & Actions (7 Cols) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6"
          >
            {/* Category & Badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.2em] bg-primary/10 text-primary border border-primary/25 shadow-sm">
                {service.category}
              </span>
              {service.badge && (
                <span className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-gold-gradient text-dark shadow-sm">
                  {service.badge}
                </span>
              )}
            </motion.div>

            {/* Headlines */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-black text-3xl sm:text-4xl md:text-5xl md:text-6xl text-cream tracking-tight leading-[1.08]"
            >
              {service.heroHeadline}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-muted max-w-2xl leading-relaxed font-body"
            >
              {service.description}
            </motion.p>

            {/* Key Stats Bar if available */}
            {service.stats && service.stats.length > 0 && (
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-5 px-6 rounded-2xl bg-dark-secondary/90 backdrop-blur-md border border-primary/20 max-w-xl shadow-lg"
              >
                {service.stats.map((st, sIdx) => (
                  <motion.div
                    key={sIdx}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="font-display font-black text-2xl sm:text-3xl text-gold-gradient block">
                      {st.value}
                    </span>
                    <span className="block text-xs text-muted mt-0.5">
                      {st.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Actions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 pt-2"
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto"
              >
                <button
                  onClick={() =>
                    openContactModal({
                      title: `Book ${service.name} Consultation`,
                      subtitle: `${service.category} • Strategy Session`,
                      contextTag: `${service.name} Advisory`,
                      defaultMessage: `I am interested in scheduling a consultation for ${service.name}. We would like to explore your capabilities and pricing roadmap.`,
                      submitButtonText: 'Request Consultation',
                    })
                  }
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-display font-bold text-sm tracking-wider uppercase bg-gold-gradient text-dark hover:brightness-110 shadow-[0_0_25px_rgba(214,180,136,0.35)] hover:shadow-[0_0_35px_rgba(214,180,136,0.55)] transition-all duration-300 group cursor-pointer"
                >
                  <span>Book {service.name} Consultation</span>
                  <ArrowRight className="w-4 h-4 text-dark transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-display font-bold text-sm tracking-wider uppercase bg-dark-secondary/90 border border-white/10 text-cream hover:text-primary hover:border-primary transition-all duration-300 shadow-md"
                >
                  <span>View All Packages</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column: High-Impact Visual Card (5 Cols) with Floating Animation */}
          <motion.div
            variants={cardVisualVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 relative"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative h-[360px] sm:h-[420px] w-full rounded-2xl overflow-hidden border border-primary/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group"
            >
              <Image
                src={service.heroImage}
                alt={service.heroImageAlt}
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
              />
              {/* Subtle dark luxury gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

              {/* Bottom Card Annotation */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-dark/85 backdrop-blur-md border border-white/10 shadow-lg">
                <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-primary block mb-0.5">
                  {service.category} • Core Capability
                </span>
                <h3 className="font-display font-bold text-sm text-cream">
                  {service.name}
                </h3>
                <p className="text-[11px] text-muted line-clamp-1 mt-0.5">
                  {service.shortDescription}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
