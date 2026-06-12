import type { Metadata } from "next";
import { ServicesPageContent } from "./ServicesPageContent";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Full-service logistics in Sabah — transportation, freight forwarding, warehousing & project cargo. CT Forwarding & Transport, trusted since 1999.",
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
