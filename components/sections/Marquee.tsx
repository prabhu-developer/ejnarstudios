'use client';

import React from 'react';

const CLIENTS = [
  { name: 'Vacation Feast', tag: 'Travel & Tourism' },
  { name: 'DimahFashions', tag: 'Luxury Couture' },
  { name: 'Jucoholic', tag: 'Sustainable Goods' },
  { name: 'CTW Business', tag: 'Enterprise Solutions' },
  { name: 'byaddi', tag: 'Food Tech App' },
  { name: 'Mangal Creation', tag: 'Corporate Workwear' },
  { name: 'Indian Women Foundation', tag: 'Community Partner' },
  { name: 'Zoho Featured', tag: 'Tech Ecosystem' },
];

export default function Marquee() {
  return (
    <section id="clients" className="relative py-12 bg-[#161616] border-y border-white/5 overflow-hidden">
      {/* Left/Right Fade Masks */}
      <div className="absolute top-0 left-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#161616] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#161616] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.3em] text-primary/80">
          Trusted By Forward-Thinking Brands & Enterprise Leaders
        </span>
      </div>

      {/* Marquee Track */}
      <div className="flex overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-12 sm:gap-16 py-2">
          {/* Double list to ensure smooth infinite loop */}
          {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex items-center gap-4 group cursor-default"
            >
              <div className="flex items-center gap-3 px-6 py-3 rounded-lg bg-dark-secondary/60 border border-white/5 group-hover:border-primary/40 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                <div className="flex flex-col">
                  <span className="font-display font-bold text-sm sm:text-base text-cream/90 group-hover:text-gold-gradient transition-colors whitespace-nowrap">
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
