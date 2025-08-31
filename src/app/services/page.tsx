import Link from 'next/link';
import { Metadata } from 'next/metadata';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { services } from '@/data/services';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Professional Accounting Services | MA & CO Accountants',
  description: 'Comprehensive accounting services including bookkeeping, payroll, VAT, tax planning, and business advisory for UK SMEs. Expert HMRC MTD compliant solutions.',
};

const servicesByCategory = {
  compliance: services.filter(s => s.category === 'compliance'),
  management: services.filter(s => s.category === 'management'),
  tax: services.filter(s => s.category === 'tax'),
  specialist: services.filter(s => s.category === 'specialist')
};

const categoryTitles = {
  compliance: 'Compliance & Core Accounting',
  management: 'Management & Advisory',
  tax: 'Tax Strategy',
  specialist: 'Specialist Services'
};

const categoryDescriptions = {
  compliance: 'Essential accounting services to keep your business compliant and running smoothly.',
  management: 'Strategic financial guidance to help your business grow and make informed decisions.',
  tax: 'Expert tax planning and preparation to minimise liability and maximise opportunities.',
  specialist: 'Specialised services for unique business needs and complex situations.'
};

export default function ServicesPage() {
  return (
    <div className="container py-8">
      {/* Hero Section */}
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Professional Accounting Services
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Comprehensive accounting solutions designed to support your business at every stage. 
          From day-to-day bookkeeping to strategic tax planning, we've got you covered.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">
              Get Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/about">
              Learn About Us
            </Link>
          </Button>
        </div>
      </div>

      {/* Services by Category */}
      <div className="space-y-16">
        {Object.entries(servicesByCategory).map(([category, categoryServices]) => (
          <section key={category}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                {categoryTitles[category as keyof typeof categoryTitles]}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {categoryDescriptions[category as keyof typeof categoryDescriptions]}
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {categoryServices.map((service) => (
                <Card key={service.id} className="hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="line-clamp-3">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Key Features:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {service.features.length > 3 && (
                          <li className="text-xs text-muted-foreground">
                            +{service.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    <Button className="w-full" asChild>
                      <Link href={`/services/${service.slug}`}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA Section */}
      <section className="bg-muted rounded-lg p-8 mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Can't Find What You're Looking For?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          We offer customised accounting solutions for unique business needs. 
          Get in touch to discuss how we can help your specific requirements.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">
              Contact Us Today
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="tel:+44 20 8686 4444">
              Call Now
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}