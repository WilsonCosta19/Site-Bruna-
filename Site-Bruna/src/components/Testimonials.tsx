import { useState } from "react";
import Reveal from "./Reveal";
import { IconArrowLeft, IconArrowRight, IconQuote } from "./Icons";

const ITEMS = [
  {
    quote:
      "A Dra. Bruna traz um nível de profundidade técnica que faz toda a diferença nos nossos casos. Seus laudos são claros, bem fundamentados e sempre entregues no prazo. É uma parceira estratégica no nosso escritório.",
    name: "Dr. Ricardo Mendes",
    role: "Advogado Trabalhista | São Paulo – SP",
  },
  {
    quote:
      "Os cálculos de liquidação que revisamos com ela revelaram diferenças relevantes que passavam despercebidas há anos. Rigor, transparência e didática em cada entrega.",
    name: "Dra. Camila Ferreira",
    role: "Advogada Trabalhista | Campinas – SP",
  },
  {
    quote:
      "Contratamos a análise técnica dos cálculos da reclamatória e o parecer deu segurança total para a audiência. Comunicação clara e organizada do início ao fim.",
    name: "João Pedro Antunes",
    role: "Diretor Jurídico | São Paulo – SP",
  },
  {
    quote:
      "Impugnação cirúrgica, ponto a ponto, com fundamentação impecável. O trabalho mudou o resultado da execução e a confiança da nossa cliente.",
    name: "Dra. Beatriz Nogueira",
    role: "Sócia | Nogueira & Alves Advogados",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + ITEMS.length) % ITEMS.length);
  const next = () => setIdx((i) => (i + 1) % ITEMS.length);

  return (
    <section className="border-t border-line bg-cream-100 py-20 md:py-24">
      <div className="container-x grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow">Depoimentos</p>
          <h2 className="mt-4 font-display text-[30px] font-medium leading-[1.2] text-inktext md:text-[36px]">
            A confiança de quem já trabalhou comigo.
          </h2>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-8">
          <div className="flex items-start justify-between gap-6">
            <IconQuote className="h-8 w-8 shrink-0 text-gold-500" />
            <div className="flex gap-3">
              <button
                type="button"
                onClick={prev}
                aria-label="Depoimento anterior"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/50 text-gold-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-500 hover:text-white"
              >
                <IconArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Próximo depoimento"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/50 text-gold-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-500 hover:text-white"
              >
                <IconArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-4 overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${idx * 100}%)` }}
            >
              {ITEMS.map((t) => (
                <figure key={t.name} className="min-w-full pr-1">
                  <blockquote className="font-display text-[17px] italic leading-[1.75] text-inktext md:text-[20px]">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6">
                    <p className="text-[12px] font-semibold tracking-[0.08em] text-inktext">{t.name}</p>
                    <p className="mt-1 text-[11px] text-muted">{t.role}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-end gap-2">
            {ITEMS.map((t, i) => (
              <button
                key={t.name}
                type="button"
                aria-label={`Ir para o depoimento ${i + 1}`}
                onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === idx ? "w-6 bg-gold-600" : "w-1.5 bg-gold-500/30 hover:bg-gold-500/60"
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
