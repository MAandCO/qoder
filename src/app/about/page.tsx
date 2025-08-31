import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { siteConfig } from '@/lib/config';
import { ArrowRight, Award, Users, Target, Shield, CheckCircle, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About MA & CO Accountants | Professional Accounting Firm Croydon',
  description: 'Learn about MA & CO Accountants - AAT qualified accounting professionals serving SMEs across the UK. Our history, values, and commitment to excellence.',
};

const team = [
  {
    name: 'Michael Anderson',
    role: 'Managing Director & Senior Accountant',
    qualifications: ['AAT Licensed Member', 'ACCA Part Qualified', 'BSc Accounting & Finance'],
    experience: '15+ years',
    specialties: ['Tax Planning', 'Business Advisory', 'HMRC Compliance']
  },
  {
    name: 'Sarah Collins',
    role: 'Senior Accountant',
    qualifications: ['AAT Licensed Member', 'Sage Certified', 'Xero Certified'],
    experience: '12+ years',
    specialties: ['Bookkeeping', 'Payroll', 'VAT Returns']
  },
  {
    name: 'David Martinez',
    role: 'Tax Specialist',
    qualifications: ['ATT', 'AAT Licensed Member', 'R&D Tax Credits Specialist'],
    experience: '10+ years',
    specialties: ['Corporation Tax', 'R&D Claims', 'Capital Gains Tax']
  }
];

const qualifications = [
  {
    name: 'AAT Licensed',
    description: 'Association of Accounting Technicians licensed practice',
    icon: Award
  },
  {
    name: 'Professional Indemnity',
    description: '£2M professional indemnity insurance coverage',
    icon: Shield
  },
  {
    name: 'HMRC Recognised',
    description: 'Authorised agent for HMRC submissions',
    icon: CheckCircle
  },
  {
    name: 'Continuous CPD',
    description: 'Ongoing professional development and training',
    icon: Star
  }
];

const values = [
  {
    title: 'Professional Excellence',
    description: 'We maintain the highest professional standards in all our work, ensuring accuracy, compliance, and attention to detail.',
    icon: Award
  },
  {
    title: 'Client-Focused Service',
    description: 'Your success is our priority. We provide personal, responsive service tailored to your unique business needs.',
    icon: Users
  },
  {
    title: 'Integrity & Trust',
    description: 'We build lasting relationships based on trust, transparency, and ethical business practices.',
    icon: Shield
  },
  {
    title: 'Innovation & Efficiency',
    description: 'We embrace modern technology and best practices to deliver efficient, streamlined accounting solutions.',
    icon: Target
  }
];

const milestones = [
  {
    year: '2015',
    title: 'Founded',
    description: 'MA & CO Accountants established in Croydon with a vision to provide personal, professional accounting services to SMEs.'
  },
  {
    year: '2017',
    title: 'AAT Licensed',
    description: 'Achieved AAT Licensed Practice status, demonstrating our commitment to professional standards and ongoing development.'
  },
  {
    year: '2019',
    title: 'Digital Transformation',
    description: 'Fully adopted cloud-based accounting solutions and HMRC Making Tax Digital compliance for all clients.'
  },
  {
    year: '2021',
    title: 'Team Expansion',
    description: 'Expanded our team of qualified accountants to better serve our growing client base across the UK.'
  },
  {
    year: '2023',
    title: 'Specialist Services',
    description: 'Launched specialist services including R&D tax credits, forensic accounting, and independent examination.'
  },
  {
    year: '2024',
    title: '500+ Clients',
    description: 'Reached milestone of serving over 500 businesses across the UK with comprehensive accounting solutions.'
  }
];

export default function AboutPage() {
  // Professional Service Schema
  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.name,
    description: 'Professional accounting services for UK businesses. AAT qualified accountants providing bookkeeping, payroll, VAT, and tax planning services.',
    url: `${siteConfig.url}/about`,
    image: `${siteConfig.url}/images/Professional Credentials .jpg`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.postcode,
      addressCountry: siteConfig.address.country
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom'
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'AAT Licensed Practice',
        credentialCategory: 'Professional License',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Association of Accounting Technicians'
        }
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Professional Indemnity Insurance',
        credentialCategory: 'Insurance Coverage',
        about: '£2M professional indemnity insurance coverage'
      }
    ],
    member: [
      {
        '@type': 'Person',
        name: 'Michael Anderson',
        jobTitle: 'Managing Director & Senior Accountant',
        hasCredential: 'AAT Licensed Member'
      },
      {
        '@type': 'Person',
        name: 'Sarah Collins',
        jobTitle: 'Senior Accountant',
        hasCredential: 'AAT Licensed Member'
      },
      {
        '@type': 'Person',
        name: 'David Martinez',
        jobTitle: 'Tax Specialist',
        hasCredential: 'ATT & AAT Licensed Member'
      }
    ],
    foundingDate: '2015',
    slogan: 'Professional accounting services you can trust'
  };

  // Organization Schema for About page
  const aboutOrganizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    description: 'Founded in 2015, MA & CO Accountants provides professional accounting services to over 500 UK businesses.',
    foundingDate: '2015',
    founder: {
      '@type': 'Person',
      name: 'Michael Anderson'
    },
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: '10-20'
    },
    awards: [
      'AAT Licensed Practice Status',
      'Professional Indemnity Insurance Certified',
      'HMRC Recognised Agent'
    ],
    knowsAbout: [
      'Bookkeeping',
      'Payroll Services',
      'VAT Returns',
      'Tax Planning',
      'HMRC Making Tax Digital',
      'R&D Tax Credits',
      'Corporation Tax',
      'Self Assessment'
    ]
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutOrganizationSchema) }}
      />
    <div className="container py-8">
      {/* Hero Section */}
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          About MA & CO Accountants
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Professional accounting services you can trust. We're a team of qualified accountants 
          dedicated to helping UK businesses thrive through expert financial guidance and support.
        </p>
      </div>

      {/* Our Story */}
      <section className="mb-16">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2015, MA & CO Accountants began with a simple mission: to provide 
                high-quality, personal accounting services to small and medium-sized businesses 
                across the UK. What started as a small practice in Croydon has grown into a 
                trusted partner for over 500 businesses nationwide.
              </p>
              <p>
                We recognised that many SMEs were underserved by traditional accounting firms - 
                either paying too much for basic services or receiving impersonal service from 
                large corporate practices. Our approach combines the personal touch of a local 
                firm with the expertise and technology of a modern accounting practice.
              </p>
              <p>
                Today, we're proud to be an AAT Licensed Practice, offering comprehensive 
                accounting services from our base in Croydon while serving clients across 
                England, Scotland, Wales, and Northern Ireland through our advanced cloud-based systems.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden">
              <Image
                src="/images/Professional Credentials .jpg"
                alt="Professional accounting credentials and qualifications"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These core values guide everything we do and shape how we serve our clients.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                  <value.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Our Team */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our qualified accountants bring decades of combined experience and expertise to serve your business.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <CardTitle className="text-center">{member.name}</CardTitle>
                <CardDescription className="text-center">{member.role}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Experience</h4>
                  <p className="text-sm text-muted-foreground">{member.experience}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Qualifications</h4>
                  <div className="space-y-1">
                    {member.qualifications.map((qual, i) => (
                      <Badge key={i} variant="secondary" className="text-xs mr-1 mb-1">
                        {qual}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Specialties</h4>
                  <div className="flex flex-wrap gap-1">
                    {member.specialties.map((specialty, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Qualifications & Memberships */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Qualifications & Memberships</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We maintain the highest professional standards through ongoing qualification and membership of professional bodies.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {qualifications.map((qual, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <qual.icon className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">{qual.name}</h3>
                <p className="text-sm text-muted-foreground">{qual.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Our Journey */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Key milestones in our growth and development as a leading accounting practice.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border lg:left-1/2 lg:-translate-x-px"></div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 w-3 h-3 bg-primary rounded-full lg:left-1/2 lg:-translate-x-1/2"></div>
                
                <Card className={`ml-12 lg:ml-0 lg:w-5/12 ${index % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{milestone.year}</Badge>
                    </div>
                    <CardTitle>{milestone.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Work With Us?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Join over 500 businesses who trust MA & CO Accountants with their financial future. 
          Get started with a free consultation today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">
              Get Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/services">
              View Our Services
            </Link>
          </Button>
        </div>
      </section>
    </div>
    </>
  );
}