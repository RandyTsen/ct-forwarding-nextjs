import type { Metadata } from "next";
import Link from "next/link";
import { InnerLayout } from "@/components/inner/InnerLayout";
import { Briefcase, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join CT Forwarding & Transport — Sabah's leading logistics company. View open positions and career opportunities across Kota Kinabalu, Sandakan, and Tawau.",
};

export default function CareersPage() {
  return (
    <InnerLayout>
      {/* Hero */}
      <section className="bg-carbon py-24 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/15 text-primary-light rounded-full px-4 py-1.5 mb-6">
            <Briefcase size={14} />
            <span className="font-body text-xs font-semibold tracking-widest uppercase">We&apos;re Hiring</span>
          </div>
          <h1 className="font-display font-extrabold uppercase tracking-wide text-white leading-none mb-6"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}>
            Join the CT Team
          </h1>
          <p className="font-body text-white/65 text-base leading-relaxed max-w-xl mx-auto">
            CT Forwarding &amp; Transport is Sabah&apos;s largest private logistics fleet operator.
            We&apos;re always looking for experienced logistics professionals — drivers, operations
            staff, customs agents, and more — across our Kota Kinabalu, Sandakan, and Tawau offices.
          </p>
        </div>
      </section>

      {/* Holding message */}
      <section className="bg-smoke py-20 px-5">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white border border-slate/10 rounded-sm p-10 shadow-sm">
            <div className="w-14 h-14 rounded-sm bg-primary/8 flex items-center justify-center mx-auto mb-6">
              <Briefcase size={26} className="text-primary" />
            </div>
            <h2 className="font-display font-bold uppercase tracking-wide text-carbon text-2xl mb-3">
              Positions Opening Soon
            </h2>
            <p className="font-body text-sm text-slate/65 leading-relaxed mb-8">
              We&apos;re currently updating our open positions. In the meantime, send us your
              resume and we&apos;ll be in touch when a suitable role opens up. We hire across
              all departments — transport operations, customs &amp; freight, warehouse, and administration.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white font-body font-bold text-sm px-8 py-3.5 rounded-sm hover:bg-primary-dark transition-colors"
            >
              Send Us Your Resume <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why work with us */}
      <section className="bg-white py-16 px-5">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] tracking-[0.4em] uppercase font-body font-semibold text-primary flex items-center gap-2 mb-3">
            <span className="w-6 h-px bg-primary" />Why CT Forwarding
          </p>
          <h2 className="font-display font-bold uppercase tracking-wide text-carbon text-2xl mb-10">
            Built on People
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                title: "25+ Years of Growth",
                body: "Founded in 1999, we've grown into Sabah's most trusted logistics operator — and we continue to expand.",
              },
              {
                title: "Sabah-Wide Operations",
                body: "Work across Kota Kinabalu, Sandakan, and Tawau with a team of 200+ fleet professionals.",
              },
              {
                title: "Industry Leadership",
                body: "Our directors hold CMILT certification and lead the Sabah logistics industry at the highest level.",
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col gap-2">
                <div className="w-8 h-1 bg-primary mb-2" />
                <h3 className="font-display font-bold uppercase tracking-wide text-carbon text-base">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-slate/65 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </InnerLayout>
  );
}
