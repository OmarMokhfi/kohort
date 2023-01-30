"use client";

import ForOrganizersSection from "@/sections/homepage/ForOrganizersSection";
import HeroSection from "@/sections/homepage/HeroSection";
import NetworkSection from "@/sections/homepage/NetworkSection";
import PartnersSection from "@/sections/homepage/PartnersSection";
import Navbar from "@/sections/shared/Navbar";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // fetch("/api/auth/register", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     email: "omar.mokhfi@gmail.com",
    //     password: "Azerty123456",
    //     first_name: "Omar",
    //     last_name: "Mokhfi",
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
  }, []);
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
