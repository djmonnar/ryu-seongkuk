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
  title: `${site.currentStatus} ${site.name} | ${site.neighborhood}`,
  description: site.description,
  applicationName: site.domain,
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName: site.domain,
    title: `${site.currentStatus} ${site.name} | ${site.neighborhood}`,
    description: "명곡·봉림의 약속, 이제 의정으로 증명하겠습니다.",
    images: [
      {
        url: `${siteUrl}/images/share-kakao.jpg`,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "류성국.kr 공유용 대표 이미지"
      },
      {
        url: `${siteUrl}/images/share-message.jpg`,
        width: 1080,
        height: 1080,
        type: "image/jpeg",
        alt: "류성국 정사각형 공유 썸네일"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.currentStatus} ${site.name} | ${site.neighborhood}`,
    description: site.description,
    images: [`${siteUrl}/images/share-kakao.jpg`]
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
