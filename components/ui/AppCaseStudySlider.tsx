'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star, Smartphone, CheckCircle2, Layers } from 'lucide-react';
import { ProjectItem } from '@/lib/data/portfolio';

interface AppCaseStudySliderProps {
  project: ProjectItem;
}

export default function AppCaseStudySlider({ project }: AppCaseStudySliderProps) {
  const images = project.images && project.images.length > 0 ? project.images : [project.image];
  const [activeSlide, setActiveSlide] = useState(0);

  const slideCaptions = [
    {
      title: 'Home & Category Discovery',
      tag: 'Screen 01',
      desc: 'Arabic-first category navigation showcasing Saudi home bakeries, sweets, traditional main courses, and spices.',
    },
    {
      title: 'Regional Filters & Search',
      tag: 'Screen 02',
      desc: 'Multi-city search filtering across Riyadh, Majmaah, Shaqra, Al Kharj, Buraidah, and Al-Ahsa with SAR pricing.',
    },
    {
      title: 'Product Details & WhatsApp CTA',
      tag: 'Screen 03',
      desc: 'High-res culinary galleries, customer likes, recipe notes, and zero-friction direct WhatsApp checkout routing.',
    },
  ];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/* Mobile Device Mockup with Slide View */}
      <div className="lg:col-span-6 flex flex-col items-center">
        <div className="relative w-full max-w-[340px] aspect-[9/18] rounded-[2.8rem] p-3 bg-gradient-to-b from-[#2a2a2a] via-[#1a1a1a] to-[#111] border-[3px] border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden">
          {/* Top Speaker / Dynamic Island Notch */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-[#111] mr-2" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
          </div>

          {/* Screen Container */}
          <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden bg-black">
            <Image
              src={images[activeSlide]}
              alt={`byaddi screen ${activeSlide + 1}`}
              fill
              className="object-cover object-top transition-all duration-500"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Slider Prev / Next Controls */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous screen"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-dark/85 backdrop-blur-md border border-white/15 text-cream hover:text-primary hover:border-primary flex items-center justify-center transition-all z-40 shadow-xl"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next screen"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-dark/85 backdrop-blur-md border border-white/15 text-cream hover:text-primary hover:border-primary flex items-center justify-center transition-all z-40 shadow-xl"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Thumbnail Selector Pills */}
        <div className="flex items-center gap-3 mt-6">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-300 ${
                activeSlide === idx
                  ? 'bg-primary text-dark font-bold shadow-md ring-2 ring-primary/40'
                  : 'bg-dark-secondary text-cream/70 hover:text-cream border border-white/5'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              <span>Screen 0{idx + 1}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Case Study Details & Interactive Caption */}
      <div className="lg:col-span-6 space-y-6">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-primary">
            Featured Mobile App Showcase
          </span>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-primary/10 text-primary border border-primary/20">
            Interactive Slide View
          </span>
        </div>

        <h2 className="font-display font-black text-3xl sm:text-4xl text-cream">
          Native Speed & <br />
          <span className="text-gold-gradient">Fluid Mobile UX.</span>
        </h2>

        <div className="flex items-center gap-1 text-primary">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-primary" />
          ))}
          <span className="text-xs font-bold text-cream ml-1.5">
            4.9 App Store Rating • Saudi Arabia
          </span>
        </div>

        <p className="text-sm text-muted leading-relaxed font-body">
          {project.description}
        </p>

        {/* Active Screen Context Card */}
        <div className="p-4 rounded-xl bg-dark-secondary border border-primary/20 transition-all duration-300">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-mono font-bold text-primary uppercase">
              {slideCaptions[activeSlide]?.tag || `Screen 0${activeSlide + 1}`}
            </span>
            <span className="text-[10px] font-mono text-muted">
              Slide {activeSlide + 1} of {images.length}
            </span>
          </div>
          <h4 className="font-display font-bold text-base text-cream">
            {slideCaptions[activeSlide]?.title}
          </h4>
          <p className="text-xs text-muted mt-1 leading-relaxed">
            {slideCaptions[activeSlide]?.desc}
          </p>
        </div>

        {/* Metrics */}
        {project.metrics && (
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-dark border border-white/5">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="text-center">
                <span className="font-display font-black text-base sm:text-lg text-primary block">
                  {m.value}
                </span>
                <span className="block text-[10px] text-muted truncate">{m.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Deliverables tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.deliverables.map((deliv, dIdx) => (
            <span
              key={dIdx}
              className="px-3 py-1 rounded-full bg-white/[0.04] text-[11px] text-cream/80 border border-white/5"
            >
              {deliv}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
