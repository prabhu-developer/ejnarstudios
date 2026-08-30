'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if session already loaded to avoid redundant screen blocking
    const hasLoaded = sessionStorage.getItem('ejnar_intro_shown');
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem('ejnar_intro_shown', 'true');
    }, hasLoaded ? 300 : 900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-dark text-cream select-none"
        >
          {/* Subtle radial gold glow */}
          <div className="absolute w-[350px] h-[350px] bg-primary/15 rounded-full blur-[120px] animate-pulse" />

          {/* Center Logo Icon with Gold Glow */}
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative w-24 h-24 mb-4"
            >
              <Image
                src="/logo-icon.png"
                alt="EJNARSTUDIOS Logo"
                fill
                priority
                className="object-contain filter drop-shadow-[0_0_25px_rgba(214,180,136,0.6)]"
              />
            </motion.div>

            {/* Typography */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <h2 className="font-display font-bold text-2xl tracking-widest text-cream">
                EJNAR{" "}<span className="text-primary font-normal">STUDIOS</span>
              </h2>
              <p className="text-[10px] tracking-[0.4em] uppercase text-muted mt-1 font-mono">
                Chennai • Creative Agency
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
