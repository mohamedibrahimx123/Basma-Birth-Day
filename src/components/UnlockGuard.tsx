"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import FloatingHearts from "./FloatingHearts";

export default function UnlockGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const unlocked = sessionStorage.getItem("basma-unlocked") === "true";
    if (!unlocked) {
      router.replace("/");
    } else {
      setReady(true);
    }
  }, [router, pathname]);

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <span className="text-4xl animate-pulse">🌸</span>
      </div>
    );
  }

  return (
    <>
      <FloatingHearts />
      {children}
    </>
  );
}
