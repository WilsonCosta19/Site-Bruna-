import retrato from "../assets/retrato-sobre.jpg";
import Reveal from "./Reveal";
import { IconQuote } from "./Icons";

const STATS = [
  { value: "+300", label: "Laudos elaborados" },
  { value: "+200", label: "Conferências e palestras" },
  { value: "+10", label: "Anos de experiência" },
];

export default function About() {
  return (
    <section id="sobre" className="scroll-mt-24 bg-cream-100 py-20 md:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-10">
        {/* retrato com caligrafia */}
        <Reveal className="lg:col-span-4">
          <div className="relative mx-auto max-w-[420px] lg:max-w-none">
            <span className="absolute -left-4 -top-4 h-full w-full border border-gold-500/30" aria-hidden="true" />
            <div className="relative overflow-hidden">
              <img
                src={retrato}
                alt="Bruna Andrade em seu estúdio, apoiando o rosto na mão"
                className="aspect-[4/5] w-full object-cover transition-transform duration-[1.4s] ease-out hover:scale-[1.04]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <p className="absolute left-5 top-8 max-w-[150px] -rotate-6 font-script text-[30px] leading-[1.25] text-gold-700 md:text-[34px]">
                Técnica que gera resultados.
              </p>
            </div>
          </div>
        </Reveal>

        {/* texto institucional */}
        <Reveal delay={120} className="lg:col-span-5">
          <p className="eyebrow">Sobre</p>
          <h2 className="mt-4 font-display text-4xl font-medium text-inktext md:text-[44px] md:leading-[1.1]">
            Bruna Andrade
          </h2>
          <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.38em] text-gold-600">Perícia Trabalhista</p>
          <p className="mt-6 text-[13px] leading-relaxed text-muted">
            Sou especialista em perícia trabalhista, com atuação focada em cálculos complexos, análise técnica e
            apoio estratégico para advogados e empresas. Meu propósito é oferecer um trabalho técnico, claro e
            confiável, que contribua para decisões mais seguras e resultados consistentes.
          </p>
          <div className="mt-9 grid grid-cols-3 divide-x divide-line border-t border-line pt-7">
            {STATS.map((s, i) => (
              <div key={s.label} className={i > 0 ? "pl-5" : ""}>
                <p className="font-display text-[28px] font-medium leading-none text-inktext md:text-[32px]">{s.value}</p>
                <p className="mt-2.5 text-[8.5px] font-semibold uppercase leading-[1.8] tracking-[0.22em] text-muted">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* citação assinada */}
        <Reveal delay={220} className="lg:col-span-3">
          <div className="flex h-full flex-col justify-center border-l border-line pl-8 lg:border-l-0 lg:pl-2">
            <IconQuote className="h-7 w-7 text-gold-500" />
            <p className="mt-5 font-display text-[19px] italic leading-[1.65] text-inktext md:text-[21px]">
              Mais do que números, entrego clareza, segurança e estratégia para o seu caso.
            </p>
            <p className="mt-7 font-script text-[38px] leading-none text-gold-600">Bruna Andrade</p>
            <p className="mt-3 text-[8.5px] font-semibold uppercase tracking-[0.32em] text-muted">Perícia Trabalhista</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
