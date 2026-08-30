'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles } from 'lucide-react';
import { sendContactMessage } from '@/lib/api/contact';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Please enter your full name (at least 2 characters)'),
  email: z.string().email('Please enter a valid email address'),
  mobile: z.string().min(8, 'Please enter a valid mobile number (at least 8 digits)'),
  message: z.string().min(5, 'Please provide brief project or inquiry details (at least 5 characters)'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export interface UnifiedContactFormProps {
  title?: string;
  subtitle?: string;
  defaultMessage?: string;
  defaultValues?: Partial<ContactFormData>;
  submitButtonText?: string;
  onSuccessCallback?: () => void;
  isInModal?: boolean;
}

export default function UnifiedContactForm({
  title = 'Tell Us About Your Project',
  subtitle = 'Discovery Form',
  defaultMessage = '',
  defaultValues,
  submitButtonText = 'Send Project Inquiry',
  onSuccessCallback,
  isInModal = false,
}: UnifiedContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: defaultValues?.name || '',
      email: defaultValues?.email || '',
      mobile: defaultValues?.mobile || '',
      message: defaultMessage || defaultValues?.message || '',
    },
  });

  // Sync defaultMessage if props change
  useEffect(() => {
    if (defaultMessage) {
      setValue('message', defaultMessage);
    }
  }, [defaultMessage, setValue]);

  const onSubmit = async (data: ContactFormData) => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    const result = await sendContactMessage({
      name: data.name,
      email: data.email,
      mobile: data.mobile,
      message: data.message,
    });

    setIsSubmitting(false);

    if (result.success) {
      setIsSuccess(true);
      reset({
        name: '',
        email: '',
        mobile: '',
        message: '',
      });

      // Confetti feedback
      if (typeof window !== 'undefined') {
        try {
          const confetti = (await import('canvas-confetti')).default;
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#d6b488', '#e8d0a8', '#ffffff', '#b8945f'],
          });
        } catch {
          // Ignore confetti error if unavailable
        }
      }

      if (onSuccessCallback) {
        setTimeout(() => {
          onSuccessCallback();
        }, 2200);
      }
    } else {
      setErrorMessage(result.message || 'Unable to deliver your message. Please try again.');
    }
  };

  return (
    <div className={`w-full ${isInModal ? '' : 'p-8 sm:p-10 rounded-3xl bg-dark-secondary/80 border border-primary/20 shadow-2xl'}`}>
      {(title || subtitle) && (
        <div className="mb-6">
          {subtitle && (
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-primary block mb-1">
              {subtitle}
            </span>
          )}
          {title && (
            <h3 className="font-display font-bold text-2xl text-cream">
              {title}
            </h3>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        {/* Name & Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-cream mb-2 uppercase tracking-wider pl-2">
              Full Name *
            </label>
            <input
              {...register('name')}
              type="text"
              disabled={isSubmitting}
              placeholder="e.g. Rahul Sharma"
              className="w-full bg-dark border border-white/10 rounded-full px-5 py-3.5 text-xs text-cream placeholder-muted/60 focus:outline-none focus:border-primary transition-all shadow-inner disabled:opacity-50 disabled:cursor-not-allowed"
            />
            {errors.name && (
              <p className="text-[11px] text-rose-400 mt-1.5 pl-3 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 shrink-0" />
                <span>{errors.name.message}</span>
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-cream mb-2 uppercase tracking-wider pl-2">
              Corporate / Personal Email *
            </label>
            <input
              {...register('email')}
              type="email"
              disabled={isSubmitting}
              placeholder="rahul@company.com"
              className="w-full bg-dark border border-white/10 rounded-full px-5 py-3.5 text-xs text-cream placeholder-muted/60 focus:outline-none focus:border-primary transition-all shadow-inner disabled:opacity-50 disabled:cursor-not-allowed"
            />
            {errors.email && (
              <p className="text-[11px] text-rose-400 mt-1.5 pl-3 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 shrink-0" />
                <span>{errors.email.message}</span>
              </p>
            )}
          </div>
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-xs font-semibold text-cream mb-2 uppercase tracking-wider pl-2">
            Mobile Number *
          </label>
          <input
            {...register('mobile')}
            type="tel"
            disabled={isSubmitting}
            placeholder="+91 90032 06449"
            className="w-full bg-dark border border-white/10 rounded-full px-5 py-3.5 text-xs text-cream placeholder-muted/60 focus:outline-none focus:border-primary transition-all shadow-inner disabled:opacity-50 disabled:cursor-not-allowed"
          />
          {errors.mobile && (
            <p className="text-[11px] text-rose-400 mt-1.5 pl-3 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.mobile.message}</span>
            </p>
          )}
        </div>

        {/* Project Message */}
        <div>
          <label className="block text-xs font-semibold text-cream mb-2 uppercase tracking-wider pl-2">
            Project Requirements & Inquiry Details *
          </label>
          <textarea
            {...register('message')}
            rows={isInModal ? 3 : 4}
            disabled={isSubmitting}
            placeholder="Briefly describe your requirements, timeline, or preferred services..."
            className="w-full bg-dark border border-white/10 rounded-3xl p-5 text-xs text-cream placeholder-muted/60 focus:outline-none focus:border-primary transition-all resize-none shadow-inner disabled:opacity-50 disabled:cursor-not-allowed"
          />
          {errors.message && (
            <p className="text-[11px] text-rose-400 mt-1.5 pl-3 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.message.message}</span>
            </p>
          )}
        </div>

        {/* Success Banner */}
        {isSuccess && (
          <div className="p-4 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 text-xs font-semibold flex items-center justify-center gap-2 text-center animate-in fade-in zoom-in-95 duration-300">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Thank you! Your inquiry has been sent to our studio. We will respond within 24 hours.</span>
          </div>
        )}

        {/* Error Banner */}
        {errorMessage && (
          <div className="p-4 rounded-full bg-rose-500/20 border border-rose-500 text-rose-400 text-xs font-semibold flex items-center justify-center gap-2 text-center animate-in fade-in zoom-in-95 duration-300">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 rounded-full bg-gold-gradient text-dark font-display font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg hover:shadow-[0_0_25px_rgba(214,180,136,0.5)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.01] active:scale-95 cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 text-dark animate-spin" />
              <span>Sending Inquiry via Mailer...</span>
            </>
          ) : (
            <>
              <span>{submitButtonText}</span>
              <Send className="w-4 h-4 text-dark" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
