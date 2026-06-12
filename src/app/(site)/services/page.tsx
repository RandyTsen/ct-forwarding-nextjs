import type { Metadata } from "next";
import { ServicesPageContent } from "./ServicesPageContent";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "CT Forwarding offers logistics services in Sabah — transportation, freight forwarding, warehousing, container depot, breakbulk and project cargo. Trusted since 1999.",
  openGraph: {
    title: "Logistics Services | CT Forwarding & Transport",
    description:
      "End-to-end logistics services across Sabah — transportation, freight, warehousing, and project cargo.",
    url: "https://ctforwarding.com.my/services",
  },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
