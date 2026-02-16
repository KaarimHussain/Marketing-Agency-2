import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Marketing Web | Digital Growth & Strategy Agency",
  description: "Scale your business with Marketing Web. We provide data-driven digital marketing solutions including advanced SEO, targeted PPC campaigns, social media management, and custom web development designed for rapid growth.",
  keywords: "digital marketing agency, seo services company, ppc management results, social media marketing strategy, business scaling solutions, custom web development, online brand growth, marketing consultant services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
