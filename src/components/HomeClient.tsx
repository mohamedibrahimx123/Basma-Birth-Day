"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PasswordGate from "./PasswordGate";
import FloatingHearts from "./FloatingHearts";

export default function HomeClient() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (sessionStorage.getItem("basma-unlocked") === "true") {
      router.replace("/welcome");
    }
  }, [router]);

  function handleUnlock() {
    router.push("/welcome");
  }

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <span className="text-4xl animate-pulse">🌸</span>
      </div>
    );
  }

  return (
    <>
      <FloatingHearts />
      <PasswordGate onUnlock={handleUnlock} />
    </>
  );
}
