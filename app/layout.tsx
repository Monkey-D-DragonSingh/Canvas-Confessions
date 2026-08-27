import type { Metadata } from "next";
import { Fraunces, Work_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MusicPlayer from "@/components/MusicPlayer";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const workSans = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Canvas Confessions",
  description: "Let the paintings speak for themselves.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${workSans.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gallery text-ivory">
        <SmoothScroll>{children}</SmoothScroll>
        <MusicPlayer />
      </body>
    </html>
  );
}