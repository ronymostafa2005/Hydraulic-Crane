"use client";

import { useEffect, useState } from "react";
import { ConversionLink } from "@/components/ConversionLink";
import { PhoneIcon, WhatsappIcon } from "@/components/icons";
import { telHref, waHref } from "@/lib/site";

export function FloatingCta() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="float-cta">
        <ConversionLink className="float-row" href={waHref} target="_blank" rel="noopener noreferrer" aria-label="واتساب" event="whatsapp_click">
          <span className="float-btn wa" aria-hidden="true">
            <WhatsappIcon />
          </span>
          <span className="float-label">واتساب</span>
        </ConversionLink>
        <ConversionLink className="float-row" href={telHref} aria-label="اتصل الآن" event="phone_click">
          <span className="float-btn phone" aria-hidden="true">
            <PhoneIcon />
          </span>
          <span className="float-label">اتصل الآن</span>
        </ConversionLink>
      </div>
      {showTop ? (
        <a className="scroll-top" href="#top" aria-label="العودة للأعلى">
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path d="M6 14.5 12 8.5l6 6" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </a>
      ) : null}
    </>
  );
}
