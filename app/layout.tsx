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
        url: `${siteUrl}/images/share-kakao.png`,
        width: 1200,
        height: 630,
        alt: `${site.name} 카카오톡 공유 썸네일`
      },
      {
        url: `${siteUrl}/images/share-message.png`,
        width: 1080,
        height: 1080,
        alt: `${site.name} 문자 공유 썸네일`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} ${site.ballotLabel}`,
    description: site.description,
    images: [`${siteUrl}/images/share-kakao.png`]
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
