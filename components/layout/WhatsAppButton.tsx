'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BRAND } from '@/lib/constants';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${BRAND.contact.mobileRaw.replace('+', '')}?text=${encodeURIComponent(
    BRAND.contact.whatsappMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-[90] group">
      {/* Pulse Aura */}
      <div className="absolute inset-0 rounded-full bg-primary/30 blur-md animate-ping pointer-events-none" />

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-white font-medium shadow-2xl hover:brightness-110 transition-all duration-300 transform group-hover:scale-105 border border-white/20"
        aria-label="Chat with EJNARSTUDIOS on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
        <span className="hidden sm:inline text-xs font-semibold tracking-wide">
          Chat With Us
        </span>
      </a>
    </div>
  );
}
