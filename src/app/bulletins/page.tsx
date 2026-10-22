import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { BulletinsGrid } from "@/components/site/BulletinsGrid";
import { BULLETIN_ITEMS } from "@/data/publications";

export const metadata: Metadata = {
  title: "النشرات الإرشادية | أ.د/ أحمد عبد المنعم حسن",
  description:
    "سلسلة النشرات الإرشادية للأستاذ الدكتور أحمد عبد المنعم حسن — نشرات موجهة للمزارعين ومصدّري الخضر تغطي أصناف الخضر المختلفة، معروضة بأغلفتها وكل نشرة برابط تنزيل مستقل مجاناً.",
};

export default function BulletinsPage() {
  return (
    <div>
      <PageHeader
        kicker="إرشاد المزارعين"
        title="النشرات الإرشادية"
        subtitle={`سلسلة نشرات إرشادية موجهة للمزارعين ومصدّري الخضر تغطي أصناف الخضر المختلفة من الإنتاج حتى التداول — ${BULLETIN_ITEMS.length} نشرة معروضة بأغلفتها.`}
      />
      <BulletinsGrid />
    </div>
  );
}
