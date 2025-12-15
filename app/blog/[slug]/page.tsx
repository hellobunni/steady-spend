import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getBlogPost } from '@/lib/blog/getBlogPost';
import { getBlogPostSlugs } from '@/lib/blog/getBlogPosts';
import { getRelatedPosts } from '@/lib/blog/getRelatedPosts';
import BlogPostMeta from '@/components/blog/BlogPostMeta';
import RelatedPosts from '@/components/blog/RelatedPosts';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

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

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://steadyspend.com';
  const canonicalUrl = `${baseUrl}/blog/${slug}`;

  return {
    title: `${post.title} | SteadySpend Blog`,
    description: post.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: canonicalUrl,
      publishedTime: post.date,
      modifiedTime: post.lastModified || post.date,
      images: post.featuredImage ? [post.featuredImage] : [],
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

  return (
    <article className="py-8 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-4xl px-2 sm:px-4">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Blog', href: '/blog' },
            { label: post.title, href: `/blog/${slug}` },
          ]}
        />
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
                alt={post.title}
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
        <div className="prose prose-slate prose-lg max-w-none">
          <MDXRemote source={post.content || ''} />
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <RelatedPosts posts={relatedPosts} />
        )}
      </div>
    </article>
  );
}

