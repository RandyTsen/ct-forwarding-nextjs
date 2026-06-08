// Portable text block type (simplified)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PortableTextBlock = any;

export interface SanityNewsPost {
  _id: string;
  title: string;
  slug: string; // flattened to string by GROQ
  category: "announcement" | "career" | "resource";
  publishedAt: string;
  excerpt: string;
  tag: string;
  imageUrl: string | null;
  body?: PortableTextBlock[];
}

export interface SanityCareerPost {
  _id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}
