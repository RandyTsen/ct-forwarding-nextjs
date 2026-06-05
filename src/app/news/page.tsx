import type { Metadata } from "next";
import { NewsPageContent } from "./NewsPageContent";

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

export default function NewsPage() {
  return <NewsPageContent />;
}
