import type { MetadataRoute } from "next";
import { getInsights, getProducts, getPublications } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [publications, insights, products] = await Promise.all([
    getPublications(),
    getInsights(),
    getProducts(),
  ]);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date() },
    { url: `${SITE_URL}/consultancy`, lastModified: new Date() },
    { url: `${SITE_URL}/publications`, lastModified: new Date() },
    { url: `${SITE_URL}/insights`, lastModified: new Date() },
    { url: `${SITE_URL}/shop`, lastModified: new Date() },
    { url: `${SITE_URL}/about`, lastModified: new Date() },
    { url: `${SITE_URL}/work-with-us`, lastModified: new Date() },
  ];

  const publicationRoutes = publications.map((p) => ({
    url: `${SITE_URL}/publications/${p.slug}`,
    lastModified: new Date(),
  }));

  const insightRoutes = insights.map((i) => ({
    url: `${SITE_URL}/insights/${i.slug}`,
    lastModified: new Date(i.publishedAt),
  }));

  const productRoutes = products.map((p) => ({
    url: `${SITE_URL}/shop/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...publicationRoutes, ...insightRoutes, ...productRoutes];
}