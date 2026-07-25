import type { MetadataRoute } from "next";

// Canonical host matches the site layout's metadataBase and <link rel="canonical">
// (www), so sitemap URLs never disagree with the canonical tag. The Sanity
// Studio route group is intentionally excluded (not a public content page).
const BASE = "https://www.blumanor.org";

const ROUTES = [
  "", // home
  "/about",
  "/housing",
  "/program",
  "/partners",
  "/resources",
  "/contact",
  "/apply",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((path) => ({
    url: `${BASE}${path || "/"}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
