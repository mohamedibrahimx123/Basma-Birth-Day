"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MiniMusicBar() {
  const pathname = usePathname();
  if (pathname === "/music") return null;

  return (
    <Link
      href="/music"
      className="fixed bottom-4 left-4 z-50 flex items-center gap-2 rounded-full bg-gradient-to-l from-rose-500 to-pink-500 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-rose-300/50 transition hover:scale-105 font-arabic"
    >
      <span className="animate-wiggle">🎵</span>
      <span>أغاني عيد الميلاد</span>
    </Link>
  );
}
