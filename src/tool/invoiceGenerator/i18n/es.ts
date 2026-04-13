import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InvoiceGeneratorUI } from '../ui';

const slug = 'generador-facturas-pdf';
const title = 'Generador de Facturas Gratis para Freelancers';
const description =
  'Crea facturas profesionales online sin registrarte. Rellena tus datos, añade servicios, ajusta los impuestos y genera un PDF listo para imprimir en segundos.';

const faqData = [
  {
    question: '¿Qué información debe incluir una factura profesional?',
    answer:
      'Una factura válida debe incluir un número correlativo, la fecha de emisión, el nombre y datos fiscales del emisor y receptor, una lista detallada de servicios con cantidades y precios unitarios, los impuestos aplicables y las condiciones de pago.',
  },
  {
    question: '¿Necesito cobrar impuestos en mis facturas?',
    answer:
      'Depende del país y tipo de servicio. En EE. UU., la mayoría de los servicios profesionales como consultoría, diseño o programación están exentos de sales tax en la mayoría de estados. Consulta con un asesor fiscal para tu situación concreta.',
  },
  {
    question: '¿Qué es la retención fiscal en una factura?',
    answer:
      'La retención (backup withholding en EE. UU.) es un porcentaje que el cliente deduce de tu pago y remite a la autoridad fiscal en tu nombre. En EE. UU. la tasa estándar es del 24% y se aplica cuando no has proporcionado un TIN válido o cuando la autoridad fiscal lo requiere.',
  },
  {
    question: '¿Debo usar mi SSN o EIN en las facturas?',
    answer:
      'Por seguridad, es preferible usar un EIN (Employer Identification Number) en lugar de tu número de la Seguridad Social. El EIN es gratuito y se solicita en irs.gov. Los clientes que te paguen 600$ o más al año necesitarán tu número fiscal para el formulario 1099-NEC.',
  },
];

const howToData = [
  {
    name: 'Introduce tus datos de empresa',
    text: 'Haz clic en "My Company LLC" y sustitúyelo por el nombre real de tu empresa, EIN o identificador fiscal, dirección y email de contacto.',
  },
  {
    name: 'Rellena los datos del cliente',
    text: 'En la sección "Bill To:", haz clic en cada campo para introducir el nombre, identificador fiscal, dirección y email del cliente.',
  },
  {
    name: 'Añade servicios y precios',
    text: 'Describe cada servicio en la tabla, indica la cantidad y el precio unitario. Usa "Add Row" para añadir más conceptos.',
  },
  {
    name: 'Revisa los totales y genera el PDF',
    text: 'Comprueba que todos los importes son correctos, ajusta el porcentaje de impuesto si aplica, y haz clic en "Generate PDF" para imprimir o guardar.',
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

export const content: ToolLocaleContent<InvoiceGeneratorUI> = {
  slug,
  title,
  description,
  ui: {
    labelEditor: 'Editor Interactivo',
    labelEditHint: 'Haz clic en cualquier texto del documento para editarlo.',
    btnGenerate: 'Generar PDF',
    labelFrom: 'De:',
    labelTo: 'Facturar a:',
    labelDesc: 'Descripción del Servicio o Producto',
    labelQty: 'Cant.',
    labelPrice: 'Precio',
    labelAmount: 'Importe',
    btnAddRow: 'Añadir Fila',
    labelSubtotal: 'Subtotal:',
    labelTax: 'Impuesto',
    labelWithholding: 'Retención',
    labelTotal: 'Total:',
    defaultInvoiceTitle: 'FACTURA',
    defaultInvoiceNum: 'FAC-24-001',
    defaultCompanyName: 'Mi Empresa LLC',
    defaultCompanyId: 'EIN 12-3456789',
    defaultAddress: '123 Calle Principal',
    defaultCity: 'Miami, FL 33101',
    defaultEmail: 'admin@miempresa.com',
    placeholderDesc: 'Añadir descripción...',
    placeholderNotes: 'Ej: El pago debe realizarse en un plazo de 30 días mediante transferencia bancaria...',
    labelNotes: 'Notas / Condiciones de Pago',
    currencySymbol: '$',
    defaultTaxRate: '0',
    defaultRetRate: '0',
  },
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Fuentes',
  bibliography: [
    { name: 'IRS Publication 583 Starting a Business and Keeping Records', url: 'https://www.irs.gov/pub/irs-pdf/p583.pdf' },
    { name: 'IRS Self-Employed Individuals Tax Center', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Elementos Esenciales de una Factura Profesional',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Una factura válida es mucho más que una solicitud de pago: es un documento legal que te protege a ti y a tu cliente. Omitir un campo obligatorio puede retrasar el cobro, generar problemas en la declaración de impuestos o incluso hacer que la factura no tenga validez. Para freelancers y autónomos que trabajan con clientes estadounidenses, es fundamental hacerlo bien desde el principio.',
    },
    {
      type: 'card',
      title: 'Campos Obligatorios en una Factura para EE. UU.',
      html: '<ul><li><strong>Número de factura:</strong> Debe ser correlativo y sin saltos (ej. INV-2024-001, INV-2024-002).</li><li><strong>Fecha de emisión:</strong> La fecha en que emites la factura, no la fecha del servicio.</li><li><strong>Datos del emisor y receptor:</strong> Nombre completo, EIN o Tax ID y dirección postal de ambas partes.</li><li><strong>Servicios detallados:</strong> Descripción, cantidad y precio unitario de cada concepto.</li><li><strong>Condiciones de pago:</strong> Fecha de vencimiento, métodos de pago aceptados y política de recargos por mora.</li></ul>',
    },
    {
      type: 'title',
      text: 'Sales Tax y Retención Fiscal en Facturas de Freelance',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dos variables fiscales afectan el importe final de tu factura. El <strong>Sales Tax</strong> se cobra al cliente y se remite al estado: suma al coste del cliente. La <strong>retención fiscal</strong> (backup withholding) la descuenta el cliente de tu pago y la ingresa en el IRS: reduce lo que tú recibes. La mayoría de freelancers que prestan servicios profesionales no cobran sales tax, pero verifica siempre con el Department of Revenue de tu estado.',
    },
    {
      type: 'code',
      code: 'Servicios prestados         $1,000.00\n+ Sales Tax (6%)               $60.00\n- Retención (24%)            -$240.00\n-----------------------------------------\nLíquido recibido              $820.00',
    },
    {
      type: 'tip',
      html: '<strong>Guarda cada factura como PDF:</strong> El IRS recomienda conservar los registros de negocio durante al menos 3 años (hasta 7 para impuestos de empleo). Usa el botón "Generate PDF" tras cada factura y guárdalas en una carpeta organizada por año y cliente.',
    },
  ],
};
