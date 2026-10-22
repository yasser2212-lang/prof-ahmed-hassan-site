import { HandHeart, Mail, ScrollText } from "lucide-react";
import { Reveal } from "./Reveal";

const THANKS = [
  {
    name: "الأستاذة الدكتورة / فوزية محمد عيسى",
    role: "الزوجة — رئيس البحوث المتفرغ بمعهد بحوث البساتين، مركز البحوث الزراعية",
    note: "التي وقفت دومًا إلى جانبه وشاركته وجدانيّة وتحملت معه عناء رحلته العلمية.",
  },
  {
    name: "سمر وعماد الدين وأحمد ويسرا",
    role: "الأبناء",
    note: "الذين يبادلونه أجمل المشاعر وأرقّها، واعتادوا منذ نعومة أظفارهم على رؤيته دومًا في جلسته المكتبية قارئًا كنت أم كاتبًا.",
  },
  {
    name: "الأستاذ الدكتور / سعيد عبد الله شحاته",
    role: "أستاذ الخضر المتفرغ بكلية الزراعة — جامعة القاهرة",
    note: "الزميل الذي اقترح إنشاء هذا الموقع وتابع الإعداد له.",
  },
  {
    name: "الأستاذ الدكتور / خالد عدلي خالد عسكر",
    role: "أستاذ الوراثة بكلية الزراعة — جامعة بني سويف",
    note: "الزميل الذي صمّم وأنشأ هذا الموقع وجتهّد في تحديثه المستمر.",
  },
];

export function Acknowledgments() {
  return (
    <section id="acknowledgments" className="bg-paper-pattern py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="mx-auto max-w-3xl text-center text-[15px] leading-loose text-[#1f2a25] sm:text-base">
            «وخير ما يمكن أن يُختم به هو تقديم الشكر والامتنان والعرفان بالفضل في كل مسيرة
            علمية — بعد الله سبحانه وتعالى — لكل من شارك فيها من أساتذة أجلّاء وزملاء أفاضل
            وطلاب علم، ولكل من تعامل معهم خلال مسيرة الحياة. وإذا كان من الصعب حصرهم — جزاهم
            الله عنه خيرًا — فإنه لا ينسى أبدًا أبويه وأمّه، رحمهما الله رحمة واسعة.»
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {THANKS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.07}>
              <article className="flex h-full flex-col rounded-2xl border-r-4 border-[#b98a2f] bg-white p-5 shadow-sm ring-1 ring-black/5">
                <HandHeart className="mb-2.5 h-5 w-5 text-[#b98a2f]" aria-hidden />
                <h3 className="font-display text-base font-bold text-[#10382b]">{t.name}</h3>
                <p className="mt-1 text-xs font-bold text-[#b98a2f]">{t.role}</p>
                <p className="mt-2.5 text-sm leading-relaxed text-[#5c6b63]">{t.note}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="bg-ink-pattern mt-8 rounded-3xl px-6 py-8 text-center shadow-lg sm:px-12">
            <ScrollText className="mx-auto mb-3 h-7 w-7 text-[#d9b356]" aria-hidden />
            <p className="font-display mx-auto max-w-2xl text-lg leading-loose text-[#faf7f0] sm:text-xl">
              «جعل الله هذا العمل في ميزان حسناتنا ونفع به»
            </p>
            <p className="mt-3 text-sm font-semibold text-[#d9b356]">
              أسأل الله العلي العظيم أن يكون ذلك الجهد علمًا يُنتفع به، وأرجو ألا تنسوني
              بالدعاء بظاهر الغيب.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
