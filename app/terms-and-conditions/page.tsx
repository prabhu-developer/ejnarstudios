import CtaBanner from '@/components/sections/CtaBanner';
import AnimatedHeroBanner from '@/components/ui/AnimatedHeroBanner';
import { BRAND } from '@/lib/constants';
import { getPageMetadata } from '@/lib/metadata.config';
import {
  AlertTriangle,
  Building,
  CheckCircle2,
  Code,
  CreditCard,
  FileCheck,
  HelpCircle,
  Layers,
  Lock,
  Mail,
  MapPin,
  Phone,
  Scale,
  Shield,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';

export const metadata = getPageMetadata('termsAndConditions');

export default function TermsAndConditionsPage() {
  const lastUpdated = 'August 30, 2026';

  const sections = [
    { id: 'acceptance', title: '1. Acceptance of Terms', icon: FileCheck },
    { id: 'eligibility', title: '2. Eligibility & Capacity', icon: Building },
    { id: 'scope-services', title: '3. Scope of Ejnar Studios  Services', icon: Layers },
    { id: 'proposals-sow', title: '4. Estimates & Statement of Work', icon: Scale },
    { id: 'ip-ownership', title: '5. Intellectual Property & Ownership', icon: Code },
    { id: 'client-obligations', title: '6. Client Responsibilities & Materials', icon: Shield },
    { id: 'marketplace-licenses', title: '7. Marketplace & Asset Licensing', icon: Sparkles },
    { id: 'fees-payments', title: '8. Fees, Invoicing & Retainers', icon: CreditCard },
    { id: 'revisions-scope', title: '9. Revisions & Scope Amendments', icon: Layers },
    { id: 'third-party-deps', title: '10. Third-Party Hosting & APIs', icon: Lock },
    { id: 'warranties-sla', title: '11. Warranties & Bug Fix SLAs', icon: CheckCircle2 },
    { id: 'liability', title: '12. Limitation of Liability', icon: AlertTriangle },
    { id: 'confidentiality', title: '13. Confidentiality & NDAs', icon: Lock },
    { id: 'termination', title: '14. Termination & Project Cancellation', icon: HelpCircle },
    { id: 'governing-law', title: '15. Governing Law & Jurisdiction', icon: Scale },
    { id: 'contact-notices', title: '16. Ejnar Studios  Legal Inquiries', icon: Mail },
  ];

  return (
    <div className="pt-28 bg-dark text-cream min-h-screen">
      {/* Animated Hero Banner */}
      <AnimatedHeroBanner
        badgeText="Legal & Service Agreement • Terms of Business"
        headlinePrefix="Ejnar Studios  Terms &"
        highlightText="Conditions of Service."
        description={`These Terms govern all project contracts, software deployments, design deliverables, and marketplace assets provided by ${BRAND.name}. Last Updated: ${lastUpdated}.`}
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

            {/* Client Advisory Callout */}
            <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20 space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary block">
                Contract Inquiries
              </span>
              <p className="text-xs text-muted leading-relaxed">
                Need a custom Master Services Agreement (MSA) or enterprise SLA signed? Connect directly with our contracts team.
              </p>
              <a
                href={`mailto:${BRAND.contact.email}?subject=Contract%20Inquiry`}
                className="inline-flex items-center gap-2 text-xs font-bold text-cream hover:text-primary transition-colors mt-2"
              >
                <Mail className="w-3.5 h-3.5 text-primary" />
                <span>{BRAND.contact.email}</span>
              </a>
            </div>
          </aside>

          {/* Right Column: Full Legal Documentation */}
          <article className="lg:col-span-8 space-y-12 text-muted leading-relaxed font-body text-sm sm:text-base">

            {/* 1. Acceptance */}
            <div id="acceptance" className="scroll-mt-36 p-8 rounded-2xl bg-dark-secondary/40 border border-white/5 space-y-4">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-cream flex items-center gap-3">
                <FileCheck className="w-6 h-6 text-primary flex-shrink-0" />
                <span>1. Acceptance of Terms</span>
              </h2>
              <p>
                By visiting or accessing <strong className="text-cream">{BRAND.siteUrl}</strong>, submitting a project discovery inquiry, purchasing turnkey digital assets from our marketplace, or signing a formal Statement of Work (SOW) with <strong className="text-cream">{BRAND.name}</strong> (&ldquo;Agency,&rdquo; &ldquo;Studio,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), you (&ldquo;Client,&rdquo; &ldquo;User,&rdquo; or &ldquo;Licensee&rdquo;) agree to be bound by these Terms and Conditions.
              </p>
              <p>
                If you are entering into this agreement on behalf of a company, corporate entity, or organization, you represent and warrant that you possess full legal authority to bind that entity to these Terms.
              </p>
            </div>

            {/* 2. Eligibility */}
            <div id="eligibility" className="scroll-mt-36 p-8 rounded-2xl bg-dark-secondary/40 border border-white/5 space-y-4">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-cream flex items-center gap-3">
                <Building className="w-6 h-6 text-primary flex-shrink-0" />
                <span>2. Eligibility & Legal Capacity</span>
              </h2>
              <p>
                You must be at least 18 years of age and legally competent to enter into binding contracts under Indian law (including the Indian Contract Act, 1872) or the applicable laws in your home jurisdiction.
              </p>
            </div>

            {/* 3. Scope of Studio Services */}
            <div id="scope-services" className="scroll-mt-36 p-8 rounded-2xl bg-dark-secondary/40 border border-white/5 space-y-4">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-cream flex items-center gap-3">
                <Layers className="w-6 h-6 text-primary flex-shrink-0" />
                <span>3. Scope of Ejnar Studios  Services</span>
              </h2>
              <p>
                {BRAND.name} delivers professional creative, software engineering, and digital growth services across four dedicated agency divisions:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm pl-2">
                <li>• <strong className="text-cream">Engineering & Development:</strong> Next.js custom web architectures, cross-platform mobile apps (React Native, Flutter, Expo), custom SaaS portals, e-commerce stores, and desktop retail POS billing & ERP software engineered in Electron JS.</li>
                <li>• <strong className="text-cream">Branding & Visual Design:</strong> Bespoke corporate logo suites across 6 typologies, brand identity manuals, UI/UX design systems, luxury stationery, and promotional marketing collateral.</li>
                <li>• <strong className="text-cream">Performance Marketing & Growth:</strong> High-ROAS Google Search/Shopping & Meta Ads, technical SEO/SMO audits, monthly social media content management, and creator influencer partnerships.</li>
                <li>• <strong className="text-cream">Cinema Video Production:</strong> Commercial shoots, 4K multi-cam filming, DaVinci Resolve DI color grading, 3D CGI product renders, and motion graphics.</li>
              </ul>
            </div>

            {/* 4. Proposals & SOW */}
            <div id="proposals-sow" className="scroll-mt-36 p-8 rounded-2xl bg-dark-secondary/40 border border-white/5 space-y-4">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-cream flex items-center gap-3">
                <Scale className="w-6 h-6 text-primary flex-shrink-0" />
                <span>4. Project Proposals & Statement of Work</span>
              </h2>
              <p>
                Each custom project engagement is governed by a written Statement of Work (SOW), Proposal, or Service Agreement detailing the specific scope, technical deliverables, milestone deadlines, and fee schedule. In the event of any conflict between these general Terms and an executed SOW, the specific terms of the executed SOW shall prevail.
              </p>
              <p>
                Quotations and proposals remain valid for thirty (30) calendar days from the date of issuance unless explicitly stated otherwise in writing.
              </p>
            </div>

            {/* 5. Intellectual Property & Ownership */}
            <div id="ip-ownership" className="scroll-mt-36 p-8 rounded-2xl bg-dark-secondary/40 border border-white/5 space-y-4">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-cream flex items-center gap-3">
                <Code className="w-6 h-6 text-primary flex-shrink-0" />
                <span>5. Intellectual Property & Ownership</span>
              </h2>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-dark/70 border border-primary/20">
                  <strong className="text-cream block mb-1">Transfer of Final Deliverables:</strong>
                  <span>Upon receipt of <strong className="text-primary">100% full and final payment</strong> for all contracted milestone invoices, {BRAND.name} unconditionally transfers to the Client all exclusive intellectual property rights, copyrights, vector master files, and custom source code created specifically for that project.</span>
                </div>
                <div className="p-4 rounded-xl bg-dark/70 border border-white/5">
                  <strong className="text-cream block mb-1">Studio Pre-Existing IP & Frameworks:</strong>
                  <span>{BRAND.name} retains ownership of all pre-existing design components, proprietary algorithms, boilerplates, and developer toolkits incorporated into the deliverables. The Client is granted an irrevocable, perpetual, royalty-free, non-exclusive license to utilize such components within the delivered solution.</span>
                </div>
                <div className="p-4 rounded-xl bg-dark/70 border border-white/5">
                  <strong className="text-cream block mb-1">Portfolio & Case Study Showcase Rights:</strong>
                  <span>Unless expressly prohibited in a signed Non-Disclosure Agreement (NDA), {BRAND.name} retains the standard commercial right to showcase completed project designs, live URLs, and non-confidential case study metrics across our agency portfolio, marketing reels, and awards submissions.</span>
                </div>
              </div>
            </div>

            {/* 6. Client Responsibilities */}
            <div id="client-obligations" className="scroll-mt-36 p-8 rounded-2xl bg-dark-secondary/40 border border-white/5 space-y-4">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-cream flex items-center gap-3">
                <Shield className="w-6 h-6 text-primary flex-shrink-0" />
                <span>6. Client Responsibilities & Materials</span>
              </h2>
              <p>To ensure on-time milestone delivery, the Client agrees to:</p>
              <ul className="space-y-2 text-xs sm:text-sm pl-2">
                <li>• Provide brand assets, text copy, high-resolution imagery, and third-party API credentials promptly according to the agreed project schedule.</li>
                <li>• Designate an authorized project decision-maker to review and approve deliverables during sprint feedback windows.</li>
                <li>• Warrant that all client-supplied assets, trademarks, and content do not infringe upon any third-party copyright or intellectual property rights.</li>
              </ul>
            </div>

            {/* 7. Marketplace Licensing */}
            <div id="marketplace-licenses" className="scroll-mt-36 p-8 rounded-2xl bg-dark-secondary/40 border border-white/5 space-y-4">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-cream flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-primary flex-shrink-0" />
                <span>7. Digital Marketplace Asset Licensing</span>
              </h2>
              <p>
                Digital products acquired through our Marketplace (<Link href="/marketplace" className="text-primary hover:underline font-semibold">Ejnar Studios .com/marketplace</Link>) are subject to specific licensing guidelines:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                <div className="p-4 rounded-xl bg-dark/60 border border-white/5">
                  <strong className="text-cream block mb-1 uppercase tracking-wider">Permitted Usage</strong>
                  <p className="text-muted">You may use the acquired Figma templates, pitch decks, and brand kits for your own single business entity or your direct client projects.</p>
                </div>
                <div className="p-4 rounded-xl bg-dark/60 border border-white/5">
                  <strong className="text-cream block mb-1 uppercase tracking-wider">Prohibited Actions</strong>
                  <p className="text-muted">You may NOT resell, redistribute, sub-license, or upload the source files to template marketplaces or open repositories as standalone assets.</p>
                </div>
              </div>
            </div>

            {/* 8. Fees & Retainers */}
            <div id="fees-payments" className="scroll-mt-36 p-8 rounded-2xl bg-dark-secondary/40 border border-white/5 space-y-4">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-cream flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-primary flex-shrink-0" />
                <span>8. Fees, Invoicing & Retainers</span>
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm pl-2">
                <li>• <strong className="text-cream">Payment Milestones:</strong> Standard development projects operate on a milestone schedule (e.g. 50% initiation advance, 25% staging milestone, 25% pre-deployment release).</li>
                <li>• <strong className="text-cream">Monthly Retainers:</strong> Digital marketing, SEO, and monthly social media retainers are invoiced at the beginning of each billing month on a prepaid cycle.</li>
                <li>• <strong className="text-cream">Taxes & Levies:</strong> Invoices are subject to statutory Goods and Services Tax (GST) in India (currently 18%) or applicable foreign transaction remittances.</li>
                <li>• <strong className="text-cream">Late Invoices:</strong> Overdue balances exceeding 15 business days may result in temporary suspension of active sprint development or staging server access until resolved.</li>
              </ul>
            </div>

            {/* 9. Revisions & Scope Changes */}
            <div id="revisions-scope" className="scroll-mt-36 p-8 rounded-2xl bg-dark-secondary/40 border border-white/5 space-y-4">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-cream flex items-center gap-3">
                <Layers className="w-6 h-6 text-primary flex-shrink-0" />
                <span>9. Revisions & Scope Amendments</span>
              </h2>
              <p>
                Each project proposal includes a predefined number of iterative review rounds (typically 2–3 structured revisions per milestone phase).
              </p>
              <p>
                Any requests for additional features, third-party integrations, or structural architectural overhauls not detailed in the original Statement of Work will be quoted separately under a formal written Change Order with adjusted timeline estimates.
              </p>
            </div>

            {/* 10. Third-Party Dependencies */}
            <div id="third-party-deps" className="scroll-mt-36 p-8 rounded-2xl bg-dark-secondary/40 border border-white/5 space-y-4">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-cream flex items-center gap-3">
                <Lock className="w-6 h-6 text-primary flex-shrink-0" />
                <span>10. Third-Party Hosting & APIs</span>
              </h2>
              <p>
                The Client is responsible for maintaining all external accounts and ongoing subscriptions required for project execution, including domain registration, cloud hosting (AWS, Vercel), payment gateway merchant accounts (Razorpay, Stripe), SMS/WhatsApp API gateways, and commercial font licenses.
              </p>
              <p>
                {BRAND.name} is not liable for disruptions, pricing adjustments, or downtime originating from third-party cloud service providers.
              </p>
            </div>

            {/* 11. Warranties & SLAs */}
            <div id="warranties-sla" className="scroll-mt-36 p-8 rounded-2xl bg-dark-secondary/40 border border-white/5 space-y-4">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-cream flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span>11. Warranties & Post-Launch SLAs</span>
              </h2>
              <p>
                {BRAND.name} provides a complimentary <strong className="text-cream">30-day post-launch warranty period</strong> following production go-live, covering resolution of reproducible software defects or functional bugs related to contracted code.
              </p>
              <p className="text-xs text-muted">
                *Warranty does not cover bugs introduced by unauthorized client code modifications, server environmental migrations, or breaking changes in third-party API specifications.
              </p>
            </div>

            {/* 12. Limitation of Liability */}
            <div id="liability" className="scroll-mt-36 p-8 rounded-2xl bg-dark-secondary/40 border border-white/5 space-y-4">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-cream flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0" />
                <span>12. Limitation of Liability</span>
              </h2>
              <p>
                To the maximum extent permitted under applicable law, {BRAND.name}, its directors, engineers, and affiliates shall not be liable for any indirect, incidental, consequential, special, or punitive damages, including loss of revenue, business interruption, or data corruption.
              </p>
              <p>
                The Studio&rsquo;s cumulative aggregate liability for all claims arising out of or related to an engagement shall not exceed the total fees paid by the Client to {BRAND.name} under the specific Statement of Work in the preceding three (3) months.
              </p>
            </div>

            {/* 13. Confidentiality */}
            <div id="confidentiality" className="scroll-mt-36 p-8 rounded-2xl bg-dark-secondary/40 border border-white/5 space-y-4">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-cream flex items-center gap-3">
                <Lock className="w-6 h-6 text-primary flex-shrink-0" />
                <span>13. Confidentiality & Non-Disclosure</span>
              </h2>
              <p>
                Both parties agree to protect and maintain the confidentiality of all proprietary business information, source code, product roadmaps, commercial data, and customer records disclosed during the course of the engagement with the same degree of care as their own confidential information.
              </p>
            </div>

            {/* 14. Termination */}
            <div id="termination" className="scroll-mt-36 p-8 rounded-2xl bg-dark-secondary/40 border border-white/5 space-y-4">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-cream flex items-center gap-3">
                <HelpCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span>14. Termination & Project Cancellation</span>
              </h2>
              <p>
                Either party may terminate an ongoing project engagement upon fifteen (15) days written notice in the event of material breach by the other party that remains uncured after notice.
              </p>
              <p>
                Upon early termination by the Client without breach by the Studio, the Client agrees to settle payment for all completed sprint hours and deliverables rendered up to the effective date of termination.
              </p>
            </div>

            {/* 15. Governing Law */}
            <div id="governing-law" className="scroll-mt-36 p-8 rounded-2xl bg-dark-secondary/40 border border-white/5 space-y-4">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-cream flex items-center gap-3">
                <Scale className="w-6 h-6 text-primary flex-shrink-0" />
                <span>15. Governing Law & Jurisdiction</span>
              </h2>
              <p>
                These Terms and any individual project agreements shall be governed by and construed in accordance with the substantive laws of the <strong className="text-cream">Republic of India</strong>.
              </p>
              <p>
                The competent courts located in <strong className="text-cream">Chennai, Tamil Nadu, India</strong> shall possess exclusive jurisdiction to adjudicate any legal disputes or proceedings arising hereunder.
              </p>
            </div>

            {/* 16. Studio Legal Inquiries */}
            <div id="contact-notices" className="scroll-mt-36 p-8 rounded-2xl bg-dark-secondary border border-primary/30 space-y-6">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-cream flex items-center gap-3">
                <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                <span>16. Ejnar Studios  Legal Inquiries & Official Notices</span>
              </h2>
              <p>
                All legal notices and contractual communications should be served in writing to our registered corporate office:
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
                    <strong className="text-cream block font-display text-sm mb-0.5">Official Legal Desk</strong>
                    <a href={`mailto:${BRAND.contact.email}`} className="text-primary hover:underline">{BRAND.contact.email}</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-cream block font-display text-sm mb-0.5">Managing Ejnar Studios  Founder</strong>
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
