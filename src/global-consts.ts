import GitHub from "@/assets/github.svg";
import LinkedIn from "@/assets/linkedin.svg";
import Bluesky from "@/assets/bluesky.svg";
import Mastodon from "@/assets/mastodon.svg";
import YouTube from "@/assets/youtube.svg";

export const socialLinks = [
  {
    name: "Email",
    url: "mailto:me@edward-vonschondorf.dev",
    Component: null,
  },
  {
    name: "GitHub",
    url: "https://github.com/Torvec",
    Component: GitHub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/edward-vonschondorf/",
    Component: LinkedIn,
  },
  {
    name: "Bluesky",
    url: "https://bsky.app/profile/edward-vonschondorf.dev",
    Component: Bluesky,
  },
  {
    name: "Mastodon",
    url: "https://mastodon.social/@edvonschondorf",
    Component: Mastodon,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@edward-vonschondorf-dev",
    Component: YouTube,
  },
  {
    name: "RSS",
    url: "/blog/rss.xml",
    Component: null,
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
