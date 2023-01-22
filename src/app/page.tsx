import Navbar from "@/sections/shared/Navbar";
import HeroSection from "@/sections/homepage/HeroSection";
import PartnersSection from "@/sections/homepage/PartnersSection";
import NetworkSection from "@/sections/homepage/NetworkSection";
import ForOrganizersSection from "@/sections/homepage/ForOrganizersSection";

export default function Home() {
  return (
    <>
      <main className="w-full bg-orange-noise text-center bg-primary pb-24">
        <Navbar />
        <HeroSection />
      </main>
      <PartnersSection />

      <NetworkSection />

      <ForOrganizersSection />
    </>
  );
}
