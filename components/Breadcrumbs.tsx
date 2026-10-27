import Link from "next/link";

export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav className="crumbs" aria-label="مسار الصفحة">
      {items.map((item, index) => {
        const last = index === items.length - 1;
        return (
          <span key={`${item.name}-${index}`}>
            {index > 0 ? <span className="sep">/</span> : null}
            {last || !item.href ? (
              <span className="here">{item.name}</span>
            ) : (
              <Link href={item.href}>{item.name}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
