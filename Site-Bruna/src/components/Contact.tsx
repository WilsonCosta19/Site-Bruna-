import { useState, type ChangeEvent, type FormEvent } from "react";
import Reveal from "./Reveal";
import { IconCheck, IconLock, IconMail, IconPhone, IconPin, IconSend } from "./Icons";

const INFOS = [
  {
    icon: IconPhone,
    title: "(11) 98765-4321",
    sub: "Atendimento via WhatsApp",
    href: "https://wa.me/5511987654321",
  },
  {
    icon: IconMail,
    title: "contato@brunaandrade.com.br",
    sub: "Resposta em até 1 dia útil",
    href: "mailto:contato@brunaandrade.com.br",
  },
  {
    icon: IconPin,
    title: "São Paulo – SP",
    sub: "Atendimento em todo o Brasil",
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nome: "", email: "", whats: "", msg: "" });

  const set = (k: keyof typeof form) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setSent(false);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ nome: "", email: "", whats: "", msg: "" });
  };

  return (
    <section id="contato" className="scroll-mt-24 border-t border-line bg-cream-200/70 py-20 md:py-24">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow">Fale comigo</p>
          <h2 className="mt-4 font-display text-[30px] font-medium leading-[1.2] text-inktext md:text-[36px]">
            Vamos conversar sobre o seu caso?
          </h2>
          <p className="mt-5 max-w-xs text-[13px] leading-relaxed text-muted">
            Estou à disposição para entender sua demanda e apresentar a melhor solução técnica.
          </p>
          <span className="mt-8 block h-px w-12 bg-gold-500/70" />
        </Reveal>

        <Reveal delay={120} className="lg:col-span-5">
          <form onSubmit={onSubmit} className="flex flex-col gap-3" noValidate={false}>
            <label className="sr-only" htmlFor="nome">Nome completo</label>
            <input id="nome" required value={form.nome} onChange={set("nome")} className="field" placeholder="Nome completo" />
            <label className="sr-only" htmlFor="email">E-mail</label>
            <input id="email" type="email" required value={form.email} onChange={set("email")} className="field" placeholder="E-mail" />
            <label className="sr-only" htmlFor="whats">WhatsApp</label>
            <input id="whats" type="tel" value={form.whats} onChange={set("whats")} className="field" placeholder="WhatsApp" />
            <label className="sr-only" htmlFor="msg">Como posso ajudar?</label>
            <textarea id="msg" rows={4} value={form.msg} onChange={set("msg")} className="field resize-none" placeholder="Como posso ajudar?" />
            <div className="mt-2 flex flex-wrap items-center gap-5">
              <button type="submit" className="btn-gold">
                <IconSend className="h-4 w-4" />
                Enviar mensagem
              </button>
              <span className="inline-flex items-center gap-2 text-[10px] text-muted">
                <IconLock className="h-3.5 w-3.5 text-gold-600" />
                Seus dados estão seguros.
              </span>
            </div>
            <div
              className={`grid transition-[grid-template-rows] duration-500 ${sent ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              role="status"
              aria-live="polite"
            >
              <div className="min-h-0 overflow-hidden">
                <p className="mt-3 flex items-center gap-3 border border-gold-500/50 bg-gold-400/10 px-4 py-3 text-[12px] text-inktext">
                  <IconCheck className="h-4 w-4 shrink-0 text-gold-700" />
                  Mensagem enviada com sucesso! Retornarei em breve.
                </p>
              </div>
            </div>
          </form>
        </Reveal>

        <Reveal delay={220} className="lg:col-span-3">
          <div className="flex flex-col gap-7 lg:pt-2">
            {INFOS.map((info) => {
              const inner = (
                <>
                  <info.icon className="h-6 w-6 shrink-0 text-gold-600 transition-transform duration-300 group-hover:scale-110" />
                  <span>
                    <span className="block text-[13px] font-semibold text-inktext transition-colors duration-300 group-hover:text-gold-700">
                      {info.title}
                    </span>
                    <span className="mt-1 block text-[11px] text-muted">{info.sub}</span>
                  </span>
                </>
              );
              return info.href ? (
                <a key={info.title} href={info.href} target={info.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group flex items-start gap-4">
                  {inner}
                </a>
              ) : (
                <div key={info.title} className="group flex items-start gap-4">
                  {inner}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
