import Reveal from "./Reveal";
import { IconArrowRight } from "./Icons";

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-ink-900">
      <div className="arc -left-40 -top-56 h-[420px] w-[420px]" aria-hidden="true" />
      <div className="arc -bottom-64 -right-40 h-[460px] w-[460px]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_260px_at_50%_120%,rgba(198,156,95,0.12),transparent_65%)]"
        aria-hidden="true"
      />
      <div className="container-x relative grid items-center gap-8 py-12 md:py-14 lg:grid-cols-[1fr_auto_auto] lg:gap-14">
        <Reveal>
          <p className="text-[10px] font-semibold uppercase leading-[2.1] tracking-[0.32em] text-gold-300/90">
            Estratégia começa
            <br />
            com informação confiável.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="font-display text-[26px] font-medium leading-[1.25] text-cream-50 md:text-[32px]">
            Resultados técnicos
            <br />
            para decisões mais seguras.
          </h2>
        </Reveal>
        <Reveal delay={220} className="lg:pl-4">
          <a href="#contato" className="btn-gold group w-full lg:w-auto">
            Agendar consulta
            <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
