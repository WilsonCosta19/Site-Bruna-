import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { IconCalendar } from "./Icons";

const LINKS = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "servicos", label: "Serviços" },
  { id: "contato", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-42% 0px -52% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink-900/95 backdrop-blur-md transition-shadow duration-500 ${
        scrolled ? "shadow-[0_18px_40px_-24px_rgba(0,0,0,0.7)]" : ""
      }`}
    >
      <div className="container-x flex min-h-[76px] items-center justify-between py-2 md:min-h-[84px]">
        <a href="#inicio" className="group flex items-center" aria-label="Bruna Andrade — início">
          <img
            src={logo}
            alt="Logo Bruna Andrade"
            className="h-[72px] w-[72px] object-contain transition-transform duration-500 group-hover:scale-105 md:h-20 md:w-20"
            referrerPolicy="no-referrer"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`relative py-1 text-[10px] font-semibold uppercase tracking-[0.26em] transition-colors duration-300 ${
                active === l.id ? "text-white" : "text-white/60 hover:text-gold-300"
              }`}
            >
              {l.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-px bg-gold-400 transition-all duration-500 ${
                  active === l.id ? "w-full" : "w-0"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contato" className="btn-gold hidden px-5 py-2.5 sm:inline-flex">
            <IconCalendar className="h-4 w-4" />
            Agendar consulta
          </a>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] border border-white/15 text-white transition hover:border-gold-400/60 lg:hidden"
          >
            <span className={`h-px w-5 bg-current transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`h-px w-5 bg-current transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* menu mobile */}
      <div
        className={`grid overflow-hidden border-t border-white/5 bg-ink-900 transition-[grid-template-rows] duration-500 lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-t-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <nav className="container-x flex flex-col py-4" aria-label="Navegação mobile">
            {LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/75 transition hover:text-gold-300"
              >
                {l.label}
              </a>
            ))}
            <a href="#contato" onClick={() => setOpen(false)} className="btn-gold mt-4 mb-2 w-full">
              <IconCalendar className="h-4 w-4" />
              Agendar consulta
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
