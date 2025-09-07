import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),  // ubah dari string ke date
    slug: z.string().optional(),
  }),
});

export const collections = {
  articles,
};
