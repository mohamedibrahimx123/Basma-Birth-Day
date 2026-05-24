"use client";

import { useState, FormEvent } from "react";
import { isValidBirthdayPassword } from "@/lib/password";

type PasswordGateProps = {
  onUnlock: () => void;
};

export default function PasswordGate({ onUnlock }: PasswordGateProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (isValidBirthdayPassword(password)) {
      setError(false);
      if (typeof window !== "undefined") {
        sessionStorage.setItem("basma-unlocked", "true");
      }
      onUnlock();
    } else {
      setError(true);
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
    }
  }

  return (
    <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
      <div
        className={`glass w-full max-w-md rounded-3xl p-8 text-center animate-fadeUp ${
          shaking ? "animate-shake" : ""
        }`}
      >
        <span className="mb-4 inline-block text-6xl animate-float">🎁</span>
        <h1 className="mb-2 text-3xl font-bold text-gradient font-arabic">
          مفاجأة خاصة لبسمة
        </h1>
        <p className="mb-6 text-rose-600/80 font-arabic leading-relaxed">
          فيه هدية مستنياكِ… بس محتاجة كلمة سر صغيرة 🌸
          <br />
          <span className="text-sm text-rose-400/90 mt-2 block">
            (تلميح: تاريخ ميلادكِ — يوم / شهر / سنة)
          </span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            inputMode="numeric"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            placeholder="أدخلي تاريخ ميلادكِ"
            className="w-full rounded-2xl border-2 border-rose-200 bg-white/90 px-4 py-3 text-center text-lg text-rose-800 placeholder:text-rose-300 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-200 font-arabic"
            dir="ltr"
            autoComplete="off"
          />

          {error && (
            <p className="text-sm text-rose-500 font-arabic animate-fadeUp">
              مش بالظبط يا جميلة… جرّبي تاني! 💕
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-l from-rose-500 to-pink-500 py-3 text-lg font-bold text-white shadow-lg shadow-rose-300/50 transition hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] font-arabic"
          >
            افتحي المفاجأة ✨
          </button>
        </form>
      </div>
    </div>
  );
}
