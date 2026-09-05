'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const CLIENT_LOGOS = Array.from({ length: 21 }, (_, i) => ({
  id: i + 1,
  src: `/images/clients/client- (${i + 1}).png`,
  alt: `Client Partner ${i + 1}`,
}));

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
          {/* Double list to ensure seamless 50% infinite loop */}
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, idx) => (
            <div
              key={`${client.id}-${idx}`}
              className="flex-shrink-0 flex items-center justify-center px-6 py-3.5 rounded-xl bg-dark-secondary/60 backdrop-blur-sm border border-white/5 hover:border-primary/40 hover:bg-dark-secondary transition-all duration-300 shadow-md group cursor-default min-w-[150px] sm:min-w-[180px] h-[72px] sm:h-[80px]"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={140}
                  height={50}
                  className="w-[200px] object-contain opacity-65 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
