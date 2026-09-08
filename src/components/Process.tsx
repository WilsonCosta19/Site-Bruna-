import Reveal from "./Reveal";
import { IconArrowRight, IconChat, IconDocSearch, IconSeal, IconUser } from "./Icons";

const STEPS = [
  {
    icon: IconChat,
    num: "01",
    title: "Contato",
    text: "Você entra em contato e apresenta sua demanda.",
  },
  {
    icon: IconDocSearch,
    num: "02",
    title: "Análise",
    text: "Avalio as informações e documentos enviados.",
  },
  {
    icon: IconUser,
    num: "03",
    title: "Execução",
    text: "Desenvolvo o trabalho técnico com rigor e imparcialidade.",
  },
  {
    icon: IconSeal,
    num: "04",
    title: "Entrega",
    text: "Você recebe o laudo, parecer ou cálculo, pronto para uso.",
  },
];

export default function Process() {
  return (
    <section className="border-t border-line bg-cream-100 py-20 md:py-24">
      <div className="container-x">
        <Reveal className="grid items-end gap-6 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Como funciona</p>
            <h2 className="mt-4 font-display text-[30px] font-medium leading-[1.18] text-inktext md:text-[38px]">
              Um processo claro,
              <br />
              do início ao resultado.
            </h2>
          </div>
          <p className="max-w-md text-[13px] leading-relaxed text-muted lg:justify-self-end">
            Atendimento organizado e transparente, para que você tenha segurança em todas as etapas, com a
            qualidade técnica que o seu caso exige.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.num} delay={i * 100} className="relative h-full">
              <article className="group h-full border border-line bg-cream-50 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-500/60 hover:bg-white hover:shadow-[0_24px_48px_-28px_rgba(11,38,52,0.3)]">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/45 text-gold-600 transition-all duration-500 group-hover:scale-110 group-hover:border-gold-500">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-[30px] font-medium leading-none text-gold-500/60 transition-colors duration-500 group-hover:text-gold-500">
                    {s.num}
                  </span>
                </div>
                <h3 className="mt-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-inktext">{s.title}</h3>
                <p className="mt-3 text-[11px] leading-relaxed text-muted">{s.text}</p>
              </article>
              {i < STEPS.length - 1 && (
                <span
                  className="absolute -right-3.5 top-1/2 z-10 hidden -translate-y-1/2 text-gold-500 xl:block"
                  aria-hidden="true"
                >
                  <IconArrowRight className="h-5 w-5" />
                </span>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
