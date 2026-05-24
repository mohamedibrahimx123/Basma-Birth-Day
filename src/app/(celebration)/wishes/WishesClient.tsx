"use client";

import ClickableSurprise from "@/components/ClickableSurprise";
import { useSurpriseBurst } from "@/hooks/useSurpriseBurst";

export default function WishesClient() {
  const { addBurst, HeartLayer } = useSurpriseBurst();

  return (
    <div className="mx-auto max-w-3xl text-center">
      {HeartLayer}
      <h2 className="mb-4 text-2xl font-bold text-gradient font-arabic">رسائل لعيد ميلادكِ 💌</h2>
      <div className="mb-6 flex justify-center gap-4">
        <ClickableSurprise emoji="🧸" onBurst={addBurst} size="md" />
        <ClickableSurprise emoji="💖" onBurst={addBurst} size="md" />
        <ClickableSurprise emoji="🧸" onBurst={addBurst} size="md" />
      </div>
    </div>
  );
}
