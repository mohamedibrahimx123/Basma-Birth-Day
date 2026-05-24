"use client";

import { useState } from "react";
import { MESSAGES } from "@/lib/content";
import { fireCelebrationConfetti } from "./ConfettiButton";

export default function SecretStars() {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const [allRevealed, setAllRevealed] = useState(false);

  function reveal(index: number) {
    if (revealed.has(index)) return;

    const next = new Set(revealed);
    next.add(index);
    setRevealed(next);

    if (next.size === 1) {
      fireCelebrationConfetti();
    }

    if (next.size === MESSAGES.secretMessages.length) {
      setAllRevealed(true);
      setTimeout(() => fireCelebrationConfetti(), 300);
    }
  }

  return (
    <section className="relative z-10 mx-auto max-w-2xl px-4 py-12">
      <h2 className="mb-2 text-center text-2xl font-bold text-gradient font-arabic">
        مفاجآت مخفية ⭐
      </h2>
      <p className="mb-8 text-center text-rose-600/80 font-arabic">
        اضغطي على كل نجمة عشان تكتشفي سر صغير!
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {MESSAGES.secretMessages.map((msg, i) => (
          <button
            key={i}
            type="button"
            onClick={() => reveal(i)}
            className={`group relative flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 ${
              revealed.has(i)
                ? "scale-110 bg-gradient-to-br from-rose-300 to-pink-400 shadow-lg"
                : "bg-white/80 shadow-md hover:scale-110 hover:shadow-lg hover:shadow-rose-200"
            }`}
            aria-label={revealed.has(i) ? msg : "نجمة سرية"}
          >
            <span
              className={`text-2xl transition-transform ${
                revealed.has(i) ? "animate-sparkle" : "group-hover:animate-wiggle"
              }`}
            >
              {revealed.has(i) ? "💖" : "⭐"}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-8 space-y-3">
        {MESSAGES.secretMessages.map(
          (msg, i) =>
            revealed.has(i) && (
              <p
                key={i}
                className="reveal-secret rounded-2xl bg-white/60 px-4 py-3 text-center text-rose-700 font-arabic"
              >
                {msg}
              </p>
            )
        )}
      </div>

      {allRevealed && (
        <p className="mt-6 text-center text-lg font-bold text-rose-500 animate-pulseSoft font-arabic">
          أحسنتِ! كشفتِ كل الأسرار 🎉
        </p>
      )}
    </section>
  );
}
