import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./clientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://myportoflio-fawn.vercel.app";
const description =
  "Matias Videla — Senior Frontend Engineer specialising in React, Next.js and TypeScript. I build accessible, fast e-commerce and web apps.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Matias Videla — Senior Frontend Engineer",
    template: "%s | Matias Videla",
  },
  description,
  keywords: [
    "Matias Videla",
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Accessibility",
    "Salesforce Commerce Cloud",
    "BigCommerce",
  ],
  authors: [{ name: "Matias Videla", url: siteUrl }],
  creator: "Matias Videla",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Matias Videla",
    title: "Matias Videla — Senior Frontend Engineer",
    description,
    locale: "en_US",
    images: [
      {
        url: "/foto_perfil.webp",
        width: 150,
        height: 150,
        alt: "Matias Videla",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Matias Videla — Senior Frontend Engineer",
    description,
    images: ["/foto_perfil.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-900 font-sans leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
