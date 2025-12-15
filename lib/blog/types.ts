export type BlogPost = {
  title: string;
  description: string;
  slug: string;
  date: string;
  lastModified?: string;
  category: string;
  tags?: string[];
  featuredImage?: string;
  imageCredit?: string;
  author?: string;
  readTime?: number;
  keywords?: string[];
  relatedPosts?: string[];
  content?: string; // MDX content
};

export type BlogPostFrontmatter = Omit<BlogPost, 'content'>;

