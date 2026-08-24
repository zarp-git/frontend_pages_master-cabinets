import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants/business-info";
import { SERVICES_DATA } from "@/constants/services";
import { LOCATIONS_DATA } from "@/constants/locations";
import { getArticles } from "@/lib/blog-api";

export const runtime = "nodejs";
export const revalidate = 86400;

const SITE_BASE = SITE_URL.replace(/\/$/, "");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_BASE}/`,
      lastModified: new Date("2026-08-24"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_BASE}/blog`,
      lastModified: new Date("2026-08-24"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_BASE}/gallery`,
      lastModified: new Date("2026-08-24"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_BASE}/privacy-policy`,
      lastModified: new Date("2026-04-06"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_BASE}/terms-of-use`,
      lastModified: new Date("2026-04-06"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES_DATA.map((service) => ({
    url: `${SITE_BASE}/services/${service.slug}`,
    lastModified: new Date("2026-08-24"),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const locationPages: MetadataRoute.Sitemap = LOCATIONS_DATA.map(
    (location) => ({
      url: `${SITE_BASE}/locations/${location.slug}`,
      lastModified: new Date("2026-08-24"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    }),
  );

  // Blog posts — fetched from API at revalidation time.
  // getArticles returns BlogArticleSummary[] which only has published_at,
  // not updated_at (that field lives on BlogArticle from the detail endpoint).
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const { data: articles } = await getArticles(1, 200);
    blogPages = articles.map((article) => ({
      url: `${SITE_BASE}/blog/${article.slug}`,
      lastModified: new Date(article.published_at),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));
  } catch {
    // API unavailable during build — blog entries included on next revalidation
  }

  return [...staticPages, ...servicePages, ...locationPages, ...blogPages];
}
