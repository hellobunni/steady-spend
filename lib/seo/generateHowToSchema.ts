import { BlogPost } from '@/lib/blog/types';

/**
 * Generates HowTo structured data (JSON-LD) for a blog post
 * @param post - The blog post with optional howTo configuration
 * @param baseUrl - Base URL of the site
 * @returns HowTo schema object or null if invalid
 */
export function generateHowToSchema(
  post: BlogPost,
  baseUrl: string
): object | null {
  if (!post.howTo || !post.howTo.steps || post.howTo.steps.length === 0) {
    return null;
  }

  const postUrl = `${baseUrl}/blog/${post.slug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: post.title,
    description: post.description,
    totalTime: post.howTo.totalTime || 'PT20M',
    estimatedCost: post.howTo.estimatedCost
      ? {
          '@type': 'MonetaryAmount',
          currency: post.howTo.estimatedCost.currency || 'USD',
          value: post.howTo.estimatedCost.value || '0',
        }
      : {
          '@type': 'MonetaryAmount',
          currency: 'USD',
          value: '0',
        },
    step: post.howTo.steps.map((step, index) => ({
      '@type': 'HowToStep',
      url: step.url || `${postUrl}#step-${index + 1}`,
      name: step.name,
      text: step.text,
      image: step.image || post.featuredImage || `${baseUrl}/logo-vertical.png`,
    })),
  };
}

