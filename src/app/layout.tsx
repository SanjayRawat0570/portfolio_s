import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import ThemeScript from "@/components/ThemeScript";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sanjay Rawat — Software Engineer",
  description:
    "Sanjay Rawat — Software Engineer specializing in full-stack web development and AI-native systems. React, Next.js, TypeScript, Node.js, FastAPI, LangGraph & multi-agent orchestration.",
  authors: [{ name: "Sanjay Rawat" }],
  keywords: [
    "Sanjay Rawat",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "AI Engineer",
    "LangGraph",
  ],
  openGraph: {
    title: "Sanjay Rawat — Software Engineer",
    description:
      "Full-stack developer building scalable web apps and AI-native systems with React, Next.js, FastAPI & LangGraph.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${instrument.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
