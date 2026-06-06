import { groq } from "next-sanity";

// ── News Posts ────────────────────────────────────────────────────────────────

export const allNewsPostsQuery = groq`
  *[_type == "newsPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    category,
    publishedAt,
    excerpt,
    tag,
    "imageUrl": image.asset->url,
  }
`;

export const newsPostsByCategory = groq`
  *[_type == "newsPost" && category == $category] | order(publishedAt desc) {
    _id,
    title,
    slug,
    category,
    publishedAt,
    excerpt,
    tag,
    "imageUrl": image.asset->url,
  }
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
