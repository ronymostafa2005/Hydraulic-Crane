"use client";

import Image from "next/image";
import { WhatsappIcon } from "@/components/icons";
import { ConversionLink } from "@/components/ConversionLink";
import { telHref, waHref } from "@/lib/site";
import "@/app/homepage-modern.css";

export function HeroSection() {
  return (
    <section className="hero-sarokh" aria-label="ونش إنقاذ سيارات" dir="rtl">
      {/* Background Hero Image */}
      <Image
        className="hero-sarokh-bg"
        src="/images/wonsh-hero.jpg"
        alt="ونش الصاروخ لإنقاذ وسحب السيارات"
        fill
        priority
        quality={92}
        sizes="100vw"
      />

      {/* Hero Night Gradient Overlay */}
      <div className="hero-sarokh-overlay" aria-hidden="true" />

      {/* Decorative Bottom-Right Orange Swoosh Wave */}
      <div className="hero-sarokh-swoosh" aria-hidden="true">
        <svg viewBox="0 0 520 180" preserveAspectRatio="none" fill="none">
          <path
            d="M60 180 C 220 180, 360 110, 520 0 L 520 180 Z"
            fill="#FF7900"
          />
        </svg>
      </div>

      {/* Main Content (Aligned to the Right in RTL) */}
      <div className="hero-sarokh-container">
        <div className="hero-sarokh-content">
          {/* Decorative Dual-Streak Accent */}
          <div className="hero-sarokh-accent" aria-hidden="true">
            <span className="accent-bar-long" />
            <span className="accent-bar-short" />
          </div>

          {/* Heading */}
          <h1 className="hero-sarokh-title">
            <span className="title-white">ونش إنقاذ </span>
            <span className="title-blue">في الشرقية والقليوبية</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-sarokh-subtitle">
            تنسيق خدمة سحب ونقل السيارات حسب موقعك وتوفر الونش
          </p>

          {/* CTA Buttons Row */}
          <div className="hero-sarokh-actions">
            {/* Primary Orange Button: اطلب الونش الآن with circle arrow */}
            <ConversionLink
              href={telHref}
              className="hero-btn-order"
              aria-label="اطلب الونش الآن"
              event="phone_click"
            >
              <span className="btn-order-text">اطلب الونش الآن</span>
              <span className="btn-order-icon" aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </span>
            </ConversionLink>

            {/* Secondary Blue Pill Button: تواصل معنا عبر واتساب with green WhatsApp icon */}
            <ConversionLink
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-whatsapp"
              aria-label="تواصل معنا عبر واتساب"
              event="whatsapp_click"
            >
              <span className="wa-icon-wrap" aria-hidden="true">
                <WhatsappIcon />
              </span>
              <span className="btn-wa-text">تواصل معنا عبر واتساب</span>
            </ConversionLink>
          </div>

          {/* Feature Badges Row */}
          <div className="hero-sarokh-badges">
            <div className="hero-feature-badge">
              <span className="badge-icon-lightning" aria-hidden="true">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </span>
              <span className="badge-text">نقل آمن</span>
            </div>

            <div className="hero-feature-badge">
              <span className="badge-text">تغطية معلنة</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom-Left Trust Indicator (Under truck) */}
      <div className="hero-sarokh-trust">
        <div className="trust-shield" aria-hidden="true">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L4 6.2v5.6c0 5.2 3.4 10.1 8 11.4 4.6-1.3 8-6.2 8-11.4V6.2L12 2z"
              fill="#168BFF"
              stroke="#38BDF8"
              strokeWidth="1.2"
            />
            <path
              d="M8.5 12.2l2.3 2.3 4.7-4.7"
              stroke="#ffffff"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="trust-info">
          <div className="trust-heading">ثقة • أمان • سرعة</div>
          <div className="trust-sub">
            <span className="trust-line" aria-hidden="true">—</span>
            <span>خدمتك هي أولويتنا</span>
          </div>
        </div>
      </div>
    </section>
  );
}
