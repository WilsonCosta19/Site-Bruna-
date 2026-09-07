import { useState } from "react";
import Reveal from "./Reveal";
import { IconPlus, IconWhats } from "./Icons";

const FAQ = [
  {
    q: "Qual é o prazo para entrega do laudo ou cálculo?",
    a: "O prazo varia conforme a complexidade e o volume de documentos. Em geral, cálculos simples são entregues em até 5 dias úteis e laudos completos entre 10 e 15 dias úteis. Prazos urgentes são avaliados caso a caso, com cronograma definido antes do início do trabalho.",
  },
  {
    q: "Você atende em todo o Brasil?",
    a: "Sim. O atendimento é 100% remoto, com reuniões por videochamada, troca segura de documentos e assinatura digital — o que permite atender advogados, empresas e sindicatos em todo o país.",
  },
  {
    q: "Quais documentos são necessários?",
    a: "Depende do objeto do trabalho: petição inicial, contestação, folhas de ponto, holerites, TRCT, extratos do FGTS e do INSS e a sentença ou acórdão, quando houver. Após o primeiro contato, envio um checklist objetivo e personalizado para o seu caso.",
  },
  {
    q: "É possível acompanhar o andamento do trabalho?",
    a: "Sim. Cada projeto recebe um cronograma com marcos de entrega e relatórios de andamento. Você é informado(a) a cada etapa concluída, com total transparência sobre o percurso técnico.",
  },
  {
    q: "Vocês atendem apenas advogados?",
    a: "Não. Atendo advogados e escritórios, mas também empresas, departamentos jurídicos, contadores e trabalhadores que precisam de assistência técnica, conferência de cálculos ou parecer independente.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-t border-line bg-cream-100 py-20 md:py-24">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow">Dúvidas frequentes</p>
          <h2 className="mt-4 font-display text-[30px] font-medium leading-[1.2] text-inktext md:text-[36px]">
            Respostas para as principais dúvidas.
          </h2>
          <p className="mt-5 max-w-xs text-[13px] leading-relaxed text-muted">
            Ainda tem alguma dúvida? Entre em contato, será um prazer ajudar.
          </p>
          <a
            href="https://wa.me/5511987654321?text=Ol%C3%A1%2C%20Bruna!%20Tenho%20uma%20d%C3%BAvida."
            target="_blank"
            rel="noreferrer"
            className="btn-gold mt-7"
          >
            <IconWhats className="h-4 w-4" />
            Fale no WhatsApp
          </a>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-8">
          <div className="border-t border-line">
            {FAQ.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className="border-b border-line">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span
                      className={`text-[13px] font-medium transition-colors duration-300 ${
                        isOpen ? "text-gold-700" : "text-inktext group-hover:text-gold-700"
                      }`}
                    >
                      {item.q}
                    </span>
                    <IconPlus
                      className={`h-4 w-4 shrink-0 text-gold-600 transition-transform duration-500 ${
                        isOpen ? "rotate-45" : "group-hover:rotate-90"
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="max-w-xl pb-6 text-[12.5px] leading-relaxed text-muted">{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
