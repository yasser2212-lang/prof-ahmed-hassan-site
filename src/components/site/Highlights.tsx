import {
  BookOpen,
  BookMarked,
  FlaskConical,
  Globe2,
  Medal,
  Users,
  Sprout,
} from "lucide-react";
import { HIGHLIGHTS, PROFESSOR } from "@/data/content";
import { Reveal } from "./Reveal";

export function Highlights() {
  return (
    <section id="bio" className="bg-ink-pattern py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HIGHLIGHTS.map((h, i) => {
            const Icon = [Sprout, FlaskConical, BookMarked, Medal, Users, Globe2, BookOpen][i] as typeof Sprout;
            const isWide = i === HIGHLIGHTS.length - 1;
            return (
              <Reveal
                key={h.title}
                delay={i * 0.07}
                className={isWide ? "sm:col-span-2 lg:col-span-3" : undefined}
              >
                <article className="glass-dark group h-full rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1.5">
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#b98a2f]/15 ring-1 ring-[#d9b356]/40 transition-colors group-hover:bg-[#b98a2f]/25">
                    <Icon className="h-5 w-5 text-[#d9b356]" aria-hidden />
                  </span>
                  <h3 className="font-display mb-2 text-lg font-bold text-[#d9b356]">
                    {h.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#f3e8cf]/85">
                    {h.text}
                  </p>
                  {isWide && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-[#b98a2f]/15 px-3.5 py-1.5 text-xs font-bold text-[#d9b356] ring-1 ring-[#d9b356]/40">
                        +٢٥ مقرراً جامعياً
                      </span>
                      <span className="rounded-full bg-[#b98a2f]/15 px-3.5 py-1.5 text-xs font-bold text-[#d9b356] ring-1 ring-[#d9b356]/40">
                        ٣٨ فصلاً دراسياً متصلاً لمقرر «أصول البحث العلمي»
                      </span>
                    </div>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-8 flex justify-center">
            <a
              href={PROFESSOR.bioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-dark inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-[#f3e8cf] transition-all hover:-translate-y-0.5"
            >
              <BookMarked className="h-4 w-4 text-[#d9b356]" aria-hidden />
              الاطلاع على النسخة الأصلية من «في سطور» (PDF)
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
