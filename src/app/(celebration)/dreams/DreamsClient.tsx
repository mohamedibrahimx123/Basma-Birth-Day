"use client";

import ClickableSurprise from "@/components/ClickableSurprise";
import { useSurpriseBurst } from "@/hooks/useSurpriseBurst";

export default function DreamsClient() {
  const { addBurst, HeartLayer } = useSurpriseBurst();

  return (
    <div className="mx-auto max-w-3xl text-center">
      {HeartLayer}
      <h2 className="mb-2 text-2xl font-bold text-gradient font-arabic">
        أحلامكِ الكبيرة 🌟
      </h2>
      <p className="mb-6 text-rose-600 font-arabic">
        الثانوية العامة والطب — إن شاء الله هتوصلي!
      </p>
      <div className="flex justify-center gap-6">
        <ClickableSurprise emoji="🩺" onBurst={addBurst} size="lg" message="إن شاء الله دكتورة بسمة! 🩺" />
        <ClickableSurprise emoji="📚" onBurst={addBurst} size="lg" message="بالتوفيق يا بطلة! 📚" />
      </div>
    </div>
  );
}
