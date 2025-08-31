'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/theme-toggle';
import { siteConfig } from '@/lib/config';
import { services } from '@/data/services';
import { Menu, Phone, Mail, MessageCircle } from 'lucide-react';

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container flex h-10 items-center justify-between text-xs sm:text-sm px-4 sm:px-6">
          <div className="flex items-center space-x-2 sm:space-x-4 overflow-hidden flex-1">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Phone className="h-3 w-3 flex-shrink-0" />
              <span className="truncate">{siteConfig.phone}</span>
            </div>
            {siteConfig.whatsapp && (
              <div className="hidden sm:flex items-center space-x-2">
                <MessageCircle className="h-3 w-3 flex-shrink-0" />
                <span className="truncate">WhatsApp: {siteConfig.whatsapp}</span>
              </div>
            )}
            <div className="hidden md:flex items-center space-x-2">
              <Mail className="h-3 w-3 flex-shrink-0" />
              <span className="truncate">{siteConfig.email}</span>
            </div>
          </div>
          <div className="hidden lg:block flex-shrink-0">
            <span className="text-xs">Professional Accountancy Services | AAT Qualified</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container flex h-14 sm:h-16 items-center px-4 sm:px-6">
        <div className="mr-4 sm:mr-6 flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10">
              <Image
                src="/images/logo.jpg"
                alt="MA & CO Accountants Logo"
                fill
                className="object-contain rounded-md"
                priority
              />
            </div>
            <span className="hidden sm:inline-block font-bold text-sm sm:text-base">
              {siteConfig.name}
            </span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2 sm:space-x-4">
          <nav className="hidden lg:flex items-center space-x-6 text-sm">
            <Link href="/" className={`transition-colors hover:text-foreground/80 ${pathname === '/' ? 'text-foreground' : 'text-foreground/60'}`}>
              Home
            </Link>
            <Link href="/services" className={`transition-colors hover:text-foreground/80 ${pathname?.startsWith('/services') ? 'text-foreground' : 'text-foreground/60'}`}>
              Services
            </Link>
            <Link href="/about" className={`transition-colors hover:text-foreground/80 ${pathname === '/about' ? 'text-foreground' : 'text-foreground/60'}`}>
              About
            </Link>
            <Link href="/testimonials" className={`transition-colors hover:text-foreground/80 ${pathname === '/testimonials' ? 'text-foreground' : 'text-foreground/60'}`}>
              Reviews
            </Link>
            <Link href="/contact" className={`transition-colors hover:text-foreground/80 ${pathname === '/contact' ? 'text-foreground' : 'text-foreground/60'}`}>
              Contact
            </Link>
          </nav>
          
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Button asChild className="hidden lg:inline-flex" size="sm">
              <Link href={siteConfig.consultationUrl || '/contact'} target={siteConfig.consultationUrl ? '_blank' : undefined}>
                Free Consultation
              </Link>
            </Button>
            
            {/* Mobile menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="lg:hidden" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                <nav className="flex flex-col space-y-6 mt-6">
                  <Link
                    href="/"
                    className="text-lg font-semibold hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  
                  <div>
                    <h3 className="mb-3 text-lg font-semibold">Services</h3>
                    <div className="space-y-3 pl-4">
                      {services.slice(0, 6).map((service) => (
                        <Link
                          key={service.id}
                          href={`/services/${service.slug}`}
                          className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.title}
                        </Link>
                      ))}
                      <Link
                        href="/services"
                        className="block text-sm text-primary hover:text-primary/80 font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                  
                  <Link
                    href="/about"
                    className="text-lg font-semibold hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                  
                  <Link
                    href="/testimonials"
                    className="text-lg font-semibold hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Reviews
                  </Link>
                  
                  <Link
                    href="/contact"
                    className="text-lg font-semibold hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                  
                  <div className="pt-4 border-t">
                    <Button asChild className="w-full" size="lg">
                      <Link 
                        href={siteConfig.consultationUrl || '/contact'} 
                        target={siteConfig.consultationUrl ? '_blank' : undefined}
                        onClick={() => setIsOpen(false)}
                      >
                        Free Consultation
                      </Link>
                    </Button>
                  </div>
                  
                  {/* Contact info in mobile menu */}
                  <div className="pt-4 border-t space-y-3">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      <Link href={`tel:${siteConfig.phone}`} className="hover:text-foreground">
                        {siteConfig.phone}
                      </Link>
                    </div>
                    {siteConfig.whatsapp && (
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <MessageCircle className="h-4 w-4" />
                        <Link 
                          href={`https://wa.me/${siteConfig.whatsapp.replace(/\s/g, '')}`}
                          target="_blank"
                          className="hover:text-foreground"
                        >
                          WhatsApp: {siteConfig.whatsapp}
                        </Link>
                      </div>
                    )}
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}