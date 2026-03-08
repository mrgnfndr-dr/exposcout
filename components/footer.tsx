export function Footer() {
  return (
    <footer className="bg-[#0A0A0C] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gold flex items-center justify-center">
              <span className="text-white font-bold text-sm">ES</span>
            </div>
            <div>
              <div className="text-white font-bold">ExpoScout</div>
              <div className="text-white/30 text-xs">
                Поставщики с выставок — без поездок
              </div>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="#events"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              Выставки
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              Как это работает
            </a>
            <a
              href="#deliverables"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              Что вы получите
            </a>
            <a
              href="#faq"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              FAQ
            </a>
            <a
              href="#request"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              Заявка
            </a>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-white/20 text-xs">
            &copy; {new Date().getFullYear()} ExpoScout. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
