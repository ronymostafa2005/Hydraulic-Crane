import Link from "next/link";
import {
  CheckIcon,
  ClockIcon,
  FacebookIcon,
  LinkedinIcon,
  PhoneIcon,
  PinterestIcon,
  TruckIcon,
  TwitterIcon,
  WhatsappIcon,
} from "@/components/icons";
import { days, highlights, phoneDisplay, phoneDisplay2, siteName, telHref, telHref2, waHref, waHref2 } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-highlights">
        <div>
          <PhoneIcon />
          <p>
            الموبايل : <a href={telHref} dir="ltr">{phoneDisplay}</a> | <a href={telHref2} dir="ltr">{phoneDisplay2}</a>
          </p>
        </div>
        <div>
          <WhatsappIcon />
          <p>
            <a href={waHref} target="_blank" rel="noopener noreferrer">
              واتساب : <span dir="ltr">{phoneDisplay}</span>
            </a>
          </p>
        </div>
        <div>
          <TruckIcon />
          <p>فريق عمل مخصص لتلقى جميع الاستفسارات طول ايام الاسبوع لمدة 24 ساعة</p>
        </div>
      </div>

      <div className="container footer-grid">
        <div>
          <h2 className="footer-title">اتصل بنا</h2>
          <ul className="footer-list plain">
            <li>
              <span>الموبايل:</span>
              <a href={telHref} dir="ltr">{phoneDisplay}</a>
            </li>
            <li>
              <span>الموبايل 2:</span>
              <a href={telHref2} dir="ltr">{phoneDisplay2}</a>
            </li>
            <li>
              <span>واتساب:</span>
              <a href={waHref} target="_blank" rel="noopener noreferrer" dir="ltr">
                {phoneDisplay}
              </a>
            </li>
            <li>
              <span>واتساب 2:</span>
              <a href={waHref2} target="_blank" rel="noopener noreferrer" dir="ltr">
                {phoneDisplay2}
              </a>
            </li>
            <li>
              <span>التغطية:</span>
              <span>الشرقيه، القليوبية، طريق الاسماعيليه الصحراوي</span>
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

        <div>
          <h2 className="footer-title">مواعيد العمل</h2>
          <ul className="footer-list hours">
            {days.map((day) => (
              <li key={day}>
                <span>{day}:</span>
                <span className="with-icon">
                  <ClockIcon />
                  24 ساعة
                </span>
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
          <Link href="/about">من نحن</Link>
          <Link href="/contact">تواصل معنا</Link>
          <Link href="/privacy">سياسة الخصوصية</Link>
        </nav>
        <p>جميع الحقوق محفوظة لدى {siteName}</p>
      </div>
    </footer>
  );
}
