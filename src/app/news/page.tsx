import type { Metadata } from "next";
import { sanityServerClient } from "@/sanity/client";
import { allNewsPostsQuery, allCareerPostsQuery } from "@/sanity/queries";
import { NewsPageContent } from "./NewsPageContent";
import type { SanityNewsPost, SanityCareerPost } from "./types";

export const revalidate = 60; // ISR: revalidate every 60 seconds

export const metadata: Metadata = {
  title: "News & Updates | CT Forwarding & Transport Sdn Bhd",
  description:
    "Latest news, announcements, career opportunities, and industry resources from CT Forwarding & Transport — Sabah's premier logistics company.",
  openGraph: {
    title: "News & Updates | CT Forwarding",
    description:
      "Stay up to date with CT Forwarding — announcements, careers, and logistics insights.",
    url: "https://ctforwarding.com.my/news",
  },
};

export default async function NewsPage() {
  // Fetch from Sanity — returns empty arrays if no content yet (graceful fallback)
  const [allPosts, careers] = await Promise.all([
    sanityServerClient.fetch<SanityNewsPost[]>(allNewsPostsQuery).catch(() => []),
    sanityServerClient.fetch<SanityCareerPost[]>(allCareerPostsQuery).catch(() => []),
  ]);

  const announcements = allPosts.filter((p) => p.category === "announcement");
  const resources = allPosts.filter((p) => p.category === "resource");

  return (
    <NewsPageContent
      sanityAnnouncements={announcements}
      sanityResources={resources}
      sanityCarers={careers}
    />
  );
}
