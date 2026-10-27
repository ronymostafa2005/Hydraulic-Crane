import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { guides } from "@/data/guides";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "أدلة طلب الونش والسلامة على الطريق",
  description: "مقالات عملية عن الفرق بين الونش والسطحة، طلب الخدمة، التكلفة، والنقل بين الشرقية والقليوبية.",
  pathname: "/guides",
});

export default function GuidesIndexPage() {
  return (
    <article className="seo-page">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "الرئيسية", pathname: "/" },
          { name: "الأدلة", pathname: "/guides" },
        ])}
      />
      <header className="page-banner">
        <div className="container page-banner-inner">
          <h1>أدلة ونش الصاروخ</h1>
          <Breadcrumbs items={[{ name: "الرئيسية", href: "/" }, { name: "الأدلة" }]} />
        </div>
      </header>
      <div className="container inner-body">
        <p>مقالات تجيب عن أسئلة حقيقية قبل أو أثناء طلب الونش، وتربطك بصفحات الخدمات والمناطق المناسبة.</p>
        <ul className="seo-links">
          {guides.map((guide) => (
            <li key={guide.slug}>
              <Link href={guide.pathname}>{guide.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
