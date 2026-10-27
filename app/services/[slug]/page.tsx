import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ActionLinks } from "@/components/Ctas";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageView } from "@/components/PageView";
import { services } from "@/data/services";
import { allPublishedAreas } from "@/lib/geo";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";
import { siteName } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) {
    return pageMetadata({ title: "الخدمة غير موجودة", description: "رابط خدمة غير معروف.", pathname: "/services", index: false });
  }
  return pageMetadata({
    title: service.seoTitle,
    description: service.metaDescription,
    pathname: service.pathname,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  const relatedAreas = allPublishedAreas.filter((area) => service.relatedAreaIds.includes(area.id));

  return (
    <article className="seo-page">
      <PageView event="service_page_view" path={service.pathname} />
      <JsonLd
        data={[
          serviceJsonLd({
            name: service.nameAr,
            description: service.metaDescription,
            pathname: service.pathname,
          }),
          breadcrumbJsonLd([
            { name: "الرئيسية", pathname: "/" },
            { name: "خدماتنا", pathname: "/services" },
            { name: service.nameAr, pathname: service.pathname },
          ]),
        ]}
      />
      <header className="page-banner">
        <div className="container page-banner-inner">
          <h1>{service.h1}</h1>
          <Breadcrumbs
            items={[
              { name: "الرئيسية", href: "/" },
              { name: "خدماتنا", href: "/services" },
              { name: service.nameAr },
            ]}
          />
        </div>
      </header>
      <section className="container seo-layout">
        <div className="seo-copy">
          {service.uniqueContent.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
          <h2>مناطق مرتبطة بهذه الخدمة</h2>
          <ul className="seo-links">
            {relatedAreas.map((area) => (
              <li key={area.id}>
                <Link href={area.pathname}>{area.commonNameAr}</Link>
              </li>
            ))}
          </ul>
          <h2>كلمات البحث المرتبطة</h2>
          <p>{service.relevantKeywords.join("، ")}</p>
          {service.faqs.map((faq) => (
            <section key={faq.q}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </section>
          ))}
          <ActionLinks />
        </div>
        <div className="seo-media">
          <Image
            src="/images/wonsh-new-7.jpg"
            alt={`${service.nameAr} من ${siteName}`}
            width={900}
            height={700}
          />
        </div>
      </section>
    </article>
  );
}
