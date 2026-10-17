export type CategoryType = 
  | 'World Leaders'
  | 'Scientists & Inventors'
  | 'Literary Legends'
  | 'Philosophers';

export interface Author {
  name: string;
  role: string;
  credentials: string;
  avatar: string;
  bio: string;
}

export interface Milestone {
  year: string;
  event: string;
  significance: string;
  location?: string;
}

export interface BiographySection {
  id: string;
  heading: string;
  content: string[];
}

export interface ArchivalSource {
  title: string;
  institution: string;
  year?: string;
}

export interface Biography {
  id: string;
  slug: string;
  name: string;
  title: string;
  subtitle: string;
  era: string;
  dates: string;
  category: CategoryType;
  readTime: string;
  publishedDate: string;
  updatedDate: string;
  author: Author;
  excerpt: string;
  coverImage: string;
  featured?: boolean;
  trendingRank?: number;
  historicalQuote: string;
  quoteSource: string;
  keyMilestones: Milestone[];
  majorAchievements: string[];
  sections: BiographySection[];
  archivalSources: ArchivalSource[];
}

export type ViewTab = 
  | 'home'
  | 'post'
  | 'category'
  | 'about'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'disclaimer';
