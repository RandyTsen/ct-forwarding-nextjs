"use client";

import { useState } from "react";
import Link from "next/link";
import { InnerLayout } from "@/components/inner/InnerLayout";
import type { SanityNewsPost, SanityCareerPost } from "./types";

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface Props {
  sanityAnnouncements: SanityNewsPost[];
  sanityResources: SanityNewsPost[];
  sanityCarers: SanityCareerPost[];
}

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
}: {
  date: string;
  tag: string;
  title: string;
  excerpt: string;
}) {
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
      <div className="mt-auto pt-2">
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
  description,
}: {
  department: string;
  title: string;
  type: string;
  location: string;
  description: string;
}) {
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
      <p className="font-body text-sm leading-relaxed text-slate/70">{description}</p>
      <div className="mt-auto pt-2">
        <Link
          href="/contact"
          aria-label={`Apply for ${title} position`}
          className="inline-block rounded-sm bg-primary px-5 py-3 font-body text-sm font-semibold text-white transition-colors hover:bg-dark cursor-pointer"
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
}: {
  tag: string;
  title: string;
  excerpt: string;
}) {
  return (
    <article className="flex flex-col gap-4 rounded-sm border border-slate/10 bg-smoke p-6 transition-all hover:border-primary/20 hover:bg-white">
      <div className="flex items-center gap-3">
        <TagBadge label={tag} />
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

function EmptyState({ tab }: { tab: Tab }) {
  const messages: Record<Tab, { heading: string; body: string }> = {
    announcements: {
      heading: "No announcements yet",
      body: "Company news and updates will appear here once published in the CMS.",
    },
    careers: {
      heading: "No open positions",
      body: "We'll post career opportunities here when they become available.",
    },
    resources: {
      heading: "No resources yet",
      body: "Guides and industry insights will appear here once published in the CMS.",
    },
  };

  const { heading, body } = messages[tab];

  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <p className="font-display text-2xl font-bold uppercase text-carbon/30">{heading}</p>
      <p className="mt-2 font-body text-sm text-slate/50 max-w-sm">{body}</p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function NewsPageContent({
  sanityAnnouncements,
  sanityResources,
  sanityCarers,
}: Props) {
  const [activeTab, setActiveTab] = useState<Tab>("announcements");

  const tabs: { id: Tab; label: string; count: number }[] = [
    { id: "announcements", label: "Announcements", count: sanityAnnouncements.length },
    { id: "careers",       label: "Careers",       count: sanityCarers.length },
    { id: "resources",     label: "Resources",     count: sanityResources.length },
  ];

  return (
    <InnerLayout>
      {/* Tabs section — no hardcoded hero above this */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Section header */}
          <div className="mb-10">
            <p className="text-primary text-[11px] tracking-[0.45em] uppercase font-body font-semibold mb-2 flex items-center gap-2">
              <span className="w-8 h-px bg-primary-light" />Latest from CT
            </p>
            <h1 className="font-display font-extrabold uppercase tracking-wide text-carbon leading-none"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              News &amp; <span className="text-primary">Updates</span>
            </h1>
          </div>

          {/* Tab bar */}
          <div className="mb-12 flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-6 py-2 font-body text-sm font-semibold transition-colors cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-primary text-white"
                    : "bg-smoke text-slate hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {tab.label}
                <span className={`ml-1.5 text-xs ${activeTab === tab.id ? "text-white/70" : "text-slate/40"}`}>
                  ({tab.count})
                </span>
              </button>
            ))}
          </div>

          {/* Tab content — CMS-driven, empty state if no content */}
          {activeTab === "announcements" && (
            sanityAnnouncements.length > 0 ? (
              <div className="grid gap-6 lg:grid-cols-3">
                {sanityAnnouncements.map((item) => (
                  <AnnouncementCard
                    key={item._id}
                    date={item.publishedAt ?? new Date().toISOString()}
                    tag={item.tag ?? "Update"}
                    title={item.title}
                    excerpt={item.excerpt ?? ""}
                  />
                ))}
              </div>
            ) : (
              <EmptyState tab="announcements" />
            )
          )}

          {activeTab === "careers" && (
            sanityCarers.length > 0 ? (
              <div className="grid gap-6 lg:grid-cols-3">
                {sanityCarers.map((item) => (
                  <CareerCard
                    key={item._id}
                    department={item.department ?? ""}
                    title={item.title}
                    type={item.type ?? "Full-time"}
                    location={item.location ?? "Kota Kinabalu, Sabah"}
                    description={item.description ?? ""}
                  />
                ))}
              </div>
            ) : (
              <EmptyState tab="careers" />
            )
          )}

          {activeTab === "resources" && (
            sanityResources.length > 0 ? (
              <div className="grid gap-6 lg:grid-cols-3">
                {sanityResources.map((item) => (
                  <ResourceCard
                    key={item._id}
                    tag={item.tag ?? "Resource"}
                    title={item.title}
                    excerpt={item.excerpt ?? ""}
                  />
                ))}
              </div>
            ) : (
              <EmptyState tab="resources" />
            )
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
            className="mt-8 inline-block rounded-sm bg-white px-8 py-3 font-body text-sm font-bold text-primary transition-colors hover:bg-smoke cursor-pointer"
          >
            View Open Positions
          </button>
        </div>
      </section>
    </InnerLayout>
  );
}
