import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PhoneIcon, TruckIcon, WhatsappIcon } from "@/components/icons";
import { ConversionLink } from "@/components/ConversionLink";
import { pageMetadata } from "@/lib/seo";
import { phoneDisplay, phoneDisplay2, siteName, telHref, telHref2, waHref, waHref2 } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "اتصل بنا",
  description: `اتصل أو راسل ${siteName} على ${phoneDisplay} لتأكيد التوفر وتنسيق خدمة الإنقاذ في الشرقية والقليوبية وطريق الإسماعيلية الصحراوي.`,
  pathname: "/contact",
});

export default function ContactPage() {
  return (
    <div className="contact-page">
      <section className="contact-features">
        <article>
          <h1>اتصل بنا لتنسيق خدمة الإنقاذ</h1>
          <div className="contact-feature-body">
            <p>
              الموبايل : <ConversionLink href={telHref} event="phone_click">{phoneDisplay}</ConversionLink> / <ConversionLink href={telHref2} event="phone_click">{phoneDisplay2}</ConversionLink>
            </p>
            <PhoneIcon width={68} height={68} />
          </div>
        </article>
        <article>
          <h2>واتساب</h2>
          <div className="contact-feature-body">
            <p>
              <ConversionLink href={waHref} target="_blank" rel="noopener noreferrer" event="whatsapp_click">
                {phoneDisplay}
              </ConversionLink>
              {" / "}
              <ConversionLink href={waHref2} target="_blank" rel="noopener noreferrer" event="whatsapp_click">
                {phoneDisplay2}
              </ConversionLink>
            </p>
            <WhatsappIcon width={68} height={68} />
          </div>
        </article>
        <article>
          <h2>مواعيد العمل</h2>
          <div className="contact-feature-body">
            <p>اتصل أو راسلنا لتأكيد التوفر وتنسيق تفاصيل الخدمة</p>
            <TruckIcon width={68} height={68} />
          </div>
        </article>
      </section>
      <ContactForm />
    </div>
  );
}
