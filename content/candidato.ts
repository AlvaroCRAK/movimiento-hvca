import type { Imagen } from "./types";

// Fuente: Plan de Gobierno Regional Huancavelica 2027-2030, presentado ante el JNE (junio 2026).
// Todo dato marcado [POR CONFIRMAR] debe validarse con el comité antes de publicar.

export const candidato = {
  nombreCompleto: "Juan Carlos Común Gavilán",
  nombreCorto: "Carlos Común",
  cargo: "Candidato a Gobernador Regional de Huancavelica",
  periodo: "2027–2030",

  lema: "Capacidad y experiencia",
  lemaCampana: "Por una revolución agraria",

  // Versión resumida del compromiso que abre el plan de gobierno.
  // [POR CONFIRMAR] el comité debe aprobar esta redacción antes de publicar.
  compromiso:
    "Hacer de Huancavelica una región para todos, con un gobierno regional agrario, productivo, eficiente y transparente.",

  retrato: {
    src: "/img/candidato-retrato.jpg",
    alt: "Retrato de Carlos Común, candidato a gobernador regional de Huancavelica",
    width: 1200,
    height: 1600,
    pendiente: true,
  } as Imagen,

  // [PENDIENTE: biografía del candidato, 150 a 200 palabras.
  // Formación, trayectoria y cargos previos. Lo entrega el comité.]
  biografia: [
    "[PENDIENTE: primer párrafo de la biografía — origen, formación y vínculo con Huancavelica. Aproximadamente 90 palabras para que ocupe el mismo espacio que el texto final.]",
    "[PENDIENTE: segundo párrafo — trayectoria en gestión pública y motivo de la candidatura. Aproximadamente 90 palabras.]",
  ],

  // [PENDIENTE: confirmar cada hito y su año con el comité antes de publicar.]
  trayectoria: [
    { anio: "[POR CONFIRMAR]", hito: "[PENDIENTE: cargo o logro]" },
    { anio: "[POR CONFIRMAR]", hito: "[PENDIENTE: cargo o logro]" },
    { anio: "[POR CONFIRMAR]", hito: "[PENDIENTE: cargo o logro]" },
  ],
};

export const formula = {
  gobernador: "Juan Carlos Común Gavilán",
  vicegobernadora: "Alicia Sullca Villalva",
};