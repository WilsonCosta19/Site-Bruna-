import {
  IconCalculator,
  IconDocSearch,
  IconInstagram,
  IconLinkedin,
  IconScale,
  IconShield,
  IconYoutube,
  Monogram,
} from "./Icons";

const NAV = ["Início", "Sobre", "Serviços", "Conteúdo", "Contato"];
const IDS = ["inicio", "sobre", "servicos", "conteudo", "contato"];

const SEALS = [
  { icon: IconScale, label: "Perícia Trabalhista" },
  { icon: IconCalculator, label: "Cálculos Complexos" },
  { icon: IconDocSearch, label: "Análise Técnica" },
  { icon: IconShield, label: "Segurança Jurídica" },
];

const SOCIAL = [
  { icon: IconInstagram, label: "Instagram", href: "https://instagram.com" },
  { icon: IconLinkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: IconYoutube, label: "YouTube", href: "https://youtube.com" },
];

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-white">
      <div className="container-x flex flex-col items-center justify-between gap-8 py-12 lg:flex-row">
        <a href="#inicio" className="group flex items-center gap-3" aria-label="Voltar ao início">
          <Monogram className="h-9 w-9 text-gold-400 transition-transform duration-500 group-hover:scale-105" />
          <span className="leading-none">
            <span className="block font-display text-[19px] tracking-[0.08em]">BRUNA ANDRADE</span>
            <span className="mt-1 block text-[7.5px] font-semibold uppercase tracking-[0.46em] text-gold-400">
              Perícia Trabalhista
            </span>
          </span>
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2" aria-label="Navegação do rodapé">
          {NAV.map((label, i) => (
            <span key={label} className="flex items-center gap-5">
              {i > 0 && <span className="text-white/15" aria-hidden="true">|</span>}
              <a
                href={`#${IDS[i]}`}
                className="text-[9.5px] font-semibold uppercase tracking-[0.28em] text-white/60 transition-colors duration-300 hover:text-gold-300"
              >
                {label}
              </a>
            </span>
          ))}
        </nav>

        <div className="flex gap-3">
          {SOCIAL.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="flex h-9 w-9 items-center justify-center border border-white/10 text-gold-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-400/70 hover:text-gold-200"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {SEALS.map((s) => (
            <div
              key={s.label}
              className="flex items-center justify-center gap-3.5 bg-ink-900 py-5 transition-colors duration-500 hover:bg-ink-850"
            >
              <s.icon className="h-5 w-5 shrink-0 text-gold-400" />
              <span className="text-[8.5px] font-semibold uppercase tracking-[0.26em] text-white/60">{s.label}</span>
            </div>
          ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 md:flex-row">
          <p className="text-[10px] text-white/45">Precisão técnica. Segurança para sua estratégia.</p>
          <p className="text-[10px] text-white/45">© 2026 Bruna Andrade. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
