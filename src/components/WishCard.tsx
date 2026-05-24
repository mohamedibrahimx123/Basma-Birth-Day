type WishCardProps = {
  emoji: string;
  title: string;
  text: string;
  delay?: number;
};

export default function WishCard({ emoji, title, text, delay = 0 }: WishCardProps) {
  return (
    <article
      className="glass card-hover rounded-3xl p-6 opacity-0 animate-fadeUp font-arabic"
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      <span className="mb-3 block text-4xl">{emoji}</span>
      <h3 className="mb-3 text-xl font-bold text-rose-600">{title}</h3>
      <p className="leading-relaxed text-rose-800/90">{text}</p>
    </article>
  );
}
