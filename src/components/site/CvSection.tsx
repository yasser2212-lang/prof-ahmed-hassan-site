import {
  Award,
  BookOpen,
  Briefcase,
  Building2,
  CalendarCheck,
  Download,
  GraduationCap,
  Landmark,
  Medal,
  Sprout,
  Users,
  Network,
  FolderOpen,
} from "lucide-react";
import Image from "next/image";
import {
  ACHIEVEMENTS,
  AWARDS,
  CAREER,
  EDUCATION,
  PROFESSOR,
  PROJECTS,
  SOCIETIES,
  VISITING,
} from "@/data/content";
import { Reveal } from "./Reveal";

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <Reveal>
      <p className="text-center text-xs font-bold tracking-wide text-[#b98a2f] sm:text-sm">{kicker}</p>
      <h3 className="gold-rule font-display mt-1 text-center text-xl font-bold text-[#10382b] sm:text-2xl">
        {title}
      </h3>
    </Reveal>
  );
}

export function CvSection() {
  return (
    <section id="cv" className="bg-paper-pattern py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* بطاقة البيانات الشخصية */}
        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-black/5">
            <div className="bg-ink-pattern flex flex-wrap items-center justify-between gap-4 px-6 py-5 sm:px-8">
              <div className="flex items-center gap-3">
                <Image
                  src="/professor.jpg"
                  alt="صورة الأستاذ الدكتور أحمد عبد المنعم حسن"
                  width={48}
                  height={48}
                  className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-[#d9b356]/70"
                />
                <h3 className="font-display text-lg font-bold text-[#faf7f0] sm:text-xl">
                  البيانات الأساسية
                </h3>
              </div>
              <a
                href={PROFESSOR.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#b98a2f] px-4 py-2 text-xs font-bold text-[#0c2a20] transition-colors hover:bg-[#d9b356] sm:text-sm"
              >
                <Download className="h-4 w-4" aria-hidden />
                السيرة الذاتية كاملة (PDF — ٣٣ صفحة)
              </a>
            </div>
            <dl className="grid gap-x-8 gap-y-5 px-6 py-7 sm:grid-cols-2 sm:px-8">
              {[
                { label: "الاسم", value: PROFESSOR.namePlain },
                { label: "تاريخ ومكان الميلاد", value: PROFESSOR.birth },
                { label: "التخصص العام", value: PROFESSOR.specialty },
                { label: "الوظيفة الحالية", value: `${PROFESSOR.title} — ${PROFESSOR.affiliation}` },
                { label: "البريد الإلكتروني", value: PROFESSOR.email },
                { label: "العنوان", value: PROFESSOR.address },
              ].map((item) => (
                <div key={item.label} className="border-b border-[#f3efe4] pb-3 last:border-0">
                  <dt className="text-xs font-bold tracking-wide text-[#b98a2f]">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-[#1f2a25] sm:text-base" dir="auto">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        {/* الدرجات العلمية */}
        <div className="mt-12">
          <SectionHeading kicker="الدرجات العلمية" title="من الإسكندرية إلى كورنيل" />
          <div className="relative mt-8 space-y-4 pr-6 sm:pr-8">
            <span
              aria-hidden
              className="absolute inset-y-2 right-1 w-[2px] bg-gradient-to-b from-[#b98a2f] via-[#b98a2f]/40 to-transparent"
            />
            {EDUCATION.map((ed, i) => (
              <Reveal key={ed.degree} delay={i * 0.08}>
                <article className="relative rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md">
                  <span className="absolute -right-[26px] top-7 flex h-5 w-5 items-center justify-center rounded-full bg-[#b98a2f] ring-4 ring-[#faf7f0] sm:-right-[34px]">
                    <GraduationCap className="hidden" aria-hidden />
                  </span>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span className="font-display rounded-lg bg-[#10382b] px-3 py-1 text-base font-bold text-[#d9b356] tnum">
                      {ed.year}
                    </span>
                    <h4 className="font-display text-base font-bold text-[#10382b] sm:text-lg">
                      {ed.degree}
                    </h4>
                  </div>
                  <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-[#5c6b63]">
                    <Landmark className="h-4 w-4 shrink-0 text-[#b98a2f]" aria-hidden />
                    {ed.place}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#5c6b63]">{ed.note}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* التدرج الوظيفي */}
        <div className="mt-12">
          <SectionHeading kicker="المسار الوظيفي" title="التدرج الوظيفي بجامعة القاهرة" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {CAREER.map((job, i) => (
              <Reveal key={job.role + job.period} delay={i * 0.05}>
                <article className="flex h-full items-start gap-3.5 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5 transition-transform hover:-translate-y-0.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#10382b]">
                    <Briefcase className="h-5 w-5 text-[#d9b356]" aria-hidden />
                  </span>
                  <div>
                    <span className="text-xs font-bold text-[#b98a2f] tnum">{job.period}</span>
                    <h4 className="mt-0.5 font-bold text-[#1f2a25]">{job.role}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-[#5c6b63]">{job.place}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* التدريس والإشراف العلمي */}
        <div className="mt-12">
          <SectionHeading kicker="التدريس الجامعي" title="مسيرة التدريس والإشراف العلمي" />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: BookOpen,
                value: "+٢٥",
                label: "مقرراً جامعياً درّسه",
                detail: "في جامعات القاهرة وعين شمس والفيوم وبغداد والإمارات",
              },
              {
                icon: CalendarCheck,
                value: "٣٨",
                label: "فصلاً دراسياً متصلاً",
                detail: "تدريساً لمقرر «أصول البحث العلمي» دون انقطاع",
              },
              {
                icon: Users,
                value: "+٣٥",
                label: "طالب ماجستير ودكتوراه",
                detail: "أشرف عليهم في جامعات مصرية وعربية",
              },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 0.07}>
                <article className="flex h-full flex-col items-center rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-black/5 transition-transform hover:-translate-y-1">
                  <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#10382b]">
                    <item.icon className="h-5 w-5 text-[#d9b356]" aria-hidden />
                  </span>
                  <span className="font-display text-2xl font-bold text-[#b98a2f] tnum">
                    {item.value}
                  </span>
                  <h4 className="mt-1 font-bold text-[#1f2a25]">{item.label}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#5c6b63]">{item.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* أستاذ زائر + الجمعيات */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <Reveal>
              <h3 className="gold-rule gold-rule-start font-display text-xl font-bold text-[#10382b] sm:text-2xl">
                مهمات علمية كأستاذ زائر
              </h3>
            </Reveal>
            <div className="mt-6 space-y-3">
              {VISITING.map((v, i) => (
                <Reveal key={v.place} delay={i * 0.07}>
                  <article className="flex items-start gap-3.5 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
                    <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-[#b98a2f]" aria-hidden />
                    <div>
                      <h4 className="font-bold text-[#1f2a25]">{v.place}</h4>
                      <span className="mt-1 block text-sm font-bold text-[#b98a2f] tnum">
                        {v.period}
                      </span>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <Reveal>
              <h3 className="gold-rule gold-rule-start font-display text-xl font-bold text-[#10382b] sm:text-2xl">
                الجمعيات العلمية
              </h3>
            </Reveal>
            <div className="mt-6">
              <Reveal>
                <article className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                  <Network className="mb-3 h-6 w-6 text-[#b98a2f]" aria-hidden />
                  <ul className="space-y-3">
                    {SOCIETIES.map((s) => (
                      <li
                        key={s}
                        className="flex items-start gap-3 border-b border-[#f3efe4] pb-3 text-sm font-semibold text-[#1f2a25] last:border-0 last:pb-0"
                      >
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#b98a2f]" aria-hidden />
                        {s}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </div>
          </div>
        </div>

        {/* الجوائز */}
        <div className="mt-12">
          <SectionHeading kicker="التكريم" title="الجوائز والأوسمة" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {AWARDS.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.06}>
                <article className="flex h-full flex-col rounded-2xl border-t-4 border-[#b98a2f] bg-white p-5 shadow-sm ring-1 ring-black/5 transition-transform hover:-translate-y-1">
                  <Medal className="mb-3 h-6 w-6 text-[#b98a2f]" aria-hidden />
                  <h4 className="font-display text-base font-bold leading-snug text-[#10382b]">
                    {a.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-[#5c6b63]">{a.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* إنجازات بارزة */}
        <div className="mt-12">
          <SectionHeading kicker="أثر علمي ممتد" title="إنجازات علمية بارزة" />
          <div className="bg-ink-pattern mt-8 rounded-3xl p-4 shadow-lg sm:p-6">
            <div className="grid gap-4 lg:grid-cols-2">
              {ACHIEVEMENTS.map((ach, i) => (
                <Reveal key={ach.title} delay={i * 0.06}>
                  <article className="glass-dark h-full rounded-2xl p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="font-display flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#b98a2f] text-base font-bold text-[#0c2a20] tnum">
                        {["١", "٢", "٣", "٤", "٥", "٦"][i]}
                      </span>
                      <h4 className="font-display text-base font-bold text-[#d9b356] sm:text-lg">
                        {ach.title}
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed text-[#f3e8cf]/90">
                      {ach.text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* المشروعات القومية */}
        <div className="mt-12">
          <Reveal>
            <div className="rounded-3xl bg-white p-5 shadow-md ring-1 ring-black/5 sm:p-7">
              <div className="flex items-center gap-3">
                <Sprout className="h-6 w-6 text-[#b98a2f]" aria-hidden />
                <h3 className="font-display text-xl font-bold text-[#10382b] sm:text-2xl">
                  المشروعات القومية والخبرات الاستشارية
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#5c6b63]">
                شارك الدكتور أحمد عبد المنعم حسن في عدد من المشروعات القومية المدعومة من هيئة
                المعونة الأمريكية ومنظمات دولية، بصفته خبيراً ومنسقاً للخضر وباحثاً رئيسياً:
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {PROJECTS.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 rounded-xl bg-[#faf7f0] p-4 text-sm font-semibold text-[#1f2a25]"
                  >
                    <FolderOpen className="mt-0.5 h-4 w-4 shrink-0 text-[#b98a2f]" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
