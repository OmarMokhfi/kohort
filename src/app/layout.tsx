"use client";

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
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
