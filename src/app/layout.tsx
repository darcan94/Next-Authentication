import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";

const comfortaa = Comfortaa({ 
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Authentication",
  description: "App ",
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
