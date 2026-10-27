"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import {
  FacebookIcon,
  PhoneIcon,
  PinterestIcon,
  SearchIcon,
  TwitterIcon,
  WhatsappIcon,
} from "@/components/icons";
import { ConversionLink } from "@/components/ConversionLink";
import { nav, phoneDisplay, phoneDisplay2, siteName, telHref, telHref2, waHref } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function go(href: string) {
    setOpen(false);
    if (href.startsWith("/#") && pathname === "/") {
      const id = href.slice(2);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    router.push(href);
  }

  function onSearch(event: FormEvent) {
    event.preventDefault();
    const value = query.trim();
    setSearchOpen(false);
    if (!value) return;
    if (/خصوص|سياسه|سياسة/.test(value)) {
      router.push("/privacy");
      return;
    }
    if (/اتصل|تواصل|رقم|فون/.test(value)) {
      router.push("/contact");
      return;
    }
    if (/منطقه|منطقة|شرقيه|شرقية|قليوب|زقازيق|عبور|عاشر|اسماعيليه|إسماعيلية/.test(value)) {
      router.push("/areas");
      return;
    }
    if (/دليل|مقال|سطحة|تكلفة|سلامه|سلامة/.test(value)) {
      router.push("/guides");
      return;
    }
    if (/من نحن|عن الشركه|عن الشركة/.test(value)) {
      router.push("/about");
      return;
    }
    if (/عملاء|عملائنا|عملاؤنا|عميل/.test(value)) {
      router.push("/clients");
      return;
    }
    router.push("/services");
  }

  return (
    <header className="site-header" id="top">
      <div className="topbar">
        <div className="topbar-inner">
        <div className="topbar-tools">
          <div className="search-wrap">
            <button
              type="button"
              className="icon-btn"
              aria-expanded={searchOpen}
              aria-label="بحث"
              onClick={() => setSearchOpen((value) => !value)}
            >
              <SearchIcon />
            </button>
            {searchOpen ? (
              <form className="search-form" onSubmit={onSearch}>
                <input
                  autoFocus
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="ابحث عن خدمة أو منطقة"
                  aria-label="بحث في الموقع"
                />
              </form>
            ) : null}
          </div>
          <span className="social-static" aria-hidden="true">
            <PinterestIcon />
          </span>
          <span className="social-static" aria-hidden="true">
            <TwitterIcon />
          </span>
          <span className="social-static" aria-hidden="true">
            <FacebookIcon />
          </span>
        </div>
        <ul className="topbar-contact">
          <li>
            <ConversionLink href={telHref} event="phone_click">
              <PhoneIcon />
              <span dir="ltr">{phoneDisplay}</span>
            </ConversionLink>
          </li>
          <li>
            <ConversionLink href={telHref2} event="phone_click">
              <PhoneIcon />
              <span dir="ltr">{phoneDisplay2}</span>
            </ConversionLink>
          </li>
          <li>
            <ConversionLink href={waHref} target="_blank" rel="noopener noreferrer" event="whatsapp_click">
              <WhatsappIcon />
              <span>واتساب</span>
            </ConversionLink>
          </li>
        </ul>
        </div>
      </div>

      <div className="header-bar">
        <Link href="/" className="logo" title={siteName}>
          <img src="/images/logo.png" alt={siteName} />
        </Link>

        <nav className={open ? "main-nav open" : "main-nav"} aria-label="القائمة الرئيسية">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : item.href.startsWith("/#")
                  ? false
                  : pathname === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={active ? "active" : undefined}
                aria-current={active ? "page" : undefined}
                onClick={(event) => {
                  if (item.href.startsWith("/#") && pathname === "/") {
                    event.preventDefault();
                    go(item.href);
                  } else {
                    setOpen(false);
                  }
                }}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="header-mobile-actions">
          <ConversionLink className="header-call-icon" href={telHref} aria-label="اتصل بنا الآن" event="phone_click">
            <PhoneIcon />
          </ConversionLink>
          <button
            type="button"
            className={open ? "burger open" : "burger"}
            aria-expanded={open}
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
