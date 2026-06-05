import { LoadingScreen }   from "@/components/common/LoadingScreen";
import { HomeSlideshow }   from "@/components/home/HomeSlideshow";
import { HeroSection }     from "@/components/home/sections/HeroSection";
import { ServicesSection } from "@/components/home/sections/ServicesSection";
import { FleetTeaser }     from "@/components/home/sections/FleetTeaser";
import { WhyCTSection }    from "@/components/home/sections/WhyCTSection";
import { ProjectsSection } from "@/components/home/sections/ProjectsSection";
import { ClientsSection }  from "@/components/home/sections/ClientsSection";

export default function HomePage() {
  return (
    <>
      {/* Loading screen — homepage only, every refresh */}
      <LoadingScreen />

      {/* 6 full-screen slides — pass as direct JSX children */}
      <HomeSlideshow>
        <HeroSection />
        <ServicesSection />
        <FleetTeaser />
        <WhyCTSection />
        <ProjectsSection />
        <ClientsSection />
      </HomeSlideshow>
    </>
  );
}
