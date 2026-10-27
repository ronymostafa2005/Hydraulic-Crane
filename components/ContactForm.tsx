"use client";

import { FormEvent } from "react";
import { trackEvent } from "@/components/ConversionLink";
import { phoneTel } from "@/lib/site";

export function ContactForm() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();
    const text = [`الاسم: ${name}`, phone && `الموبايل: ${phone}`, email && `البريد: ${email}`, message]
      .filter(Boolean)
      .join("\n");
    trackEvent("lead_submit", { form: "contact" });
    window.open(`https://wa.me/${phoneTel.replace("+", "")}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="contact-fields">
        <div className="contact-inputs">
          <input name="name" required placeholder="اسمك هنا *" aria-label="اسمك هنا" />
          <input name="email" type="email" required placeholder="البريد الالكترونى *" aria-label="البريد الالكترونى" />
          <input name="phone" type="tel" placeholder="رقم الموبايل" aria-label="رقم الموبايل" />
        </div>
        <textarea name="message" required placeholder="اترك رسالتك او طلبك هنا*" aria-label="اترك رسالتك او طلبك هنا" />
      </div>
      <button className="contact-submit" type="submit">
        ارسل الأن
      </button>
    </form>
  );
}
