import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { parseLocationsCSV } from '@/utils/locations';
import { MapPin, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Service Areas | MA & CO Accountants - Locations Across the UK',
  description: 'Find professional accounting services near you. MA & CO Accountants serves businesses across England, Scotland, Wales, and Northern Ireland with expert bookkeeping, payroll, VAT, and tax planning.',
};

export default function LocationsPage() {
  const locations = parseLocationsCSV();
  
  const nations = locations.filter(loc => loc.type === 'nation');
  const regions = locations.filter(loc => loc.type === 'region');
  const majorCities = locations.filter(loc => 
    (loc.type === 'city' || loc.type === 'borough') && 
    (loc.population || 0) > 200000
  ).slice(0, 12);

  return (
    <div className="container py-8">
      {/* Hero Section */}
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Service Areas Across the UK
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Professional accounting services for businesses throughout England, Scotland, Wales, and Northern Ireland. 
          Find expert local support wherever you're based.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">
              Get Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Nations */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">UK Nations We Serve</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {nations.map((nation) => (
            <Card key={nation.slug} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  {nation.name}
                </CardTitle>
                <CardDescription>
                  {nation.population?.toLocaleString()} residents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Comprehensive accounting services across {nation.name}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {nation.serviceFocus.slice(0, 3).map((service) => (
                      <Badge key={service} variant="outline" className="text-xs">
                        {service.replace('-', ' ')}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full" variant="outline" asChild>
                    <Link href={`/locations/${nation.slug}`}>
                      View {nation.name} Services
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Major Cities */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Major Cities & Towns</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {majorCities.map((city) => {
            const nationSlug = city.nation.toLowerCase().replace(/\s+/g, '-');
            const countySlug = city.county?.toLowerCase().replace(/\s+/g, '-');
            const cityPath = countySlug 
              ? `/locations/${nationSlug}/${countySlug}/${city.slug}`
              : `/locations/${nationSlug}/${city.slug}`;
              
            return (
              <Card key={city.slug} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{city.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {city.county}, {city.nation}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {city.population && (
                      <p className="text-sm text-muted-foreground">
                        Population: {city.population.toLocaleString()}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-1">
                      {city.serviceFocus.slice(0, 2).map((service) => (
                        <Badge key={service} variant="secondary" className="text-xs">
                          {service.replace('-', ' ')}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full" size="sm" asChild>
                      <Link href={cityPath}>
                        View Services
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Regional Coverage */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Regional Coverage</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {regions.map((region) => {
            const nationSlug = region.nation.toLowerCase().replace(/\s+/g, '-');
            const regionPath = `/locations/${nationSlug}/${region.slug}`;
            
            return (
              <Card key={region.slug} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle>{region.name}</CardTitle>
                  <CardDescription>
                    {region.nation} • {region.population?.toLocaleString()} residents
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Expert accounting services across the {region.name} region
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {region.serviceFocus.slice(0, 3).map((service) => (
                        <Badge key={service} variant="outline" className="text-xs">
                          {service.replace('-', ' ')}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full" variant="outline" asChild>
                      <Link href={regionPath}>
                        Explore {region.name}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-muted rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Don't See Your Location?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          We provide remote accounting services to businesses throughout the UK. 
          Even if your specific location isn't listed, we can still help your business thrive.
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