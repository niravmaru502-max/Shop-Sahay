
export type Language = 'en' | 'gu' | 'hi';

export interface NavItem {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  icon: string;
  link: string;
}

export interface Testimonial {
  name: string;
  shopName: string;
  text: Record<Language, string>;
  image: string;
}

export interface TeamMember {
  name: string;
  role: Record<Language, string>;
  bio: Record<Language, string>;
  image: string;
}

export interface FAQItem {
  question: Record<Language, string>;
  answer: Record<Language, string>;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
