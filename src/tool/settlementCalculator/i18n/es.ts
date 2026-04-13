import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SettlementCalculatorUI } from '../ui';

const slug = 'calculadora-finiquito-indemnizacion';
const title = 'Calculadora de Finiquito e Indemnización España 2026';
const description =
  'Calcula tu liquidación bruta paso a paso: vacaciones no disfrutadas, pagas extra y compensación por despido. Estimación basada en normativa laboral.';

const faqData = [
  {
    question: '¿Tengo derecho a finiquito si pido la baja voluntaria?',
    answer:
      'Sí, absolutamente. El finiquito incluye conceptos que ya has devengado como días trabajados del mes, vacaciones no disfrutadas y la parte proporcional de las pagas extra. Lo que no tendrás es derecho a indemnización ni a la prestación por desempleo.',
  },
  {
    question: '¿Qué indemnización me toca por despido improcedente?',
    answer:
      'Para contratos a partir del 12 de febrero de 2012, corresponden 33 días por año trabajado, con un tope máximo de 24 mensualidades. Para periodos anteriores, son 45 días por año.',
  },
  {
    question: '¿Me pueden descontar dinero del finiquito por no dar el preaviso?',
    answer:
      'Sí. Si tu contrato exige un preaviso (habitualmente de 15 días) y no lo cumples, la empresa tiene derecho a descontarte de tu finiquito el salario correspondiente a los días de preaviso no respetados.',
  },
  {
    question: '¿Qué pasa con las vacaciones y la cotización en el finiquito?',
    answer:
      'Cuando cobras vacaciones no disfrutadas, la empresa debe seguir cotizando por ti a la Seguridad Social durante esos días. Durante ese periodo no podrás empezar a cobrar el paro ni darte de alta en otro trabajo.',
  },
  {
    question: '¿Las indemnizaciones por despido pagan IRPF?',
    answer:
      'Las indemnizaciones obligatorias por despido están exentas de IRPF hasta un límite de 180.000 €, siempre que el despido sea objetivo o improcedente. El finiquito sí tributa normalmente.',
  },
];

const howToData = [
  {
    name: 'Introduce tu salario bruto',
    text: 'Escribe tu sueldo bruto anual (antes de impuestos) y selecciona el número de pagas.',
  },
  {
    name: 'Define las fechas reales',
    text: 'Indica el día exacto de inicio en la empresa y el último día de trabajo previsto.',
  },
  {
    name: 'Añade vacaciones',
    text: 'Especifica cuántos días de vacaciones te quedan pendientes de disfrutar en el año.',
  },
  {
    name: 'Elige el motivo',
    text: 'Selecciona el motivo de salida para que el simulador aplique el ratio de indemnización correcto.',
  },
];

const bibliography = [
  {
    name: 'Estatuto de los Trabajadores (BOE): Extinción del contrato',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-11430',
  },
  {
    name: 'Guía Laboral de España: El Finiquito',
    url: 'https://espanalaboral.es/guias-y-recursos/trabajadores/finiquito/',
  },
  {
    name: 'Poder Judicial: Cálculo de indemnizaciones por extinción de contrato',
    url: 'https://www.poderjudicial.es/cgpj/es/Servicios/Utilidades/Calculo-de-indemnizaciones-por-extincion-de-contrato-de-trabajo/',
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

export const content: ToolLocaleContent<SettlementCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelSalary: 'Sueldo Bruto Anual',
    labelExtraPayments: 'Pagas Extra al año',
    labelStartDate: 'Fecha de Inicio',
    labelEndDate: 'Fecha de Fin',
    labelVacationDays: 'Vacaciones No Disfrutadas',
    labelDepartureReason: 'Motivo de la Salida',
    opt12pays: '12 pagas (Prorrateadas)',
    opt14pays: '14 pagas (Estándar)',
    optImprocedente: 'Despido Improcedente (33 días)',
    optObjetivo: 'Despido Objetivo (20 días)',
    optTemporal: 'Fin de Contrato Temporal (12 días)',
    optVoluntaria: 'Baja Voluntaria (Sin indemnización)',
    labelTotal: 'Liquidación Total Estimada',
    labelSeverance: 'Indemnización por Despido',
    labelVacation: 'Vacaciones no Disfrutadas',
    labelExtras: 'Prorrateo Pagas Extra',
    labelMonthSalary: 'Salario del Mes',
    disclaimer:
      'Nota: Este cálculo es una estimación bruta aproximada basada en la legislación española general. El importe final puede variar según convenios colectivos, retenciones de IRPF y Seguridad Social.',
    btnCopy: 'Copiar Resumen',
    copySuccess: 'Copiado',
    copySummaryTitle: 'Resumen de Liquidación Estimada',
    defaultSalary: '24000',
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
      text: 'Calculadora de Finiquito e Indemnización: Guía Completa',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El fin del contrato laboral es un momento crucial y, a menudo, cargado de incertidumbre financiera. Tanto si se trata de un <strong>despido</strong>, una <strong>dimisión</strong> o el <strong>fin de un contrato temporal</strong>, entender cuánto dinero te corresponde es fundamental para proteger tus derechos como trabajador.',
    },
    {
      type: 'title',
      text: '¿Qué es el Finiquito y en qué se diferencia de la Indemnización?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>El Finiquito:</strong> Es el documento de saldo y finiquito que liquida las deudas pendientes de la empresa con el trabajador al finalizar la relación laboral. Siempre te corresponde, independientemente del motivo de tu salida.',
        '<strong>La Indemnización:</strong> Es una compensación económica que la empresa debe pagar al trabajador ante determinados tipos de despido o extinción de contrato. No siempre se tiene derecho a ella (por ejemplo, en bajas voluntarias).',
      ],
    },
    {
      type: 'title',
      text: 'Componentes clave del Finiquito',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Salario del mes en curso:</strong> Los días trabajados desde el último pago hasta el día de la baja.',
        '<strong>Vacaciones no disfrutadas:</strong> Si te vas y te quedan días de vacaciones, la empresa debe pagártelos.',
        '<strong>Pagas extraordinarias:</strong> Si no las tienes prorrateadas, te corresponde la parte proporcional de las pagas de verano y Navidad.',
        '<strong>Bonus o primas:</strong> Cualquier incentivo devengado y no cobrado hasta la fecha.',
      ],
    },
    {
      type: 'title',
      text: 'Cómo calcular la Indemnización por Despido',
      level: 3,
    },
    {
      type: 'card',
      title: 'Ejemplo práctico de cálculo',
      html: '<p>Trabajador con salario bruto de 30.000 € anuales y 2 años de antigüedad:</p><ul><li>Salario diario: 30.000 / 365 = 82,19 €</li><li>Despido improcedente (33 días): 33 x 2 x 82,19 = <strong>5.424,54 €</strong></li><li>Despido objetivo (20 días): 20 x 2 x 82,19 = <strong>3.287,60 €</strong></li></ul>',
    },
    {
      type: 'list',
      items: [
        '<strong>Despido Improcedente:</strong> 33 días por año trabajado, máximo 24 mensualidades (contratos desde feb. 2012).',
        '<strong>Despido Objetivo:</strong> 20 días por año trabajado, máximo 12 mensualidades.',
        '<strong>Fin de Contrato Temporal:</strong> 12 días por año de servicio.',
        '<strong>Baja Voluntaria:</strong> Sin indemnización, pero sí finiquito completo.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Consejo experto:</strong> Revisa siempre tu Convenio Colectivo. Algunos sectores profesionales tienen pactadas indemnizaciones superiores a las mínimas legales del Estatuto de los Trabajadores.',
    },
  ],
};
