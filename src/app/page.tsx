import Link from "next/link";
import {
  ArrowLeft,
  BookMarked,
  FileText,
  FlaskConical,
  GraduationCap,
  HandHeart,
  Library,
  ScrollText,
} from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { Reveal } from "@/components/site/Reveal";
import {
  BULLETIN_ITEMS,
  RESEARCH_FILES,
  TOTAL_BOOKS,
} from "@/data/publications";

const SECTION_CARDS = [
  {
    href: "/introduction",
    label: "المقدمة",
    desc: "كلمة الدكتور في هدف الموقع وإتاحة المؤلفات",
    icon: ScrollText,
  },
  {
    href: "/highlights",
    label: "في سطور",
    desc: "نبذة موجزة عن المسيرة العلمية والجوائز",
    icon: BookMarked,
  },
  {
    href: "/cv",
    label: "السيرة الذاتية",
    desc: "الدرجات والوظائف والإنجازات بالتفصيل",
    icon: GraduationCap,
  },
  {
    href: "/books",
    label: "الكتب والمؤلفات",
    desc: `${TOTAL_BOOKS} كتاباً بأغلفة وروابط تنزيل مستقلة`,
    icon: Library,
  },
  {
    href: "/bulletins",
    label: "النشرات الإرشادية",
    desc: `${BULLETIN_ITEMS.length} نشرة إرشادية للمزارعين والمصدّرين`,
    icon: FileText,
  },
  {
    href: "/research",
    label: "الأبحاث والمقالات",
    desc: `${RESEARCH_FILES.length} ملفاً بحثياً بروابط قراءة وتنزيل`,
    icon: FlaskConical,
  },
  {
    href: "/acknowledgments",
    label: "شكر وتقدير",
    desc: "عرفان بالفضل لكل من شارك في المسيرة",
    icon: HandHeart,
  },
];

export default function Home() {
  return (
    <div>
      <Hero />

      {/* أقسام الموقع */}
      <section className="bg-paper-pattern py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <p className="text-center text-xs font-bold tracking-wide text-[#b98a2f] sm:text-sm">
              تصفّح المحتويات
            </p>
            <h2 className="gold-rule font-display mt-2 text-center text-2xl font-bold text-[#10382b] sm:text-3xl">
              أقسام الموقع
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SECTION_CARDS.map((card, i) => (
              <Reveal key={card.label} delay={i * 0.05} y={14}>
                <Link
                  href={card.href}
                  className="group flex h-full flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md"
                >
                  <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#10382b] transition-colors group-hover:bg-[#1d5442]">
                    <card.icon className="h-6 w-6 text-[#d9b356]" aria-hidden />
                  </span>
                  <h3 className="font-display text-lg font-bold text-[#10382b] transition-colors group-hover:text-[#b98a2f]">
                    {card.label}
                  </h3>
                  <p className="mt-1.5 flex-1 text-[13px] leading-relaxed text-[#5c6b63]">
                    {card.desc}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#b98a2f]">
                    دخول القسم
                    <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" aria-hidden />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
