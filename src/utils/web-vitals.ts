import { onCLS, onINP, onFCP, onLCP, onTTFB, Metric } from 'web-vitals';

function sendToAnalytics(metric: Metric) {
  // In production, send to your analytics service
  // For now, we'll just log to console
  console.log(metric);
  
  // Example: Google Analytics 4
  // gtag('event', metric.name, {
  //   value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
  //   event_category: 'Web Vitals',
  //   event_label: metric.id,
  //   non_interaction: true,
  // });
}

export function reportWebVitals() {
  onCLS(sendToAnalytics);
  onINP(sendToAnalytics); // INP replaced FID
  onFCP(sendToAnalytics);
  onLCP(sendToAnalytics);
  onTTFB(sendToAnalytics);
}