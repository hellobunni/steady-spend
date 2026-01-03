import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { MDXContent } from '@content-collections/mdx/react';
import { mdxComponents } from '@prose-ui/next';
import { getBlogPost } from '@/lib/blog/getBlogPost';
import { getBlogPostSlugs } from '@/lib/blog/getBlogPosts';
import { getRelatedPosts } from '@/lib/blog/getRelatedPosts';
import { generateHowToSchema } from '@/lib/seo/generateHowToSchema';
import BlogPostMeta from '@/components/blog/BlogPostMeta';
import RelatedPosts from '@/components/blog/RelatedPosts';
import ComparisonTable from '@/components/blog/ComparisonTable';
import AuthorBio from '@/components/blog/AuthorBio';
import MathFormula from '@/components/blog/MathFormula';
import { Accordion } from '@/components/ui/accordion';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getBlogPostSlugs();
  return slugs.map((slug: string) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.steadyspend.com';
  const postUrl = `${baseUrl}/blog/${slug}`;

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords || [],
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: postUrl,
      publishedTime: post.date,
      modifiedTime: post.lastModified || post.date,
      images: post.featuredImage
        ? [
            {
              url: post.featuredImage,
              width: 1200,
              height: 630,
              alt: post.imageAlt || post.title,
            },
          ]
        : [],
      siteName: 'SteadySpend',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.featuredImage ? [post.featuredImage] : [],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(
    slug,
    post.category,
    post.tags,
    3
  );

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.steadyspend.com';
  const postUrl = `${baseUrl}/blog/${slug}`;

  // Article Structured Data
  // Use Person type for named authors, Organization for generic team
  const isNamedAuthor = post.author && post.author !== 'SteadySpend Team' && post.author !== 'Lynae Thomas';
  
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.featuredImage
      ? [post.featuredImage]
      : [`${baseUrl}/logo-vertical.png`],
    datePublished: post.date,
    dateModified: post.lastModified || post.date,
    author: isNamedAuthor
      ? {
          '@type': 'Person',
          name: post.author,
          url: `${baseUrl}/about`,
        }
      : {
          '@type': 'Organization',
          name: post.author || 'SteadySpend Team',
          url: baseUrl,
        },
    publisher: {
      '@type': 'Organization',
      name: 'SteadySpend',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo-vertical.png`,
        width: 1200,
        height: 630,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
  };

  // BreadcrumbList Structured Data
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${baseUrl}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  };

  // HowTo Structured Data (if configured)
  const howToSchema = generateHowToSchema(post, baseUrl);

  return (
    <>
      {/* Structured Data */}
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {howToSchema && (
        <Script
          id="howto-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(howToSchema),
          }}
        />
      )}

      <article className="py-8 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-4xl px-2 sm:px-4">
        {/* Header */}
        <header className="mb-8">
          <div className="mb-4 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-800">
            {post.category}
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
          <BlogPostMeta post={post} />
        </header>

        {/* Post Image */}
        {post.featuredImage && (
          <div className="mb-8">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-sm">
              <Image
                src={post.featuredImage}
                alt={post.imageAlt || post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                priority
              />
            </div>
            {post.imageCredit && (
              <p className="mt-2 text-xs text-slate-500">
                Image credit: {post.imageCredit}
              </p>
            )}
          </div>
        )}

        {/* Content */}
        <div className="prose-ui w-full max-w-none">
          {post.mdx && (
            <MDXContent
              code={post.mdx}
              components={{
                ...mdxComponents,
                // Merge custom components with Prose-UI components
                ComparisonTable,
                Accordion,
                AuthorBio,
                MathFormula,
                // Override img component with custom image handling
                img: (props: { src?: string; alt?: string; className?: string }) => {
                  if (!props.src) {
                    return null;
                  }
                  
                  const className = props.className || '';
                  const isLogo = className.includes('logo-image');
                  const isScreenshot = className.includes('screenshot-image');
                  
                  if (isLogo) {
                    // Logo: wrap in logo-image-wrapper div and convert to Next.js Image
                    return (
                      <div className="logo-image-wrapper">
                        <Image
                          src={props.src}
                          alt={props.alt || ''}
                          width={300}
                          height={300}
                          className="logo-image"
                          style={{ 
                            objectFit: 'contain', 
                            width: 'auto',
                            height: 'auto',
                            maxWidth: '100%'
                          }}
                          unoptimized={props.src.includes('cloudinary.com') || props.src.includes('clearbit.com')}
                        />
                      </div>
                    );
                  } else if (isScreenshot) {
                    // Screenshot: maintain aspect ratio, full width, no distortion
                    return (
                      <div className="mb-12 w-full">
                        <Image
                          src={props.src}
                          alt={props.alt || ''}
                          width={810}
                          height={540}
                          className="w-full h-auto rounded-lg shadow-sm"
                          unoptimized={props.src.includes('cloudinary.com')}
                        />
                      </div>
                    );
                  }
                  // Fallback for other images
                  return (
                    <Image
                      src={props.src}
                      alt={props.alt || ''}
                      width={800}
                      height={500}
                      className="w-full h-auto rounded-lg mb-4"
                      unoptimized={props.src.includes('cloudinary.com')}
                    />
                  );
                },
              }}
            />
          )}
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <RelatedPosts posts={relatedPosts} />
        )}
      </div>
    </article>
    </>
  );
}

