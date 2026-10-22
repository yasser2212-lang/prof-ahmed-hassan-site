import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type PageHeaderProps = {
  kicker: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
};

export function PageHeader({ kicker, title, subtitle, children }: PageHeaderProps) {
  return (
    <section className="bg-ink-pattern relative overflow-hidden pt-24 pb-8 sm:pt-28 sm:pb-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/20 to-transparent"
      />
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
        <Reveal>
          <p className="flex items-center justify-center gap-2 text-xs font-bold tracking-wide text-[#d9b356] sm:text-sm">
            {kicker}
          </p>
          <h1 className="gold-rule font-display mt-2 text-2xl font-bold leading-snug text-[#faf7f0] sm:text-3xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-[#f3e8cf]/80">
              {subtitle}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
