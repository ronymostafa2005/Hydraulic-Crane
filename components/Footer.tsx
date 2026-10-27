import Link from "next/link";
import { ConversionLink } from "@/components/ConversionLink";
import {
  CheckIcon,
  FacebookIcon,
  LinkedinIcon,
  PhoneIcon,
  PinterestIcon,
  TruckIcon,
  TwitterIcon,
  WhatsappIcon,
} from "@/components/icons";
import { highlights, phoneDisplay, phoneDisplay2, siteName, telHref, telHref2, waHref, waHref2 } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-highlights">
        <div>
          <PhoneIcon />
          <p>
            الموبايل : <ConversionLink href={telHref} dir="ltr" event="phone_click">{phoneDisplay}</ConversionLink> | <ConversionLink href={telHref2} dir="ltr" event="phone_click">{phoneDisplay2}</ConversionLink>
          </p>
        </div>
        <div>
          <WhatsappIcon />
          <p>
            <ConversionLink href={waHref} target="_blank" rel="noopener noreferrer" event="whatsapp_click">
              واتساب : <span dir="ltr">{phoneDisplay}</span>
            </ConversionLink>
          </p>
        </div>
        <div>
          <TruckIcon />
          <p>اتصل أو راسلنا لتأكيد التوفر وتحديد تفاصيل الخدمة</p>
        </div>
      </div>

      <div className="container footer-grid">
        <div>
          <h2 className="footer-title">اتصل بنا</h2>
          <ul className="footer-list plain">
            <li>
              <span>الموبايل:</span>
              <ConversionLink href={telHref} dir="ltr" event="phone_click">{phoneDisplay}</ConversionLink>
            </li>
            <li>
              <span>الموبايل 2:</span>
              <ConversionLink href={telHref2} dir="ltr" event="phone_click">{phoneDisplay2}</ConversionLink>
            </li>
            <li>
              <span>واتساب:</span>
              <ConversionLink href={waHref} target="_blank" rel="noopener noreferrer" dir="ltr" event="whatsapp_click">
                {phoneDisplay}
              </ConversionLink>
            </li>
            <li>
              <span>واتساب 2:</span>
              <ConversionLink href={waHref2} target="_blank" rel="noopener noreferrer" dir="ltr" event="whatsapp_click">
                {phoneDisplay2}
              </ConversionLink>
            </li>
            <li>
              <span>التغطية:</span>
              <span>
                <Link href="/areas/sharqia">الشرقية</Link>، <Link href="/areas/qalyubia">القليوبية</Link>،{" "}
                <Link href="/areas/roads/cairo-ismailia-desert-road">طريق الإسماعيلية الصحراوي</Link>
              </span>
            </li>
          </ul>
          <div className="footer-social" aria-hidden="true">
            <FacebookIcon />
            <TwitterIcon />
            <LinkedinIcon />
            <PinterestIcon />
          </div>
        </div>

        <div>
          <h2 className="footer-title">اهم مايميزنا</h2>
          <ul className="footer-list checks">
            {highlights.map((item) => (
              <li key={item}>
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-photo">
          <img src="/images/wonsh-new-3.jpg" alt="ونش نقل سيارة" />
        </div>
      </div>

      <div className="copyright-bar">
        <nav className="legal-nav" aria-label="روابط مهمة">
          <Link href="/areas">مناطق الخدمة</Link>
          <Link href="/services">خدماتنا</Link>
          <Link href="/guides">أدلة</Link>
          <Link href="/about">من نحن</Link>
          <Link href="/contact">تواصل معنا</Link>
          <Link href="/privacy">سياسة الخصوصية</Link>
        </nav>
        <p>جميع الحقوق محفوظة لدى {siteName}</p>
      </div>
    </footer>
  );
}
