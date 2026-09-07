import retrato from "../assets/retrato-hero.jpg";
import Reveal from "./Reveal";
import { IconArrowRight, IconCalculator } from "./Icons";

export default function ContentCards() {
  return (
    <section id="conteudo" className="scroll-mt-24 bg-cream-100 py-20 md:py-24">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow">Conteúdo</p>
          <h2 className="mt-4 font-display text-[30px] font-medium leading-[1.18] text-inktext md:text-[38px]">
            Informação técnica para a sua prática.
          </h2>
          <p className="mt-5 max-w-sm text-[13px] leading-relaxed text-muted">
            Artigos, dicas e materiais para ajudar você a entender os principais pontos da perícia trabalhista e
            dos cálculos trabalhistas.
          </p>
          <a href="#contato" className="link-more group mt-7 text-gold-600 hover:text-gold-700">
            Ver todos os conteúdos
            <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3 lg:col-span-8">
          {/* card navy */}
          <Reveal className="h-full">
            <article className="group relative flex h-full flex-col gap-7 overflow-hidden bg-ink-900 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_56px_-30px_rgba(6,26,36,0.8)]">
              <span className="pointer-events-none absolute -right-3 top-1 font-display text-[92px] leading-none text-white/5" aria-hidden="true">
                BA
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/50 text-gold-300 transition-transform duration-500 group-hover:scale-110">
                <IconCalculator className="h-5 w-5" />
              </span>
              <h3 className="font-display text-[16px] font-medium uppercase leading-[1.5] tracking-[0.05em] text-cream-50">
                Liquidação de sentença:{" "}
                <span className="underline decoration-gold-500/70 decoration-1 underline-offset-4">
                  onde o cálculo pode dar errado?
                </span>
              </h3>
              <a href="#contato" className="link-more mt-auto text-gold-300 hover:text-gold-200">
                Leia o artigo
                <IconArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </article>
          </Reveal>

          {/* card dica */}
          <Reveal delay={100} className="h-full">
            <article className="group relative flex h-full flex-col gap-5 overflow-hidden border border-line bg-cream-50 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-500/60 hover:bg-white hover:shadow-[0_28px_56px_-30px_rgba(11,38,52,0.3)]">
              <span className="arc -bottom-24 -right-24 h-[220px] w-[220px] border-gold-500/25" aria-hidden="true" />
              <span className="self-start bg-gold-400 px-3 py-1 text-[8.5px] font-semibold uppercase tracking-[0.3em] text-ink-900">
                Dica
              </span>
              <h3 className="font-display text-[16px] font-medium uppercase leading-[1.5] tracking-[0.05em] text-inktext">
                3 erros frequentes em cálculos trabalhistas
              </h3>
              <p className="text-[11px] leading-relaxed text-muted">
                que impactam diretamente no resultado da ação.
              </p>
              <a href="#contato" className="link-more mt-auto text-gold-600 hover:text-gold-700">
                Leia o artigo
                <IconArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </article>
          </Reveal>

          {/* card imagem */}
          <Reveal delay={200} className="h-full">
            <article className="group relative flex h-full min-h-[280px] flex-col justify-center overflow-hidden p-6">
              <img
                src={retrato}
                alt="Bruna Andrade em análise técnica"
                className="absolute inset-0 h-full w-full object-cover object-[68%_28%] transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink-900/95 via-ink-900/75 to-ink-900/25 transition-opacity duration-500 group-hover:from-ink-900/90" />
              <div className="relative flex h-full flex-col gap-5">
                <h3 className="mt-auto font-display text-[16px] font-medium uppercase leading-[1.55] tracking-[0.05em] text-cream-50">
                  Precisão técnica e segurança na tomada de decisão
                </h3>
                <a href="#contato" className="link-more text-gold-300 hover:text-gold-200">
                  Leia o artigo
                  <IconArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
