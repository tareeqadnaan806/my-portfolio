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
  metadataBase: new URL("https://github.com/tareeqadnaan806?tab=repositories"),
  title: {
    default: "Mohammad Tareeq Adnaan | Frontend Developer",
    template: "%s | Mohammad Tareeq Adnaan",
  },
  description:
    "Modern frontend developer portfolio for Mohammad Tareeq Adnaan, a React, Next.js, and TypeScript specialist with near to 3 years of experience.",
  keywords: [
    "Mohammad Tareeq Adnaan",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
  ],
  authors: [{ name: "Mohammad Tareeq Adnaan" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Mohammad Tareeq Adnaan | Frontend Developer",
    description:
      "React, Next.js, and TypeScript portfolio for Mohammad Tareeq Adnaan with featured projects and contact links.",
    type: "website",
    url: "https://github.com/tareeqadnaan806?tab=repositories",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Tareeq Adnaan | Frontend Developer",
    description:
      "Modern frontend developer portfolio built with Next.js and Tailwind CSS.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
