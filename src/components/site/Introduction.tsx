import { Download, Quote } from "lucide-react";
import { INTRO, PROFESSOR } from "@/data/content";
import { Reveal } from "./Reveal";

export function Introduction() {
  return (
    <section id="intro" className="bg-paper-pattern py-10 sm:py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal delay={0.1}>
          <blockquote className="rounded-2xl border-r-4 border-[#b98a2f] bg-white/70 p-6 shadow-sm sm:p-8">
            <div className="flex items-start gap-3">
              <Quote className="mt-1 h-6 w-6 shrink-0 text-[#b98a2f]" aria-hidden />
              <p className="font-display text-lg leading-[2] text-[#10382b] sm:text-xl">
                {INTRO.hadith}
              </p>
            </div>
            <p className="mt-2 text-sm font-semibold text-[#5c6b63]">صدق الله العظيم</p>
          </blockquote>
        </Reveal>

        <div className="mt-6 space-y-4">
          {INTRO.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.12 + i * 0.08}>
              <p className="text-[15px] leading-loose text-[#1f2a25] sm:text-base">
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.35}>
          <p className="mt-6 text-center text-sm font-bold text-[#5c6b63]">
            — {INTRO.signature} —
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-7 flex justify-center">
            <a
              href={PROFESSOR.introUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#10382b] px-5 py-2.5 text-sm font-bold text-[#f3e8cf] shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#1d5442]"
            >
              <Download className="h-4 w-4 text-[#d9b356]" aria-hidden />
              الاطلاع على المقدمة الأصلية (PDF)
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
