"use client";

import { useState, useCallback } from "react";
import ClickableSurprise from "./ClickableSurprise";
import HeartBurstProvider, { type BurstHeart } from "./HeartBurst";

const SCATTERED = [
  { emoji: "🧸", className: "fixed bottom-32 left-4 z-40", size: "md" as const },
  { emoji: "🧸", className: "fixed top-28 left-6 z-40 hidden md:block", size: "sm" as const },
  { emoji: "💝", className: "fixed top-36 right-4 z-40", size: "sm" as const },
  { emoji: "🎂", className: "fixed bottom-40 right-6 z-40", size: "md" as const },
];

export default function SurpriseScatter() {
  const [hearts, setHearts] = useState<BurstHeart[]>([]);

  const addBurst = useCallback((newHearts: BurstHeart[]) => {
    setHearts((prev) => [...prev, ...newHearts]);
  }, []);

  const clearHearts = useCallback((ids: number[]) => {
    setHearts((prev) => prev.filter((h) => !ids.includes(h.id)));
  }, []);

  return (
    <>
      {SCATTERED.map((item, i) => (
        <ClickableSurprise
          key={i}
          emoji={item.emoji}
          className={item.className}
          size={item.size}
          onBurst={addBurst}
        />
      ))}
      <HeartBurstProvider hearts={hearts} clearHearts={clearHearts} />
    </>
  );
}
