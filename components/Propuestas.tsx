import { propuestas } from "@/content/propuestas";

export function Propuestas() {
  return (
    <section id="propuestas" className="scroll-mt-4">
      <div className="px-5 pt-8 pb-2">
        <p className="mb-1 text-[13px] uppercase tracking-[0.08em] text-rojo">
          Propuestas
        </p>
        <h2 className="font-display text-3xl font-extrabold leading-tight">
          Seis compromisos para las 7 provincias
        </h2>
      </div>

      {propuestas.map((p, i) => (
        <article
          key={p.id}
          className={`px-5 py-7 ${i % 2 === 1 ? "bg-puna" : "bg-white"}`}
        >
          <p className="mb-1 text-[13px] uppercase tracking-[0.08em] text-humo">
            {p.eje}
          </p>

          <h3 className="mb-4 font-display text-[22px] font-extrabold leading-[1.15]">
            {p.titulo}
          </h3>

          {p.dato && (
            <div className="mb-4 border-l-4 border-rojo pl-3">
              <p className="font-display text-[40px] font-extrabold leading-none text-azul">
                {p.dato.cifra}
              </p>
              <p className="mt-1 text-[14px] leading-snug text-humo">
                {p.dato.etiqueta}
              </p>
            </div>
          )}

          <p className="mb-4">{p.resumen}</p>

          <ul className="space-y-2">
            {p.puntos.map((punto) => (
              <li key={punto} className="flex gap-2.5 text-[16px] leading-snug">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-rojo" />
                <span>{punto}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}