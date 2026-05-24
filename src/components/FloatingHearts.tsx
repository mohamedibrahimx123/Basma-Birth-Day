"use client";

const HEARTS = ["💕", "💖", "🌸", "✨", "🎀", "💗", "🦋", "⭐"];

export default function FloatingHearts() {
  return (
    <div className="hearts-bg" aria-hidden>
      {Array.from({ length: 18 }).map((_, i) => (
        <span
          key={i}
          className="heart-particle"
          style={{
            left: `${(i * 5.5 + 3) % 100}%`,
            animationDuration: `${12 + (i % 8) * 2}s`,
            animationDelay: `${i * 0.7}s`,
          }}
        >
          {HEARTS[i % HEARTS.length]}
        </span>
      ))}
    </div>
  );
}
