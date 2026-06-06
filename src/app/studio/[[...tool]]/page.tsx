"use client";
/**
 * Embedded Sanity Studio — accessible at /studio
 * Must be a Client Component — the Studio runs entirely in the browser.
 * Protected by Sanity's own auth (only your Sanity account can log in).
 */
import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity/config";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
