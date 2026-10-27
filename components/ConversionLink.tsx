"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

export type ConversionEvent =
  | "phone_click"
  | "whatsapp_click"
  | "lead_submit"
  | "area_page_view"
  | "service_page_view";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: ConversionEvent, extra?: Record<string, string>) {
  const payload = { event, ...extra };
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
  if (typeof window.gtag === "function") {
    window.gtag("event", event, extra);
  }
}

export function ConversionLink({
  event,
  children,
  onClick,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { event: ConversionEvent; children: ReactNode }) {
  return (
    <a
      {...props}
      onClick={(e) => {
        trackEvent(event, { href_type: event });
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
