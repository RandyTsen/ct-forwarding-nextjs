import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

/* ── Google Fonts ── */
const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/* ── Site Metadata ── */
export const metadata: Metadata = {
  title: {
    default:  "CT Forwarding & Transport Sdn Bhd — Sabah's Trusted Logistics Partner",
    template: "%s | CT Forwarding & Transport",
  },
  description:
    "CT Forwarding & Transport Sdn Bhd — Sabah's leading logistics company since 1998. Container haulage, freight forwarding, warehousing, and project cargo across Kota Kinabalu and all major Sabah towns.",
  keywords: [
    "CT Forwarding",
    "logistics Sabah",
    "container haulage Kota Kinabalu",
    "freight forwarding Sabah",
    "warehousing KK",
    "transport Sabah",
  ],
  authors: [{ name: "CT Forwarding & Transport Sdn Bhd" }],
  creator: "CT Forwarding & Transport Sdn Bhd",
  metadataBase: new URL("https://www.ctforwarding.com.my"),
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: "https://www.ctforwarding.com.my",
    siteName: "CT Forwarding & Transport Sdn Bhd",
    title: "CT Forwarding & Transport — Sabah's Trusted Logistics Partner",
    description:
      "Established 1998. Container haulage, freight forwarding, warehousing & project cargo across Sabah.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CT Forwarding & Transport Sdn Bhd",
    description: "Sabah's trusted logistics partner since 1998.",
  },
  robots: { index: true, follow: true },
};

/**
 * Root layout — only html/body shell + fonts.
 * No Navbar, no grain, no site chrome.
 * Site chrome lives in (site)/layout.tsx.
 * /studio gets no chrome at all.
 */
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        {/* Organisation Schema — structured data for Google */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "CT Forwarding & Transport Sdn Bhd",
          "alternateName": "CT Forwarding",
          "url": "https://www.ctforwarding.com.my",
          "logo": "https://www.ctforwarding.com.my/images/logo/ct-logo.svg",
          "foundingDate": "1999",
          "description": "Sabah's trusted logistics partner since 1999 — container haulage, freight forwarding, warehousing, and project cargo across Kota Kinabalu and all major Sabah towns.",
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
            "telephone": "+60882596663",
            "contactType": "customer service",
            "email": "contact@ctforwarding.com.my"
          },
          "sameAs": []
        }) }} />
      </head>
      <body className="min-h-full">
        {children}
      </body>
    </html>
  );
}
