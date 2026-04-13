import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IrpfCalculatorUI } from '../ui';

const slug = 'calculadora-irpf';
const title = 'Calculadora IRPF 2026: Simulador Sueldo Neto España';
const description =
  'Calcula tu sueldo neto mensual y anual para 2026 en España. Simulador actualizado con tramos estatales, autonómicos, MEI y situación familiar.';

const faqData = [
  {
    question: '¿Cómo afecta el MEI a mi sueldo neto en 2026?',
    answer:
      'El Mecanismo de Equidad Intergeneracional aumenta al 0,90% en 2026 para la sostenibilidad de las pensiones. La mayor parte la paga la empresa, pero el trabajador ve reducida su nómina en el porcentaje correspondiente a su contribución.',
  },
  {
    question: '¿Por qué mi sueldo neto es distinto en Madrid que en Cataluña?',
    answer:
      'El IRPF es un impuesto cedido en un 50% a las Comunidades Autónomas. Madrid aplica tramos más reducidos que la escala estatal, mientras que Cataluña tiene una escala propia que puede elevar la retención inicial.',
  },
  {
    question: '¿Qué es el tipo marginal y en qué me afecta?',
    answer:
      'El tipo marginal es el porcentaje de impuesto que recae sobre el último euro ganado. Es lo que realmente te cuesta un aumento de sueldo o un bonus en términos de impuestos.',
  },
  {
    question: '¿Cuántas pagas debo seleccionar para el cálculo mensual?',
    answer:
      'Normalmente se cobra en 12 o 14 pagas (con extras en verano y Navidad). Selecciona la opción que use tu empresa para saber cuánto dinero verás realmente ingresado cada mes en tu banco.',
  },
  {
    question: '¿Es fiable esta calculadora para mi declaración de la renta?',
    answer:
      'Esta herramienta ofrece una estimación basada en la normativa vigente para 2026. La retención mensual es una aproximación y el resultado final real se determina en la declaración de junio del año siguiente.',
  },
];

const howToData = [
  {
    name: 'Introduce tu sueldo bruto',
    text: 'Escribe la cantidad total anual que figura en tu contrato antes de cualquier descuento o retención.',
  },
  {
    name: 'Define tu situación personal',
    text: 'Indica tu número de hijos, si tienes alguna discapacidad reconocida y tu estado civil para aplicar los mínimos exentos por ley.',
  },
  {
    name: 'Elige tu Comunidad Autónoma',
    text: 'La residencia fiscal determina la escala autonómica que se aplicará a tu cálculo, variando el neto final percibido.',
  },
  {
    name: 'Visualiza el desglose',
    text: 'Observa cuánto destinas al IRPF, cuánto a la Seguridad Social y cuál es tu sueldo neto real mensual y anual.',
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

export const content: ToolLocaleContent<IrpfCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    titleVariables: 'Variables de Cálculo',
    titleCalculo: 'Cálculo Transparente 2026',
    labelBruto: 'Salario Bruto Anual (€)',
    labelPagas: 'Número de Pagas',
    labelComunidad: 'Residencia Fiscal',
    labelHijos: 'Hijos (menores de 25)',
    labelDiscapacidad: 'Grado Discapacidad',
    labelUnidad: 'Unidad Familiar o Convivencia',
    opt12pagas: '12 pagas',
    opt14pagas: '14 pagas',
    optGen: 'Territorio Común (General)',
    optMad: 'Madrid',
    optCat: 'Cataluña',
    optAnd: 'Andalucía',
    optVal: 'C. Valenciana',
    optPV: 'País Vasco (Foral)',
    optNav: 'Navarra (Foral)',
    optNinguna: 'Ninguna',
    opt33: '> 33%',
    opt65: '> 65%',
    optSoltero: 'Soltero, divorciado o viudo',
    optCasadoLow: 'Casado (pareja gana menos de 1.500€/año)',
    optCasadoHigh: 'Casado (pareja dispone de ingresos)',
    labelSalarioBruto: 'Salario Bruto',
    labelSS: 'Seguridad Social / MEI (-)',
    labelGastos: 'Gastos Deducibles (Art. 20)',
    labelNetoAnual: 'SALARIO NETO ANUAL',
    labelRetencionIRPF: 'Retención IRPF (%)',
    labelNetoMensual: 'Neto Mensual Disponible',
    labelMarginal: 'Tipo Marginal Aplicado',
    resultRetention: 'Retención IRPF (%)',
    resultAnual: '/ año',
    infoText:
      'Algoritmo AEAT (Cuota Íntegra Base - Cuota Mínimo) validado para 2026. Incluye cotización MEI al 6,47% y reducciones por rendimientos del trabajo. jjlmoya.es.',
  },
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Fuentes',
  bibliography: [
    {
      name: 'Agencia Tributaria: IRPF',
      url: 'https://sede.agenciatributaria.gob.es/Sede/irpf.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Calculadora IRPF 2026: Guía completa del nuevo escenario fiscal',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El Impuesto sobre la Renta de las Personas Físicas (IRPF) es el gravamen más relevante del sistema tributario español, afectando directamente a la nómina mensual de millones de trabajadores. En el año 2026, nos encontramos en un escenario de consolidación de diversas reformas orientadas a la progresividad y la adaptación a las nuevas realidades económicas, como el incremento del Mecanismo de Equidad Intergeneracional (MEI) y la deflactación de la tarifa en diversas comunidades autónomas.',
    },
    {
      type: 'paragraph',
      html: 'Nuestra <strong>calculadora de IRPF para 2026</strong> ha sido diseñada para ofrecer una visión precisa y actualizada de lo que realmente llegará a tu cuenta bancaria. Calcular el sueldo neto no es simplemente restar un porcentaje fijo; es un proceso matemático que tiene en cuenta tu situación personal, tus descendientes, tu discapacidad y, de forma crucial, tu residencia fiscal, ya que cada región en España tiene potestad sobre el tramo autonómico del impuesto.',
    },
    {
      type: 'title',
      text: '¿Qué cambia en la nómina de 2026?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Para entender los resultados de tu simulación, es fundamental conocer los pilares que sostienen el cálculo de las retenciones en el ejercicio actual:',
    },
    {
      type: 'list',
      items: [
        '<strong>El impacto del MEI:</strong> El Mecanismo de Equidad Intergeneracional sigue su senda alcista para garantizar las pensiones, situándose en el 0,90% en 2026. De este porcentaje, la mayor parte la asume la empresa, pero el trabajador ve incrementada su aportación al 0,15% (aproximadamente), lo que reduce ligeramente el líquido a percibir.',
        '<strong>SMI y Reducciones:</strong> El Salario Mínimo Interprofesional actúa como barrera. Las rentas bajas se benefician de una reducción por rendimientos del trabajo ampliada para asegurar que el incremento del salario bruto no se vea absorbido por una mayor retención fiscal.',
        '<strong>Tramos Autonómicos:</strong> Regiones como Madrid, Andalucía o Murcia suelen aplicar tarifas más reducidas que la media estatal, mientras que Cataluña o la Comunidad Valenciana presentan escalas propias que pueden elevar la retención en los tramos más altos.',
      ],
    },
    {
      type: 'title',
      text: 'Conceptos clave para entender tu sueldo neto',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Base Imponible vs. Salario Bruto:</strong> No se tributa por el total de lo que cobras. La base sobre la que se aplica el IRPF es el resultado de restar a tu salario bruto las cotizaciones a la Seguridad Social (6,45% aproximadamente) y una reducción general por gastos de difícil justificación (2.000 € anuales). Sobre este resultado se aplican los mínimos personales.',
    },
    {
      type: 'title',
      text: 'Conceptos básicos',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Tipo Marginal:</strong> Es el porcentaje de impuestos que pagas por el último euro que ganas. Es crucial para saber cuánto te retendrán si recibes un aumento o un bonus.',
        '<strong>Mínimo Vital:</strong> Parte de la renta que el Estado considera indispensable para cubrir las necesidades básicas del contribuyente y su familia, y que por tanto queda exenta de tributación.',
        '<strong>Retención en Nómina:</strong> Pago a cuenta que la empresa ingresa mensualmente en Hacienda en tu nombre, basándose en una estimación de lo que deberás pagar al final del ejercicio.',
        '<strong>Rendimiento Neto:</strong> Salario bruto menos las cotizaciones sociales y los gastos deducibles permitidos por la ley tributaria.',
      ],
    },
    {
      type: 'title',
      text: 'Cómo optimizar tu retención de IRPF',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Muchos trabajadores se preguntan si deben solicitar a su empresa que les retenga más o menos porcentaje. La realidad es que la retención es un "adelanto" a Hacienda. Si te retienen de menos durante el año, la Declaración de la Renta te saldrá a pagar; si te retienen de más, te saldrá a devolver.',
    },
    {
      type: 'paragraph',
      html: '<strong>El Miedo al Salto de Tramo:</strong> Existe el mito de que si subes de tramo, ganarás menos dinero neto. Es falso. El IRPF es progresivo; solo el dinero que excede el límite del tramo tributa al porcentaje superior. Nunca ganarás menos neto por recibir un aumento bruto, aunque el tipo marginal sea mayor.',
    },
    {
      type: 'paragraph',
      html: '<strong>Consejo para familias:</strong> Asegúrate de haber comunicado correctamente el nacimiento de hijos o cambios en el grado de discapacidad de los miembros de la unidad familiar mediante el modelo 145. Esto ajustará tu retención mensualmente y evitará sustos en la campaña de la renta de junio del año siguiente.',
    },
    {
      type: 'title',
      text: 'Diferencia según la Comunidad Autónoma',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La descentralización fiscal en España hace que dos personas con el mismo sueldo y situación familiar cobren distinto neto según vivan en Toledo o en Barcelona. Las comunidades tienen potestad para modificar la mitad del impuesto (tramo autonómico). Madrid, por ejemplo, destaca por tener los tipos más bajos en prácticamente todos los niveles de renta, mientras que otras regiones aplican deducciones por alquiler o por estudios de hijos que no existen a nivel estatal. Nuestra calculadora contempla estas variaciones para ofrecerte el dato más realista posible según tu ubicación.',
    },
    {
      type: 'paragraph',
      html: 'En conclusión, la <strong>simulación de sueldo neto 2026</strong> es una herramienta de planificación financiera básica. Conocer tu capacidad de ahorro real y entender qué parte de tus ingresos se destina al mantenimiento de los servicios públicos te permite tomar decisiones informadas sobre inversiones, hipotecas o cambios laborales.',
    },
  ],
};
