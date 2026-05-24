"use client";

import confetti from "canvas-confetti";

export function fireCelebrationConfetti() {
  const colors = ["#ff6ba3", "#ff9ec0", "#e879f9", "#f472b6", "#fda4af", "#fcd34d"];

  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 },
    colors,
  });

  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors,
    });
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors,
    });
  }, 200);
}

type ConfettiButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function ConfettiButton({ children, className = "" }: ConfettiButtonProps) {
  return (
    <button
      type="button"
      onClick={fireCelebrationConfetti}
      className={className}
    >
      {children}
    </button>
  );
}
