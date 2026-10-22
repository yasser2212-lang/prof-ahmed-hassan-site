import type { Metadata } from "next";
import { Amiri, Cairo } from "next/font/google";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import "./globals.css";

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "أ.د/ أحمد عبد المنعم حسن — أستاذ الخضر | الموقع الرسمي",
  description:
    "الموقع الرسمي للأستاذ الدكتور أحمد عبد المنعم حسن — أستاذ الخضر المتفرغ بكلية الزراعة جامعة القاهرة. مؤلفاته العلمية من كتب وبحوث ونشرات إرشادية متاحة مجاناً للطلاب والباحثين.",
  keywords: [
    "أحمد عبد المنعم حسن",
    "أستاذ الخضر",
    "كلية الزراعة",
    "جامعة القاهرة",
    "كتب زراعية",
    "تربية الخضر",
    "إنتاج الخضر",
    "horticulture",
    "vegetable crops",
  ],
  authors: [{ name: "أ.د/ أحمد عبد المنعم حسن" }],
  openGraph: {
    title: "أ.د/ أحمد عبد المنعم حسن — أستاذ الخضر | الموقع الرسمي",
    description:
      "المؤلفات العلمية للدكتور أحمد عبد المنعم حسن: كتب، بحوث، نشرات إرشادية — متاحة مجاناً للطلاب والباحثين.",
    siteName: "الموقع الرسمي لأ.د/ أحمد عبد المنعم حسن",
    type: "website",
    locale: "ar_EG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${amiri.variable} ${cairo.variable} antialiased bg-background text-foreground`}
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
