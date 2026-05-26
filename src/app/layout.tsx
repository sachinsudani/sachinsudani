import type { Metadata } from "next";
import { JetBrains_Mono, Manrope, Space_Grotesk } from "next/font/google";
import { ReactNode } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Sachin Sudani — Full Stack Developer & AI Engineer",
  description:
    "Full Stack Developer & AI Engineer with 4+ years building production Node.js, TypeScript & AWS systems. 3+ years deep in LLMs, RAG, AI agents, and voice AI.",
  keywords: [
    "Full Stack Developer",
    "AI Engineer",
    "LLM",
    "RAG",
    "AI Agents",
    "Node.js",
    "TypeScript",
    "React",
    "Next.js",
    "MongoDB",
    "AWS",
    "Backend",
  ],
  authors: [{ name: "Sachin Sudani" }],
  openGraph: {
    title: "Sachin Sudani — Full Stack Developer & AI Engineer",
    description:
      "Full Stack Developer & AI Engineer with 4+ years building production Node.js, TypeScript & AWS systems. 3+ years deep in LLMs, RAG, AI agents, and voice AI.",
    url: "https://sachinsudani.vercel.app",
    siteName: "Sachin Sudani",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sachin Sudani — Full Stack Developer & AI Engineer",
    description:
      "Full Stack Developer & AI Engineer with 4+ years building production Node.js, TypeScript & AWS systems. 3+ years deep in LLMs, RAG, AI agents, and voice AI.",
    creator: "@sachinsudani",
  },
  metadataBase: new URL("https://sachinsudani.vercel.app"),
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${spaceGrotesk.variable} ${manrope.variable} ${jetbrainsMono.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
