import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";

/** Browser-safe read client — no token, public dataset only */
export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // cached at CDN edge for faster reads
});

/** Server-side client with read token — use only in Server Components / Route Handlers */
export const sanityServerClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // bypass CDN for fresh data on server
  token: process.env.SANITY_API_READ_TOKEN,
});
