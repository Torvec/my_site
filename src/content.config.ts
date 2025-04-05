import { glob } from "astro/loaders";

import { defineCollection, z } from "astro:content";

const home = defineCollection({
  loader: glob({ base: "./src/pages/home/_content", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    section: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({
    base: "./src/pages/projects/_content",
    pattern: "**/*.{md,mdx}",
  }),
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
  loader: glob({ base: "./src/pages/blog/_content", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const arcade = defineCollection({
  loader: glob({
    base: "./src/pages/arcade/_content",
    pattern: "**/*.{md,mdx}",
  }),
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
  loader: glob({ base: "./src/pages/now/_content", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    pubDate: z.coerce.date(),
    content: z.array(z.string()),
  }),
});

export const collections = { home, projects, blog, arcade, now };
