'use client';

import CtaBanner from '@/components/sections/CtaBanner';
import AnimatedHeroBanner from '@/components/ui/AnimatedHeroBanner';
import { MARKETPLACE_PRODUCTS, MarketplaceProduct } from '@/lib/data/marketplace';
import {
  ArrowRight,
  Check,
  Eye,
  Star,
  X
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProduct, setActiveModalProduct] = useState<MarketplaceProduct | null>(null);
  const [inquirySuccess, setInquirySuccess] = useState(false);

  const categories = [
    'All',
    'Figma Templates',
    'Logo Suites',
    'Video Templates',
    'Marketing Kits',
  ];

  const filteredProducts =
    selectedCategory === 'All'
      ? MARKETPLACE_PRODUCTS
      : MARKETPLACE_PRODUCTS.filter((p) => p.category === selectedCategory);

  const handleInquiry = (product: MarketplaceProduct) => {
    setInquirySuccess(true);
    setTimeout(() => {
      setInquirySuccess(false);
      setActiveModalProduct(null);
    }, 2500);
  };

  return (
    <div className="pt-28 bg-dark text-cream min-h-screen">
      {/* Marketplace Animated Hero */}
      <AnimatedHeroBanner
        badgeText="Turnkey Assets • 100% Ready Delivery"
        headlinePrefix="Curated Digital"
        highlightText="Marketplace."
        description="Pre-built agency templates, vector logo suites, social media packs, and cinema video templates built to accelerate your launch with zero delay."
        actions={
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${selectedCategory === cat
                  ? 'bg-primary text-dark font-bold shadow-md ring-2 ring-primary/40'
                  : 'bg-dark-secondary text-cream/70 hover:text-cream hover:bg-dark-tertiary border border-white/5'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        }
      />

      {/* Product Catalog Grid */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10 text-xs font-mono text-muted">
            <span>Showing {filteredProducts.length} Ready-Made Digital Products</span>
            <span className="text-primary font-semibold">Immediate Digital Download / License</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group rounded-2xl bg-dark-secondary/80 border border-white/5 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl"
              >
                {/* Thumbnail */}
                <div className="relative h-60 w-full overflow-hidden bg-dark-tertiary">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-secondary via-transparent to-transparent opacity-80" />

                  {product.badge && (
                    <span className="absolute top-4 left-4 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-gold-gradient text-dark shadow-md">
                      {product.badge}
                    </span>
                  )}

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-cream/90 bg-dark/80 px-2 py-0.5 rounded backdrop-blur-md">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1 text-primary text-xs bg-dark/80 px-2 py-0.5 rounded backdrop-blur-md">
                      <Star className="w-3.5 h-3.5 fill-primary" />
                      <span>{product.rating}</span>
                      <span className="text-muted text-[10px]">({product.reviewsCount})</span>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="font-display font-black text-2xl text-gold-gradient">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-muted line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>

                    <h3 className="font-display font-bold text-lg text-cream group-hover:text-primary transition-colors mb-2">
                      {product.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed mb-6">
                      {product.shortDescription}
                    </p>
                  </div>

                  {/* Deliverables tags */}
                  <div className="pt-4 border-t border-white/5 space-y-2 mb-6">
                    {product.deliverables.slice(0, 2).map((deliv, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-cream/70">
                        <Check className="w-3 h-3 text-primary flex-shrink-0" />
                        <span className="truncate">{deliv}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setActiveModalProduct(product)}
                      className="py-2.5 rounded bg-dark border border-white/10 hover:border-primary/40 text-cream text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Preview</span>
                    </button>
                    <button
                      onClick={() => setActiveModalProduct(product)}
                      className="py-2.5 rounded bg-gold-gradient text-dark text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1 hover:brightness-110 shadow-md transition-all"
                    >
                      <span>Get This</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Preview Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-dark-secondary rounded-2xl border border-primary/30 p-6 sm:p-8 shadow-2xl overflow-hidden">
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-4 right-4 p-2 rounded-full border border-white/10 text-muted hover:text-cream hover:bg-white/5"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-primary uppercase mb-2">
              <span>{activeModalProduct.category}</span>
              <span>•</span>
              <span>Turnkey Product</span>
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl text-cream mb-4">
              {activeModalProduct.title}
            </h3>

            <div className="relative h-56 w-full rounded-xl overflow-hidden mb-6">
              <Image
                src={activeModalProduct.image}
                alt={activeModalProduct.title}
                fill
                className="object-cover"
              />
            </div>

            <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6 font-body">
              {activeModalProduct.description}
            </p>

            <div className="p-4 rounded-xl bg-dark border border-white/5 mb-6">
              <span className="text-xs font-semibold text-cream block mb-2 uppercase tracking-wider">
                Full Package Inclusions:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted">
                {activeModalProduct.deliverables.map((deliv, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div>
                <span className="text-[10px] text-muted uppercase font-mono block">Instant License</span>
                <span className="font-display font-black text-3xl text-gold-gradient">
                  {activeModalProduct.price}
                </span>
              </div>

              {inquirySuccess ? (
                <div className="px-6 py-3 rounded bg-emerald-500/20 border border-emerald-500 text-emerald-400 text-xs font-bold flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Inquiry Received! We'll contact you.</span>
                </div>
              ) : (
                <button
                  onClick={() => handleInquiry(activeModalProduct)}
                  className="px-8 py-3.5 rounded bg-gold-gradient text-dark font-display font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg transition-all"
                >
                  Acquire Template License
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <CtaBanner />
    </div>
  );
}
