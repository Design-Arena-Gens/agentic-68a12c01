import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://agentic-68a12c01.vercel.app"),
  title: "Pravaah | Men's Footwear & Accessories",
  description:
    "Pravaah curates fluid, future-ready footwear and men's accessories designed for movement and expression.",
  openGraph: {
    title: "Pravaah | Men's Footwear & Accessories",
    description:
      "Discover Pravaah's evolving line of footwear and accessories built for fluid motion and modern style.",
    url: "https://agentic-68a12c01.vercel.app",
    siteName: "Pravaah",
    images: [
      {
        url: "/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Pravaah hero showcasing footwear and accessories",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pravaah | Men's Footwear & Accessories",
    description:
      "Pravaah curates footwear and accessories engineered for movement, with space to grow into future categories.",
    images: ["/og-cover.png"],
  },
  keywords: [
    "Pravaah",
    "men's footwear",
    "men's accessories",
    "premium sneakers",
    "modern style",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-stone-950 text-stone-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
