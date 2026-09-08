import Reveal from "./Reveal";
import { IconCalculator, IconDocSearch, IconScale, IconShield, IconTarget } from "./Icons";

const VALUES = [
  { icon: IconScale, title: "Justiça", text: "Compromisso com a legalidade." },
  { icon: IconCalculator, title: "Cálculo", text: "Exatidão em cada detalhe." },
  { icon: IconDocSearch, title: "Análise", text: "Estudo técnico e criterioso." },
  { icon: IconTarget, title: "Precisão", text: "Resultados confiáveis para sua estratégia." },
  { icon: IconShield, title: "Segurança", text: "Responsabilidade do início ao fim." },
];

export default function ValueStrip() {
  return (
    <section className="border-b border-line bg-cream-100">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-px bg-line/80 md:grid-cols-3 lg:grid-cols-5">
          {VALUES.map((v, i) => (
            <Reveal
              key={v.title}
              delay={i * 90}
              className="flex flex-col items-center gap-3.5 bg-cream-100 px-4 py-10 text-center transition-colors duration-500 hover:bg-cream-50 md:py-12"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold-500/45 text-gold-600 transition-all duration-500 hover:scale-105 hover:border-gold-500 hover:bg-gold-500/10">
                <v.icon className="h-6 w-6" />
              </span>
              <h3 className="text-[10.5px] font-semibold uppercase tracking-[0.3em] text-inktext">{v.title}</h3>
              <p className="max-w-[150px] text-[11px] leading-relaxed text-muted">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
