import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PhoneIcon, TruckIcon, WhatsappIcon } from "@/components/icons";
import { phoneDisplay, phoneDisplay2, siteName, telHref, telHref2, waHref, waHref2 } from "@/lib/site";

export const metadata: Metadata = {
  title: "اتصل بنا",
  description: `اتصل أو راسل ${siteName} على ${phoneDisplay}. خدمة 24 ساعة في الشرقيه والقليوبية وطريق الاسماعيليه الصحراوي.`,
};

export default function ContactPage() {
  return (
    <div className="contact-page">
      <section className="contact-features">
        <article>
          <h1>كلمنا الأن نصلك فى الحال</h1>
          <div className="contact-feature-body">
            <p>
              الموبايل : <a href={telHref}>{phoneDisplay}</a> / <a href={telHref2}>{phoneDisplay2}</a>
            </p>
            <PhoneIcon width={68} height={68} />
          </div>
        </article>
        <article>
          <h2>واتساب</h2>
          <div className="contact-feature-body">
            <p>
              <a href={waHref} target="_blank" rel="noopener noreferrer">
                {phoneDisplay}
              </a>
              {" / "}
              <a href={waHref2} target="_blank" rel="noopener noreferrer">
                {phoneDisplay2}
              </a>
            </p>
            <WhatsappIcon width={68} height={68} />
          </div>
        </article>
        <article>
          <h2>مواعيد العمل</h2>
          <div className="contact-feature-body">
            <p>فريق عمل مخصص لتلقى جميع الأستفسارات طول ايام الاسبوع لمدة 24 ساعة</p>
            <TruckIcon width={68} height={68} />
          </div>
        </article>
      </section>
      <ContactForm />
    </div>
  );
}
