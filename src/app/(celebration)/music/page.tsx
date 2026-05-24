import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import EgyptianMusicPlayer from "@/components/EgyptianMusicPlayer";

export default function MusicPage() {
  return (
    <PageTransition>
      <EgyptianMusicPlayer />
      <div className="mt-8 flex justify-center font-arabic">
        <Link
          href="/finale"
          className="rounded-2xl bg-gradient-to-l from-rose-500 to-purple-500 px-8 py-3 font-bold text-white shadow-lg"
        >
          التالي: المفاجأة الأخيرة 🎁
        </Link>
      </div>
    </PageTransition>
  );
}
