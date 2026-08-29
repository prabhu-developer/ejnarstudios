'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Smooth springs for the outer trailing ring
  const springX = useSpring(mousePosition.x, { damping: 25, stiffness: 250 });
  const springY = useSpring(mousePosition.y, { damping: 25, stiffness: 250 });

  useEffect(() => {
    // Disable on touch / mobile devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      springX.set(e.clientX);
      springY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = Boolean(
          target.closest('a') ||
          target.closest('button') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('select') ||
          target.closest('[role="button"]') ||
          target.getAttribute('data-cursor') === 'pointer'
        );
        setIsPointer(isClickable);

        const isSpecialHover = Boolean(
          target.closest('[data-cursor-text]') ||
          target.closest('.group')
        );
        setIsHovered(isSpecialHover);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, springX, springY]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block">
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(214,180,136,0.8)]"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        animate={{
          scale: isPointer ? 0 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Outer Trailing Magnetic Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-primary/60 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center backdrop-blur-[1px]"
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          width: isPointer ? 48 : 28,
          height: isPointer ? 48 : 28,
          backgroundColor: isPointer ? 'rgba(214, 180, 136, 0.15)' : 'rgba(214, 180, 136, 0.02)',
          borderColor: isPointer ? 'rgba(214, 180, 136, 0.9)' : 'rgba(214, 180, 136, 0.4)',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 280 }}
      />
    </div>
  );
}
