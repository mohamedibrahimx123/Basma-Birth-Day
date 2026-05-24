"use client";

import { useEffect } from "react";
import Link from "next/link";
import { MESSAGES } from "@/lib/content";
import PageTransition from "@/components/PageTransition";
import ConfettiButton, {
  fireCelebrationConfetti,
} from "@/components/ConfettiButton";
import ClickableSurprise from "@/components/ClickableSurprise";
import { useSurpriseBurst } from "@/hooks/useSurpriseBurst";

export default function WelcomePage() {
  const { addBurst, HeartLayer } = useSurpriseBurst();

  useEffect(() => {
    const t = setTimeout(() => fireCelebrationConfetti(), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <PageTransition>
      {HeartLayer}
      <section className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <ClickableSurprise
          emoji="🧸"
          size="lg"
          className="mb-4"
          onBurst={addBurst}
          message="أهلاً يا بسمة! اضغطي على الدباديب في كل الصفحات 💕"
        />

        <span className="mb-4 text-7xl animate-float">🎂</span>
        <h1 className="mb-4 text-4xl font-bold text-gradient md:text-5xl font-arabic">
          {MESSAGES.heroTitle}
        </h1>
        <p className="mb-4 text-xl text-rose-600 font-arabic">
          {MESSAGES.heroSubtitle}
        </p>
        <p className="mb-6 leading-loose text-rose-800/90 font-arabic">
          {MESSAGES.intro}
        </p>

        <div className="animate-pulseSoft rounded-full bg-gradient-to-l from-rose-400 to-pink-500 px-8 py-4 text-3xl font-bold text-white shadow-xl font-arabic mb-6">
          ١٨ 🎈
        </div>

        <p className="mb-6 text-sm text-rose-500 font-arabic">
          {MESSAGES.welcomeHint}
        </p>

        <ConfettiButton className="mb-8 rounded-full bg-white/80 px-6 py-3 text-rose-600 shadow-lg transition hover:scale-105 font-arabic">
          اضغطي هنا للاحتفال! 🎉
        </ConfettiButton>

        <Link
          href="/wishes"
          className="rounded-2xl bg-gradient-to-l from-rose-500 to-pink-500 px-8 py-3 font-bold text-white shadow-lg transition hover:scale-105 font-arabic">
          التالي 💌 ←
        </Link>
      </section>
    </PageTransition>
  );
}
