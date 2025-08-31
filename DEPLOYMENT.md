# Netlify Deployment Guide

## Quick Deploy

### Option 1: Deploy from GitHub (Recommended)

1. **Go to Netlify Dashboard**
   - Visit [https://app.netlify.com](https://app.netlify.com)
   - Sign in with your GitHub account

2. **Create New Site**
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Select your repository: `MAandCO/qoder`

3. **Configure Build Settings**
   ```
   Build command: npm run build:netlify
   Publish directory: .next
   ```

4. **Environment Variables**
   - Go to Site settings → Environment variables
   - Add the following variables:
   ```
   NETLIFY=true
   NEXT_PUBLIC_SITE_URL=https://your-site-name.netlify.app
   NEXT_PUBLIC_ENVIRONMENT=production
   NEXT_PUBLIC_CONTACT_EMAIL=info@maandco.co.uk
   NEXT_PUBLIC_PHONE=+44 20 8686 4444
   ```

5. **Deploy**
   - Click "Deploy site"
   - Netlify will automatically build and deploy your site

### Option 2: Manual Deploy

1. **Build locally**
   ```bash
   cd ma-co-accountants
   npm run build:netlify
   ```

2. **Deploy to Netlify**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli
   
   # Login to Netlify
   netlify login
   
   # Deploy
   netlify deploy --prod --dir=.next
   ```

## Features Enabled

✅ **Static Site Generation** - All pages pre-rendered for maximum performance
✅ **Image Optimization** - WebP/AVIF formats with proper caching
✅ **Contact Form** - Netlify Functions handle form submissions
✅ **SEO Optimization** - Meta tags, schema markup, sitemap
✅ **Performance Headers** - Security and caching headers configured
✅ **Error Handling** - Custom error pages and boundaries

## Custom Domain Setup

1. **Add Domain in Netlify**
   - Site settings → Domain management
   - Add custom domain: `macoaccountants.co.uk`

2. **Update DNS Records**
   ```
   Type: CNAME
   Name: www
   Value: your-site-name.netlify.app
   
   Type: A
   Name: @
   Value: 75.2.60.5
   ```

3. **SSL Certificate**
   - Netlify automatically provisions SSL certificates
   - Force HTTPS redirect is enabled

## Performance Optimizations

- **Lighthouse Score Target: ≥95**
- **First Contentful Paint: <2.0s**
- **Image optimization with WebP/AVIF**
- **Static generation for all pages**
- **Proper caching headers**
- **Minified assets**

## Monitoring & Analytics

- Web Vitals tracking enabled
- Performance monitoring configured
- Error boundaries for graceful failures
- Ready for Google Analytics integration

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test contact form submission
- [ ] Check mobile responsiveness
- [ ] Validate SEO with Google Search Console
- [ ] Test performance with Lighthouse
- [ ] Set up Google Analytics (optional)
- [ ] Configure custom domain
- [ ] Test all service and location pages

Your MA & CO Accountants website is now ready for production! 🚀