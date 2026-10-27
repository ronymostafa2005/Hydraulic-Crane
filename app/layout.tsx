import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import { Footer } from "@/components/Footer";
import { FloatingCta } from "@/components/FloatingCta";
import { Header } from "@/components/Header";
import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/components/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/jsonld";
import { siteUrl } from "@/lib/seo";
import { description, siteName } from "@/lib/site";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | ونش إنقاذ سيارات في الشرقية والقليوبية`,
    template: `%s | ${siteName}`,
  },
  description,
  applicationName: siteName,
  icons: { icon: "/images/logo.png", apple: "/images/logo.png" },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    title: siteName,
    description,
    locale: "ar_EG",
    type: "website",
    url: "/",
    siteName,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1d4ed8",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
        <Analytics />
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <a className="skip" href="#content">تخطي إلى المحتوى</a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <FloatingCta />
      </body>
    </html>
  );
}
