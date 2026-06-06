import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, sanityConfigured } from "./env";

/**
 * Browser-safe read client — no token, public dataset only.
 * Returns null when env vars are not configured (safe guard).
 */
export const sanityClient = sanityConfigured
  ? createClient({ projectId, dataset, apiVersion, useCdn: true })
  : null;

/**
 * Server-side client with read token — use only in Server Components / Route Handlers.
 * Returns null when env vars are not configured (safe guard).
 */
export const sanityServerClient = sanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false, // bypass CDN for fresh data on server
      token: process.env.SANITY_API_READ_TOKEN,
    })
  : null;
