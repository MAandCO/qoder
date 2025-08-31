import { Service } from '@/types';

export const services: Service[] = [
  // Compliance & Core Accounting
  {
    id: 'bookkeeping',
    title: 'Bookkeeping Services',
    slug: 'bookkeeping',
    description: 'Professional bookkeeping services with automated transaction coding, bank reconciliations, CIS allocation, and HMRC MTD compliance for UK businesses.',
    metaTitle: 'Professional Bookkeeping Services | MA & CO Accountants',
    metaDescription: 'Expert bookkeeping services in Croydon. Automated coding, reconciliations, CIS, bank feeds & HMRC MTD compliance. Free consultation available.',
    category: 'compliance',
    icon: 'BookOpen',
    features: [
      'Automated transaction coding and categorisation',
      'Daily bank reconciliations with multi-bank support',
      'CIS allocation and subcontractor management',
      'Real-time bank feeds integration',
      'Digital receipt capture and processing',
      'VAT reconciliation and preparation',
      'Monthly management reporting',
      'HMRC Making Tax Digital compliance'
    ],
    benefits: [
      'Save 15+ hours per month on manual data entry',
      'Reduce errors by 95% with automated processes',
      'Real-time financial visibility',
      'HMRC compliant digital records',
      'Improved cash flow management'
    ],
    caseStudy: {
      title: 'Construction SME Transformation',
      description: 'A Croydon-based construction company struggling with CIS compliance and manual bookkeeping processes.',
      result: 'Reduced monthly bookkeeping time from 40 hours to 8 hours, achieved 100% HMRC MTD compliance, and improved cash flow visibility by implementing automated bank feeds and CIS management.'
    },
    faqs: [
      {
        question: 'What is HMRC Making Tax Digital compliance?',
        answer: 'MTD requires businesses to keep digital records and submit VAT returns using compatible software. We ensure your bookkeeping system meets all HMRC requirements.'
      },
      {
        question: 'How does automated transaction coding work?',
        answer: 'Our system uses AI and rules-based logic to categorise transactions automatically, learning from your business patterns to improve accuracy over time.'
      },
      {
        question: 'Do you support multiple bank accounts?',
        answer: 'Yes, we integrate with all major UK banks including traditional and digital banks like Monzo, Tide, and Mettle for real-time transaction feeds.'
      },
      {
        question: 'What is CIS and why is it important?',
        answer: 'Construction Industry Scheme (CIS) requires contractors to deduct tax from subcontractor payments. We handle all CIS calculations, allocations, and monthly returns.'
      }
    ]
  },
  {
    id: 'payroll',
    title: 'Payroll Services',
    slug: 'payroll',
    description: 'Complete payroll management including RTI submissions, auto-enrolment pensions, P45/P60 processing, and director payroll optimisation.',
    metaTitle: 'Payroll Services & RTI Submissions | MA & CO Accountants',
    metaDescription: 'Professional payroll services in Croydon. RTI submissions, auto-enrolment pensions, P45/P60 processing. HMRC compliant payroll management.',
    category: 'compliance',
    icon: 'Users',
    features: [
      'Monthly payroll processing and calculations',
      'Real Time Information (RTI) submissions to HMRC',
      'Auto-enrolment pension scheme management',
      'P45, P60, and P11D preparation',
      'Director payroll and dividend optimisation',
      'Statutory pay calculations (SSP, SMP, SPP)',
      'Year-end payroll reconciliation',
      'Employee self-service portal access'
    ],
    benefits: [
      'Ensure 100% HMRC compliance',
      'Reduce payroll processing time by 80%',
      'Optimise tax efficiency for directors',
      'Automated pension contributions',
      'Real-time payroll reporting'
    ],
    caseStudy: {
      title: 'Growing Tech Startup Success',
      description: 'A London tech startup with 25 employees needed scalable payroll solution with auto-enrolment compliance.',
      result: 'Implemented cloud-based payroll system, achieved 100% RTI compliance, saved £15,000 annually through salary/dividend optimisation, and reduced processing time from 2 days to 4 hours monthly.'
    },
    faqs: [
      {
        question: 'What is Real Time Information (RTI)?',
        answer: 'RTI requires employers to report payroll information to HMRC every time they pay employees. We handle all RTI submissions automatically.'
      },
      {
        question: 'How does auto-enrolment work?',
        answer: 'UK employers must automatically enrol eligible employees into a workplace pension. We manage the entire process including provider liaison and contribution calculations.'
      },
      {
        question: 'Can you optimise director remuneration?',
        answer: 'Yes, we analyse salary vs dividend combinations to minimise tax and National Insurance while maintaining compliance with IR35 and other regulations.'
      },
      {
        question: 'What statutory payments do you handle?',
        answer: 'We calculate and process all statutory payments including Sick Pay (SSP), Maternity Pay (SMP), Paternity Pay (SPP), and Shared Parental Pay.'
      }
    ]
  },
  {
    id: 'vat',
    title: 'VAT Services',
    slug: 'vat',
    description: 'Comprehensive VAT services including standard, flat rate, and partial exemption calculations with digital submissions via Making Tax Digital.',
    metaTitle: 'VAT Returns & MTD Compliance | MA & CO Accountants Croydon',
    metaDescription: 'Expert VAT services including returns, MTD compliance, flat rate scheme, partial exemption. Professional VAT advice for UK businesses.',
    category: 'compliance',
    icon: 'Receipt',
    features: [
      'Quarterly VAT return preparation and submission',
      'Making Tax Digital (MTD) compliance',
      'VAT registration and deregistration',
      'Flat Rate Scheme analysis and applications',
      'Partial exemption calculations',
      'VAT threshold monitoring',
      'European VAT (MOSS) returns',
      'VAT dispute and enquiry support'
    ],
    benefits: [
      'Ensure MTD compliance and avoid penalties',
      'Optimise VAT schemes for maximum benefit',
      'Timely submissions and cash flow planning',
      'Expert guidance on complex VAT issues',
      'Proactive threshold monitoring'
    ],
    caseStudy: {
      title: 'E-commerce VAT Optimisation',
      description: 'An online retailer was overpaying VAT and struggling with MTD compliance across multiple sales channels.',
      result: 'Migrated to Flat Rate Scheme saving £8,000 annually, implemented MTD-compliant software, and established automated VAT calculations reducing compliance time by 70%.'
    },
    faqs: [
      {
        question: 'When do I need to register for VAT?',
        answer: 'You must register for VAT if your turnover exceeds £85,000 in any 12-month period. We monitor your turnover and advise on optimal registration timing.'
      },
      {
        question: 'What is the VAT Flat Rate Scheme?',
        answer: 'The Flat Rate Scheme allows you to pay VAT as a percentage of turnover rather than the difference between input and output VAT, often resulting in savings.'
      },
      {
        question: 'How does MTD affect my VAT submissions?',
        answer: 'MTD requires digital record-keeping and online VAT return submission using compatible software. We ensure full compliance with MTD requirements.'
      },
      {
        question: 'What is partial exemption?',
        answer: 'If you make both taxable and exempt supplies, partial exemption rules determine how much input VAT you can recover. We handle all calculations.'
      }
    ]
  }
];