import { Location } from '@/types';
import fs from 'fs';
import path from 'path';

// Helper function to parse CSV line handling quoted values
function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  
  result.push(current.trim());
  return result;
}

export function parseLocationsCSV(): Location[] {
  try {
    const csvPath = path.join(process.cwd(), 'data', 'uk-locations.csv');
    const csvData = fs.readFileSync(csvPath, 'utf-8');
    const lines = csvData.split('\n');
    const headers = lines[0].split(',');
    
    return lines.slice(1)
      .filter(line => line.trim())
      .map(line => {
        const values = parseCSVLine(line);
        const location: Location = {
          name: values[1] || '',
          slug: values[2] || '',
          type: values[0] as 'nation' | 'region' | 'county' | 'city' | 'borough',
          nation: values[3] || '',
          region: values[4] || undefined,
          county: values[5] || undefined,
          lat: values[6] ? parseFloat(values[6]) : undefined,
          lng: values[7] ? parseFloat(values[7]) : undefined,
          population: values[8] ? parseInt(values[8]) : undefined,
          postcodesSample: values[9] ? values[9].split(' ') : [],
          nearby: values[10] ? values[10].split(',') : [],
          serviceFocus: values[11] ? values[11].split(',') : [],
          localIndustries: [],
          economyDescription: undefined
        };
        return location;
      });
  } catch (error) {
    console.error('Error parsing locations CSV:', error);
    return [];
  }
}

export function getLocationBySlug(slug: string): Location | undefined {
  const locations = parseLocationsCSV();
  return locations.find(location => location.slug === slug);
}

export function getLocationsByType(type: string): Location[] {
  const locations = parseLocationsCSV();
  return locations.filter(location => location.type === type);
}

export function getLocationsByParent(parentSlug: string): Location[] {
  const locations = parseLocationsCSV();
  return locations.filter(location => location.parentSlug === parentSlug);
}

export function getLocationsByNation(nation: string): Location[] {
  const locations = parseLocationsCSV();
  return locations.filter(location => location.nation.toLowerCase() === nation.toLowerCase());
}

export function getLocationsByRegion(nation: string, region: string): Location[] {
  const locations = parseLocationsCSV();
  return locations.filter(
    location => 
      location.nation.toLowerCase() === nation.toLowerCase() &&
      location.region?.toLowerCase() === region.toLowerCase()
  );
}

export function getLocationsByCounty(nation: string, county: string): Location[] {
  const locations = parseLocationsCSV();
  return locations.filter(
    location => 
      location.nation.toLowerCase() === nation.toLowerCase() &&
      location.county?.toLowerCase() === county.toLowerCase()
  );
}

export function getLocationHierarchy(slugs: string[]): {
  nation?: Location;
  region?: Location;
  county?: Location;
  city?: Location;
} {
  const locations = parseLocationsCSV();
  const result: {
    nation?: Location;
    region?: Location;
    county?: Location;
    city?: Location;
  } = {};
  
  if (slugs.length >= 1) {
    result.nation = locations.find(l => l.type === 'nation' && l.slug === slugs[0]);
  }
  
  if (slugs.length >= 2) {
    result.region = locations.find(l => 
      l.type === 'region' && 
      l.slug === slugs[1] && 
      l.nation.toLowerCase().replace(' ', '-') === slugs[0]
    );
    
    // If no region found, check if second slug is a county
    if (!result.region) {
      result.county = locations.find(l => 
        l.type === 'county' && 
        l.slug === slugs[1] && 
        l.nation.toLowerCase().replace(' ', '-') === slugs[0]
      );
    }
  }
  
  if (slugs.length >= 3) {
    if (result.region) {
      result.county = locations.find(l => 
        l.type === 'county' && 
        l.slug === slugs[2] && 
        l.region?.toLowerCase().replace(' ', '-') === slugs[1]
      );
    } else {
      result.city = locations.find(l => 
        (l.type === 'city' || l.type === 'borough') && 
        l.slug === slugs[2] && 
        l.county?.toLowerCase().replace(' ', '-') === slugs[1]
      );
    }
  }
  
  if (slugs.length >= 4) {
    result.city = locations.find(l => 
      (l.type === 'city' || l.type === 'borough') && 
      l.slug === slugs[3] && 
      l.county?.toLowerCase().replace(' ', '-') === slugs[2]
    );
  }
  
  return result;
}

export function generateLocationPaths(): { params: { slugs: string[] } }[] {
  try {
    const locations = parseLocationsCSV();
    const paths: { params: { slugs: string[] } }[] = [];

    locations.forEach(location => {
      const slugs: string[] = [];
      
      // Build slug hierarchy based on type
      if (location.type === 'nation') {
        slugs.push(location.slug);
      } else if (location.type === 'region') {
        slugs.push(location.nation.toLowerCase().replace(' ', '-'), location.slug);
      } else if (location.type === 'county') {
        if (location.region) {
          slugs.push(
            location.nation.toLowerCase().replace(' ', '-'),
            location.region.toLowerCase().replace(' ', '-'),
            location.slug
          );
        } else {
          slugs.push(location.nation.toLowerCase().replace(' ', '-'), location.slug);
        }
      } else if (location.type === 'city' || location.type === 'borough') {
        if (location.county && location.region) {
          slugs.push(
            location.nation.toLowerCase().replace(' ', '-'),
            location.region.toLowerCase().replace(' ', '-'),
            location.county.toLowerCase().replace(' ', '-'),
            location.slug
          );
        } else if (location.county) {
          slugs.push(
            location.nation.toLowerCase().replace(' ', '-'),
            location.county.toLowerCase().replace(' ', '-'),
            location.slug
          );
        } else {
          slugs.push(location.nation.toLowerCase().replace(' ', '-'), location.slug);
        }
      }

      if (slugs.length > 0) {
        paths.push({ params: { slugs } });
      }
    });

    return paths;
  } catch (error) {
    console.warn('Could not generate location paths:', error);
    // Return some basic paths for fallback
    return [
      { params: { slugs: ['england'] } },
      { params: { slugs: ['scotland'] } },
      { params: { slugs: ['wales'] } },
      { params: { slugs: ['northern-ireland'] } },
      { params: { slugs: ['england', 'london'] } },
      { params: { slugs: ['england', 'london', 'croydon'] } }
    ];
  }
}