import type { Metadata } from "next";
import { siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: "عملاؤنا",
  description: `ماركات السيارات التي ينقلها ${siteName} داخل الشرقيه والقليوبية وعلى طريق الاسماعيليه الصحراوي.`,
};

const logos = [
  { src: "/brands/hyundai.jpg", alt: "هيونداي" },
  { src: "/brands/honda.jpg", alt: "هوندا" },
  { src: "/brands/nissan.jpg", alt: "نيسان" },
  { src: "/brands/mitsubishi.png", alt: "ميتسوبيشي" },
  { src: "/brands/mercedes.jpg", alt: "مرسيدس" },
  { src: "/brands/maserati.jpg", alt: "مازيراتي" },
  { src: "/brands/renault.png", alt: "رينو" },
  { src: "/brands/subaru.jpg", alt: "سوبارو" },
  { src: "/brands/suzuki.jpg", alt: "سوزوكي" },
  { src: "/brands/skoda.png", alt: "سكودا" },
  { src: "/brands/cadillac.png", alt: "كاديلاك" },
  { src: "/brands/vw.jpg", alt: "فولكس فاجن" },
  { src: "/brands/kia-red.jpg", alt: "كيا" },
  { src: "/brands/kia.png", alt: "كيا" },
  { src: "/brands/dodge.png", alt: "دودج" },
  { src: "/brands/daewoo.jpg", alt: "دايو" },
  { src: "/brands/genesis.png", alt: "جينيسيس" },
  { src: "/brands/gmc.png", alt: "جي إم سي" },
  { src: "/brands/peugeot.jpg", alt: "بيجو" },
  { src: "/brands/bmw.png", alt: "بي إم دبليو" },
  { src: "/brands/audi.png", alt: "أودي" },
  { src: "/brands/opel.jpg", alt: "أوبل" },
  { src: "/brands/land-rover.png", alt: "لاند روفر" },
  { src: "/brands/lexus.png", alt: "لكزس" },
  { src: "/brands/mazda.png", alt: "مازدا" },
  { src: "/brands/mg.png", alt: "إم جي" },
  { src: "/brands/mini.png", alt: "ميني" },
  { src: "/brands/porsche.png", alt: "بورشه" },
  { src: "/brands/tesla.png", alt: "تسلا" },
  { src: "/brands/toyota.jpg", alt: "تويوتا" },
  { src: "/brands/lamborghini.png", alt: "لامبورجيني" },
  { src: "/brands/jaguar.png", alt: "جاجوار" },
  { src: "/brands/infiniti.png", alt: "إنفينيتي" },
  { src: "/brands/ford.png", alt: "فورد" },
  { src: "/brands/chevrolet.jpg", alt: "شيفروليه" },
];

export default function ClientsPage() {
  return (
    <section className="clients-page" aria-label="عملاؤنا">
      <ul className="clients-grid">
        {logos.map((logo) => (
          <li key={logo.src}>
            <img src={logo.src} alt={logo.alt} />
          </li>
        ))}
      </ul>
    </section>
  );
}
