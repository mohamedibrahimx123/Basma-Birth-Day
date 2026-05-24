import Link from "next/link";
import { MESSAGES } from "@/lib/content";
import PageTransition from "@/components/PageTransition";
import WishCard from "@/components/WishCard";
import WishesClient from "./WishesClient";

export default function WishesPage() {
  return (
    <PageTransition>
      <WishesClient />
      <section className="mx-auto mt-8 grid max-w-4xl gap-6 md:grid-cols-2">
        {MESSAGES.wishes.map((wish, i) => (
          <WishCard
            key={wish.title}
            emoji={wish.emoji}
            title={wish.title}
            text={wish.text}
            delay={i * 150}
          />
        ))}
      </section>
      <div className="mt-10 flex justify-center gap-4 font-arabic">
        <Link href="/welcome" className="text-rose-500 hover:text-rose-700">
          → الترحيب
        </Link>
        <Link
          href="/dreams"
          className="rounded-2xl bg-gradient-to-l from-rose-500 to-pink-500 px-6 py-2 font-bold text-white"
        >
          التالي: أحلامكِ 🩺
        </Link>
      </div>
    </PageTransition>
  );
}
