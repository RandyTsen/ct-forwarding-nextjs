import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getServiceBySlug, ALL_SLUGS } from "@/lib/services-data";
import { TransportationContent } from "./content/TransportationContent";
import { FreightForwardingContent } from "./content/FreightForwardingContent";
import { WarehousingContent } from "./content/WarehousingContent";
import { ContainerDepotContent } from "./content/ContainerDepotContent";
import { BreakbulkContent } from "./content/BreakbulkContent";
import { OtherServicesContent } from "./content/OtherServicesContent";

const CONTENT_MAP: Record<string, React.ComponentType> = {
  "transportation": TransportationContent,
  "freight-forwarding": FreightForwardingContent,
  "warehousing": WarehousingContent,
  "container-depot": ContainerDepotContent,
  "breakbulk": BreakbulkContent,
  "other": OtherServicesContent,
};

export async function generateStaticParams() {
  return ALL_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) return {};
  return {
    title: svc.title,
    description: svc.metaDescription,
    openGraph: {
      title: `${svc.title} — CT Forwarding & Transport`,
      description: svc.metaDescription,
      url: `https://ctforwarding.com.my/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const Component = CONTENT_MAP[slug];
  if (!Component) notFound();
  return <Component />;
}
