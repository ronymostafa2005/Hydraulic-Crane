import type { Metadata } from "next";
import Image from "next/image";
import { CheckIcon, RoadIcon } from "@/components/icons";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";
import { siteName } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "من نحن",
  description: `تعرف على ${siteName} وخدمات سحب ونقل السيارات في الشرقية والقليوبية وطريق الإسماعيلية الصحراوي.`,
  pathname: "/about",
});

const points = [
  "سيارات انقاذ حديثة",
  "تنسيق الخدمة حسب حالة السيارة",
  "تأكيد التوفر قبل التحرك",
  "توضيح التفاصيل قبل التحرك",
  "تغطية معلنة في مناطق التشغيل",
];

const columns = [
  [
    {
      title: "اختيار وسيلة النقل",
      text: `تختلف طريقة التعامل مع السيارة حسب حالتها وموقعها. شارك ${siteName} بتفاصيل العطل لتنسيق السحب أو النقل على سطحة بما يناسب الحالة.`,
    },
    {
      title: "التواصل وتأكيد التوفر",
      text: "تواصل معنا بموقع السيارة وحالتها لتأكيد توفر الونش المناسب وتنسيق خطوات السحب أو النقل.",
    },
  ],
  [
    {
      title: "توضيح التكلفة",
      text: "تتحدد تكلفة الخدمة حسب المسافة ونوع المعدة وظروف موقع التحميل. تواصل معنا لمراجعة التفاصيل المتاحة قبل التحرك.",
    },
    {
      title: "الالتزام بالمواعيد",
      text: "أرسل موقع السيارة أو أقرب معلم، واذكر وجهة النقل حتى نتحقق من التوفر وننسق الخطوات قبل التحرك.",
    },
  ],
  [
    {
      title: "تغطية مناطق التشغيل",
      text: "نعلن خدمة إنقاذ ونقل السيارات في الشرقية والقليوبية وعلى طريق الإسماعيلية الصحراوي. تُحدد إمكانية الوصول بعد معرفة موقع السيارة.",
    },
    {
      title: "سيارات انقاذ حديثة",
      text: "تتوفر خيارات للسحب والسطحة ونقل السيارات بعد الحوادث. اشرح حالة السيارة لاقتراح الوسيلة المناسبة وتأكيد توفرها.",
    },
  ],
];

export default function AboutPage() {
  return (
    <>
      <header className="page-banner">
        <div className="container page-banner-inner">
          <h1>من نحن</h1>
          <Breadcrumbs items={[{ name: "الرئيسية", href: "/" }, { name: "من نحن" }]} />
        </div>
      </header>

      <section className="container about-intro">
        <div className="about-copy">
          <p>
            يقدم {siteName} خدمات إنقاذ ونقل السيارات في الشرقية والقليوبية وطريق الإسماعيلية الصحراوي. اتصل بنا لتأكيد التوفر وتحديد نوع الونش المناسب للحالة.
          </p>
          <p>
            عند التواصل، شارك موقع السيارة وحالتها وأقرب معلم ثابت. تساعد هذه المعلومات في تحديد نوع الونش المطلوب والتحقق من إمكانية تقديم الخدمة قبل التحرك.
          </p>
          <p>
            تتضمن الخدمات سحب السيارات ونقلها على سطحة هيدروليك والتعامل مع نقل السيارة بعد الحوادث. يُختار أسلوب النقل وفق حالة السيارة ومكانها.
          </p>
          <p>
            تتحدد تفاصيل الخدمة والتكلفة وفق المسافة ونوع المعدة وظروف الموقع. نوضح ما هو متاح عند التواصل، ولا نعلن سعرًا ثابتًا أو زمن وصول مضمونًا.
          </p>
          <h2 className="about-sub">اهم ما يميزنا</h2>
          <ul className="about-checks">
            {points.map((point) => (
              <li key={point}>
                <CheckIcon />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="about-photo">
          <Image
            src="/images/wonsh-new-2.jpg"
            alt="ونش إنقاذ ينقل سيارة على السطحة"
            width={900}
            height={700}
          />
        </div>
      </section>

      <section className="container about-more">
        <h2 className="section-title">مميزات {siteName}</h2>
        <div className="about-columns">
          {columns.map((column) => (
            <div key={column[0].title}>
              {column.map((item) => (
                <article className="about-feature" key={item.title}>
                  <h3>{item.title}</h3>
                  <RoadIcon />
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
