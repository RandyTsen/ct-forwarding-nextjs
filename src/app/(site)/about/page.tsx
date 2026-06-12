import type { Metadata } from "next";
import { AboutPageContent } from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "CT Forwarding & Transport — Sabah's premier logistics company since 1999. 200+ fleet units, CMILT-certified leadership, and 25+ years of logistics expertise.",
  openGraph: {
    title: "About CT Forwarding & Transport Sdn Bhd",
    description:
      "Sabah's trusted logistics partner since 1999. Container haulage, freight forwarding, warehousing, and project cargo.",
    url: "https://ctforwarding.com.my/about",
    siteName: "CT Forwarding & Transport",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CT Forwarding & Transport Sdn Bhd",
  "alternateName": "CT Forwarding",
  "url": "https://www.ctforwarding.com.my",
  "logo": "https://www.ctforwarding.com.my/images/logo/ct-logo.svg",
  "foundingDate": "1999",
  "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 50 },
  "description": "Sabah's largest private logistics operator since 1999 — 200+ fleet units, in-house Licensed Customs Agent, 120,000+ sq.ft warehousing at KKIP, and project cargo for Petronas, Telekom, and Ranhill.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Unit A905, 9th Floor, Wisma Merdeka Phase 1, Jalan Tun Razak",
    "addressLocality": "Kota Kinabalu",
    "addressRegion": "Sabah",
    "postalCode": "88000",
    "addressCountry": "MY"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+6088259663",
    "contactType": "customer service",
    "email": "contact@ctforwarding.com.my",
    "availableLanguage": ["English", "Malay", "Chinese"]
  },
  "areaServed": { "@type": "State", "name": "Sabah" }
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <AboutPageContent />
    </>
  );
}
