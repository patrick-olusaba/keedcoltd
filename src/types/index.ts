export interface NavItem {
  label: string;
  href: string;
  cta?: boolean;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface Industry {
  icon: string;
  name: string;
  description: string;
}

export interface Client {
  name: string;
  logo: string;
}

export interface Service {
  icon: string;
  name: string;
  description: string;
  href: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
  image?: string;
}

export interface IncludedItem {
  title: string;
  description: string;
}

export interface ServicePageData {
  badge: string;
  heroTitleLine1: string;
  heroTitleLine2: string;
  heroSubtitle: string;
  heroBg: string;
  benefitsTitle: string;
  benefitsLead: string;
  benefits: ServiceBenefit[];
  includedTitle: string;
  includedLead?: string;
  included: IncludedItem[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export type PageId =
  | 'home'
  | 'managed-it'
  | 'electrical-cctv'
  | 'cybersecurity'
  | 'backup-recovery'
  | 'it-consultancy'
  | 'custom-software'
  | 'about-us'
  | 'our-work'
  | 'get-started'
  | 'terms-of-use';
