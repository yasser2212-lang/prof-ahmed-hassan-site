import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { CvSection } from "@/components/site/CvSection";

export const metadata: Metadata = {
  title: "السيرة الذاتية | أ.د/ أحمد عبد المنعم حسن",
  description:
    "السيرة الذاتية الكاملة للأستاذ الدكتور أحمد عبد المنعم حسن — الدرجات العلمية، التدرج الوظيفي، الجوائز والأوسمة، الإنجازات العلمية، والمشروعات القومية.",
};

export default function CvPage() {
  return (
    <div>
      <PageHeader
        kicker="المسيرة الأكاديمية"
        title="السيرة الذاتية"
        subtitle="من بكالوريوس الإسكندرية ١٩٦٢ بتقدير ممتاز مع مرتبة الشرف، إلى دكتوراه كورنيل ١٩٨٠، ثم أستاذية ورئاسة قسم الخضر بجامعة القاهرة."
      />
      <CvSection />
    </div>
  );
}
