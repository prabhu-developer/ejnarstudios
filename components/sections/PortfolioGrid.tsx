'use client';

import { PORTFOLIO_DATA, ProjectItem } from '@/lib/data/portfolio';
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Layers
} from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

function ProjectCard({ project }: { project: ProjectItem }) {
  const hasMultipleImages = Boolean(project.images && project.images.length > 1);
  const [currentSlide, setCurrentSlide] = useState(0);

  const imagesList = project.images && project.images.length > 0 ? project.images : [project.image];

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === 0 ? imagesList.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === imagesList.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl bg-dark-secondary overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-500 shadow-xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
      {/* Visual Header / Image Container */}
      <div className={`relative ${project.categoryTag === 'Mobile App' ? 'h-80 sm:h-96' : 'h-64'} w-full overflow-hidden bg-[#111] flex items-center justify-center`}>
        {project.categoryTag === 'Mobile App' ? (
          // Mobile Mockup Frame for App Screen Slider
          <div className="relative w-full h-full flex items-center justify-center p-4 bg-gradient-to-b from-dark-tertiary to-dark-secondary">
            <div className="relative h-full aspect-[9/18] max-h-[340px] rounded-[2rem] p-1.5 bg-[#252525] border-2 border-white/10 shadow-2xl overflow-hidden">
              <div className="relative w-full h-full rounded-[1.6rem] overflow-hidden bg-black">
                <Image
                  src={imagesList[currentSlide]}
                  alt={`${project.title} - Screen ${currentSlide + 1}`}
                  fill
                  className="object-contain object-top transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>

            {/* Slide Navigation Overlay */}
            {hasMultipleImages && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous Slide"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-dark/80 backdrop-blur-md border border-white/10 text-cream hover:text-primary hover:border-primary/50 flex items-center justify-center transition-all z-20 shadow-lg"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next Slide"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-dark/80 backdrop-blur-md border border-white/10 text-cream hover:text-primary hover:border-primary/50 flex items-center justify-center transition-all z-20 shadow-lg"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Slide Pagination Dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-dark/80 backdrop-blur-md border border-white/10 z-20">
                  {imagesList.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setCurrentSlide(idx);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-5 bg-primary' : 'w-1.5 bg-white/30 hover:bg-white/60'
                        }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        ) : (
          // Standard Website Thumbnail
          <div className="relative w-full h-full">
            <Image
              src={project.image}
              alt={`${project.title} - ${project.category}`}
              fill
              className="object-contain object-top transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-secondary via-transparent to-transparent opacity-80" />
          </div>
        )}

        {/* Top Floating Badge */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-dark/85 backdrop-blur-md text-primary border border-primary/30 shadow-md">
            {project.categoryTag}
          </span>
          {hasMultipleImages && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-dark/85 backdrop-blur-md text-cream/80 border border-white/10 flex items-center gap-1">
              <Layers className="w-3 h-3 text-primary" />
              {currentSlide + 1}/{imagesList.length} Screens
            </span>
          )}
        </div>

      </div>

      {/* Project Card Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[11px] font-mono text-muted uppercase tracking-wider block mb-1">
            {project.client}
          </span>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-cream group-hover:text-primary transition-colors mb-2">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Metrics Grid if available */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-xl bg-dark border border-white/5 mb-6">
            {project.metrics.map((metric, mIdx) => (
              <div key={mIdx} className="text-center">
                <span className="font-display font-black text-sm sm:text-base text-primary block truncate">
                  {metric.value}
                </span>
                <span className="block text-[9px] text-muted tracking-tight truncate">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Deliverables & CTA */}
        <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5 flex-1">
            {project.deliverables.slice(0, 2).map((deliv, dIdx) => (
              <span
                key={dIdx}
                className="px-2.5 py-0.5 rounded-full bg-white/[0.04] text-[10px] font-medium text-cream/70 border border-white/5"
              >
                {deliv}
              </span>
            ))}
          </div>

          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-dark text-xs font-semibold font-mono uppercase tracking-wider transition-all duration-300 border border-primary/30 hover:border-primary shrink-0"
              title={`Visit ${project.title}`}
            >
              <span>Live Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <div className="w-8 h-8 rounded-full border border-primary/40 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-dark transition-all duration-300 transform group-hover:scale-110 shrink-0">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function PortfolioGrid() {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Web Development', 'Mobile App', 'E-commerce', 'Custom Solutions'];

  const filteredProjects =
    filter === 'All'
      ? PORTFOLIO_DATA
      : PORTFOLIO_DATA.filter((p) => p.categoryTag === filter);

  return (
    <section id="portfolio" className="py-24 px-6 lg:px-8 bg-[#161616] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <span>Selected Client Case Studies</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-cream tracking-tight">
              Featured <span className="text-gold-gradient">Work.</span>
            </h2>
            <p className="text-sm text-muted mt-2 max-w-xl">
              Live websites and mobile applications engineered by EJNARSTUDIOS for high conversion, sub-second speed, and premium user experience.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${filter === cat
                  ? 'bg-primary text-dark font-bold shadow-md'
                  : 'bg-dark-secondary text-cream/70 hover:text-cream hover:bg-dark-tertiary border border-white/5'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
