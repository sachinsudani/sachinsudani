import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ReactNode } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sachin Sudani | Full Stack Developer | Node.js & React Expert",
  description:
    "Mid-Senior Full Stack Developer with 4+ years of experience building scalable web applications. Expert in Node.js, React, Next.js, TypeScript, MongoDB, and AWS. Currently at Xenett.",
  keywords: ["Full Stack Developer", "Node.js", "React", "Next.js", "TypeScript", "MongoDB", "AWS", "Software Engineer"],
  authors: [{ name: "Sachin Sudani" }],
  openGraph: {
    title: "Sachin Sudani | Full Stack Developer",
    description: "Mid-Senior Full Stack Developer specializing in Node.js, React, and cloud technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-white transition-colors dark:bg-gray-900 dark:text-white ${geistSans.variable} ${geistMono.variable}`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-24">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
