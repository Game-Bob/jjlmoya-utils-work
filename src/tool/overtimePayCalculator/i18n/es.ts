import { bibliography } from "../bibliography";
import { createOvertimeContent } from "./content";

export const content = createOvertimeContent({
  locale: "es",
  slug: "calculadora-horas-extra",
  title: "Calculadora de horas extra",
  description:
    "Convierte tu tarifa, horas ordinarias y multiplicador en el bruto adicional estimado y compara varias reglas de pago.",
  ui: {
    eyebrow: "Tu jornada, convertida en dinero",
    intro: "Configura las reglas de pago que ya conoces",
    labelBasis: "El importe base es",
    optionHourly: "Tarifa por hora",
    optionPeriod: "Sueldo bruto del periodo",
    labelBaseAmount: "Importe base",
    labelRegularHours: "Horas ordinarias del periodo",
    labelOvertimeHours: "Horas extra",
    labelMultiplier: "Multiplicador de horas extra",
    multiplierHint: "Por ejemplo, 1,5 significa el 150% de la tarifa normal.",
    labelRegularPay: "Bruto ordinario",
    labelOvertimePay: "Bruto adicional",
    labelTotalGross: "Bruto total del periodo",
    labelPremium: "Prima adicional",
    labelEffectiveRate: "Tarifa media efectiva",
    labelScenarios: "Compara la regla",
    labelScenarioMultiplier: "Multiplicador",
    labelScenarioOvertime: "Bruto extra",
    labelScenarioTotal: "Total del periodo",
    labelDecision: "Decisión",
    decisionPositive:
      "Tus horas extra suman este importe antes de impuestos y deducciones.",
    decisionNeutral: "Introduce valores positivos para ver la comparación.",
    disclaimer:
      "Es una estimación en bruto. No calcula impuestos, cotizaciones, derechos legales ni las reglas de nómina de tu empresa. Usa el multiplicador y el importe de tu contrato, convenio o nómina.",
    hourlyUnit: "por hora",
    periodUnit: "por periodo",
    hoursUnit: "horas",
    currencyUnit: "€",
  },
  faq: [
    {
      question: "¿Cómo se calculan las horas extra?",
      answer:
        "La calculadora obtiene la tarifa horaria base, la multiplica por las horas extra y aplica el multiplicador que introduces. Después suma ese bruto adicional al sueldo ordinario del periodo.",
    },
    {
      question: "¿Qué significa un multiplicador de 1,5?",
      answer:
        "Un multiplicador de 1,5 significa que cada hora extra vale el 150% de la tarifa horaria base. La herramienta no decide si ese multiplicador es correcto según la ley o tu convenio.",
    },
    {
      question:
        "¿Puedo usar un sueldo mensual o semanal en vez de una tarifa horaria?",
      answer:
        "Sí. Elige sueldo bruto del periodo, introduce ese importe y añade las horas ordinarias del mismo periodo. La herramienta calcula una tarifa horaria equivalente para comparar.",
    },
    {
      question: "¿Es un cálculo de sueldo neto?",
      answer:
        "No. Los resultados son importes brutos antes de impuestos, cotizaciones y otras deducciones. La nómina real puede incluir reglas que no aparecen aquí.",
    },
    {
      question: "¿Por qué comparar varios multiplicadores?",
      answer:
        "La tabla permite detectar con rapidez una diferencia en una oferta, un registro horario o una nómina. Puedes comparar la regla que te han dado con supuestos cercanos sin preparar una hoja de cálculo.",
    },
  ],
  howTo: [
    {
      name: "Elige el importe base",
      text: "Selecciona tarifa por hora o sueldo bruto del periodo e introduce el importe que tienes.",
    },
    {
      name: "Añade las horas",
      text: "Introduce las horas ordinarias y las horas extra registradas en el mismo periodo.",
    },
    {
      name: "Configura el multiplicador",
      text: "Usa el multiplicador indicado en tu contrato, convenio colectivo o documento de nómina.",
    },
    {
      name: "Lee la decisión",
      text: "Revisa el bruto adicional, el total del periodo y los escenarios cercanos antes de aceptar o consultar la cifra.",
    },
  ],
  seo: [
    { type: "title", text: "Haz visibles tus horas extra", level: 2 },
    {
      type: "paragraph",
      html: "Es fácil perder la cuenta cuando el registro horario muestra horas, pero la nómina solo muestra un total. Esta calculadora separa el trabajo adicional: tarifa base, prima de horas extra y nuevo bruto del mismo periodo.",
    },
    {
      type: "paragraph",
      html: "Trae las cifras que ya tienes de una oferta, contrato, registro horario o nómina. No se sube ningún dato ni hace falta consultar una tabla pública. La cuenta se realiza en el navegador para comprobar un importe antes de responder a recursos humanos o negociar un proyecto.",
    },
    {
      type: "title",
      text: "Dos formas de describir tu sueldo normal",
      level: 2,
    },
    {
      type: "list",
      items: [
        "Tarifa por hora: introduce lo que cobras por una hora ordinaria.",
        "Sueldo del periodo: introduce el bruto normal y sus horas ordinarias. La herramienta obtiene la tarifa horaria equivalente.",
      ],
    },
    { type: "title", text: "Qué cambia con el multiplicador", level: 2 },
    {
      type: "paragraph",
      html: "Un multiplicador de 1 valora la hora extra igual que una hora normal. Un valor superior a 1 añade una prima. La tabla mantiene las horas y muestra cómo cambia el bruto con 1x, 1,25x, 1,5x y 2x.",
    },
    { type: "title", text: "El bruto no es el dinero neto", level: 2 },
    {
      type: "paragraph",
      html: "El resultado es deliberadamente bruto. Los impuestos, cotizaciones, límites, descansos compensatorios y derechos dependen del país y del acuerdo que te aplique. Usa el cálculo para comprobar la aritmética, no como resolución legal ni promesa de sueldo neto.",
    },
  ],
  bibliography,
});
