"use client";

import { StoreProvider } from "@/lib/StoreProvider";
import { Familjen_Grotesk } from "@next/font/google";
import { SessionProvider } from "next-auth/react";
import "./globals.css";

const grotesk = Familjen_Grotesk({
  weight: "500",
  subsets: ["latin"],
  variable: "--display-font",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${grotesk.variable}`}>
      <head />
      <body>
        <StoreProvider>
          <SessionProvider>{children}</SessionProvider>
        </StoreProvider>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.js"></script>
        <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/masking-input.js"></script>
      </body>
    </html>
  );
}
