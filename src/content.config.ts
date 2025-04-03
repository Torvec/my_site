import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    development: z.string(),
    images: z.array(z.string()).optional(),
    repo_url: z.string(),
    deploy_url: z.string().optional(),
    tech_stack: z.array(z.string()),
    pubDate: z.coerce.date(),
  }),
});

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const arcade = defineCollection({
  loader: glob({ base: "./src/content/arcade", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    how_to_play: z.string(),
    images: z.array(z.string()),
    play_url: z.string(),
    repo_url: z.string(),
    pubDate: z.coerce.date(),
  }),
});

const now = defineCollection({
  loader: glob({ base: "./src/content/now", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    pubDate: z.coerce.date(),
    content: z.array(z.string()),
  }),
});

export const collections = { projects, blog, arcade, now };
