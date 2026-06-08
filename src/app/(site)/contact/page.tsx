import type { Metadata } from "next";
import { ContactPageContent } from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us | CT Forwarding & Transport Sdn Bhd",
  description:
    "Contact CT Forwarding & Transport — enquire about transportation, freight forwarding, warehousing, or project cargo in Sabah. Call 088-259663 or email us today.",
  openGraph: {
    title: "Contact CT Forwarding & Transport",
    description: "Get a quote or enquiry — Sabah's leading logistics company since 1999.",
    url: "https://ctforwarding.com.my/contact",
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
