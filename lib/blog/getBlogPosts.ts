import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from './types';

const postsDirectory = path.join(process.cwd(), 'app/content/blog');

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
  // Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      
      // Extract slug from filename if not in frontmatter
      const slug = (data.slug as string) || fileName.replace(/\.mdx$/, '');
      
      return {
        ...(data as Partial<BlogPost>),
        slug,
        content,
      } as BlogPost;
    })
    .filter((post) => post.title && post.date) // Filter out invalid posts
    .filter((post) => isPostDatePassed(post.date)) // Filter out future posts
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return posts;
}

export function getBlogPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((name) => {
      const fullPath = path.join(postsDirectory, name);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      return (data.slug as string) || name.replace(/\.mdx$/, '');
    });
}

