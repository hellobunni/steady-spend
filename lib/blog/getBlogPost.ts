import { allPosts } from "content-collections";
import type { BlogPost } from "./types";

export function getBlogPost(slug: string): BlogPost | null {
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    return null;
  }

  // Don't return future posts
  if (post._isVisible === false || !post.date) {
    return null;
  }

  return {
    title: post.title,
    description: post.description,
    slug: post.slug,
    date: post.date,
    lastModified: post.lastModified,
    category: post.category,
    tags: post.tags,
    featuredImage: post.featuredImage,
    imageAlt: post.imageAlt,
    imageCredit: post.imageCredit,
    author: post.author,
    readTime: post.readTime,
    keywords: post.keywords,
    relatedPosts: post.relatedPosts,
    howTo: post.howTo,
    mdx: post.mdx, // Compiled MDX code
  };
}
