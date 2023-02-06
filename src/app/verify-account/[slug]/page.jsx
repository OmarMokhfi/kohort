"use client";

import { verifyAccount } from "@/api/auth";
import SplashGraphic from "@/components/graphics/SplashGraphic";
import Logo from "@/components/Logo";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AiFillLock } from "react-icons/ai";

export default function Page() {
  const [isVerifying, setIsVerifying] = useState(true);
  const pathname = usePathname();
  const token = pathname.split("/")[2];

  useEffect(() => {
    if (token) {
      verifyAccount(token).then((res) => {
        setIsVerifying(false);
      });
    }
  }, [token]);

  return (
    <main className="w-full min-h-screen py-24 bg-dark-noise flex flex-col justify-center items-center space-y-12">
      <Logo className="text-white" />
      <div className="relative px-4">
        <div className="absolute bottom-0 left-0 translate-y-[50px] -translate-x-1/2 -rotate-45">
          <SplashGraphic className="w-[50px]" />
        </div>
        <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-4 rotate-180">
          <SplashGraphic className="w-[80px]" />
        </div>
        <div className="p-[30px] sm:p-[60px] bg-white flex flex-col space-y-6 justify-center items-center text-center text-black md:w-[500px] z-10 relative">
          <div className="flex flex-col space-y-1 items-center">
            <AiFillLock size={38} />
            <h1 className="text-2xl font-bold">Account Verification</h1>
            <p className="text-xl text-gray-500 max-w-[300px] mx-auto">
              Your account is being verified. <br />
              Login to start your journey!
            </p>
          </div>
          <div className="w-full h-[200px] relative">
            <Image layout="fill" src="/missing-puzzle.png" alt="image" />
          </div>
          <Link href="/login" className="w-full">
            <button
              disabled={isVerifying}
              className="bg-black disabled:bg-gray-500 w-full disabled:opacity-50 disabled:hover:opacity-50 rounded py-3 px-16 text-white text-xl font-bold hover:opacity-80"
            >
              {isVerifying ? "Verifying Account" : "Log In"}
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
