"use client";

import { useState, useCallback } from "react";
import HeartBurstProvider, {
  spawnHeartsAt,
  type BurstHeart,
} from "@/components/HeartBurst";

export function useSurpriseBurst() {
  const [hearts, setHearts] = useState<BurstHeart[]>([]);

  const addBurst = useCallback((newHearts: BurstHeart[]) => {
    setHearts((prev) => [...prev, ...newHearts]);
  }, []);

  const clearHearts = useCallback((ids: number[]) => {
    setHearts((prev) => prev.filter((h) => !ids.includes(h.id)));
  }, []);

  const HeartLayer = (
    <HeartBurstProvider hearts={hearts} clearHearts={clearHearts} />
  );

  return { addBurst, spawnHeartsAt, HeartLayer };
}
