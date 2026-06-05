"use client";

import { useState } from "react";
import Link from "next/link";
import { InnerLayout } from "@/components/inner/InnerLayout";
import { PageHero } from "@/components/inner/PageHero";

// ---------------------------------------------------------------------------
// Static data (Sanity-ready structure)
// ---------------------------------------------------------------------------

const ANNOUNCEMENTS = [
  {
    id: "ann-1",
    date: "2025-06-01",
    tag: "Company",
    title: "CT Forwarding Expands Fleet to 200+ Units",
    excerpt:
      "CT Forwarding & Transport has crossed the 200-unit milestone, making it Sabah's largest private logistics fleet. The expansion includes additional prime movers, low loaders, and specialised trailers.",
    readTime: "3 min read",
  },
  {
    id: "ann-2",
    date: "2025-04-15",
    tag: "Partnership",
    title: "Renewed Strategic Contract with Telekom Malaysia",
    excerpt:
      "CT Forwarding has renewed its long-standing lorry crane services contract with Telekom Malaysia, extending a partnership that spans over a decade of reliable Sabah-wide infrastructure support.",
    readTime: "2 min read",
  },
  {
    id: "ann-3",
    date: "2025-02-20",
    tag: "Achievement",
    title: "Joseph Chong Re-elected as PPLKKK President",
    excerpt:
      "CT Forwarding Director Joseph Chong CMILT has been re-elected as President of Persatuan Pengusaha Lori KK, continuing his leadership role in Sabah's commercial vehicle industry association.",
    readTime: "2 min read",
  },
];

const CAREERS = [
  {
    id: "job-1",
    location: "Kota Kinabalu, Sabah",
    type: "Full-Time",
    department: "Operations",
    title: "Heavy Vehicle Driver (Prime Mover)",
    excerpt:
      "Experienced prime mover drivers required for container haulage operations across Sabah. Valid GDL licence essential. Competitive salary + EPF + SOCSO.",
    closing: "Open",
  },
  {
    id: "job-2",
    location: "KKIP, Sabah",
    type: "Full-Time",
    department: "Warehouse",
    title: "Warehouse Supervisor",
    excerpt:
      "Supervise day-to-day warehouse operations at our KKIP facility — 120,000+ sq.ft. Experience in container stuffing/unstuffing and inventory management preferred.",
    closing: "Open",
  },
  {
    id: "job-3",
    location: "Kota Kinabalu, Sabah",
    type: "Full-Time",
    department: "Logistics",
    title: "Freight Forwarding Executive",
    excerpt:
      "Handle import/export documentation, customs clearance coordination, and client communication. Customs Agent knowledge advantageous.",
    closing: "Open",
  },
];

const RESOURCES = [
  {
    id: "res-1",
    tag: "Guide",
    title: "Container Haulage in Sabah — What to Know",
    excerpt:
      "A practical guide to container haulage requirements in Sabah — LPKP licensing, route permits, port access, and what to look for in a reliable haulage partner.",
    readTime: "5 min read",
  },
  {
    id: "res-2",
    tag: "Insight",
    title: "Project Cargo 101 — Planning Your Heavy Lift",
    excerpt:
      "Understanding the planning process for project cargo and heavy lift logistics — route surveys, multi-axle requirements, permit applications, and why experience matters.",
    readTime: "6 min read",
  },
  {
    id: "res-3",
    tag: "Regulatory",
    title: "Customs Clearance in Sabah — The CT Advantage",
    excerpt:
      "Why having an in-house Licensed Customs Agent changes the equation — speed, cost, chain of custody, and seamless port-to-warehouse flow.",
    readTime: "4 min read",
  },
];

type Tab = "announcements" | "careers" | "resources";

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function TagBadge({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-sm bg-primary/10 px-2 py-0.5 font-body text-xs font-semibold uppercase tracking-wider text-primary">
      {label}
    </span>
  );
}

function AnnouncementCard({
  date,
  tag,
  title,
  excerpt,
  readTime,
}: (typeof ANNOUNCEMENTS)[number]) {
  const formatted = new Date(date).toLocaleDateString("en-MY", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="flex flex-col gap-4 rounded-sm border border-slate/10 bg-smoke p-6 transition-all hover:border-primary/20 hover:bg-white">
      <div className="flex items-center gap-3">
        <span className="font-body text-xs text-slate/60">{formatted}</span>
        <TagBadge label={tag} />
      </div>
      <h3 className="font-display text-xl font-bold uppercase leading-tight text-carbon">
        {title}
      </h3>
      <p className="font-body text-sm leading-relaxed text-slate/70">{excerpt}</p>
      <div className="mt-auto flex items-center justify-between pt-2">
        <span className="font-body text-xs text-slate/50">{readTime}</span>
        <span className="cursor-not-allowed font-body text-xs font-semibold text-slate/40">
          Coming Soon
        </span>
      </div>
    </article>
  );
}

function CareerCard({
  department,
  title,
  type,
  location,
  excerpt,
}: (typeof CAREERS)[number]) {
  return (
    <article className="flex flex-col gap-4 rounded-sm border border-slate/10 border-l-2 border-l-primary bg-smoke p-6 transition-all hover:border-primary/20 hover:bg-white">
      <div className="flex items-center gap-3">
        <TagBadge label={department} />
        <span className="font-body text-xs font-semibold text-primary">{type}</span>
      </div>
      <h3 className="font-display text-xl font-bold uppercase leading-tight text-carbon">
        {title}
      </h3>
      <p className="font-body text-xs text-slate/60">{location}</p>
      <p className="font-body text-sm leading-relaxed text-slate/70">{excerpt}</p>
      <div className="mt-auto pt-2">
        <Link
          href="/contact"
          aria-label={`Apply for ${title} position`}
          className="inline-block rounded-sm bg-primary px-5 py-3 font-body text-sm font-semibold text-white transition-colors hover:bg-dark"
        >
          Apply Now
        </Link>
      </div>
    </article>
  );
}

function ResourceCard({
  tag,
  title,
  excerpt,
  readTime,
}: (typeof RESOURCES)[number]) {
  return (
    <article className="relative flex flex-col gap-4 rounded-sm border border-slate/10 bg-smoke p-6 transition-all hover:border-primary/20 hover:bg-white">
      <div className="flex items-center gap-3">
        <TagBadge label={tag} />
        <span className="font-body text-xs text-slate/50">{readTime}</span>
      </div>
      <h3 className="font-display text-xl font-bold uppercase leading-tight text-carbon">
        {title}
      </h3>
      <p className="font-body text-sm leading-relaxed text-slate/70">{excerpt}</p>
      <div className="mt-auto pt-2">
        <span className="font-body text-xs font-semibold text-slate/40">Coming Soon</span>
      </div>
    </article>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function NewsPageContent() {
  const [activeTab, setActiveTab] = useState<Tab>("announcements");

  const tabs: { id: Tab; label: string }[] = [
    { id: "announcements", label: "Announcements" },
    { id: "careers", label: "Careers" },
    { id: "resources", label: "Resources" },
  ];

  return (
    <InnerLayout>
      <PageHero
        label="News & Updates"
        title="Stay"
        titleAccent="Informed"
        subtitle="Company announcements, career opportunities, and logistics industry insights."
      />

      {/* Tabs section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Tab bar */}
          <div className="mb-12 flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-6 py-2 font-body text-sm font-semibold transition-colors ${
                  activeTab === tab.id
                    ? "bg-primary text-white"
                    : "bg-smoke text-slate hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          {activeTab === "announcements" && (
            <div className="grid gap-6 lg:grid-cols-3">
              {ANNOUNCEMENTS.map((item) => (
                <AnnouncementCard key={item.id} {...item} />
              ))}
            </div>
          )}

          {activeTab === "careers" && (
            <div className="grid gap-6 lg:grid-cols-3">
              {CAREERS.map((item) => (
                <CareerCard key={item.id} {...item} />
              ))}
            </div>
          )}

          {activeTab === "resources" && (
            <div className="grid gap-6 lg:grid-cols-3">
              {RESOURCES.map((item) => (
                <ResourceCard key={item.id} {...item} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="font-display text-4xl font-bold uppercase text-white">
            Join Our Team
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-base text-white/80">
            We&apos;re always looking for experienced logistics professionals across Sabah.
          </p>
          <button
            onClick={() => setActiveTab("careers")}
            className="mt-8 inline-block rounded-sm bg-white px-8 py-3 font-body text-sm font-bold text-primary transition-colors hover:bg-smoke"
          >
            View Open Positions
          </button>
        </div>
      </section>
    </InnerLayout>
  );
}
