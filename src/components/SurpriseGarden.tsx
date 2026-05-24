"use client";

import { useState, useCallback } from "react";
import ClickableSurprise from "./ClickableSurprise";
import HeartBurstProvider, { type BurstHeart } from "./HeartBurst";
import { MESSAGES } from "@/lib/content";

const GARDEN_ITEMS = [
  { emoji: "🧸", label: "دبدوب ١" },
  { emoji: "🧸", label: "دبدوب ٢" },
  { emoji: "🧸", label: "دبدوب ٣" },
  { emoji: "🎂", label: "كيك" },
  { emoji: "🌹", label: "وردة" },
  { emoji: "🎈", label: "بالون" },
  { emoji: "🦋", label: "فراشة" },
  { emoji: "🎀", label: "فيونكة" },
  { emoji: "⭐", label: "نجمة" },
];

export default function SurpriseGarden() {
  const [hearts, setHearts] = useState<BurstHeart[]>([]);
  const [clicked, setClicked] = useState<Set<number>>(new Set());

  const addBurst = useCallback((newHearts: BurstHeart[]) => {
    setHearts((prev) => [...prev, ...newHearts]);
  }, []);

  const clearHearts = useCallback((ids: number[]) => {
    setHearts((prev) => prev.filter((h) => !ids.includes(h.id)));
  }, []);

  function handleClick(index: number, burst: BurstHeart[]) {
    addBurst(burst);
    setClicked((prev) => new Set(prev).add(index));
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-8">
      <h2 className="mb-2 text-center text-2xl font-bold text-gradient font-arabic">
        حديقة المفاجآت 🌸
      </h2>
      <p className="mb-8 text-center text-rose-600/90 font-arabic leading-relaxed">
        {MESSAGES.surprisesIntro}
      </p>

      <div className="glass grid grid-cols-3 gap-4 rounded-3xl p-6 sm:grid-cols-3">
        {GARDEN_ITEMS.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col items-center justify-center rounded-2xl p-4 transition ${
              clicked.has(i) ? "bg-rose-100/80" : "bg-white/40 hover:bg-white/70"
            }`}
          >
            <ClickableSurprise
              emoji={item.emoji}
              label={item.label}
              size="lg"
              onBurst={(h) => handleClick(i, h)}
            />
            {clicked.has(i) && (
              <span className="mt-2 text-xs text-rose-500 font-arabic animate-fadeUp">
                مفاجأة! 💕
              </span>
            )}
          </div>
        ))}
      </div>

      {clicked.size >= GARDEN_ITEMS.length && (
        <p className="mt-6 text-center text-lg font-bold text-rose-500 animate-pulseSoft font-arabic">
          كشفتِ كل المفاجآت يا بسمة! أنتِ الأذكى! 🎉
        </p>
      )}

      <HeartBurstProvider hearts={hearts} clearHearts={clearHearts} />
    </section>
  );
}
