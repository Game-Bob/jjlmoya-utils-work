import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EarlyRetirementSimulatorUI } from '../ui';

const slug = 'simulador-jubilacion-anticipada';
const title = 'Simulador de Jubilación Anticipada: Calcula tu pensión';
const description =
  'Calcula gratis tu edad de jubilación, coeficientes reductores y pensión estimada. Simulador actualizado para jubilación voluntaria e involuntaria en España.';

const faqData = [
  {
    question: '¿Cuál es la edad mínima para jubilarse anticipadamente hoy?',
    answer:
      'Para la jubilación anticipada voluntaria, la edad mínima es de 2 años menos que la edad ordinaria (generalmente 63 o 65 años según cotización). Para la involuntaria, son hasta 4 años antes (61 o 63 años).',
  },
  {
    question: '¿Cuántos años necesito haber cotizado?',
    answer:
      'Para la voluntaria se exigen al menos 35 años de cotización efectiva. Para la involuntaria o forzosa, el mínimo es de 33 años.',
  },
  {
    question: '¿Cuánto dinero pierdo por jubilarme antes?',
    answer:
      'La reducción depende de los meses de adelanto y los años cotizados totales. Los recortes van desde el 2,81% por un solo mes hasta un máximo cercano al 21% por el adelanto completo de 2 años en la vía voluntaria.',
  },
  {
    question: '¿Cuenta el tiempo de paro para la jubilación?',
    answer:
      'Sí, el tiempo que se percibe la prestación por desempleo (paro) cotiza para la jubilación, ya que el SEPE realiza las aportaciones correspondientes a la Seguridad Social.',
  },
];

const howToData = [
  {
    name: 'Introduce tu fecha de nacimiento',
    text: 'Esto determina tu edad legal ordinaria según la normativa vigente en 2026.',
  },
  {
    name: 'Estima tus años cotizados',
    text: 'Incluye el tiempo de trabajo, autónomos y periodos de paro cotizado.',
  },
  {
    name: 'Elige el tipo de jubilación',
    text: 'Indica si el retiro es voluntario o forzoso para aplicar los coeficientes correctos.',
  },
  {
    name: 'Revisa tu pensión estimada',
    text: 'Visualiza el recorte aplicado y la fecha exacta en la que podrías dejar de trabajar.',
  },
];

const bibliography = [
  {
    name: 'Seguridad Social: Jubilación Ordinaria y Anticipada',
    url: 'https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/PrestacionesPensionesTrabajadores/10963',
  },
  {
    name: 'Ley 21/2021 de garantía del poder adquisitivo de las pensiones',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-21652',
  },
  {
    name: 'Simulador Oficial - Tu Seguridad Social',
    url: 'https://prestaciones.seg-social.es/simulador-servicio/simulador-pension-jubilacion.html',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'es',
};

export const content: ToolLocaleContent<EarlyRetirementSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelBirthYear: 'Nacimiento (Año)',
    labelContributions: 'Años Cotizados',
    labelBasePension: 'Base Mensual Bruta',
    labelRetirementAge: 'Edad de Jubilación',
    labelExpectedDate: 'Fecha Prevista',
    labelEstimatedPension: 'Pensión Estimada',
    labelPermanentReduction: 'Reducción Permanente',
    labelYears: 'AÑOS',
    btnLegalTitle: 'Ordinaria',
    btnLegalDesc: 'Edad legal sin recortes. 100% de la base.',
    btnVoluntaryTitle: 'Anticipada Voluntaria',
    btnVoluntaryDesc: 'Adelanto por decisión propia. Recorte mensual.',
    btnInvoluntaryTitle: 'Involuntaria / ERE',
    btnInvoluntaryDesc: 'Cese forzoso. Coeficientes más suaves.',
    defaultBirthYear: '1975',
    defaultContributions: '30',
    defaultBasePension: '2500',
    adviceDefault: 'Mueve el deslizador para proyectar tu carrera de jubilación.',
    adviceDelay:
      'Si retrasas tu retiro hasta los <strong>[AGE] años</strong>, ganarías aproximadamente <strong>[GAIN]€ extras</strong> al mes.',
    adviceBonus: 'Estás capitalizando una bonificación por demora. Tu pensión será superior al 100%.',
    adviceOptimal: 'Has alcanzado la edad ordinaria óptima con el 100% de tu prestación.',
  },
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Fuentes',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Simulador de Jubilación Anticipada en España: Guía 2026',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La <strong>jubilación anticipada</strong> es una de las mayores preocupaciones financieras para los trabajadores en España. Entender cuándo se puede dejar de trabajar y, sobre todo, cuánto dinero se perderá en forma de coeficientes reductores, es vital para una planificación de vida saludable.',
    },
    {
      type: 'list',
      items: [
        '<strong>Edad legal ordinaria:</strong> 67 años (o 65 con cotización suficiente).',
        '<strong>Anticipada Voluntaria:</strong> Hasta 2 años antes del límite legal.',
        '<strong>Anticipada Involuntaria:</strong> Hasta 4 años antes (por despido u otros).',
        '<strong>Coeficientes Reductores:</strong> Recortes mensuales perennes en la pensión.',
        '<strong>Requisito de cotización:</strong> Mínimo 35 años para voluntaria, 33 para forzosa.',
      ],
    },
    {
      type: 'title',
      text: '¿A qué edad puedo jubilarme legalmente?',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Vía de los 65 años:</strong> Si ha cotizado más de 38 años y 6 meses, puede jubilarse a los 65 con el 100% de su base.',
        '<strong>Vía de los 67 años:</strong> Si su cotización es inferior a ese límite, su edad ordinaria se fija en los 67 años.',
        '<strong>Cómputo del Servicio Militar:</strong> El servicio militar o la prestación social obligatoria pueden sumar hasta 1 año de cotización.',
      ],
    },
    {
      type: 'title',
      text: 'La Jubilación Anticipada Voluntaria',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Esta modalidad permite adelantar el retiro hasta 24 meses (2 años) respecto a la edad ordinaria. Es la opción preferida por profesionales que desean disfrutar del descanso tras décadas de trabajo, pero tiene condiciones estrictas.',
    },
    {
      type: 'card',
      title: 'Requisitos para la Voluntaria',
      html: '<ul><li>Tener cumplida una edad que sea inferior en dos años a la ordinaria.</li><li>Acreditar un período mínimo de cotización efectiva de 35 años.</li><li>Que el importe de la pensión a percibir sea superior a la pensión mínima.</li></ul>',
    },
    {
      type: 'title',
      text: 'Coeficientes Reductores: El Precio del Adelanto',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Desde la reforma del sistema de pensiones, los recortes ya no se aplican por trimestres, sino de forma <strong>mensual</strong>. El recorte depende de cuántos años haya cotizado en total:',
    },
    {
      type: 'list',
      items: [
        '<strong>Menos de 38,5 años cotizados:</strong> Recorte máximo del 21% (2 años de adelanto).',
        '<strong>Entre 38,5 y 41,5 años:</strong> Recorte máximo aproximado del 19%.',
        '<strong>Entre 41,5 y 44,5 años:</strong> Recorte máximo aproximado del 17%.',
        '<strong>Más de 44,5 años:</strong> Recorte máximo aproximado del 15%.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Consejo de Oro:</strong> Retrasar tan solo un mes su jubilación anticipada puede suponer un salto significativo en el coeficiente reductor. Calcule siempre el beneficio de esperar unos días más si está al límite de un tramo mensual.',
    },
    {
      type: 'title',
      text: 'Jubilación Anticipada Involuntaria o Forzosa',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Adelanto máximo:</strong> 4 años (48 meses) respecto a la edad ordinaria.',
        '<strong>Cotización requerida:</strong> 33 años.',
        '<strong>Condición:</strong> Debe estar inscrito como demandante de empleo al menos 6 meses antes.',
        '<strong>Coeficientes:</strong> Son más favorables que en la voluntaria, pero el impacto de 4 años de adelanto sigue siendo severo.',
      ],
    },
    {
      type: 'title',
      text: '¿Cómo calcular mi pensión estimada?',
      level: 2,
    },
    {
      type: 'card',
      title: 'Ejemplo práctico',
      html: '<p>Un trabajador con una base de 2.000 € que se jubila voluntariamente 2 años antes con 36 años cotizados. Su recorte será aproximadamente del 21%, dejando su pensión en unos <strong>1.580 € mensuales</strong> para el resto de su vida.</p>',
    },
  ],
};
