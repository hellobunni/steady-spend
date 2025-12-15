import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from './types';
import { isPostDatePassed } from './getBlogPosts';

const postsDirectory = path.join(process.cwd(), 'app/content/blog');

export function getBlogPost(slug: string): BlogPost | null {
  try {
    // Try to find file by slug first
    const possibleFiles = fs.existsSync(postsDirectory)
      ? fs.readdirSync(postsDirectory).filter((name) => name.endsWith('.mdx'))
      : [];

    let fullPath: string | null = null;

    // First, try exact match with slug
    for (const fileName of possibleFiles) {
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      const fileSlug = (data.slug as string) || fileName.replace(/\.mdx$/, '');
      
      if (fileSlug === slug) {
        fullPath = filePath;
        break;
      }
    }

    // If not found, try filename match
    if (!fullPath) {
      const fileName = `${slug}.mdx`;
      const testPath = path.join(postsDirectory, fileName);
      if (fs.existsSync(testPath)) {
        fullPath = testPath;
      }
    }

    if (!fullPath) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    const post = {
      ...(data as Partial<BlogPost>),
      slug,
      content,
    } as BlogPost;

    // Don't return future posts
    if (!post.date || !isPostDatePassed(post.date)) {
      return null;
    }
    
    return post;
  } catch (error) {
    return null;
  }
}

