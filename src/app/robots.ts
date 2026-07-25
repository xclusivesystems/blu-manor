import type { MetadataRoute } from "next";

// Served at /robots.txt. Allows all crawlers (including AI bots: GPTBot,
// ClaudeBot, PerplexityBot, etc. are not blocked) and points them at the
// sitemap. Host + sitemap use the www canonical to match the site metadata.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.blumanor.org/sitemap.xml",
    host: "https://www.blumanor.org",
  };
}
