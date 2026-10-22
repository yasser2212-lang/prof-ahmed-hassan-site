import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { BooksBrowser } from "@/components/site/BooksBrowser";
import { TOTAL_BOOKS } from "@/data/publications";

export const metadata: Metadata = {
  title: "الكتب والمؤلفات | أ.د/ أحمد عبد المنعم حسن",
  description:
    "المكتبة العلمية الكاملة للأستاذ الدكتور أحمد عبد المنعم حسن — الكتب المنشورة إلكترونياً والورقية وكتب دور النشر، معروضة بأغلفتها وكل كتاب برابط قراءة وتنزيل مستقل مجاناً.",
};

export default function BooksPage() {
  return (
    <div>
      <PageHeader
        kicker="المكتبة العلمية"
        title="الكتب والمؤلفات العلمية"
        subtitle={`مكتبة الدكتور أحمد عبد المنعم حسن الكاملة — ${TOTAL_BOOKS} كتاباً معروضة بأغلفتها، ولكل كتاب رابطه المستقل: قراءة مباشرة أو تنزيل النسخة الكاملة مجاناً عبر Google Drive.`}
      />
      <BooksBrowser />
    </div>
  );
}
