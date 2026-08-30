'use client';

import React from 'react';
import { motion } from 'framer-motion';

const CLIENTS = [
  { name: 'Apple Point', tag: 'Apple Reseller & Tech' },
  { name: 'Fefine', tag: 'Health & Hygiene E-Commerce' },
  { name: 'Binlees Maritime', tag: 'Global Shipping & Logistics' },
  { name: 'Marina Residences', tag: 'Luxury Realty & Villas' },
  { name: 'Pinnacle Star Services', tag: 'Dubai IFZA Investment Core' },
  { name: 'Relax Washrooms', tag: 'Commercial Bus Tech' },
  { name: 'SIFEL Life School', tag: 'Youth Holistic Education' },
  { name: 'byaddi (بيّدي)', tag: 'Saudi Culinary App' },
];

export default function Marquee() {
  return (
    <section id="clients" className="relative py-14 bg-[#161616] border-y border-white/5 overflow-hidden">
      {/* Left/Right Gradient Fade Masks */}
      <div className="absolute top-0 left-0 bottom-0 w-24 md:w-44 bg-gradient-to-r from-[#161616] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-24 md:w-44 bg-gradient-to-l from-[#161616] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-7 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-mono font-semibold uppercase tracking-[0.3em] text-primary/80"
        >
          Trusted By Forward-Thinking Brands & Enterprise Leaders Worldwide
        </motion.span>
      </div>

      {/* Marquee Track */}
      <div className="flex overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-6 sm:gap-8 py-2">
          {/* Triple list to ensure continuous infinite loop */}
          {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex items-center gap-4 group cursor-default"
            >
              <div className="flex items-center gap-3.5 px-6 py-3.5 rounded-xl bg-dark-secondary/70 backdrop-blur-sm border border-white/5 group-hover:border-primary/50 group-hover:bg-dark-secondary transition-all duration-300 shadow-md">
                <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-125 transition-all" />
                <div className="flex flex-col">
                  <span className="font-display font-bold text-sm sm:text-base text-cream/90 group-hover:text-primary transition-colors whitespace-nowrap">
                    {client.name}
                  </span>
                  <span className="text-[10px] text-muted tracking-wider uppercase">
                    {client.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
