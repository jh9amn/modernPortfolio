"use client";

import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Your App Name</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} font-mont text-dark bg-light dark:bg-dark antialiased`}
      >
        {/* Page Transition Effect */}

        {/* Avoid Flash of Unstyled Content (FOUC) */}
        {/* Uncomment the Script below if theme persistence across sessions is required */}
        {/* 
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`
            try {
              document.documentElement.classList.toggle(
                "dark",
                localStorage.theme === "dark" ||
                  (!("theme" in localStorage) &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches)
              );
            } catch (e) {
              console.error("Theme switcher error:", e);
            }
          `}
        </Script>
        */}

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
