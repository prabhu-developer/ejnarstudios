'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  Sparkle,
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

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation & escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark Backdrop Scrim */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 top-[72px] bg-black/70 backdrop-blur-sm z-[98]"
            aria-hidden="true"
          />

          {/* Mega Menu Dropdown Panel */}
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -12, scaleY: 0.98 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -10, scaleY: 0.98 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 right-0 w-full bg-[#1b1b1b]/98 backdrop-blur-2xl border-b border-primary/20 shadow-2xl z-[99] overflow-hidden"
          >
            {/* Top gold accent line */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 lg:py-10">
              {/* 4-Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                {SERVICE_CATEGORIES.map((category, catIndex) => {
                  return (
                    <div key={category.id} className="flex flex-col">
                      {/* Column Header */}
                      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/5">
                        <span className="text-[10px] font-mono font-semibold tracking-[0.25em] uppercase text-primary">
                          0{catIndex + 1}
                        </span>
                        <h3 className="font-display text-xs font-bold tracking-widest uppercase text-cream">
                          {category.name}
                        </h3>
                      </div>

                      {/* Services List */}
                      <div className="space-y-1">
                        {category.services.map((service) => {
                          const Icon = iconMap[service.icon] || Sparkles;
                          return (
                            <Link
                              key={service.id}
                              href={`/services/${service.slug}`}
                              onClick={onClose}
                              className="group flex flex-col p-2.5 rounded-md hover:bg-white/[0.04] transition-all duration-200 border-l-2 border-transparent hover:border-primary"
                            >
                              <div className="flex items-center gap-2.5">
                                <div className="p-1.5 rounded bg-primary/10 text-primary group-hover:bg-primary group-hover:text-dark transition-all duration-200 group-hover:translate-x-1">
                                  <Icon className="w-3.5 h-3.5" />
                                </div>
                                <span className="font-medium text-xs text-cream/90 group-hover:text-primary transition-colors">
                                  {service.name}
                                </span>
                              </div>
                              <p className="text-[11px] text-muted pl-8 mt-0.5 line-clamp-1 group-hover:text-cream/80 transition-colors">
                                {service.shortDescription}
                              </p>
                            </Link>
                          );
                        })}
                      </div>

                      {/* Column 4 Featured Promo Block */}
                      {category.id === 'content' && (
                        <div className="mt-6 pt-4 border-t border-white/5">
                          <div className="relative group/promo overflow-hidden rounded-lg bg-dark-secondary border border-primary/20 p-3 hover:border-primary/50 transition-all duration-300">
                            <div className="relative h-20 w-full overflow-hidden rounded mb-2">
                              <Image
                                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80"
                                alt="byaddi mobile app featured work"
                                fill
                                className="object-cover transition-transform duration-500 group-hover/promo:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent" />
                              <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded text-[9px] font-semibold bg-primary text-dark uppercase tracking-wider">
                                Featured Work
                              </div>
                            </div>
                            <h4 className="font-display font-semibold text-xs text-cream">
                              byaddi — Mobile App
                            </h4>
                            <p className="text-[10px] text-muted line-clamp-1 mt-0.5">
                              45K+ active orders and 4.9★ rating.
                            </p>
                            <Link
                              href="/#portfolio"
                              onClick={onClose}
                              className="inline-flex items-center gap-1 text-[11px] text-primary font-medium mt-2 hover:underline"
                            >
                              <span>View Case Studies</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Mega Menu Bottom Bar */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                  <p className="text-xs text-muted">
                    Not sure which architecture fits your business?{' '}
                    <span className="text-cream font-medium">We offer tailored roadmaps.</span>
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Link
                    href="/services"
                    onClick={onClose}
                    className="text-xs font-semibold text-cream/80 hover:text-primary transition-colors flex items-center gap-1.5"
                  >
                    <span>View All Services</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/contact-us"
                    onClick={onClose}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded text-xs font-semibold bg-gold-gradient text-dark hover:brightness-110 shadow-md transition-all duration-200"
                  >
                    <span>Talk to Us</span>
                    <ArrowRight className="w-3 h-3 text-dark" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
