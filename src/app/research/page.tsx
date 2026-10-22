import type { Metadata } from "next";
import { Atom, FlaskConical, Microscope, Quote } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { ResearchList } from "@/components/site/ResearchList";
import { Reveal } from "@/components/site/Reveal";
import { FEATURED_RESEARCH, RESEARCH_THEMES } from "@/data/content";
import { RESEARCH_FILES } from "@/data/publications";

export const metadata: Metadata = {
  title: "الأبحاث والمقالات العلمية | أ.د/ أحمد عبد المنعم حسن",
  description:
    "الأبحاث والمقالات العلمية المنشورة للأستاذ الدكتور أحمد عبد المنعم حسن — أكثر من تسعين بحثاً ومقالاً في الدوريات العربية والأمريكية والأوروبية المحكَّمة، ولكل بحث رابط قراءة وتنزيل مستقل.",
};

const THEME_ICONS = [Microscope, FlaskConical, Atom, Quote];

export default function ResearchPage() {
  return (
    <div>
      <PageHeader
        kicker="النشر العلمي المُحكَّم"
        title="الأبحاث والمقالات العلمية المنشورة"
        subtitle={`أكثر من ٩٠ بحثاً ومقالاً علمياً منشوراً في المجلات العلمية العربية والأمريكية والأوروبية المحكَّمة، عن جوانب الإنتاج والتربية وتقييم الأصناف في عدد من محاصيل الخضر — ومنها ${RESEARCH_FILES.length} ملفاً متاح نصه الكامل للقراءة والتنزيل مجاناً.`}
      />

      {/* مجالات البحث */}
      <section className="bg-ink-pattern pb-2 pt-2">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {RESEARCH_THEMES.map((t, i) => {
              const Icon = THEME_ICONS[i];
              return (
                <Reveal key={t.title} delay={i * 0.06}>
                  <div className="glass-dark rounded-2xl p-4 text-center">
                    <Icon className="mx-auto mb-2 h-6 w-6 text-[#d9b356]" aria-hidden />
                    <h2 className="text-sm font-bold text-[#faf7f0]">{t.title}</h2>
                    <span className="tnum mt-0.5 block text-sm font-bold text-[#d9b356]">
                      {t.count} بحثاً
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* أبحاث مختارة */}
      <section className="bg-ink-pattern py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <h2 className="gold-rule font-display text-center text-xl font-bold text-[#faf7f0] sm:text-2xl">
              أبحاث مختارة
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {FEATURED_RESEARCH.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.06}>
                <article className="glass-dark flex h-full flex-col rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1">
                  <div className="mb-2.5 flex items-center justify-between gap-3">
                    <span className="rounded-full bg-[#b98a2f]/20 px-3 py-1 text-xs font-bold text-[#d9b356]">
                      {r.venue}
                    </span>
                    <span className="font-display text-2xl font-bold text-[#d9b356]/25 tnum">
                      {["١", "٢", "٣", "٤", "٥", "٦"][i]}
                    </span>
                  </div>
                  <h3 className="text-[15px] font-bold leading-relaxed text-[#faf7f0]" dir="auto">
                    {r.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-[#f3e8cf]/80">
                    {r.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* القائمة الكاملة — كل بحث برابطه المستقل */}
      <ResearchList />
    </div>
  );
}
