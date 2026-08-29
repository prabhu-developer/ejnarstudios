export interface AwardItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  category: string;
}

export const AWARDS_DATA: AwardItem[] = [
  {
    year: '2023',
    title: 'National Excellence Award',
    organization: 'National Industry Forum',
    description: 'Recognized for pioneering digital craftsmanship and high-performance web engineering standards in India.',
    category: 'Agency Excellence',
  },
  {
    year: '2023',
    title: 'Innovative Businessman Award',
    organization: 'Business Outreach Magazine',
    description: 'Awarded to leadership for visionary agency architecture and transformative client growth funnels.',
    category: 'Leadership & Innovation',
  },
  {
    year: '2022',
    title: 'The Drum Awards — Best Agency',
    organization: 'The Drum Global Marketing Awards',
    description: 'Nominated and awarded for outstanding ROI-driven multi-channel digital campaigns and brand design.',
    category: 'Digital Strategy',
  },
  {
    year: '2021',
    title: 'Social Media Partner',
    organization: 'Indian Women Foundation',
    description: 'Honored for spearheading high-impact social awareness campaigns and digital media amplification.',
    category: 'Impact & Community',
  },
  {
    year: '2019',
    title: 'Zoho Your Story Feature',
    organization: 'Zoho Corporation & YourStory',
    description: 'Featured as one of the fastest emerging full-suite creative design and tech development agencies in South India.',
    category: 'Enterprise Spotlight',
  },
  {
    year: '2018',
    title: 'AI-Summit Manufacturing, Robotics & Automation',
    organization: 'Global AI Summit',
    description: 'Recognized for early research and interactive visual engineering in automation workflows.',
    category: 'Technology Pioneer',
  },
];
