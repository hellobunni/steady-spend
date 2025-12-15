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

