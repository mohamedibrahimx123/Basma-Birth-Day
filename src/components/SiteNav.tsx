"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_PAGES } from "@/lib/content";

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-rose-100/80 bg-white/75 backdrop-blur-lg">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-2 px-3 py-3">
        <Link
          href="/welcome"
          className="shrink-0 text-lg font-extrabold text-gradient font-arabic"
        >
          Basma ✨
        </Link>

        <div className="flex flex-1 justify-end gap-1 overflow-x-auto pb-1 scrollbar-hide">
          {NAV_PAGES.map((page) => {
            const active = pathname === page.href;
            return (
              <Link
                key={page.href}
                href={page.href}
                className={`flex shrink-0 items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium transition font-arabic ${
                  active
                    ? "bg-gradient-to-l from-rose-500 to-pink-500 text-white shadow-md shadow-rose-200"
                    : "bg-white/80 text-rose-600 hover:bg-rose-50"
                }`}
              >
                <span>{page.emoji}</span>
                <span className="hidden sm:inline">{page.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
