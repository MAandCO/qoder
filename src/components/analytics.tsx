'use client';

import { useEffect } from 'react';
import { reportWebVitals } from '@/utils/web-vitals';

export function Analytics() {
  useEffect(() => {
    // Report web vitals
    reportWebVitals();

    // Performance monitoring
    if (typeof window !== 'undefined') {
      // Track loading performance
      window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        console.log('Performance metrics:', {
          domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
          loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
          totalLoad: perfData.loadEventEnd - perfData.fetchStart,
          firstByte: perfData.responseStart - perfData.requestStart,
        });
      });

      // Track route changes for SPA behavior
      let currentPath = window.location.pathname;
      const observer = new MutationObserver(() => {
        if (window.location.pathname !== currentPath) {
          currentPath = window.location.pathname;
          console.log('Route changed to:', currentPath);
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });

      return () => observer.disconnect();
    }
  }, []);

  return null;
}