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
  title: "Sachin Sudani — Full Stack Developer",
  description:
    "Mid-Senior Full Stack Developer with 4+ years building production Node.js, TypeScript & AWS systems. Currently engineering accounting automation at Xenett.",
  keywords: ["Full Stack Developer", "Node.js", "TypeScript", "React", "Next.js", "MongoDB", "AWS", "Backend"],
  authors: [{ name: "Sachin Sudani" }],
  openGraph: {
    title: "Sachin Sudani — Full Stack Developer",
    description: "Mid-Senior Full Stack Developer specializing in Node.js, TypeScript, and cloud-scale backend systems.",
    type: "website",
  },
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
