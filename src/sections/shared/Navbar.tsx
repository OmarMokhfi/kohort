"use client";

import Logo from "@/components/Logo";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data } = useSession();
  console.log(data);
  return (
    <section
      className="md:py-8 w-full flex justify-between container fixed md:static bottom-4"
      style={{ zIndex: 999 }}
    >
      <Logo className="hidden md:block" />
      <div className="md:space-x-8 text-md md:text-lg py-4 md:py-0 font-bold flex items-center justify-around md:justify-end w-full rounded-xl bg-black text-white md:bg-transparent md:text-black">
        <a className="hidden md:block">About Us</a>
        <a className="text-orange">Create an event</a>
        <a href="#for-organizers" className="hidden md:block">
          For organizers
        </a>
        <a>Sign Up</a>
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
