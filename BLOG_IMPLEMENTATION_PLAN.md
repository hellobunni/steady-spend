# Blog Implementation Plan - SteadySpend

## 📋 Overview

This plan outlines the implementation of a dynamic blog system with SEO optimization, MDX content management, and ad placement zones.

---

## 🗂️ File Structure

```
/app
  /blog
    /[slug]
      page.tsx              → Dynamic blog post page
    page.tsx                → Blog listing (already exists)
  /content
    /blog
      how-to-start-budgeting.mdx
      budget-mistakes.mdx
      tracking-spending.mdx
      ... (more posts)
/lib
  /blog
    getBlogPosts.ts         → Fetch all blog posts
    getBlogPost.ts          → Fetch single post by slug
    getRelatedPosts.ts      → Get related posts
    types.ts                → TypeScript types for posts
/components
  /blog
    BlogPost.tsx            → Blog post component
    RelatedPosts.tsx        → Related posts section
    BlogPostMeta.tsx        → Post metadata display
  /layout
    AdSpace.tsx             → Ad placement component (already exists)
```

---

## 📦 Dependencies to Install

```bash
pnpm add next-mdx-remote gray-matter
pnpm add -D @types/mdx
```

**Why these packages:**
- `next-mdx-remote`: Renders MDX content in Next.js App Router (better than `@next/mdx` for dynamic routes)
- `gray-matter`: Parses frontmatter from MDX files
- `@types/mdx`: TypeScript support for MDX

---

## 📝 MDX Post Structure

Each blog post MDX file should follow this format:

```mdx
---
title: "5 Common Budget Mistakes (And How to Fix Them)"
description: "Budgeting doesn't have to be complicated. Learn the most common mistakes people make and simple ways to course-correct."
slug: "budget-mistakes"
date: "2025-01-15"
lastModified: "2025-01-15"
category: "Budgeting tips"
tags: ["budgeting", "mistakes", "tips"]
featuredImage: "/images/blog/budget-mistakes.jpg"
author: "SteadySpend Team"
readTime: 5
keywords: ["budget mistakes", "budgeting tips", "how to budget"]
relatedPosts: ["tracking-spending", "50-30-20-rule"]
---

# 5 Common Budget Mistakes (And How to Fix Them)

Your blog content starts here...

## First Major Section

Content continues...

<!-- Ad placement marker (optional) -->
<!-- AD:mid-content -->

More content...

## Conclusion

Wrap up your post...
```

---

## 🔧 Implementation Steps

### Step 1: Install Dependencies

```bash
pnpm add next-mdx-remote gray-matter
pnpm add -D @types/mdx
```

### Step 2: Create Type Definitions

**File: `/lib/blog/types.ts`**

```typescript
export type BlogPost = {
  title: string;
  description: string;
  slug: string;
  date: string;
  lastModified?: string;
  category: string;
  tags?: string[];
  featuredImage?: string;
  author?: string;
  readTime?: number;
  keywords?: string[];
  relatedPosts?: string[];
  content?: string; // MDX content
};

export type BlogPostFrontmatter = Omit<BlogPost, 'content'>;
```

### Step 3: Create Blog Utility Functions

**File: `/lib/blog/getBlogPosts.ts`**

```typescript
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from './types';

const postsDirectory = path.join(process.cwd(), 'app/content/blog');

export function getBlogPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      
      return {
        ...(data as BlogPost),
        content,
      };
    })
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return posts;
}

export function getBlogPostSlugs(): string[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((name) => name.replace(/\.mdx$/, ''));
}
```

**File: `/lib/blog/getBlogPost.ts`**

```typescript
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from './types';

const postsDirectory = path.join(process.cwd(), 'app/content/blog');

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      ...(data as BlogPost),
      content,
    };
  } catch (error) {
    return null;
  }
}
```

**File: `/lib/blog/getRelatedPosts.ts`**

```typescript
import { getBlogPosts } from './getBlogPosts';
import { BlogPost } from './types';

export function getRelatedPosts(
  currentSlug: string,
  category: string,
  tags?: string[],
  limit: number = 3
): BlogPost[] {
  const allPosts = getBlogPosts();
  
  return allPosts
    .filter((post) => {
      // Exclude current post
      if (post.slug === currentSlug) return false;
      
      // Prioritize same category
      if (post.category === category) return true;
      
      // Then match tags
      if (tags && post.tags) {
        return tags.some((tag) => post.tags?.includes(tag));
      }
      
      return false;
    })
    .slice(0, limit);
}
```

### Step 4: Create Dynamic Blog Post Page

**File: `/app/blog/[slug]/page.tsx`**

```typescript
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getBlogPost, getBlogPosts } from '@/lib/blog/getBlogPost';
import { getRelatedPosts } from '@/lib/blog/getRelatedPosts';
import BlogPostMeta from '@/components/blog/BlogPostMeta';
import RelatedPosts from '@/components/blog/RelatedPosts';
import AdSpace from '@/components/layout/AdSpace';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
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

  return {
    title: `${post.title} | SteadySpend Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
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

        {/* Ad Zone: Above Content */}
        <AdSpace id="above-content" />

        {/* Content */}
        <div className="prose prose-slate prose-lg max-w-none">
          <MDXRemote source={post.content || ''} />
        </div>

        {/* Ad Zone: Below Content */}
        <AdSpace id="below-content" />

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <RelatedPosts posts={relatedPosts} />
        )}
      </div>
    </article>
  );
}
```

### Step 5: Create Blog Components

**File: `/components/blog/BlogPostMeta.tsx`**

```typescript
import { Calendar, Clock, User } from 'lucide-react';
import { BlogPost } from '@/lib/blog/types';

type Props = {
  post: BlogPost;
};

export default function BlogPostMeta({ post }: Props) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-600">
      <div className="flex items-center gap-2">
        <Calendar className="h-4 w-4" />
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
      </div>
      {post.readTime && (
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span>{post.readTime} min read</span>
        </div>
      )}
      {post.author && (
        <div className="flex items-center gap-2">
          <User className="h-4 w-4" />
          <span>{post.author}</span>
        </div>
      )}
    </div>
  );
}
```

**File: `/components/blog/RelatedPosts.tsx`**

```typescript
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BlogPost } from '@/lib/blog/types';
import { ArrowRight } from 'lucide-react';

type Props = {
  posts: BlogPost[];
};

export default function RelatedPosts({ posts }: Props) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-12 border-t border-slate-200 pt-8">
      <h2 className="mb-6 text-2xl font-semibold text-slate-900">
        Related Articles
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="h-full border border-emerald-100/70 bg-white/80 shadow-sm transition-shadow hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-900">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm leading-relaxed text-slate-600">
                  {post.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-emerald-700">
                  Read more
                  <ArrowRight className="h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
```

### Step 6: Update Blog Listing Page

**File: `/app/blog/page.tsx`** (update existing)

```typescript
import type { Metadata } from "next";
import { FileText, Sparkles, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { getBlogPosts } from "@/lib/blog/getBlogPosts";

export const metadata: Metadata = {
  title: "Money tips & budgeting blog | SteadySpend",
  description:
    "Calm, practical budgeting tips, spending guides, and money stories to help you understand your finances and make confident day-to-day decisions.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="py-8 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-5xl px-2 sm:px-4">
        {/* Header */}
        <section className="mb-10 text-center sm:mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800">
            <Sparkles className="h-4 w-4" />
            Gentle money guidance
          </div>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Money tips
            <span className="bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              {" "}
              & insights
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-base text-slate-600 sm:text-lg">
            Calm, practical articles to help you understand your spending,
            adjust your budget, and feel more steady with your money.
          </p>
        </section>

        {/* Blog Posts Grid */}
        <section
          aria-label="Latest money and budgeting articles"
          className="grid gap-6 md:grid-cols-2"
        >
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="h-full">
                <Card className="h-full cursor-pointer border border-emerald-100/70 bg-white/80 shadow-sm transition-shadow hover:shadow-md">
                  <CardHeader>
                    <div className="mb-3 flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-emerald-50 to-teal-50">
                        <FileText className="h-5 w-5 text-emerald-700" />
                      </div>
                      <span className="inline-flex rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-800">
                        {post.category}
                      </span>
                    </div>
                    <CardTitle className="text-lg font-semibold text-slate-900 sm:text-xl">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </article>
            </Link>
          ))}
        </section>

        {/* Coming Soon - only show if no posts */}
        {posts.length === 0 && (
          <section className="mt-10 sm:mt-12">
            <Card className="border border-emerald-100/70 bg-linear-to-br from-white via-emerald-50/40 to-teal-50/30">
              <CardContent className="px-6 py-6 text-center sm:px-8 sm:py-8">
                <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
                  More articles coming soon
                </h2>
                <p className="mt-2 text-sm text-slate-600 sm:text-base">
                  We&apos;re slowly adding more guides, stories, and calm
                  step-by-step walkthroughs to help you build a budget that feels
                  steady and sustainable.
                </p>
              </CardContent>
            </Card>
          </section>
        )}
      </div>
    </div>
  );
}
```

### Step 7: Update Sitemap

**File: `/app/sitemap.ts`** (update existing)

```typescript
import { MetadataRoute } from 'next';
import { getBlogPosts } from '@/lib/blog/getBlogPosts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://steadyspend.com';

  const blogPosts = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.lastModified ? new Date(post.lastModified) : new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const routes = [
    '',
    '/tools',
    '/tools/monthly-budget',
    '/guides',
    '/blog',
    '/privacy-policy',
    '/cookie-policy',
    '/disclaimer',
  ].map((route) => {
    let priority = 0.7;

    if (route === '/tools/monthly-budget') {
      priority = 1.0;
    } else if (route === '') {
      priority = 0.8;
    } else if (
      route === '/privacy-policy' ||
      route === '/cookie-policy' ||
      route === '/disclaimer'
    ) {
      priority = 0.3;
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority,
    };
  });

  return [...routes, ...blogPosts];
}
```

### Step 8: Add Prose Styles for MDX Content

**File: `/app/globals.css`** (add to existing)

```css
/* Add Tailwind Typography plugin styles or custom prose classes */
.prose {
  @apply text-slate-700;
}

.prose h2 {
  @apply mt-8 mb-4 text-2xl font-semibold text-slate-900;
}

.prose h3 {
  @apply mt-6 mb-3 text-xl font-semibold text-slate-900;
}

.prose p {
  @apply mb-4 leading-relaxed;
}

.prose ul,
.prose ol {
  @apply mb-4 ml-6;
}

.prose li {
  @apply mb-2;
}

.prose a {
  @apply text-emerald-700 underline hover:text-emerald-800;
}

.prose strong {
  @apply font-semibold text-slate-900;
}

.prose code {
  @apply rounded bg-slate-100 px-1.5 py-0.5 text-sm font-mono text-slate-800;
}

.prose pre {
  @apply mb-4 rounded-lg bg-slate-900 p-4 overflow-x-auto;
}

.prose pre code {
  @apply bg-transparent p-0 text-slate-100;
}
```

### Step 9: Update AdSpace Component (if needed)

**File: `/components/layout/AdSpace.tsx`** (check existing, may need updates)

Ensure it accepts an `id` prop for different ad zones:

```typescript
type AdSpaceProps = {
  id: string;
  className?: string;
};

export default function AdSpace({ id, className }: AdSpaceProps) {
  return (
    <div 
      id={`ad-${id}`}
      className={className}
      // AdSense code will go here
    >
      {/* AdSense ad unit */}
    </div>
  );
}
```

---

## 🎯 SEO Optimizations Included

✅ **Dynamic metadata** per post (title, description, OG tags)  
✅ **Structured URLs** (`/blog/[slug]`)  
✅ **Sitemap generation** with all blog posts  
✅ **Related posts** for internal linking  
✅ **Semantic HTML** (`<article>`, `<header>`, `<time>`)  
✅ **Open Graph** and Twitter Card metadata  
✅ **Last modified dates** for freshness signals  
✅ **Category/tag** organization for topic clustering  

---

## 📍 Ad Placement Zones

1. **Above Content** (`id="above-content"`)
   - After header, before main content
   - High visibility, good CTR

2. **Below Content** (`id="below-content"`)
   - After article, before related posts
   - Good for engaged readers

3. **Mid-Content** (future enhancement)
   - Can be added manually in MDX with markers
   - Or automatically after N paragraphs

---

## 🚀 Next Steps After Implementation

1. **Create sample blog posts** in `/app/content/blog/`
2. **Set up AdSense** and add ad units to `AdSpace` component
3. **Add structured data** (Article schema JSON-LD) if needed
4. **Test SEO** with Google Search Console
5. **Monitor performance** and adjust ad placement

---

## 📝 Notes

- All blog posts are statically generated at build time (`generateStaticParams`)
- MDX content is rendered server-side for better SEO
- Related posts algorithm prioritizes category match, then tags
- Ad zones are flexible and can be customized per post if needed

---

## ✅ Checklist

- [ ] Install dependencies
- [ ] Create type definitions
- [ ] Create utility functions
- [ ] Create dynamic blog post page
- [ ] Create blog components
- [ ] Update blog listing page
- [ ] Update sitemap
- [ ] Add prose styles
- [ ] Update AdSpace component
- [ ] Create first blog post MDX file
- [ ] Test routing and rendering
- [ ] Verify SEO metadata
- [ ] Set up AdSense ad units
