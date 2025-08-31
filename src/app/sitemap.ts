import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/config';
import { services } from '@/data/services';
import { parseLocationsCSV } from '@/utils/locations';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const now = new Date();
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/tools/tax-estimator`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ];

  // Service pages
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Location pages
  const locations = parseLocationsCSV();
  const locationPages = locations.map((location) => {
    let path = '/locations/';
    
    const normalizeSlug = (str: string) => str.toLowerCase().replace(/\s+/g, '-');
    
    if (location.type === 'nation') {
      path += location.slug;
    } else if (location.type === 'region') {
      path += `${normalizeSlug(location.nation)}/${location.slug}`;
    } else if (location.type === 'county') {
      if (location.region) {
        path += `${normalizeSlug(location.nation)}/${normalizeSlug(location.region)}/${location.slug}`;
      } else {
        path += `${normalizeSlug(location.nation)}/${location.slug}`;
      }
    } else if (location.type === 'city' || location.type === 'borough') {
      if (location.county && location.region) {
        path += `${normalizeSlug(location.nation)}/${normalizeSlug(location.region)}/${normalizeSlug(location.county)}/${location.slug}`;
      } else if (location.county) {
        path += `${normalizeSlug(location.nation)}/${normalizeSlug(location.county)}/${location.slug}`;
      } else {
        path += `${normalizeSlug(location.nation)}/${location.slug}`;
      }
    }

    return {
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: location.type === 'city' || location.type === 'borough' ? 0.7 : 0.6,
    };
  });

  // Blog posts (sample)
  const blogPosts = [
    {
      url: `${baseUrl}/blog/making-tax-digital-smes-2024`,
      lastModified: new Date('2024-03-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/rd-tax-credits-tech-companies-2024`,
      lastModified: new Date('2024-03-10'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ];

  return [...staticPages, ...servicePages, ...locationPages, ...blogPosts];
}