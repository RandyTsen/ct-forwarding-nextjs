export interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  icon: string;
  short: string;
  description: string;
  features: string[];
  stats: { v: string; l: string }[];
  image: string;
  imageAlt: string;
}

export const SERVICES_DATA: ServiceData[] = [
  {
    slug: "transportation",
    title: "Transportation",
    tagline: "Sabah's Largest Private Fleet",
    icon: "truck",
    short: "200+ Fleet Units · LPKP Licensed",
    description: "CT Forwarding operates Sabah's most comprehensive private logistics fleet — 200+ units across 10 specialised vehicle types. From 20ft container haulage to oversized low-loader transport, every vehicle is LPKP licensed, GPS-tracked, and matched precisely to cargo requirements.",
    features: [
      "51 prime movers — 20ft & 40ft containers",
      "6 side loaders — self-loading container handling",
      "7 low loaders — triple & quad axle for heavy lift",
      "6 car carriers — multi-deck vehicle transport",
      "5 lorry cranes — lift-and-place project services",
      "Platform, pole, and specialised trailers",
      "GPS tracking on all units",
      "24/7 operations across Sabah",
    ],
    stats: [
      { v: "200+", l: "Fleet Units" },
      { v: "10", l: "Vehicle Types" },
      { v: "100%", l: "LPKP Licensed" },
      { v: "24/7", l: "Operations" },
    ],
    image: "/images/fleet/container-haulage.jpg",
    imageAlt: "CT Forwarding prime mover container haulage Sabah",
  },
  {
    slug: "freight-forwarding",
    title: "Freight Forwarding & Customs Brokerage",
    tagline: "Licensed Customs Agent — Port to Warehouse",
    icon: "package",
    short: "Sea · Air · Customs Clearance",
    description: "CT Forwarding holds in-house Licensed Customs Agent status — a credential that delivers seamless port-to-warehouse clearance with no third-party delays. Sea freight, air freight, and full customs brokerage under one roof, backed by deep Sabah port knowledge built over 25+ years.",
    features: [
      "In-house Licensed Customs Agent",
      "Sea freight (FCL & LCL)",
      "Air freight handling",
      "Customs clearance & documentation",
      "Import/export regulatory compliance",
      "Dangerous goods handling certification",
      "Consolidation & deconsolidation",
      "Direct port relationships at KK Port",
    ],
    stats: [
      { v: "25+", l: "Years Port Experience" },
      { v: "FCL+LCL", l: "Sea Freight" },
      { v: "100%", l: "Compliance Rate" },
      { v: "In-House", l: "Customs Agent" },
    ],
    image: "/images/fleet/container-haulage.jpg",
    imageAlt: "CT Forwarding freight forwarding customs clearance Sabah",
  },
  {
    slug: "warehousing",
    title: "Warehousing & Distribution",
    tagline: "120,000+ Sq.Ft at KKIP",
    icon: "warehouse",
    short: "KKIP Strategic Location · Full-Service",
    description: "CT Forwarding's 120,000+ sq.ft warehouse at Kota Kinabalu Industrial Park is positioned at the strategic centre of Sabah's port and industrial logistics network. Full-service stuffing, unstuffing, inventory management, and precision last-mile distribution — all from one controlled facility.",
    features: [
      "120,000+ sq.ft at KKIP",
      "Container stuffing & unstuffing",
      "Inventory management systems",
      "Bonded warehouse capability",
      "Forklift & handling equipment on-site",
      "24/7 security & CCTV",
      "Last-mile distribution across KK",
      "Direct access to KKIP port infrastructure",
    ],
    stats: [
      { v: "120,000+", l: "Sq.Ft Total" },
      { v: "KKIP", l: "Strategic Location" },
      { v: "24/7", l: "Secure Operations" },
      { v: "Full", l: "Service Suite" },
    ],
    image: "/images/fleet/container-haulage.jpg",
    imageAlt: "CT Forwarding KKIP warehouse facility Sabah",
  },
  {
    slug: "container-depot",
    title: "Container Depot & Open Yard Storage",
    tagline: "Professionally Managed Container Storage",
    icon: "package",
    short: "Secure · Inspected · Managed",
    description: "CT Forwarding's container depot and open yard at KKIP provides professionally managed container storage, inspection, and maintenance — positioned at the core of Sabah's port and industrial logistics network. Empty and laden containers handled with full documentation and chain of custody.",
    features: [
      "Container storage (20ft & 40ft)",
      "Empty container management",
      "Container inspection services",
      "Minor repair & maintenance",
      "Customs bonded yard",
      "Open yard for oversized cargo",
      "Full documentation & chain of custody",
      "Direct integration with port operations",
    ],
    stats: [
      { v: "KKIP", l: "Location" },
      { v: "20ft+40ft", l: "Container Types" },
      { v: "Bonded", l: "Yard Status" },
      { v: "Full", l: "Documentation" },
    ],
    image: "/images/fleet/side-loader.jpg",
    imageAlt: "CT Forwarding container depot open yard KKIP",
  },
  {
    slug: "breakbulk",
    title: "Breakbulk & Project Cargo",
    tagline: "Trusted by Petronas, Telekom & Ranhill",
    icon: "cog",
    short: "Heavy Lift · Oversized · High-Value",
    description: "CT Forwarding specialises in complex, high-value, and oversized project cargo — the category that demands the most from a logistics partner. Trusted by Sabah's largest infrastructure and energy players for over a decade, CT delivers precision-engineered transport plans for cargo that cannot fail.",
    features: [
      "Heavy lift & oversized cargo transport",
      "Low-loader specialist operations",
      "Route survey & permit management",
      "Multi-axle load distribution planning",
      "Marine & cargo insurance coordination",
      "Multi-agency coordination",
      "Precision scheduling & delivery windows",
      "Site-to-site project cargo management",
    ],
    stats: [
      { v: "10+", l: "Years Project Cargo" },
      { v: "3", l: "Major Enterprise Clients" },
      { v: "7", l: "Low Loaders" },
      { v: "0", l: "Failed Deliveries" },
    ],
    image: "/images/projects/project-mega-machines.jpg",
    imageAlt: "CT Forwarding breakbulk project cargo heavy lift Sabah",
  },
  {
    slug: "other",
    title: "Other Services",
    tagline: "Insurance · Consultation · Consolidation",
    icon: "shield",
    short: "Marine Insurance · Supply Chain Advisory",
    description: "Beyond transport and storage, CT Forwarding provides specialised services that complete the logistics picture — marine and inland cargo insurance, cargo consolidation and deconsolidation, and bespoke supply chain consultation for complex logistics challenges.",
    features: [
      "Marine cargo insurance",
      "Inland transit insurance",
      "Cargo consolidation services",
      "Deconsolidation & distribution",
      "Supply chain consultation",
      "Logistics optimisation advisory",
      "Regulatory & compliance guidance",
      "Customs advisory services",
    ],
    stats: [
      { v: "Full", l: "Insurance Cover" },
      { v: "Bespoke", l: "Advisory Plans" },
      { v: "25+", l: "Years Knowledge" },
      { v: "End-to-End", l: "Solutions" },
    ],
    image: "/images/fleet/lorry-crane.jpg",
    imageAlt: "CT Forwarding specialised advisory services",
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES_DATA.find(s => s.slug === slug);
}

export const ALL_SLUGS = SERVICES_DATA.map(s => s.slug);
