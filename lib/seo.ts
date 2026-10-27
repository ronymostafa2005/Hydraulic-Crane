import type { Metadata } from "next";
import { siteName } from "@/lib/site";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://hydraulic-crane.vercel.app").replace(/\/$/, "");

export function absUrl(pathname: string): string {
  if (pathname.startsWith("http")) return pathname;
  return `${siteUrl}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}

export function pageMetadata(input: {
  title: string;
  description: string;
  pathname: string;
  index?: boolean;
}): Metadata {
  const url = absUrl(input.pathname);
  const index = input.index ?? true;
  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: url },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: true },
    openGraph: {
      title: `${input.title} | ${siteName}`,
      description: input.description,
      url,
      locale: "ar_EG",
      type: "website",
      siteName,
    },
    twitter: {
      card: "summary_large_image",
      title: `${input.title} | ${siteName}`,
      description: input.description,
    },
  };
}

export const staticIndexablePaths = [
  { pathname: "/", lastModified: "2026-10-27" },
  { pathname: "/areas", lastModified: "2026-10-27" },
  { pathname: "/services", lastModified: "2026-10-27" },
  { pathname: "/about", lastModified: "2026-10-27" },
  { pathname: "/contact", lastModified: "2026-10-27" },
  { pathname: "/clients", lastModified: "2026-10-27" },
  { pathname: "/privacy", lastModified: "2026-10-27" },
  { pathname: "/guides", lastModified: "2026-10-27" },
] as const;
