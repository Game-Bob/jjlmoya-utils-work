import type {
  WithContext,
  FAQPage,
  HowTo,
  SoftwareApplication,
} from "schema-dts";
import type {
  KnownLocale,
  SEOSection,
  ToolLocaleContent,
} from "../../../types";
import { bibliography } from "../bibliography";
import type { SalarySacrificeCalculatorUI } from "../ui";
import { getDefaultCurrency } from "../../../currency";

type LocaleData = {
  title: string;
  description: string;
  slug: string;
  ui: SalarySacrificeCalculatorUI;
  faq: { question: string; answer: string }[];
  howTo: { name: string; text: string }[];
  seo: SEOSection[];
};

type SeoCopy = {
  heading: string;
  intro: string;
  methodHeading: string;
  method: string;
  readHeading: string;
  read: string;
  bullets: string[];
  tip: string;
};

const createSeo = (copy: SeoCopy): SEOSection[] => [
  { type: "title", text: copy.heading, level: 2 },
  { type: "paragraph", html: copy.intro },
  {
    type: "paragraph",
    html: copy.method,
  },
  { type: "title", text: copy.methodHeading, level: 2 },
  { type: "list", items: copy.bullets },
  { type: "card", title: copy.methodHeading, html: copy.method },
  { type: "title", text: copy.readHeading, level: 2 },
  { type: "paragraph", html: copy.read },
  { type: "tip", html: copy.tip },
];

const data: Record<Exclude<KnownLocale, "en">, LocaleData> = {
  de: {
    title: "Rechner für Nettogehalt mit Gehaltsumwandlung",
    description:
      "Vergleichen Sie Ihr geschätztes Nettogehalt vor und nach einer Gehaltsumwandlung mit den Brutto- und Abzugswerten aus Ihrem Angebot.",
    slug: "rechner-nettogehalt-gehaltsumwandlung",
    ui: {
      eyebrow: "Die Kosten des Tauschs sichtbar machen",
      intro: "Testen Sie die Annahmen aus Ihrer Gehaltsabrechnung",
      labelCurrency: "Währung",
      currencyHint:
        "Näherungsweise Umrechnung mit festen lokalen Faktoren, kein Live-Wechselkurs.",
      labelGross: "Jährliches Bruttogehalt",
      grossHint: "Vor Steuern und Arbeitnehmerabzügen",
      labelContribution: "Betrag der Gehaltsumwandlung",
      contributionHint: "Verwenden Sie den Wert aus Ihrem Angebot oder Plan",
      labelBasis: "Dieser Betrag gilt",
      basisAnnual: "Pro Jahr",
      basisPerPay: "Pro Zahlungszeitraum",
      labelPayPeriods: "Zahlungszeiträume",
      pay12: "12 Zahlungen",
      pay14: "14 Zahlungen",
      labelIncomeTax: "Effektiver Einkommensteuersatz",
      labelPayrollDeduction: "Sonstige Abzüge",
      ratesHint:
        "Verwenden Sie Ihre geschätzten Sätze; sie werden nicht automatisch gesucht.",
      btnCalculate: "Nettogehalt vergleichen",
      labelCashDropPerPay: "Geschätzter Nettoverlust pro Zahlung",
      labelDecision: "Was bedeutet das?",
      decision:
        "Sie geben {cost} Nettogehalt für {benefit} jährlichen Sachbezug auf.",
      decisionZero:
        "Fügen Sie einen Betrag hinzu, um die beiden Szenarien zu vergleichen.",
      labelCashBefore: "Netto vor der Umwandlung",
      labelCashAfter: "Netto nach der Umwandlung",
      labelContributionPerPay: "Sachbezug pro Zahlung",
      labelSavingsPerPay: "Steuer- und Abzugsersparnis pro Zahlung",
      labelAnnualContribution: "Jährlicher Sachbezug",
      labelIncomeTaxSavings: "Geschätzte Einkommensteuerersparnis",
      labelPayrollSavings: "Geschätzte Ersparnis bei Abzügen",
      labelEffectiveCost: "Effektive Nettokosten",
      labelFlow: "Jährlicher Geldfluss",
      flowBefore: "Netto vorher",
      flowAfter: "Netto nachher",
      flowBenefit: "Sachbezug",
      labelAnnualView: "Jahresansicht",
      labelAssumptions: "Annahmen",
      errorGross: "Geben Sie ein Bruttogehalt größer als null ein.",
      errorContribution:
        "Der Betrag muss null oder kleiner als das Bruttogehalt sein.",
      errorRates:
        "Verwenden Sie Sätze von 0 bis 100 %; zusammen müssen sie unter 100 % liegen.",
      errorPayPeriods: "Wählen Sie 12 oder 14 Zahlungszeiträume.",
      errorBasis: "Wählen Sie, ob der Betrag jährlich oder pro Zahlung gilt.",
      disclaimer:
        "Dies ist eine transparente Schätzung, keine Gehaltsabrechnung oder Steuerentscheidung. Währungswechsel verwenden feste Näherungsfaktoren, keine Live-Wechselkurse. Die tatsächliche Wirkung hängt von Land, Vertrag und Leistungsplan ab; bestätigen Sie die Bedingungen mit der Lohnbuchhaltung oder dem Anbieter.",
      annualUnit: "pro Jahr",
      perPayUnit: "pro Zahlung",
      percentUnit: "%",
    },
    faq: [
      {
        question: "Was schätzt dieser Rechner?",
        answer:
          "Er vergleicht das geschätzte Netto vor und nach der Entnahme eines Betrags aus dem Bruttogehalt. Sie geben die effektiven Steuer- und Abzugssätze selbst ein, damit jede Annahme sichtbar bleibt.",
      },
      {
        question: "Wie viel Netto verliere ich?",
        answer:
          "Der Rechner wendet Ihre Sätze auf beide Szenarien an und zeigt den Unterschied pro Zahlung und pro Jahr. Der Wert des Sachbezugs wird getrennt ausgewiesen.",
      },
      {
        question: "Soll ich den Betrag jährlich oder pro Zahlung eingeben?",
        answer:
          "Wählen Sie die Darstellung, die zu Ihrem Angebot passt. Ein Jahresbetrag wird auf 12 oder 14 Zahlungen verteilt; ein Zahlungsbetrag wird entsprechend hochgerechnet.",
      },
      {
        question: "Berechnet das meine exakte Steuer?",
        answer:
          "Nein. Steuer, Sozialabgaben, Freibeträge und Auswirkungen auf weitere Leistungen hängen vom Land und vom Vertrag ab. Prüfen Sie das Endergebnis mit der Lohnbuchhaltung.",
      },
      {
        question: "Was bedeutet effektive Nettokosten?",
        answer:
          "Das sind die geschätzten Nettoeinnahmen, auf die Sie nach den eingegebenen Steuer- und Abzugsersparnissen verzichten. Es ist nicht automatisch der Marktwert der Leistung.",
      },
    ],
    howTo: [
      {
        name: "Währung auswählen",
        text: "Wählen Sie die Währung, in der Sie Ihre Werte vergleichen möchten. Die Umrechnung ist eine feste Näherung.",
      },
      {
        name: "Brutto und Umwandlung eingeben",
        text: "Geben Sie das jährliche Bruttogehalt und den Betrag aus Ihrem Angebot ein.",
      },
      {
        name: "Zeiträume und Sätze festlegen",
        text: "Wählen Sie 12 oder 14 Zahlungen und tragen Sie Ihre effektiven Steuer- und Abzugssätze ein.",
      },
      {
        name: "Geldfluss prüfen",
        text: "Vergleichen Sie Nettoverlust, Sachbezug, Ersparnis und effektive Kosten, bevor Sie die Vereinbarung bestätigen.",
      },
    ],
    seo: createSeo({
      heading: "Die Nettokosten einer Gehaltsumwandlung prüfen",
      intro:
        "Ein Sachbezug kann auf dem Papier attraktiv aussehen. Die entscheidende Frage ist, wie viel Geld auf jeder Abrechnung tatsächlich fehlt. Dieser Rechner macht den Tausch zwischen verfügbarem Netto und jährlichem Vorteil sichtbar.",
      methodHeading: "Was der Vergleich verwendet",
      method:
        "Vorher = Brutto minus die von Ihnen eingegebenen Steuer- und Abzugssätze. Nachher = dieselben Sätze auf das Brutto nach der Umwandlung. Die Differenz zeigt die geschätzten Nettokosten des Vorteils.",
      readHeading: "Vor der Zusage prüfen",
      read: "Die Währungsumrechnung ist nur eine lokale Näherung mit festen Faktoren und nicht als aktueller Wechselkurs gedacht. Prüfen Sie außerdem pensionierbares Einkommen, Boni, Überstunden, gesetzliche Leistungen und Grenzen im Vertrag.",
      bullets: [
        "Geben Sie die Währung Ihres Angebots oder Ihrer persönlichen Planung an.",
        "Verwenden Sie die effektiven Sätze aus Ihrer Abrechnung oder dem Plan.",
        "Vergleichen Sie den Nettoverlust mit dem tatsächlichen Wert des Vorteils.",
      ],
      tip: "Wenn die Zahlen nicht zu Ihrem Angebot passen, fragen Sie nach der Berechnung der Lohnbuchhaltung und nach den Auswirkungen auf weitere Leistungen.",
    }),
  },
  es: {
    title: "Calculadora de sueldo neto con retribución flexible",
    description:
      "Compara tu sueldo neto estimado antes y después de una retribución flexible usando el bruto, la aportación y los porcentajes de tu nómina.",
    slug: "calculadora-sueldo-neto-retribucion-flexible",
    ui: {
      eyebrow: "Mide el coste real del cambio",
      intro: "Prueba las hipótesis de tu nómina",
      labelCurrency: "Moneda",
      currencyHint:
        "Conversión aproximada con factores locales fijos, no un tipo de cambio en tiempo real.",
      labelGross: "Sueldo bruto anual",
      grossHint: "Antes de impuestos y deducciones del trabajador",
      labelContribution: "Importe de retribución flexible",
      contributionHint: "Usa la cifra de tu oferta o plan",
      labelBasis: "Ese importe es",
      basisAnnual: "Al año",
      basisPerPay: "Por paga",
      labelPayPeriods: "Pagas",
      pay12: "12 pagas",
      pay14: "14 pagas",
      labelIncomeTax: "Tipo efectivo de IRPF",
      labelPayrollDeduction: "Otras deducciones de nómina",
      ratesHint:
        "Usa tus porcentajes estimados; no se consultan automáticamente.",
      btnCalculate: "Comparar sueldo neto",
      labelCashDropPerPay: "Reducción neta estimada por paga",
      labelDecision: "Qué significa",
      decision:
        "Renuncias a {cost} de sueldo neto a cambio de {benefit} de beneficio anual.",
      decisionZero: "Añade una aportación para comparar los dos escenarios.",
      labelCashBefore: "Neto antes de la retribución",
      labelCashAfter: "Neto después de la retribución",
      labelContributionPerPay: "Beneficio por paga",
      labelSavingsPerPay: "Ahorro de impuestos y deducciones por paga",
      labelAnnualContribution: "Beneficio anual",
      labelIncomeTaxSavings: "Ahorro estimado de IRPF",
      labelPayrollSavings: "Ahorro estimado en deducciones",
      labelEffectiveCost: "Coste neto efectivo",
      labelFlow: "Flujo de dinero anual",
      flowBefore: "Neto antes",
      flowAfter: "Neto después",
      flowBenefit: "Beneficio",
      labelAnnualView: "Vista anual",
      labelAssumptions: "Supuestos",
      errorGross: "Introduce un sueldo bruto mayor que cero.",
      errorContribution:
        "La aportación debe ser cero o menor que el sueldo bruto.",
      errorRates: "Usa porcentajes de 0 a 100 % y una suma inferior al 100 %.",
      errorPayPeriods: "Elige 12 o 14 pagas.",
      errorBasis: "Indica si la aportación es anual o por paga.",
      disclaimer:
        "Es una estimación transparente, no una nómina ni una resolución fiscal. Los cambios de moneda usan factores fijos aproximados, no tipos de cambio en tiempo real. La retribución flexible puede afectar impuestos, cotizaciones y prestaciones según el país, el plan y el contrato; confirma las condiciones con nóminas o el proveedor.",
      annualUnit: "al año",
      perPayUnit: "por paga",
      percentUnit: "%",
    },
    faq: [
      {
        question: "¿Qué estima esta calculadora?",
        answer:
          "Compara el sueldo neto estimado antes y después de descontar una aportación del bruto. Tú introduces los tipos efectivos de impuestos y deducciones para que el escenario sea transparente.",
      },
      {
        question: "¿Cuánto sueldo neto voy a perder?",
        answer:
          "Aplica tus porcentajes a las dos situaciones y muestra la diferencia por paga y al año. El valor del beneficio aparece separado para compararlo con el coste en efectivo.",
      },
      {
        question: "¿Introduzco la aportación anual o por paga?",
        answer:
          "Elige la opción que coincida con tu oferta. Una cantidad anual se reparte entre 12 o 14 pagas; una cantidad por paga se multiplica por el número elegido.",
      },
      {
        question: "¿Calcula mi IRPF exacto?",
        answer:
          "No. El tratamiento fiscal, las cotizaciones, los límites y el efecto sobre otras prestaciones dependen del país y del contrato. Confirma la cifra definitiva con nóminas.",
      },
      {
        question: "¿Qué es el coste neto efectivo?",
        answer:
          "Es la reducción estimada de sueldo neto después del ahorro de impuestos y deducciones del escenario. No determina por sí solo el valor de mercado del beneficio.",
      },
    ],
    howTo: [
      {
        name: "Elige la moneda",
        text: "Selecciona la moneda en la que quieres comparar tus cifras. El cambio usa una equivalencia fija aproximada.",
      },
      {
        name: "Introduce bruto y aportación",
        text: "Añade tu sueldo bruto anual y la cantidad indicada en la oferta o el plan.",
      },
      {
        name: "Configura pagas y porcentajes",
        text: "Elige 12 o 14 pagas e introduce tus tipos efectivos de IRPF y otras deducciones.",
      },
      {
        name: "Interpreta el flujo",
        text: "Compara la pérdida neta, el beneficio, el ahorro y el coste efectivo antes de aceptar el acuerdo.",
      },
    ],
    seo: createSeo({
      heading: "Comprueba el coste neto de la retribución flexible",
      intro:
        "Una aportación a un plan de pensiones, transporte o seguro puede parecer sencilla hasta que miras la nómina. La pregunta útil es cuánto dinero dejarás de cobrar en cada paga. Esta calculadora separa el efectivo que pierdes del valor anual que recibes.",
      methodHeading: "Qué compara el cálculo",
      method:
        "Antes = bruto menos los tipos efectivos de IRPF y deducciones que introduces. Después = esos mismos tipos aplicados al bruto tras restar la aportación. La diferencia es el coste neto estimado del beneficio.",
      readHeading: "Qué revisar antes de firmar",
      read: "La moneda solo se convierte con factores locales fijos y aproximados; no es una cotización actual. Revisa también salario pensionable, bonus, horas extra, vacaciones, prestaciones y umbrales que pueda modificar el acuerdo.",
      bullets: [
        "Selecciona la moneda que necesites para tu comparación.",
        "Usa porcentajes efectivos de tu nómina o del documento del plan.",
        "Compara el coste neto con el valor real que tiene el beneficio para ti.",
      ],
      tip: "Si el resultado no coincide con la oferta, pide a recursos humanos el desglose y pregunta si cambia tu base de cotización o tus prestaciones.",
    }),
  },
  fr: {
    title: "Calculateur de salaire net avec conversion salariale",
    description:
      "Comparez votre salaire net estimé avant et après une conversion salariale avec le brut, la contribution et les taux de votre fiche de paie.",
    slug: "calculateur-salaire-net-conversion-salariale",
    ui: {
      eyebrow: "Mesurez le coût réel de l'échange",
      intro: "Testez les hypothèses de votre fiche de paie",
      labelCurrency: "Devise",
      currencyHint:
        "Conversion approximative avec des facteurs locaux fixes, pas un taux en temps réel.",
      labelGross: "Salaire brut annuel",
      grossHint: "Avant impôts et retenues salariales",
      labelContribution: "Montant de la conversion salariale",
      contributionHint: "Utilisez le montant de votre offre ou de votre plan",
      labelBasis: "Ce montant est",
      basisAnnual: "Par an",
      basisPerPay: "Par paie",
      labelPayPeriods: "Paies",
      pay12: "12 paies",
      pay14: "14 paies",
      labelIncomeTax: "Taux effectif d'impôt",
      labelPayrollDeduction: "Autres retenues salariales",
      ratesHint:
        "Utilisez vos taux estimés ; ils ne sont pas recherchés automatiquement.",
      btnCalculate: "Comparer le salaire net",
      labelCashDropPerPay: "Baisse nette estimée par paie",
      labelDecision: "Ce que cela signifie",
      decision:
        "Vous renoncez à {cost} de salaire net pour {benefit} d'avantage annuel.",
      decisionZero:
        "Ajoutez une contribution pour comparer les deux scénarios.",
      labelCashBefore: "Net avant conversion",
      labelCashAfter: "Net après conversion",
      labelContributionPerPay: "Avantage par paie",
      labelSavingsPerPay: "Économie d'impôt et de retenues par paie",
      labelAnnualContribution: "Avantage annuel",
      labelIncomeTaxSavings: "Économie d'impôt estimée",
      labelPayrollSavings: "Économie estimée sur les retenues",
      labelEffectiveCost: "Coût net effectif",
      labelFlow: "Flux financier annuel",
      flowBefore: "Net avant",
      flowAfter: "Net après",
      flowBenefit: "Avantage",
      labelAnnualView: "Vue annuelle",
      labelAssumptions: "Hypothèses",
      errorGross: "Saisissez un salaire brut supérieur à zéro.",
      errorContribution:
        "La contribution doit être nulle ou inférieure au salaire brut.",
      errorRates:
        "Utilisez des taux de 0 à 100 %, dont la somme reste sous 100 %.",
      errorPayPeriods: "Choisissez 12 ou 14 paies.",
      errorBasis: "Indiquez si la contribution est annuelle ou par paie.",
      disclaimer:
        "Il s'agit d'une estimation transparente, pas d'une fiche de paie ni d'une décision fiscale. Les changements de devise utilisent des facteurs fixes approximatifs, pas des taux en temps réel. L'effet dépend du pays, du plan et du contrat ; confirmez les conditions avec la paie ou le fournisseur.",
      annualUnit: "par an",
      perPayUnit: "par paie",
      percentUnit: "%",
    },
    faq: [
      {
        question: "Que donne ce calculateur ?",
        answer:
          "Il compare le salaire net estimé avant et après le retrait d'une contribution du brut. Vous fournissez les taux effectifs d'impôt et de retenues afin de garder les hypothèses visibles.",
      },
      {
        question: "Quelle baisse de salaire net dois-je prévoir ?",
        answer:
          "Vos taux sont appliqués aux deux scénarios et la différence est affichée par paie et par an. La valeur de l'avantage reste séparée du coût en espèces.",
      },
      {
        question: "Dois-je saisir un montant annuel ou par paie ?",
        answer:
          "Choisissez le format de votre offre. Un montant annuel est réparti sur 12 ou 14 paies ; un montant par paie est multiplié par le nombre choisi.",
      },
      {
        question: "Le calcul donne-t-il mon impôt exact ?",
        answer:
          "Non. Impôts, cotisations, plafonds et avantages liés au contrat varient selon le pays et le dispositif. Vérifiez le chiffre final avec votre service de paie.",
      },
      {
        question: "Que signifie le coût net effectif ?",
        answer:
          "C'est la baisse de salaire net estimée après les économies d'impôts et de retenues du scénario. Ce n'est pas automatiquement le prix de marché de l'avantage.",
      },
    ],
    howTo: [
      {
        name: "Choisir la devise",
        text: "Sélectionnez la devise dans laquelle vous souhaitez comparer vos montants. La conversion est une équivalence fixe approximative.",
      },
      {
        name: "Saisir le brut et la contribution",
        text: "Indiquez le salaire brut annuel et le montant indiqué dans votre offre ou votre plan.",
      },
      {
        name: "Régler les paies et les taux",
        text: "Choisissez 12 ou 14 paies, puis saisissez vos taux effectifs d'impôt et de retenues.",
      },
      {
        name: "Lire le flux",
        text: "Comparez la baisse nette, l'avantage, les économies et le coût effectif avant de valider l'accord.",
      },
    ],
    seo: createSeo({
      heading: "Vérifier le coût net d'une conversion salariale",
      intro:
        "Un avantage en nature peut sembler avantageux jusqu'à l'arrivée de la fiche de paie. La question pratique est de savoir combien d'argent disparaît à chaque paie. Ce calculateur sépare le salaire net abandonné de la valeur annuelle de l'avantage.",
      methodHeading: "Ce que compare le calcul",
      method:
        "Avant = brut moins les taux d'impôt et de retenues saisis. Après = ces mêmes taux appliqués au brut après la contribution. La différence correspond au coût net estimé de l'avantage.",
      readHeading: "À vérifier avant de signer",
      read: "La devise est convertie avec des facteurs locaux fixes et approximatifs ; ce n'est pas une cotation actuelle. Vérifiez aussi le salaire de référence, les primes, les heures supplémentaires, les congés et les seuils concernés.",
      bullets: [
        "Choisissez la devise utile à votre comparaison.",
        "Utilisez les taux effectifs de votre fiche de paie ou du plan.",
        "Comparez le coût net avec la valeur concrète de l'avantage.",
      ],
      tip: "Si le résultat diffère de l'offre, demandez le détail à la paie et vérifiez si l'accord modifie les cotisations ou les droits liés au salaire.",
    }),
  },
  it: {
    title: "Calcolatore dello stipendio netto con conversione salariale",
    description:
      "Confronta lo stipendio netto stimato prima e dopo una conversione salariale usando lordo, contributo e percentuali della tua busta paga.",
    slug: "calcolatore-stipendio-netto-conversione-salariale",
    ui: {
      eyebrow: "Misura il costo reale dello scambio",
      intro: "Prova le ipotesi della tua busta paga",
      labelCurrency: "Valuta",
      currencyHint:
        "Conversione approssimativa con fattori locali fissi, non un cambio in tempo reale.",
      labelGross: "Stipendio lordo annuo",
      grossHint: "Prima di imposte e trattenute del dipendente",
      labelContribution: "Importo della conversione salariale",
      contributionHint: "Usa la cifra della tua offerta o del piano",
      labelBasis: "Questo importo è",
      basisAnnual: "Annuale",
      basisPerPay: "Per busta paga",
      labelPayPeriods: "Buste paga",
      pay12: "12 paghe",
      pay14: "14 paghe",
      labelIncomeTax: "Aliquota effettiva d'imposta",
      labelPayrollDeduction: "Altre trattenute in busta paga",
      ratesHint:
        "Usa le tue percentuali stimate; non vengono cercate automaticamente.",
      btnCalculate: "Confronta lo stipendio netto",
      labelCashDropPerPay: "Riduzione netta stimata per busta paga",
      labelDecision: "Cosa significa",
      decision: "Rinunci a {cost} di netto per {benefit} di beneficio annuale.",
      decisionZero: "Aggiungi un contributo per confrontare i due scenari.",
      labelCashBefore: "Netto prima della conversione",
      labelCashAfter: "Netto dopo la conversione",
      labelContributionPerPay: "Beneficio per busta paga",
      labelSavingsPerPay: "Risparmio di imposte e trattenute per busta paga",
      labelAnnualContribution: "Beneficio annuale",
      labelIncomeTaxSavings: "Risparmio d'imposta stimato",
      labelPayrollSavings: "Risparmio stimato sulle trattenute",
      labelEffectiveCost: "Costo netto effettivo",
      labelFlow: "Flusso di denaro annuale",
      flowBefore: "Netto prima",
      flowAfter: "Netto dopo",
      flowBenefit: "Beneficio",
      labelAnnualView: "Vista annuale",
      labelAssumptions: "Ipotesi",
      errorGross: "Inserisci uno stipendio lordo maggiore di zero.",
      errorContribution:
        "Il contributo deve essere zero o inferiore allo stipendio lordo.",
      errorRates:
        "Usa percentuali da 0 a 100%, con una somma inferiore al 100%.",
      errorPayPeriods: "Scegli 12 o 14 buste paga.",
      errorBasis: "Indica se il contributo è annuale o per busta paga.",
      disclaimer:
        "È una stima trasparente, non una busta paga né un parere fiscale. I cambi di valuta usano fattori fissi approssimativi, non tassi in tempo reale. L'effetto varia in base a Paese, piano e contratto; conferma le condizioni con l'ufficio paghe o il fornitore.",
      annualUnit: "all'anno",
      perPayUnit: "per busta paga",
      percentUnit: "%",
    },
    faq: [
      {
        question: "Cosa stima questo calcolatore?",
        answer:
          "Confronta il netto stimato prima e dopo aver sottratto un contributo dal lordo. Inserisci tu le aliquote effettive, così le ipotesi restano trasparenti.",
      },
      {
        question: "Quanto netto perderò?",
        answer:
          "Applica le percentuali ai due scenari e mostra la differenza per busta paga e per anno. Il valore del beneficio è indicato separatamente.",
      },
      {
        question: "Inserisco il contributo annuale o per busta paga?",
        answer:
          "Scegli il formato della tua offerta. Un importo annuale viene diviso tra 12 o 14 paghe; un importo per paga viene moltiplicato per il numero scelto.",
      },
      {
        question: "Calcola la mia imposta esatta?",
        answer:
          "No. Imposte, contributi, limiti e altri effetti dipendono dal Paese e dal contratto. Verifica il risultato finale con l'ufficio paghe.",
      },
      {
        question: "Cos'è il costo netto effettivo?",
        answer:
          "È la riduzione stimata del netto dopo il risparmio su imposte e trattenute. Non rappresenta automaticamente il prezzo di mercato del beneficio.",
      },
    ],
    howTo: [
      {
        name: "Scegli la valuta",
        text: "Seleziona la valuta in cui vuoi confrontare gli importi. La conversione usa un'equivalenza fissa approssimativa.",
      },
      {
        name: "Inserisci lordo e contributo",
        text: "Indica lo stipendio lordo annuo e l'importo della tua offerta o del piano.",
      },
      {
        name: "Imposta paghe e percentuali",
        text: "Scegli 12 o 14 paghe e inserisci le aliquote effettive di imposta e trattenute.",
      },
      {
        name: "Leggi il flusso",
        text: "Confronta perdita netta, beneficio, risparmi e costo effettivo prima di accettare l'accordo.",
      },
    ],
    seo: createSeo({
      heading: "Verifica il costo netto della conversione salariale",
      intro:
        "Un benefit aziendale può sembrare conveniente finché non guardi la busta paga. La domanda pratica è quanto denaro in meno riceverai ogni volta. Questo calcolatore separa il netto sacrificato dal valore annuale del beneficio.",
      methodHeading: "Cosa confronta il calcolo",
      method:
        "Prima = lordo meno le aliquote di imposta e trattenute inserite. Dopo = le stesse aliquote applicate al lordo dopo il contributo. La differenza è il costo netto stimato del beneficio.",
      readHeading: "Cosa controllare prima di firmare",
      read: "La valuta viene convertita con fattori locali fissi e approssimativi; non è una quotazione attuale. Controlla anche imponibile previdenziale, bonus, straordinari, ferie e soglie contrattuali.",
      bullets: [
        "Scegli la valuta utile per il confronto.",
        "Usa le percentuali effettive della busta paga o del piano.",
        "Confronta il costo netto con il valore concreto del beneficio.",
      ],
      tip: "Se il risultato non coincide con l'offerta, chiedi all'ufficio paghe il dettaglio e verifica l'effetto su contributi e prestazioni.",
    }),
  },
  nl: {
    title: "Berekenaar nettoloon met salarisruil",
    description:
      "Vergelijk je geschatte nettoloon voor en na salarisruil met het brutoloon, bedrag en de percentages uit je loonvoorstel.",
    slug: "berekenaar-nettoloon-salarisruil",
    ui: {
      eyebrow: "Maak de werkelijke ruilkosten zichtbaar",
      intro: "Test de aannames uit je loonstrook",
      labelCurrency: "Valuta",
      currencyHint:
        "Geschatte omrekening met vaste lokale factoren, geen actuele wisselkoers.",
      labelGross: "Jaarlijks brutoloon",
      grossHint: "Voor belasting en werknemersinhoudingen",
      labelContribution: "Bedrag van de salarisruil",
      contributionHint: "Gebruik het bedrag uit je aanbod of regeling",
      labelBasis: "Dit bedrag is",
      basisAnnual: "Per jaar",
      basisPerPay: "Per loonbetaling",
      labelPayPeriods: "Loonbetalingen",
      pay12: "12 betalingen",
      pay14: "14 betalingen",
      labelIncomeTax: "Effectief inkomstenbelastingtarief",
      labelPayrollDeduction: "Andere looninhoudingen",
      ratesHint:
        "Gebruik je eigen schattingen; tarieven worden niet automatisch opgezocht.",
      btnCalculate: "Nettoloon vergelijken",
      labelCashDropPerPay: "Geschatte nettodaling per betaling",
      labelDecision: "Wat betekent dit?",
      decision:
        "Je levert {cost} nettoloon in voor {benefit} jaarlijks voordeel.",
      decisionZero: "Voeg een bedrag toe om beide scenario's te vergelijken.",
      labelCashBefore: "Netto vóór salarisruil",
      labelCashAfter: "Netto na salarisruil",
      labelContributionPerPay: "Voordeel per betaling",
      labelSavingsPerPay: "Belasting- en inhoudingsbesparing per betaling",
      labelAnnualContribution: "Jaarlijks voordeel",
      labelIncomeTaxSavings: "Geschatte belastingbesparing",
      labelPayrollSavings: "Geschatte besparing op inhoudingen",
      labelEffectiveCost: "Effectieve nettokosten",
      labelFlow: "Jaarlijkse geldstroom",
      flowBefore: "Netto vóór",
      flowAfter: "Netto na",
      flowBenefit: "Voordeel",
      labelAnnualView: "Jaaroverzicht",
      labelAssumptions: "Aannames",
      errorGross: "Vul een brutoloon groter dan nul in.",
      errorContribution: "Het bedrag moet nul zijn of lager dan het brutoloon.",
      errorRates:
        "Gebruik percentages van 0 tot 100%, met samen minder dan 100%.",
      errorPayPeriods: "Kies 12 of 14 loonbetalingen.",
      errorBasis: "Geef aan of het bedrag per jaar of per betaling geldt.",
      disclaimer:
        "Dit is een transparante schatting, geen loonstrook of fiscaal advies. Valutawijzigingen gebruiken vaste geschatte factoren, geen actuele wisselkoersen. Het effect verschilt per land, regeling en contract; controleer de voorwaarden met salarisadministratie of aanbieder.",
      annualUnit: "per jaar",
      perPayUnit: "per betaling",
      percentUnit: "%",
    },
    faq: [
      {
        question: "Wat schat deze calculator?",
        answer:
          "De calculator vergelijkt je geschatte netto vóór en na het aftrekken van een bedrag van het brutoloon. Je vult zelf de effectieve belasting- en inhoudingspercentages in.",
      },
      {
        question: "Hoeveel nettoloon verlies ik?",
        answer:
          "De ingevoerde percentages worden op beide scenario's toegepast. Je ziet het verschil per betaling en per jaar, met het voordeel apart vermeld.",
      },
      {
        question: "Vul ik het bedrag per jaar of per betaling in?",
        answer:
          "Kies de vorm van je aanbod. Een jaarbedrag wordt verdeeld over 12 of 14 betalingen; een bedrag per betaling wordt vermenigvuldigd met het gekozen aantal.",
      },
      {
        question: "Berekent dit mijn exacte belasting?",
        answer:
          "Nee. Belastingen, premies, grenzen en effecten op andere arbeidsvoorwaarden hangen af van land en contract. Controleer het definitieve bedrag met je salarisadministratie.",
      },
      {
        question: "Wat zijn effectieve nettokosten?",
        answer:
          "Dat is de geschatte daling van je nettoloon na de belasting- en inhoudingsbesparing in het scenario. Het is niet automatisch de marktwaarde van het voordeel.",
      },
    ],
    howTo: [
      {
        name: "Kies de valuta",
        text: "Selecteer de valuta waarin je de bedragen wilt vergelijken. De omrekening is een vaste schatting.",
      },
      {
        name: "Vul bruto en bedrag in",
        text: "Voer je jaarlijkse brutoloon en het bedrag uit je aanbod of regeling in.",
      },
      {
        name: "Stel betalingen en percentages in",
        text: "Kies 12 of 14 betalingen en vul je effectieve belasting- en inhoudingspercentages in.",
      },
      {
        name: "Lees de geldstroom",
        text: "Vergelijk nettodaling, voordeel, besparing en effectieve kosten voordat je instemt.",
      },
    ],
    seo: createSeo({
      heading: "Controleer de nettokosten van salarisruil",
      intro:
        "Een arbeidsvoorwaarde kan aantrekkelijk klinken totdat je kijkt naar wat er werkelijk op je loonstrook staat. De praktische vraag is hoeveel geld je per betaling mist. Deze calculator zet het lagere nettoloon naast de jaarlijkse waarde van het voordeel.",
      methodHeading: "Wat de berekening vergelijkt",
      method:
        "Voor = bruto minus de ingevoerde belasting- en inhoudingspercentages. Na = dezelfde percentages toegepast op het bruto na de ruil. Het verschil is de geschatte nettokost van het voordeel.",
      readHeading: "Controleer dit vóór je tekent",
      read: "De valuta wordt omgerekend met vaste geschatte factoren en is geen actuele koers. Controleer ook pensioenloon, bonus, overuren, verlof, uitkeringen en contractuele grenzen.",
      bullets: [
        "Kies de valuta die bij je vergelijking past.",
        "Gebruik effectieve percentages uit je loonstrook of regeling.",
        "Vergelijk de nettokost met de waarde die het voordeel voor jou heeft.",
      ],
      tip: "Klopt het resultaat niet met je aanbod, vraag dan om de berekening van de salarisadministratie en controleer de gevolgen voor andere rechten.",
    }),
  },
  pt: {
    title: "Calculadora de salário líquido com conversão salarial",
    description:
      "Compare o salário líquido estimado antes e depois de uma conversão salarial usando o bruto, o valor e as percentagens da sua folha.",
    slug: "calculadora-salario-liquido-conversao-salarial",
    ui: {
      eyebrow: "Veja o custo real da troca",
      intro: "Teste os pressupostos da sua folha salarial",
      labelCurrency: "Moeda",
      currencyHint:
        "Conversão aproximada com fatores locais fixos, não uma taxa em tempo real.",
      labelGross: "Salário bruto anual",
      grossHint: "Antes de impostos e descontos do trabalhador",
      labelContribution: "Valor da conversão salarial",
      contributionHint: "Use o valor da sua proposta ou plano",
      labelBasis: "Esse valor é",
      basisAnnual: "Por ano",
      basisPerPay: "Por pagamento",
      labelPayPeriods: "Pagamentos",
      pay12: "12 pagamentos",
      pay14: "14 pagamentos",
      labelIncomeTax: "Taxa efetiva de imposto",
      labelPayrollDeduction: "Outros descontos salariais",
      ratesHint:
        "Use as suas taxas estimadas; não são consultadas automaticamente.",
      btnCalculate: "Comparar salário líquido",
      labelCashDropPerPay: "Redução líquida estimada por pagamento",
      labelDecision: "O que significa",
      decision:
        "Abdica de {cost} em salário líquido por {benefit} de benefício anual.",
      decisionZero: "Adicione um valor para comparar os dois cenários.",
      labelCashBefore: "Líquido antes da conversão",
      labelCashAfter: "Líquido depois da conversão",
      labelContributionPerPay: "Benefício por pagamento",
      labelSavingsPerPay: "Poupança de impostos e descontos por pagamento",
      labelAnnualContribution: "Benefício anual",
      labelIncomeTaxSavings: "Poupança estimada de imposto",
      labelPayrollSavings: "Poupança estimada nos descontos",
      labelEffectiveCost: "Custo líquido efetivo",
      labelFlow: "Fluxo financeiro anual",
      flowBefore: "Líquido antes",
      flowAfter: "Líquido depois",
      flowBenefit: "Benefício",
      labelAnnualView: "Vista anual",
      labelAssumptions: "Pressupostos",
      errorGross: "Introduza um salário bruto superior a zero.",
      errorContribution: "O valor deve ser zero ou inferior ao salário bruto.",
      errorRates:
        "Use percentagens de 0 a 100%, cuja soma fique abaixo de 100%.",
      errorPayPeriods: "Escolha 12 ou 14 pagamentos.",
      errorBasis: "Indique se o valor é anual ou por pagamento.",
      disclaimer:
        "É uma estimativa transparente, não uma folha salarial nem uma decisão fiscal. As mudanças de moeda usam fatores fixos aproximados, não taxas em tempo real. O efeito depende do país, do plano e do contrato; confirme as condições com os recursos humanos ou o fornecedor.",
      annualUnit: "por ano",
      perPayUnit: "por pagamento",
      percentUnit: "%",
    },
    faq: [
      {
        question: "O que estima esta calculadora?",
        answer:
          "Compara o salário líquido estimado antes e depois de retirar um valor do bruto. Introduz as suas taxas efetivas para manter claros todos os pressupostos.",
      },
      {
        question: "Quanto líquido vou perder?",
        answer:
          "As percentagens são aplicadas aos dois cenários e a diferença aparece por pagamento e por ano. O valor do benefício é mostrado à parte.",
      },
      {
        question: "Introduzo o valor anual ou por pagamento?",
        answer:
          "Escolha o formato da sua proposta. Um valor anual é dividido por 12 ou 14 pagamentos; um valor por pagamento é multiplicado pelo número escolhido.",
      },
      {
        question: "Isto calcula o meu imposto exato?",
        answer:
          "Não. Impostos, contribuições, limites e efeitos nas prestações dependem do país e do contrato. Confirme o valor final com os recursos humanos.",
      },
      {
        question: "O que é o custo líquido efetivo?",
        answer:
          "É a redução estimada do líquido depois da poupança de impostos e descontos do cenário. Não é automaticamente o preço de mercado do benefício.",
      },
    ],
    howTo: [
      {
        name: "Escolha a moeda",
        text: "Selecione a moeda em que quer comparar os valores. A conversão é uma equivalência fixa aproximada.",
      },
      {
        name: "Introduza bruto e valor",
        text: "Indique o salário bruto anual e o valor da sua proposta ou plano.",
      },
      {
        name: "Defina pagamentos e taxas",
        text: "Escolha 12 ou 14 pagamentos e introduza as taxas efetivas de imposto e descontos.",
      },
      {
        name: "Leia o fluxo",
        text: "Compare a perda líquida, o benefício, a poupança e o custo efetivo antes de aceitar.",
      },
    ],
    seo: createSeo({
      heading: "Verifique o custo líquido da conversão salarial",
      intro:
        "Um benefício no pacote salarial pode parecer simples até chegar a folha. A pergunta prática é quanto dinheiro deixa de receber em cada pagamento. Esta calculadora separa o líquido perdido do valor anual do benefício.",
      methodHeading: "O que o cálculo compara",
      method:
        "Antes = bruto menos as taxas de imposto e descontos introduzidas. Depois = as mesmas taxas aplicadas ao bruto depois da contribuição. A diferença é o custo líquido estimado do benefício.",
      readHeading: "Verifique antes de assinar",
      read: "A moeda é convertida com fatores locais fixos e aproximados; não é uma cotação atual. Confirme também salário pensionável, prémios, horas extra, férias e limites previstos no contrato.",
      bullets: [
        "Escolha a moeda adequada à sua comparação.",
        "Use taxas efetivas da folha ou do documento do plano.",
        "Compare o custo líquido com o valor real do benefício para si.",
      ],
      tip: "Se o resultado não coincidir com a proposta, peça o detalhe aos recursos humanos e confirme o impacto nas contribuições e prestações.",
    }),
  },
  id: {
    title: "Kalkulator gaji bersih dengan pengorbanan gaji",
    description:
      "Bandingkan perkiraan gaji bersih sebelum dan sesudah pengorbanan gaji menggunakan gaji kotor, kontribusi, dan persentase penggajian Anda.",
    slug: "kalkulator-gaji-bersih-pengorbanan-gaji",
    ui: {
      eyebrow: "Lihat biaya nyata dari pertukaran",
      intro: "Uji asumsi yang sudah ada di slip gaji Anda",
      labelCurrency: "Mata uang",
      currencyHint:
        "Konversi perkiraan memakai faktor lokal tetap, bukan nilai tukar langsung.",
      labelGross: "Gaji kotor tahunan",
      grossHint: "Sebelum pajak dan potongan karyawan",
      labelContribution: "Jumlah pengorbanan gaji",
      contributionHint: "Gunakan angka dari penawaran atau rencana Anda",
      labelBasis: "Jumlah ini adalah",
      basisAnnual: "Per tahun",
      basisPerPay: "Per pembayaran",
      labelPayPeriods: "Periode pembayaran",
      pay12: "12 pembayaran",
      pay14: "14 pembayaran",
      labelIncomeTax: "Tarif pajak penghasilan efektif",
      labelPayrollDeduction: "Potongan penggajian lain",
      ratesHint: "Gunakan perkiraan Anda; tarif tidak dicari secara otomatis.",
      btnCalculate: "Bandingkan gaji bersih",
      labelCashDropPerPay: "Penurunan bersih perkiraan per pembayaran",
      labelDecision: "Artinya",
      decision:
        "Anda mengurangi gaji bersih sebesar {cost} untuk manfaat tahunan {benefit}.",
      decisionZero: "Tambahkan kontribusi untuk membandingkan kedua skenario.",
      labelCashBefore: "Bersih sebelum pengorbanan",
      labelCashAfter: "Bersih setelah pengorbanan",
      labelContributionPerPay: "Manfaat per pembayaran",
      labelSavingsPerPay: "Penghematan pajak dan potongan per pembayaran",
      labelAnnualContribution: "Manfaat tahunan",
      labelIncomeTaxSavings: "Perkiraan penghematan pajak",
      labelPayrollSavings: "Perkiraan penghematan potongan",
      labelEffectiveCost: "Biaya bersih efektif",
      labelFlow: "Arus uang tahunan",
      flowBefore: "Bersih sebelum",
      flowAfter: "Bersih sesudah",
      flowBenefit: "Manfaat",
      labelAnnualView: "Tampilan tahunan",
      labelAssumptions: "Asumsi",
      errorGross: "Masukkan gaji kotor lebih besar dari nol.",
      errorContribution:
        "Kontribusi harus nol atau lebih kecil dari gaji kotor.",
      errorRates:
        "Gunakan persentase 0 sampai 100%, dengan jumlah di bawah 100%.",
      errorPayPeriods: "Pilih 12 atau 14 periode pembayaran.",
      errorBasis: "Pilih apakah kontribusi tahunan atau per pembayaran.",
      disclaimer:
        "Ini adalah perkiraan transparan, bukan slip gaji atau keputusan pajak. Perubahan mata uang memakai faktor tetap perkiraan, bukan nilai tukar langsung. Dampaknya berbeda menurut negara, rencana, dan kontrak; konfirmasikan syaratnya kepada penggajian atau penyedia.",
      annualUnit: "per tahun",
      perPayUnit: "per pembayaran",
      percentUnit: "%",
    },
    faq: [
      {
        question: "Apa yang diperkirakan kalkulator ini?",
        answer:
          "Kalkulator membandingkan gaji bersih sebelum dan sesudah kontribusi diambil dari gaji kotor. Anda memasukkan tarif pajak dan potongan efektif sendiri agar setiap asumsi terlihat.",
      },
      {
        question: "Berapa gaji bersih yang berkurang?",
        answer:
          "Tarif Anda diterapkan ke kedua skenario dan perbedaannya ditampilkan per pembayaran serta per tahun. Nilai manfaat ditampilkan terpisah.",
      },
      {
        question: "Masukkan jumlah tahunan atau per pembayaran?",
        answer:
          "Pilih format yang sesuai dengan penawaran. Jumlah tahunan dibagi ke 12 atau 14 pembayaran; jumlah per pembayaran dikalikan dengan periode yang dipilih.",
      },
      {
        question: "Apakah ini menghitung pajak saya secara tepat?",
        answer:
          "Tidak. Pajak, iuran, batas, dan dampak pada manfaat lain bergantung pada negara dan kontrak. Periksa hasil akhir dengan bagian penggajian.",
      },
      {
        question: "Apa arti biaya bersih efektif?",
        answer:
          "Ini adalah pengurangan gaji bersih setelah penghematan pajak dan potongan dalam skenario. Angka ini bukan otomatis harga pasar manfaat tersebut.",
      },
    ],
    howTo: [
      {
        name: "Pilih mata uang",
        text: "Pilih mata uang untuk membandingkan angka Anda. Konversi menggunakan kesetaraan tetap yang bersifat perkiraan.",
      },
      {
        name: "Masukkan gaji dan kontribusi",
        text: "Masukkan gaji kotor tahunan serta jumlah dari penawaran atau rencana Anda.",
      },
      {
        name: "Atur periode dan tarif",
        text: "Pilih 12 atau 14 pembayaran, lalu masukkan tarif pajak dan potongan efektif.",
      },
      {
        name: "Baca arus uang",
        text: "Bandingkan penurunan bersih, manfaat, penghematan, dan biaya efektif sebelum menyetujui.",
      },
    ],
    seo: createSeo({
      heading: "Periksa biaya bersih dari pengorbanan gaji",
      intro:
        "Manfaat dari paket kerja bisa terlihat menarik sampai Anda melihat angka di slip gaji. Pertanyaan praktisnya adalah berapa uang yang berkurang pada setiap pembayaran. Kalkulator ini memisahkan gaji bersih yang hilang dari nilai manfaat tahunan.",
      methodHeading: "Yang dibandingkan kalkulator",
      method:
        "Sebelum = gaji kotor dikurangi tarif pajak dan potongan yang Anda masukkan. Sesudah = tarif yang sama diterapkan pada gaji kotor setelah kontribusi. Selisihnya adalah biaya bersih perkiraan.",
      readHeading: "Periksa sebelum menyetujui",
      read: "Mata uang dikonversi memakai faktor lokal tetap yang bersifat perkiraan, bukan harga pasar saat ini. Periksa juga gaji untuk pensiun, bonus, lembur, cuti, dan batas kontrak.",
      bullets: [
        "Pilih mata uang yang sesuai dengan perbandingan Anda.",
        "Gunakan tarif efektif dari slip gaji atau dokumen rencana.",
        "Bandingkan biaya bersih dengan nilai manfaat yang sebenarnya bagi Anda.",
      ],
      tip: "Jika hasilnya berbeda dari penawaran, minta rincian dari bagian penggajian dan tanyakan dampaknya pada iuran serta manfaat lain.",
    }),
  },
  ja: {
    title: "給与の現物支給・サクリファイス手取り計算ツール",
    description:
      "年収、拠出額、給与からの控除率を入力して、給与の一部を福利厚生に振り替えた場合の手取りを比較します。",
    slug: "salary-sacrifice-take-home-calculator",
    ui: {
      eyebrow: "交換による負担を見える化",
      intro: "給与明細の前提を試す",
      labelCurrency: "通貨",
      currencyHint:
        "固定した現地係数による概算で、リアルタイム為替ではありません。",
      labelGross: "年間総支給額",
      grossHint: "税金・従業員控除の前",
      labelContribution: "振り替える金額",
      contributionHint: "提示されたプランの金額を入力",
      labelBasis: "この金額は",
      basisAnnual: "年間",
      basisPerPay: "給与1回あたり",
      labelPayPeriods: "給与回数",
      pay12: "12回",
      pay14: "14回",
      labelIncomeTax: "実効所得税率",
      labelPayrollDeduction: "その他の給与控除",
      ratesHint: "給与明細やプランの推定率を入力します。自動取得はしません。",
      btnCalculate: "手取りを比較",
      labelCashDropPerPay: "1回あたりの手取り減少額（概算）",
      labelDecision: "この結果の意味",
      decision:
        "年間 {benefit} の福利厚生に対して、手取りは {cost} 減少します。",
      decisionZero: "金額を入力すると2つのシナリオを比較できます。",
      labelCashBefore: "振り替え前の手取り",
      labelCashAfter: "振り替え後の手取り",
      labelContributionPerPay: "1回あたりの福利厚生額",
      labelSavingsPerPay: "1回あたりの税・控除節約額",
      labelAnnualContribution: "年間福利厚生額",
      labelIncomeTaxSavings: "所得税の節約額（概算）",
      labelPayrollSavings: "控除の節約額（概算）",
      labelEffectiveCost: "実質的な手取りコスト",
      labelFlow: "年間のお金の流れ",
      flowBefore: "振り替え前",
      flowAfter: "振り替え後",
      flowBenefit: "福利厚生",
      labelAnnualView: "年間表示",
      labelAssumptions: "前提",
      errorGross: "0より大きい年間総支給額を入力してください。",
      errorContribution:
        "振り替える金額は0以上で、総支給額以下にしてください。",
      errorRates: "税率と控除率は0〜100%、合計は100%未満で入力してください。",
      errorPayPeriods: "給与回数は12回または14回を選択してください。",
      errorBasis: "金額が年間か給与1回あたりかを選択してください。",
      disclaimer:
        "これは透明な概算であり、給与明細や税務判断ではありません。通貨変更には固定した概算係数を使い、リアルタイム為替は使いません。税金、社会保険、将来給付への影響は国、プラン、契約によって異なるため、最終条件を給与担当者や提供元に確認してください。",
      annualUnit: "年間",
      perPayUnit: "1回あたり",
      percentUnit: "%",
    },
    faq: [
      {
        question: "この計算ツールは何を概算しますか？",
        answer:
          "総支給額から拠出額を差し引いた前後の手取りを比較します。税率と控除率は入力した前提をそのまま使うため、結果の根拠を確認できます。",
      },
      {
        question: "手取りはいくら減りますか？",
        answer:
          "入力した率を前後のシナリオに適用し、1回あたりと年間の差額を表示します。福利厚生の金額は別に表示されます。",
      },
      {
        question: "年間額と1回あたりの額のどちらを入力しますか？",
        answer:
          "提示されたプランの形式に合わせて選びます。年間額は12回または14回に分け、1回あたりの額は選択した回数で年間化します。",
      },
      {
        question: "実際の税金を正確に計算しますか？",
        answer:
          "いいえ。税金、社会保険、上限、契約上の扱いは国や制度によって異なります。最終的な給与額は担当部署に確認してください。",
      },
      {
        question: "実質的な手取りコストとは何ですか？",
        answer:
          "入力した税・控除の節約分を反映した後に減る手取り額です。福利厚生の市場価格を示すものではありません。",
      },
    ],
    howTo: [
      {
        name: "通貨を選ぶ",
        text: "比較に使う通貨を選びます。換算は固定係数による概算です。",
      },
      {
        name: "総支給額と拠出額を入力",
        text: "年間総支給額と、提示されたプランの金額を入力します。",
      },
      {
        name: "給与回数と率を設定",
        text: "12回または14回を選び、所得税率とその他の控除率を入力します。",
      },
      {
        name: "お金の流れを確認",
        text: "手取りの減少、福利厚生、節約額、実質コストを比較して判断します。",
      },
    ],
    seo: createSeo({
      heading: "給与振り替えの手取りコストを確認する",
      intro:
        "福利厚生への振り替えは、給与明細を見て初めて負担が分かります。毎回の手取りがいくら減るのかが実際の判断材料です。このツールは減少する現金と年間の福利厚生額を並べて比較します。",
      methodHeading: "比較する内容",
      method:
        "前 = 入力した税・控除率を総支給額に適用した手取り。後 = 拠出後の総支給額に同じ率を適用した手取り。その差が福利厚生の手取りコストです。",
      readHeading: "申し込む前に確認すること",
      read: "通貨は固定した概算係数で換算するだけで、現在の為替レートではありません。年金の算定基礎、賞与、残業、休暇、契約上の上限も確認してください。",
      bullets: [
        "比較に必要な通貨を選択する。",
        "給与明細や制度資料の実効率を入力する。",
        "手取りコストと福利厚生の実際の価値を比べる。",
      ],
      tip: "提示額と結果が合わない場合は、給与担当者に内訳を確認し、社会保険や他の給付への影響を質問してください。",
    }),
  },
  ko: {
    title: "급여 희생 실수령액 계산기",
    description:
      "연봉, 기여액과 급여 공제율을 입력해 급여 일부를 복지 혜택으로 전환했을 때의 예상 실수령액을 비교합니다.",
    slug: "salary-sacrifice-take-home-calculator",
    ui: {
      eyebrow: "교환의 실제 비용을 확인하세요",
      intro: "급여명세서의 가정을 시험하세요",
      labelCurrency: "통화",
      currencyHint:
        "고정된 현지 계수로 계산한 근사치이며 실시간 환율이 아닙니다.",
      labelGross: "연간 총급여",
      grossHint: "세금과 근로자 공제 전",
      labelContribution: "급여 희생 금액",
      contributionHint: "제안서나 플랜의 금액을 입력하세요",
      labelBasis: "이 금액은",
      basisAnnual: "연간",
      basisPerPay: "급여 1회당",
      labelPayPeriods: "급여 지급 횟수",
      pay12: "12회",
      pay14: "14회",
      labelIncomeTax: "실효 소득세율",
      labelPayrollDeduction: "기타 급여 공제",
      ratesHint: "직접 추정한 비율을 사용하며 자동으로 조회하지 않습니다.",
      btnCalculate: "실수령액 비교",
      labelCashDropPerPay: "급여 1회당 예상 실수령액 감소",
      labelDecision: "결과의 의미",
      decision: "연간 {benefit} 혜택을 위해 실수령액 {cost}를 포기합니다.",
      decisionZero: "금액을 입력하면 두 시나리오를 비교할 수 있습니다.",
      labelCashBefore: "희생 전 실수령액",
      labelCashAfter: "희생 후 실수령액",
      labelContributionPerPay: "급여 1회당 혜택",
      labelSavingsPerPay: "급여 1회당 세금·공제 절약",
      labelAnnualContribution: "연간 혜택",
      labelIncomeTaxSavings: "예상 소득세 절약",
      labelPayrollSavings: "예상 공제 절약",
      labelEffectiveCost: "실제 실수령액 비용",
      labelFlow: "연간 자금 흐름",
      flowBefore: "희생 전",
      flowAfter: "희생 후",
      flowBenefit: "혜택",
      labelAnnualView: "연간 보기",
      labelAssumptions: "가정",
      errorGross: "0보다 큰 총급여를 입력하세요.",
      errorContribution: "금액은 0 이상이고 총급여보다 작거나 같아야 합니다.",
      errorRates: "비율은 0~100%이며 합계는 100% 미만이어야 합니다.",
      errorPayPeriods: "12회 또는 14회의 급여 지급 횟수를 선택하세요.",
      errorBasis: "금액이 연간인지 급여 1회당인지 선택하세요.",
      disclaimer:
        "투명한 예상치이며 급여명세서나 세무 판단이 아닙니다. 통화 변경에는 고정된 근사 계수를 사용하며 실시간 환율을 사용하지 않습니다. 세금, 사회보험과 기타 혜택의 영향은 국가, 플랜과 계약에 따라 다르므로 최종 조건을 급여 담당자나 제공업체에 확인하세요.",
      annualUnit: "연간",
      perPayUnit: "1회당",
      percentUnit: "%",
    },
    faq: [
      {
        question: "이 계산기는 무엇을 예상하나요?",
        answer:
          "총급여에서 금액을 전환하기 전과 후의 예상 실수령액을 비교합니다. 세금과 공제율을 직접 입력하므로 계산 가정이 명확합니다.",
      },
      {
        question: "실수령액은 얼마나 줄어드나요?",
        answer:
          "입력한 비율을 두 시나리오에 적용해 급여 1회와 연간 차이를 보여줍니다. 혜택 금액은 별도로 표시합니다.",
      },
      {
        question: "연간 금액과 급여 1회 금액 중 무엇을 입력하나요?",
        answer:
          "제안서의 형식에 맞춰 선택하세요. 연간 금액은 12회 또는 14회로 나누고, 1회 금액은 선택한 횟수로 연간화합니다.",
      },
      {
        question: "정확한 세금을 계산하나요?",
        answer:
          "아니요. 세금, 보험료, 한도와 계약상 효과는 국가와 제도에 따라 다릅니다. 최종 금액은 급여 담당자에게 확인하세요.",
      },
      {
        question: "실제 실수령액 비용이란 무엇인가요?",
        answer:
          "시나리오의 세금과 공제 절약을 반영한 뒤 줄어드는 예상 실수령액입니다. 혜택의 시장 가격을 뜻하지는 않습니다.",
      },
    ],
    howTo: [
      {
        name: "통화 선택",
        text: "비교에 사용할 통화를 선택하세요. 변환은 고정 계수를 사용한 근사치입니다.",
      },
      {
        name: "총급여와 금액 입력",
        text: "연간 총급여와 제안서 또는 플랜의 금액을 입력하세요.",
      },
      {
        name: "지급 횟수와 비율 설정",
        text: "12회 또는 14회를 고르고 실효 세율과 기타 공제율을 입력하세요.",
      },
      {
        name: "자금 흐름 확인",
        text: "실수령액 감소, 혜택, 절약액과 실제 비용을 비교해 결정하세요.",
      },
    ],
    seo: createSeo({
      heading: "급여 희생의 실수령액 비용 확인하기",
      intro:
        "급여 패키지의 혜택은 급여명세서를 보기 전까지 매력적으로 보일 수 있습니다. 실제 판단은 매번 받는 돈이 얼마나 줄어드는지입니다. 이 계산기는 줄어드는 현금과 연간 혜택을 한눈에 비교합니다.",
      methodHeading: "계산이 비교하는 값",
      method:
        "전 = 입력한 세금과 공제율을 총급여에 적용한 실수령액. 후 = 금액을 뺀 총급여에 같은 비율을 적용한 실수령액. 차이가 혜택의 예상 실수령액 비용입니다.",
      readHeading: "신청 전 확인할 항목",
      read: "통화는 고정된 근사 계수로만 변환하며 현재 환율이 아닙니다. 연금 기준 급여, 보너스, 초과근무, 휴가와 계약상 한도도 확인하세요.",
      bullets: [
        "비교에 필요한 통화를 선택하세요.",
        "급여명세서나 플랜 문서의 실효율을 입력하세요.",
        "실수령액 비용과 혜택의 실제 가치를 비교하세요.",
      ],
      tip: "제안서와 결과가 다르면 급여 담당자에게 계산 내역을 요청하고 보험료와 다른 혜택에 미치는 영향을 확인하세요.",
    }),
  },
  pl: {
    title: "Kalkulator wynagrodzenia netto przy zamianie pensji",
    description:
      "Porównaj szacunkowe wynagrodzenie netto przed i po zamianie części pensji na świadczenie, korzystając z kwot i stawek z dokumentu płacowego.",
    slug: "kalkulator-wynagrodzenia-netto-zamiana-pensji",
    ui: {
      eyebrow: "Sprawdź rzeczywisty koszt zamiany",
      intro: "Przetestuj założenia z listy płac",
      labelCurrency: "Waluta",
      currencyHint:
        "Przybliżone przeliczenie według stałych lokalnych współczynników, nie kurs bieżący.",
      labelGross: "Roczne wynagrodzenie brutto",
      grossHint: "Przed podatkiem i potrąceniami pracownika",
      labelContribution: "Kwota zamiany pensji",
      contributionHint: "Użyj kwoty z oferty lub planu",
      labelBasis: "Ta kwota jest",
      basisAnnual: "Roczna",
      basisPerPay: "Na wypłatę",
      labelPayPeriods: "Wypłaty",
      pay12: "12 wypłat",
      pay14: "14 wypłat",
      labelIncomeTax: "Efektywna stawka podatku dochodowego",
      labelPayrollDeduction: "Pozostałe potrącenia z pensji",
      ratesHint:
        "Użyj własnych szacunków; stawki nie są pobierane automatycznie.",
      btnCalculate: "Porównaj wynagrodzenie netto",
      labelCashDropPerPay: "Szacowany spadek netto na wypłatę",
      labelDecision: "Co to oznacza",
      decision:
        "Oddajesz {cost} wynagrodzenia netto za {benefit} rocznego świadczenia.",
      decisionZero: "Dodaj kwotę, aby porównać oba scenariusze.",
      labelCashBefore: "Netto przed zamianą",
      labelCashAfter: "Netto po zamianie",
      labelContributionPerPay: "Świadczenie na wypłatę",
      labelSavingsPerPay: "Oszczędność podatkowa i z potrąceń na wypłatę",
      labelAnnualContribution: "Świadczenie roczne",
      labelIncomeTaxSavings: "Szacowana oszczędność podatkowa",
      labelPayrollSavings: "Szacowana oszczędność na potrąceniach",
      labelEffectiveCost: "Rzeczywisty koszt netto",
      labelFlow: "Roczny przepływ pieniędzy",
      flowBefore: "Netto przed",
      flowAfter: "Netto po",
      flowBenefit: "Świadczenie",
      labelAnnualView: "Widok roczny",
      labelAssumptions: "Założenia",
      errorGross: "Wpisz wynagrodzenie brutto większe od zera.",
      errorContribution:
        "Kwota musi być równa zero lub niższa od wynagrodzenia brutto.",
      errorRates:
        "Użyj stawek od 0 do 100%, których suma jest niższa niż 100%.",
      errorPayPeriods: "Wybierz 12 lub 14 wypłat.",
      errorBasis: "Wybierz, czy kwota jest roczna, czy przypada na wypłatę.",
      disclaimer:
        "To przejrzysty szacunek, a nie pasek wynagrodzeń ani decyzja podatkowa. Zmiana waluty korzysta ze stałych przybliżonych współczynników, nie z bieżących kursów. Wpływ zależy od kraju, planu i umowy; potwierdź warunki w dziale płac lub u dostawcy.",
      annualUnit: "rocznie",
      perPayUnit: "na wypłatę",
      percentUnit: "%",
    },
    faq: [
      {
        question: "Co szacuje ten kalkulator?",
        answer:
          "Porównuje przewidywane netto przed i po odjęciu kwoty od wynagrodzenia brutto. Samodzielnie podajesz efektywne stawki podatku i potrąceń.",
      },
      {
        question: "Ile wynagrodzenia netto stracę?",
        answer:
          "Twoje stawki są stosowane do obu scenariuszy, a różnica jest pokazana na wypłatę i rocznie. Wartość świadczenia jest pokazana osobno.",
      },
      {
        question: "Czy podać kwotę roczną czy na wypłatę?",
        answer:
          "Wybierz format zgodny z ofertą. Kwota roczna jest dzielona na 12 lub 14 wypłat, a kwota na wypłatę jest mnożona przez wybraną liczbę okresów.",
      },
      {
        question: "Czy kalkulator oblicza mój dokładny podatek?",
        answer:
          "Nie. Podatki, składki, limity i wpływ na inne świadczenia zależą od kraju i umowy. Ostateczną kwotę sprawdź w dziale płac.",
      },
      {
        question: "Co oznacza rzeczywisty koszt netto?",
        answer:
          "To szacowany spadek netto po uwzględnieniu oszczędności podatkowych i oszczędności na potrąceniach. Nie jest to automatycznie cena rynkowa świadczenia.",
      },
    ],
    howTo: [
      {
        name: "Wybierz walutę",
        text: "Wybierz walutę do porównania kwot. Przeliczenie jest stałym przybliżeniem.",
      },
      {
        name: "Wpisz brutto i kwotę",
        text: "Podaj roczne wynagrodzenie brutto oraz kwotę z oferty lub planu.",
      },
      {
        name: "Ustaw wypłaty i stawki",
        text: "Wybierz 12 lub 14 wypłat, a następnie wpisz efektywne stawki podatku i potrąceń.",
      },
      {
        name: "Sprawdź przepływ",
        text: "Porównaj spadek netto, świadczenie, oszczędności i koszt przed zaakceptowaniem umowy.",
      },
    ],
    seo: createSeo({
      heading: "Sprawdź koszt netto zamiany części pensji",
      intro:
        "Świadczenie pracownicze może wyglądać korzystnie, dopóki nie zobaczysz kwoty na pasku wynagrodzeń. Najważniejsze pytanie brzmi, ile pieniędzy zniknie z każdej wypłaty. Kalkulator zestawia utracone netto z roczną wartością świadczenia.",
      methodHeading: "Co porównuje obliczenie",
      method:
        "Przed = brutto pomniejszone o podane stawki podatku i potrąceń. Po = te same stawki zastosowane do brutto po odjęciu kwoty. Różnica to szacowany koszt netto świadczenia.",
      readHeading: "Sprawdź przed podpisaniem",
      read: "Waluta jest przeliczana według stałych, przybliżonych współczynników, a nie bieżącego kursu. Sprawdź także podstawę emerytalną, premie, nadgodziny, urlop i limity umowne.",
      bullets: [
        "Wybierz walutę potrzebną do porównania.",
        "Wpisz efektywne stawki z paska lub dokumentu planu.",
        "Porównaj koszt netto z faktyczną wartością świadczenia.",
      ],
      tip: "Jeśli wynik różni się od oferty, poproś dział płac o rozpisanie obliczeń i sprawdź wpływ na składki oraz inne prawa.",
    }),
  },
  ru: {
    title: "Калькулятор зарплаты на руки при обмене части зарплаты",
    description:
      "Сравните примерную зарплату на руки до и после перевода части зарплаты в льготу, используя свои суммы и ставки удержаний.",
    slug: "kalkulyator-zarplaty-na-ruki",
    ui: {
      eyebrow: "Покажите реальную стоимость обмена",
      intro: "Проверьте предположения из расчётного листка",
      labelCurrency: "Валюта",
      currencyHint:
        "Приблизительный пересчёт по фиксированным местным коэффициентам, не текущий курс.",
      labelGross: "Годовая зарплата до вычетов",
      grossHint: "До налогов и удержаний сотрудника",
      labelContribution: "Сумма перевода из зарплаты",
      contributionHint: "Укажите сумму из предложения или плана",
      labelBasis: "Эта сумма указана",
      basisAnnual: "За год",
      basisPerPay: "За выплату",
      labelPayPeriods: "Выплаты",
      pay12: "12 выплат",
      pay14: "14 выплат",
      labelIncomeTax: "Эффективная ставка подоходного налога",
      labelPayrollDeduction: "Другие удержания из зарплаты",
      ratesHint:
        "Используйте свои оценки; ставки не запрашиваются автоматически.",
      btnCalculate: "Сравнить зарплату на руки",
      labelCashDropPerPay: "Примерное уменьшение выплаты",
      labelDecision: "Что это означает",
      decision:
        "Вы отдаёте {cost} зарплаты на руки за ежегодную льготу на {benefit}.",
      decisionZero: "Добавьте сумму, чтобы сравнить два сценария.",
      labelCashBefore: "На руки до перевода",
      labelCashAfter: "На руки после перевода",
      labelContributionPerPay: "Льгота за выплату",
      labelSavingsPerPay: "Экономия налогов и удержаний за выплату",
      labelAnnualContribution: "Ежегодная льгота",
      labelIncomeTaxSavings: "Примерная экономия подоходного налога",
      labelPayrollSavings: "Примерная экономия на удержаниях",
      labelEffectiveCost: "Фактическая стоимость на руки",
      labelFlow: "Денежный поток за год",
      flowBefore: "До перевода",
      flowAfter: "После перевода",
      flowBenefit: "Льгота",
      labelAnnualView: "Годовой вид",
      labelAssumptions: "Допущения",
      errorGross: "Введите годовую сумму больше нуля.",
      errorContribution:
        "Сумма должна быть неотрицательной и не больше зарплаты.",
      errorRates: "Введите ставки от 0 до 100%, а их сумму: меньше 100%.",
      errorPayPeriods: "Выберите 12 или 14 выплат.",
      errorBasis: "Укажите, сумма годовая или рассчитана на одну выплату.",
      disclaimer:
        "Это прозрачная оценка, а не расчётный листок и не налоговое решение. Смена валюты использует фиксированные приблизительные коэффициенты, а не текущие курсы. Эффект зависит от страны, плана и договора; подтвердите условия у расчётного отдела или поставщика.",
      annualUnit: "за год",
      perPayUnit: "за выплату",
      percentUnit: "%",
    },
    faq: [
      {
        question: "Что оценивает этот калькулятор?",
        answer:
          "Он сравнивает примерную зарплату на руки до и после вычета суммы из зарплаты до налогов. Вы сами вводите эффективные ставки, поэтому допущения остаются видимыми.",
      },
      {
        question: "На сколько уменьшится выплата?",
        answer:
          "Введённые ставки применяются к обоим сценариям, а разница показывается за выплату и за год. Размер льготы отображается отдельно.",
      },
      {
        question: "Вводить годовую сумму или сумму за выплату?",
        answer:
          "Выберите формат из предложения. Годовая сумма распределяется на 12 или 14 выплат, а сумма за выплату умножается на выбранное число периодов.",
      },
      {
        question: "Это точный расчёт налога?",
        answer:
          "Нет. Налоги, взносы, лимиты и влияние на другие выплаты зависят от страны и договора. Итог проверьте в расчётном отделе.",
      },
      {
        question: "Что такое фактическая стоимость на руки?",
        answer:
          "Это примерное уменьшение выплаты после экономии на налогах и удержаниях. Это не обязательно рыночная цена льготы.",
      },
    ],
    howTo: [
      {
        name: "Выберите валюту",
        text: "Выберите валюту для сравнения. Пересчёт использует фиксированное приблизительное соотношение.",
      },
      {
        name: "Введите зарплату и сумму",
        text: "Укажите годовую сумму до вычетов и сумму из предложения или плана.",
      },
      {
        name: "Настройте выплаты и ставки",
        text: "Выберите 12 или 14 выплат и введите эффективные ставки налога и удержаний.",
      },
      {
        name: "Прочитайте поток денег",
        text: "Сопоставьте уменьшение выплаты, льготу, экономию и фактическую стоимость до согласия.",
      },
    ],
    seo: createSeo({
      heading: "Проверьте стоимость обмена зарплаты на льготу",
      intro:
        "Льгота в составе зарплатного пакета может выглядеть выгодно, пока вы не увидите сумму на руки. Важно понять, сколько денег исчезает из каждой выплаты. Этот калькулятор ставит уменьшение наличных рядом с годовой стоимостью льготы.",
      methodHeading: "Что сравнивает расчёт",
      method:
        "До = зарплата до вычетов минус введённые ставки налога и удержаний. После = те же ставки применяются к сумме после перевода. Разница: примерная стоимость льготы на руки.",
      readHeading: "Что проверить до согласия",
      read: "Валюта пересчитывается фиксированными приблизительными коэффициентами, это не текущая котировка. Проверьте также пенсионную базу, премии, сверхурочные, отпуск и договорные лимиты.",
      bullets: [
        "Выберите валюту, которая нужна для сравнения.",
        "Используйте эффективные ставки из расчётного листка или плана.",
        "Сопоставьте стоимость на руки с реальной ценностью льготы.",
      ],
      tip: "Если результат не совпадает с предложением, попросите расчётный отдел показать формулу и уточните влияние на взносы и другие выплаты.",
    }),
  },
  sv: {
    title: "Kalkylator för nettolön med löneväxling",
    description:
      "Jämför uppskattad nettolön före och efter löneväxling med bruttolön, belopp och avdragssatser från ditt löneunderlag.",
    slug: "kalkylator-nettolon-lonevaxling",
    ui: {
      eyebrow: "Se vad bytet faktiskt kostar",
      intro: "Testa antagandena från ditt löneunderlag",
      labelCurrency: "Valuta",
      currencyHint:
        "Ungefärlig omräkning med fasta lokala faktorer, inte en aktuell växelkurs.",
      labelGross: "Årslön före skatt",
      grossHint: "Före skatt och arbetstagarens avdrag",
      labelContribution: "Belopp för löneväxling",
      contributionHint: "Använd beloppet från ditt erbjudande eller din plan",
      labelBasis: "Beloppet gäller",
      basisAnnual: "Per år",
      basisPerPay: "Per utbetalning",
      labelPayPeriods: "Utbetalningar",
      pay12: "12 utbetalningar",
      pay14: "14 utbetalningar",
      labelIncomeTax: "Effektiv inkomstskattesats",
      labelPayrollDeduction: "Övriga löneavdrag",
      ratesHint:
        "Använd dina egna uppskattade satser; de hämtas inte automatiskt.",
      btnCalculate: "Jämför nettolön",
      labelCashDropPerPay: "Uppskattad minskning per utbetalning",
      labelDecision: "Vad betyder det?",
      decision: "Du avstår {cost} i nettolön för {benefit} i årlig förmån.",
      decisionZero: "Lägg till ett belopp för att jämföra scenarierna.",
      labelCashBefore: "Netto före löneväxling",
      labelCashAfter: "Netto efter löneväxling",
      labelContributionPerPay: "Förmån per utbetalning",
      labelSavingsPerPay: "Skatte- och avdragsbesparing per utbetalning",
      labelAnnualContribution: "Årlig förmån",
      labelIncomeTaxSavings: "Uppskattad skattebesparing",
      labelPayrollSavings: "Uppskattad besparing på avdrag",
      labelEffectiveCost: "Effektiv nettokostnad",
      labelFlow: "Årligt pengaflöde",
      flowBefore: "Netto före",
      flowAfter: "Netto efter",
      flowBenefit: "Förmån",
      labelAnnualView: "Årsöversikt",
      labelAssumptions: "Antaganden",
      errorGross: "Ange en lön före skatt som är större än noll.",
      errorContribution: "Beloppet måste vara noll eller lägre än bruttolönen.",
      errorRates:
        "Använd satser från 0 till 100 %, med en totalsumma under 100 %.",
      errorPayPeriods: "Välj 12 eller 14 utbetalningar.",
      errorBasis: "Välj om beloppet gäller per år eller per utbetalning.",
      disclaimer:
        "Detta är en transparent uppskattning, inte en lönespecifikation eller ett skattebesked. Valutabyte använder fasta ungefärliga faktorer, inte aktuella växelkurser. Effekten beror på land, plan och avtal; be löneavdelningen eller leverantören bekräfta villkoren.",
      annualUnit: "per år",
      perPayUnit: "per utbetalning",
      percentUnit: "%",
    },
    faq: [
      {
        question: "Vad uppskattar kalkylatorn?",
        answer:
          "Den jämför uppskattad nettolön före och efter att ett belopp dras från bruttolönen. Du anger själv effektiva skatte- och avdragssatser så att antagandena blir tydliga.",
      },
      {
        question: "Hur mycket nettolön försvinner?",
        answer:
          "Dina satser används i båda scenarierna och skillnaden visas per utbetalning och per år. Förmånens värde visas separat.",
      },
      {
        question: "Ska beloppet anges per år eller per utbetalning?",
        answer:
          "Välj formatet i erbjudandet. Ett årsbelopp delas på 12 eller 14 utbetalningar, medan ett belopp per utbetalning multipliceras med valt antal.",
      },
      {
        question: "Räknar detta ut min exakta skatt?",
        answer:
          "Nej. Skatt, avgifter, gränser och påverkan på andra förmåner varierar med land och avtal. Kontrollera slutbeloppet med löneavdelningen.",
      },
      {
        question: "Vad är effektiv nettokostnad?",
        answer:
          "Det är den uppskattade minskningen av nettolönen efter besparingen på skatt och avdrag. Det är inte automatiskt förmånens marknadsvärde.",
      },
    ],
    howTo: [
      {
        name: "Välj valuta",
        text: "Välj valutan du vill använda för jämförelsen. Omräkningen är en fast uppskattning.",
      },
      {
        name: "Ange lön och belopp",
        text: "Skriv in årslönen före skatt och beloppet från erbjudandet eller planen.",
      },
      {
        name: "Ställ in utbetalningar och satser",
        text: "Välj 12 eller 14 utbetalningar och ange effektiva skatte- och avdragssatser.",
      },
      {
        name: "Läs pengaflödet",
        text: "Jämför minskning, förmån, besparing och nettokostnad innan du godkänner.",
      },
    ],
    seo: createSeo({
      heading: "Kontrollera nettokostnaden för löneväxling",
      intro:
        "En förmån i lönepaketet kan verka attraktiv tills du ser beloppet på lönespecifikationen. Den praktiska frågan är hur mycket pengar som försvinner från varje utbetalning. Kalkylatorn visar minskad nettolön bredvid förmånens årliga värde.",
      methodHeading: "Vad beräkningen jämför",
      method:
        "Före = lön före skatt minus de skatte- och avdragssatser du anger. Efter = samma satser på lönen efter beloppet. Skillnaden är förmånens uppskattade nettokostnad.",
      readHeading: "Kontrollera före avtal",
      read: "Valutan räknas om med fasta ungefärliga faktorer och är inte en aktuell kurs. Kontrollera även pensionsgrundande lön, bonus, övertid, ledighet och avtalsgränser.",
      bullets: [
        "Välj valutan som passar jämförelsen.",
        "Använd effektiva satser från lönespecifikationen eller planen.",
        "Jämför nettokostnaden med förmånens verkliga värde för dig.",
      ],
      tip: "Om resultatet inte stämmer med erbjudandet, be löneavdelningen om underlaget och fråga hur avgifter och andra förmåner påverkas.",
    }),
  },
  tr: {
    title: "Maaş fedakârlığı net maaş hesaplayıcısı",
    description:
      "Brüt maaşınızı, katkı tutarınızı ve bordronuzdaki oranları kullanarak maaş fedakârlığı öncesi ve sonrası tahmini net maaşı karşılaştırın.",
    slug: "maas-fedakarligi-net-maas-hesaplayici",
    ui: {
      eyebrow: "Değişimin gerçek maliyetini görün",
      intro: "Bordronuzdaki varsayımları test edin",
      labelCurrency: "Para birimi",
      currencyHint:
        "Sabit yerel katsayılarla yaklaşık dönüşüm; canlı döviz kuru değildir.",
      labelGross: "Yıllık brüt maaş",
      grossHint: "Vergi ve çalışan kesintilerinden önce",
      labelContribution: "Maaş fedakârlığı tutarı",
      contributionHint: "Teklifinizdeki veya planınızdaki tutarı kullanın",
      labelBasis: "Bu tutar",
      basisAnnual: "Yıllık",
      basisPerPay: "Ödeme başına",
      labelPayPeriods: "Ödeme dönemleri",
      pay12: "12 ödeme",
      pay14: "14 ödeme",
      labelIncomeTax: "Efektif gelir vergisi oranı",
      labelPayrollDeduction: "Diğer bordro kesintileri",
      ratesHint:
        "Kendi tahmini oranlarınızı kullanın; oranlar otomatik aranmaz.",
      btnCalculate: "Net maaşı karşılaştır",
      labelCashDropPerPay: "Ödeme başına tahmini net azalma",
      labelDecision: "Bu ne anlama geliyor?",
      decision: "Yıllık {benefit} yan hak için net maaşınız {cost} azalır.",
      decisionZero: "İki senaryoyu karşılaştırmak için bir tutar ekleyin.",
      labelCashBefore: "Fedakârlık öncesi net",
      labelCashAfter: "Fedakârlık sonrası net",
      labelContributionPerPay: "Ödeme başına yan hak",
      labelSavingsPerPay: "Ödeme başına vergi ve kesinti tasarrufu",
      labelAnnualContribution: "Yıllık yan hak",
      labelIncomeTaxSavings: "Tahmini gelir vergisi tasarrufu",
      labelPayrollSavings: "Tahmini kesinti tasarrufu",
      labelEffectiveCost: "Efektif net maliyet",
      labelFlow: "Yıllık para akışı",
      flowBefore: "Önce net",
      flowAfter: "Sonra net",
      flowBenefit: "Yan hak",
      labelAnnualView: "Yıllık görünüm",
      labelAssumptions: "Varsayımlar",
      errorGross: "Sıfırdan büyük bir brüt maaş girin.",
      errorContribution: "Tutar sıfır veya brüt maaştan küçük olmalıdır.",
      errorRates:
        "%0 ile %100 arasında oranlar kullanın; toplam %100'ün altında olmalıdır.",
      errorPayPeriods: "12 veya 14 ödeme dönemi seçin.",
      errorBasis: "Tutarın yıllık mı yoksa ödeme başına mı olduğunu seçin.",
      disclaimer:
        "Bu şeffaf bir tahmindir; bordro veya vergi kararı değildir. Para birimi değişimi sabit yaklaşık katsayılar kullanır, canlı döviz kuru kullanmaz. Etki ülkeye, plana ve sözleşmeye göre değişir; koşulları bordro birimi veya sağlayıcıyla doğrulayın.",
      annualUnit: "yıllık",
      perPayUnit: "ödeme başına",
      percentUnit: "%",
    },
    faq: [
      {
        question: "Bu hesaplayıcı neyi tahmin eder?",
        answer:
          "Brüt maaştan bir tutar ayrılmadan önceki ve sonraki tahmini net maaşı karşılaştırır. Vergi ve kesinti oranlarını siz girersiniz, böylece varsayımlar görünür kalır.",
      },
      {
        question: "Net maaşım ne kadar azalır?",
        answer:
          "Girdiğiniz oranlar iki senaryoya uygulanır ve fark ödeme başına ve yıllık olarak gösterilir. Yan hakkın tutarı ayrı gösterilir.",
      },
      {
        question: "Yıllık tutarı mı, ödeme başına tutarı mı girmeliyim?",
        answer:
          "Teklifinizdeki biçimi seçin. Yıllık tutar 12 veya 14 ödemeye bölünür; ödeme başına tutar seçilen dönem sayısıyla çarpılır.",
      },
      {
        question: "Bu benim kesin vergimi hesaplar mı?",
        answer:
          "Hayır. Vergiler, primler, sınırlar ve diğer haklara etkiler ülkeye ve sözleşmeye bağlıdır. Son tutarı bordro birimiyle kontrol edin.",
      },
      {
        question: "Efektif net maliyet nedir?",
        answer:
          "Senaryodaki vergi ve kesinti tasarruflarından sonra net maaştaki tahmini azalmadır. Yan hakkın piyasa fiyatı anlamına gelmez.",
      },
    ],
    howTo: [
      {
        name: "Para birimini seçin",
        text: "Tutarları karşılaştırmak istediğiniz para birimini seçin. Dönüşüm sabit ve yaklaşık bir eşdeğerliktir.",
      },
      {
        name: "Maaşı ve tutarı girin",
        text: "Yıllık brüt maaşınızı ve teklifinizdeki tutarı girin.",
      },
      {
        name: "Ödemeleri ve oranları ayarlayın",
        text: "12 veya 14 ödeme seçin; efektif vergi ve kesinti oranlarını girin.",
      },
      {
        name: "Para akışını okuyun",
        text: "Kabul etmeden önce net azalmayı, yan hakkı, tasarrufu ve maliyeti karşılaştırın.",
      },
    ],
    seo: createSeo({
      heading: "Maaş fedakârlığının net maliyetini kontrol edin",
      intro:
        "Maaş paketindeki bir yan hak, bordronuzu görene kadar cazip görünebilir. Asıl soru, her ödemede elinize ne kadar daha az para geçeceğidir. Bu hesaplayıcı azalan nakdi yan hakkın yıllık değeriyle yan yana gösterir.",
      methodHeading: "Hesaplama neyi karşılaştırır",
      method:
        "Önce = girilen vergi ve kesinti oranları düşülmüş brüt maaş. Sonra = katkıdan sonraki brüt maaşa aynı oranların uygulanması. Fark, yan hakkın tahmini net maliyetidir.",
      readHeading: "Onaylamadan önce kontrol edin",
      read: "Para birimi sabit yaklaşık katsayılarla dönüştürülür; güncel kur değildir. Emeklilik matrahını, primleri, fazla mesaiyi, izinleri ve sözleşme sınırlarını da kontrol edin.",
      bullets: [
        "Karşılaştırmanıza uygun para birimini seçin.",
        "Bordro veya plan belgesindeki efektif oranları kullanın.",
        "Net maliyeti yan hakkın sizin için gerçek değeriyle karşılaştırın.",
      ],
      tip: "Sonuç teklifle uyuşmuyorsa bordro biriminden hesap dökümünü isteyin ve primlerle diğer haklara etkisini sorun.",
    }),
  },
  zh: {
    title: "薪资牺牲到手工资计算器",
    description:
      "输入税前年薪、转入福利的金额和扣除比例，比较薪资转换前后的预计到手收入。",
    slug: "salary-sacrifice-take-home-calculator",
    ui: {
      eyebrow: "看清转换的实际代价",
      intro: "测试工资单中的假设",
      labelCurrency: "货币",
      currencyHint: "使用固定本地系数进行近似换算，不是实时汇率。",
      labelGross: "年度税前工资",
      grossHint: "扣税和员工扣款之前",
      labelContribution: "薪资转换金额",
      contributionHint: "填写报价或福利计划中的金额",
      labelBasis: "这个金额是",
      basisAnnual: "每年",
      basisPerPay: "每次发薪",
      labelPayPeriods: "发薪次数",
      pay12: "12次",
      pay14: "14次",
      labelIncomeTax: "有效所得税率",
      labelPayrollDeduction: "其他工资扣除",
      ratesHint: "使用自己的估算比例，不会自动查询税率。",
      btnCalculate: "比较到手工资",
      labelCashDropPerPay: "每次发薪预计减少",
      labelDecision: "这意味着什么",
      decision: "你用 {cost} 的到手工资换取每年 {benefit} 的福利价值。",
      decisionZero: "输入金额后即可比较两个场景。",
      labelCashBefore: "转换前到手",
      labelCashAfter: "转换后到手",
      labelContributionPerPay: "每次发薪的福利",
      labelSavingsPerPay: "每次发薪的税费和扣除节省",
      labelAnnualContribution: "年度福利",
      labelIncomeTaxSavings: "预计所得税节省",
      labelPayrollSavings: "预计扣除节省",
      labelEffectiveCost: "实际到手成本",
      labelFlow: "年度资金流",
      flowBefore: "转换前",
      flowAfter: "转换后",
      flowBenefit: "福利",
      labelAnnualView: "年度视图",
      labelAssumptions: "假设",
      errorGross: "请输入大于零的税前年薪。",
      errorContribution: "转换金额必须为零或小于税前年薪。",
      errorRates: "请输入0%到100%的比例，合计必须低于100%。",
      errorPayPeriods: "请选择12次或14次发薪。",
      errorBasis: "请选择金额按年计算还是按每次发薪计算。",
      disclaimer:
        "这是透明的估算，不是工资单或税务结论。货币转换使用固定的近似系数，不使用实时汇率。税费、社保和其他福利的影响取决于国家、计划和合同；请向薪资部门或提供方确认最终条件。",
      annualUnit: "每年",
      perPayUnit: "每次发薪",
      percentUnit: "%",
    },
    faq: [
      {
        question: "这个计算器估算什么？",
        answer:
          "它比较从税前工资中转出一笔金额前后的预计到手收入。税费和扣除比例由你输入，因此每个假设都清晰可见。",
      },
      {
        question: "到手工资会减少多少？",
        answer:
          "计算器把你输入的比例应用到两个场景，并显示每次发薪和全年差额。福利金额会单独显示。",
      },
      {
        question: "应该输入年度金额还是每次发薪金额？",
        answer:
          "选择与你的方案一致的形式。年度金额会分摊到12次或14次发薪；每次发薪金额会乘以所选次数。",
      },
      {
        question: "这是精确的税费计算吗？",
        answer:
          "不是。税费、社保、上限以及对其他福利的影响取决于国家和合同。最终金额请向薪资部门确认。",
      },
      {
        question: "实际到手成本是什么意思？",
        answer:
          "这是扣除场景中的税费和扣款节省后，预计减少的到手工资。它不等于福利的市场价格。",
      },
    ],
    howTo: [
      {
        name: "选择货币",
        text: "选择用于比较金额的货币。换算使用固定的近似比例。",
      },
      {
        name: "输入工资和转换金额",
        text: "填写年度税前年薪以及报价或计划中的金额。",
      },
      {
        name: "设置发薪次数和比例",
        text: "选择12次或14次发薪，然后填写有效税率和其他扣除比例。",
      },
      {
        name: "查看资金流",
        text: "在接受方案前比较到手减少、福利、节省和实际成本。",
      },
    ],
    seo: createSeo({
      heading: "检查薪资转换的实际到手成本",
      intro:
        "工资福利方案在看到工资单之前可能很有吸引力。真正需要判断的是每次发薪会少拿多少钱。这个计算器把减少的现金和福利的年度价值放在一起比较。",
      methodHeading: "计算比较的内容",
      method:
        "转换前 = 税前年薪减去你输入的税费和扣除比例。转换后 = 对扣除转换金额后的工资使用相同比例。两者差额就是福利的预计到手成本。",
      readHeading: "确认前需要检查什么",
      read: "货币使用固定的近似系数换算，不是当前汇率。还要检查养老金计算工资、奖金、加班、休假和合同中的限制。",
      bullets: [
        "选择适合比较的货币。",
        "使用工资单或福利计划中的有效比例。",
        "把到手成本和福利对你的实际价值进行比较。",
      ],
      tip: "如果结果与报价不一致，请向薪资部门索要计算明细，并确认对社保和其他福利的影响。",
    }),
  },
};

function createSchemas(locale: KnownLocale, copy: LocaleData) {
  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  const howToSchema: WithContext<HowTo> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: copy.title,
    description: copy.description,
    step: copy.howTo.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
  const applicationSchema: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: copy.title,
    description: copy.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: getDefaultCurrency(locale),
    },
    inLanguage: locale,
  };
  return [faqSchema, howToSchema, applicationSchema];
}

export function getLocalizedSalarySacrificeContent(
  locale: Exclude<KnownLocale, "en">,
): ToolLocaleContent<SalarySacrificeCalculatorUI> {
  const copy = data[locale];
  return {
    ...copy,
    bibliography,
    schemas: createSchemas(locale, copy),
  };
}
