"use client";

import Logo from "@/components/Logo";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data, status } = useSession();
  return (
    <section
      className="md:py-8 w-full flex justify-between container fixed md:static bottom-4"
      style={{ zIndex: 999 }}
    >
      <Logo className="hidden md:block" />
      <div className="md:space-x-8 text-md md:text-lg py-4 md:py-0 font-bold flex items-center justify-around md:justify-end w-full rounded-xl bg-black text-white md:bg-transparent md:text-black">
        <a className="hidden md:block">About Us</a>
        <Link
          href={
            status == "unauthenticated"
              ? "/login?ref=create-event"
              : "/groups/events/create"
          }
          className="text-orange"
        >
          Create an event
        </Link>
        {status == "unauthenticated" ? (
          <a href="#for-organizers" className="hidden md:block">
            For organizers
          </a>
        ) : (
          <Link href="/groups/home">Dashboard</Link>
        )}
        {status == "unauthenticated" && <Link href="/signup">Sign Up</Link>}
        {data?.user?.email ? (
          <a className="text-red-500 cursor-pointer" onClick={() => signOut()}>
            Log Out
          </a>
        ) : (
          <Link href="/login">Log In</Link>
        )}
      </div>
    </section>
  );
}
