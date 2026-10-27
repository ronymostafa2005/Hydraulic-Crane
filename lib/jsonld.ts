import { phoneTel, phoneTel2, siteName, description } from "@/lib/site";
import { absUrl, siteUrl } from "@/lib/seo";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    name: siteName,
    description,
    url: siteUrl,
    telephone: [phoneTel, phoneTel2],
    areaServed: [
      { "@type": "AdministrativeArea", name: "محافظة الشرقية" },
      { "@type": "AdministrativeArea", name: "محافظة القليوبية" },
      { "@type": "Place", name: "طريق القاهرة–الإسماعيلية الصحراوي" },
    ],
    image: absUrl("/images/logo.png"),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    inLanguage: "ar-EG",
  };
}

export function serviceJsonLd(input: { name: string; description: string; pathname: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: absUrl(input.pathname),
    provider: { "@type": "AutomotiveBusiness", name: siteName, url: siteUrl, telephone: phoneTel },
    areaServed: ["محافظة الشرقية", "محافظة القليوبية", "طريق القاهرة–الإسماعيلية الصحراوي"],
  };
}

export function breadcrumbJsonLd(items: { name: string; pathname: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absUrl(item.pathname),
    })),
  };
}

export function articleJsonLd(input: { headline: string; description: string; pathname: string; dateModified: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    inLanguage: "ar-EG",
    dateModified: input.dateModified,
    mainEntityOfPage: absUrl(input.pathname),
    publisher: { "@type": "Organization", name: siteName, url: siteUrl },
  };
}
