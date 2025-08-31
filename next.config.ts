import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ESLint configuration for Netlify builds
  eslint: {
    ignoreDuringBuilds: process.env.NETLIFY === 'true',
  },
  
  // TypeScript configuration for Netlify builds
  typescript: {
    ignoreBuildErrors: process.env.NETLIFY === 'true',
  },
  
  // Performance optimizations
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [50, 75, 80, 85, 90, 95, 100],
    unoptimized: process.env.NODE_ENV === 'production' && process.env.NETLIFY === 'true',
  },
  
  // Compression
  compress: true,
  
  // Output configuration for Netlify
  output: process.env.NETLIFY === 'true' ? 'export' : 'standalone',
  trailingSlash: true,
  distDir: '.next',
  
  // Bundle analyzer in development
  ...(process.env.ANALYZE === 'true' && {
    bundleAnalyzer: {
      enabled: true,
    },
  }),
  
  // Headers for better SEO and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
