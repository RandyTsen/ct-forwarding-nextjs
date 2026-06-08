"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
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

const HASH_MAP: Record<string, Tab> = {
  announcements: "announcements",
  careers: "careers",
  resources: "resources",
};

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

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-MY", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const IS_DEV = process.env.NODE_ENV !== "production";

// News / Resource card — whole card is a clickable Link to /news/[slug]
function NewsCard({ post, ctaLabel = "Read full article" }: { post: SanityNewsPost; ctaLabel?: string }) {
  // Dev guard: warn loudly if slug is missing so it doesn't silently break
  if (!post.slug) {
    if (IS_DEV) {
      return (
        <div className="flex flex-col gap-2 rounded-sm border-2 border-dashed border-red-400 bg-red-50 p-4">
          <span className="font-body text-xs font-bold text-red-600 uppercase tracking-wider">
            ⚠ Dev Warning: Missing slug
          </span>
          <span className="font-body text-xs text-red-500">{post.title}</span>
          <span className="font-body text-xs text-red-400">
            Open Sanity Studio → News Post → generate a slug → publish.
          </span>
        </div>
      );
    }
    // In production: skip the card silently rather than render a broken link
    return null;
  }

  return (
    <Link
      href={`/news/${post.slug}`}
      className="group flex flex-col gap-0 rounded-sm border border-slate/10 bg-smoke overflow-hidden transition-all hover:border-primary/20 hover:bg-white hover:shadow-md cursor-pointer"
    >
      {/* Cover image */}
      {post.imageUrl ? (
        <div className="relative h-44 w-full overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      ) : (
        <div className="h-44 w-full bg-slate/5 flex items-center justify-center">
          <span className="font-body text-xs uppercase tracking-widest text-slate/30">
            CT Forwarding
          </span>
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <div className="flex items-center gap-3">
          <span className="font-body text-xs text-slate/50">{formatDate(post.publishedAt)}</span>
          {post.tag && <TagBadge label={post.tag} />}
        </div>
        <h3 className="font-display text-lg font-bold uppercase leading-tight text-carbon group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="font-body text-sm leading-relaxed text-slate/65 line-clamp-3">
            {post.excerpt}
          </p>
        )}
        {/* CTA row */}
        <div className="mt-auto flex items-center justify-between pt-3 border-t border-slate/8">
          <span className="font-body text-xs font-semibold text-primary transition-colors group-hover:text-dark">
            {ctaLabel} →
          </span>
          {/* Dev only: show target slug path */}
          {IS_DEV && (
            <span className="font-mono text-[10px] text-slate/30 truncate max-w-[140px]">
              /news/{post.slug}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

// Career card — expandable accordion, no detail page needed
function CareerCard({ job }: { job: SanityCareerPost }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="flex flex-col gap-0 rounded-sm border border-slate/10 border-l-2 border-l-primary bg-smoke transition-all hover:border-primary/20 hover:bg-white">
      {/* Header — always visible */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="flex items-start justify-between gap-4 p-5 text-left cursor-pointer w-full"
        aria-expanded={expanded}
      >
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-2">
            {job.department && <TagBadge label={job.department} />}
            <span className="font-body text-xs font-semibold text-primary">{job.type}</span>
          </div>
          <h3 className="font-display text-lg font-bold uppercase leading-tight text-carbon">
            {job.title}
          </h3>
          <p className="font-body text-xs text-slate/55">{job.location}</p>
        </div>
        <span className="mt-1 flex-shrink-0 text-slate/40">
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </span>
      </button>

      {/* Expanded details */}
      {expanded && (
        <div className="flex flex-col gap-4 px-5 pb-5">
          {job.description && (
            <p className="font-body text-sm leading-relaxed text-slate/70">{job.description}</p>
          )}
          {job.requirements && job.requirements.length > 0 && (
            <ul className="flex flex-col gap-1.5">
              {job.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-2 font-body text-sm text-slate/65">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  {req}
                </li>
              ))}
            </ul>
          )}
          <div className="pt-1">
            <Link
              href="/contact"
              aria-label={`Apply for ${job.title}`}
              className="inline-block rounded-sm bg-primary px-5 py-2.5 font-body text-sm font-semibold text-white transition-colors hover:bg-dark"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
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
      body: "Career opportunities will appear here when available.",
    },
    resources: {
      heading: "No resources yet",
      body: "Guides and industry insights will appear here once published.",
    },
  };
  const { heading, body } = messages[tab];
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <p className="font-display text-2xl font-bold uppercase text-carbon/25">{heading}</p>
      <p className="mt-2 font-body text-sm text-slate/45 max-w-sm">{body}</p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function NewsPageContent({ sanityAnnouncements, sanityResources, sanityCarers }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>("announcements");

  // Read hash on mount to set initial tab (supports /news#careers etc.)
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const tab = HASH_MAP[hash];
    if (tab) setActiveTab(tab);
  }, []);

  // Sync hash when tab changes
  function switchTab(tab: Tab) {
    setActiveTab(tab);
    history.replaceState(null, "", `/news#${tab}`);
  }

  const tabs: { id: Tab; label: string; count: number }[] = [
    { id: "announcements", label: "Announcements", count: sanityAnnouncements.length },
    { id: "careers",       label: "Careers",       count: sanityCarers.length },
    { id: "resources",     label: "Resources",     count: sanityResources.length },
  ];

  return (
    <InnerLayout>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Minimal page header */}
          <div className="mb-10 border-b border-slate/10 pb-8">
            <h1 className="font-display text-3xl font-bold uppercase tracking-wide text-carbon">
              News &amp; <span className="text-primary">Updates</span>
            </h1>
            <p className="mt-2 font-body text-sm text-slate/55">
              Announcements, career opportunities, and industry resources from CT Forwarding.
            </p>
          </div>

          {/* Tab bar */}
          <div className="mb-10 flex flex-wrap gap-2" id="tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => switchTab(tab.id)}
                className={`rounded-full px-5 py-2 font-body text-sm font-semibold transition-colors cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-primary text-white"
                    : "bg-smoke text-slate hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {tab.label}
                <span className={`ml-1.5 text-xs ${activeTab === tab.id ? "text-white/65" : "text-slate/40"}`}>
                  ({tab.count})
                </span>
              </button>
            ))}
          </div>

          {/* Tab content */}
          {activeTab === "announcements" && (
            sanityAnnouncements.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {sanityAnnouncements.map((post) => (
                  <NewsCard key={post._id} post={post} ctaLabel="Read full article" />
                ))}
              </div>
            ) : <EmptyState tab="announcements" />
          )}

          {activeTab === "careers" && (
            sanityCarers.length > 0 ? (
              <div className="grid gap-4 lg:grid-cols-2">
                {sanityCarers.map((job) => (
                  <CareerCard key={job._id} job={job} />
                ))}
              </div>
            ) : <EmptyState tab="careers" />
          )}

          {activeTab === "resources" && (
            sanityResources.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {sanityResources.map((post) => (
                  <NewsCard key={post._id} post={post} ctaLabel="Read full article" />
                ))}
              </div>
            ) : <EmptyState tab="resources" />
          )}

        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="font-display text-4xl font-bold uppercase text-white">Join Our Team</h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-base text-white/80">
            We&apos;re always looking for experienced logistics professionals across Sabah.
          </p>
          <button
            onClick={() => switchTab("careers")}
            className="mt-8 inline-block rounded-sm bg-white px-8 py-3 font-body text-sm font-bold text-primary transition-colors hover:bg-smoke cursor-pointer"
          >
            View Open Positions
          </button>
        </div>
      </section>
    </InnerLayout>
  );
}
