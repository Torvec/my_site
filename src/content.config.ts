import { file, glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
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
    howToPlay: z.string(),
    images: z.array(z.string()),
    play_url: z.string(),
    repo_url: z.string(),
  }),
});

const now = defineCollection({
  loader: file("./src/content/now.json"),
  schema: z.object({
    pubDate: z.coerce.date(),
    content: z.string(),
  }),
});

export const collections = { projects, blog, arcade, now };
