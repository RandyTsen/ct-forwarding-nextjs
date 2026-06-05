// ── Shared TypeScript types for CT Forwarding website ──

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  imageUrl?: string;
}

export interface FleetItem {
  id: string;
  name: string;
  category: "container" | "heavy" | "special" | "cargo";
  description: string;
  specs: string[];
  imageUrl: string;
  driveImageId?: string;
}

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  credentials?: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  category: "announcement" | "career" | "resource";
  publishedAt: string;
  slug: string;
  imageUrl?: string;
}

export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "full-time" | "part-time" | "contract";
  postedAt: string;
  description: string;
  requirements: string[];
}
