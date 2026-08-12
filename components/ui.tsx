import type { Imagen } from "@/content/types";

/** Devuelve true si el dato todavía no lo entrega el comité. */
export function esPendiente(valor: string) {
  return valor.trim().startsWith("[PENDIENTE") || valor.trim().startsWith("[POR CONFIRMAR");
}

/** Separador tejido. Es el elemento distintivo del sitio. */
export function Banda() {
  return <div className="banda" role="presentation" aria-hidden="true" />;
}

/**
 * Muestra la foto real si existe. Si todavía no llega, dibuja un recuadro
 * del tamaño exacto que va a ocupar. Así el diseño no se mueve cuando la
 * reemplacemos: eso se llama evitar layout shift.
 */
export function ImagenPendiente({
  imagen,
  className = "",
  alturaMaxima,
}: {
  imagen: Imagen;
  className?: string;
  alturaMaxima?: number;
}) {
  const proporcion = { aspectRatio: `${imagen.width} / ${imagen.height}` };
  const limite = alturaMaxima ? { maxHeight: `${alturaMaxima}px` } : {};

  if (imagen.pendiente) {
    return (
      <div
        style={{ ...proporcion, ...limite }}
        className={`flex w-full flex-col items-center justify-center gap-1 bg-puna ${className}`}
      >
        <span className="text-[13px] text-humo">
          {imagen.width} × {imagen.height}
        </span>
        <span className="text-[13px] text-humo">pendiente de entrega</span>
      </div>
    );
  }

  return (
    <img
      src={imagen.src}
      alt={imagen.alt}
      width={imagen.width}
      height={imagen.height}
      loading="lazy"
      style={limite}
      className={`w-full object-cover ${className}`}
    />
  );
}