import type { MetadataRoute } from "next";
import { sanityServerClient } from "@/sanity/client";
import { sanityConfigured } from "@/sanity/env";
import { allNewsSlugQuery } from "@/sanity/queries";

const BASE = "https://www.ctforwarding.com.my";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch dynamic news slugs at build time
  let newsSlugs: { slug: string }[] = [];
  if (sanityConfigured && sanityServerClient) {
    newsSlugs = await sanityServerClient
      .fetch<{ slug: string }[]>(allNewsSlugQuery)
      .catch(() => []);
  }

  const now = new Date();

  const static_routes: MetadataRoute.Sitemap = [
    { url: BASE,                                  lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/services`,                    lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/contact`,                     lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/about`,                       lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/projects`,                    lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/transportation`,     lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/freight-forwarding`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/warehousing`,        lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/container-depot`,    lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/services/breakbulk`,          lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/services/other`,              lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/news`,                        lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${BASE}/news/careers`,                lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/faq`,                         lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/privacy-policy`,              lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
  ];

  const news_routes: MetadataRoute.Sitemap = newsSlugs.map(({ slug }) => ({
    url: `${BASE}/news/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...static_routes, ...news_routes];
}
