import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { Introduction } from "@/components/site/Introduction";

export const metadata: Metadata = {
  title: "المقدمة | أ.د/ أحمد عبد المنعم حسن",
  description:
    "مقدمة الموقع الرسمي للأستاذ الدكتور أحمد عبد المنعم حسن — هدف الموقع في إتاحة مؤلفاته وإنتاجه العلمي مجاناً للطلاب والباحثين والمهتمين بالعلوم الزراعية.",
};

export default function IntroductionPage() {
  return (
    <div>
      <PageHeader kicker="كلمة الدكتور" title="المقدمة" />
      <Introduction />
    </div>
  );
}
