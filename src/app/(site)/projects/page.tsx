import type { Metadata } from "next";
import { sanityServerClient } from "@/sanity/client";
import { sanityConfigured, projectId, dataset } from "@/sanity/env";
import { allProjectsQuery } from "@/sanity/queries";
import { ProjectsPageContent } from "./ProjectsPageContent";
import type { SanityProject } from "./types";

export const revalidate = 60; // ISR: revalidate every 60 seconds

export const metadata: Metadata = {
  title: "Projects | CT Forwarding & Transport Sdn Bhd",
  description:
    "CT Forwarding's project portfolio — 10+ years as preferred contractor for Telekom Malaysia, Petronas Carigali, and Ranhill Engineering. Sabah's trusted logistics partner.",
  openGraph: {
    title: "Projects & Case Studies | CT Forwarding",
    description: "Real projects. Real results. Sabah's most trusted logistics partner.",
    url: "https://ctforwarding.com.my/projects",
  },
};

export default async function ProjectsPage() {
  // ── Dev diagnostics ────────────────────────────────────────────────────────
  if (process.env.NODE_ENV !== "production") {
    console.log("[Projects] Sanity configured:", sanityConfigured);
    console.log("[Projects] projectId:", projectId || "(missing)");
    console.log("[Projects] dataset:", dataset);
  }

  let sanityProjects: SanityProject[] = [];

  if (!sanityConfigured || !sanityServerClient) {
    console.warn("[Projects] Sanity env vars missing — using empty array.");
  } else {
    try {
      sanityProjects = await sanityServerClient.fetch<SanityProject[]>(allProjectsQuery);
    } catch (err) {
      console.error("[Projects] Sanity fetch failed:", err);
    }
  }

  if (process.env.NODE_ENV !== "production") {
    console.log("[Projects] projects fetched:", sanityProjects.length);
    console.log("[Projects] using fallback:", sanityProjects.length === 0);
  }

  return <ProjectsPageContent sanityProjects={sanityProjects} />;
}
