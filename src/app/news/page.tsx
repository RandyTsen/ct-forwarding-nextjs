import type { Metadata } from "next";
import { sanityServerClient } from "@/sanity/client";
import { sanityConfigured, projectId, dataset } from "@/sanity/env";
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
  // ── Dev diagnostics ────────────────────────────────────────────────────────
  if (process.env.NODE_ENV !== "production") {
    console.log("[News] Sanity configured:", sanityConfigured);
    console.log("[News] projectId:", projectId || "(missing)");
    console.log("[News] dataset:", dataset);
  }

  let allPosts: SanityNewsPost[] = [];
  let careers: SanityCareerPost[] = [];

  if (!sanityConfigured || !sanityServerClient) {
    console.warn(
      "[News] Sanity env vars missing — NEXT_PUBLIC_SANITY_PROJECT_ID and/or " +
      "NEXT_PUBLIC_SANITY_DATASET not set. Using empty arrays (no fallback cards)."
    );
  } else {
    try {
      [allPosts, careers] = await Promise.all([
        sanityServerClient.fetch<SanityNewsPost[]>(allNewsPostsQuery),
        sanityServerClient.fetch<SanityCareerPost[]>(allCareerPostsQuery),
      ]);
    } catch (err) {
      console.error("[News] Sanity fetch failed:", err);
    }
  }

  const announcements = allPosts.filter((p) => p.category === "announcement");
  const resources     = allPosts.filter((p) => p.category === "resource");

  // ── Dev diagnostics (post-fetch) ──────────────────────────────────────────
  if (process.env.NODE_ENV !== "production") {
    console.log("[News] announcements fetched:", announcements.length);
    console.log("[News] careers fetched:", careers.length);
    console.log("[News] resources fetched:", resources.length);
    const usingFallback =
      announcements.length === 0 && careers.length === 0 && resources.length === 0;
    console.log("[News] using fallback:", usingFallback);
  }

  return (
    <NewsPageContent
      sanityAnnouncements={announcements}
      sanityResources={resources}
      sanityCarers={careers}
    />
  );
}
