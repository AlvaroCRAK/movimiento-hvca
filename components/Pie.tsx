import { aviso, fuente, partido, provincias, redes } from "@/content/partido";
import { Banda, esPendiente } from "./ui";

export function Pie() {
  return (
    <>
      <Banda />

      <footer className="bg-azul px-5 pt-8 pb-28 text-white">
        <p className="mb-1 text-[13px] uppercase tracking-[0.08em] text-azul-palido">
          Síguenos
        </p>
        <h2 className="mb-4 font-display text-2xl font-extrabold leading-tight">
          El día a día de la campaña
        </h2>

        <div className="mb-7 flex flex-col gap-3">
          <a
            href={redes.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-white/10 px-4 py-3 font-medium"
          >
            Facebook · Fuerza Juvenil Huancavelica
          </a>
          <a
            href={redes.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-white/10 px-4 py-3 font-medium"
          >
            TikTok · @fuerzajuvenil.car
          </a>
        </div>

        <p className="mb-2 text-[13px] uppercase tracking-[0.08em] text-azul-palido">
          Las 7 provincias
        </p>
        <p className="mb-7 text-[15px] leading-relaxed text-azul-palido">
          {provincias.map((p) => p.nombre).join(" · ")}
        </p>

        <div className="space-y-2 border-t border-white/20 pt-5 text-[13px] leading-relaxed text-azul-palido">
          <p>
            {partido.nombre} ({partido.sigla}) · {partido.comite}
          </p>
          <p>
            Las propuestas provienen del {fuente.documento}, presentado ante el{" "}
            {fuente.presentadoAnte} en {fuente.fecha.toLowerCase()}.
          </p>
          {!aviso.esOficial && <p>{aviso.texto}</p>}
        </div>
      </footer>

      <BarraContacto />
    </>
  );
}

/** Barra fija abajo. En Perú la conversión real ocurre por WhatsApp. */
function BarraContacto() {
  const hayWhatsApp = !esPendiente(redes.whatsapp);

  if (!hayWhatsApp) {
    return (
      <a
        href={redes.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed inset-x-0 bottom-0 z-50 bg-rojo py-3.5 text-center font-medium text-white"
      >
        Escríbenos por Facebook
      </a>
    );
  }

  return (
    <a
      href={`https://wa.me/${redes.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed inset-x-0 bottom-0 z-50 bg-whatsapp py-3.5 text-center font-medium text-tinta"
    >
      Escríbenos por WhatsApp
    </a>
  );
}