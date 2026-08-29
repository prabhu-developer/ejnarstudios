export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: string;
  categoryTag: 'E-commerce' | 'Web Development' | 'Mobile App' | 'Branding' | 'Custom Solutions';
  year: string;
  description: string;
  deliverables: string[];
  metrics?: { value: string; label: string }[];
  image: string;
  featured: boolean;
  testimonial?: { quote: string; author: string; role: string };
  link?: string;
}

export const PORTFOLIO_DATA: ProjectItem[] = [
  {
    id: 'vacation-feast',
    slug: 'vacation-feast',
    title: 'Vacation Feast',
    client: 'Vacation Feast Holidays Pvt Ltd',
    category: 'Travel & Tourism Portal',
    categoryTag: 'Web Development',
    year: '2023',
    description: 'An immersive, ultra-responsive holiday booking and travel itinerary web platform with dynamic package search and booking engine.',
    deliverables: ['Custom Web Architecture', 'Travel Package Engine', 'SEO & Speed Optimization', 'Mobile-first UI/UX'],
    metrics: [
      { value: '3.4x', label: 'Booking Conversion Lift' },
      { value: '0.6s', label: 'Page Load Speed' },
      { value: '120K+', label: 'Monthly Visitors' },
    ],
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    testimonial: {
      quote: 'EJNARSTUDIOS transformed our travel portal into a lightning-fast experience. Our direct bookings surged by over 200%.',
      author: 'Karthik Raja',
      role: 'Founder, Vacation Feast',
    },
  },
  {
    id: 'dimah-fashions',
    slug: 'dimah-fashions',
    title: 'DimahFashions',
    client: 'Dimah Fashions Couture',
    category: 'Luxury Fashion E-commerce',
    categoryTag: 'E-commerce',
    year: '2023',
    description: 'A haute couture digital flagship featuring high-resolution lookbooks, dynamic sizing guides, and zero-friction mobile checkout.',
    deliverables: ['Custom Storefront', 'Payment Gateway Integration', 'Product Lookbook', 'Editorial Design'],
    metrics: [
      { value: '4.8x', label: 'Mobile Checkout Rate' },
      { value: '42%', label: 'Repeat Customer Ratio' },
      { value: '₹1.8Cr+', label: 'Annual Online GMV' },
    ],
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    testimonial: {
      quote: 'The aesthetic precision EJNARSTUDIOS brought to DimahFashions matched our luxury design standards perfectly.',
      author: 'Amina Fathima',
      role: 'Creative Director, Dimah Fashions',
    },
  },
  {
    id: 'jucoholic',
    slug: 'jucoholic',
    title: 'Jucoholic',
    client: 'Jucoholic Lifestyle Goods',
    category: 'Sustainable Jute/Cotton Bags E-Commerce',
    categoryTag: 'E-commerce',
    year: '2022',
    description: 'A modern sustainable goods e-commerce store with custom bulk-order configurators, custom bag customizers, and international logistics.',
    deliverables: ['E-Commerce Platform', 'Bulk Order Configurator', 'Brand Identity', 'WhatsApp Cart Sync'],
    metrics: [
      { value: '85K+', label: 'Eco Bags Sold' },
      { value: '99.4%', label: 'Order Accuracy Rate' },
      { value: '65%', label: 'WhatsApp Order Capture' },
    ],
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80',
    featured: true,
  },
  {
    id: 'byaddi',
    slug: 'byaddi',
    title: 'byaddi',
    client: 'byaddi Food & Refreshment Tech',
    category: 'Mobile Ordering & Loyalty Application',
    categoryTag: 'Mobile App',
    year: '2022',
    description: 'An agile iOS & Android mobile application delivering instant ordering, digital wallet payments, and real-time order tracking.',
    deliverables: ['iOS & Android App', 'Real-time Kitchen Display System', 'Loyalty Rewards Engine', 'Push Notification Flow'],
    metrics: [
      { value: '45K+', label: 'Active App Downloads' },
      { value: '4.9★', label: 'App Store Rating' },
      { value: '18min', label: 'Average Delivery Fulfillment' },
    ],
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80',
    featured: true,
  },
  {
    id: 'ctw',
    slug: 'ctw',
    title: 'CTW Business Solutions',
    client: 'CTW Enterprise Hub',
    category: 'Corporate Web Architecture & Client Portal',
    categoryTag: 'Custom Solutions',
    year: '2022',
    description: 'A sophisticated enterprise web presence with secured client extranet, automated document generation, and service ticketing.',
    deliverables: ['Corporate Web Architecture', 'Secured Client Portal', 'Workflow Automation', 'Brand Collateral'],
    metrics: [
      { value: '60%', label: 'Reduction in Support Tickets' },
      { value: '100%', label: 'Paperless Onboarding' },
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    featured: false,
  },
  {
    id: 'mangal-creation',
    slug: 'mangal-creation',
    title: 'Mangal Creation',
    client: 'Mangal Creation Workwear Pvt Ltd',
    category: 'Corporate Workwear & Uniform Manufacturing',
    categoryTag: 'Branding',
    year: '2021',
    description: 'Complete digital brand modernization, B2B wholesale quotation catalog, and high-impact visual corporate identity system.',
    deliverables: ['Brand Identity Overhaul', 'B2B Digital Catalog', 'Product Photography Art Direction', 'Corporate Video Shoot'],
    metrics: [
      { value: '150+', label: 'Corporate Clients Onboarded' },
      { value: '500K+', label: 'Garments Manufactured Annually' },
    ],
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80',
    featured: false,
  },
];
