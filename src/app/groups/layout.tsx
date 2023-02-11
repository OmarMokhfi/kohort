"use client";

import Logo from "@/components/Logo";
import React, { useState } from "react";

export default function Dashboardlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOrganizer, setIsOrganizer] = useState(true);
  return (
    <div>
      <div className="h-12 w-full flex items-center justify-between container py-10">
        <div>
          <Logo />
        </div>
        <div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              checked={isOrganizer}
              onChange={() => setIsOrganizer(!isOrganizer)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange"></div>
            <span className="ml-3 text-sm min-w-[61px] font-medium text-gray-900">
              {isOrganizer ? "Organizer" : "Attendee"}
            </span>
          </label>
        </div>
      </div>
      <hr className="border-black" />
      {children}
    </div>
  );
}
