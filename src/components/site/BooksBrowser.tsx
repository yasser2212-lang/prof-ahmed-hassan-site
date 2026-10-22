"use client";

import { useMemo, useState } from "react";
import { BookOpen, Library, Search } from "lucide-react";
import { BOOK_CATEGORIES } from "@/data/publications";
import { BookCard } from "./BookCard";
import { Reveal } from "./Reveal";

export function BooksBrowser() {
  const [activeTab, setActiveTab] = useState(BOOK_CATEGORIES[0].id);
  const [query, setQuery] = useState("");

  const category = BOOK_CATEGORIES.find((c) => c.id === activeTab) ?? BOOK_CATEGORIES[0];

  const filtered = useMemo(() => {
    const q = query.trim();
    if (!q) return category.items;
    return category.items.filter((b) => b.title.includes(q));
  }, [category, query]);

  return (
    <section className="bg-ink-pattern py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* التبويبات */}
        <Reveal>
          <div
            role="tablist"
            aria-label="فئات الكتب"
            className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-3"
          >
            {BOOK_CATEGORIES.map((c) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={activeTab === c.id}
                onClick={() => {
                  setActiveTab(c.id);
                  setQuery("");
                }}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold transition-all ${
                  activeTab === c.id
                    ? "bg-[#b98a2f] text-[#0c2a20] shadow-lg shadow-black/25"
                    : "glass-dark text-[#f3e8cf] hover:text-[#d9b356]"
                }`}
              >
                <Library className="h-4 w-4" aria-hidden />
                {c.label}
                <span
                  className={`tnum rounded-full px-2 py-0.5 text-xs ${
                    activeTab === c.id
                      ? "bg-[#0c2a20]/15 text-[#0c2a20]"
                      : "bg-white/10 text-[#d9b356]"
                  }`}
                >
                  {c.items.length}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* وصف الفئة + البحث */}
        <div className="mx-auto mt-6 flex max-w-5xl flex-col items-center justify-between gap-4 rounded-2xl bg-white/5 px-5 py-4 ring-1 ring-[#d9b356]/20 sm:flex-row">
          <p className="text-center text-sm leading-relaxed text-[#f3e8cf]/85 sm:text-right">
            {category.description}
          </p>
          <div className="relative w-full shrink-0 sm:w-72">
            <Search
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5c6b63]"
              aria-hidden
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ابحث في عناوين الكتب…"
              aria-label="البحث في عناوين الكتب"
              className="w-full rounded-full border border-[#d9b356]/30 bg-[#faf7f0] py-2.5 pl-4 pr-10 text-sm font-semibold text-[#1f2a25] placeholder:text-[#5c6b63]/70 focus:border-[#b98a2f] focus:outline-none focus:ring-2 focus:ring-[#b98a2f]/40"
            />
          </div>
        </div>

        {/* شبكة الكتب بأغلفتها */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4" role="tabpanel">
          {filtered.map((book, i) => (
            <Reveal key={book.fileId + book.title} delay={Math.min(i * 0.03, 0.3)} y={14}>
              <BookCard
                title={book.title}
                year={book.year || undefined}
                viewUrl={book.viewUrl}
                downloadUrl={book.downloadUrl}
                cover={book.cover}
              />
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-8 text-center">
            <BookOpen className="mx-auto mb-3 h-8 w-8 text-[#d9b356]/60" aria-hidden />
            <p className="text-sm font-semibold text-[#f3e8cf]/70">
              لا توجد نتائج مطابقة لبحثك في هذه الفئة.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
