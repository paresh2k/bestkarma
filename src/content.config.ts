import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { fileURLToPath } from 'node:url';

const publishedArticlesDir = fileURLToPath(
  new URL('../content-system/published/articles', import.meta.url)
);

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: publishedArticlesDir }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.enum(['longevity', 'nutrition', 'sleep', 'wellness', 'mind-body']),
    tags: z.array(z.string()).default([]),
    readTime: z.number().optional(),
    featured: z.boolean().default(false),
    status: z.enum(['briefed', 'researched', 'drafted', 'validated', 'approved', 'published']),
  }),
});

export const collections = { blog };
