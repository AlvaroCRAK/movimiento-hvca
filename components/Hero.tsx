import { candidato, formula } from "@/content/candidato";
import { aviso, redes } from "@/content/partido";
import { Banda, ImagenPendiente } from "./ui";

export function Hero() {
  return (
    <header>
      <Banda />

      {!aviso.esOficial && (
        <p className="bg-tinta px-4 py-2 text-[13px] leading-snug text-white">
          {aviso.texto}
        </p>
      )}

      <section className="bg-azul px-5 pt-7 pb-8">
        <p className="mb-3 text-[13px] uppercase tracking-[0.08em] text-azul-palido">
          {candidato.cargo.replace("Candidato a ", "")} · {candidato.periodo}
        </p>

        <h1 className="mb-2 font-display text-[46px] font-extrabold leading-[0.98] tracking-tight text-white sm:text-6xl">
          Carlos
          <br />
          Común
        </h1>

        <p className="mb-5 text-lg text-azul-palido">{candidato.lemaCampana}</p>

        <a
          href="#propuestas"
          className="mb-5 block rounded-md bg-rojo px-5 py-3 text-center font-medium text-white"
        >
          Ver las propuestas
        </a>

        <div className="flex gap-3 text-[15px]">
          <a
            href={redes.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-md border border-white/40 px-3 py-2.5 text-center text-white"
          >
            Facebook
          </a>
          <a
            href={redes.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-md border border-white/40 px-3 py-2.5 text-center text-white"
          >
            TikTok
          </a>
        </div>
      </section>

      <ImagenPendiente imagen={candidato.retrato} alturaMaxima={320} />

      <p className="bg-puna px-5 py-3 text-[14px] leading-relaxed text-humo">
        Fórmula regional: {formula.gobernador}, gobernador.{" "}
        {formula.vicegobernadora}, vicegobernadora.
      </p>

      <Banda />
    </header>
  );
}