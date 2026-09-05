import React from 'react';
import Link from 'next/link';
import AnimatedHeroBanner from '@/components/ui/AnimatedHeroBanner';
import CtaBanner from '@/components/sections/CtaBanner';
import { BRAND } from '@/lib/constants';
import { getPageMetadata } from '@/lib/metadata.config';
import {
  ShieldCheck,
  Lock,
  Eye,
  Database,
  FileText,
  UserCheck,
  Globe2,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

export const metadata = getPageMetadata('privacyPolicy');

export default function PrivacyPolicyPage() {
  const lastUpdated = 'August 30, 2026';

  const sections = [
    { id: 'introduction', title: '1. Introduction & Overview', icon: FileText },
    { id: 'collection', title: '2. Information We Collect', icon: Database },
    { id: 'how-collected', title: '3. How Information is Collected', icon: Eye },
    { id: 'usage', title: '4. How We Use Your Information', icon: UserCheck },
    { id: 'cookies', title: '5. Cookies & Tracking Technologies', icon: Lock },
    { id: 'third-parties', title: '6. Third-Party Services & APIs', icon: Globe2 },
    { id: 'sharing', title: '7. Data Sharing & Disclosure', icon: ShieldCheck },
    { id: 'security', title: '8. Data Storage & Security', icon: Lock },
    { id: 'retention', title: '9. Data Retention Periods', icon: Clock },
    { id: 'user-rights', title: '10. Your Rights & Data Deletion', icon: UserCheck },
    { id: 'children', title: '11. Children’s Privacy', icon: AlertCircle },
    { id: 'transfers', title: '12. International Data Transfers', icon: Globe2 },
    { id: 'updates', title: '13. Changes to this Privacy Policy', icon: FileText },
    { id: 'contact', title: '14. Contact ejnarstudios Compliance Team', icon: Mail },
  ];

  return (
    <div className="pt-28 bg-dark text-cream min-h-screen">
      {/* Animated Hero Banner */}
      <AnimatedHeroBanner
        badgeText="Legal & Transparency • Data Protection"
        headlinePrefix="ejnarstudios Privacy"
        highlightText="Policy & Framework."
        description={`At ${BRAND.name}, we hold privacy, client confidentiality, and data integrity as foundational tenets of our creative and engineering practice. Last Updated: ${lastUpdated}.`}
      />

      {/* Main Content Layout */}
      <section className="py-16 sm:py-24 px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Quick Navigation (Sticky on Desktop) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
            <div className="p-6 rounded-2xl bg-dark-secondary/80 border border-white/10 shadow-xl">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-primary block mb-4">
                Table of Contents
              </span>
              <nav className="space-y-1 text-xs">
                {sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="flex items-center gap-2.5 py-2 px-3 rounded-lg text-muted hover:text-cream hover:bg-white/5 transition-all"
                  >
                    <sec.icon className="w-3.5 h-3.5 text-primary/70 flex-shrink-0" />
                    <span className="truncate">{sec.title}</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Quick Contact Card */}
            <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20 space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary block">
                Privacy Inquiries
              </span>
              <p className="text-xs text-muted leading-relaxed">
                Have questions regarding your data or wish to exercise your rights? Reach our Data Protection Officer directly.
              </p>
              <a
                href={`mailto:${BRAND.contact.email}?subject=Privacy%20Inquiry`}
                className="inline-flex items-center gap-2 text-xs font-bold text-cream hover:text-primary transition-colors mt-2"
              >
                <Mail className="w-3.5 h-3.5 text-primary" />
                <span>{BRAND.contact.email}</span>
              </a>
            </div>
          </aside>

          {/* Right Column: Full Legal Documentation */}
          <article className="lg:col-span-8 space-y-12 text-muted leading-relaxed font-body text-sm sm:text-base">

            {/* 1. Introduction */}
            <div id="introduction" className="scroll-mt-36 p-8 rounded-2xl bg-dark-secondary/40 border border-white/5 space-y-4">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-cream flex items-center gap-3">
                <FileText className="w-6 h-6 text-primary flex-shrink-0" />
                <span>1. Introduction & Overview</span>
              </h2>
              <p>
                Welcome to <strong className="text-cream">{BRAND.name}</strong> (&ldquo;we,&rdquo; &ldquo;our,&rdquo; &ldquo;us,&rdquo; or the &ldquo;Studio&rdquo;). This Privacy Policy explains how we collect, use, disclose, and safeguard personal and commercial information when you visit our website (<strong className="text-cream">{BRAND.siteUrl}</strong>), interact with our project inquiry tools, purchase digital assets from our marketplace, apply for open positions, or engage our digital branding, engineering, and marketing services.
              </p>
              <p>
                We are committed to operating in full compliance with applicable Indian data protection laws, including the <strong className="text-cream">Information Technology Act, 2000</strong>, the <strong className="text-cream">Digital Personal Data Protection Act (DPDPA), 2023</strong>, and international standards such as the <strong className="text-cream">General Data Protection Regulation (GDPR)</strong> where applicable to international clients.
              </p>
            </div>

            {/* 2. Information We Collect */}
            <div id="collection" className="scroll-mt-36 p-8 rounded-2xl bg-dark-secondary/40 border border-white/5 space-y-4">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-cream flex items-center gap-3">
                <Database className="w-6 h-6 text-primary flex-shrink-0" />
                <span>2. Information We Collect</span>
              </h2>
              <p>
                We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about our studio services, requesting proposals, or communicating with our team:
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm pl-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong className="text-cream">Client Discovery & Proposal Inquiries:</strong> Full name, corporate or personal email address, direct phone/WhatsApp number, company name, project brief, estimated budget range, and desired delivery timeframe.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong className="text-cream">Career Applications:</strong> Full legal name, contact phone number, resume/curriculum vitae (CV), portfolio URLs (e.g. Behance, Dribbble, GitHub, Figma), employment history, and cover letter notes sent to <code>hr@ejnarstudios.com</code>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong className="text-cream">Marketplace Inquiries & Asset Licensing:</strong> Inquirer name, billing details, company GST/VAT identification (if applicable), and licensing tier requests.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong className="text-cream">Automated Device & Technical Data:</strong> IP address, browser type, operating system version, referring URL, time zone, pages visited, session duration, and device screen resolution.</span>
                </li>
              </ul>
            </div>

            {/* 3. How Information is Collected */}
            <div id="how-collected" className="scroll-mt-36 p-8 rounded-2xl bg-dark-secondary/40 border border-white/5 space-y-4">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-cream flex items-center gap-3">
                <Eye className="w-6 h-6 text-primary flex-shrink-0" />
                <span>3. How Information is Collected</span>
              </h2>
              <p>
                We collect information through the following transparent touchpoints:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-dark/60 border border-white/5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cream mb-1">Direct Interactions</h4>
                  <p className="text-xs text-muted">Submitted via unified contact forms, exploratory strategy popups, direct email threads, or scheduled telephone / Google Meet sessions.</p>
                </div>
                <div className="p-4 rounded-xl bg-dark/60 border border-white/5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cream mb-1">Automated Technologies</h4>
                  <p className="text-xs text-muted">Logged through secure server requests, performance telemetry, and privacy-conscious analytics tools upon loading our web pages.</p>
                </div>
              </div>
            </div>

            {/* 4. How We Use Information */}
            <div id="usage" className="scroll-mt-36 p-8 rounded-2xl bg-dark-secondary/40 border border-white/5 space-y-4">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-cream flex items-center gap-3">
                <UserCheck className="w-6 h-6 text-primary flex-shrink-0" />
                <span>4. How We Use Your Information</span>
              </h2>
              <p>We process collected data exclusively for legitimate business and client-service objectives:</p>
              <ul className="space-y-2 text-xs sm:text-sm pl-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>To formulate customized project proposals, technical architecture specifications, and commercial estimates.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>To execute contracts, deliverables, sprint reviews, and invoice settlements for contracted clients.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>To screen candidates for engineering, design, and marketing roles at our Chennai studio.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>To maintain system security, thwart fraudulent bots, and ensure 99.9% uptime across our web assets.</span>
                </li>
              </ul>
            </div>

            {/* 5. Cookies & Tracking */}
            <div id="cookies" className="scroll-mt-36 p-8 rounded-2xl bg-dark-secondary/40 border border-white/5 space-y-4">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-cream flex items-center gap-3">
                <Lock className="w-6 h-6 text-primary flex-shrink-0" />
                <span>5. Cookies & Tracking Technologies</span>
              </h2>
              <p>
                Our website utilizes essential session cookies and local storage tokens (such as <code>ejnar_lead_shown</code> and <code>ejnar_form_submitted</code>) to enhance navigation and avoid re-triggering discovery modals once dismissed or submitted.
              </p>
              <p>
                We do not deploy intrusive cross-site tracking cookies without user awareness. You can instruct your browser to decline all cookies or indicate when a cookie is being sent. However, certain dynamic interactive elements may require local state storage to function seamlessly.
              </p>
            </div>

            {/* 6. Third-Party Services & Integrations */}
            <div id="third-parties" className="scroll-mt-36 p-8 rounded-2xl bg-dark-secondary/40 border border-white/5 space-y-4">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-cream flex items-center gap-3">
                <Globe2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span>6. Third-Party Services & APIs</span>
              </h2>
              <p>
                To provide enterprise-grade performance and reliability, we interface with vetted third-party services:
              </p>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-dark/80 border border-white/5">
                  <strong className="text-cream block mb-1">Transactional Mailer Dispatch API:</strong>
                  <span>Our contact forms relay data over encrypted HTTPS POST to our internal mailer endpoint (<code>https://ejnarstudios.com/ej-mailer/api/send-mail</code>) for prompt notification to our account directors.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-dark/80 border border-white/5">
                  <strong className="text-cream block mb-1">Infrastructure & Cloud Hosting:</strong>
                  <span>High-speed content distribution, DNS resolution, and DDoS mitigation powered by global cloud edge networks (e.g. AWS / Vercel / Cloudflare).</span>
                </div>
                <div className="p-3.5 rounded-xl bg-dark/80 border border-white/5">
                  <strong className="text-cream block mb-1">Direct Telephony & WhatsApp API:</strong>
                  <span>Instant client communication links directly open verified official channels (<code>{BRAND.contact.mobile}</code> / <code>{BRAND.contact.hotline}</code>).</span>
                </div>
              </div>
            </div>

            {/* 7. Data Sharing & Disclosure */}
            <div id="sharing" className="scroll-mt-36 p-8 rounded-2xl bg-dark-secondary/40 border border-white/5 space-y-4">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-cream flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0" />
                <span>7. Data Sharing & Disclosure</span>
              </h2>
              <p className="text-cream font-medium">
                We strictly DO NOT sell, rent, monetize, or trade your personal or business data to third-party advertisers or brokers under any circumstances.
              </p>
              <p>
                Disclosure may occur strictly under the following limited conditions:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm pl-2">
                <li>• <strong className="text-cream">Direct Legal Compulsion:</strong> If required by valid court order, governmental statute, or law enforcement jurisdiction in India.</li>
                <li>• <strong className="text-cream">Vetted Technical Contractors:</strong> Cloud database and security architects under strict non-disclosure agreements (NDAs) bound to the same confidentiality standards.</li>
              </ul>
            </div>

            {/* 8. Data Storage & Security */}
            <div id="security" className="scroll-mt-36 p-8 rounded-2xl bg-dark-secondary/40 border border-white/5 space-y-4">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-cream flex items-center gap-3">
                <Lock className="w-6 h-6 text-primary flex-shrink-0" />
                <span>8. Data Storage & Security</span>
              </h2>
              <p>
                We employ industry-standard administrative, technical, and physical security safeguards to prevent unauthorized access, loss, or alteration of data.
              </p>
              <p>
                All data transmission between your browser and our servers is secured via <strong className="text-cream">TLS 1.3 / 256-bit SSL encryption</strong>. Access to inquiry databases and client project repositories is restricted on a strict least-privilege basis to authorized executive personnel.
              </p>
            </div>

            {/* 9. Data Retention */}
            <div id="retention" className="scroll-mt-36 p-8 rounded-2xl bg-dark-secondary/40 border border-white/5 space-y-4">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-cream flex items-center gap-3">
                <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                <span>9. Data Retention Periods</span>
              </h2>
              <p>
                We retain client inquiry and communication logs only as long as necessary to fulfill the purposes outlined in this Privacy Policy:
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm pl-2">
                <li>• <strong className="text-cream">Project Inquiries & Proposals:</strong> Retained for 24 months to facilitate follow-up consultations.</li>
                <li>• <strong className="text-cream">Contracted Client Records & Financial Invoices:</strong> Retained for 7 years to comply with Indian statutory taxation and audit guidelines.</li>
                <li>• <strong className="text-cream">Unsuccessful Job Applications:</strong> Retained for 12 months for prospective future openings before permanent deletion.</li>
              </ul>
            </div>

            {/* 10. User Rights & Data Deletion */}
            <div id="user-rights" className="scroll-mt-36 p-8 rounded-2xl bg-dark-secondary/40 border border-white/5 space-y-4">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-cream flex items-center gap-3">
                <UserCheck className="w-6 h-6 text-primary flex-shrink-0" />
                <span>10. Your Rights & Data Deletion</span>
              </h2>
              <p>
                Regardless of your geographic location, you maintain full control over your personal data:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm pl-2">
                <li>• <strong className="text-cream">Right to Access & Rectify:</strong> You may request a copy of the personal information we hold about you or request corrections.</li>
                <li>• <strong className="text-cream">Right to Erasure (&ldquo;Right to be Forgotten&rdquo;):</strong> You may request complete purging of your personal records and past inquiry history from our operational databases.</li>
                <li>• <strong className="text-cream">Right to Withdraw Consent:</strong> You may opt out of future agency dispatches or project newsletters at any time.</li>
              </ul>
              <p className="pt-2">
                To submit a deletion or access request, email our compliance team at <a href={`mailto:${BRAND.contact.email}`} className="text-primary hover:underline font-semibold">{BRAND.contact.email}</a> with the subject line <em>&ldquo;Data Subject Rights Request.&rdquo;</em>
              </p>
            </div>

            {/* 11. Children's Privacy */}
            <div id="children" className="scroll-mt-36 p-8 rounded-2xl bg-dark-secondary/40 border border-white/5 space-y-4">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-cream flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span>11. Children’s Privacy</span>
              </h2>
              <p>
                Our services, website, and commercial products are strictly tailored for business enterprises, professionals, and individuals aged 18 and older. We do not knowingly solicit or collect data from minors.
              </p>
            </div>

            {/* 12. International Transfers */}
            <div id="transfers" className="scroll-mt-36 p-8 rounded-2xl bg-dark-secondary/40 border border-white/5 space-y-4">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-cream flex items-center gap-3">
                <Globe2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span>12. International Data Transfers</span>
              </h2>
              <p>
                If you access our website from outside India (such as the United States, United Kingdom, UAE, Singapore, or European Union), your information may be processed in and transferred to secure cloud nodes located in India and globally distributed AWS/Cloudflare data centers adhering to Standard Contractual Clauses (SCCs).
              </p>
            </div>

            {/* 13. Changes to Policy */}
            <div id="updates" className="scroll-mt-36 p-8 rounded-2xl bg-dark-secondary/40 border border-white/5 space-y-4">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-cream flex items-center gap-3">
                <FileText className="w-6 h-6 text-primary flex-shrink-0" />
                <span>13. Changes to this Privacy Policy</span>
              </h2>
              <p>
                We reserve the right to periodically update this Privacy Policy to reflect technical, operational, or legal developments. Material updates will be published on this page with a revised &ldquo;Last Updated&rdquo; date.
              </p>
            </div>

            {/* 14. Contact Studio Compliance */}
            <div id="contact" className="scroll-mt-36 p-8 rounded-2xl bg-dark-secondary border border-primary/30 space-y-6">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-cream flex items-center gap-3">
                <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                <span>14. Contact ejnarstudios Compliance Team</span>
              </h2>
              <p>
                For questions, clarifications, or data rights requests, please contact our administrative headquarters:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-cream block font-display text-sm mb-0.5">Corporate Headquarters</strong>
                    <span>{BRAND.name}<br />{BRAND.address.street}, Perungudi, India | Buckinghamshire, UK | Texas, USA - {BRAND.address.postalCode}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-cream block font-display text-sm mb-0.5">Direct Telephony</strong>
                    <p>Phone: <a href={`tel:${BRAND.contact.mobileRaw}`} className="text-primary hover:underline">{BRAND.contact.mobile}</a></p>
                    <p>Hotline: <a href={`tel:${BRAND.contact.hotlineRaw}`} className="text-primary hover:underline">{BRAND.contact.hotline}</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-cream block font-display text-sm mb-0.5">Electronic Inquiries</strong>
                    <a href={`mailto:${BRAND.contact.email}`} className="text-primary hover:underline">{BRAND.contact.email}</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <UserCheck className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-cream block font-display text-sm mb-0.5">ejnarstudios Founder</strong>
                    <span>{BRAND.founder}</span>
                  </div>
                </div>
              </div>
            </div>

          </article>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
