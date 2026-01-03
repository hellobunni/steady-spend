import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { remarkPlugins } from "@prose-ui/core";
import { z } from "zod";

/**
 * Check if a post date has passed (considering 5am cutoff)
 * Posts are visible if their date has passed, or if it's today and it's after 5am
 */
function isPostDatePassed(postDate: string): boolean {
  const now = new Date();
  const today5am = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    5,
    0,
    0
  );

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

// HowToConfig schema (for structured data)
const howToStepSchema = z.object({
  name: z.string(),
  text: z.string(),
  url: z.string().optional(),
  image: z.string().optional(),
});

const howToConfigSchema = z.object({
  totalTime: z.string().optional(), // ISO 8601 duration format (e.g., "PT20M")
  estimatedCost: z
    .object({
      currency: z.string(),
      value: z.string(),
    })
    .optional(),
  steps: z.array(howToStepSchema),
});

// Blog post frontmatter schema
const postsSchema = z.object({
  title: z.string(),
  description: z.string(),
  slug: z.string().optional(), // Will be derived from filename if not provided
  date: z.string(),
  lastModified: z.string().optional(),
  category: z.string(),
  tags: z.array(z.string()).optional(),
  featuredImage: z.string().optional(),
  imageAlt: z.string().optional(),
  imageCredit: z.string().optional(),
  author: z.string().optional(),
  readTime: z.number().optional(),
  keywords: z.array(z.string()).optional(),
  relatedPosts: z.array(z.string()).optional(),
  howTo: howToConfigSchema.optional(),
});

const posts = defineCollection({
  name: "posts",
  directory: "content/posts",
  include: "**/*.mdx",
  schema: postsSchema,
  transform: async (document, context) => {
    // Extract slug from filename if not in frontmatter
    const slug =
      document.slug ||
      document._meta.path
        .replace(/^content\/posts\//, "")
        .replace(/\.mdx$/, "");

    // Compile MDX with Prose-UI remark plugins
    const mdx = await compileMDX(context, document, {
      remarkPlugins: remarkPlugins(),
    });

    // Check if post date has passed (filter out future posts)
    const isVisible = isPostDatePassed(document.date);

    return {
      ...document,
      slug,
      mdx,
      _isVisible: isVisible,
    };
  },
});

export default defineConfig({
  collections: [posts],
});

