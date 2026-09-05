import { BRAND } from '@/lib/constants';
import { getPageMetadata } from '@/lib/metadata.config';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata = getPageMetadata('home');
// Overriding title for the thank you page specifically
metadata.title = `Thank You — ${BRAND.name}`;
metadata.robots = { index: false, follow: false }; // Do not index the thank you page

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-dark flex flex-col items-center justify-center pt-24 pb-12 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-2xl w-full text-center relative z-10">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-primary/20 shadow-[0_0_50px_rgba(214,180,136,0.15)]">
          <CheckCircle2 className="w-10 h-10 text-primary" />
        </div>

        <h1 className="font-display font-black text-4xl sm:text-5xl text-cream mb-6 tracking-tight">
          Thank you for reaching out.
        </h1>

        <p className="text-lg text-muted mb-10 max-w-xl mx-auto leading-relaxed">
          We have received your inquiry. One of our digital strategists will review your request and get back to you within 24 hours.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-bold text-sm tracking-wider uppercase bg-white/5 border border-white/10 text-cream hover:bg-white/10 hover:border-white/20 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}
