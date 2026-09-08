import type { SVGProps } from "react";
import retrato from "../assets/retrato-hero.jpg";
import { IconArrowRight, IconDocSearch, IconShield, IconWhats, Monogram } from "./Icons";

const WA = "https://wa.me/553185856534?text=Ol%C3%A1%2C%20Bruna!%20Gostaria%20de%20falar%20sobre%20per%C3%ADcia%20trabalhista.";

const FEATURES = [
  { icon: IconScaleMini, title: "Atendimento", sub: "em todo o Brasil" },
  { icon: IconDocSearch, title: "Análise técnica", sub: "e imparcial" },
  { icon: IconShield, title: "Sigilo e", sub: "responsabilidade" },
];

function IconScaleMini(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 4.2v16.3M8.2 20.5h7.6M5.2 6.8h13.6" />
      <circle cx="12" cy="3.4" r="1" />
      <path d="M6 6.8 3.1 13.4a3.3 3.3 0 0 0 5.8 0L6 6.8Z" />
      <path d="M18 6.8l-2.9 6.6a3.3 3.3 0 0 0 5.8 0L18 6.8Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-ink-900 pt-20 text-white md:pt-[84px]">
      {/* arcos dourados de fundo */}
      <div className="arc -left-52 top-24 h-[440px] w-[440px]" aria-hidden="true" />
      <div className="arc -left-40 top-36 h-[320px] w-[320px] border-gold-400/10" aria-hidden="true" />
      <div className="arc -right-64 -top-72 h-[680px] w-[680px]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(1100px_520px_at_78%_-10%,rgba(198,156,95,0.14),transparent_60%)]"
        aria-hidden="true"
      />

      <div className="container-x relative grid gap-10 pb-4 pt-12 md:pt-16 lg:grid-cols-12 lg:gap-8">
        {/* coluna textual */}
        <div className="lg:col-span-7 lg:pr-6 xl:col-span-6">
          <p className="eyebrow hero-in text-gold-400" style={{ animationDelay: "80ms" }}>
            Perícia Trabalhista
          </p>
          <h1
            className="hero-in mt-6 font-display text-[clamp(2.6rem,5.4vw,4.35rem)] font-medium leading-[1.06]"
            style={{ animationDelay: "180ms" }}
          >
            <span className="block text-cream-50">Precisão técnica.</span>
            <span className="block text-gold-400">Segurança para</span>
            <span className="block text-gold-400">sua estratégia.</span>
          </h1>
          <p
            className="hero-in mt-7 max-w-md text-[13.5px] leading-relaxed text-white/65 md:text-sm"
            style={{ animationDelay: "300ms" }}
          >
            Perícia trabalhista e cálculos complexos com rigor técnico, clareza e responsabilidade. Apoio
            especializado para advogados, empresas e decisões mais seguras.
          </p>
          <div className="hero-in mt-9 flex flex-wrap gap-4" style={{ animationDelay: "420ms" }}>
            <a href={WA} target="_blank" rel="noreferrer" className="btn-gold">
              <IconWhats className="h-4 w-4" />
              Fale no WhatsApp
            </a>
            <a href="#servicos" className="btn-outline group">
              Conheça os serviços
              <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* retrato */}
        <div className="hero-in relative lg:col-span-5 xl:col-span-4" style={{ animationDelay: "260ms" }}>
          <Monogram
            className="pointer-events-none absolute -top-10 right-0 h-40 w-40 text-gold-500/15 md:h-52 md:w-52"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-[420px] overflow-hidden lg:max-w-none">
            <img
              src={retrato}
              alt="Bruna Andrade, perita trabalhista, em retrato corporativo"
              className="aspect-[4/5] w-full object-cover object-top shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]"
              loading="eager"
              referrerPolicy="no-referrer"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-900 to-transparent" />
          </div>
        </div>

        {/* citação lateral */}
        <aside className="hero-in hidden xl:col-span-2 xl:flex xl:flex-col xl:justify-center xl:pl-2" style={{ animationDelay: "520ms" }}>
          <span className="font-display text-4xl leading-none text-gold-400" aria-hidden="true">
            “
          </span>
          <p className="mt-3 font-display text-[12.5px] uppercase leading-[2] tracking-[0.16em] text-white/85">
            Conhecimento técnico que gera segurança na tomada de decisão…
          </p>
          <span className="mt-6 h-px w-10 bg-gold-500/70" />
          <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.3em] text-white/60">Bruna Andrade</p>
          <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.3em] text-gold-400">Perícia Trabalhista</p>
        </aside>
      </div>

      {/* faixa de selos */}
      <div className="relative mt-10 border-t border-white/10 lg:mt-14">
        <div className="container-x grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className={`hero-in flex items-center gap-4 py-5 ${i > 0 ? "sm:pl-8" : ""} md:py-6`}
              style={{ animationDelay: `${560 + i * 120}ms` }}
            >
              <f.icon className="h-6 w-6 shrink-0 text-gold-400" />
              <p className="text-[9.5px] font-semibold uppercase leading-[1.9] tracking-[0.26em] text-white/70">
                {f.title}
                <br />
                {f.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
