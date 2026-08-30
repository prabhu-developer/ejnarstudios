'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ChevronDown,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { BRAND, NAV_LINKS } from '@/lib/constants';
import { SERVICE_CATEGORIES } from '@/lib/data/services';
import Logo from '@/components/ui/Logo';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);

  const toggleCategory = (id: string) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[1000] bg-dark/98 backdrop-blur-2xl flex flex-col justify-between overflow-y-auto px-6 py-6"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-primary/20">
            <Logo size="sm" />
            <button
              onClick={onClose}
              className="p-2 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
              aria-label="Close Navigation Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links List */}
          <div className="py-8 space-y-4">
            {NAV_LINKS.map((link) => {
              if (link.isMegaMenu) {
                return (
                  <div key={link.name} className="border-b border-white/5 pb-4">
                    <button
                      onClick={() => setIsServicesExpanded(!isServicesExpanded)}
                      className="w-full flex items-center justify-between py-2 text-xl font-display font-bold text-cream hover:text-primary transition-colors text-left"
                    >
                      <span className="flex items-center gap-2">
                        <span>{link.name}</span>
                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-primary/20 text-primary">
                          14 Services
                        </span>
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-primary transition-transform duration-300 ${
                          isServicesExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Services Accordion */}
                    <AnimatePresence>
                      {isServicesExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden pl-2 pt-3 space-y-3"
                        >
                          <Link
                            href="/services"
                            onClick={onClose}
                            className="text-xs font-semibold text-primary inline-flex items-center gap-1 mb-2 hover:underline"
                          >
                            <span>Services Hub Overview</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>

                          {SERVICE_CATEGORIES.map((cat) => (
                            <div key={cat.id} className="rounded-lg bg-dark-secondary/60 p-3 border border-white/5">
                              <button
                                onClick={() => toggleCategory(cat.id)}
                                className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-cream/90"
                              >
                                <span>{cat.name}</span>
                                <ChevronDown
                                  className={`w-4 h-4 text-muted transition-transform ${
                                    expandedCategory === cat.id ? 'rotate-180' : ''
                                  }`}
                                />
                              </button>

                              {expandedCategory === cat.id && (
                                <div className="mt-2.5 pt-2 border-t border-white/5 space-y-2">
                                  {cat.services.map((service) => (
                                    <Link
                                      key={service.id}
                                      href={`/services/${service.slug}`}
                                      onClick={onClose}
                                      className="block text-xs text-muted hover:text-primary py-1 pl-1 transition-colors"
                                    >
                                      {service.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <div key={link.name} className="border-b border-white/5 pb-3">
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="flex items-center justify-between text-xl font-display font-bold text-cream hover:text-primary transition-colors py-1"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-muted" />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Bottom Action and Contact */}
          <div className="pt-6 border-t border-primary/20 space-y-4">
            <Link
              href="/contact-us"
              onClick={onClose}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-gold-gradient text-dark font-display font-bold text-sm tracking-wider uppercase shadow-lg hover:brightness-110 transition-all active:scale-95"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="grid grid-cols-1 gap-2 pt-2 text-xs text-muted">
              <a href={`tel:${BRAND.contact.mobileRaw}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-3.5 h-3.5 text-primary" />
                <span>{BRAND.contact.mobile}</span>
              </a>
              <a href={`mailto:${BRAND.contact.email}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-3.5 h-3.5 text-primary" />
                <span>{BRAND.contact.email}</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                <span>{BRAND.address.shortAddress}</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
