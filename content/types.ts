// Modelo de contenido del sitio.
// Todo el texto visible vive en archivos de datos, nunca dentro de un componente.

export type Imagen = {
  src: string;
  alt: string;
  width: number;
  height: number;
  pendiente?: boolean; // true = todavía no tenemos el archivo real
};

export type Propuesta = {
  id: string;
  eje: string;
  titulo: string;
  resumen: string;
  puntos: string[];
  dato?: {
    cifra: string;
    etiqueta: string;
  };
};

export type Actividad = {
  id: string;
  fecha: string; // formato ISO: "2026-08-15"
  titulo: string;
  resumen: string;
  imagen: Imagen;
  enlace?: string; // publicación original en Facebook o TikTok
};

export type Provincia = {
  nombre: string;
  capital: string;
};