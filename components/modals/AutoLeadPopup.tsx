'use client';

import { useContactModal } from '@/context/ContactModalContext';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function AutoLeadPopup() {
  const { isOpen, openContactModal } = useContactModal();
  const pathname = usePathname();
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    // 1. Don't auto-popup on contact page where form is already displayed inline
    if (pathname === '/contact-us') {
      return;
    }

    // 2. Check if already shown or submitted in this session
    try {
      const alreadyTriggered = sessionStorage.getItem('ejnar_auto_lead_shown');
      const alreadySubmitted = localStorage.getItem('ejnar_form_submitted');
      if (alreadyTriggered === 'true' || alreadySubmitted === 'true') {
        return;
      }
    } catch {
      // Ignore storage access errors in private/restricted mode
    }

    const triggerPopup = (triggerType: string) => {
      if (hasTriggeredRef.current || isOpen) return;
      hasTriggeredRef.current = true;

      // Log trigger type to GA4 if available for funnel analysis
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as Window & { gtag: (...args: unknown[]) => void }).gtag('event', 'lead_popup_triggered', {
          event_category: 'Lead Generation',
          event_label: triggerType,
        });
      }

      try {
        sessionStorage.setItem('ejnar_auto_lead_shown', 'true');
      } catch {
        // Ignore
      }

      openContactModal({
        title: 'Get a Free Project Strategy & Estimate',
        subtitle: 'Tell us about your brand',
        contextTag: 'Ejnar Studios Consultation',
        submitButtonText: 'Claim Free Strategy Proposal',
        defaultMessage: 'Hi Ejnar Studios, I would like to receive a custom project roadmap, timeline, and cost estimate.',
      });
    };

    // Trigger A: Timed Auto-Popup (35 seconds — gives users time to read content first)
    const timer = setTimeout(() => {
      triggerPopup('timer_35s');
    }, 35000);

    // Trigger B: Exit Intent on desktop (mouse moving towards top address bar/tabs)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10 && !hasTriggeredRef.current) {
        triggerPopup('exit_intent');
      }
    };

    // Trigger C: Scroll Depth Trigger — fires after 65% scroll depth (proven engagement signal)
    // BUG FIX: was set to 150% which is mathematically impossible and never fired
    const handleScroll = () => {
      if (hasTriggeredRef.current) return;
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollTotal > 0) {
        const scrollPercent = (window.scrollY / scrollTotal) * 100;
        if (scrollPercent >= 65) {
          triggerPopup('scroll_depth_65');
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname, isOpen, openContactModal]);

  return null;
}
