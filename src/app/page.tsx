"use client";

import ForOrganizersSection from "@/sections/homepage/ForOrganizersSection";
import HeroSection from "@/sections/homepage/HeroSection";
import NetworkSection from "@/sections/homepage/NetworkSection";
import PartnersSection from "@/sections/homepage/PartnersSection";
import Footer from "@/sections/shared/Footer";
import Navbar from "@/sections/shared/Navbar";

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
      <Footer />
    </>
  );
}
