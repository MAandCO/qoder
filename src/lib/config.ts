import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'MA & CO Accountants',
  description: 'Professional accountancy services in Croydon, UK. Expert bookkeeping, payroll, VAT, tax planning, and business advisory services for SMEs across the UK.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://macoaccountants.co.uk',
  phone: '020 8158 8499',
  whatsapp: '020 3890 1933',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@macoaccountants.co.uk',
  consultationUrl: 'https://calendly.com/maandcoaccountants-info/15-minute-free-consultation?month=2025-08',
  address: {
    street: 'Delamare Crescent',
    city: 'Croydon',
    postcode: 'CR0 2FL',
    country: 'United Kingdom'
  },
  socialLinks: {
    linkedin: 'https://www.linkedin.com/company/ma-co-accountants/',
    twitter: 'https://x.com/majed80898093',
    facebook: 'https://www.facebook.com/profile.php?id=100087637215976'
  },
  businessHours: {
    monday: '9:00 AM - 6:00 PM',
    tuesday: '9:00 AM - 6:00 PM',
    wednesday: '9:00 AM - 6:00 PM',
    thursday: '9:00 AM - 6:00 PM',
    friday: '9:00 AM - 5:00 PM',
    saturday: 'Closed',
    sunday: 'Closed'
  }
};