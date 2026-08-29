export interface LogoTypeItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  examples: string;
  bestFor: string;
  iconName: string;
}

export const LOGO_TYPES: LogoTypeItem[] = [
  {
    id: 'wordmark',
    name: 'Word Mark (Logotype)',
    subtitle: 'Typographic Purity',
    description: 'Focuses entirely on a business name using bespoke, stylized typography without an accompanying icon. Perfect for memorable, punchy brand names.',
    examples: 'Google, Canon, Sony, Visa',
    bestFor: 'Companies with short, distinctive names seeking instant name recognition.',
    iconName: 'Type',
  },
  {
    id: 'pictorial',
    name: 'Pictorial Mark',
    subtitle: 'Visual Iconography',
    description: 'An iconic, graphic-based logo that uses a recognizable visual symbol to represent the brand identity.',
    examples: 'Apple, Twitter (Bird), Target, Nike (Swoosh)',
    bestFor: 'Established brands or companies wishing to communicate a powerful universal symbol.',
    iconName: 'Image',
  },
  {
    id: 'emblem',
    name: 'Emblem Logo',
    subtitle: 'Heritage & Crests',
    description: 'Encapsulates the company name and graphic inside a badge, seal, or crest for an authoritative, traditional, and prestigious look.',
    examples: 'Starbucks, Harley-Davidson, Porsche, Harvard',
    bestFor: 'Universities, automotive brands, luxury heritage labels, and craft beverage houses.',
    iconName: 'Shield',
  },
  {
    id: 'abstract',
    name: 'Abstract Mark',
    subtitle: 'Geometric Metaphor',
    description: 'A bespoke geometric form that expresses what your business does conceptually rather than literally, creating a truly unique brand asset.',
    examples: 'Pepsi, Adidas, BP, Airbnb',
    bestFor: 'Tech startups, global conglomerates, and forward-thinking modern innovators.',
    iconName: 'Compass',
  },
  {
    id: 'mascot',
    name: 'Mascot Logo',
    subtitle: 'Character Personification',
    description: 'Features an illustrated, friendly character that acts as the visual spokesperson and ambassador for the business.',
    examples: 'KFC (Colonel Sanders), Pringles, Mailchimp (Freddie)',
    bestFor: 'Family-friendly brands, food & beverage, sports franchises, and gaming products.',
    iconName: 'Smile',
  },
  {
    id: 'combination',
    name: 'Combination Mark',
    subtitle: 'Symbol + Typography',
    description: 'Combines a wordmark with a pictorial or abstract symbol, providing maximum versatility across all brand touchpoints.',
    examples: 'Lacoste, Burger King, Doritos, Rolex',
    bestFor: 'New ventures wanting both brand name clarity and an iconic standalone mark.',
    iconName: 'Layers',
  },
];
