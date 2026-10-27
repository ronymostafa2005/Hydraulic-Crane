import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ConversionLink } from "@/components/ConversionLink";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/seo";
import { siteName, telHref } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "خدمات إنقاذ وسحب ونقل السيارات",
  description: `خدمات ${siteName}: إنقاذ وسحب ونقل السيارات في الشرقية والقليوبية وطريق الإسماعيلية الصحراوي. تواصل لتأكيد التوفر.`,
  pathname: "/services",
});

const blocks = [
  {
    title: "إنقاذ وسحب ونقل السيارات",
    image: "/images/wonsh-new-7.jpg",
    alt: "ونش سطحة لنقل السيارات",
    imageFirst: true,
    paragraphs: [
      `يقدم ${siteName} خدمات إنقاذ ونقل السيارات داخل الشرقية والقليوبية وعلى طريق الإسماعيلية الصحراوي. اتصل بموقع السيارة وحالتها لتأكيد التوفر وترتيب المساعدة المناسبة.`,
      "نرتب نوع المعدة حسب حالة السيارة ومكانها، سواء كان المطلوب سحبًا أو نقلًا على سطحة. اذكر أقرب معلم أو أرسل موقع الخريطة لتسهيل تحديد نقطة التحميل.",
      "تختلف إمكانية تقديم الخدمات المساندة مثل تغيير الإطارات أو شحن البطارية حسب الحالة؛ اذكر احتياجك عند التواصل لتأكيد ما هو متاح.",
      "تتحدد تكلفة النقل حسب المسافة ونوع المعدة وظروف الموقع، لذلك يُفضّل الاتفاق على التفاصيل قبل التحرك.",
      `لترتيب الخدمة، تواصل مع ${siteName} وشارك موقع السيارة والوجهة المطلوبة.`,
    ],
  },
  {
    title: "نقل سيارات الحوادث من وإلي مراكز الصيانة",
    image: "/images/wonsh-new-6.jpg",
    alt: "نقل سيارة على سطحة الونش",
    imageFirst: false,
    paragraphs: [
      `يقدم ${siteName} خدمات إنقاذ ونقل السيارات في مناطق التشغيل المعلنة. أرسل موقع السيارة ووصف الحالة لتأكيد إمكانية تقديم الخدمة.`,
      "يُختار أسلوب النقل حسب حالة السيارة ومكانها؛ وقد تكون السطحة أنسب إذا تعذر جر العجلات أو كانت السيارة متضررة.",
      "قبل التحرك، وضّح نقطة التحميل والوجهة ونوع السيارة حتى يمكن تنسيق الخدمة وشرح التكلفة المتاحة.",
      "بعد الاتفاق، تُنقل السيارة إلى مركز الصيانة أو العنوان الذي تحدده ضمن المسار المتفق عليه.",
    ],
  },
  {
    title: "خدمة إنقاذ سيارات في الطرق الصحراويه والعامة",
    image: "/images/wonsh-new-5.jpg",
    alt: "سيارة على سطح ونش إنقاذ",
    imageFirst: true,
    paragraphs: [
      `تغطي خدمات ${siteName} نطاقات معلنة في الشرقية والقليوبية، ومنها طريق الإسماعيلية الصحراوي. تواصل معنا لتأكيد إمكانية الوصول إلى نقطة العطل.`,
      "عند الاتصال، اذكر اتجاه السير وأقرب مدينة أو معلم ثابت وأرسل موقع الخريطة إن أمكن، ثم حدد وجهة نقل السيارة.",
      "تختلف إمكانية الوصول حسب نقطة التوقف وظروف الطريق؛ ننسق التفاصيل قبل التحرك ولا نعد بزمن وصول ثابت.",
      `تتحدد تكلفة نقل السيارة على طريق الإسماعيلية الصحراوي بحسب المسافة ونوع الونش وموقع التحميل.`,
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="services-page">
      <header className="page-banner">
        <div className="container page-banner-inner">
          <h1>خدمات ونش الصاروخ</h1>
        </div>
      </header>
      <div className="container inner-body">
        <ul className="seo-links">
          {services.map((service) => (
            <li key={service.id}>
              <Link href={service.pathname}>{service.nameAr}</Link>
            </li>
          ))}
        </ul>
      </div>
      {blocks.map((block) => (
        <section className="split" key={block.title}>
          {block.imageFirst ? (
            <div className="split-media">
              <Image src={block.image} alt={block.alt} fill sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
          ) : null}
          <div className="split-copy">
            <h2 className="section-title">{block.title}</h2>
            {block.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ConversionLink className="action action-solo" href={telHref} event="phone_click">
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                  d="M7 3.8h2.2l1.2 3-1.6 1a12.5 12.5 0 0 0 6.4 6.4l1-1.6 3 1.2V18a1.8 1.8 0 0 1-2 1.8A15.2 15.2 0 0 1 4.2 5.8 1.8 1.8 0 0 1 7 3.8Z"
                />
              </svg>
              <span>اتصل لتنسيق الخدمة</span>
            </ConversionLink>
          </div>
          {block.imageFirst ? null : (
            <div className="split-media">
              <Image src={block.image} alt={block.alt} fill sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
