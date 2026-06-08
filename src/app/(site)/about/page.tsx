import type { Metadata } from "next";
import { AboutPageContent } from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About Us | CT Forwarding & Transport Sdn Bhd",
  description:
    "CT Forwarding & Transport — Sabah's premier logistics company since 1999. 200+ fleet units, CMILT-certified leadership, and 40+ years of combined industry expertise.",
  openGraph: {
    title: "About CT Forwarding & Transport Sdn Bhd",
    description:
      "Sabah's trusted logistics partner since 1999. Container haulage, freight forwarding, warehousing, and project cargo.",
    url: "https://ctforwarding.com.my/about",
    siteName: "CT Forwarding & Transport",
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
