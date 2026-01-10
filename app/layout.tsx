import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bowie Management LLC | Credit & Funding Specialists",
  description:
    "Credit repair, funding strategies, and credit building programs to help you qualify for loans, housing, and business funding.",
  openGraph: {
    title: "Bowie Management LLC",
    description:
      "Professional credit repair and funding solutions. Book a free consultation today.",
    url: "https://bowiemanagment.com",
    siteName: "Bowie Management LLC",
    images: [
      {
        url: "https://bowiemanagment.com/bowie-logo.png",
        width: 1200,
        height: 630,
        alt: "Bowie Management LLC",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}