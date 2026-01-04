import type { ComponentType } from 'react';
import Callout from './Callout';
import Toolbox from './Toolbox';

type MDXComponents = {
  [key: string]: ComponentType<Record<string, unknown>>;
};

/**
 * Central registry for MDX custom components.
 * 
 * Maps MDX tag names to React components so they're available
 * in all MDX files without explicit imports.
 * 
 * Note: This file is currently not used. MDX components are now
 * handled through Prose-UI's mdxComponents and custom components
 * merged in the blog post page.
 * Usage:
 *   import { mdxComponents } from '@/components/mdx/mdx-components';
 *   <MDXRemote source={content} components={mdxComponents} />
 * 
 * To add new components:
 *   1. Import the component above
 *   2. Add it to the mdxComponents object below
 *   3. Merge with Prose-UI components in app/blog/[slug]/page.tsx
 */
export const mdxComponents = {
  // Custom MDX components
  Callout,
  Toolbox,
  
  // Add future components here:
  // YourNewComponent,
} as unknown as MDXComponents;
