# MA & CO Accountants Website

A comprehensive, SEO-optimized website for MA & CO Accountants built with Next.js 15, React 19, and modern web technologies.

## 🌟 Features

### ✅ **Complete Website**
- **Homepage**: Hero section, services overview, testimonials, stats
- **About Page**: Company history, team, values, professional credentials
- **Services**: 16 individual service pages with detailed content
- **Locations**: 100+ UK location pages with dynamic routing
- **Blog**: Insights section with sample articles
- **Contact**: Professional contact form with validation
- **Tools**: Interactive tax estimator for 2024/25 tax year
- **Testimonials**: Dedicated reviews page with schema markup

### ✅ **SEO Optimized**
- **Meta Tags**: Optimized titles (~60 chars) and descriptions (~160 chars)
- **Schema Markup**: Local Business, Professional Service, FAQs, Reviews
- **Sitemap**: Dynamic sitemap.xml with all pages
- **Robots.txt**: Search engine crawling instructions
- **Structured Data**: Rich snippets for better SERP appearance
- **Performance**: Lighthouse score optimized for 95+ rating

### ✅ **UK-Wide Coverage**
- **Dynamic Routing**: `/locations/[nation]/[region]/[county]/[city]`
- **Hierarchical Structure**: Nations → Regions → Counties → Cities/Boroughs
- **Unique Content**: Local introductions, case studies, FAQs per location
- **100+ Locations**: England, Scotland, Wales, Northern Ireland coverage

### ✅ **Professional Design**
- **Responsive**: Mobile-first design with TailwindCSS
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Professional Images**: Integrated local images for services and features
- **Modern UI**: ShadCN UI components with clean design

### ✅ **Performance Optimized**
- **Image Optimization**: Next.js Image component with WebP/AVIF support
- **Font Optimization**: Inter font with display swap
- **Bundle Optimization**: Standalone output for better performance
- **Web Vitals**: Performance monitoring and analytics
- **Compression**: Gzip compression enabled

## 🚀 Technology Stack

- **Framework**: Next.js 15 with App Router
- **Frontend**: React 19, TypeScript
- **Styling**: TailwindCSS, ShadCN UI
- **Performance**: Web Vitals, Image Optimization
- **SEO**: Dynamic sitemaps, schema markup
- **Development**: ESLint, Prettier, TypeScript

## 📁 Project Structure

```
ma-co-accountants/
├── src/
│   ├── app/                     # Next.js App Router pages
│   │   ├── page.tsx            # Homepage
│   │   ├── about/              # About page
│   │   ├── services/           # Services pages
│   │   │   └── [slug]/         # Dynamic service pages
│   │   ├── locations/          # Location pages
│   │   │   └── [...slugs]/     # Dynamic location routing
│   │   ├── contact/            # Contact form
│   │   ├── testimonials/       # Reviews page
│   │   ├── blog/               # Blog section
│   │   ├── tools/              # Utility tools
│   │   ├── sitemap.ts          # Dynamic sitemap
│   │   └── robots.ts           # Robots.txt
│   ├── components/             # Reusable components
│   │   ├── ui/                 # ShadCN UI components
│   │   ├── header.tsx          # Site header
│   │   ├── footer.tsx          # Site footer
│   │   └── service-page-content.tsx
│   ├── lib/                    # Utility libraries
│   │   └── config.ts          # Site configuration
│   ├── data/                   # Static data
│   │   └── services.ts        # Service definitions
│   ├── types/                  # TypeScript types
│   │   └── index.ts           # Type definitions
│   └── utils/                  # Utility functions
│       ├── locations.ts       # Location data parsing
│       ├── performance.ts     # Performance utilities
│       └── web-vitals.ts      # Web vitals tracking
├── data/
│   └── uk-locations.csv       # UK location data
├── public/
│   └── images/                # Website images
└── package.json               # Dependencies
```

## 🛠️ Installation & Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd ma-co-accountants
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:3000
```

## 🎯 Key Pages & Features

### **Homepage** (`/`)
- Hero section with professional office background
- Company statistics and trust indicators
- Featured services with images
- Client testimonials with star ratings
- Call-to-action sections

### **Services** (`/services/[slug]`)
16 comprehensive service pages including:
- Bookkeeping & VAT
- Payroll Services
- Personal & Business Tax
- Corporation Tax & Capital Gains
- R&D Tax Credits
- Management Accounts
- Audit & Forensic Services
- Company Secretarial

### **Locations** (`/locations/[...slugs]`)
Dynamic location pages covering:
- **Nations**: England, Scotland, Wales, Northern Ireland
- **Regions**: London, South East, North West, etc.
- **Counties**: Surrey, Kent, Manchester, etc.
- **Cities**: London boroughs, major UK cities

### **Tools** (`/tools/tax-estimator`)
Interactive tax calculator with:
- 2024/25 UK tax rates
- Income tax, National Insurance, student loans
- Take-home pay calculations
- Professional advice prompts

### **Blog** (`/blog`)
Insights section featuring:
- Making Tax Digital guidance
- R&D tax credit advice
- Cash flow management tips
- Corporation tax updates

## 📊 SEO Implementation

### **Schema Markup**
- **Local Business**: Contact info, opening hours, ratings
- **Professional Service**: Credentials, services, team
- **Reviews**: Client testimonials with ratings
- **FAQs**: Question/answer structured data
- **Articles**: Blog post markup

### **Meta Optimization**
- Unique meta titles (≤60 characters)
- Compelling descriptions (≤160 characters)
- Open Graph tags for social sharing
- Twitter Card markup
- Canonical URLs

### **Performance Features**
- Image optimization with Next.js Image
- Font optimization with display swap
- Web Vitals monitoring
- Compression and caching headers
- Critical resource preloading

## 🎨 Design System

### **Colors**
- Primary: Professional blue theme
- Secondary: Complementary accent colors
- Neutral: Carefully selected grays
- Success/Warning/Error: Semantic colors

### **Typography**
- Font: Inter (optimized loading)
- Hierarchy: Clear heading structure
- Responsive: Fluid typography scaling

### **Components**
- Buttons: Multiple variants and sizes
- Cards: Service and testimonial layouts
- Forms: Contact and tool interfaces
- Navigation: Header with mobile menu

## 🔧 Configuration

### **Site Config** (`src/lib/config.ts`)
```typescript
export const siteConfig = {
  name: "MA & CO Accountants",
  description: "Professional accounting services...",
  url: "https://macoaccountants.co.uk",
  // ... other config options
}
```

### **Services Data** (`src/data/services.ts`)
Comprehensive service definitions with:
- SEO metadata
- Features and benefits
- Case studies
- FAQ sections

### **UK Locations** (`data/uk-locations.csv`)
100+ locations with:
- Geographic hierarchy
- Population data
- Economic information
- Service focus areas

## 📈 Performance Metrics

### **Lighthouse Targets**
- **Performance**: ≥95
- **Accessibility**: ≥95
- **Best Practices**: ≥95
- **SEO**: ≥95

### **Core Web Vitals**
- **LCP**: <2.5 seconds
- **FID**: <100 milliseconds
- **CLS**: <0.1

### **Optimization Features**
- Image compression and WebP conversion
- Font preloading and optimization
- Bundle splitting and lazy loading
- Critical CSS inlining
- Cache optimization

## 🚀 Deployment

### **Build the project**
```bash
npm run build
```

### **Production optimizations**
- Static generation for all pages
- Image optimization with multiple formats
- Bundle analysis available
- Performance monitoring included

### **Environment Variables**
Create `.env.local` for:
```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
GOOGLE_ANALYTICS_ID=your-ga-id
```

## 📞 Support & Maintenance

### **Regular Updates**
- Keep dependencies updated
- Monitor performance metrics
- Update content regularly
- Review SEO rankings

### **Monitoring**
- Web Vitals tracking
- Error boundary implementation
- Performance analytics
- User experience monitoring

## 📄 License

This website is built for MA & CO Accountants. All rights reserved.

---

**Built with** ❤️ **using Next.js 15, React 19, and modern web technologies**

For support or questions about this website, please contact the development team.