'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Feather,
  Sparkles,
  Palette,
  Globe,
  ShoppingBag,
  Smartphone,
  LayoutDashboard,
  Cpu,
  TrendingUp,
  Share2,
  Users,
  Target,
  MessageSquare,
  Compass,
  Video,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { SERVICE_CATEGORIES } from '@/lib/data/services';

const iconMap: Record<string, React.ElementType> = {
  Feather,
  Sparkles,
  Palette,
  Globe,
  ShoppingBag,
  Smartphone,
  LayoutDashboard,
  Cpu,
  TrendingUp,
  Share2,
  Users,
  Target,
  MessageSquare,
  Compass,
  Video,
};

export default function ServiceTabs() {
  // Default tab open = 'dev' (Development)
  const [activeTab, setActiveTab] = useState<'design' | 'dev' | 'marketing' | 'content'>('dev');

  const currentCategory = SERVICE_CATEGORIES.find((cat) => cat.id === activeTab) || SERVICE_CATEGORIES[1];

  return (
    <section id="services" className="py-24 px-6 lg:px-8 bg-dark relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Full-Stack Capabilities</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-cream tracking-tight">
              What We{' '}
              <span className="text-gold-gradient">Do.</span>
            </h2>
          </div>
          <p className="text-muted text-sm sm:text-base max-w-md">
            End-to-end digital agency capabilities structured to bring clarity, speed, and market dominance to your brand.
          </p>
        </div>

        {/* Category Tabs Bar */}
        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {SERVICE_CATEGORIES.map((category, idx) => {
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`relative px-6 py-3 rounded-full text-xs sm:text-sm font-display font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 flex items-center gap-2.5 transform active:scale-95 cursor-pointer ${
                  isActive
                    ? 'text-dark bg-gold-gradient shadow-[0_0_20px_rgba(214,180,136,0.35)] scale-105'
                    : 'text-cream/70 bg-dark-secondary hover:text-cream hover:bg-dark-tertiary border border-white/5'
                }`}
              >
                <span className={`text-[10px] font-mono ${isActive ? 'text-dark/70' : 'text-primary'}`}>
                  0{idx + 1}
                </span>
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Category Description Banner */}
        <div className="mb-10 p-4 rounded-2xl bg-dark-secondary/40 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              {currentCategory.name}
            </span>
            <p className="text-sm text-cream font-medium mt-0.5">
              {currentCategory.tagline}
            </p>
          </div>
          <Link
            href="/services"
            className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>View Pricing & Packages</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Animated Service Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {currentCategory.services.map((service, index) => {
              const Icon = iconMap[service.icon] || Sparkles;
              return (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group relative flex flex-col justify-between p-8 rounded-3xl bg-dark-secondary/70 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1.5 shadow-lg hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)]"
                >
                  {/* Top Row: Icon + Badge */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-dark transition-all duration-300 group-hover:rotate-6">
                        <Icon className="w-6 h-6" />
                      </div>
                      {service.badge && (
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/20 text-primary border border-primary/30">
                          {service.badge}
                        </span>
                      )}
                      {!service.badge && (
                        <span className="text-[11px] font-mono text-muted group-hover:text-primary transition-colors">
                          0{index + 1}
                        </span>
                      )}
                    </div>

                    {/* Title & Short Description */}
                    <h3 className="font-display font-bold text-xl text-cream group-hover:text-primary transition-colors mb-2">
                      {service.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Tech Stack Pills on Card */}
                    {service.techStack && service.techStack.length > 0 && (
                      <div className="mb-6 pt-4 border-t border-white/5">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-primary/80 block mb-2 font-semibold">
                          Tech Stack Architecture:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {service.techStack.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-dark border border-white/10 text-cream/90 group-hover:border-primary/40 group-hover:text-primary transition-colors"
                            >
                              {tech.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Features Mini List & Link */}
                  <div className="pt-6 border-t border-white/5">
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feat, fIdx) => (
                        <li key={fIdx} className="text-xs text-cream/70 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-2 text-xs font-semibold text-primary group-hover:translate-x-1.5 transition-transform duration-300">
                      <span>Explore {service.name}</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
