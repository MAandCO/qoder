export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  category: 'compliance' | 'management' | 'tax' | 'specialist';
  icon: string;
  features: string[];
  benefits: string[];
  caseStudy: {
    title: string;
    description: string;
    result: string;
  };
  faqs: FAQ[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Location {
  name: string;
  slug: string;
  type: 'nation' | 'region' | 'county' | 'city' | 'borough';
  nation: string;
  region?: string;
  county?: string;
  parentSlug?: string;
  population?: number;
  lat?: number;
  lng?: number;
  postcodesSample?: string[];
  nearby: string[];
  serviceFocus: string[];
  localIndustries?: string[];
  economyDescription?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
  readingTime: number;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
  location?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  consent: boolean;
}

export interface TaxEstimatorInput {
  income: number;
  expenses: number;
  employmentType: 'employed' | 'self-employed' | 'company';
  personalAllowance?: number;
  pensionContributions?: number;
}

export interface TaxEstimatorResult {
  grossIncome: number;
  taxableIncome: number;
  incomeTax: number;
  nationalInsurance: number;
  totalTax: number;
  netIncome: number;
  taxRate: number;
}

export interface SchemaMarkup {
  '@context': string;
  '@type': string;
  [key: string]: string | number | object | undefined;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  phone: string;
  whatsapp?: string;
  email: string;
  consultationUrl?: string;
  address: {
    street: string;
    city: string;
    postcode: string;
    country: string;
  };
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
  };
  businessHours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
}