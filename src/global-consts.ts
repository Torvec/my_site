import GitHub from "@/assets/github.svg";
import LinkedIn from "@/assets/linkedin.svg";
import Bluesky from "@/assets/bluesky.svg";
import Mastodon from "@/assets/mastodon.svg";
import YouTube from "@/assets/youtube.svg";

export const socialLinks = [
  {
    name: "Email",
    url: "mailto:me@edward-vonschondorf.dev",
    icon: null, // No icon for email
  },
  {
    name: "GitHub",
    url: "https://github.com/Torvec",
    icon: GitHub, // Imported asset
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/edward-vonschondorf/",
    icon: LinkedIn, // Imported asset
  },
  {
    name: "Bluesky",
    url: "https://bsky.app/profile/edward-vonschondorf.dev",
    icon: Bluesky, // Imported asset
  },
  {
    name: "Mastodon",
    url: "https://mastodon.social/@edvonschondorf",
    icon: Mastodon, // Imported asset
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@edward-vonschondorf-dev",
    icon: YouTube, // Imported asset
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
