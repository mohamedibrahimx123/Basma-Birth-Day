import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "عيد ميلاد سعيد يا بسمة! 🎂",
  description: "مفاجأة عيد ميلاد خاصة لبسمة — ١٨ سنة من الجمال والفرح",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="font-arabic antialiased text-rose-900">{children}</body>
    </html>
  );
}
