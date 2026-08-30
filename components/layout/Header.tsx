'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ChevronDown, Sparkles, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import Logo from '@/components/ui/Logo';
import MegaMenu from './MegaMenu';
import MobileNav from './MobileNav';
import { useContactModal } from '@/context/ContactModalContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const pathname = usePathname();
  const leaveTimerRef = useRef<NodeJS.Timeout | null>(null);
  const { openContactModal } = useContactModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mega menu on route change
  useEffect(() => {
    setIsMegaMenuOpen(false);
    setIsMobileNavOpen(false);
  }, [pathname]);

  const handleMouseEnterServices = () => {
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeaveServices = () => {
    leaveTimerRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 200);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled || isMegaMenuOpen
            ? 'bg-dark/90 backdrop-blur-md border-b border-primary/15 py-3.5 shadow-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo size="md" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

              if (link.isMegaMenu) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={handleMouseEnterServices}
                    onMouseLeave={handleMouseLeaveServices}
                  >
                    <button
                      onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                      className={`group inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200 py-1 ${
                        isMegaMenuOpen || isActive
                          ? 'text-primary'
                          : 'text-cream/80 hover:text-primary'
                      }`}
                      aria-expanded={isMegaMenuOpen}
                      aria-haspopup="true"
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          isMegaMenuOpen ? 'rotate-180 text-primary' : 'text-muted group-hover:text-primary'
                        }`}
                      />
                    </button>
                    <span
                      className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-primary transition-transform duration-300 origin-left ${
                        isMegaMenuOpen || isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </div>
                );
              }

              return (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => {
                    if (isMegaMenuOpen) setIsMegaMenuOpen(false);
                  }}
                >
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-all duration-200 py-1 ${
                      isActive ? 'text-primary' : 'text-cream/80 hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </Link>
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-primary transition-transform duration-300 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </div>
              );
            })}
          </nav>

          {/* Desktop Right CTA & Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact-us"
              onClick={(e) => {
                if (pathname !== '/contact-us') {
                  e.preventDefault();
                  openContactModal({
                    title: 'Start Your Project',
                    subtitle: 'Fast-Track Studio Consultation',
                    defaultMessage: 'I would like to discuss our project objectives, target launch date, and key deliverables with EJNARSTUDIOS.',
                    submitButtonText: 'Send Project Inquiry',
                  });
                }
              }}
              className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold-gradient text-dark hover:brightness-110 shadow-[0_0_15px_rgba(214,180,136,0.3)] hover:shadow-[0_0_22px_rgba(214,180,136,0.5)] transition-all duration-300 transform active:scale-95 hover:scale-105 cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-dark" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileNavOpen(true)}
              className="lg:hidden p-2.5 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors cursor-pointer"
              aria-label="Open Mobile Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Desktop Mega Menu Dropdown */}
        <div
          onMouseEnter={handleMouseEnterServices}
          onMouseLeave={handleMouseLeaveServices}
        >
          <MegaMenu
            isOpen={isMegaMenuOpen}
            onClose={() => setIsMegaMenuOpen(false)}
          />
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />
    </>
  );
}
