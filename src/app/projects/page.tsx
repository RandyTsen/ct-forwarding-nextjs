import type { Metadata } from "next";
import { sanityServerClient } from "@/sanity/client";
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
  const sanityProjects = await sanityServerClient
    .fetch<SanityProject[]>(allProjectsQuery)
    .catch(() => []);

  return <ProjectsPageContent sanityProjects={sanityProjects} />;
}
