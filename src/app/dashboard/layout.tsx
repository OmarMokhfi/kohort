"use client";

import Logo from "@/components/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { BiHomeAlt, BiStats } from "react-icons/bi";
import { CgCalendar } from "react-icons/cg";
import { GrConnect } from "react-icons/gr";
import { HiLogout, HiOutlineTicket } from "react-icons/hi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { RiGuideFill, RiSettings3Line } from "react-icons/ri";

export default function Dashboardlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOrganizer, setIsOrganizer] = useState(true);
  return (
    <div>
      <div className="h-12 w-full overflow-hidden flex items-center justify-between py-10 px-6 border-b border-black border-opacity-40">
        <div>
          <Logo />
        </div>
        <div className="flex items-center gap-3">
          <div>
            <>
              <button
                className="p-2 rounded text-red-700 hover:opacity-60 transition-colors duration-300"
                data-tooltip-target="logout"
                data-tooltip-placement="bottom"
              >
                <HiLogout size={28} />
              </button>
              <div
                id="logout"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded shadow-sm opacity-0 tooltip"
              >
                Log Out
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </>
          </div>
          <div>
            <>
              <button
                className="p-2 rounded text-[#5999f2] hover:opacity-80 transition-colors duration-300"
                data-tooltip-target="account"
                data-tooltip-placement="bottom"
              >
                <MdOutlineAccountCircle size={28} />
              </button>
              <div
                id="account"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded shadow-sm opacity-0 tooltip"
              >
                Account Settings
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </>
          </div>
          <div className="h-[24px]">
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
      </div>
      <div className="flex h-[calc(100vh-81px)] overflow-hidden">
        <div className="h-full p-2">
          <SideBar />
        </div>
        <main className="w-full !ml-8">{children}</main>
      </div>
    </div>
  );
}

const SideBar = () => {
  const pathname = usePathname();
  return (
    <div className="px-3 py-6 h-full bg-blue-noise rounded flex flex-col justify-between gap-8">
      <div className="flex flex-col space-y-8">
        <NavItem label="Home" href="/dashboard/groups/home">
          <BiHomeAlt size={28} />
        </NavItem>
        <NavItem label="Events" href="/dashboard/events">
          <CgCalendar size={28} />
        </NavItem>
        <NavItem label="Tickets" href="/dashboard/tickets">
          <HiOutlineTicket size={28} />
        </NavItem>
        <NavItem label="Statistics" href="/dashboard/reports">
          <BiStats size={28} />
        </NavItem>
        <NavItem label="Settings" href="/dashboard/groups">
          <RiSettings3Line size={28} />
        </NavItem>
      </div>

      <div className="flex flex-col space-y-8">
        <NavItem label="Integration" href="/dashboard/integration">
          <GrConnect size={28} />
        </NavItem>
        <NavItem label="Guide" href="https://www.eventbrite.com/support">
          <RiGuideFill size={28} />
        </NavItem>
      </div>
    </div>
  );
};

const NavItem = ({
  children,
  label,
  href = "/",
}: {
  children: React.ReactNode;
  label: string;
  href: string;
}) => (
  <Link href={href}>
    <button
      className="p-2 rounded hover:bg-[#f5985ec9] text-black transition-colors duration-300"
      data-tooltip-target={`navitem_${label.replaceAll(" ", "_")}`}
      data-tooltip-placement="right"
    >
      {children}
    </button>
    <div
      id={`navitem_${label?.replaceAll(" ", "_")}`}
      role="tooltip"
      className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
    >
      {label}
      <div className="tooltip-arrow" data-popper-arrow></div>
    </div>
  </Link>
);
