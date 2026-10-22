import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { Highlights } from "@/components/site/Highlights";

export const metadata: Metadata = {
  title: "في سطور | أ.د/ أحمد عبد المنعم حسن",
  description:
    "الدكتور أحمد عبد المنعم حسن في سطور — نبذة موجزة عن أستاذ الخضر المتفرغ: دراساته العليا من كورنيل ونورث كارولينا، وإنتاجه العلمي، وجوائزه وتكريماته.",
};

export default function HighlightsPage() {
  return (
    <div>
      <PageHeader
        kicker="نبذة موجزة"
        title="الدكتور أحمد عبد المنعم حسن في سطور"
        subtitle="محطات أساسية في مسيرة علمية امتدت أكثر من ستين عاماً في التدريس والبحث ونشر المعرفة الزراعية."
      />
      <Highlights />
    </div>
  );
}
