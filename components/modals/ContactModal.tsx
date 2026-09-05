'use client';

import UnifiedContactForm from '@/components/forms/UnifiedContactForm';
import { useContactModal } from '@/context/ContactModalContext';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';

export default function ContactModal() {
  const { isOpen, modalConfig, closeContactModal } = useContactModal();

  // Prevent background scrolling while modal is open & handle Escape key
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          closeContactModal();
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalStyle;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, closeContactModal]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          {/* Dark Blur Scrim Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeContactModal}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl my-8 bg-[#1e1e1e] border border-primary/30 rounded-3xl p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.85)] z-10 overflow-hidden"
          >
            {/* Top gold hairline shine */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

            {/* Close Button */}
            <button
              type="button"
              onClick={closeContactModal}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-dark-secondary border border-white/10 text-muted hover:text-cream hover:border-primary/50 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-md z-20 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-mono font-semibold uppercase tracking-widest mb-4">
              <span>{modalConfig.contextTag || 'Fast-Track ejnarstudios Inquiry'}</span>
            </div>

            {/* Embedded Unified Form */}
            <UnifiedContactForm
              isInModal={true}
              title={modalConfig.title || 'Start Your Project'}
              subtitle={modalConfig.subtitle || 'Direct ejnarstudios Contact'}
              defaultMessage={modalConfig.defaultMessage || ''}
              submitButtonText={modalConfig.submitButtonText || 'Send Inquiry'}
              onSuccessCallback={closeContactModal}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
