"use client";

import { useMemo, useState } from "react";
import { Download, ExternalLink, FileText, Search } from "lucide-react";
import { RESEARCH_FILES } from "@/data/publications";
import { Reveal } from "./Reveal";

export function ResearchList() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return RESEARCH_FILES;
    return RESEARCH_FILES.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        (r.titleAr ?? "").includes(query.trim()),
    );
  }, [query]);

  return (
    <section className="bg-ink-pattern py-10 sm:py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* عنوان القائمة */}
        <Reveal>
          <h2 className="gold-rule font-display text-center text-xl font-bold text-[#faf7f0] sm:text-2xl">
            القائمة الكاملة
          </h2>
        </Reveal>

        {/* البحث */}
        <Reveal>
          <div className="relative mx-auto mt-6 max-w-xl">
            <Search
              className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5c6b63]"
              aria-hidden
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ابحث في قائمة الأبحاث…"
              aria-label="البحث في قائمة الأبحاث"
              className="w-full rounded-full border border-[#d9b356]/30 bg-[#faf7f0] py-3 pl-4 pr-11 text-sm font-semibold text-[#1f2a25] shadow-sm placeholder:text-[#5c6b63]/70 focus:border-[#b98a2f] focus:outline-none focus:ring-2 focus:ring-[#b98a2f]/40"
            />
          </div>
        </Reveal>

        <p className="mt-5 text-center text-xs font-bold text-[#f3e8cf]/70 sm:text-sm">
          <span className="tnum">{filtered.length}</span> ملفاً — العنوان الأصلي بالإنجليزية ومعه
          ترجمته العربية، ولكل بحث رابط قراءة وتنزيل مستقل.
        </p>

        {/* القائمة */}
        <div className="mt-6 space-y-2.5">
          {filtered.map((r, i) => (
            <Reveal key={r.fileId} delay={Math.min(i * 0.02, 0.25)} y={10}>
              <article className="glass-dark group flex flex-col gap-3 rounded-xl px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 sm:flex-row sm:items-center sm:gap-4 sm:px-5">
                <div className="flex min-w-0 flex-1 items-start gap-3 sm:items-center sm:gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#b98a2f]/15 ring-1 ring-[#d9b356]/40">
                    <FileText className="h-5 w-5 text-[#d9b356]" aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3
                      className="text-sm font-bold leading-relaxed text-[#faf7f0] transition-colors group-hover:text-[#d9b356] sm:text-[15px]"
                      dir="auto"
                    >
                      {r.title}
                    </h3>
                    {r.titleAr && (
                      <p className="mt-1 text-[13px] font-semibold leading-relaxed text-[#d9b356]/90 sm:text-sm">
                        {r.titleAr}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <a
                    href={r.viewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`قراءة البحث: ${r.title}`}
                    className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#d9b356]/40 px-3 py-1.5 text-xs font-bold text-[#d9b356] transition-colors hover:bg-white/10"
                  >
                    <ExternalLink className="h-3 w-3" aria-hidden />
                    قراءة
                  </a>
                  <a
                    href={r.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`تنزيل البحث: ${r.title}`}
                    className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#b98a2f] px-3 py-1.5 text-xs font-bold text-[#0c2a20] transition-colors hover:bg-[#d9b356]"
                  >
                    <Download className="h-3 w-3" aria-hidden />
                    تنزيل
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-8 text-center text-sm font-semibold text-[#f3e8cf]/70">
            لا توجد نتائج مطابقة لبحثك.
          </p>
        )}
      </div>
    </section>
  );
}
