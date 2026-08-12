import type { Imagen, Provincia } from "./types";

export const partido = {
  nombre: "Alianza para el Progreso",
  sigla: "APP",
  tipo: "Partido político nacional",
  descripcionSimbolo:
    "Una letra A azul sobre fondo rojo, resaltada con líneas blancas, en forma de bandera",
  comite: "Comité Ejecutivo Regional Huancavelica",

  logo: {
    src: "/img/logo-app.svg",
    alt: "Símbolo de Alianza para el Progreso",
    width: 512,
    height: 512,
    pendiente: true,
  } as Imagen,

  // [PENDIENTE: número de lista o posición en la cédula de votación.]
  numeroLista: "[PENDIENTE]",
};

export const provincias: Provincia[] = [
  { nombre: "Huancavelica", capital: "Huancavelica" },
  { nombre: "Acobamba", capital: "Acobamba" },
  { nombre: "Angaraes", capital: "Lircay" },
  { nombre: "Castrovirreyna", capital: "Castrovirreyna" },
  { nombre: "Churcampa", capital: "Churcampa" },
  { nombre: "Huaytará", capital: "Huaytará" },
  { nombre: "Tayacaja", capital: "Pampas" },
];

export const redes = {
  facebook: "https://www.facebook.com/profile.php?id=61592152384267",
  tiktok: "https://www.tiktok.com/@fuerzajuvenil.car",
  // [PENDIENTE: número de WhatsApp de campaña, en formato internacional sin espacios.
  // Ejemplo: 51987654321. Confirmar si es un número de campaña o personal.]
  whatsapp: "[PENDIENTE]",
};

// Aviso obligatorio mientras el sitio no sea autorizado como oficial.
// Se retira solo cuando el comité lo apruebe por escrito.
export const aviso = {
  esOficial: false,
  texto:
    "Sitio de apoyo creado por un simpatizante. No es el sitio oficial del movimiento.",
};

export const fuente = {
  documento: "Plan de Gobierno Regional Huancavelica 2027–2030",
  presentadoAnte: "Jurado Nacional de Elecciones",
  fecha: "Junio de 2026",
};