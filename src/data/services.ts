import { Service } from '@/types';

export const services: Service[] = [
  // Compliance & Core Accounting Services
  {
    id: 'bookkeeping',
    title: 'Bookkeeping Services',
    slug: 'bookkeeping',
    description: 'Professional bookkeeping with automated coding, CIS allocation, and HMRC MTD compliance.',
    metaTitle: 'Professional Bookkeeping Services | MA & CO Accountants',
    metaDescription: 'Expert bookkeeping services in Croydon. Automated coding, reconciliations, CIS, bank feeds & HMRC MTD compliance.',
    category: 'compliance',
    icon: 'BookOpen',
    features: ['Automated transaction coding', 'Bank reconciliations', 'CIS allocation', 'Real-time bank feeds', 'Digital receipts', 'VAT reconciliation', 'Management reporting', 'HMRC MTD compliance'],
    benefits: ['Save 15+ hours monthly', 'Reduce errors by 95%', 'Real-time visibility', 'HMRC compliance', 'Better cash flow'],
    caseStudy: { title: 'Construction SME Success', description: 'Croydon construction company with CIS compliance issues.', result: 'Reduced bookkeeping from 40 to 8 hours monthly, achieved 100% MTD compliance.' },
    faqs: [
      { question: 'What is HMRC Making Tax Digital?', answer: 'MTD requires digital records and VAT submissions via compatible software.' },
      { question: 'How does automated coding work?', answer: 'AI and rules-based logic categorise transactions automatically.' }
    ]
  },
  {
    id: 'payroll',
    title: 'Payroll Services',
    slug: 'payroll',
    description: 'Complete payroll management with RTI submissions and auto-enrolment pensions.',
    metaTitle: 'Payroll Services & RTI Submissions | MA & CO Accountants',
    metaDescription: 'Professional payroll services. RTI submissions, auto-enrolment pensions, P45/P60 processing.',
    category: 'compliance',
    icon: 'Users',
    features: ['Monthly payroll processing', 'RTI submissions', 'Auto-enrolment pensions', 'P45/P60 preparation', 'Director optimisation', 'Statutory payments', 'Year-end reconciliation', 'Employee portal'],
    benefits: ['100% HMRC compliance', '80% time reduction', 'Tax optimisation', 'Automated pensions', 'Real-time reporting'],
    caseStudy: { title: 'Tech Startup Growth', description: 'London startup needed scalable payroll solution.', result: 'Saved £15,000 annually through optimisation, reduced processing from 2 days to 4 hours.' },
    faqs: [
      { question: 'What is RTI?', answer: 'Real Time Information requires payroll reporting to HMRC with each payment.' },
      { question: 'How does auto-enrolment work?', answer: 'Automatic enrollment of eligible employees into workplace pensions.' }
    ]
  },
  {
    id: 'vat',
    title: 'VAT Services',
    slug: 'vat',
    description: 'Comprehensive VAT services with MTD compliance and scheme optimisation.',
    metaTitle: 'VAT Returns & MTD Compliance | MA & CO Accountants',
    metaDescription: 'Expert VAT services including returns, MTD compliance, flat rate scheme analysis.',
    category: 'compliance',
    icon: 'Receipt',
    features: ['VAT returns', 'MTD compliance', 'Registration services', 'Flat Rate Scheme', 'Partial exemption', 'Threshold monitoring', 'European VAT', 'Dispute support'],
    benefits: ['MTD compliance', 'Scheme optimisation', 'Timely submissions', 'Expert guidance', 'Proactive monitoring'],
    caseStudy: { title: 'E-commerce Optimisation', description: 'Online retailer overpaying VAT with MTD issues.', result: 'Flat Rate Scheme saved £8,000 annually, 70% compliance time reduction.' },
    faqs: [
      { question: 'When to register for VAT?', answer: 'Registration required when turnover exceeds £85,000 in 12 months.' },
      { question: 'What is Flat Rate Scheme?', answer: 'Pay VAT as percentage of turnover, often resulting in savings.' }
    ]
  },
  {
    id: 'software-integration',
    title: 'Software Integration',
    slug: 'software-integration',
    description: 'Expert setup of Xero, FreeAgent, QuickBooks with bank integration.',
    metaTitle: 'Accounting Software Integration | Xero, FreeAgent, QuickBooks',
    metaDescription: 'Professional setup of accounting software with bank integration and automation.',
    category: 'compliance',
    icon: 'Settings',
    features: ['FreeAgent setup', 'Xero implementation', 'QuickBooks config', 'Bank integration', 'Receipt automation', 'Invoice automation', 'Data sync', 'Custom reporting'],
    benefits: ['Streamlined processes', '90% less data entry', 'Real-time insights', 'Better accuracy', 'Enhanced productivity'],
    caseStudy: { title: 'Digital Transformation', description: 'Manufacturing business modernising accounting.', result: 'Reduced month-end from 10 to 2 days with improved accuracy.' },
    faqs: [
      { question: 'Which software is best?', answer: 'We assess needs to recommend Xero, FreeAgent, or QuickBooks.' },
      { question: 'Implementation timeline?', answer: 'Typically 2-4 weeks including setup, migration, and training.' }
    ]
  },
  {
    id: 'statutory-accounts',
    title: 'Statutory Accounts',
    slug: 'statutory-accounts',
    description: 'Companies House filing with iXBRL tagging and year-end compliance.',
    metaTitle: 'Statutory Accounts & Companies House Filing | MA & CO',
    metaDescription: 'Professional statutory accounts, Companies House filing, iXBRL tagging.',
    category: 'compliance',
    icon: 'FileText',
    features: ['Annual accounts', 'Companies House filing', 'Corporation Tax returns', 'iXBRL tagging', 'Micro-entity accounts', 'Dormant accounts', 'Group accounts', 'Audit coordination'],
    benefits: ['Meet deadlines', 'Avoid penalties', 'iXBRL compliance', 'Accurate computations', 'Audit support'],
    caseStudy: { title: 'Group Structure', description: 'Property group with multiple subsidiaries.', result: 'Consolidated accounts with £25,000 tax savings through planning.' },
    faqs: [
      { question: 'Filing deadlines?', answer: '9 months for Companies House, 12 months for HMRC.' },
      { question: 'What is iXBRL?', answer: 'Machine-readable format required for all UK company accounts.' }
    ]
  },

  // Management & Advisory Services
  {
    id: 'budgeting-forecasting',
    title: 'Budgeting & Forecasting',
    slug: 'budgeting-forecasting',
    description: 'Strategic planning with rolling forecasts and cash flow modelling.',
    metaTitle: 'Business Budgeting & Financial Forecasting | MA & CO',
    metaDescription: 'Professional budgeting, forecasting, cash flow modelling for strategic planning.',
    category: 'management',
    icon: 'TrendingUp',
    features: ['Annual budgets', 'Rolling forecasts', 'Cash flow modelling', 'Scenario planning', 'Variance reporting', 'KPI tracking', 'Investment appraisal', 'Strategic support'],
    benefits: ['Financial control', 'Cash flow management', 'Data-driven decisions', 'Investor confidence', 'Proactive planning'],
    caseStudy: { title: 'SaaS Scaling', description: 'Growing software company needing forecasting for fundraising.', result: 'Enabled successful £2M Series A with 3-year financial model.' },
    faqs: [
      { question: 'Forecast frequency?', answer: 'Monthly rolling forecasts for growing businesses.' },
      { question: 'What is scenario planning?', answer: 'Modelling best/worst/likely cases for informed decisions.' }
    ]
  },
  {
    id: 'management-accounts',
    title: 'Management Accounts',
    slug: 'management-accounts',
    description: 'Monthly reporting with KPI dashboards and board-level insights.',
    metaTitle: 'Management Accounts & KPI Reporting | MA & CO',
    metaDescription: 'Professional management accounts, KPI dashboards, board reporting.',
    category: 'management',
    icon: 'BarChart3',
    features: ['Monthly accounts', 'Board packs', 'KPI dashboards', 'P&L analysis', 'Balance sheet review', 'Cash flow analysis', 'Profitability reporting', 'Benchmarking'],
    benefits: ['Timely insights', 'Early trend identification', 'Operational efficiency', 'Better governance', 'Stakeholder communication'],
    caseStudy: { title: 'Restaurant Turnaround', description: 'Restaurant chain with profitability issues.', result: '25% profitability improvement within 6 months.' },
    faqs: [
      { question: 'Delivery timeline?', answer: '5-7 working days after month-end.' },
      { question: 'KPI recommendations?', answer: 'Revenue growth, margins, cash conversion, acquisition costs.' }
    ]
  },

  // Tax Strategy Services
  {
    id: 'personal-tax',
    title: 'Personal Tax',
    slug: 'personal-tax',
    description: 'Self Assessment and personal tax optimisation with reliefs.',
    metaTitle: 'Personal Tax & Self Assessment | MA & CO Croydon',
    metaDescription: 'Expert personal tax services, Self Assessment, allowances, reliefs.',
    category: 'tax',
    icon: 'User',
    features: ['Self Assessment', 'Personal allowances', 'Employment expenses', 'Capital allowances', 'Marriage allowance', 'SEIS/EIS reliefs', 'Pension planning', 'Rental income'],
    benefits: ['Maximise reliefs', 'Accurate filing', 'Minimise liability', 'HMRC correspondence', 'Strategic planning'],
    caseStudy: { title: 'Executive Optimisation', description: 'Senior executive with multiple income sources.', result: '£15,000 annual tax reduction through restructuring.' },
    faqs: [
      { question: 'Need Self Assessment?', answer: 'Required if self-employed, rental income, or earn over £100k.' },
      { question: 'Marriage allowance?', answer: 'Transfer up to £1,260 allowance, saving £252 annually.' }
    ]
  },
  {
    id: 'business-tax',
    title: 'Business Tax',
    slug: 'business-tax',
    description: 'R&D tax credits, AIA planning, and business tax optimisation.',
    metaTitle: 'Business Tax Planning & R&D Credits | MA & CO',
    metaDescription: 'Expert business tax services, R&D credits, AIA planning, creative reliefs.',
    category: 'tax',
    icon: 'Building',
    features: ['Tax planning', 'R&D credits', 'AIA planning', 'Creative reliefs', 'Capital allowances', 'Loss relief', 'Transfer pricing', 'International tax'],
    benefits: ['Maximise reliefs', 'Reduce tax rates', 'Improve cash flow', 'Ensure compliance', 'Strategic planning'],
    caseStudy: { title: 'Tech R&D Success', description: 'Software company unaware of R&D opportunities.', result: '£54,000 in tax credits from £180,000 qualifying activities.' },
    faqs: [
      { question: 'R&D qualifications?', answer: 'Projects seeking advances in science or technology.' },
      { question: 'AIA allowance?', answer: '100% tax relief on equipment up to £1 million annually.' }
    ]
  },
  {
    id: 'corporation-tax',
    title: 'Corporation Tax',
    slug: 'corporation-tax',
    description: 'CT600 filing and dividend vs salary optimisation.',
    metaTitle: 'Corporation Tax Planning & CT600 Filing | MA & CO',
    metaDescription: 'Professional corporation tax services, CT600 filing, dividend optimisation.',
    category: 'tax',
    icon: 'TrendingUp',
    features: ['CT600 returns', 'Tax planning', 'Dividend optimisation', 'Group relief', 'CFC rules', 'Restructuring', 'Shareholding exemption', 'Quarterly payments'],
    benefits: ['Minimise tax liability', 'Optimise remuneration', 'Ensure compliance', 'Strategic structuring', 'HMRC liaison'],
    caseStudy: { title: 'Corporate Restructure', description: 'Business restructuring across multiple companies.', result: '15% tax rate reduction with simplified compliance.' },
    faqs: [
      { question: 'Corporation Tax due date?', answer: '9 months and 1 day after accounting period end.' },
      { question: 'Salary/dividend optimisation?', answer: 'We model scenarios for most tax-efficient approach.' }
    ]
  },
  {
    id: 'capital-gains-tax',
    title: 'Capital Gains Tax',
    slug: 'capital-gains-tax',
    description: 'CGT planning for property and business disposals with BADR.',
    metaTitle: 'Capital Gains Tax Planning & BADR | MA & CO',
    metaDescription: 'Expert CGT advice, property disposals, Business Asset Disposal Relief.',
    category: 'tax',
    icon: 'TrendingUp',
    features: ['CGT calculations', 'Business Asset Disposal Relief', 'Property planning', 'Share disposals', 'PPR relief', 'Rollover relief', 'Portfolio planning', 'Timing optimisation'],
    benefits: ['Minimise CGT', 'Maximise reliefs', 'Strategic timing', 'Portfolio efficiency', 'Valuation support'],
    caseStudy: { title: 'Business Sale', description: 'Business owner planning company sale.', result: '£250,000 CGT saving through BADR structuring.' },
    faqs: [
      { question: 'Business Asset Disposal Relief?', answer: '10% CGT rate on qualifying disposals up to £1M lifetime.' },
      { question: 'CGT deferral options?', answer: 'Rollover relief and EIS/SEIS investments available.' }
    ]
  },
  {
    id: 'inheritance-tax',
    title: 'Inheritance Tax',
    slug: 'inheritance-tax-estate-planning',
    description: 'Estate planning with trusts and succession strategies.',
    metaTitle: 'Inheritance Tax Planning & Estate Planning | MA & CO',
    metaDescription: 'Expert inheritance tax planning, trusts, succession planning.',
    category: 'tax',
    icon: 'Shield',
    features: ['IHT planning', 'Trust establishment', 'Lifetime gifts', 'Family companies', 'Succession planning', 'Will trusts', 'Property reliefs', 'Gift programmes'],
    benefits: ['Minimise IHT', 'Preserve wealth', 'Structured succession', 'Tax-efficient transfer', 'Trust administration'],
    caseStudy: { title: 'Multi-Generational Planning', description: 'Family business with £5M estate needing succession.', result: '£1.6M projected IHT saving with maintained control.' },
    faqs: [
      { question: 'IHT threshold?', answer: '£325,000 plus £175,000 residence allowance for direct descendants.' },
      { question: 'Family investment companies?', answer: 'Hold investments allowing growth to accrue to younger generations.' }
    ]
  },

  // Specialist Services
  {
    id: 'independent-examiner',
    title: 'Independent Examiner',
    slug: 'independent-examiner',
    description: 'Independent examination for charities and societies.',
    metaTitle: 'Independent Examiner Services | Charity Accounts | MA & CO',
    metaDescription: 'Professional independent examination for charities and societies.',
    category: 'specialist',
    icon: 'Shield',
    features: ['Charity examinations', 'Society accounts', 'Charities Act compliance', 'SORP application', 'Trustee training', 'Commission liaison', 'Grant compliance', 'Risk assessment'],
    benefits: ['Regulatory compliance', 'Sector expertise', 'Trustee confidence', 'Stakeholder assurance', 'Risk mitigation'],
    caseStudy: { title: 'Educational Charity', description: 'Growing charity needing compliance guidance.', result: 'Comprehensive examination with improved controls and compliance framework.' },
    faqs: [
      { question: 'Independent examination?', answer: 'Lighter review than audit for charities £25k-£1M income.' },
      { question: 'SORP compliance?', answer: 'Recommended practice ensuring true charity financial position.' }
    ]
  },
  {
    id: 'forensic-accounting',
    title: 'Forensic Accounting',
    slug: 'forensic-accounting',
    description: 'Fraud investigations and litigation support services.',
    metaTitle: 'Forensic Accounting & Fraud Investigation | MA & CO',
    metaDescription: 'Professional forensic accounting, fraud investigations, litigation support.',
    category: 'specialist',
    icon: 'Search',
    features: ['Fraud investigations', 'Litigation support', 'Dispute resolution', 'Asset tracing', 'Expert witness', 'Financial analysis', 'Compliance reviews', 'Risk assessment'],
    benefits: ['Professional investigation', 'Court-ready reports', 'Expert testimony', 'Risk identification', 'Recovery assistance'],
    caseStudy: { title: 'Commercial Dispute', description: 'Partnership dispute requiring financial investigation.', result: 'Uncovered £200,000 discrepancy leading to successful resolution.' },
    faqs: [
      { question: 'When need forensic accounting?', answer: 'Suspected fraud, disputes, litigation, or due diligence.' },
      { question: 'Expert witness services?', answer: 'Court testimony and professional opinions on financial matters.' }
    ]
  },
  {
    id: 'internal-audit',
    title: 'Internal Audit',
    slug: 'internal-audit',
    description: 'Risk management and internal controls review.',
    metaTitle: 'Internal Audit & Risk Management | MA & CO Accountants',
    metaDescription: 'Professional internal audit services, risk management, compliance reviews.',
    category: 'specialist',
    icon: 'Shield',
    features: ['Risk assessment', 'Internal controls', 'Compliance reviews', 'Process improvement', 'Audit planning', 'Control testing', 'Reporting', 'Follow-up reviews'],
    benefits: ['Risk mitigation', 'Improved controls', 'Compliance assurance', 'Process efficiency', 'Stakeholder confidence'],
    caseStudy: { title: 'Growing Business', description: 'Scaling company needing robust internal controls.', result: 'Implemented control framework reducing operational risks by 60%.' },
    faqs: [
      { question: 'Internal audit purpose?', answer: 'Independent assessment of risk management and internal controls.' },
      { question: 'Audit frequency?', answer: 'Typically annual or biannual depending on risk profile.' }
    ]
  },
  {
    id: 'company-secretarial',
    title: 'Company Secretarial',
    slug: 'company-secretarial',
    description: 'Companies House compliance and company secretarial services.',
    metaTitle: 'Company Secretarial Services | MA & CO Accountants',
    metaDescription: 'Professional company secretarial services, Companies House compliance.',
    category: 'specialist',
    icon: 'Building',
    features: ['Confirmation statements', 'PSC registers', 'Share transfers', 'Director appointments', 'Registered office', 'Statutory books', 'TCSP compliance', 'Annual reviews'],
    benefits: ['Full compliance', 'Statutory obligations', 'Corporate governance', 'Administrative efficiency', 'Professional service'],
    caseStudy: { title: 'Multi-Company Group', description: 'Group with complex shareholding structure.', result: 'Streamlined compliance across 12 companies with automated processes.' },
    faqs: [
      { question: 'Confirmation statement?', answer: 'Annual filing confirming company details to Companies House.' },
      { question: 'PSC register?', answer: 'Record of people with significant control over the company.' }
    ]
  }
];