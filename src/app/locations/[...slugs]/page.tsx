import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { parseLocationsCSV, getLocationHierarchy, generateLocationPaths } from '@/utils/locations';
import { Location } from '@/types';
import { LocationPageContent } from '@/components/location-page-content';

interface LocationPageProps {
  params: Promise<{
    slugs: string[];
  }>;
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slugs } = await params;
  const hierarchy = getLocationHierarchy(slugs);
  const currentLocation = hierarchy.city || hierarchy.county || hierarchy.region || hierarchy.nation;
  
  if (!currentLocation) {
    return {
      title: 'Location Not Found',
      description: 'The requested location page could not be found.'
    };
  }

  const title = `Accountants in ${currentLocation.name} | MA & CO Accountants`;
  const description = `Professional accounting services in ${currentLocation.name}. Expert bookkeeping, payroll, VAT, tax planning for businesses in ${currentLocation.name} and surrounding areas.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `/locations/${slugs.join('/')}`,
    },
  };
}

export async function generateStaticParams() {
  return generateLocationPaths();
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slugs } = await params;
  const hierarchy = getLocationHierarchy(slugs);
  const currentLocation = hierarchy.city || hierarchy.county || hierarchy.region || hierarchy.nation;

  if (!currentLocation) {
    notFound();
  }

  return <LocationPageContent location={currentLocation} hierarchy={hierarchy} />;
}