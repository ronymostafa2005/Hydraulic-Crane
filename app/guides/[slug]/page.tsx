import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ActionLinks } from "@/components/Ctas";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { guides } from "@/data/guides";
import { services } from "@/data/services";
import { allPublishedAreas } from "@/lib/geo";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((item) => item.slug === slug);
  if (!guide) {
    return pageMetadata({ title: "المقال غير موجود", description: "رابط غير معروف.", pathname: "/guides", index: false });
  }
  return pageMetadata({
    title: guide.seoTitle,
    description: guide.metaDescription,
    pathname: guide.pathname,
  });
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guides.find((item) => item.slug === slug);
  if (!guide) notFound();

  const relatedServices = services.filter((service) => guide.relatedServiceIds.includes(service.id));
  const relatedAreas = allPublishedAreas.filter((area) => guide.relatedAreaIds.includes(area.id));

  return (
    <article className="seo-page">
      <JsonLd
        data={[
          articleJsonLd({
            headline: guide.h1,
            description: guide.metaDescription,
            pathname: guide.pathname,
            dateModified: guide.lastModified,
          }),
          breadcrumbJsonLd([
            { name: "الرئيسية", pathname: "/" },
            { name: "الأدلة", pathname: "/guides" },
            { name: guide.title, pathname: guide.pathname },
          ]),
        ]}
      />
      <header className="page-banner">
        <div className="container page-banner-inner">
          <h1>{guide.h1}</h1>
          <Breadcrumbs
            items={[
              { name: "الرئيسية", href: "/" },
              { name: "الأدلة", href: "/guides" },
              { name: guide.title },
            ]}
          />
        </div>
      </header>
      <div className="container inner-body">
        {guide.uniqueContent.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
        <h2>خدمات مرتبطة</h2>
        <ul className="seo-links">
          {relatedServices.map((service) => (
            <li key={service.id}>
              <Link href={service.pathname}>{service.nameAr}</Link>
            </li>
          ))}
        </ul>
        <h2>مناطق مرتبطة</h2>
        <ul className="seo-links">
          {relatedAreas.map((area) => (
            <li key={area.id}>
              <Link href={area.pathname}>{area.commonNameAr}</Link>
            </li>
          ))}
        </ul>
        <ActionLinks />
      </div>
    </article>
  );
}
