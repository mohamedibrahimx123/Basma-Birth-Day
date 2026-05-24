import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import SecretStars from "@/components/SecretStars";
import SurpriseGarden from "@/components/SurpriseGarden";

export default function SurprisesPage() {
  return (
    <PageTransition>
      <SurpriseGarden />
      <SecretStars />
      <div className="mt-8 flex justify-center gap-4 font-arabic">
        <Link href="/dreams" className="text-rose-500 hover:text-rose-700">
          → أحلامكِ
        </Link>
        <Link
          href="/music"
          className="rounded-2xl bg-gradient-to-l from-rose-500 to-pink-500 px-6 py-2 font-bold text-white"
        >
          التالي: الأغاني 🎵
        </Link>
      </div>
    </PageTransition>
  );
}
