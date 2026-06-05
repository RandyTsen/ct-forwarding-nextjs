import type { MetadataRoute } from "next";

const BASE = "https://ctforwarding.com.my";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                              lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/about`,                   lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services`,                lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services/transportation`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/freight-forwarding`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/warehousing`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/container-depot`,lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/services/breakbulk`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/services/other`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/projects`,                lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/news`,                    lastModified: new Date(), changeFrequency: "weekly",  priority: 0.7 },
    { url: `${BASE}/contact`,                 lastModified: new Date(), changeFrequency: "yearly",  priority: 0.9 },
  ];
}
