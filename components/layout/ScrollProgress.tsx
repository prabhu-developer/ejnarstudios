'use client';

import React, { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setProgress((totalScroll / windowHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[9998] bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-primary-dark via-primary to-primary-light transition-all duration-75 ease-out shadow-[0_0_12px_rgba(214,180,136,0.8)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
