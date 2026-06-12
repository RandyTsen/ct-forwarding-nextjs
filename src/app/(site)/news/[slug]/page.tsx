import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { sanityServerClient } from "@/sanity/client";
import { sanityConfigured } from "@/sanity/env";
import {
  singleNewsPostQuery,
  relatedNewsPostsQuery,
  allNewsSlugQuery,
} from "@/sanity/queries";
import { InnerLayout } from "@/components/inner/InnerLayout";
import type { SanityNewsPost } from "../types";

export const revalidate = 60;

// ── Static params ─────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  if (!sanityConfigured || !sanityServerClient) return [];
  const slugs = await sanityServerClient
    .fetch<{ slug: string }[]>(allNewsSlugQuery)
    .catch(() => []);
  return slugs.map((s) => ({ slug: s.slug }));
}

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!sanityConfigured || !sanityServerClient) return {};
  const post = await sanityServerClient
    .fetch<SanityNewsPost>(singleNewsPostQuery, { slug })
    .catch(() => null);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.imageUrl ? [{ url: post.imageUrl }] : [],
    },
  };
}

// ── Portable Text components ──────────────────────────────────────────────────

const ptComponents = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="font-body text-base leading-relaxed text-carbon/80 mb-4">{children}</p>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-carbon mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="font-display text-xl font-bold uppercase tracking-wide text-carbon mt-8 mb-3">
        {children}
      </h3>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-primary pl-5 my-6 font-body text-base italic text-slate/70">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="my-4 flex flex-col gap-2 pl-2">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="my-4 flex flex-col gap-2 pl-5 list-decimal">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="flex items-start gap-2 font-body text-base text-carbon/80">
        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <li className="font-body text-base text-carbon/80 pl-1">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-semibold text-carbon">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
    link: ({ value, children }: { value?: { href: string }; children?: React.ReactNode }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline underline-offset-2 hover:text-dark transition-colors"
      >
        {children}
      </a>
    ),
  },
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!sanityConfigured || !sanityServerClient) notFound();

  const [post, related] = await Promise.all([
    sanityServerClient
      .fetch<SanityNewsPost>(singleNewsPostQuery, { slug })
      .catch(() => null),
    sanityServerClient
      .fetch<SanityNewsPost[]>(relatedNewsPostsQuery, { slug, category: "announcement" })
      .catch(() => []),
  ]);

  if (!post) notFound();

  const backHref = `/news#${post.category === "resource" ? "resources" : "announcements"}`;
  const relatedPosts = related.filter((r) => r._id !== post._id).slice(0, 3);

  return (
    <InnerLayout>
      {/* Hero / cover */}
      {post.imageUrl && (
        <div className="relative h-72 w-full overflow-hidden md:h-96 lg:h-[28rem]">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon/70 to-transparent" />
        </div>
      )}

      {/* Article */}
      <div className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-14 lg:px-8">

          {/* Back link */}
          <Link
            href={backHref}
            className="mb-8 inline-flex items-center gap-1.5 font-body text-xs font-semibold uppercase tracking-wider text-primary hover:text-dark transition-colors"
          >
            ← Back to News
          </Link>

          {/* Meta */}
          <div className="mb-5 flex flex-wrap items-center gap-3">
            {post.tag && (
              <span className="inline-block rounded-sm bg-primary/10 px-2 py-0.5 font-body text-xs font-semibold uppercase tracking-wider text-primary">
                {post.tag}
              </span>
            )}
            <span className="font-body text-xs text-slate/50">
              {new Date(post.publishedAt).toLocaleDateString("en-MY", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-3xl font-bold uppercase leading-tight tracking-wide text-carbon md:text-4xl">
            {post.title}
          </h1>

          {/* Excerpt / subtitle */}
          {post.excerpt && (
            <p className="mt-4 font-body text-lg leading-relaxed text-slate/65 border-l-2 border-primary/30 pl-4">
              {post.excerpt}
            </p>
          )}

          {/* Divider */}
          <hr className="my-10 border-slate/10" />

          {/* Body */}
          {post.body && post.body.length > 0 ? (
            <div className="prose-ct">
              <PortableText value={post.body} components={ptComponents} />
            </div>
          ) : (
            <p className="font-body text-sm text-slate/40 italic">
              Full article content coming soon.
            </p>
          )}

        </div>
      </div>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <div className="bg-smoke py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="mb-8 font-display text-xl font-bold uppercase tracking-wide text-carbon">
              Related Posts
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((r) => (
                <Link
                  key={r._id}
                  href={`/news/${r.slug}`}
                  className="group flex flex-col gap-3 rounded-sm border border-slate/10 bg-white p-5 transition-all hover:border-primary/20 hover:shadow-sm"
                >
                  {r.tag && (
                    <span className="inline-block rounded-sm bg-primary/10 px-2 py-0.5 font-body text-xs font-semibold uppercase tracking-wider text-primary w-fit">
                      {r.tag}
                    </span>
                  )}
                  <h3 className="font-display text-base font-bold uppercase leading-tight text-carbon group-hover:text-primary transition-colors">
                    {r.title}
                  </h3>
                  <span className="font-body text-xs text-slate/45">
                    {new Date(r.publishedAt).toLocaleDateString("en-MY", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </InnerLayout>
  );
}
