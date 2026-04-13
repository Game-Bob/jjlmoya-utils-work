import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResignationLetterGeneratorUI } from '../ui';

const slug = 'generador-carta-renuncia';
const title = 'Generador de Carta de Renuncia Profesional';
const description =
  'Crea tu carta de baja voluntaria personalizada en segundos. Plantillas profesionales listas para copiar o descargar al instante en PDF.';

const faqData = [
  {
    question: '¿Cuántos días de preaviso tengo que dar para que sea legal?',
    answer:
      'En España, el periodo estándar suele ser de 15 días naturales, aunque debes revisar tu contrato de trabajo y el convenio colectivo de tu sector. Algunos convenios o contratos de alta dirección pueden exigir periodos de entre 3 y 6 meses.',
  },
  {
    question: '¿Tengo derecho a cobrar finiquito si presento una carta de renuncia?',
    answer:
      'Sí, el finiquito es un derecho inalienable que incluye el pago de los días de vacaciones no disfrutados, la parte proporcional de las pagas extraordinarias y el salario de los días trabajados en el mes de salida.',
  },
  {
    question: '¿Cobraré el paro si me voy voluntariamente?',
    answer:
      'No, la baja voluntaria no da derecho a la prestación por desempleo (paro) de forma inmediata, ya que la ley considera que el trabajador ha abandonado su puesto por voluntad propia y no por una situación involuntaria de desempleo.',
  },
  {
    question: '¿Qué pasa si no cumplo con el periodo de preaviso?',
    answer:
      'La empresa tiene el derecho legal de descontar de tu finiquito la parte proporcional del salario por cada día de preaviso no respetado. Es sumamente importante calcular bien tu fecha de salida.',
  },
  {
    question: '¿Puedo retractarme de mi carta de renuncia una vez entregada?',
    answer:
      'En principio, sí es posible retractarse siempre que se produzca dentro del periodo de preaviso y no cause un perjuicio real a la empresa. De todas formas, lo ideal es estar 100% seguro antes de entregarla.',
  },
  {
    question: '¿Es obligatorio que la carta de renuncia sea escrita a mano?',
    answer:
      'No, no es obligatorio que sea manuscrita. Una carta impresa es perfectamente válida legalmente. Lo verdaderamente importante es que el documento esté firmado de tu puño y letra o mediante firma digital certificada.',
  },
];

const howToData = [
  {
    name: 'Rellena tus datos personales',
    text: 'Introduce tu nombre completo, el de tu responsable y el nombre de la empresa.',
  },
  {
    name: 'Elige la fecha de salida',
    text: 'Selecciona tu último día de trabajo teniendo en cuenta el periodo de preaviso de tu contrato.',
  },
  {
    name: 'Selecciona el motivo',
    text: 'Elige el planteamiento del motivo que mejor se adapte a tu situación para personalizar el texto.',
  },
  {
    name: 'Copia o descarga la carta',
    text: 'Pulsa el botón para copiar el texto al portapapeles o descárgalo directamente en PDF.',
  },
];

const bibliography = [
  {
    name: 'Ministerio de Trabajo - Información Laboral',
    url: 'https://www.mites.gob.es/es',
  },
  {
    name: 'Estatuto de los Trabajadores (BOE)',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-11430',
  },
  {
    name: 'Guía de derechos y obligaciones laborales',
    url: 'https://www.mites.gob.es/es/sec_leyes/trabajo/index.htm',
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

export const content: ToolLocaleContent<ResignationLetterGeneratorUI> = {
  slug,
  title,
  description,
  ui: {
    labelUserName: 'Tu nombre completo',
    labelManagerName: 'Nombre del responsable o RR.HH.',
    labelManagerGender: 'Tratamiento del destinatario',
    labelCompanyName: 'Nombre de la empresa',
    labelLastDay: 'Tu último día (Fecha de salida)',
    labelReasonType: 'Planteamiento del motivo',
    labelCity: 'Ciudad desde donde escribes',
    optGenderNeutral: 'Estimado/a (Neutral)',
    optGenderM: 'Estimado (Masculino)',
    optGenderF: 'Estimada (Femenino)',
    optReasonStandard: 'Estándar (Profesional y cordial)',
    optReasonOpportunity: 'Nueva oportunidad profesional',
    optReasonPersonal: 'Motivos personales',
    optReasonEducation: 'Crecimiento académico/estudios',
    optReasonGrowth: 'Falta de crecimiento interno',
    optReasonDirect: 'Directo y breve (Sin justificar)',
    btnCopy: 'Copiar Carta',
    btnDownload: 'Descargar PDF',
    copyFeedback: 'Copiado al portapapeles',
    defaultUserName: 'Juan García Pérez',
    defaultManagerName: 'Marta Gómez',
    defaultCompanyName: 'Tech Solutions S.L.',
    defaultCity: 'Madrid',
    dateLocale: 'es-ES',
    datePrefix: 'a',
    managerPrefix: 'A/A:',
    managerFallback: 'A la atención del Responsable de RR.HH.',
    companyFallback: 'Nombre de la Empresa',
    salutationNeutral: 'Estimado/a',
    salutationM: 'Estimado',
    salutationF: 'Estimada',
    salutationFallback: 'responsable',
    signatureFallback: 'Firma del Empleado',
    thanksParagraph:
      'Quiero expresar mi más sincero agradecimiento por las oportunidades de crecimiento profesional y personal que se me han brindado durante mi estancia en la empresa.',
    transitionParagraph:
      'Me pongo a su entera disposición para colaborar en el proceso de transición de mis responsabilidades y asegurar el traspaso de mis tareas pendientes de la mejor forma posible.',
    closingWord: 'Cordialmente,',
    reasonStandard:
      'Le escribo formalmente para presentar mi renuncia irrevocable a mi puesto actual. Mi último día de trabajo será el [DATE], respetando así los términos de preaviso establecidos.',
    reasonOpportunity:
      'Le informo de mi decisión de renunciar a mi cargo actual, motivado por la aceptación de una nueva oferta laboral que me permitirá enfrentar nuevos retos profesionales. Mi fecha efectiva de salida será el [DATE].',
    reasonPersonal:
      'Por motivos personales que requieren de mi atención inmediata y total, me veo en la necesidad de presentar mi renuncia al cargo que vengo desempeñando. Mi vínculo con la empresa finalizará el próximo [DATE].',
    reasonEducation:
      'He decidido retomar mis estudios de formación avanzada a tiempo completo, por lo cual presento mi renuncia voluntaria. Mi último día de servicio será el [DATE].',
    reasonGrowth:
      'Tras una larga reflexión, he decidido dar un giro a mi carrera profesional en busca de un entorno que me permita desarrollar habilidades en áreas distintas a las actuales. Mi salida efectiva se producirá el [DATE].',
    reasonDirect:
      'Por la presente, le comunico mi decisión de extinguir mi relación laboral con la empresa. Mi último día de actividad profesional en el centro de trabajo será el [DATE].',
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
      text: 'Cómo redactar una carta de renuncia profesional y efectiva',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tomar la decisión de dejar un empleo es un paso trascendental en cualquier carrera profesional. El proceso de <strong>presentar una carta de renuncia</strong> no es simplemente un trámite administrativo; es la última impresión que dejas en una organización y un documento con implicaciones legales que debe manejarse con precisión y elegancia.',
    },
    {
      type: 'tip',
      html: '<strong>Consejo profesional:</strong> Aunque tengas una relación de confianza con tu jefe, la renuncia <strong>siempre debe entregarse por escrito</strong>. Los documentos marcan el inicio oficial del periodo de preaviso.',
    },
    {
      type: 'title',
      text: 'Elementos esenciales de una carta de renuncia',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Datos de contacto:</strong> Tu nombre completo y los datos del destinatario.',
        '<strong>Fecha de emisión:</strong> El día exacto en que entregas el documento.',
        '<strong>Declaración de renuncia:</strong> Una frase clara indicando tu voluntad de dejar el puesto.',
        '<strong>Último día de trabajo:</strong> La fecha precisa calculando correctamente el preaviso.',
        '<strong>Agradecimientos:</strong> Un párrafo breve valorando la oportunidad y el aprendizaje.',
        '<strong>Firma:</strong> Tu firma manuscrita o digital.',
      ],
    },
    {
      type: 'title',
      text: 'La importancia del preaviso en España',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Contrato general:</strong> 15 días naturales — descuento proporcional en finiquito si no se respeta.',
        '<strong>Personal directivo:</strong> De 3 a 6 meses — posible indemnización por daños.',
        '<strong>Periodo de prueba:</strong> 0 días (salvo pacto) — cese inmediato sin penalización.',
      ],
    },
    {
      type: 'title',
      text: 'Tipos de cartas según tu situación',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Renuncia por nueva oportunidad:</strong> Centrada en el crecimiento profesional. Ideal para mantener buenas relaciones.',
        '<strong>Renuncia por motivos personales:</strong> No entra en detalles, simplemente indica que necesitas tiempo para asuntos privados.',
        '<strong>Renuncia directa:</strong> Neutral, minimalista y puramente formal. Se usa cuando no hay interés en dar explicaciones.',
      ],
    },
    {
      type: 'title',
      text: 'Estructura recomendada',
      level: 3,
    },
    {
      type: 'code',
      code: '[Ciudad y Fecha]\n\nA la atención de [Nombre del Responsable]\n[Nombre de la Empresa]\n\nEstimado/a [Nombre]:\n\nPor la presente, le comunico mi decisión de renunciar formalmente a mi puesto de trabajo. Mi último día de trabajo será el próximo [Fecha], cumpliendo así con el periodo de preaviso legal.\n\nAgradezco profundamente la confianza depositada en mí.\n\nAtentamente,\n[Tu Firma]',
    },
    {
      type: 'title',
      text: 'Errores comunes que debes evitar',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>No poner la fecha de salida exacta:</strong> "Me voy en dos semanas" no es lo mismo que poner una fecha en el calendario.',
        '<strong>Usar la carta para quejarse:</strong> La carta de renuncia no es el lugar para ventilar frustraciones.',
        '<strong>Olvidar pedir el finiquito:</strong> Es recomendable añadir una línea solicitando la propuesta de liquidación.',
        '<strong>No quedarse con copia:</strong> Entrega siempre dos copias y pide que te sellen una con la fecha de recibido.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Privacidad garantizada:</strong> Todo el procesamiento se realiza de forma local en tu navegador. Tus datos personales y laborales nunca salen de tu equipo.',
    },
  ],
};
