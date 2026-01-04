export type HowToStep = {
  name: string;
  text: string;
  url?: string;
  image?: string;
};

export type HowToConfig = {
  totalTime?: string; // ISO 8601 duration format (e.g., "PT20M")
  estimatedCost?: {
    currency: string;
    value: string;
  };
  steps: HowToStep[];
};

export type BlogPost = {
  title: string;
  description: string;
  slug: string;
  date: string;
  lastModified?: string;
  category: string;
  tags?: string[];
  featuredImage?: string;
  imageAlt?: string;
  imageCredit?: string;
  author?: string;
  readTime?: number;
  keywords?: string[];
  relatedPosts?: string[];
  howTo?: HowToConfig; // Optional HowTo structured data config
  content?: string; // MDX content (deprecated, use mdx instead)
  mdx?: string; // Compiled MDX code from Content Collections
};

export type BlogPostFrontmatter = Omit<BlogPost, 'content'>;

