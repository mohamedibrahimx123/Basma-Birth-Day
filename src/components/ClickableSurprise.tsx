"use client";

import { useCallback } from "react";
import { spawnHeartsAt, type BurstHeart } from "./HeartBurst";
import { fireCelebrationConfetti } from "./ConfettiButton";
import { TEDDY_SURPRISES } from "@/lib/content";

type ClickableSurpriseProps = {
  emoji: string;
  label?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  onBurst: (hearts: BurstHeart[]) => void;
  message?: string;
};

const sizes = {
  sm: "text-3xl",
  md: "text-5xl",
  lg: "text-7xl",
};

export default function ClickableSurprise({
  emoji,
  label,
  className = "",
  size = "md",
  onBurst,
  message,
}: ClickableSurpriseProps) {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      onBurst(spawnHeartsAt(x, y, 14));

      if (Math.random() > 0.6) {
        fireCelebrationConfetti();
      }

      if (message) {
        showToast(message);
      } else if (emoji === "🧸" && Math.random() > 0.5) {
        const msg =
          TEDDY_SURPRISES[Math.floor(Math.random() * TEDDY_SURPRISES.length)];
        showToast(msg);
      }
    },
    [emoji, message, onBurst]
  );

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={label ?? "مفاجأة"}
      className={`group cursor-pointer transition-transform hover:scale-125 active:scale-95 ${sizes[size]} ${className}`}
    >
      <span className="inline-block drop-shadow-md group-hover:animate-wiggle">
        {emoji}
      </span>
    </button>
  );
}

function showToast(text: string) {
  const existing = document.getElementById("basma-toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "basma-toast";
  toast.className =
    "fixed bottom-24 left-1/2 z-[110] -translate-x-1/2 rounded-2xl bg-white/95 px-6 py-3 text-center text-rose-700 shadow-xl border border-rose-200 font-arabic animate-fadeUp max-w-xs";
  toast.textContent = text;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2800);
}
