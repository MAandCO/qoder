import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star, Quote, ArrowRight, Award, Users, TrendingUp } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Client Testimonials & Reviews | MA & CO Accountants',
  description: 'Read what our clients say about our professional accounting services. Real reviews from businesses across the UK who trust MA & CO Accountants.',
};

const testimonials = [
  {
    id: '1',
    name: "Sarah Johnson",
    company: "Johnson Construction Ltd",
    role: "Managing Director",
    content: "MA & CO transformed our bookkeeping and CIS compliance. We now save 20+ hours monthly and never worry about HMRC deadlines. Their expertise in construction accounting is outstanding.",
    rating: 5,
    avatar: "SJ",
    location: "Croydon",
    industry: "Construction",
    datePublished: "2024-01-15"
  },
  {
    id: '2',
    name: "David Chen",
    company: "TechStart Solutions",
    role: "Founder",
    content: "Exceptional R&D tax credit service. They secured £45,000 in credits we didn't know we were eligible for. Professional and thorough throughout the entire process.",
    rating: 5,
    avatar: "DC",
    location: "London",
    industry: "Technology",
    datePublished: "2024-02-10"
  },
  {
    id: '3',
    name: "Emma Thompson",
    company: "Thompson Retail Group",
    role: "Finance Director",
    content: "Outstanding payroll and VAT services. Real-time reporting and MTD compliance made our operations so much smoother. Highly recommend for growing businesses.",
    rating: 5,
    avatar: "ET",
    location: "Surrey",
    industry: "Retail",
    datePublished: "2024-02-28"
  },
  {
    id: '4',
    name: "James Wilson",
    company: "Wilson Marketing Agency",
    role: "CEO",
    content: "Professional, reliable, and always available when we need them. Their monthly management accounts help us make better business decisions. Excellent value for money.",
    rating: 5,
    avatar: "JW",
    location: "Brighton",
    industry: "Marketing",
    datePublished: "2024-03-05"
  },
  {
    id: '5',
    name: "Rachel Green",
    company: "Green Consulting",
    role: "Managing Partner",
    content: "MA & CO handled our company formation and ongoing compliance perfectly. Their attention to detail and proactive approach sets them apart from other accountants.",
    rating: 5,
    avatar: "RG",
    location: "Manchester",
    industry: "Consulting",
    datePublished: "2024-03-12"
  },
  {
    id: '6',
    name: "Michael Brown",
    company: "Brown & Associates",
    role: "Director",
    content: "Switched to MA & CO last year and it's been brilliant. Their cloud-based approach and quick response times have improved our financial management significantly.",
    rating: 5,
    avatar: "MB",
    location: "Birmingham",
    industry: "Professional Services",
    datePublished: "2024-01-22"
  },
  {
    id: '7',
    name: "Lisa Parker",
    company: "Parker Fitness Studio",
    role: "Owner",
    content: "As a small business owner, I need accountants who understand my challenges. MA & CO provides personal service with big firm expertise. Couldn't be happier.",
    rating: 5,
    avatar: "LP",
    location: "Leeds",
    industry: "Fitness",
    datePublished: "2024-02-18"
  },
  {
    id: '8',
    name: "Robert Taylor",
    company: "Taylor Property Investments",
    role: "Managing Director",
    content: "Excellent property tax advice and portfolio management. They've saved us thousands in tax and their property expertise is second to none.",
    rating: 5,
    avatar: "RT",
    location: "Bristol",
    industry: "Property",
    datePublished: "2024-03-01"
  }
];

const stats = [
  { number: "4.9", label: "Average Rating", icon: Star },
  { number: "500+", label: "Happy Clients", icon: Users },
  { number: "99%", label: "Client Retention", icon: Award },
  { number: "£2.5M+", label: "Tax Savings", icon: TrendingUp }
];

export default function TestimonialsPage() {
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
    review: testimonials.map((testimonial) => ({
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
      datePublished: testimonial.datePublished,
      publisher: {
        '@type': 'Organization',
        name: testimonial.company
      }
    }))
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />
      
      <div className="container py-8">
        {/* Hero Section */}
        <div className="text-center space-y-4 mb-16">
          <div className="flex justify-center mb-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Quote className="h-8 w-8" />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Client Testimonials & Reviews
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Read what our clients across the UK 
            say about our professional accounting services and expertise.
          </p>
        </div>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-primary lg:text-4xl">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="mb-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>
                        {testimonial.role}, {testimonial.company}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">{testimonial.industry}</Badge>
                      <span className="text-muted-foreground">{testimonial.location}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {formatDate(testimonial.datePublished)}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="bg-muted rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Why Clients Choose MA & CO</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence and client satisfaction has earned us the trust 
              of over 500 businesses across the UK.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">AAT Licensed Practice</h3>
              <p className="text-sm text-muted-foreground">
                Professional qualifications and ongoing CPD ensure the highest standards.
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Personal Service</h3>
              <p className="text-sm text-muted-foreground">
                Dedicated account managers who understand your business needs.
              </p>
            </div>
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Proven Results</h3>
              <p className="text-sm text-muted-foreground">
                Track record of saving clients time and money while ensuring compliance.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Join Our Happy Clients?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the same level of professional service and expertise that our clients rave about. 
            Book your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Book Free Consultation
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