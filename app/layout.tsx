import type { Metadata } from "next";
import { Archivo, Public_Sans } from "next/font/google";
import "./globals.css";

// Archivo para titulares: pesado, de cartel.
// Public Sans para el cuerpo: fue diseñada para interfaces de gobierno,
// prioriza legibilidad sobre personalidad. Aquí eso es exactamente lo que queremos.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carlos Común · Candidato a Gobernador Regional de Huancavelica",
  description:
    "Propuestas de gobierno para Huancavelica 2027-2030: agua y agricultura, salud, educación, carreteras, saneamiento y gestión transparente.",
  openGraph: {
    title: "Carlos Común · Gobernador Regional de Huancavelica",
    description: "Seis compromisos para las 7 provincias de Huancavelica.",
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${archivo.variable} ${publicSans.variable}`}>
        {children}
      </body>
    </html>
  );
}