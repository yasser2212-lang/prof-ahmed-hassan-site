"use client";

import { useState } from "react";
import { BookOpen, Download, ExternalLink, Library } from "lucide-react";

type BookCardProps = {
  title: string;
  year?: string;
  viewUrl: string;
  downloadUrl: string;
  cover: string;
};

export function BookCard({ title, year, viewUrl, downloadUrl, cover }: BookCardProps) {
  const [imgOk, setImgOk] = useState(true);

  return (
    <article className="glass-dark group flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1.5">
      {/* الغلاف — يفتح الملف الخاص بهذا الكتاب */}
      <a
        href={viewUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`قراءة كتاب: ${title}`}
        className="relative block aspect-[3/4] overflow-hidden bg-gradient-to-br from-[#10382b] to-[#0c2a20]"
      >
        {imgOk ? (
          <img
            src={cover}
            alt={`غلاف كتاب: ${title}`}
            loading="lazy"
            onError={() => setImgOk(false)}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
            <Library className="h-10 w-10 text-[#d9b356]/70" aria-hidden />
            <span className="font-display text-lg font-bold leading-relaxed text-[#faf7f0]/90">
              {title}
            </span>
          </span>
        )}
        <span
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
        <span className="absolute bottom-3 right-3 inline-flex translate-y-2 items-center gap-1.5 rounded-full bg-[#b98a2f] px-3 py-1.5 text-xs font-bold text-[#0c2a20] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <BookOpen className="h-3.5 w-3.5" aria-hidden />
          قراءة الكتاب
        </span>
      </a>

      {/* البيانات والأزرار */}
      <div className="flex flex-1 flex-col p-4">
        {year && (
          <span className="tnum mb-1.5 w-fit rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-bold text-[#d9b356]">
            {year}
          </span>
        )}
        <h3 className="font-display flex-1 text-[15px] font-bold leading-relaxed text-[#faf7f0] transition-colors group-hover:text-[#d9b356]">
          {title}
        </h3>
        <div className="mt-3.5 flex items-center gap-2">
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[#b98a2f] px-3 py-2 text-xs font-bold text-[#0c2a20] transition-colors hover:bg-[#d9b356]"
          >
            <Download className="h-3.5 w-3.5" aria-hidden />
            تنزيل PDF
          </a>
          <a
            href={viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#d9b356]/40 px-3 py-2 text-xs font-bold text-[#d9b356] transition-colors hover:bg-white/10"
          >
            قراءة
            <ExternalLink className="h-3 w-3" aria-hidden />
          </a>
        </div>
      </div>
    </article>
  );
}
