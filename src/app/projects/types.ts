export interface SanityProject {
  _id: string;
  id: string;
  accentColor: string;
  tag: string;
  client: string;
  scope: string;
  duration: string;
  period: string;
  highlight: string;
  highlightLabel: string;
  description: string;
  outcomes: string[];
  metrics: { v: string; l: string }[];
  image: string | null;
  imageAlt: string;
  order: number;
}
