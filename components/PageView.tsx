"use client";

import { useEffect } from "react";
import { trackEvent, type ConversionEvent } from "@/components/ConversionLink";

export function PageView({ event, path }: { event: ConversionEvent; path: string }) {
  useEffect(() => {
    trackEvent(event, { page_path: path });
  }, [event, path]);
  return null;
}
