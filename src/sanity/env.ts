// Strip accidental whitespace or surrounding quotes from Vercel env var editor
const rawProjectId = (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "").trim().replace(/^["']|["']$/g, "");
const rawDataset   = (process.env.NEXT_PUBLIC_SANITY_DATASET || "").trim() || "production";

export const apiVersion = (process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01").trim();
export const dataset    = rawDataset;
export const projectId  = rawProjectId;

// Only mark configured if projectId passes Sanity's format requirement (a-z, 0-9, dashes).
// This prevents createClient from throwing at module init when the env var has an invalid value.
export const sanityConfigured = Boolean(
  rawProjectId &&
  /^[a-z0-9][a-z0-9-]*$/.test(rawProjectId) &&
  rawDataset
);
