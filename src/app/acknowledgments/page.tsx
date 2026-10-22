import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { Acknowledgments } from "@/components/site/Acknowledgments";

export const metadata: Metadata = {
  title: "شكر وتقدير | أ.د/ أحمد عبد المنعم حسن",
  description:
    "شكر وتقدير وعرفان بالفضل لكل من شارك في المسيرة العلمية للأستاذ الدكتور أحمد عبد المنعم حسن — من الأسرة والزملاء والمساعدين.",
};

export default function AcknowledgmentsPage() {
  return (
    <div>
      <PageHeader
        kicker="عرفان بالفضل"
        title="شكر وتقدير"
        subtitle="كلمة شكر وعرفان بالفضل لكل من شارك في المسيرة العلمية — من الأسرة والزملاء والطلاب."
      />
      <Acknowledgments />
    </div>
  );
}
