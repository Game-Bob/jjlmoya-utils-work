import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { InvoiceLateFeeCalculatorUI } from '../ui';

const slug = 'calculadora-recargo-factura';
const title = 'Calculadora de recargo por retraso de factura';
const description = 'Calcula un recargo sencillo a partir de una factura vencida, un periodo de gracia y el porcentaje acordado en tu contrato. Consulta los días cobrables, el recargo y el total en un desglose claro.';

const faq = [
  { question: '¿Cómo funciona el cálculo del recargo de una factura?', answer: 'La calculadora resta los días de gracia a los días naturales entre la fecha de vencimiento y la fecha de cálculo. Para porcentajes anuales o mensuales, prorratea el porcentaje acordado según los días cobrables. Un porcentaje único se aplica una vez cuando termina la gracia.' },
  { question: '¿Puedo usar un tipo legal de demora?', answer: 'Sí, si has comprobado el tipo y el contrato o la ley aplicable permite usarlo. Introdúcelo tú mismo. La herramienta no selecciona un país, no adivina un tipo legal y no decide si el recargo se puede exigir.' },
  { question: '¿Qué cambia el periodo de gracia?', answer: 'Los días de gracia se eliminan del tiempo posterior al vencimiento antes de que empiece el recargo. Si la factura sigue dentro de ese periodo, el recargo queda en cero y el resultado indica que continúa en gracia.' },
  { question: '¿El total incluye impuestos, gastos de cobro o interés compuesto?', answer: 'No. El resultado es el principal en la moneda elegida más el recargo sencillo de tus datos. Los cambios de moneda usan un factor fijo orientativo, no un tipo de cambio en tiempo real. No añade impuestos, costes fijos de cobro, gastos legales, interés compuesto ni historial de pagos.' },
];

const howTo = [
  { name: 'Introduce el importe de la factura', text: 'Añade el principal pendiente y selecciona la moneda de la factura. Si cambias de moneda después, el importe se convierte con el factor orientativo mostrado, no con una cotización de divisas en directo.' },
  { name: 'Configura las fechas', text: 'Elige la fecha contractual de vencimiento y la fecha hasta la que quieres comprobar la cuenta. La herramienta cuenta días naturales completos entre ambas.' },
  { name: 'Añade la gracia y el porcentaje', text: 'Indica los días de gracia y el porcentaje acordado para la factura. Elige si se aplica por año, por mes o como un único cargo.' },
  { name: 'Revisa el desglose', text: 'Comprueba los días desde el vencimiento, los días cobrables, el recargo y el total. Guarda el desglose junto a la factura y verifica el contrato antes de reclamar.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const applicationSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'BusinessApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'es' };

export const content: ToolLocaleContent<InvoiceLateFeeCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    eyebrow: 'FACTURA VENCIDA / DESGLOSE SENCILLO',
    intro: 'Convierte una fecha vencida en una reclamación clara.',
    sectionTerms: 'Configura las condiciones de la factura',
    labelAmount: 'Importe pendiente de la factura',
    labelCurrency: 'Moneda de la factura',
    currencyConversionHint: 'Cambiar de moneda convierte el importe con un factor fijo orientativo, no con un tipo de cambio en tiempo real.',
    currencyRateTemplate: '1 EUR ≈ {value} {currency}.',
    labelDueDate: 'Fecha contractual de vencimiento',
    labelCalculationDate: 'Calcular hasta',
    labelGraceDays: 'Periodo de gracia',
    labelRate: 'Porcentaje de recargo acordado',
    labelRatePeriod: 'El porcentaje se aplica',
    rateAnnual: 'Por año',
    rateMonthly: 'Por mes',
    rateOneTime: 'Una vez',
    sectionReceipt: 'Recibo de reclamación',
    labelDaysSinceDue: 'Días desde el vencimiento',
    labelChargedDays: 'Días cobrables',
    labelAppliedRate: 'Porcentaje aplicado',
    labelLateFee: 'Recargo por demora',
    labelTotalDue: 'Total a reclamar',
    statusNotDue: 'No está vencida',
    statusGrace: 'Sigue en periodo de gracia',
    statusOverdue: 'El recargo está activo',
    timelineDue: 'Fecha de vencimiento',
    timelineToday: 'Comprobado hasta',
    timelineGrace: 'días cobrables después de la gracia',
    noteDisclaimer: 'Estimación sencilla a partir de tus datos. Confirma el contrato, la jurisdicción, el tratamiento fiscal y los posibles costes fijos antes de reclamar.',
    buttonReset: 'Borrar condiciones guardadas',
    numberLocale: 'es-ES',
  },
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, applicationSchema],
  seo: [
    { type: 'title', text: 'Explica una factura vencida de forma sencilla', level: 2 },
    { type: 'paragraph', html: 'Una reclamación por impago es más fácil de revisar cuando el principal, las fechas, la gracia, el porcentaje y el recargo aparecen juntos. Esta calculadora convierte esas condiciones del contrato en un pequeño desglose tipo recibo.' },
    { type: 'card', title: 'La fórmula sencilla', html: '<p><strong>Días cobrables</strong> = días entre la fecha de vencimiento y la fecha de cálculo - días de gracia.</p><p><strong>Recargo</strong> = importe de la factura × porcentaje ÷ 100 × factor de tiempo. Los porcentajes anuales usan días cobrables ÷ 365, los mensuales usan días cobrables ÷ 30 y los únicos se aplican una vez después de la gracia.</p>' },
    { type: 'paragraph', html: 'El cálculo es deliberadamente explícito y no elige un tipo legal por ti. Un contrato puede usar un cargo fijo, un porcentaje anual o una convención de días diferente. La conversión de moneda es solo una ayuda orientativa basada en el factor seleccionado, no una cotización en tiempo real. Si el acuerdo dice otra cosa, revisa la cláusula y adapta el cálculo fuera de esta herramienta.' },
    { type: 'title', text: 'Revisa el resultado antes de reclamar', level: 2 },
    { type: 'code', code: 'Factura: 1.250 €\nDías hasta la comprobación: 38\nPeriodo de gracia: 5 días\nPorcentaje anual: 10 %\nDías cobrables: 33\nRecargo: 1.250 € × 0,10 × 33 / 365 = 11,30 €\nTotal: 1.261,30 €' },
    { type: 'list', items: ['Compara la fecha de vencimiento con el pedido, la factura o el contrato firmado.', 'Usa la fecha real en la que preparas la reclamación, no una fecha de pago imaginada.', 'Separa el principal y el recargo para que el destinatario pueda conciliar ambos importes.', 'Comprueba si los impuestos, los costes fijos de recuperación o los límites legales cambian lo que puedes reclamar.'] },
    { type: 'tip', html: '<strong>Consejo de documentación:</strong> guarda juntos la factura, la prueba de entrega o aceptación, la cláusula del contrato y este cálculo. La herramienta explica la aritmética, pero no demuestra que la deuda esté vencida o que el recargo sea exigible.' },
  ],
};
