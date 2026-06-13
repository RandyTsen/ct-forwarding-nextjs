import { LoadingScreen }     from "@/components/common/LoadingScreen";
import { HomeSlideshow }     from "@/components/home/HomeSlideshow";
import { HeroSection }       from "@/components/home/sections/HeroSection";
import { ServicesSection }   from "@/components/home/sections/ServicesSection";
import { FleetTeaser }       from "@/components/home/sections/FleetTeaser";
import { WhyCTSection }      from "@/components/home/sections/WhyCTSection";
import { ProjectsSection }   from "@/components/home/sections/ProjectsSection";
import { TrustedBySection }  from "@/components/home/sections/TrustedBySection";
import { ClientsSection }    from "@/components/home/sections/ClientsSection";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MovingCompany"],
  "name": "CT Forwarding & Transport Sdn Bhd",
  "alternateName": "CT Forwarding",
  "url": "https://www.ctforwarding.com.my",
  "telephone": "+6088259663",
  "email": "contact@ctforwarding.com.my",
  "foundingDate": "1999",
  "logo": "https://www.ctforwarding.com.my/images/logo/ct-logo.svg",
  "image": "https://www.ctforwarding.com.my/images/fleet/container-haulage.jpg",
  "description": "Sabah's largest private logistics fleet — container haulage, freight forwarding, warehousing, and project cargo since 1999.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Unit A905, 9th Floor, Wisma Merdeka Phase 1, Jalan Tun Razak",
    "addressLocality": "Kota Kinabalu",
    "addressRegion": "Sabah",
    "postalCode": "88000",
    "addressCountry": "MY"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 5.9749,
    "longitude": 116.0724
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:30"
    }
  ],
  "areaServed": {
    "@type": "State",
    "name": "Sabah",
    "containedInPlace": { "@type": "Country", "name": "Malaysia" }
  },
  "priceRange": "$$",
  "currenciesAccepted": "MYR",
  "paymentAccepted": "Cash, Bank Transfer"
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Loading screen — homepage only, every refresh */}
      <LoadingScreen />

      {/* 6 full-screen slides — pass as direct JSX children */}
      <HomeSlideshow>
        <HeroSection />
        <ServicesSection />
        <FleetTeaser />
        <WhyCTSection />
        <ProjectsSection />
        <TrustedBySection />
        <ClientsSection />
      </HomeSlideshow>
    </>
  );
}
