'use client';

import { useEffect, useRef } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'scale-up';
}

export function AnimatedSection({ 
  children, 
  className = '', 
  animation = 'fade-in' 
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const animationClasses = {
    'fade-in': 'opacity-0 translate-y-4 transition-all duration-700 ease-out',
    'slide-up': 'opacity-0 translate-y-8 transition-all duration-700 ease-out',
    'scale-up': 'opacity-0 scale-95 transition-all duration-700 ease-out',
  };

  const animateInClasses = {
    'fade-in': 'animate-in:opacity-100 animate-in:translate-y-0',
    'slide-up': 'animate-in:opacity-100 animate-in:translate-y-0',
    'scale-up': 'animate-in:opacity-100 animate-in:scale-100',
  };

  return (
    <div
      ref={ref}
      className={`${animationClasses[animation]} ${animateInClasses[animation]} ${className}`}
    >
      {children}
    </div>
  );
}