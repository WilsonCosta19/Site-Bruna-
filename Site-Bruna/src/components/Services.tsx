import Reveal from "./Reveal";
import {
  IconArrowRight,
  IconCalculator,
  IconDocSearch,
  IconScale,
  IconSeal,
  IconShield,
  IconUser,
} from "./Icons";

const SERVICES = [
  {
    icon: IconScale,
    title: "Perícia Trabalhista",
    text: "Elaboração de laudos técnicos com rigor e imparcialidade.",
  },
  {
    icon: IconCalculator,
    title: "Cálculos Complexos",
    text: "Cálculos precisos e conferência de valores trabalhistas.",
  },
  {
    icon: IconDocSearch,
    title: "Análise Técnica",
    text: "Estudo detalhado de documentos e operações.",
  },
  {
    icon: IconShield,
    title: "Impugnação de Cálculos",
    text: "Identificação de erros e elaboração de pareceres técnicos.",
  },
  {
    icon: IconUser,
    title: "Assistência Técnica",
    text: "Apoio a advogados durante todo o processo.",
  },
  {
    icon: IconSeal,
    title: "Pareceres Técnicos",
    text: "Emissão de pareceres fundamentados e objetivos.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="scroll-mt-24 border-t border-line bg-cream-100 py-20 md:py-24">
      <div className="container-x">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Serviços</p>
            <h2 className="mt-4 max-w-xl font-display text-[32px] font-medium leading-[1.15] text-inktext md:text-[42px]">
              Soluções técnicas para demandas reais.
            </h2>
          </div>
          <a href="#contato" className="link-more group pb-1 text-gold-600 hover:text-gold-700">
            Ver todos os serviços
            <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 80} className="h-full">
              <article className="group flex h-full flex-col gap-4 border border-line bg-cream-50 p-5 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-500/60 hover:bg-white hover:shadow-[0_24px_48px_-28px_rgba(11,38,52,0.35)]">
                <s.icon className="h-7 w-7 text-gold-600 transition-transform duration-500 group-hover:scale-110" />
                <h3 className="font-display text-[15px] font-medium uppercase leading-snug tracking-[0.06em] text-inktext">
                  {s.title}
                </h3>
                <p className="flex-1 text-[11px] leading-relaxed text-muted">{s.text}</p>
                <a href="#contato" className="link-more text-gold-600 hover:text-gold-700">
                  Saiba mais
                  <IconArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
