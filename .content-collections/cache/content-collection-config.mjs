// content-collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { remarkPlugins } from "@prose-ui/core";
import { z } from "zod";
function isPostDatePassed(postDate) {
  const now = /* @__PURE__ */ new Date();
  const today5am = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 5, 0, 0);
  const postDateObj = new Date(postDate);
  const postDate5am = new Date(
    postDateObj.getFullYear(),
    postDateObj.getMonth(),
    postDateObj.getDate(),
    5,
    0,
    0
  );
  return postDate5am.getTime() <= today5am.getTime();
}
var howToStepSchema = z.object({
  name: z.string(),
  text: z.string(),
  url: z.string().optional(),
  image: z.string().optional()
});
var howToConfigSchema = z.object({
  totalTime: z.string().optional(),
  // ISO 8601 duration format (e.g., "PT20M")
  estimatedCost: z.object({
    currency: z.string(),
    value: z.string()
  }).optional(),
  steps: z.array(howToStepSchema)
});
var postsSchema = z.object({
  title: z.string(),
  description: z.string(),
  slug: z.string().optional(),
  // Will be derived from filename if not provided
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
  content: z.string()
  // Explicit content property (required by Content Collections)
});
var posts = defineCollection({
  name: "posts",
  directory: "content/posts",
  include: "**/*.mdx",
  schema: postsSchema,
  transform: async (document, context) => {
    const slug = document.slug || document._meta.path.replace(/^content\/posts\//, "").replace(/\.mdx$/, "");
    const mdx = await compileMDX(context, document, {
      remarkPlugins: remarkPlugins()
    });
    const isVisible = isPostDatePassed(document.date);
    return {
      ...document,
      slug,
      mdx,
      _isVisible: isVisible
    };
  }
});
var content_collections_default = defineConfig({
  collections: [posts]
});
export {
  content_collections_default as default
};
