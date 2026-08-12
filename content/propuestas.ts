import type { Propuesta } from "./types";

// Destilado del Plan de Gobierno Regional Huancavelica 2027-2030 (JNE, junio 2026).
// Cada punto proviene del plan. No agregar nada que no esté en el documento original.
// Las cifras son las del propio plan; si el comité corrige alguna, se corrige aquí.

export const propuestas: Propuesta[] = [
  {
    id: "agua-agricultura",
    eje: "Agua y agricultura",
    titulo: "Riego para las tierras que hoy dependen de la lluvia",
    resumen:
      "Siete de cada diez hectáreas agrícolas de Huancavelica no tienen riego. El plan propone cerrar la mitad de esa brecha en cuatro años.",
    dato: {
      cifra: "72%",
      etiqueta: "de las tierras agrícolas hoy no tienen riego",
    },
    puntos: [
      "Incorporar riego a 60 mil hectáreas durante los cuatro años de gestión",
      "Ejecutar los proyectos de riego pendientes que gestiones anteriores no culminaron",
      "Siembra y cosecha de agua en las cabeceras de cuenca de las 7 provincias",
      "Asistencia técnica agropecuaria para 70 mil productores",
      "Titulación de 20 mil predios rurales",
    ],
  },
  {
    id: "salud",
    eje: "Salud",
    titulo: "Atacar la anemia y la desnutrición infantil",
    resumen:
      "Huancavelica está entre las regiones con mayor anemia y desnutrición infantil del país. El plan fija metas medibles al 2030.",
    dato: {
      cifra: "54.5%",
      etiqueta: "de niños de 6 a 35 meses tiene anemia en la región",
    },
    puntos: [
      "Reducir la desnutrición crónica infantil al 12% y la anemia en 25% al 2030",
      "Fortalecer las 7 Redes Integradas de Salud, una por provincia",
      "Poner en funcionamiento los hospitales Regional, de Pampas y de Lircay",
      "Banco de sangre tipo II y unidades de cuidados intensivos",
      "Campañas itinerantes de detección temprana de cáncer",
    ],
  },
  {
    id: "educacion",
    eje: "Educación",
    titulo: "Una escuela que enseñe en la lengua de la región",
    resumen:
      "El 72% de la población rural tiene el quechua como lengua materna y la región no cuenta con un currículo propio que lo reconozca.",
    dato: {
      cifra: "72%",
      etiqueta: "de la población rural tiene el quechua como lengua materna",
    },
    puntos: [
      "Currículo regional propio con identidad andina y enfoque bilingüe",
      "Instituto Regional de Lengua y Cultura Quechua Chanka",
      "Internet en el 100% de las escuelas públicas con electricidad al 2030",
      "Un Fab Lab en cada una de las 7 provincias",
      "Residencias para docentes rurales, para frenar la rotación anual",
    ],
  },
  {
    id: "carreteras",
    eje: "Carreteras",
    titulo: "Pavimentar los corredores que aíslan a las comunidades",
    resumen:
      "La red vial departamental supera los 5 mil kilómetros y la mayoría sigue sin pavimentar, lo que encarece el transporte y aísla a los pueblos.",
    dato: {
      cifra: "716 km",
      etiqueta: "de corredores viales a pavimentar con micropavimento",
    },
    puntos: [
      "Micropavimento en los corredores viales 6A, 6B, 7A, 7B, 8A y 8B",
      "Planta de asfalto propia para la región",
      "Un pool de maquinaria por provincia para emergencias viales",
      "Metodología BIM obligatoria en el diseño vial, para reducir adicionales de obra",
    ],
  },
  {
    id: "agua-saneamiento",
    eje: "Agua y saneamiento",
    titulo: "Agua segura en la ciudad y en las comunidades dispersas",
    resumen:
      "Solo una fracción de los hogares accede a agua con niveles adecuados de cloro, y la brecha se agrava en la zona rural dispersa.",
    dato: {
      cifra: "7",
      etiqueta: "plantas de tratamiento, una por provincia",
    },
    puntos: [
      "Plantas de tratamiento de aguas residuales en las 7 provincias",
      "Planta de tratamiento de agua potable y nuevos reservorios para la ciudad de Huancavelica",
      "Unidades básicas de saneamiento en zona rural",
      "Fortalecimiento de las JASS en convenio con SUNASS",
    ],
  },
  {
    id: "transparencia",
    eje: "Gestión transparente",
    titulo: "Que se pueda ver en qué se gasta cada sol",
    resumen:
      "El plan propone abrir la información del gobierno regional y someter las contrataciones a controles verificables.",
    dato: {
      cifra: "ISO 37001",
      etiqueta: "certificación antisoborno para el gobierno regional",
    },
    puntos: [
      "Portal regional de datos abiertos",
      "Publicación en tiempo real del avance físico y financiero de las obras",
      "Certificación ISO 37001 antisoborno y controles en contrataciones públicas",
      "Audiencias públicas de rendición de cuentas y veedurías ciudadanas",
    ],
  },
];