import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ActionLinks, AnnounceBar } from "@/components/Ctas";
import { BrandCarousel } from "@/components/BrandCarousel";
import { TruckIcon, WrenchIcon } from "@/components/icons";
import { siteName } from "@/lib/site";
import { HeroSection } from "@/components/HeroSection";
import { pageMetadata } from "@/lib/seo";
import "./homepage-modern.css";

export const metadata: Metadata = pageMetadata({
  title: "ونش إنقاذ سيارات في الشرقية والقليوبية",
  description:
    "ونش الصاروخ لخدمات سحب ونقل السيارات في الشرقية والقليوبية وطريق الإسماعيلية الصحراوي. اتصل لتأكيد التوفر وتنسيق الخدمة.",
  pathname: "/",
});

const features = [
  {
    title: "أوناش إنقاذ حديثة",
    text: "أوناش مجهزة للتحرك داخل الشرقية والقليوبية وعلى طريق الإسماعيلية الصحراوي، مع عناية بسيارتك من لحظة التحميل.",
    icon: <TruckIcon />,
  },
  {
    title: "فريق محترف",
    text: "سائقون وفنيون مدربون للتعامل مع الأعطال والحوادث ومختلف ظروف الطريق بأمان وهدوء.",
    icon: <WrenchIcon />,
  },
  {
    title: "تواصل لتنسيق الخدمة",
    text: "اتصل أو راسلنا بموقع السيارة ووجهة النقل لتأكيد التوفر وترتيب الخطوات المناسبة.",
    icon: <TruckIcon />,
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="section modern-intro" dir="rtl">
          <div className="container">
            <div className="modern-section-heading">
              <span className="modern-kicker">معاك وقت الطوارئ</span>

              <h2 className="section-title">
                مساعدة موثوقة، وقت ما تحتاجها
              </h2>

              <p className="modern-section-subtitle">
                عطل مفاجئ أو حادث على الطريق؟ {siteName} يوفر لك خدمة سحب
                ونقل سيارات في الشرقية والقليوبية وطريق الإسماعيلية الصحراوي،
                مع تأكيد التوفر عند التواصل.
              </p>
            </div>

            <div className="feature-grid modern-feature-grid">
              {features.map((feature, index) => (
                <article
                  className="feature modern-feature"
                  key={feature.title}
                >
                  <span className="modern-feature-number">
                    0{index + 1}
                  </span>

                  <div className="modern-feature-icon" aria-hidden="true">
                    {feature.icon}
                  </div>

                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="split modern-split" id="services" dir="rtl">
          <div className="split-copy modern-split-copy">
            <span className="modern-kicker">خدمة من أول اتصال</span>

            <p>
              هل تبحث عن خدمة إنقاذ سيارات سريعة وموثوقة؟ يوفر لك {siteName}
              حلولاً لسحب ونقل السيارات داخل الشرقية والقليوبية وعلى طريق
              الإسماعيلية الصحراوي، حسب التوفر وموقع السيارة.
            </p>

            <p>
              نعتمد على أوناش ومعدات رفع ونقل تساعد على حماية السيارة أثناء
              السحب، سواء كانت متعطلة أو متضررة في حادث، ثم ننقلها إلى مركز
              الصيانة الذي تحدده.
            </p>

            <p>
              نوضح تفاصيل الخدمة والتكلفة قبل التحرك قدر الإمكان، حتى تعرف
              الخطوات التالية من البداية ومن غير مفاجآت غير متوقعة.
            </p>

            <ActionLinks />
          </div>

          <div className="split-media modern-split-media">
            <Image
              src="/images/wonsh-new-6.jpg"
              alt="ونش سطحة لنقل سيارات الحوادث إلى مراكز الصيانة"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />

            <span className="modern-image-label">تواصل لتنسيق الخدمة</span>
          </div>
        </section>

        <section
          className="split modern-split modern-split-reverse"
          dir="rtl"
        >
          <div className="split-media modern-split-media">
            <Image
              src="/images/wonsh-new-3.jpg"
              alt="إنقاذ السيارات على الطرق السريعة والصحراوية"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />

            <span className="modern-image-label">
              <TruckIcon /> نقل إلى وجهتك
            </span>
          </div>

          <div className="split-copy modern-split-copy">
            <span className="modern-kicker">على الطريق ومعاك</span>

            <h2 className="section-title">
              إنقاذ سيارات على الطرق الصحراوية والعامة
            </h2>

            <p>
              نغطي الطرق السريعة والمحاور الرئيسية، ومنها طريق الإسماعيلية
              الصحراوي، مع إمكانية التواصل لتأكيد التوفر وترتيب الخدمة.
            </p>

            <p>
              ننقل السيارة المعطلة أو المتضررة إلى المكان الذي تختاره، سواء
              أقرب مركز صيانة أو عنوان داخل الشرقية والقليوبية، مع مراعاة
              ظروف الطريق ونوع السيارة.
            </p>

            <p>
              لو سيارتك وقفت على الطريق، اتصل بنا أو راسلنا على واتساب وشاركنا
              موقعك ونوع العطل لنساعدك في ترتيب وصول الونش المناسب.
            </p>

            <ActionLinks />
          </div>
        </section>

        <section className="section" dir="rtl">
          <div className="container">
            <h2 className="section-title">مناطق وخدمات يمكنك فتحها مباشرة</h2>
            <p>
              صفحات مستقلة للشرقية والقليوبية وطريق الإسماعيلية الصحراوي، مع روابط للمدن الرئيسية وخدمات الإنقاذ والسحب والسطحة.
            </p>
            <ul className="seo-links">
              <li><Link href="/areas/sharqia">ونش إنقاذ سيارات الشرقية</Link></li>
              <li><Link href="/areas/qalyubia">ونش إنقاذ سيارات القليوبية</Link></li>
              <li><Link href="/areas/roads/cairo-ismailia-desert-road">ونش طريق الإسماعيلية الصحراوي</Link></li>
              <li><Link href="/areas/sharqia/zagazig">ونش الزقازيق</Link></li>
              <li><Link href="/areas/sharqia/10th-of-ramadan">ونش العاشر من رمضان</Link></li>
              <li><Link href="/areas/qalyubia/obour">ونش العبور</Link></li>
              <li><Link href="/services/car-rescue">ونش إنقاذ سيارات</Link></li>
              <li><Link href="/services/hydraulic-flatbed">سطحة هيدروليك</Link></li>
              <li><Link href="/guides">أدلة طلب الونش</Link></li>
            </ul>
          </div>
        </section>

        <BrandCarousel />

        <AnnounceBar
          text="محتاج ونش الآن في الشرقية أو القليوبية أو على طريق الإسماعيلية الصحراوي؟ اتصل أو راسلنا فوراً"
        />
      </>
      );
}
