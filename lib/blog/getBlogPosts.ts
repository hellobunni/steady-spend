import { allPosts } from "content-collections";
import type { BlogPost } from "./types";

/**
 * Check if a post date has passed (considering 5am cutoff)
 * Posts are visible if their date has passed, or if it's today and it's after 5am
 */
export function isPostDatePassed(postDate: string): boolean {
  const now = new Date();
  const today5am = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 5, 0, 0);

  // Parse post date and set to 5am on that date
  const postDateObj = new Date(postDate);
  const postDate5am = new Date(
    postDateObj.getFullYear(),
    postDateObj.getMonth(),
    postDateObj.getDate(),
    5,
    0,
    0
  );

  // Post is visible if its 5am time is <= today's 5am time
  return postDate5am.getTime() <= today5am.getTime();
}

export function getBlogPosts(): BlogPost[] {
  return allPosts
    .filter((post) => post._isVisible !== false) // Filter out future posts (using flag from transform)
    .filter((post) => post.title && post.date) // Filter out invalid posts
    .map((post) => ({
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
    }))
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

export function getBlogPostSlugs(): string[] {
  return allPosts.filter((post) => post._isVisible !== false).map((post) => post.slug);
}
