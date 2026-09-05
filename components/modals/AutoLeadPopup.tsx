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

      try {
        sessionStorage.setItem('ejnar_auto_lead_shown', 'true');
      } catch {
        // Ignore
      }

      openContactModal({
        title: 'Get a Free Project Strategy & Estimate',
        subtitle: 'Tell us about your brand',
        contextTag: 'ejnarstudios Consultation',
        submitButtonText: 'Claim Free Strategy Proposal',
        defaultMessage: 'Hi ejnarstudios, I would like to receive a custom project roadmap, timeline, and cost estimate.',
      });
    };

    // Trigger A: Timed Auto-Popup (after 8 seconds of engagement)
    const timer = setTimeout(() => {
      triggerPopup('timer');
    }, 8000);

    // Trigger B: Exit Intent on desktop (mouse moving towards top address bar/tabs)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10 && !hasTriggeredRef.current) {
        triggerPopup('exit_intent');
      }
    };

    // Trigger C: Scroll Depth Trigger (after user scrolls 40% of the page)
    const handleScroll = () => {
      if (hasTriggeredRef.current) return;
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollTotal > 0) {
        const scrollPercent = (window.scrollY / scrollTotal) * 100;
        if (scrollPercent >= 150) {
          triggerPopup('scroll_depth');
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
