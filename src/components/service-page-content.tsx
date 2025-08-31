import { Service } from '@/types';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';

interface ServicePageContentProps {
  service: Service;
}

// Service image mapping
const getServiceImage = (serviceSlug: string): string => {
  const imageMap: Record<string, string> = {
    'bookkeeping': '/images/Bookkeeping.jpeg',
    'payroll': '/images/Bookkeeping-VAT-Payroll .jpeg',
    'vat': '/images/Bookkeeping-VAT-Payroll .jpeg',
    'software-integration': '/images/office.jpeg',
    'statutory-accounts': '/images/audit.jpeg',
    'budgeting-forecasting': '/images/office.jpeg',
    'management-accounts': '/images/office.jpeg',
    'personal-tax': '/images/personal-tax.jpeg',
    'business-tax': '/images/tax.jpeg',
    'corporation-tax': '/images/tax1.jpeg',
    'capital-gains-tax': '/images/Capital Gains & Rental Income.jpeg',
    'inheritance-tax-estate-planning': '/images/iht.webp',
    'independent-examiner': '/images/audit-.jpeg',
    'forensic-accounting': '/images/audit.jpeg',
    'internal-audit': '/images/audit-.jpeg',
    'company-secretarial': '/images/Company-Formation.jpeg'
  };
  
  return imageMap[serviceSlug] || '/images/office.jpeg';
};

export function ServicePageContent({ service }: ServicePageContentProps) {
  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'compliance': return 'Compliance & Core Accounting';
      case 'management': return 'Management & Advisory';
      case 'tax': return 'Tax Strategy';
      case 'specialist': return 'Specialist Services';
      default: return 'Professional Services';
    }
  };

  // JSON-LD Schema Markup
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        postalCode: siteConfig.address.postcode,
        addressCountry: siteConfig.address.country
      },
      telephone: siteConfig.phone,
      email: siteConfig.email
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom'
    },
    serviceType: service.title,
    category: getCategoryTitle(service.category)
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="hover:text-foreground">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{service.title}</span>
        </nav>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="mb-4">
                <Badge variant="secondary" className="mb-4">
                  {getCategoryTitle(service.category)}
                </Badge>
              </div>
              <h1 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
                {service.title}
              </h1>
              <p className="mb-8 text-xl text-muted-foreground">
                {service.description}
              </p>
              
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href={`tel:${siteConfig.phone}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden">
                <Image
                  src={getServiceImage(service.slug)}
                  alt={`${service.title} - Professional accounting services`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Service Features */}
            <section>
              <h2 className="mb-6 text-2xl font-bold">What's Included</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section>
              <h2 className="mb-6 text-2xl font-bold">Key Benefits</h2>
              <div className="grid gap-4">
                {service.benefits.map((benefit, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Case Study */}
            <section>
              <h2 className="mb-6 text-2xl font-bold">Success Story</h2>
              <Card>
                <CardHeader>
                  <CardTitle>{service.caseStudy.title}</CardTitle>
                  <CardDescription>{service.caseStudy.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg bg-green-50 dark:bg-green-950 p-4">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Result:</h4>
                    <p className="text-green-700 dark:text-green-300">{service.caseStudy.result}</p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* FAQs */}
            <section>
              <h2 className="mb-6 text-2xl font-bold">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {service.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card>
              <CardHeader>
                <CardTitle>Ready to Get Started?</CardTitle>
                <CardDescription>
                  Book your free consultation today and discover how we can help your business.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" asChild>
                  <Link href="/contact">
                    Book Free Consultation
                  </Link>
                </Button>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <Link href={`tel:${siteConfig.phone}`} className="hover:text-primary">
                      {siteConfig.phone}
                    </Link>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <Link href={`mailto:${siteConfig.email}`} className="hover:text-primary">
                      {siteConfig.email}
                    </Link>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div>
                      <p>{siteConfig.address.street}</p>
                      <p>{siteConfig.address.city}, {siteConfig.address.postcode}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Services */}
            <Card>
              <CardHeader>
                <CardTitle>Related Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link href="/services/bookkeeping" className="block text-sm hover:text-primary">
                    Professional Bookkeeping
                  </Link>
                  <Link href="/services/payroll" className="block text-sm hover:text-primary">
                    Payroll Services
                  </Link>
                  <Link href="/services/vat" className="block text-sm hover:text-primary">
                    VAT Returns & Compliance
                  </Link>
                  <Link href="/services" className="block text-sm text-primary font-medium">
                    View All Services →
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="space-y-2">
                  <div className="text-lg font-semibold">AAT Licensed</div>
                  <div className="text-sm text-muted-foreground">Professional qualification and ongoing CPD</div>
                </div>
                <div className="space-y-2">
                  <div className="text-lg font-semibold">HMRC Recognised</div>
                  <div className="text-sm text-muted-foreground">Authorised agent for tax submissions</div>
                </div>
                <div className="space-y-2">
                  <div className="text-lg font-semibold">Insured Practice</div>
                  <div className="text-sm text-muted-foreground">Professional indemnity insurance</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}