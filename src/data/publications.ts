// ─────────────────────────────────────────────────────────────
// طبقة المنشورات — تربط كل كتاب/نشرة/بحث برابطه الفردي على Google Drive
// المصدر: src/data/publications.json (مولَّد من مجلدات Drive الأصلية)
// ─────────────────────────────────────────────────────────────
import raw from "./publications.json";

export type Publication = {
  title: string;
  year: string;
  fileId: string;
  viewUrl: string;
  downloadUrl: string;
  cover: string;
};

export type Bulletin = {
  ar: string;
  en: string;
  fileId: string;
  viewUrl: string;
  downloadUrl: string;
  cover: string;
};

export type ResearchFile = {
  title: string;
  /** الترجمة العربية للعنوان الإنجليزي */
  titleAr?: string;
  fileId: string;
  viewUrl: string;
  downloadUrl: string;
  cover: string;
};

export const EBOOKS = raw.ebooks as Publication[];
export const PRINT_BOOKS = raw.print as Publication[];
export const PUBLISHER_BOOKS = raw.publishers as Publication[];
export const BULLETIN_ITEMS = raw.bulletins as Bulletin[];

// نسخ مكرّرة على Google Drive (لكل منها نسخة أخرى بنفس العنوان تظهر في القائمة)
// تُخفى من قائمة الأبحاث المعروضة مع بقاء البيانات كاملة في publications.json
const DUPLICATE_RESEARCH_IDS = new Set([
  "1KhWLb32MsPC4sb7Jn_5aLYO0zoNmX4RK", // تكرار: Inheritance of Some Important Characters in Summer Squash
  "1_eNzo4zePDU6_Pe_CUVdU31LM-jYeOKm", // تكرار: Salinity Tolerance in Tomato
  "1SFgPW_W9zY5xVZKfjXa_FtKvVsOKQ-Gz", // تكرار: Squash Germplasm Evaluation
  "1bBWz_DyM4L-kMxq8wU3K5GBkHF33Z7GD", // تكرار: Tomato Evaluation and Selection for Sodium Chloride Tolerance
]);

export const RESEARCH_FILES = (raw.research as ResearchFile[]).filter(
  (r) => !DUPLICATE_RESEARCH_IDS.has(r.fileId),
);

export type BookCategory = {
  id: string;
  label: string;
  short: string;
  description: string;
  items: Publication[];
};

export const BOOK_CATEGORIES: BookCategory[] = [
  {
    id: "ebooks",
    label: "الكتب المنشورة إلكترونياً",
    short: "إلكترونياً",
    description:
      "النص الكامل لكل كتاب متاح مجاناً — اضغط على غلاف أي كتاب لقراءته، أو زر «تنزيل» لحفظ النسخة الكاملة مباشرة من Google Drive.",
    items: EBOOKS,
  },
  {
    id: "print",
    label: "كتب نُشرت ورقياً بمعرفته",
    short: "ورقياً بمعرفته",
    description:
      "إلى جانب توفر النص الكامل لكل كتاب برابطه المستقل أدناه، تتوفر نسخ ورقية لدى عدد من الموزعين جاء بيانهم داخل كل كتاب.",
    items: PRINT_BOOKS,
  },
  {
    id: "publishers",
    label: "كتب نُشرت عن طريق دور النشر",
    short: "عن دور النشر",
    description:
      "كتب تمتلك دور النشر حقوق نشرها وطباعتها — والنص الكامل لكل منها متاح مجاناً عبر رابط الكتاب المستقل.",
    items: PUBLISHER_BOOKS,
  },
];

export const TOTAL_BOOKS = EBOOKS.length + PRINT_BOOKS.length + PUBLISHER_BOOKS.length;

// كتب مميزة تُعرض بأغلفتها في الصفحة الرئيسية
export const FEATURED_BOOKS: Publication[] = EBOOKS.slice(0, 8);
