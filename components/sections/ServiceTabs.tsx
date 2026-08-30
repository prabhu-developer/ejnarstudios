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
  const [activeTab, setActiveTab] = useState<'design' | 'dev' | 'marketing' | 'content'>('dev');

  const currentCategory = SERVICE_CATEGORIES.find((cat) => cat.id === activeTab) || SERVICE_CATEGORIES[1];

  return (
    <section id="services" className="py-20 sm:py-28 px-6 lg:px-8 bg-dark relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Minimal Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>What We Do</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-cream tracking-tight">
              Services & <span className="text-gold-gradient">Expertise.</span>
            </h2>
          </div>
          <p className="text-muted text-xs sm:text-sm max-w-sm">
            End-to-end digital capabilities designed to help modern brands scale with precision.
          </p>
        </div>

        {/* Minimal Category Tabs Switcher */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-10 no-scrollbar">
          {SERVICE_CATEGORIES.map((category, idx) => {
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-display font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'text-dark bg-gold-gradient shadow-[0_0_20px_rgba(214,180,136,0.3)] scale-[1.02]'
                    : 'text-cream/70 bg-dark-secondary/80 hover:text-cream hover:bg-dark-secondary border border-white/5'
                }`}
              >
                <span className={`text-[10px] font-mono ${isActive ? 'text-dark/80 font-bold' : 'text-primary'}`}>
                  0{idx + 1}
                </span>
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Minimal Animated Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {currentCategory.services.map((service, index) => {
              const Icon = iconMap[service.icon] || Sparkles;
              return (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group relative flex flex-col justify-between p-7 rounded-3xl bg-dark-secondary/60 hover:bg-dark-secondary border border-white/5 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl"
                >
                  <div>
                    {/* Top Row: Icon + Number / Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-dark transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      {service.badge ? (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/15 text-primary border border-primary/25">
                          {service.badge}
                        </span>
                      ) : (
                        <span className="text-xs font-mono text-muted group-hover:text-primary transition-colors">
                          0{index + 1}
                        </span>
                      )}
                    </div>

                    {/* Service Name */}
                    <h3 className="font-display font-bold text-lg text-cream group-hover:text-primary transition-colors mb-1.5">
                      {service.name}
                    </h3>

                    {/* Minimal 1-line Summary */}
                    <p className="text-xs text-muted leading-relaxed mb-5">
                      {service.shortDescription}
                    </p>

                    {/* Minimal 3 Key Points */}
                    <div className="space-y-2 pt-4 border-t border-white/5">
                      {service.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-cream/75">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Minimal Subtle Footer Link */}
                  <div className="pt-5 mt-5 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-primary">
                    <span className="group-hover:text-cream transition-colors">Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" />
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
