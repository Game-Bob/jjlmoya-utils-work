import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SalaryCalculatorUI } from '../ui';

const slug = 'calculadora-sueldo-neto';
const title = 'Calculadora Sueldo Neto España: Simulador IRPF y Seguridad Social';
const description =
  'Descubre cuánto cobrarás realmente cada mes. Cálculo preciso de retenciones, base imponible y sueldo líquido según la normativa española.';

const faqData = [
  {
    question: '¿Cómo se calcula el sueldo neto en España?',
    answer:
      'El sueldo neto se calcula restando al bruto las retenciones de IRPF (según tramos) y las cotizaciones a la Seguridad Social (aproximadamente 6.35% del bruto). El porcentaje de IRPF varía según tu situación personal y nivel salarial.',
  },
  {
    question: '¿Cuál es la diferencia entre 12 y 14 pagas?',
    answer:
      'Con 12 pagas, las pagas extra están prorrateadas mensualmente. Con 14 pagas, recibes dos pagas extra completas (normalmente en junio/julio y diciembre). El bruto anual es el mismo, solo cambia la distribución.',
  },
  {
    question: '¿Por qué mi nómina no coincide exactamente con la calculadora?',
    answer:
      'Esta calculadora usa valores aproximados estándar. Tu nómina real puede variar por: deducciones específicas de tu empresa, beneficios sociales, hijos a cargo, discapacidad, o situaciones personales que afectan el IRPF.',
  },
  {
    question: '¿Qué porcentaje se queda Hacienda de mi sueldo?',
    answer:
      'Depende de tu salario. En general, entre IRPF y Seguridad Social, se retiene entre un 25% y 45% del bruto. A mayor salario, mayor porcentaje de retención por el sistema progresivo del IRPF.',
  },
  {
    question: '¿Qué es el IRPF?',
    answer:
      'El Impuesto sobre la Renta de las Personas Físicas. Es un impuesto progresivo: quien más gana, paga un porcentaje mayor sobre los tramos superiores de su sueldo.',
  },
];

const howToData = [
  {
    name: 'Introducir salario bruto anual',
    text: 'Escribe la cantidad total pactada en tu contrato antes de impuestos y retenciones.',
  },
  {
    name: 'Configurar situación familiar',
    text: 'Indica si tienes hijos o personas a cargo, ya que esto reduce el porcentaje de IRPF que se te aplica.',
  },
  {
    name: 'Número de pagas',
    text: 'Elige si recibes tu sueldo en 12 pagas (extras prorrateadas) o 14 pagas.',
  },
  {
    name: 'Consultar desglose mensual',
    text: 'Revisa cuánto se destina a Seguridad Social, IRPF y cuál es el ingreso líquido exacto que llegará a tu banco.',
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

export const content: ToolLocaleContent<SalaryCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelGross: 'Salario Bruto Anual',
    labelPays: 'Número de Pagas',
    btn12: '12 Pagas',
    btn14: '14 Pagas',
    labelAge: 'Edad',
    labelContract: 'Tipo de Contrato',
    optIndefinite: 'Indefinido / General',
    optTemporal: 'Temporal',
    btnCalculate: 'Calcular Sueldo Neto',
    labelNetMonthly: 'Sueldo Neto Mensual',
    labelNetAnnual: 'Sueldo Neto Anual',
    labelPaysDisplay: 'Pagas',
    labelBreakdown: 'Desglose de Retenciones (Estimado)',
    labelIRPF: 'IRPF',
    labelSS: 'Seguridad Social',
    disclaimer:
      '*Cálculo simplificado para trabajador soltero, sin hijos y menor de 65 años.',
  },
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Fuentes',
  bibliography: [],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '¿Dónde desaparece mi sueldo bruto?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Es la sorpresa más común del primer empleo: firmas un contrato por 24.000€ anuales, divides entre 12 esperando 2.000€ al mes, y te encuentras con 1.600€ en el banco. ¿Dónde están los otros 400€?',
    },
    {
      type: 'paragraph',
      html: 'En España, la diferencia entre <strong>Bruto</strong> (lo que paga la empresa) y <strong>Neto</strong> (lo que tú recibes) se va en dos partidas principales: IRPF y Seguridad Social. Entenderlas es clave para negociar subidas salariales.',
    },
    {
      type: 'title',
      text: 'Seguridad Social: El ~6.35% que financia tu futuro',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Es una cuota fija para casi todos los trabajadores. No depende de si estás soltero o casado. Con este dinero financias:',
    },
    {
      type: 'list',
      items: [
        '<strong>Contingencias Comunes (4,70%)</strong>: Cubre bajas por enfermedad común, accidentes no laborales, jubilación y maternidad.',
        '<strong>Desempleo (1,55% o 1,60%)</strong>: Tu aportación para cobrar el paro si pierdes el trabajo. Varía ligeramente si el contrato es temporal.',
        '<strong>Formación Profesional (0,10%)</strong>: Para cursos de formación subvencionada y reciclaje.',
      ],
    },
    {
      type: 'title',
      text: 'IRPF: El impuesto que más duele',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Es progresivo y puede variar entre el 2% y el 47% dependiendo de tu sueldo y tu situación personal. No es un impuesto fijo; es un adelanto a Hacienda. La empresa calcula cuánto deberías pagar en la Renta el año que viene y te lo va quitando mes a mes.',
    },
    {
      type: 'title',
      text: 'Factores que bajan tu IRPF',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Tener hijos (especialmente menores de 3 años).',
        'Tener una discapacidad reconocida (>33%).',
        'Tener cónyuge a cargo con rentas bajas.',
      ],
    },
    {
      type: 'title',
      text: 'Tramos IRPF Estatales (Aprox. 2026)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '0 - 12.450€: 19%',
        '12.450 - 20.200€: 24%',
        '20.200 - 35.200€: 30%',
        '35.200 - 60.000€: 37%',
        '> 60.000€: 45%',
      ],
    },
    {
      type: 'title',
      text: 'La eterna duda: ¿12 o 14 pagas?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Muchos trabajadores prefieren 14 pagas por la alegría de la paga "extra" en verano y navidad. Otros prefieren (o la empresa impone) prorratear las pagas en 12 mensualidades. Matemáticamente, cobras exactamente lo mismo al año.',
    },
    {
      type: 'list',
      items: [
        '<strong>12 PAGAS</strong>: Cobras más cada mes, pero no tienes extras. Mejor para flujo de caja mensual constante.',
        '<strong>14 PAGAS</strong>: Cobras un poco menos al mes, pero recibes dos inyecciones dobles al año. Funciona como "ahorro forzoso".',
      ],
    },
  ],
};
