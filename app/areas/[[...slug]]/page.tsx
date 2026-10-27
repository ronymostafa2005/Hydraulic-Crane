import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AreaTemplate } from "@/components/AreaTemplate";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { allPublishedAreas, getChildAreas, resolveAreaSlug } from "@/lib/geo";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/jsonld";

type Params = { slug?: string[] };

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { slug: [] },
    ...allPublishedAreas.map((area) => ({
      slug: area.pathname.replace(/^\/areas\//, "").split("/"),
    })),
  ];
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const area = resolveAreaSlug(slug);
  if (area === "index") {
    return pageMetadata({
      title: "مناطق خدمة ونش الصاروخ",
      description: "تغطية ونش الإنقاذ في الشرقية والقليوبية وعلى طريق القاهرة–الإسماعيلية الصحراوي، مع صفحات مستقلة للمدن والمراكز الموثقة.",
      pathname: "/areas",
    });
  }
  if (!area) {
    return pageMetadata({ title: "المنطقة غير موجودة", description: "الرابط غير موجود ضمن مناطق الخدمة.", pathname: "/areas", index: false });
  }
  return pageMetadata({
    title: area.seoTitle,
    description: area.metaDescription,
    pathname: area.pathname,
    index: area.isIndexable,
  });
}

export default async function AreasPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const area = resolveAreaSlug(slug);
  if (!area) notFound();
  if (area !== "index") return <AreaTemplate area={area} />;

  const sharqia = getChildAreas("sharqia");
  const qalyubia = getChildAreas("qalyubia");

  return (
    <article className="seo-page">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "الرئيسية", pathname: "/" },
          { name: "مناطق الخدمة", pathname: "/areas" },
        ])}
      />
      <header className="page-banner">
        <div className="container page-banner-inner">
          <h1>مناطق خدمة ونش الصاروخ</h1>
          <Breadcrumbs items={[{ name: "الرئيسية", href: "/" }, { name: "مناطق الخدمة" }]} />
        </div>
      </header>
      <div className="container inner-body">
        <p>
          نطاق التشغيل المعلن: محافظة الشرقية، محافظة القليوبية، وطريق مصر–الإسماعيلية الصحراوي. الصفحات التالية منشورة فقط
          للمناطق التي يتوفر لها محتوى مستقل ومصدر تحقق. القرى والعزب تُذكر داخل صفحات المراكز.
        </p>
        <h2>
          <Link href="/areas/sharqia">محافظة الشرقية</Link>
        </h2>
        <ul className="seo-links">
          {sharqia.map((item) => (
            <li key={item.id}>
              <Link href={item.pathname}>{item.commonNameAr}</Link>
            </li>
          ))}
        </ul>
        <h2>
          <Link href="/areas/qalyubia">محافظة القليوبية</Link>
        </h2>
        <ul className="seo-links">
          {qalyubia.map((item) => (
            <li key={item.id}>
              <Link href={item.pathname}>{item.commonNameAr}</Link>
            </li>
          ))}
        </ul>
        <h2>محاور الطرق</h2>
        <ul className="seo-links">
          <li>
            <Link href="/areas/roads/cairo-ismailia-desert-road">طريق القاهرة–الإسماعيلية الصحراوي</Link>
          </li>
        </ul>
      </div>
    </article>
  );
}
