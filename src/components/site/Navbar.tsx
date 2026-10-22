"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Library, Mail, Menu, ScrollText, X } from "lucide-react";
import { NAV_PAGES } from "@/data/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0c2a20]/95 shadow-lg shadow-black/10 backdrop-blur-md"
          : "bg-gradient-to-b from-[#0c2a20]/85 to-transparent"
      }`}
    >
      <nav
        aria-label="التنقل الرئيسي"
        className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6"
      >
        {/* الشعار */}
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <span className="monogram-ring flex h-11 w-11 shrink-0 items-center justify-center rounded-full p-[2px]">
            <span className="flex h-full w-full items-center justify-center rounded-full bg-[#0c2a20]">
              <ScrollText className="h-5 w-5 text-[#d9b356]" aria-hidden />
            </span>
          </span>
          <span className="leading-tight">
            <span className="font-display block text-base font-bold text-[#faf7f0] sm:text-lg">
              أ.د/ أحمد عبد المنعم حسن
            </span>
            <span className="block text-[10px] font-medium tracking-wide text-[#d9b356] sm:text-[11px]">
              أستاذ الخضر المتفرغ — كلية الزراعة، جامعة القاهرة
            </span>
          </span>
        </Link>

        {/* روابط الصفحات المستقلة — سطح المكتب */}
        <ul className="hidden items-center gap-0.5 lg:flex">
          {NAV_PAGES.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`block rounded-md px-2.5 py-2 text-[13px] font-bold transition-colors xl:text-sm ${
                  isActive(item.href)
                    ? "bg-[#b98a2f]/20 text-[#d9b356]"
                    : "text-[#f3e8cf]/90 hover:bg-white/10 hover:text-[#d9b356]"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/books"
          className="hidden items-center gap-2 rounded-full bg-[#b98a2f] px-5 py-2.5 text-sm font-bold text-[#0c2a20] shadow-md shadow-black/20 transition-all hover:bg-[#d9b356] hover:shadow-lg lg:inline-flex"
        >
          <Library className="h-4 w-4" aria-hidden />
          المكتبة
        </Link>

        {/* زر القائمة للموبايل */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-[#f3e8cf] transition-colors hover:bg-white/10 lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* قائمة الموبايل */}
      {open && (
        <div className="border-t border-white/10 bg-[#0c2a20]/98 backdrop-blur-md lg:hidden">
          <ul className="mx-auto grid max-w-7xl gap-1 px-4 pb-4 pt-2">
            {NAV_PAGES.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`block rounded-md px-3 py-3 text-base font-bold transition-colors ${
                    isActive(item.href)
                      ? "bg-[#b98a2f]/20 text-[#d9b356]"
                      : "text-[#f3e8cf] hover:bg-white/10 hover:text-[#d9b356]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/books"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#b98a2f] px-5 py-3 text-base font-bold text-[#0c2a20]"
              >
                <Mail className="h-4 w-4" aria-hidden />
                تصفّح المكتبة العلمية
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
