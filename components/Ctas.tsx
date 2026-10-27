import { ConversionLink } from "@/components/ConversionLink";
import { telHref, waHref } from "@/lib/site";

export function AnnounceBar({ text }: { text: string }) {
  return (
    <section className="announce">
      <div className="container announce-inner">
        <p className="announce-text">{text}</p>
        <div className="announce-actions">
          <ConversionLink className="more" href={telHref} event="phone_click">
            <span>اتصل لتنسيق الخدمة</span>
          </ConversionLink>
          <ConversionLink className="more more-wa" href={waHref} target="_blank" rel="noopener noreferrer" event="whatsapp_click">
            <span>واتساب</span>
          </ConversionLink>
        </div>
      </div>
    </section>
  );
}

export function ActionLinks() {
  return (
    <div className="action-links">
      <ConversionLink className="action" href={telHref} event="phone_click">
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
            d="M7 3.8h2.2l1.2 3-1.6 1a12.5 12.5 0 0 0 6.4 6.4l1-1.6 3 1.2V18a1.8 1.8 0 0 1-2 1.8A15.2 15.2 0 0 1 4.2 5.8 1.8 1.8 0 0 1 7 3.8Z"
          />
        </svg>
        <span>اتصل لتنسيق الخدمة</span>
      </ConversionLink>
      <ConversionLink className="action" href={waHref} target="_blank" rel="noopener noreferrer" event="whatsapp_click">
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12.04 3.2A8.7 8.7 0 0 0 4.5 16.3L3.4 20.6l4.4-1.1a8.7 8.7 0 0 0 4.24 1.08h.01a8.72 8.72 0 0 0 0-17.44Zm5.2 10.7c-.2-.1-1.2-.6-1.4-.66-.2-.08-.34-.1-.48.12-.14.22-.54.66-.66.8-.12.14-.24.15-.44.05-.2-.1-.86-.32-1.64-1.02-.6-.54-1.02-1.2-1.14-1.4-.12-.22-.01-.34.1-.45.1-.1.22-.26.32-.38.1-.13.14-.22.22-.36.07-.15.03-.27-.02-.38-.06-.1-.48-1.16-.66-1.58-.17-.42-.35-.35-.48-.36h-.4c-.14 0-.36.05-.55.27-.2.22-.73.71-.73 1.74s.75 2.02.86 2.16c.1.14 1.48 2.26 3.58 3.17.5.22.9.35 1.2.45.51.16.97.14 1.33.08.4-.06 1.27-.52 1.45-1.02.18-.5.18-.93.12-1.02-.05-.1-.19-.14-.4-.24Z"
          />
        </svg>
        <span>راسلنا على واتساب</span>
      </ConversionLink>
    </div>
  );
}
