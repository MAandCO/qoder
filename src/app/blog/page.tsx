import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Accounting Insights & Business Tips | MA & CO Accountants Blog',
  description: 'Expert accounting advice, tax updates, and business insights from MA & CO Accountants. Stay informed with latest UK tax changes and business guidance.',
};

// Sample blog posts - in a real application, this would come from a CMS or database
const blogPosts = [
  {
    id: '1',
    title: 'Making Tax Digital: What SMEs Need to Know for 2024',
    slug: 'making-tax-digital-smes-2024',
    excerpt: 'Essential guide for small businesses preparing for Making Tax Digital requirements. Learn about software compliance, record-keeping, and deadlines.',
    content: '',
    author: 'Michael Anderson',
    publishedAt: '2024-03-15',
    readingTime: 8,
    tags: ['Tax', 'MTD', 'Compliance', 'SME'],
    metaTitle: 'Making Tax Digital Guide 2024 | MA & CO Accountants',
    metaDescription: 'Complete MTD guide for SMEs. Software requirements, deadlines, and compliance tips from expert accountants.',
    category: 'Tax Updates'
  },
  {
    id: '2',
    title: 'R&D Tax Credits: Maximising Claims for Tech Companies',
    slug: 'rd-tax-credits-tech-companies-2024',
    excerpt: 'How technology companies can maximise R&D tax credit claims. Qualifying activities, documentation requirements, and common pitfalls to avoid.',
    content: '',
    author: 'David Martinez',
    publishedAt: '2024-03-10',
    readingTime: 12,
    tags: ['R&D', 'Tax Credits', 'Technology', 'Innovation'],
    metaTitle: 'R&D Tax Credits for Tech Companies | MA & CO',
    metaDescription: 'Maximise R&D tax credits for your tech business. Expert guidance on qualifying activities and claim optimization.',
    category: 'Tax Planning'
  },
  {
    id: '3',
    title: 'Cash Flow Management: Essential Tips for Growing Businesses',
    slug: 'cash-flow-management-growing-businesses',
    excerpt: 'Practical strategies for managing cash flow during business growth. Forecasting techniques, invoice management, and avoiding cash flow crises.',
    content: '',
    author: 'Sarah Collins',
    publishedAt: '2024-03-05',
    readingTime: 10,
    tags: ['Cash Flow', 'Business Growth', 'Financial Management'],
    metaTitle: 'Cash Flow Management Tips | MA & CO Accountants',
    metaDescription: 'Essential cash flow management strategies for growing businesses. Expert tips on forecasting and financial planning.',
    category: 'Business Advice'
  },
  {
    id: '4',
    title: 'Corporation Tax Changes 2024: What Directors Need to Know',
    slug: 'corporation-tax-changes-2024-directors',
    excerpt: 'Latest corporation tax rate changes and implications for company directors. Tax planning strategies and dividend vs salary considerations.',
    content: '',
    author: 'Michael Anderson',
    publishedAt: '2024-02-28',
    readingTime: 15,
    tags: ['Corporation Tax', 'Directors', 'Tax Planning', '2024'],
    metaTitle: 'Corporation Tax Changes 2024 | MA & CO Accountants',
    metaDescription: 'Stay updated on corporation tax changes 2024. Expert guidance for company directors and tax planning strategies.',
    category: 'Tax Updates'
  },
  {
    id: '5',
    title: 'Choosing the Right Accounting Software for Your Business',
    slug: 'choosing-accounting-software-business-2024',
    excerpt: 'Comprehensive comparison of Xero, QuickBooks, and FreeAgent. Features, pricing, and which software suits different business types.',
    content: '',
    author: 'Sarah Collins',
    publishedAt: '2024-02-20',
    readingTime: 6,
    tags: ['Software', 'Xero', 'QuickBooks', 'FreeAgent'],
    metaTitle: 'Best Accounting Software 2024 | MA & CO Guide',
    metaDescription: 'Compare top accounting software options. Expert recommendations for Xero, QuickBooks, and FreeAgent.',
    category: 'Technology'
  },
  {
    id: '6',
    title: 'VAT Flat Rate Scheme: Is It Right for Your Business?',
    slug: 'vat-flat-rate-scheme-guide-2024',
    excerpt: 'Complete guide to the VAT Flat Rate Scheme. Eligibility, benefits, calculations, and when to consider leaving the scheme.',
    content: '',
    author: 'David Martinez',
    publishedAt: '2024-02-15',
    readingTime: 9,
    tags: ['VAT', 'Flat Rate Scheme', 'Tax Planning'],
    metaTitle: 'VAT Flat Rate Scheme Guide 2024 | MA & CO',
    metaDescription: 'Complete VAT Flat Rate Scheme guide. Eligibility, benefits, and calculations explained by expert accountants.',
    category: 'Tax Planning'
  }
];

const categories = ['All', 'Tax Updates', 'Tax Planning', 'Business Advice', 'Technology'];

export default function BlogPage() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="container py-8">
      {/* Hero Section */}
      <div className="text-center space-y-4 mb-16">
        <div className="flex justify-center mb-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <BookOpen className="h-8 w-8" />
          </div>
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Accounting Insights & Business Tips
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Stay informed with expert accounting advice, latest tax updates, and practical business guidance 
          from our team of qualified accountants.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((category) => (
          <Badge key={category} variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
            {category}
          </Badge>
        ))}
      </div>

      {/* Featured Post */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
              <BookOpen className="h-16 w-16 text-primary/50" />
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Badge>{blogPosts[0].category}</Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-1 h-4 w-4" />
                  {formatDate(blogPosts[0].publishedAt)}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-1 h-4 w-4" />
                  {blogPosts[0].readingTime} min read
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">{blogPosts[0].title}</h3>
              <p className="text-muted-foreground mb-4">{blogPosts[0].excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">By {blogPosts[0].author}</span>
                <Button asChild>
                  <Link href={`/blog/${blogPosts[0].slug}`}>
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.slice(1).map((post) => (
          <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
              <BookOpen className="h-12 w-12 text-primary/30" />
            </div>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline" className="text-xs">
                  {post.category}
                </Badge>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Clock className="mr-1 h-3 w-3" />
                  {post.readingTime}m
                </div>
              </div>
              <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <CardDescription className="mb-4 line-clamp-3">
                {post.excerpt}
              </CardDescription>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">By {post.author}</span>
                <span className="text-muted-foreground">{formatDate(post.publishedAt)}</span>
              </div>
              
              <Button variant="outline" className="w-full mt-4" asChild>
                <Link href={`/blog/${post.slug}`}>
                  Read Article
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Newsletter Signup */}
      <section className="bg-muted rounded-lg p-8 mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Stay Updated
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Get the latest accounting insights, tax updates, and business tips delivered straight to your inbox. 
          Join our newsletter for expert guidance from MA & CO Accountants.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email address"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
          <Button>
            Subscribe
          </Button>
        </div>
      </section>
    </div>
  );
}