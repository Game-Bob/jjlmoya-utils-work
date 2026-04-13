import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReverseVatCalculatorUI } from '../ui';

const slug = 'calculadora-iva-inverso';
const title = 'Calculadora IVA Inverso: Desglosar IVA España';
const description =
  'Calculadora inversa de IVA online. Desglosa el IVA de cualquier importe total para obtener la base imponible. Herramienta esencial para autónomos y facturación.';

const faqData = [
  {
    question: '¿Qué es el IVA Inverso o desglosar el IVA?',
    answer:
      'Es el proceso de calcular la base imponible a partir de un precio total que ya incluye el impuesto. Es fundamental para autónomos que necesitan emitir facturas a partir de un precio final acordado.',
  },
  {
    question: '¿Cómo se calcula manualmente el IVA inverso?',
    answer:
      'Para un IVA del 21%, debes dividir el importe total entre 1.21. El resultado es la base imponible. La diferencia entre el total y la base es la cuota de IVA.',
  },
  {
    question: '¿Qué tipos de IVA existen en España?',
    answer:
      'Existen tres tipos: el General (21%), el Reducido (10% para alimentación, salud, vivienda) y el Superreducido (4% para libros, periódicos, pan, leche).',
  },
  {
    question: '¿Cuándo es obligatorio desglosar el IVA?',
    answer:
      'Siempre que emitas una factura profesional o simplificada. Es obligatorio indicar por separado la base imponible, el tipo impositivo aplicado y la cuota total de IVA.',
  },
];

const howToData = [
  {
    name: 'Introducir el importe total',
    text: 'Escribe la cantidad final con IVA incluido que quieres desglosar.',
  },
  {
    name: 'Seleccionar el tipo de IVA',
    text: 'Elige entre el 21%, 10% o 4% según la categoría de tu producto o servicio.',
  },
  {
    name: 'Obtener la base imponible',
    text: 'Revisa el cálculo automático que muestra cuánto dinero es realmente tuyo antes de impuestos.',
  },
  {
    name: 'Copiar datos de facturación',
    text: 'Utiliza los valores calculados para rellenar los campos de base e IVA en tu programa de facturación.',
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

export const content: ToolLocaleContent<ReverseVatCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelTotal: 'Importe Total (Con IVA)',
    labelVatType: 'Tipo de IVA',
    btn21: '21 %',
    btn10: '10 %',
    btn4: '4 %',
    btn0: '0 %',
    labelBase: 'Base Imponible',
    labelVat: 'IVA',
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
      text: 'El Problema de Desglosar el IVA Inverso',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Para muchos autónomos y pymes, calcular la base imponible a partir de un precio total sigue siendo un quebradero de cabeza. El error más común es pensar que para quitar un 21% de IVA, simplemente restas el 21% al total. <strong>¡Esto es incorrecto!</strong> Hacerlo así te hará perder dinero en cada trimestre.',
    },
    {
      type: 'title',
      text: 'La Matemática Explicada',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El IVA se aplica <strong>sobre</strong> la base. Por tanto, el precio final es el 121% de la base (si el IVA es 21%). Para volver atrás, no restamos; <strong>dividimos</strong>. Al dividir por <code>1.21</code>, estamos preguntando: "¿Qué número, multiplicado por 1.21, me da 100?". Esta es la única forma de obtener el desglose exacto para tu modelo 303.',
    },
    {
      type: 'card',
      title: 'El Error Común vs. La Fórmula Real',
      html: '<p><strong>Error común:</strong> <code>100€ - 21% = 79€</code> (Si luego sumas el 21% a 79€, obtienes 95,59€, ¡no 100€!)</p><p><strong>Correcto:</strong> <code>Base = Total / (1 + Tasa)</code> → <code>100 / 1.21 = 82,64€</code></p>',
    },
    {
      type: 'code',
      code: 'Base Imponible = Importe Total / (1 + Tipo IVA)\nCuota IVA = Importe Total - Base Imponible',
    },
    {
      type: 'title',
      text: 'Tipos de IVA en España',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Es vital saber qué tipo aplicar a cada producto para no cometer fraudes fiscales ni pagar de más.',
    },
    {
      type: 'list',
      items: [
        '<strong>21% General:</strong> Ropa y calzado, electrónica y tecnología, electricidad y gas, servicios profesionales.',
        '<strong>10% Reducido:</strong> Alimentos procesados, agua de consumo humano, hostelería y restauración, transporte de viajeros, gafas graduadas.',
        '<strong>4% Superreducido:</strong> Pan común y harinas, leche, quesos y huevos, frutas y verduras, libros y periódicos, medicamentos.',
        '<strong>0% (medidas temporales):</strong> Algunos aceites y pastas han tenido reducciones temporales al 0% o 5% en medidas anti-inflación.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Consejo para el modelo 303:</strong> Asegúrate de guardar cada cálculo. La base imponible y la cuota de IVA que obtengas aquí son exactamente los campos que necesitas rellenar en tu declaración trimestral de IVA.',
    },
  ],
};
