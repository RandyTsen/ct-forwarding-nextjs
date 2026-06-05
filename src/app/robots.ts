import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://www.ctforwarding.com.my/sitemap.xml",
    host: "https://www.ctforwarding.com.my",
  };
}
