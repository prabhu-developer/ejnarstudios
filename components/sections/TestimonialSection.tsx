'use client';

import React from 'react';
import { Quote, Star } from 'lucide-react';

export default function TestimonialSection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-[#141414] relative overflow-hidden">
      {/* Huge subtle quotation mark backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-5">
        <Quote className="w-96 h-96 text-primary" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Gold stars */}
        <div className="flex items-center justify-center gap-1.5 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
          ))}
        </div>

        {/* Large Italic Pull-Quote */}
        <blockquote className="font-display font-medium text-2xl sm:text-3xl md:text-4xl text-cream leading-snug italic mb-10">
          “EJNARSTUDIOS completely reshaped our brand's presence. Their fusion of luxury visual design, architectural speed, and transparent delivery is unprecedented in the Indian agency landscape.”
        </blockquote>

        {/* Author & Brand */}
        <div className="flex flex-col items-center">
          <span className="font-display font-bold text-lg text-gold-gradient">
            Ranjeth Bhuvaneswaran
          </span>
          <span className="text-xs text-muted font-mono uppercase tracking-widest mt-1">
            Founder & Principal Architect • EJNARSTUDIOS
          </span>
        </div>
      </div>
    </section>
  );
}
