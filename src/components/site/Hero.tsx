"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, BookOpen, GraduationCap, Leaf, Library } from "lucide-react";
import Link from "next/link";
import { PROFESSOR, STATS } from "@/data/content";

const fade = {
  hidden: { opacity: 0, y: 26 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.12 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <section
      id="home"
      className="bg-ink-pattern relative overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-14"
    >
      {/* زخرفة علوية */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/25 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* شريط علوي صغير */}
        <motion.p
          variants={fade}
          initial="hidden"
          animate="show"
          custom={0}
          className="mb-3 flex items-center justify-center gap-2 text-center text-xs font-semibold tracking-wide text-[#d9b356] sm:text-sm"
        >
          <Leaf className="h-4 w-4" aria-hidden />
          الموقع الرسمي للنشر العلمي والإتاحة المجانية
          <Leaf className="h-4 w-4 -scale-x-100" aria-hidden />
        </motion.p>

        {/* صورة الأستاذ — بإطار ذهبي دائري */}
        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          custom={1}
          className="relative mx-auto w-fit"
        >
          <span
            aria-hidden
            className="absolute -inset-1.5 rounded-full bg-gradient-to-b from-[#d9b356]/45 via-transparent to-[#b98a2f]/25 blur-[6px]"
          />
          <Image
            src="/professor.jpg"
            alt="صورة الأستاذ الدكتور أحمد عبد المنعم حسن"
            width={160}
            height={160}
            priority
            className="relative h-32 w-32 rounded-full object-cover object-center ring-2 ring-[#d9b356] ring-offset-4 ring-offset-[#0c2a20] sm:h-36 sm:w-36"
          />
        </motion.div>

        {/* اسم الدكتور — العنصر الأكبر والأبرز */}
        <motion.h1
          variants={fade}
          initial="hidden"
          animate="show"
          custom={2}
          className="font-display mx-auto mt-4 max-w-5xl text-center text-3xl font-bold leading-[1.5] text-[#faf7f0] sm:text-4xl lg:text-5xl"
        >
          أ.د/ أحمد عبد المنعم حسن
        </motion.h1>

        {/* اللقب — أصغر حجماً من الاسم */}
        <motion.p
          variants={fade}
          initial="hidden"
          animate="show"
          custom={3}
          className="mx-auto mt-3 max-w-3xl text-center text-base font-bold text-[#d9b356] sm:text-lg"
        >
          أستاذ الخضر المتفرغ — كلية الزراعة، جامعة القاهرة
        </motion.p>

        {/* الوصف */}
        <motion.p
          variants={fade}
          initial="hidden"
          animate="show"
          custom={4}
          className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-[#f3e8cf]/85 sm:text-base"
        >
          إنتاج الخضر في الزراعات المكشوفة والمحمية — إتاحة كامل الإنتاج العلمي من كتب
          وبحوث ونشرات إرشادية <span className="font-bold text-[#d9b356]">مجاناً</span>{" "}
          للطلاب والباحثين والمهتمين بالعلوم الزراعية.
        </motion.p>

        {/* الأزرار */}
        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          custom={5}
          className="mt-7 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="/books"
            className="inline-flex items-center gap-2 rounded-full bg-[#b98a2f] px-6 py-3 text-sm font-bold text-[#0c2a20] shadow-lg shadow-black/25 transition-all hover:-translate-y-0.5 hover:bg-[#d9b356]"
          >
            <Library className="h-4 w-4" aria-hidden />
            تصفّح المؤلفات
          </Link>
          <a
            href={PROFESSOR.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-dark inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-[#f3e8cf] transition-all hover:-translate-y-0.5"
          >
            <GraduationCap className="h-4 w-4 text-[#d9b356]" aria-hidden />
            السيرة الذاتية الكاملة
          </a>
        </motion.div>

        {/* شارات */}
        <motion.ul
          variants={fade}
          initial="hidden"
          animate="show"
          custom={6}
          className="mt-6 flex flex-wrap items-center justify-center gap-2.5"
        >
          {[
            { icon: GraduationCap, text: "دكتوراه — جامعة كورنيل، الولايات المتحدة" },
            { icon: Award, text: "جائزة الدولة التشجيعية + وسام العلوم والفنون" },
            { icon: BookOpen, text: "أكثر من ٩٠ بحثاً ومقالاً علمياً منشوراً" },
          ].map((badge) => (
            <li
              key={badge.text}
              className="glass-dark flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-[#f3e8cf] sm:text-sm"
            >
              <badge.icon className="h-4 w-4 shrink-0 text-[#d9b356]" aria-hidden />
              {badge.text}
            </li>
          ))}
        </motion.ul>

        {/* الإحصائيات */}
        <motion.dl
          variants={fade}
          initial="hidden"
          animate="show"
          custom={7}
          className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="glass-dark rounded-2xl px-3 py-4 text-center transition-transform hover:-translate-y-1"
            >
              <dt className="order-2 mt-1.5 block text-xs font-semibold leading-snug text-[#f3e8cf]/80">
                {stat.label}
              </dt>
              <dd className="font-display order-1 text-2xl font-bold text-[#d9b356] sm:text-3xl tnum">
                {stat.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
