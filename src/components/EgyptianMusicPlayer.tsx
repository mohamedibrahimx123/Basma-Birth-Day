"use client";

import { useState } from "react";
import { EGYPTIAN_SONGS } from "@/lib/content";
import { fireCelebrationConfetti } from "./ConfettiButton";

export default function EgyptianMusicPlayer() {
  const [activeId, setActiveId] = useState<string>(EGYPTIAN_SONGS[0].id);

  const active =
    EGYPTIAN_SONGS.find((s) => s.id === activeId) ?? EGYPTIAN_SONGS[0];

  return (
    <section className="mx-auto max-w-3xl px-4 py-8">
      <h2 className="mb-2 text-center text-2xl font-bold text-gradient font-arabic">
        أغاني عيد الميلاد المصرية 🎵
      </h2>
      <p className="mb-8 text-center text-rose-600/90 font-arabic">
        اختاري أغنية وغنّي معانا — كل سنة وانتِ طيبة! 🇪🇬🎂
      </p>

      {EGYPTIAN_SONGS.length > 1 && (
        <div className="mb-4 flex flex-wrap justify-center gap-2">
          {EGYPTIAN_SONGS.map((song) => (
            <button
              key={song.id}
              type="button"
              onClick={() => {
                setActiveId(song.id);
                fireCelebrationConfetti();
              }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition font-arabic ${
                activeId === song.id
                  ? "bg-gradient-to-l from-rose-500 to-pink-500 text-white shadow-md"
                  : "glass text-rose-600 hover:bg-white"
              }`}
            >
              {song.artist}
            </button>
          ))}
        </div>
      )}

      <div className="glass overflow-hidden rounded-3xl p-4">
        <h3 className="mb-1 text-center font-bold text-rose-700 font-arabic">
          {active.title}
        </h3>
        <p className="mb-4 text-center text-sm text-rose-500 font-arabic">
          {active.description}
        </p>

        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-rose-100">
          <iframe
            key={active.youtubeId}
            title={active.title}
            src={`https://www.youtube-nocookie.com/embed/${active.youtubeId}?autoplay=0&rel=0`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>

        <p className="mt-4 text-center text-xs text-rose-400 font-arabic">
          اضغطي تشغيل في الفيديو عشان تسمعي الأغنية 🎶
        </p>
        {"youtubeUrl" in active && active.youtubeUrl && (
          <a
            href={active.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-center text-sm text-rose-500 underline hover:text-rose-700 font-arabic"
          >
            مش شغالة؟ افتحي الأغنية على يوتيوب ↗
          </a>
        )}
      </div>

      <div className="mt-6 rounded-2xl bg-white/60 p-4 text-center font-arabic">
        <p className="text-rose-700 leading-relaxed">
          🎤 <strong>كل سنة وانتِ طيبة ومن قلبي قريبة</strong>
          <br />
          <span className="text-sm text-rose-500">
            والسنة دي معاكِ واللي جاي وياكِ — يا أغلى الحبايب يا بسمة! 💕
          </span>
        </p>
      </div>
    </section>
  );
}
