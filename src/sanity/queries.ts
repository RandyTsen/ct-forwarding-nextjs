import { groq } from "next-sanity";

// ── News Posts (listing) ──────────────────────────────────────────────────────

export const allNewsPostsQuery = groq`
  *[_type == "newsPost"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    publishedAt,
    excerpt,
    tag,
    "imageUrl": image.asset->url,
  }
`;

// ── Single News Post (detail) ─────────────────────────────────────────────────

export const singleNewsPostQuery = groq`
  *[_type == "newsPost" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    publishedAt,
    excerpt,
    tag,
    "imageUrl": image.asset->url,
    body,
  }
`;

// ── Related Posts (same category, excluding current) ─────────────────────────

export const relatedNewsPostsQuery = groq`
  *[_type == "newsPost" && category == $category && slug.current != $slug] | order(publishedAt desc) [0...3] {
    _id,
    title,
    "slug": slug.current,
    category,
    publishedAt,
    excerpt,
    tag,
    "imageUrl": image.asset->url,
  }
`;

// ── All slugs (for generateStaticParams) ─────────────────────────────────────

export const allNewsSlugQuery = groq`
  *[_type == "newsPost" && defined(slug.current)] { "slug": slug.current }
`;

// ── Career Posts ──────────────────────────────────────────────────────────────

export const allCareerPostsQuery = groq`
  *[_type == "careerPost" && isOpen == true] | order(_createdAt desc) {
    _id,
    title,
    department,
    location,
    type,
    description,
    requirements,
  }
`;

// ── Projects ──────────────────────────────────────────────────────────────────

export const allProjectsQuery = groq`
  *[_type == "project"] | order(order asc) {
    _id,
    id,
    accentColor,
    tag,
    client,
    scope,
    duration,
    period,
    highlight,
    highlightLabel,
    description,
    outcomes,
    metrics,
    "image": image.asset->url,
    imageAlt,
    order,
  }
`;
