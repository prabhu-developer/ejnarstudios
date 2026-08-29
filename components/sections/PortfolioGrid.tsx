'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, TrendingUp, ExternalLink, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '@/lib/data/portfolio';

export default function PortfolioGrid() {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'E-commerce', 'Web Development', 'Mobile App', 'Branding', 'Custom Solutions'];

  const filteredProjects = filter === 'All'
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
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
                  filter === cat
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
            <div
              key={project.id}
              className="group relative flex flex-col justify-between rounded-xl bg-dark-secondary overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-500 shadow-xl hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
            >
              {/* Thumbnail Image with Zoom */}
              <div className="relative h-64 w-full overflow-hidden bg-dark-tertiary">
                <Image
                  src={project.image}
                  alt={`${project.title} - ${project.category}`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-secondary via-transparent to-transparent opacity-80" />

                {/* Top Floating Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-dark/80 backdrop-blur-md text-primary border border-primary/30">
                    {project.categoryTag}
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="text-xs font-mono font-bold text-cream/80 bg-dark/80 px-2 py-0.5 rounded backdrop-blur-md">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Project Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-muted uppercase tracking-wider">
                    {project.client}
                  </span>
                  <h3 className="font-display font-bold text-2xl text-cream group-hover:text-primary transition-colors mt-1 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Metrics Pill Grid if available */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-lg bg-[#191919] border border-white/5 mb-6">
                    {project.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="text-center">
                        <span className="font-display font-black text-sm text-primary">
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
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] text-muted/80">
                    {project.deliverables[0]} • {project.deliverables[1]}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-primary/40 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-dark transition-all duration-300 transform group-hover:scale-110">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
