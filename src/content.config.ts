import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projekte = defineCollection({
  loader: glob({ pattern: '[^_]*.md', base: './src/content/projekte' }),
  schema: z.object({
    titel: z.string(),
    beschreibung: z.string(),
    datum: z.coerce.date(),
    titelbild: z.string().optional(),
    tags: z.array(z.string()).default([]),
    branche: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projekte };
