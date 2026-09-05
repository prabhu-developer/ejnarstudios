'use client';

import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export default function Logo({
  size = 'md',
  showText = true,
  className = '',
}: LogoProps) {
  const sizeMap = {
    sm: { width: 140, height: 32, maxH: 'max-h-8' },
    md: { width: 190, height: 42, maxH: 'max-h-10' },
    lg: { width: 250, height: 54, maxH: 'max-h-12' },
    xl: { width: 340, height: 72, maxH: 'max-h-16' },
  };

  const currentSize = sizeMap[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center group cursor-pointer select-none ${className}`}
      aria-label="Ejnar Studios  Home"
    >
      <div className="relative flex items-center transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/logo.svg"
          alt="Ejnar Studios "
          width={currentSize.width}
          height={currentSize.height}
          priority
          className={`object-contain w-auto ${currentSize.maxH} filter drop-shadow-[0_2px_12px_rgba(214,180,136,0.2)]`}
        />
      </div>
    </Link>
  );
}
