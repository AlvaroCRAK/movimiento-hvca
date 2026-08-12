import type { Actividad } from "./types";

// Esta sección NO es un feed de noticias. Son 4 o 5 hitos curados.
// El día a día vive en Facebook y TikTok; el sitio enlaza allá.
// Publicar una actividad nueva = agregar un objeto a este array, commit y push.

export const actividades: Actividad[] = [
  {
    id: "desparasitacion-canina",
    fecha: "2026-08-01",
    titulo: "Jornadas de desparasitación canina",
    resumen:
      "[PENDIENTE: dos líneas sobre las jornadas veterinarias comunitarias. Confirmar provincias y fechas reales con el comité.]",
    imagen: {
      src: "/img/actividad-desparasitacion.jpg",
      alt: "Jornada de desparasitación canina organizada por el comité",
      width: 1600,
      height: 1067,
      pendiente: true,
    },
  },
  {
    id: "charlas-emprendimiento",
    fecha: "2026-08-01",
    titulo: "Charlas de emprendimiento y crianza",
    resumen:
      "[PENDIENTE: dos líneas sobre las charlas dictadas por militantes profesionales. Confirmar provincias.]",
    imagen: {
      src: "/img/actividad-charlas.jpg",
      alt: "Charla de emprendimiento en local comunal",
      width: 1600,
      height: 1067,
      pendiente: true,
    },
  },
  {
    id: "copa-alianza",
    fecha: "2026-09-01",
    titulo: "Copa Alianza",
    resumen:
      "[PENDIENTE: dos líneas sobre el campeonato de fútbol y vóley. Confirmar sedes y fechas.]",
    imagen: {
      src: "/img/actividad-copa.jpg",
      alt: "Partido del campeonato Copa Alianza",
      width: 1600,
      height: 1067,
      pendiente: true,
    },
  },
];