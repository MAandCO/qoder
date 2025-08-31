// Performance and SEO utilities

export const preloadCriticalResources = () => {
  if (typeof window !== 'undefined') {
    // Preload critical fonts
    const fontLinks = [
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
    ];

    fontLinks.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = href;
      document.head.appendChild(link);
    });

    // Preload critical images
    const criticalImages = [
      '/images/logo.jpg',
      '/images/tim-van-der-kuip-s-aRz4D_b5I-unsplash.jpg'
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }
};

export const optimizeImageLoading = () => {
  if (typeof window !== 'undefined') {
    // Lazy load non-critical images
    const images = document.querySelectorAll('img[data-lazy]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.lazy || '';
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    }
  }
};

// Generate structured data for better SEO
export const generateBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  };
};

// Web vitals tracking
export const trackWebVitals = (metric: any) => {
  if (process.env.NODE_ENV === 'production') {
    // Track to analytics service
    console.log(metric);
  }
};

// Performance monitoring
export const performanceMonitor = {
  trackLCP: () => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
      }).observe({ entryTypes: ['largest-contentful-paint'] });
    }
  },

  trackFID: () => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry: any) => {
          console.log('FID:', entry.processingStart - entry.startTime);
        });
      }).observe({ entryTypes: ['first-input'] });
    }
  },

  trackCLS: () => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      let clsValue = 0;
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        console.log('CLS:', clsValue);
      }).observe({ entryTypes: ['layout-shift'] });
    }
  }
};

// SEO optimization utilities
export const generateMetaTags = (data: {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}) => {
  return {
    title: data.title,
    description: data.description,
    ...(data.canonical && { canonical: data.canonical }),
    ...(data.noindex && { robots: 'noindex,nofollow' }),
    openGraph: {
      title: data.title,
      description: data.description,
      type: 'website',
      ...(data.ogImage && { images: [{ url: data.ogImage }] })
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description: data.description,
      ...(data.ogImage && { images: [data.ogImage] })
    }
  };
};

// Critical CSS inlining helper
export const inlineCriticalCSS = () => {
  if (typeof window !== 'undefined') {
    // This would be used to inline critical CSS for above-the-fold content
    const criticalCSS = `
      .hero { display: block; }
      .nav { display: flex; }
      .btn { cursor: pointer; }
    `;
    
    const style = document.createElement('style');
    style.textContent = criticalCSS;
    document.head.appendChild(style);
  }
};