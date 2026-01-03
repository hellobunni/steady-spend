import type { MDXComponents } from 'mdx/types';
import Callout from './Callout';
import Toolbox from './Toolbox';

/**
 * Central registry for MDX custom components.
 * 
 * Maps MDX tag names to React components so they're available
 * in all MDX files without explicit imports.
 * 
 * Usage:
 *   import { mdxComponents } from '@/components/mdx/mdx-components';
 *   <MDXRemote source={content} components={mdxComponents} />
 * 
 * To add new components:
 *   1. Import the component above
 *   2. Add it to the mdxComponents object below
 */
export const mdxComponents: MDXComponents = {
  // Custom MDX components
  Callout,
  Toolbox,
  
  // Add future components here:
  // YourNewComponent,
};

