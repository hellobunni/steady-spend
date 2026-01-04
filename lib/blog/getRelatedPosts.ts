import { allPosts } from "content-collections";
import type { BlogPost } from "./types";

export function getRelatedPosts(
  currentSlug: string,
  category: string,
  tags?: string[],
  limit: number = 3
): BlogPost[] {
  return allPosts
    .filter((post) => {
      // Exclude current post
      if (post.slug === currentSlug) return false;

      // Only include visible posts
      if (post._isVisible === false) return false;

      // Only include valid posts
      if (!post.title || !post.date) return false;

      // Prioritize same category
      if (post.category === category) return true;

      // Then match tags
      if (tags && post.tags) {
        return tags.some((tag) => post.tags?.includes(tag));
      }

      return false;
    })
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
    }))
    .slice(0, limit);
}
