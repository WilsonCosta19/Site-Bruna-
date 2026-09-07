import { useEffect, useRef, useState } from "react";
import cena1 from "../assets/cena-01-escritorio.jpg";
import cena2 from "../assets/cena-02-calculo.jpg";
import cena3 from "../assets/cena-03-analise.jpg";
import cena4 from "../assets/cena-04-decisao.jpg";

type Scene = {
  img: string;
  kicker: string;
  title: string;
  text: string;
  focal: string;
  label: string;
};

const SCENES: Scene[] = [
  {
    img: cena1,
    kicker: "Cena 01 — O escritório",
    title: "Onde cada caso começa.",
    text: "Escuta atenta, documentos organizados e o contexto do trabalho reunido com rigor.",
    focal: "50% 42%",
    label: "Escritório",
  },
  {
    img: cena2,
    kicker: "Cena 02 — O cálculo",
    title: "Números traduzidos com exatidão.",
    text: "Cada verba, cada índice, cada centavo conferido linha a linha.",
    focal: "50% 55%",
    label: "Cálculo",
  },
  {
    img: cena3,
    kicker: "Cena 03 — A análise",
    title: "O detalhe que sustenta a tese.",
    text: "Documentos examinados com lupa técnica em busca do que decide o resultado.",
    focal: "50% 50%",
    label: "Análise",
  },
  {
    img: cena4,
    kicker: "Cena 04 — A decisão",
    title: "Clareza que chega à mesa.",
    text: "Laudos e pareceres que dão segurança para decidir com estratégia.",
    focal: "50% 45%",
    label: "Decisão",
  },
];

const N = SCENES.length;
const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

/**
 * Scrub engine "scroll-world": o scroll dirige o tempo (0 → 1).
 * Cada cena ocupa 1/N da linha do tempo; crossfades de 30% costuram
 * frames idênticos com movimento de câmera alternado (push-in / pull-out).
 */
export default function Flight() {
  const secRef = useRef<HTMLElement>(null);
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const capRefs = useRef<(HTMLDivElement | null)[]>([]);
  const segRefs = useRef<(HTMLDivElement | null)[]>([]);
  const fillRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLSpanElement>(null);
  const pctRef = useRef<HTMLSpanElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);

  useEffect(() => {
    const sec = secRef.current;
    if (!sec) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let cur = 0;
    let target = 0;
    let raf = 0;

    const render = (p: number) => {
      const t = Math.min(N - 0.0001, p * N);

      for (let k = 0; k < N; k++) {
        const layer = layerRefs.current[k];
        const cap = capRefs.current[k];
        if (!layer || !cap) continue;
        const local = t - k; // posição dentro da janela da cena
        const dir = k % 2 === 0 ? 1 : -1;

        // opacidade da camada de vídeo/still
        let o = 0;
        if (local >= -0.3 && local < 0) o = (local + 0.3) / 0.3;
        else if (local >= 0 && local <= 0.7) o = 1;
        else if (local > 0.7 && local <= 1) o = 1 - (local - 0.7) / 0.3;
        const l = Math.min(1, Math.max(-0.3, local));
        const scale = 1.07 + dir * (l - 0.35) * 0.1;
        const tx = (l - 0.35) * -1.6 * dir;
        const ty = (0.35 - l) * 1.1 * dir;
        layer.style.opacity = o.toFixed(3);
        layer.style.transform = `translate3d(${tx.toFixed(2)}%, ${ty.toFixed(2)}%, 0) scale(${scale.toFixed(4)})`;
        layer.style.visibility = o <= 0.001 ? "hidden" : "visible";

        // legenda da cena
        const inE = clamp01((local + 0.02) / 0.16);
        const outE = clamp01((0.9 - local) / 0.16);
        const co = Math.min(inE, outE);
        cap.style.opacity = co.toFixed(3);
        cap.style.transform = `translateY(${((1 - inE) * 26).toFixed(1)}px)`;
        cap.style.visibility = co <= 0.001 ? "hidden" : "visible";

        // segmento da cadeia mobile
        const seg = segRefs.current[k];
        if (seg) seg.style.transform = `scaleX(${clamp01(t - k).toFixed(3)})`;
      }

      if (fillRef.current) fillRef.current.style.transform = `scaleY(${p.toFixed(4)})`;
      if (codeRef.current) {
        const idx = Math.min(N - 1, Math.floor(t + 0.15));
        codeRef.current.textContent = `CENA 0${idx + 1} / 0${N}`;
        if (idx !== activeRef.current) {
          activeRef.current = idx;
          setActive(idx);
        }
      }
      if (pctRef.current) pctRef.current.textContent = `${String(Math.round(p * 100)).padStart(3, "0")}%`;
      if (hintRef.current) hintRef.current.style.opacity = String(clamp01(1 - (p - 0.01) / 0.04));
    };

    const loop = () => {
      const rect = sec.getBoundingClientRect();
      const total = sec.offsetHeight - window.innerHeight;
      target = total > 0 ? clamp01(-rect.top / total) : 0;
      cur += (target - cur) * (reduced ? 1 : 0.09);
      if (Math.abs(target - cur) < 0.0004) cur = target;
      render(cur);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      id="voo"
      ref={secRef}
      className="relative bg-ink-950"
      style={{ height: `${N * 125}vh` }}
      aria-label="Voo cinematográfico pelo universo da perícia, em quatro cenas"
    >
      <div className="sticky top-0 h-screen overflow-hidden [height:100svh]">
        {/* camadas de cena */}
        {SCENES.map((s, k) => (
          <div
            key={s.kicker}
            ref={(el) => {
              layerRefs.current[k] = el;
            }}
            className="absolute inset-0 will-change-transform"
            style={{ opacity: k === 0 ? 1 : 0 }}
          >
            <img
              src={s.img}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover"
              style={{ objectPosition: s.focal }}
              loading={k === 0 ? "eager" : "lazy"}
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-ink-950/60" />
            <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_50%,transparent_55%,rgba(6,26,36,0.55)_100%)]" />
          </div>
        ))}

        {/* grain cinematográfico */}
        <div className="grain pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay" aria-hidden="true" />

        {/* HUD superior */}
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-6 md:p-10">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-gold-300">Voo pela perícia</p>
            <p className="mt-2 text-[9px] uppercase tracking-[0.3em] text-white/45">Quatro cenas · um método</p>
          </div>
          <div className="text-right text-[9px] font-semibold uppercase tracking-[0.3em] text-white/55">
            <span ref={codeRef}>CENA 01 / 04</span>
            <span className="mx-2 text-gold-400">·</span>
            <span ref={pctRef} className="text-gold-300">000%</span>
          </div>
        </div>

        {/* legendas das cenas */}
        <div className="absolute inset-x-6 bottom-24 md:inset-x-auto md:left-12 md:bottom-24 md:w-[min(560px,60vw)]">
          <div className="relative h-[240px] md:h-[220px]">
            {SCENES.map((s, k) => (
              <div
                key={s.kicker}
                ref={(el) => {
                  capRefs.current[k] = el;
                }}
                className="absolute inset-0 flex flex-col items-start gap-3 will-change-transform"
                style={{ opacity: k === 0 ? 1 : 0 }}
              >
                <p className="text-[9px] font-semibold uppercase tracking-[0.36em] text-gold-300">{s.kicker}</p>
                <h2 className="font-display text-[clamp(1.9rem,4.6vw,3.4rem)] font-medium leading-[1.1] text-cream-50">
                  {s.title}
                </h2>
                <span className="h-px w-12 bg-gold-400/80" />
                <p className="max-w-md text-[12.5px] leading-relaxed text-white/70 md:text-sm">{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* rail vertical (desktop) */}
        <div className="absolute right-10 top-1/2 hidden -translate-y-1/2 md:flex md:flex-col md:items-end md:gap-5">
          <div className="relative mr-[3px] h-24 w-px bg-white/15">
            <div ref={fillRef} className="absolute inset-0 origin-top bg-gold-400" style={{ transform: "scaleY(0)" }} />
          </div>
          {SCENES.map((s, k) => (
            <div key={s.label} className="flex items-center gap-3">
              <span
                className={`text-[9px] font-semibold uppercase tracking-[0.3em] transition-colors duration-500 ${
                  active === k ? "text-white/85" : "text-white/30"
                }`}
              >
                {s.label}
              </span>
              <span className={`h-px transition-all duration-500 ${active === k ? "w-8 bg-gold-400" : "w-4 bg-white/25"}`} />
              <span className={`text-[9px] tracking-[0.2em] transition-colors duration-500 ${active === k ? "text-gold-300" : "text-white/30"}`}>
                0{k + 1}
              </span>
            </div>
          ))}
        </div>

        {/* cadeia mobile 9:16 */}
        <div className="absolute inset-x-6 bottom-10 flex items-center gap-2 md:hidden">
          {SCENES.map((s, k) => (
            <div key={s.label} className="h-[2px] flex-1 overflow-hidden bg-white/15">
              <div
                ref={(el) => {
                  segRefs.current[k] = el;
                }}
                className="h-full origin-left bg-gold-400"
                style={{ transform: "scaleX(0)" }}
              />
            </div>
          ))}
        </div>

        {/* hint de scroll */}
        <div
          ref={hintRef}
          className="absolute bottom-16 right-6 flex items-center gap-3 md:bottom-10 md:right-10"
          aria-hidden="true"
        >
          <span className="text-[9px] font-semibold uppercase tracking-[0.32em] text-white/55">Role para voar</span>
          <span className="hint-line block h-px w-10 bg-gold-400" />
        </div>
      </div>
    </section>
  );
}
