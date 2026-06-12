import type { Metadata } from "next";
import { InnerLayout } from "@/components/inner/InnerLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Common questions about CT Forwarding's freight forwarding, customs clearance, container haulage and logistics services in Sabah, Malaysia.",
};

const faqs = [
  {
    q: "What areas in Sabah do you cover?",
    a: "CT Forwarding operates across all major Sabah towns and districts — Kota Kinabalu, Sandakan, Tawau, Keningau, Kudat, and Lahad Datu. We run direct routes on all corridors; no subcontracting.",
  },
  {
    q: "Do you handle customs clearance in-house?",
    a: "Yes. CT Forwarding holds an in-house Licensed Customs Agent credential issued by the Royal Malaysian Customs Department (JKDM). We handle all import/export declarations, duty calculations, and documentation directly — no third-party customs broker needed.",
  },
  {
    q: "What container sizes do you handle?",
    a: "We handle 20ft General Purpose (20GP), 40ft General Purpose (40GP), and 40ft High Cube (40HC) containers. Our fleet includes 51 prime movers configured for both 20ft and 40ft operations, plus side loaders for self-loading container handling.",
  },
  {
    q: "Can you transport oversized or heavy cargo?",
    a: "Yes. CT Forwarding specialises in breakbulk and project cargo — we have 7 low-loaders (triple and quad axle) and 5 lorry cranes for heavy-lift operations. We have handled project cargo for Petronas, Telekom Malaysia, and Ranhill Engineering.",
  },
  {
    q: "Are your vehicles LPKP-licensed?",
    a: "Yes — every vehicle in our fleet holds a valid LPKP (Lembaga Pelesenan Kenderaan Perdagangan) licence, as required for commercial goods transport in Malaysia. All units are also GPS-tracked and inspection-certified.",
  },
  {
    q: "How do I get a freight quote?",
    a: "Call us at 088-259663 / 088-258662 or use the contact form on our website. Provide cargo type, origin, destination, dimensions, and weight for the fastest response. Our team typically responds within one business day.",
  },
  {
    q: "Do you have a container depot and warehouse?",
    a: "Yes. CT Forwarding operates a 120,000+ sq.ft warehouse and a container depot at Kota Kinabalu Industrial Park (KKIP). The depot handles 20ft and 40ft container storage, inspection, and maintenance. The warehouse supports stuffing, unstuffing, bonded storage, and last-mile distribution.",
  },
  {
    q: "What is CT Forwarding's history?",
    a: "CT Forwarding & Transport Sdn Bhd was founded in 1999 in Kota Kinabalu, Sabah. Over 25+ years we have grown into Sabah's largest private logistics fleet operator — 200+ vehicles, 10 vehicle types, an in-house customs agency, and preferred contractor status with major energy and telecoms clients.",
  },
  {
    q: "Do you offer marine cargo insurance?",
    a: "Yes. We offer marine and inland transit cargo insurance as part of our Other Services offering. We can coordinate coverage for sea freight, air freight, and inland road transport on your behalf.",
  },
  {
    q: "What dangerous goods certifications do you hold?",
    a: "CT Forwarding holds relevant dangerous goods handling certification for sea and air freight customs clearance. Please contact us to confirm compliance for specific cargo types before booking.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": a,
    },
  })),
};

export default function FAQPage() {
  return (
    <InnerLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">

          <p className="text-[11px] tracking-[0.4em] uppercase font-body font-semibold text-primary flex items-center gap-2 mb-3">
            <span className="w-6 h-px bg-primary" />Support
          </p>
          <h1 className="font-display text-3xl font-bold uppercase tracking-wide text-carbon mb-2">
            Frequently Asked Questions
          </h1>
          <p className="font-body text-base text-slate/60 mb-12">
            Common questions about our logistics services in Sabah. Can&apos;t find what you need?{" "}
            <Link href="/contact" className="text-primary underline underline-offset-2 hover:text-dark transition-colors">
              Contact us directly.
            </Link>
          </p>

          <div className="divide-y divide-slate/10">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="py-8">
                <h2 className="font-display text-base font-bold uppercase tracking-wide text-carbon mb-3">
                  {q}
                </h2>
                <p className="font-body text-base leading-relaxed text-carbon/75">{a}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-sm border border-primary/20 bg-primary/5 p-8 text-center">
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-carbon mb-2">
              Still Have Questions?
            </h3>
            <p className="font-body text-sm text-slate/65 mb-6">
              Our team is available Monday–Friday, 8:00 AM–5:30 PM.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+6088259663"
                className="inline-flex items-center gap-2 bg-primary text-white font-body font-bold text-sm px-7 py-3 rounded-sm hover:bg-primary-dark transition-colors"
              >
                Call 088-259663
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-primary text-primary font-body font-bold text-sm px-7 py-3 rounded-sm hover:bg-primary hover:text-white transition-colors"
              >
                Send an Enquiry
              </Link>
            </div>
          </div>

        </div>
      </div>
    </InnerLayout>
  );
}
