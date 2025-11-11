import { Location } from '@/types';
import { services } from '@/data/services';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { parseLocationsCSV } from '@/utils/locations';

interface LocationPageContentProps {
  location: Location;
  hierarchy?: {
    nation?: Location;
    region?: Location;
    county?: Location;
    city?: Location;
  };
}

export function LocationPageContent({ location, hierarchy }: LocationPageContentProps) {
  // Get relevant services based on location's service focus
  const relevantServices = services.filter(service => 
    location.serviceFocus.some(focus => 
      service.slug.includes(focus) || service.id.includes(focus)
    )
  ).slice(0, 6);

  // If no specific matches, show popular services
  if (relevantServices.length === 0) {
    relevantServices.push(...services.slice(0, 6));
  }

  // Get nearby locations for linking
  const allLocations = parseLocationsCSV();
  const nearbyLocations = location.nearby
    .map(slug => allLocations.find(loc => loc.slug === slug))
    .filter(Boolean)
    .slice(0, 5);

  // Generate local FAQs
  const localFaqs = [
    {
      question: `Do you provide accounting services in ${location.name}?`,
      answer: `Yes, we provide comprehensive accounting services to businesses in ${location.name} and surrounding areas. Our services include bookkeeping, payroll, VAT returns, and tax planning, all delivered remotely or with local visits as needed.`
    },
    {
      question: `How quickly can you start helping my ${location.name} business?`,
      answer: `We can typically start working with new clients within 48 hours. For businesses in ${location.name}, we offer a free initial consultation to understand your needs and can begin setup immediately after agreement.`
    },
    {
      question: `Do you understand the local business environment in ${location.name}?`,
      answer: `Absolutely. We work with many businesses across ${location.name} and understand the local ${location.localIndustries?.join(', ') || 'business'} sectors. Our expertise helps businesses navigate industry-specific challenges and opportunities.`
    },
    {
      question: `What makes your service different for ${location.name} businesses?`,
      answer: `We combine local knowledge with modern technology, offering cloud-based solutions that work seamlessly for ${location.name} businesses. Our team understands the unique challenges facing businesses in the area and provides tailored solutions.`
    }
  ];

  // Generate case study based on location
  const locationCaseStudy = {
    title: `${location.name} Business Success`,
    description: `A growing ${location.localIndustries?.[0] || 'local'} business in ${location.name} needed professional accounting support to manage their expansion.`,
    result: `Implemented comprehensive bookkeeping and VAT management, resulting in 30% time savings and improved cash flow visibility, enabling successful business growth in the ${location.name} market.`
  };

  // JSON-LD Schema for Local Business
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${siteConfig.name} - ${location.name}`,
    description: `Professional accounting services in ${location.name}. Expert bookkeeping, payroll, VAT, and tax planning for local businesses.`,
    serviceArea: {
      '@type': 'Place',
      name: location.name,
      geo: location.lat && location.lng ? {
        '@type': 'GeoCoordinates',
        latitude: location.lat,
        longitude: location.lng
      } : undefined
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.postcode,
      addressCountry: siteConfig.address.country
    },
    telephone: siteConfig.phone,
    email: siteConfig.email,
    url: `${siteConfig.url}/locations/${location.slug}`,
    openingHours: [
      'Mo-Fr 09:00-18:00',
      'Sa-Su closed'
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: localFaqs.map(faq => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
          <Link href="/locations" className="hover:text-foreground">Locations</Link>
          {hierarchy?.nation && (
            <>
              <span className="mx-2">/</span>
              <Link href={`/locations/${hierarchy.nation.slug}`} className="hover:text-foreground">
                {hierarchy.nation.name}
              </Link>
            </>
          )}
          {hierarchy?.region && (
            <>
              <span className="mx-2">/</span>
              <Link href={`/locations/${hierarchy.nation?.slug}/${hierarchy.region.slug}`} className="hover:text-foreground">
                {hierarchy.region.name}
              </Link>
            </>
          )}
          {hierarchy?.county && (
            <>
              <span className="mx-2">/</span>
              <Link href={`/locations/${hierarchy.nation?.slug}/${hierarchy.region?.slug || ''}/${hierarchy.county.slug}`} className="hover:text-foreground">
                {hierarchy.county.name}
              </Link>
            </>
          )}
          <span className="mx-2">/</span>
          <span className="text-foreground">{location.name}</span>
        </nav>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="mb-4">
            <Badge variant="secondary" className="mb-4">
              {location.type.charAt(0).toUpperCase() + location.type.slice(1)} • {location.nation}
            </Badge>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
            Accountants in {location.name}
          </h1>
          <p className="mb-6 text-xl text-muted-foreground max-w-3xl">
            Professional accounting services for businesses in {location.name}. 
            {location.economyDescription && ` ${location.economyDescription}.`}
            Expert bookkeeping, payroll, VAT returns, and tax planning tailored to local business needs.
          </p>
          
          {location.localIndustries && location.localIndustries.length > 0 && (
            <div className="mb-8">
              <p className="text-sm text-muted-foreground mb-2">Serving key industries:</p>
              <div className="flex flex-wrap gap-2">
                {location.localIndustries.map((industry, index) => (
                  <Badge key={index} variant="outline">{industry}</Badge>
                ))}
              </div>
            </div>
          )}
          
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/contact">
                Book Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href={`tel:${siteConfig.phone}`}>
                <Phone className="mr-2 h-4 w-4" />
                Call {siteConfig.phone}
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Local Services */}
            <section>
              <h2 className="mb-6 text-2xl font-bold">Our Services in {location.name}</h2>
              <p className="mb-6 text-muted-foreground">
                We provide comprehensive accounting services tailored to the needs of {location.name} businesses:
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {relevantServices.map((service) => (
                  <Card key={service.id} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/services/${service.slug}`}>
                          Learn More
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <Button variant="outline" asChild>
                  <Link href="/services">
                    View All Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </section>

            {/* Local Case Study */}
            <section>
              <h2 className="mb-6 text-2xl font-bold">Success Story from {location.name}</h2>
              <Card>
                <CardHeader>
                  <CardTitle>{locationCaseStudy.title}</CardTitle>
                  <CardDescription>{locationCaseStudy.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg bg-green-50 dark:bg-green-950 p-4">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Result:</h4>
                    <p className="text-green-700 dark:text-green-300">{locationCaseStudy.result}</p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Local FAQs */}
            <section>
              <h2 className="mb-6 text-2xl font-bold">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {localFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* Service Areas */}
            {nearbyLocations.length > 0 && (
              <section>
                <h2 className="mb-6 text-2xl font-bold">We Also Serve</h2>
                <p className="mb-4 text-muted-foreground">
                  In addition to {location.name}, we provide accounting services to businesses in:
                </p>
                <div className="flex flex-wrap gap-2">
                  {nearbyLocations.map((nearbyLocation) => nearbyLocation && (
                    <Button key={nearbyLocation.slug} variant="outline" size="sm" asChild>
                      <Link href={`/locations/${nearbyLocation.slug}`}>
                        {nearbyLocation.name}
                      </Link>
                    </Button>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>
                  Ready to streamline your {location.name} business accounting?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" asChild>
                  <Link href="/contact">
                    Get Free Consultation
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
                    <Clock className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div>
                      <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                      <p>Remote service available</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location Info */}
            <Card>
              <CardHeader>
                <CardTitle>About {location.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                {location.population && (
                  <div>
                    <strong>Population:</strong> {location.population.toLocaleString()}
                  </div>
                )}
                {location.economyDescription && (
                  <div>
                    <strong>Economy:</strong> {location.economyDescription}
                  </div>
                )}
                {location.localIndustries && location.localIndustries.length > 0 && (
                  <div>
                    <strong>Key Industries:</strong> {location.localIndustries.join(', ')}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="space-y-2">
                  <div className="text-lg font-semibold">Local Expertise</div>
                  <div className="text-sm text-muted-foreground">Deep understanding of {location.name} business environment</div>
                </div>
                <div className="space-y-2">
                  <div className="text-lg font-semibold">Remote & On-site</div>
                  <div className="text-sm text-muted-foreground">Flexible service delivery options</div>
                </div>
                <div className="space-y-2">
                  <div className="text-lg font-semibold">Same Day Response</div>
                  <div className="text-sm text-muted-foreground">Quick support when you need it</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}