import logo from "../assets/logo.png";
import {
  IconCalculator,
  IconDocSearch,
  IconInstagram,
  IconScale,
  IconShield,
  IconWhats,
} from "./Icons";

const WHATSAPP_URL =
  "https://wa.me/553185856534?text=Ol%C3%A1%2C%20Bruna!%20Gostaria%20de%20falar%20sobre%20per%C3%ADcia%20trabalhista.";

const NAV = ["Início", "Sobre", "Serviços", "Contato"];
const IDS = ["inicio", "sobre", "servicos", "contato"];

const SEALS = [
  { icon: IconScale, label: "Perícia Trabalhista" },
  { icon: IconCalculator, label: "Cálculos Complexos" },
  { icon: IconDocSearch, label: "Análise Técnica" },
  { icon: IconShield, label: "Segurança Jurídica" },
];

const SOCIAL = [
  {
    icon: IconWhats,
    label: "WhatsApp",
    href: WHATSAPP_URL,
  },
  {
    icon: IconInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/andradeasc_?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-white">
      <div className="container-x flex flex-col items-center justify-between gap-8 py-12 lg:flex-row">
        <a href="#inicio" className="group flex items-center" aria-label="Voltar ao início">
          <img
            src={logo}
            alt="Logo Bruna Andrade"
            className="h-16 w-16 object-contain transition-transform duration-500 group-hover:scale-105 md:h-20 md:w-20"
            referrerPolicy="no-referrer"
          />
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

        <div className="flex items-center gap-3">
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
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-center md:flex-row md:text-left">
          <p className="text-[10px] text-white/45">Precisão técnica. Segurança para sua estratégia.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[10px] text-white/45">
            <span>© 2026 Bruna Andrade. Todos os direitos reservados.</span>
            <span>•</span>
            <a
              href="https://wa.me/5531993565383"
              target="_blank"
              rel="noreferrer"
              className="text-gold-400/80 transition-colors hover:text-gold-300 hover:underline"
            >
              Desenvolvido por Wilson Costa (31) 99356-5383
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
