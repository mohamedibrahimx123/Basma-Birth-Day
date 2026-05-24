"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export type BurstHeart = {
  id: number;
  x: number;
  y: number;
  emoji: string;
  angle: number;
};

const HEART_EMOJIS = ["💕", "💖", "💗", "💝", "❤️", "🩷", "✨", "🌸"];

let burstId = 0;

export function spawnHeartsAt(x: number, y: number, count = 12): BurstHeart[] {
  return Array.from({ length: count }, () => ({
    id: burstId++,
    x,
    y,
    emoji: HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)],
    angle: Math.random() * 360,
  }));
}

type HeartBurstLayerProps = {
  hearts: BurstHeart[];
  onDone: (ids: number[]) => void;
};

function HeartBurstLayer({ hearts, onDone }: HeartBurstLayerProps) {
  useEffect(() => {
    const ids = hearts.map((h) => h.id);
    const t = setTimeout(() => onDone(ids), 1200);
    return () => clearTimeout(t);
  }, [hearts, onDone]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      {hearts.map((h) => {
        const dist = 60 + Math.random() * 80;
        const rad = (h.angle * Math.PI) / 180;
        const dx = Math.cos(rad) * dist;
        const dy = Math.sin(rad) * dist - 40;

        return (
          <span
            key={h.id}
            className="heart-burst-particle absolute text-2xl"
            style={{
              left: h.x,
              top: h.y,
              ["--dx" as string]: `${dx}px`,
              ["--dy" as string]: `${dy}px`,
            }}
          >
            {h.emoji}
          </span>
        );
      })}
    </div>,
    document.body
  );
}

type HeartBurstProviderProps = {
  hearts: BurstHeart[];
  clearHearts: (ids: number[]) => void;
};

export default function HeartBurstProvider({
  hearts,
  clearHearts,
}: HeartBurstProviderProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted || hearts.length === 0) return null;

  return <HeartBurstLayer hearts={hearts} onDone={clearHearts} />;
}
