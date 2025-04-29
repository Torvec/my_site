import GitHub from "@/assets/github.svg";
import LinkedIn from "@/assets/linkedin.svg";
import Bluesky from "@/assets/bluesky.svg";
import Mastodon from "@/assets/mastodon.svg";
import YouTube from "@/assets/youtube.svg";

export const siteLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Arcade", href: "/arcade" },
  { name: "Blog", href: "/blog" },
  { name: "Now", href: "/now" },
];

export const socialLinks = [
  {
    name: "Email",
    url: "mailto:me@edward-vonschondorf.dev",
    Icon: null,
  },
  {
    name: "GitHub",
    url: "https://github.com/Torvec",
    Icon: GitHub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/edward-vonschondorf/",
    Icon: LinkedIn,
  },
  {
    name: "Bluesky",
    url: "https://bsky.app/profile/edward-vonschondorf.dev",
    Icon: Bluesky,
  },
  {
    name: "Mastodon",
    url: "https://mastodon.social/@edvonschondorf",
    Icon: Mastodon,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@edward-vonschondorf-dev",
    Icon: YouTube,
  },
  {
    name: "RSS",
    url: "/blog/rss.xml",
    Icon: null,
  },
];

export const SITE_TITLE = "Edward Vonschondorf";

export const USERNAME = "Torvec";

export const ISSUE_TITLE = "Article Issue: YOUR ISSUE HERE";

export const ISSUE_BODY = `What kind of Issue?

- Select: Typo, Broken Link, Fact Check, Other

**Description:**

- Description Here

**Proposed Fix:**

- Proposed Fix Here`;
