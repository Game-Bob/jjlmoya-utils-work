import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AutonomosCalculatorUI } from '../ui';

const slug = 'calculadora-cuota-autonomos-2026';
const title = 'Calculadora Cuota de Autónomos 2026: Sistema RETA Real';
const description =
  'Simulador gratuito de cuotas de autónomos España 2026. Calcula tus rendimientos netos reales, tramos de cotización y cuota mensual con el nuevo MEI 0,9%.';

const faqData = [
  {
    question: '¿Cómo funciona el nuevo sistema de cotización para 2026?',
    answer:
      'El sistema se basa en 15 tramos de rendimientos netos reales. Debes declarar una previsión de tus beneficios (ingresos menos gastos) y pagar la cuota asociada a ese tramo mensual.',
  },
  {
    question: '¿Qué es el MEI y cómo afecta a mi cuota de autónomo?',
    answer:
      'El Mecanismo de Equidad Intergeneracional (MEI) es un impuesto finalista para las pensiones. En 2026 sube al 0,9%, lo que incrementa ligeramente la cuota respecto a 2025 para todos los autónomos.',
  },
  {
    question: '¿Cuántas veces puedo cambiar mi base de cotización?',
    answer:
      'Puedes modificar tu base de cotización y, por tanto, tu cuota de autónomo hasta 6 veces al año para adaptarla a la realidad de tus beneficios mensuales.',
  },
  {
    question: '¿Qué pasa si mis ingresos reales son distintos a mi previsión?',
    answer:
      'La Seguridad Social realizará una regularización anual cruzando datos con Hacienda. Si pagaste de menos, te reclamarán la diferencia; si pagaste de más, te devolverán el exceso automáticamente.',
  },
  {
    question: '¿Existe todavía la tarifa plana de 80 euros?',
    answer:
      'Sí, se mantiene la cuota reducida de 80€ para nuevos autónomos durante los primeros 12 meses de actividad, prorrogable otros 12 si los rendimientos son inferiores al SMI.',
  },
];

const howToData = [
  {
    name: 'Indica tus ingresos y gastos',
    text: 'Introduce la facturación mensual prevista y los gastos deducibles de tu actividad profesional.',
  },
  {
    name: 'Define tu perfil laboral',
    text: 'Selecciona si eres autónomo persona física (7% deduc.) o autónomo societario (3% deduc.).',
  },
  {
    name: 'Visualiza tu tramo real',
    text: 'El simulador calculará tu rendimiento neto y te mostrará el tramo de cotización que te corresponde en 2026.',
  },
  {
    name: 'Comprueba el impacto del MEI',
    text: 'Verás el desglose final de la cuota incluyendo las contingencias y el nuevo factor de equidad intergeneracional.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'es',
};

export const content: ToolLocaleContent<AutonomosCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelIncome: 'Ingresos Mensuales Brutos',
    labelExpenses: 'Gastos Mensuales Deducibles',
    labelType: 'Perfil de Autónomo',
    labelFlatRate: 'Tarifa Plana (Nuevo Alta)',
    optStandard: 'Autónomo Persona Física (7% deduc.)',
    optSocietario: 'Autónomo Societario (3% deduc.)',
    optNoFlatRate: 'No aplicada (Cuota Real)',
    optFlatRate: 'Sí, primer año (80€ mes)',
    labelBracket: 'Tu Tramo de Rendimientos Netos',
    labelNetDisplay: 'Rendimiento Neto Mensual',
    labelCuota: 'Cuota Seguridad Social',
    labelBase: 'Base de Cotización',
    labelNetAfter: 'Neto Real (Después de Cuota)',
    labelProjection: 'PROYECCIÓN 2026 (MEI 0.9%)',
    infoText:
      'Sistema RETA 2026: El cálculo incluye el rendimiento neto mensual con la deducción de gastos genéricos (7% o 3%). La cuota mostrada incluye la cotización por contingencias comunes, profesionales, cese de actividad, formación y el Mecanismo de Equidad Intergeneracional (MEI) actualizado al 0.9% para 2026.',
  },
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Fuentes',
  bibliography: [
    {
      name: 'Seguridad Social: Nuevo sistema de cotización',
      url: 'https://portal.seg-social.gob.es/wps/portal/importass/importass/Colectivos/Trabajo+Autonomo/guia',
    },
    {
      name: 'Agencia Tributaria: Rendimientos de actividades económicas',
      url: 'https://sede.agenciatributaria.gob.es/Sede/irpf/empresarios-individuales-profesionales/rendimientos-actividades-economicas.html',
    },
    {
      name: 'BOE: Real Decreto-ley 13/2022 de reforma del RETA',
      url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2022-12482',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Calculadora de Cuota de Autónomos 2026: Guía del Nuevo Sistema',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ser trabajador por cuenta propia en España implica enfrentarse a una de las gestiones más dinámicas y, a veces, confusas: la <strong>cotización a la Seguridad Social</strong>. Desde la entrada en vigor del nuevo sistema basado en <strong>rendimientos netos reales</strong>, la figura de la "cuota fija" ha desaparecido para dar paso a un modelo progresivo.',
    },
    {
      type: 'title',
      text: '¿Cómo funciona el Nuevo Sistema de Cotización RETA?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Hasta 2023, cada autónomo podía elegir libremente su base de cotización, lo que llevaba a que la gran mayoría cotizara por la base mínima. Con la reforma, el objetivo es que quienes más ganan contribuyan más, mientras que aquellos con ingresos reducidos vean aliviada su carga mensual.',
    },
    {
      type: 'paragraph',
      html: 'El sistema se basa en <strong>tramos de rendimiento neto</strong>. Esto significa que tu cuota no depende de tus ingresos brutos (facturación), sino de lo que realmente te queda "limpio" después de restar tus gastos profesionales y aplicar una deducción adicional por gastos genéricos.',
    },
    {
      type: 'title',
      text: 'Novedades Clave para 2026: El factor MEI',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El año 2026 marca la consolidación de la segunda fase de la reforma. Una de las actualizaciones más críticas es el incremento del <strong>Mecanismo de Equidad Intergeneracional (MEI)</strong>.',
    },
    {
      type: 'list',
      items: [
        '<strong>Incremento del MEI:</strong> Para 2026, el MEI sube al 0.9%, lo que supone un ligero encarecimiento de la cuota respecto a 2025 para todos los tramos.',
        '<strong>Revisión de Tramos:</strong> Los tramos de rendimientos netos se mantienen, pero las cuotas mínimas y máximas de cada horquilla se ajustan para converger con el sistema de cotización por ingresos reales.',
        '<strong>Regularización Anual:</strong> Al finalizar el año, la Seguridad Social cruzará datos con Hacienda. Si has pagado de más o de menos según tus beneficios reales, se producirá una devolución o un reclamo de cuotas.',
      ],
    },
    {
      type: 'title',
      text: 'Cómo calcular tu Rendimiento Neto Mensual',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Para usar nuestra calculadora con precisión, es vital entender qué cifra introducir. La fórmula que aplica la Seguridad Social es la siguiente:',
    },
    {
      type: 'code',
      code: 'Rendimiento Neto = (Ingresos - Gastos Deducibles) / (1 - Gastos Genéricos)',
    },
    {
      type: 'paragraph',
      html: 'Los <strong>Gastos Genéricos</strong> son una deducción del <strong>7%</strong> para autónomos personas físicas y del <strong>3%</strong> para autónomos societarios.',
    },
    {
      type: 'card',
      title: 'Ejemplo de cálculo 2026',
      html: '<ul><li>Facturación: 4.000 € / Gastos: 1.000 €</li><li>Margen de beneficio: 3.000 €</li><li>Deducción genérica (7%): 210 €</li><li>Rendimiento Neto computable: 2.790 €</li><li><strong>Cuota 2026 estimada:</strong> Tramo 8, ~350 € + ajuste MEI.</li></ul>',
    },
    {
      type: 'title',
      text: 'Ventajas del Sistema Progresivo',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Mejor protección social:</strong> Al cotizar por bases más reales, las prestaciones por incapacidad temporal, maternidad, paternidad y jubilación serán significativamente superiores.',
        '<strong>Flexibilidad total:</strong> Puedes cambiar tu base de cotización hasta 6 veces al año. Si un mes prevés una caída drástica de ingresos, puedes bajar de tramo para no asfixiar tu tesorería.',
        '<strong>Tarifa Plana de 80€:</strong> Se mantiene para nuevos emprendedores durante el primer año, permitiendo un arranque con costes fijos controlados.',
      ],
    },
    {
      type: 'title',
      text: 'Autónomo Societario vs. Persona Física',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El <strong>autónomo societario</strong> (el que tiene una SL) tiene una base mínima de cotización algo superior y la deducción por gastos genéricos es menor (3%). Esto se debe a que la ley considera que el control accionarial le otorga una posición distinta frente a los riesgos del mercado.',
    },
    {
      type: 'tip',
      html: '<strong>Consejo Pro:</strong> Si tus rendimientos netos varían mucho mes a mes, intenta situarte en un tramo intermedio prudente. La regularización posterior es inevitable, pero así evitarás pagos imprevistos de miles de euros cuando llegue la "factura" de la Seguridad Social a año vencido.',
    },
    {
      type: 'title',
      text: '¿Qué conceptos incluye tu cuota mensual?',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Contingencias Comunes (28,30%):</strong> Cubre bajas por enfermedad común o accidentes no laborales.',
        '<strong>Contingencias Profesionales (1,30%):</strong> Accidentes de trabajo y enfermedades profesionales.',
        '<strong>Cese de Actividad (0,90%):</strong> El famoso "paro del autónomo".',
        '<strong>Formación Profesional (0,10%):</strong> Acceso a cursos y capacitaciones.',
        '<strong>MEI (0,90% en 2026):</strong> Fondo para garantizar la sostenibilidad de las pensiones.',
      ],
    },
    {
      type: 'title',
      text: 'El proceso de regularización (Hacienda y Seguridad Social)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Cada año, tras la campaña de la Renta, la Agencia Tributaria comunica a la Seguridad Social tus rendimientos netos efectivos. Si elegiste un tramo inferior al que te correspondía realmente, recibirás una notificación de ingreso por la diferencia. Por el contrario, si cotizaste por encima de tus beneficios, la Seguridad Social te devolverá de oficio el exceso de cuotas.',
    },
    {
      type: 'title',
      text: 'Conclusión y Recomendaciones',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La <strong>calculadora de autónomos 2026</strong> es un aliado indispensable para la planificación fiscal de cualquier freelance. Te recomendamos utilizar este simulador cada vez que cierres un contrato importante o varíes tus costes fijos para asegurar que tu cuota de autónomo está siempre en sintonía con la realidad de tu negocio.',
    },
  ],
};
