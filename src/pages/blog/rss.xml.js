import rss from "@astrojs/rss";

import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: "Edward Vonschondorf's Blog",
    description:
      "Welcome to the blog section of my site where I share my insights, experiences, and lessons from my ongoing journey as a developer.",
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/${post.id}/`,
    })),
  });
}
