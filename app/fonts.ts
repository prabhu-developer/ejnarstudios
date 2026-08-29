import localFont from 'next/font/local';

export const androidFont = localFont({
  src: '../public/fonts/Android.ttf',
  variable: '--font-android',
  display: 'swap',
  fallback: ['Space Grotesk', 'Syne', 'sans-serif'],
});
