"use client";

import { useMemo, useState } from "react";
import { BookOpen, Download, Search } from "lucide-react";
import { BULLETIN_ITEMS, type Bulletin } from "@/data/publications";
import { Reveal } from "./Reveal";

function BulletinCard({ b }: { b: Bulletin }) {
  const [imgOk, setImgOk] = useState(true);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md">
      {/* غلاف النشرة — يفتح ملفها الخاص */}
      <a
        href={b.viewUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`قراءة نشرة: ${b.ar}`}
        className="relative block aspect-[3/4] overflow-hidden bg-gradient-to-br from-[#10382b] to-[#0c2a20]"
      >
        {imgOk ? (
          <img
            src={b.cover}
            alt={`غلاف نشرة ${b.ar}`}
            loading="lazy"
            onError={() => setImgOk(false)}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
            <BookOpen className="h-8 w-8 text-[#d9b356]/80" aria-hidden />
            <span className="font-display text-base font-bold text-[#faf7f0]">{b.ar}</span>
          </span>
        )}
        <span
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
        />
        <span className="absolute bottom-2.5 right-2.5 inline-flex translate-y-2 items-center gap-1 rounded-full bg-[#b98a2f] px-2.5 py-1 text-[11px] font-bold text-[#0c2a20] opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          <BookOpen className="h-3 w-3" aria-hidden />
          قراءة
        </span>
      </a>

      <div className="flex flex-1 flex-col p-3 text-center">
        <h3 className="font-display flex-1 text-[15px] font-bold leading-snug text-[#10382b]">
          {b.ar}
        </h3>
        <span className="mt-0.5 text-[11px] font-semibold text-[#5c6b63]" dir="ltr">
          {b.en}
        </span>
        <a
          href={b.downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-full bg-[#10382b] px-3 py-2 text-xs font-bold text-[#f3e8cf] transition-colors hover:bg-[#1d5442]"
        >
          <Download className="h-3.5 w-3.5 text-[#d9b356]" aria-hidden />
          تنزيل النشرة
        </a>
      </div>
    </article>
  );
}

export function BulletinsGrid() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return BULLETIN_ITEMS;
    return BULLETIN_ITEMS.filter(
      (b) => b.ar.includes(q) || b.en.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <section className="bg-paper-pattern py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* بحث */}
        <Reveal>
          <div className="relative mx-auto mt-2 max-w-md">
            <Search
              className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5c6b63]"
              aria-hidden
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ابحث عن نشرة (مثال: الطماطم، Tomato)…"
              aria-label="البحث في النشرات الإرشادية"
              className="w-full rounded-full border border-[#b98a2f]/30 bg-white py-3 pl-4 pr-11 text-sm font-semibold text-[#1f2a25] shadow-sm placeholder:text-[#5c6b63]/70 focus:border-[#b98a2f] focus:outline-none focus:ring-2 focus:ring-[#b98a2f]/40"
            />
          </div>
        </Reveal>

        <p className="mt-5 text-center text-xs font-bold text-[#5c6b63] sm:text-sm">
          <span className="tnum">{filtered.length}</span> نشرة — اضغط غلاف أي نشرة لقراءتها،
          أو زر «تنزيل» لحفظ الملف الكامل.
        </p>

        {/* الشبكة */}
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {filtered.map((b, i) => (
            <Reveal key={b.fileId + b.en} delay={Math.min(i * 0.025, 0.25)} y={12}>
              <BulletinCard b={b} />
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-8 text-center">
            <BookOpen className="mx-auto mb-3 h-8 w-8 text-[#b98a2f]/60" aria-hidden />
            <p className="text-sm font-semibold text-[#5c6b63]">
              لا توجد نشرة مطابقة لبحثك.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
