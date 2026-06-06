export interface SanityNewsPost {
  _id: string;
  title: string;
  slug: { current: string };
  category: "announcement" | "career" | "resource";
  publishedAt: string;
  excerpt: string;
  tag: string;
  imageUrl: string | null;
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
