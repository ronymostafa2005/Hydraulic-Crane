import type { Metadata } from "next";
import Link from "next/link";
import { ActionLinks } from "@/components/Ctas";

export const metadata: Metadata = {
  title: "الصفحة غير موجودة",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <header className="inner-hero">
        <h1>الصفحة غير موجودة</h1>
      </header>
      <article className="container inner-body">
        <p>الرابط ده مش متاح ضمن صفحات الموقع. تقدر ترجع للرئيسية أو تفتح مناطق الخدمة أو تتصل لطلب الونش.</p>
        <p>
          <Link href="/">العودة للرئيسية</Link>
          {" · "}
          <Link href="/areas">مناطق الخدمة</Link>
          {" · "}
          <Link href="/services">خدماتنا</Link>
        </p>
        <ActionLinks />
      </article>
    </>
  );
}
