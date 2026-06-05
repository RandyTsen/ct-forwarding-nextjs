import type { Metadata } from "next";
import { ProjectsPageContent } from "./ProjectsPageContent";

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

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
