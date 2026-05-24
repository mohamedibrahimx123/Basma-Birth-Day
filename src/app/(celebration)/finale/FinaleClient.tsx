"use client";

import { useEffect } from "react";
import Link from "next/link";
import { MESSAGES } from "@/lib/content";
import ConfettiButton, { fireCelebrationConfetti } from "@/components/ConfettiButton";
import ClickableSurprise from "@/components/ClickableSurprise";
import { useSurpriseBurst } from "@/hooks/useSurpriseBurst";

export default function FinaleClient() {
  const { addBurst, HeartLayer } = useSurpriseBurst();

  useEffect(() => {
    const t = setTimeout(() => fireCelebrationConfetti(), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="mx-auto max-w-2xl text-center">
      {HeartLayer}

      <div className="mb-6 flex justify-center gap-4">
        <ClickableSurprise emoji="🧸" size="lg" onBurst={addBurst} />
        <ClickableSurprise emoji="🎁" size="lg" onBurst={addBurst} />
        <ClickableSurprise emoji="🧸" size="lg" onBurst={addBurst} />
      </div>

      <div className="glass rounded-3xl border-2 border-rose-200/50 p-8">
        <span className="mb-4 inline-block text-5xl">🎁</span>
        <h2 className="mb-4 text-2xl font-bold text-gradient font-arabic">
          المفاجأة الأخيرة
        </h2>
        <p className="text-lg leading-loose text-rose-800 font-arabic">
          {MESSAGES.finalSurprise}
        </p>
        <ConfettiButton className="mt-6 rounded-2xl bg-gradient-to-l from-rose-500 to-purple-500 px-8 py-3 font-bold text-white shadow-lg transition hover:scale-105 font-arabic">
          احتفلي تاني! 🥳
        </ConfettiButton>
      </div>

      <Link
        href="/welcome"
        className="mt-8 inline-block text-rose-500 hover:text-rose-700 font-arabic"
      >
        ↻ ابدئي من الأول — عيد ميلاد سعيد يا بسمة!
      </Link>
    </section>
  );
}
