import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, ArrowLeft, ArrowRight, User, Share2 } from 'lucide-react';

// This would typically come from a CMS or database
const blogPosts = [
  {
    id: '1',
    title: 'Making Tax Digital: What SMEs Need to Know for 2024',
    slug: 'making-tax-digital-smes-2024',
    excerpt: 'Essential guide for small businesses preparing for Making Tax Digital requirements. Learn about software compliance, record-keeping, and deadlines.',
    content: `
      <h2>Introduction to Making Tax Digital</h2>
      <p>Making Tax Digital (MTD) represents one of the most significant changes to UK tax compliance in recent years. As we move through 2024, it's crucial that small and medium-sized enterprises (SMEs) understand their obligations and prepare accordingly.</p>
      
      <h2>What is Making Tax Digital?</h2>
      <p>Making Tax Digital is HMRC's initiative to digitise the tax system. It requires businesses to:</p>
      <ul>
        <li>Keep digital records of their business income and expenses</li>
        <li>Use MTD-compatible software to submit VAT returns</li>
        <li>Provide quarterly updates to HMRC</li>
        <li>Submit annual summaries through digital means</li>
      </ul>
      
      <h2>MTD for Income Tax</h2>
      <p>From April 2024, MTD for Income Tax affects self-employed individuals and landlords with business income over £10,000. Key requirements include:</p>
      
      <h3>Record Keeping</h3>
      <p>Businesses must maintain digital records of:</p>
      <ul>
        <li>Business income and expenses</li>
        <li>VAT records (where applicable)</li>
        <li>Capital allowances and adjustments</li>
      </ul>
      
      <h3>Quarterly Reporting</h3>
      <p>Submit quarterly updates by:</p>
      <ul>
        <li>5 August (for period ending 5 July)</li>
        <li>5 November (for period ending 5 October)</li>
        <li>5 February (for period ending 5 January)</li>
        <li>5 May (for period ending 5 April)</li>
      </ul>
      
      <h2>Software Requirements</h2>
      <p>Your chosen software must be MTD-compatible. Popular options include:</p>
      <ul>
        <li><strong>Xero:</strong> Comprehensive cloud-based solution</li>
        <li><strong>QuickBooks:</strong> Intuitive interface with strong reporting</li>
        <li><strong>FreeAgent:</strong> Designed specifically for freelancers and SMEs</li>
        <li><strong>Sage:</strong> Established provider with various packages</li>
      </ul>
      
      <h2>Penalties and Compliance</h2>
      <p>Non-compliance with MTD can result in penalties:</p>
      <ul>
        <li>Late submission: £200 for each quarterly update</li>
        <li>Continued non-compliance: Daily penalties of £10</li>
        <li>Serious defaults: Up to £300 or 5% of liability</li>
      </ul>
      
      <h2>Getting Ready for MTD</h2>
      <p>To ensure smooth compliance:</p>
      <ol>
        <li>Choose and implement MTD-compatible software</li>
        <li>Digitise existing records</li>
        <li>Establish quarterly reporting processes</li>
        <li>Train staff on new procedures</li>
        <li>Consider professional support for transition</li>
      </ol>
      
      <h2>How MA & CO Can Help</h2>
      <p>Our team specialises in MTD implementation and ongoing compliance. We offer:</p>
      <ul>
        <li>Software selection and setup</li>
        <li>Data migration and digitisation</li>
        <li>Staff training and support</li>
        <li>Ongoing quarterly submission management</li>
        <li>Annual return preparation</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Making Tax Digital represents a significant shift in how UK businesses manage their tax affairs. While the changes may seem daunting, proper preparation and the right professional support can ensure smooth compliance while potentially improving your business's financial management processes.</p>
      
      <p>For personalised guidance on MTD compliance, contact our expert team at MA & CO Accountants.</p>
    `,
    author: 'Michael Anderson',
    publishedAt: '2024-03-15',
    readingTime: 8,
    tags: ['Tax', 'MTD', 'Compliance', 'SME'],
    metaTitle: 'Making Tax Digital Guide 2024 | MA & CO Accountants',
    metaDescription: 'Complete MTD guide for SMEs. Software requirements, deadlines, and compliance tips from expert accountants.',
    category: 'Tax Updates'
  }
];

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find(p => p.slug === resolvedParams.slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.'
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      url: `/blog/${post.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = blogPosts.find(p => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: post.author
    },
    publisher: {
      '@type': 'Organization',
      name: 'MA & CO Accountants'
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `/blog/${post.slug}`
    }
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      <div className="container py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-foreground">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{post.title}</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-4">
          {/* Main Content */}
          <article className="lg:col-span-3">
            {/* Article Header */}
            <header className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <Badge>{post.category}</Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-1 h-4 w-4" />
                  {formatDate(post.publishedAt)}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-1 h-4 w-4" />
                  {post.readingTime} min read
                </div>
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight mb-4">
                {post.title}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-6">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between border-t border-b py-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{post.author}</p>
                    <p className="text-sm text-muted-foreground">Senior Accountant</p>
                  </div>
                </div>
                
                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </header>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-8 pt-8 border-t">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">Tags:</span>
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-8 pt-8 border-t flex justify-between">
              <Button variant="outline" asChild>
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
              
              <Button asChild>
                <Link href="/contact">
                  Get Expert Help
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Author Info */}
            <Card>
              <CardHeader>
                <CardTitle>About the Author</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{post.author}</p>
                    <p className="text-sm text-muted-foreground">Senior Accountant</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Michael is a senior accountant with over 15 years of experience in tax planning 
                  and business advisory services. He specialises in HMRC compliance and digital transformation.
                </p>
              </CardContent>
            </Card>

            {/* Related Services */}
            <Card>
              <CardHeader>
                <CardTitle>Related Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/services/bookkeeping" className="block text-sm hover:text-primary">
                  Professional Bookkeeping
                </Link>
                <Link href="/services/vat" className="block text-sm hover:text-primary">
                  VAT Returns & MTD Compliance
                </Link>
                <Link href="/services/software-integration" className="block text-sm hover:text-primary">
                  Accounting Software Setup
                </Link>
                <Link href="/services" className="block text-sm text-primary font-medium">
                  View All Services →
                </Link>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
                <CardDescription>
                  Get expert accounting advice tailored to your business
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" asChild>
                  <Link href="/contact">
                    Free Consultation
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </>
  );
}