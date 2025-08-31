import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/config";
import { ArrowRight, CheckCircle, Star, Shield, Users, Clock, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

// Service icon mapping
const getServiceIcon = (serviceSlug: string): string => {
  const iconMap: Record<string, string> = {
    'bookkeeping': '/images/Bookkeeping-.jpeg',
    'payroll': '/images/Bookkeeping-VAT-Payroll .jpeg',
    'vat': '/images/HMRC Compliance .png',
    'software-integration': '/images/Real-time Insights .png',
    'statutory-accounts': '/images/audit-.jpeg',
    'budgeting-forecasting': '/images/Real-time Insights .png',
    'management-accounts': '/images/Real-time Insights .png',
    'personal-tax': '/images/personal-tax-.png'
  };
  
  return iconMap[serviceSlug] || '/images/office.jpeg';
};

const featuredServices = services.slice(0, 8);

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Johnson Construction Ltd",
    role: "Managing Director",
    content: "MA & CO transformed our bookkeeping and CIS compliance. We now save 20+ hours monthly and never worry about HMRC deadlines.",
    rating: 5,
    avatar: "SJ",
    location: "Croydon"
  },
  {
    name: "David Chen",
    company: "TechStart Solutions",
    role: "Founder",
    content: "Exceptional R&D tax credit service. They secured £45,000 in credits we didn't know we were eligible for. Professional and thorough.",
    rating: 5,
    avatar: "DC",
    location: "London"
  },
  {
    name: "Emma Thompson",
    company: "Thompson Retail Group",
    role: "Finance Director",
    content: "Outstanding payroll and VAT services. Real-time reporting and MTD compliance made our operations so much smoother.",
    rating: 5,
    avatar: "ET",
    location: "Surrey"
  }
];

const stats = [
  { number: "500+", label: "Happy Clients" },
  { number: "£2.5M+", label: "Tax Savings Achieved" },
  { number: "99%", label: "Client Retention" },
  { number: "24hr", label: "Response Time" }
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "AAT Qualified & Insured",
    description: "Professional qualifications with comprehensive indemnity insurance for your peace of mind."
  },
  {
    icon: Users,
    title: "Dedicated Account Manager",
    description: "Personal service with a dedicated team member who knows your business inside out."
  },
  {
    icon: Clock,
    title: "Same Day Response",
    description: "Quick support when you need it most, with same-day response to urgent queries."
  },
  {
    icon: CheckCircle,
    title: "HMRC MTD Compliant",
    description: "Fully compliant with Making Tax Digital requirements and all HMRC submissions."
  }
];

export default function HomePage() {
  // Local Business Schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    name: siteConfig.name,
    image: `${siteConfig.url}/images/logo.jpg`,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.postcode,
      addressCountry: siteConfig.address.country
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.3762,
      longitude: -0.0982
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:30'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '13:00'
      }
    ],
    priceRange: '££',
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom'
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 51.3762,
        longitude: -0.0982
      },
      geoRadius: '50000'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Accounting Services',
      itemListElement: services.slice(0, 8).map(service => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description
        }
      }))
    }
  };

  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.jpg`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phone,
      contactType: 'customer service',
      areaServed: 'GB',
      availableLanguage: 'en'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.postcode,
      addressCountry: siteConfig.address.country
    },
    sameAs: [
      siteConfig.socialLinks.linkedin,
      siteConfig.socialLinks.twitter,
      siteConfig.socialLinks.facebook
    ].filter(Boolean)
  };

  // Reviews Schema
  const reviewsSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: testimonials.length.toString(),
      bestRating: '5',
      worstRating: '1'
    },
    review: testimonials.map((testimonial, index) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: testimonial.name
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: testimonial.rating.toString(),
        bestRating: '5',
        worstRating: '1'
      },
      reviewBody: testimonial.content,
      datePublished: new Date(Date.now() - (index * 30 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0] // Staggered dates
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[80vh] sm:min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/tim-van-der-kuip-s-aRz4D_b5I-unsplash.jpg"
            alt="Professional office environment"
            fill
            className="object-cover brightness-[0.3]"
            priority
            sizes="100vw"
            quality={85}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-primary/60 to-cyan-900/80 z-[1]"></div>
        <div className="container relative z-10 py-16 sm:py-20 lg:py-32 text-white">
          <div className="grid gap-8 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 text-center max-w-5xl mx-auto">
              <div className="space-y-4 sm:space-y-6">
                <Badge variant="secondary" className="w-fit mx-auto text-xs sm:text-sm px-4 py-2">
                  Professional Accountancy Services
                </Badge>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
                  Expert Accounting for{' '}
                  <span className="text-primary block sm:inline">Growing Businesses</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed px-4">
                  Professional bookkeeping, payroll, VAT, and tax services for SMEs across the UK. 
                  HMRC MTD compliant with AAT qualified accountants.
                </p>
              </div>
              
              <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 justify-center">
                <Button size="lg" asChild className="w-full sm:w-auto text-base px-8 py-4 text-lg">
                  <Link 
                    href={siteConfig.consultationUrl || '/contact'}
                    target={siteConfig.consultationUrl ? '_blank' : undefined}
                    rel={siteConfig.consultationUrl ? 'noopener noreferrer' : undefined}
                  >
                    Book Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="w-full sm:w-auto text-base px-8 py-4 text-lg border-white/20 text-white hover:bg-white/10">
                  <Link href={`tel:${siteConfig.phone}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    {siteConfig.phone}
                  </Link>
                </Button>
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm sm:text-base text-gray-200">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span>AAT Qualified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span>HMRC MTD Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span>Professional Indemnity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b bg-background py-12 sm:py-16">
        <div className="container">
          <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight lg:text-4xl">
              Comprehensive Accounting Services
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              From bookkeeping to tax planning, we provide the full range of accounting services 
              your business needs to thrive.
            </p>
          </div>
          
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={getServiceIcon(service.slug)}
                    alt={`${service.title} icon`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    quality={80}
                  />
                </div>
                <CardHeader className="pb-3">
                  <Badge variant="outline" className="w-fit mb-2 text-xs">
                    {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
                  </Badge>
                  <CardTitle className="text-base sm:text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <CardDescription className="line-clamp-3 text-sm">
                    {service.description}
                  </CardDescription>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href={`/services/${service.slug}`}>
                      Learn More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-muted/50 py-16 sm:py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight lg:text-4xl">
              Why Choose MA & CO Accountants?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Professional expertise, personal service, and modern technology combined 
              to give your business the accounting support it deserves.
            </p>
          </div>
          
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, index) => {
              const featureImages = [
                '/images/Professional Credentials .jpg',
                '/images/Unlimited Support .png',
                '/images/Real-time Insights .png',
                '/images/HMRC Compliance .png'
              ];
              
              return (
                <div key={index} className="text-center space-y-4 p-4">
                  <div className="mx-auto flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white shadow-lg overflow-hidden">
                    <Image
                      src={featureImages[index]}
                      alt={item.title}
                      width={60}
                      height={60}
                      className="object-contain"
                      sizes="60px"
                      quality={80}
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight lg:text-4xl">
              What Our Clients Say
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Don&apos;t just take our word for it. Here&apos;s what some of our satisfied clients 
              have to say about our services.
            </p>
          </div>
          
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-sm sm:text-base text-muted-foreground mb-4 italic">
                    &quot;{testimonial.content}&quot;
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="text-sm">{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-sm sm:text-base">{testimonial.name}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </div>
                      <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Streamline Your Business Accounting?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Get started with a free consultation. No obligation, no hidden fees. 
              Just expert advice tailored to your business needs.
            </p>
          </div>
          
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link 
                href={siteConfig.consultationUrl || '/contact'}
                target={siteConfig.consultationUrl ? '_blank' : undefined}
                rel={siteConfig.consultationUrl ? 'noopener noreferrer' : undefined}
              >
                Book Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link href={`tel:${siteConfig.phone}`}>
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Link>
            </Button>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto text-sm opacity-90">
            <div className="flex items-center justify-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>{siteConfig.phone}</span>
            </div>
            {siteConfig.whatsapp && (
              <div className="flex items-center justify-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp: {siteConfig.whatsapp}</span>
              </div>
            )}
            <div className="flex items-center justify-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>{siteConfig.email}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
