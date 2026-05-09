import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/src/data/candidate";
import { assetPath } from "@/src/data/paths";
import "./globals.css";

const siteUrl = "https://xn--3e0b09thkg.kr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${site.name} ${site.ballotLabel}`,
  description: site.description,
  applicationName: `${site.name} 후보 홈페이지`,
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName: `${site.name} 후보 홈페이지`,
    title: `${site.name} ${site.ballotLabel}`,
    description: site.description,
    images: [
      {
        url: `${siteUrl}/images/hero-wide.png`,
        width: 1600,
        height: 900,
        alt: `${site.name} 후보`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} ${site.ballotLabel}`,
    description: site.description,
    images: [`${siteUrl}/images/hero-wide.png`]
  },
  icons: {
    icon: assetPath("/images/hero-mobile.png")
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <SiteHeader />
        {children}
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
