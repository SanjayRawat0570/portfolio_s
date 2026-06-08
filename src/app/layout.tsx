import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeScript from "@/components/ThemeScript";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
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
      className={`${inter.variable} ${jetbrains.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
