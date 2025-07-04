import { glob } from "astro/loaders";

import { defineCollection, z } from "astro:content";

const home = defineCollection({
  loader: glob({
    base: "./src/pages/home/_content",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z.object({
    section: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({
    base: "./src/pages/projects/_content",
    pattern: "**/index.{md,mdx}",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      banner: image(),
      images: z.array(image()),
      repo_url: z.string(),
      deploy_url: z.string().optional(),
      tech_stack: z.array(z.string()),
      pubDate: z.date(),
    }),
});

const blog = defineCollection({
  loader: glob({
    base: "./src/pages/blog/_content",
    pattern: "**/index.{md,mdx}",
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    readTime: z.number(),
    summary: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const arcade = defineCollection({
  loader: glob({
    base: "./src/pages/arcade/_content",
    pattern: "**/index.{md,mdx}",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      banner: image(),
      images: z.array(image()),
      play_url: z.string(),
      repo_url: z.string(),
      pubDate: z.date(),
    }),
});

const now = defineCollection({
  loader: glob({
    base: "./src/pages/now/_content",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z.object({
    pubDate: z.date(),
    content: z.array(z.string()),
  }),
});

export const collections = { home, projects, blog, arcade, now };
