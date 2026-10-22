import { BookMarked, Download, ExternalLink, FileText, GraduationCap, Leaf, Library, Mail, MapPin, ScrollText } from "lucide-react";
import { PROFESSOR } from "@/data/content";
import { NAV_PAGES } from "@/data/navigation";

const DIRECT_LINKS = [
  { href: "/books", label: "المكتبة العلمية — الكتب", icon: Library },
  { href: "/bulletins", label: "النشرات الإرشادية", icon: FileText },
  { href: "/research", label: "الأبحاث والمقالات", icon: BookMarked },
  { href: PROFESSOR.cvUrl, label: "السيرة الذاتية (PDF)", icon: GraduationCap, external: true },
  { href: PROFESSOR.introUrl, label: "مقدمة الموقع الأصلية (PDF)", icon: Download, external: true },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-ink-pattern mt-auto border-t border-[#b98a2f]/25">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* التعريف */}
          <div>
            <div className="flex items-center gap-3">
              <span className="monogram-ring flex h-11 w-11 items-center justify-center rounded-full p-[2px]">
                <span className="flex h-full w-full items-center justify-center rounded-full bg-[#0c2a20]">
                  <ScrollText className="h-5 w-5 text-[#d9b356]" aria-hidden />
                </span>
              </span>
              <div>
                <p className="font-display text-lg font-bold text-[#faf7f0]">
                  أ.د/ أحمد عبد المنعم حسن
                </p>
                <p className="text-xs font-semibold text-[#d9b356]">
                  أستاذ الخضر المتفرغ — كلية الزراعة، جامعة القاهرة
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[#f3e8cf]/75">
              صفحة علمية متخصصة في إتاحة الإنتاج العلمي من مؤلفات وبحوث ونشرات إرشادية في
              مجال إنتاج وتربية الخضر — مجاناً للطلاب والباحثين والمهتمين بعلوم الخضر في مصر
              والعالم العربي.
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li className="flex items-start gap-3 text-[#f3e8cf]/85">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#d9b356]" aria-hidden />
                <a href={`mailto:${PROFESSOR.email}`} className="font-semibold hover:text-[#d9b356]" dir="ltr">
                  {PROFESSOR.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-[#f3e8cf]/85">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#d9b356]" aria-hidden />
                <span>{PROFESSOR.address}</span>
              </li>
            </ul>
          </div>

          {/* صفحات الموقع المستقلة */}
          <nav aria-label="صفحات الموقع">
            <h3 className="font-display text-base font-bold text-[#d9b356]">صفحات الموقع</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {NAV_PAGES.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    className="text-sm font-semibold text-[#f3e8cf]/80 transition-colors hover:text-[#d9b356]"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* روابط مباشرة */}
          <div>
            <h3 className="font-display text-base font-bold text-[#d9b356]">
              روابط مباشرة
            </h3>
            <ul className="mt-4 space-y-2.5">
              {DIRECT_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    {...("external" in l && l.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-[#f3e8cf]/80 transition-colors hover:text-[#d9b356]"
                  >
                    <l.icon className="h-3.5 w-3.5 shrink-0 text-[#b98a2f]" aria-hidden />
                    {l.label}
                    {"external" in l && l.external && (
                      <ExternalLink className="h-3 w-3 opacity-60 group-hover:opacity-100" aria-hidden />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* الخط السفلي */}
        <div className="mt-8 border-t border-white/10 pt-5">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-right">
            <p className="flex items-center gap-2 text-xs leading-relaxed text-[#f3e8cf]/65 sm:text-sm">
              <Leaf className="h-4 w-4 shrink-0 text-[#b98a2f]" aria-hidden />
              الصفحة الرسمية للأستاذ الدكتور / أحمد عبد المنعم حسن — جميع المؤلفات متاحة
              مجاناً للطلاب والباحثين.
            </p>
            <p className="text-xs leading-relaxed text-[#f3e8cf]/65 sm:text-sm">
              تصميم وإعداد: أ.د/ خالد عدلي خالد عسكر —{" "}
              <a
                href="mailto:khaled.adly@agr.bsu.edu.eg"
                className="font-semibold text-[#d9b356]/85 hover:text-[#d9b356]"
                dir="ltr"
              >
                khaled.adly@agr.bsu.edu.eg
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
