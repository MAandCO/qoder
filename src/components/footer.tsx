import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/lib/config';
import { services } from '@/data/services';
import { MapPin, Phone, Mail, Clock, Linkedin, Twitter, Facebook, MessageCircle } from 'lucide-react';

export function Footer() {
  const quickServices = services.slice(0, 6);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container py-8 sm:py-12">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="relative w-8 h-8">
                <Image
                  src="/images/logo.jpg"
                  alt="MA & CO Accountants Logo"
                  fill
                  className="object-contain rounded-md"
                />
              </div>
              <span className="font-bold text-sm sm:text-base">{siteConfig.name}</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Professional accountancy services in Croydon and across the UK. 
              Expert bookkeeping, payroll, VAT, and tax planning for growing businesses.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {siteConfig.socialLinks.linkedin && (
                <Link 
                  href={siteConfig.socialLinks.linkedin} 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              )}
              {siteConfig.socialLinks.twitter && (
                <Link 
                  href={siteConfig.socialLinks.twitter} 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                >
                  <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              )}
              {siteConfig.socialLinks.facebook && (
                <Link 
                  href={siteConfig.socialLinks.facebook} 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                  Client Reviews
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/tools/tax-estimator" className="text-muted-foreground hover:text-foreground transition-colors">
                  Tax Estimator Tool
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2 text-sm">
              {quickServices.map((service) => (
                <li key={service.id}>
                  <Link 
                    href={`/services/${service.slug}`} 
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-primary hover:text-primary/80 font-medium">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <div>
                  <p className="text-muted-foreground">
                    {siteConfig.address.street}<br />
                    {siteConfig.address.city}, {siteConfig.address.postcode}<br />
                    {siteConfig.address.country}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <Link 
                  href={`tel:${siteConfig.phone}`} 
                  className="text-muted-foreground hover:text-foreground"
                >
                  {siteConfig.phone}
                </Link>
              </div>
              
              {siteConfig.whatsapp && (
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4 text-muted-foreground" />
                  <Link 
                    href={`https://wa.me/${siteConfig.whatsapp.replace(/\s/g, '')}`} 
                    className="text-muted-foreground hover:text-foreground"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp: {siteConfig.whatsapp}
                  </Link>
                </div>
              )}
              
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <Link 
                  href={`mailto:${siteConfig.email}`} 
                  className="text-muted-foreground hover:text-foreground"
                >
                  {siteConfig.email}
                </Link>
              </div>
              
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <div className="text-muted-foreground">
                  <p>Mon-Fri: {siteConfig.businessHours.monday}</p>
                  <p>Sat-Sun: {siteConfig.businessHours.saturday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </div>
            <div className="flex space-x-4 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
            </div>
          </div>
          
          <div className="mt-4 text-center text-xs text-muted-foreground">
            <p>
              MA & CO Accountants is a trading name of MA & CO Limited. 
              Registered in England and Wales. Company Number: 12345678. 
              Registered Office: {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.postcode}.
            </p>
            <p className="mt-2">
              AAT Licensed Member. Professional Indemnity Insurance in place. 
              Authorised and regulated by AAT under licence number 12345.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}