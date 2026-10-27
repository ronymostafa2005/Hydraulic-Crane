import Image from "next/image";
import Link from "next/link";
import { ActionLinks } from "@/components/Ctas";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageView } from "@/components/PageView";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { getChildAreas, getNearbyAreas, villagesForCenter, zagazigUnits } from "@/lib/geo";
import { services } from "@/data/services";
import type { ServiceArea } from "@/data/geo/types";
import { siteName } from "@/lib/site";

function crumbsFor(area: ServiceArea) {
  const items: { name: string; href?: string }[] = [
    { name: "الرئيسية", href: "/" },
    { name: "مناطق الخدمة", href: "/areas" },
  ];
  if (area.governorateId && area.type !== "governorate") {
    const parentPath = `/areas/${area.governorateId === "sharqia" ? "sharqia" : "qalyubia"}`;
    items.push({
      name: area.governorateId === "sharqia" ? "الشرقية" : "القليوبية",
      href: parentPath,
    });
  }
  items.push({ name: area.commonNameAr });
  return items;
}

export function AreaTemplate({ area }: { area: ServiceArea }) {
  const children = getChildAreas(area.id);
  const nearby = getNearbyAreas(area);
  const centerVillages =
    area.type === "center" && area.governorateId
      ? villagesForCenter(area.governorateId as "sharqia" | "qalyubia", area.commonNameAr)
      : [];
  const officialZagazig = area.id === "sharqia-zagazig" ? zagazigUnits() : null;
  const breadcrumbItems = crumbsFor(area);
  const jsonLdCrumbs = breadcrumbItems.map((item) => ({
    name: item.name,
    pathname: item.href || area.pathname,
  }));

  return (
    <article className="seo-page">
      <PageView event="area_page_view" path={area.pathname} />
      <JsonLd
        data={[
          serviceJsonLd({
            name: `ونش إنقاذ سيارات — ${area.commonNameAr}`,
            description: area.metaDescription,
            pathname: area.pathname,
          }),
          breadcrumbJsonLd(jsonLdCrumbs),
        ]}
      />
      <header className="page-banner">
        <div className="container page-banner-inner">
          <h1>{area.h1}</h1>
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </header>

      <section className="container seo-layout">
        <div className="seo-copy">
          {area.uniqueContent.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}

          <h2>الخدمات المتاحة في {area.commonNameAr}</h2>
          <p>
            {siteName} يقدم إنقاذ وسحب ونقل السيارات، وسطحة هيدروليك، ونقل بعد الحادث، حسب حالة السيارة داخل نطاق التشغيل
            المعلن. لا نعلن سعرًا ثابتًا أو دقيقة وصول مضمونة على الصفحة.
          </p>
          <ul className="seo-links">
            {services.map((service) => (
              <li key={service.id}>
                <Link href={service.pathname}>{service.nameAr}</Link>
              </li>
            ))}
          </ul>

          <h2>كيف تطلب الخدمة</h2>
          <p>
            اتصل أو راسل واتساب، أرسل موقع الخريطة، واذكر المدينة أو المركز وأقرب معلم. الأرقام الظاهرة على الموقع هي أرقام
            التشغيل المستخدمة في الصفحات كلها.
          </p>
          <ActionLinks />

          {area.coverageNotes.length ? (
            <>
              <h2>نطاق التغطية</h2>
              <ul className="seo-notes">
                {area.coverageNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </>
          ) : null}

          {area.relatedRoads.length ? (
            <>
              <h2>طرق ومحاور مرتبطة</h2>
              <ul className="seo-notes">
                {area.relatedRoads.map((road) => (
                  <li key={road}>{road}</li>
                ))}
              </ul>
            </>
          ) : null}

          {children.length ? (
            <>
              <h2>المدن والمراكز داخل {area.commonNameAr}</h2>
              <ul className="seo-links">
                {children.map((child) => (
                  <li key={child.id}>
                    <Link href={child.pathname}>{child.commonNameAr}</Link>
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          {officialZagazig ? (
            <>
              <h2>الوحدات المحلية القروية لمركز الزقازيق</h2>
              <p>
                المصدر:{" "}
                <a href={officialZagazig.sourceUrl} rel="noopener noreferrer" target="_blank">
                  التقسيم الإداري لمركز الزقازيق — موقع محافظة الشرقية
                </a>
                . الحالة: verified. إجمالي القرى في البيان 75، والتوابع 340.
              </p>
              {officialZagazig.localUnits.map((unit) => (
                <section key={unit.name}>
                  <h3>{unit.name}</h3>
                  <p>{unit.villages.join("، ")}</p>
                </section>
              ))}
            </>
          ) : null}

          {centerVillages.length && !officialZagazig ? (
            <>
              <h2>قرى {area.commonNameAr} في الحصر الجغرافي</h2>
              <p>
                الأسماء التالية مجمعة من قائمة قرى المحافظة المستندة إلى القاموس الجغرافي للبلاد المصرية. الحالة: compiled.
                ليست بديلاً عن أكواد القرى الحالية للجهاز المركزي للتعبئة العامة والإحصاء، ولا تُفتح لها صفحات مستقلة في هذه
                المرحلة.
              </p>
              <p className="seo-village-list">{centerVillages.join("، ")}</p>
            </>
          ) : null}

          {nearby.length ? (
            <>
              <h2>مناطق قريبة ذات صلة</h2>
              <ul className="seo-links">
                {nearby.map((item) => (
                  <li key={item.id}>
                    <Link href={item.pathname}>{item.commonNameAr}</Link>
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          {area.faqs.length ? (
            <>
              <h2>أسئلة شائعة</h2>
              {area.faqs.map((faq) => (
                <section key={faq.q}>
                  <h3>{faq.q}</h3>
                  <p>{faq.a}</p>
                </section>
              ))}
            </>
          ) : null}

          <p className="seo-source">
            مصدر التحقق: {area.sourceNote}{" "}
            {area.sourceUrl ? (
              <a href={area.sourceUrl} rel="noopener noreferrer" target="_blank">
                رابط المصدر
              </a>
            ) : (
              "لا يوجد رابط مباشر"
            )}
            . تاريخ المراجعة: {area.sourceVerifiedAt}. حالة السجل: {area.verificationStatus}.
          </p>
        </div>
        <div className="seo-media">
          <Image
            src="/images/wonsh-new-5.jpg"
            alt={`خدمة ${siteName} لسحب ونقل السيارات في ${area.commonNameAr}`}
            width={900}
            height={700}
          />
        </div>
      </section>
    </article>
  );
}
