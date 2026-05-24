export default function BasmaFooter() {
  return (
    <footer className="relative z-10 mt-auto border-t border-rose-200/60 bg-white/50 backdrop-blur-sm">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-2 px-4 py-8 text-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl">💕</span>
          <span className="text-4xl font-extrabold tracking-wide text-gradient font-arabic">
            Basma
          </span>
          <span className="text-2xl">💕</span>
        </div>
        <p className="text-lg font-bold text-rose-600 font-arabic">بسمة</p>
        <p className="text-sm text-rose-400/90 font-arabic">
          عيد ميلاد سعيد — ١٨ سنة من الجمال ✨
        </p>
        <p className="text-xs text-rose-300 font-arabic">صُنع بحب — ٢٠٢٦</p>
      </div>
    </footer>
  );
}
