'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const TESTIMONIALS = [
  {
    quote: "The digital transformation they engineered for our retail chain increased online conversions by 40%. The UI is flawless and the backend handles high-volume traffic effortlessly.",
    author: "Arun Kumar",
    role: "Director of Operations • Nexus Retail Group",
  },
  {
    quote: "Ejnar Studios completely reshaped our brand's presence. Their fusion of luxury visual design, architectural speed, and transparent delivery is unprecedented in the Indian agency landscape.",
    author: "Priya Sharma",
    role: "CMO • Aura Aesthetics",
  },
  {
    quote: "We needed a complex custom ERP system with sub-second performance. The team delivered a masterclass in Electron and Next.js engineering that changed how we do business.",
    author: "David Chen",
    role: "Technical Lead • Vertex Logistics",
  }
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

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

        {/* Carousel Content */}
        <div className="relative min-h-[160px] flex items-center justify-center mb-10">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ 
                opacity: idx === currentIndex ? 1 : 0, 
                y: idx === currentIndex ? 0 : 20,
                scale: idx === currentIndex ? 1 : 0.95,
                pointerEvents: idx === currentIndex ? 'auto' : 'none',
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <blockquote className="font-display font-medium text-2xl sm:text-3xl md:text-4xl text-cream leading-snug italic mb-8">
                “{testimonial.quote}”
              </blockquote>
              <div className="flex flex-col items-center">
                <span className="font-display font-bold text-lg text-gold-gradient">
                  {testimonial.author}
                </span>
                <span className="text-xs text-muted font-mono uppercase tracking-widest mt-1">
                  {testimonial.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Carousel Indicators */}
        <div className="flex items-center justify-center gap-3">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-primary w-6' : 'bg-primary/20 hover:bg-primary/50'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
