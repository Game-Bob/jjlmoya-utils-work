import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MeetingCostCalculatorUI } from '../ui';

const slug = 'calculadora-coste-reunion';
const title = 'Calculadora Coste Reunion Tiempo Real Ticker';
const description =
  'Visualiza en tiempo real cuanto cuesta cada segundo de tus reuniones. Introduce el numero de asistentes y el salario medio para ver el contador subir al instante.';

const faqData = [
  {
    question: '¿Por qué es útil medir el coste de una reunión?',
    answer:
      'Medir el coste pone en perspectiva el valor del tiempo de los empleados. Ayuda a reducir reuniones innecesarias, fomenta la puntualidad y asegura que los temas tratados justifiquen la inversión económica de la empresa.',
  },
  {
    question: '¿Cómo se calcula el coste en tiempo real?',
    answer:
      'El sistema suma los salarios brutos estimados de todos los asistentes y calcula una tasa de gasto por segundo. El ticker se actualiza cada fotograma para mostrar el coste acumulado en directo.',
  },
  {
    question: '¿Qué costes indirectos no incluye esta herramienta?',
    answer:
      'Esta calculadora se centra en el coste salarial directo. No incluye el coste de oportunidad (lo que los empleados dejan de producir), ni gastos fijos como luz, alquiler de oficina o licencias de software.',
  },
  {
    question: '¿Cómo puedo reducir el coste de mis reuniones?',
    answer:
      'Define una agenda clara, limita el número de asistentes a los imprescindibles, establece una duración máxima y evalúa si el objetivo puede alcanzarse mediante un mensaje asíncrono o un correo electrónico.',
  },
];

const howToData = [
  {
    name: 'Indicar número de asistentes',
    text: 'Escribe cuántas personas están participando en la reunión actual.',
  },
  {
    name: 'Ajustar el salario medio',
    text: 'Introduce una estimación del salario bruto anual promedio o la tarifa por hora de los asistentes.',
  },
  {
    name: 'Iniciar el cronómetro',
    text: 'Pulsa el botón de inicio en cuanto comience la reunión para ver cómo el contador de coste empieza a subir.',
  },
  {
    name: 'Finalizar y reflexionar',
    text: 'Al terminar, detén el ticker. Observa el coste total y evalúa si los objetivos alcanzados han valido la inversión.',
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

export const content: ToolLocaleContent<MeetingCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelAccumulated: 'Coste Acumulado',
    labelAttendees: 'Asistentes',
    labelSalary: 'Salario Promedio',
    optAnnual: 'Anual Bruto',
    optHourly: 'Por Hora',
    btnStart: 'Comenzar Reunión',
    btnPause: 'Pausar',
    btnResume: 'Reanudar',
    btnReset: 'Reiniciar',
    currencySymbol: '€',
    defaultSalary: '45000',
    numberLocale: 'es-ES',
  },
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Fuentes',
  bibliography: [
    { name: 'Stop the Meeting Madness (Harvard Business Review)', url: 'https://hbr.org/2017/07/stop-the-meeting-madness' },
    { name: 'Time Wasting at Work (Atlassian)', url: 'https://www.atlassian.com/time-wasting-at-work-infographic' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '¿Por qué visualizar el coste de una reunión?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El tiempo es el recurso más caro y menos renovable de cualquier organización. Esta herramienta no busca desincentivar la colaboración, sino fomentar la <strong>consciencia productiva</strong>. Cuando vemos cómo se quema dinero en tiempo real, somos más propensos a ser puntuales, concisos y eficientes.',
    },
    {
      type: 'card',
      title: 'La Matemática del Coste Oculto',
      html: '<p>Calculamos el coste basándonos en el salario bruto anual o la tarifa por hora. Para el cálculo anual usamos un estándar de <strong>1.750 horas laborables anuales</strong> (descontando vacaciones y festivos) para convertir el salario a coste por hora.</p><p>La fórmula del burn rate es:<br><code>(Tarifa Hora × Asistentes) / 3600</code><br>Esto nos da el coste exacto por segundo que ves en el contador.</p>',
    },
    {
      type: 'code',
      code: 'Salario anual: 45.000 €\nTarifa hora: 45.000 / 1.750 = 25,71 €/h\nBurn rate (4 personas): (25,71 × 4) / 3600 = 0,029 €/seg\nCoste reunión 1 hora: 102,86 €',
    },
    {
      type: 'title',
      text: 'Consejos para Reuniones más Eficientes',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>La Regla de las 2 Pizzas:</strong> Popularizada por Jeff Bezos: si dos pizzas no son suficientes para alimentar a todo el equipo de la reunión, hay demasiada gente.',
        '<strong>Sin Agenda, sin Reunión:</strong> Nunca aceptes una reunión sin una agenda clara y objetivos definidos. Ponerse al dia suele ser un eufemismo para perder el tiempo.',
        '<strong>Reuniones de pie:</strong> Mantén las reuniones diarias de pie. La incomodidad física fomenta la brevedad y va directa al grano.',
        '<strong>Ley de Parkinson:</strong> El trabajo se expande hasta llenar el tiempo disponible. Fija bloques de 25 o 50 minutos en lugar de la hora completa.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Usa el ticker como recordatorio visual:</strong> Comparte tu pantalla con el contador de coste visible durante las reuniones de equipo. El importe en pantalla crea un incentivo natural para mantenerse en el tema y terminar a tiempo.',
    },
  ],
};
