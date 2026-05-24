import Link from "next/link";
import { MESSAGES } from "@/lib/content";
import PageTransition from "@/components/PageTransition";
import WishCard from "@/components/WishCard";
import DreamsClient from "./DreamsClient";

export default function DreamsPage() {
  return (
    <PageTransition>
      <DreamsClient />
      <section className="mx-auto mt-8 grid max-w-4xl gap-6 md:grid-cols-2">
        {MESSAGES.dreams.map((item, i) => (
          <WishCard
            key={item.title}
            emoji={item.emoji}
            title={item.title}
            text={item.text}
            delay={i * 150}
          />
        ))}
      </section>
      <div className="mt-10 flex justify-center gap-4 font-arabic">
        <Link href="/wishes" className="text-rose-500 hover:text-rose-700">
          → التهنئة
        </Link>
        <Link
          href="/surprises"
          className="rounded-2xl bg-gradient-to-l from-rose-500 to-pink-500 px-6 py-2 font-bold text-white"
        >
          التالي: المفاجآت 🧸
        </Link>
      </div>
    </PageTransition>
  );
}
