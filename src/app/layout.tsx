import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import {NextFont} from "next/dist/compiled/@next/font";
import React from "react";

const comfortaa: NextFont = Comfortaa({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Auth.js Authentication",
  description: "Authentication with Auth.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={comfortaa.className}>{children}</body>
      </html>
    </ViewTransitions>
  );
}
