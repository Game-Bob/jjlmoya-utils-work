import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IrpfCalculatorUI } from '../ui';

const slug = 'irpf-rechner-spanien';
const title = 'IRPF-Rechner 2026: Nettolohn-Simulator Spanien';
const description =
  'Berechnen Sie Ihr monatliches und jährliches Nettogehalt für 2026 in Spanien. Aktualisierter Simulator mit staatlichen und regionalen Tarifen, MEI und familiärer Situation.';

const faqData = [
  {
    question: 'Wie beeinflusst der MEI mein Nettogehalt im Jahr 2026?',
    answer:
      'Der Generationengerechtigkeitsmechanismus (MEI) steigt im Jahr 2026 auf 0,90 %, um die Nachhaltigkeit der Renten zu gewährleisten. Der Großteil wird vom Arbeitgeber getragen, aber Arbeitnehmer sehen ihr Nettogehalt durch ihren Beitragsanteil reduziert.',
  },
  {
    question: 'Warum unterscheidet sich mein Nettogehalt in Madrid von dem in Katalonien?',
    answer:
      'Die IRPF ist eine zu 50 % an die Autonomen Gemeinschaften abgetretene Steuer. Madrid wendet niedrigere Sätze als die staatliche Skala an, während Katalonien eine eigene Skala hat, die den anfänglichen Einbehalt erhöhen kann.',
  },
  {
    question: 'Was ist der Grenzsteuersatz und wie betrifft er mich?',
    answer:
      'Der Grenzsteuersatz ist der Steuersatz, der auf den letzten verdienten Euro anfällt. Er zeigt, was Sie eine Gehaltserhöhung oder ein Bonus tatsächlich an Steuern kostet.',
  },
  {
    question: 'Wie viele Gehaltszahlungen sollte ich für die monatliche Berechnung wählen?',
    answer:
      'Normalerweise erhalten Sie 12 oder 14 Gehaltszahlungen (mit Sonderzahlungen im Sommer und zu Weihnachten). Wählen Sie die Option, die Ihr Unternehmen nutzt, um Ihr tatsächliches monatliches Nettoeinkommen zu erfahren.',
  },
  {
    question: 'Ist dieser Rechner für meine Steuererklärung zuverlässig?',
    answer:
      'Dieses Tool bietet eine Schätzung basierend auf den Vorschriften für 2026. Der monatliche Einbehalt ist eine Annäherung; Ihr tatsächliches Endergebnis wird bei der Abgabe der Steuererklärung im Juni festgelegt.',
  },
];

const howToData = [
  {
    name: 'Geben Sie Ihr Bruttogehalt ein',
    text: 'Geben Sie den jährlichen Gesamtbetrag an, der in Ihrem Vertrag vor Abzügen oder Einbehalten aufgeführt ist.',
  },
  {
    name: 'Definieren Sie Ihre persönliche Situation',
    text: 'Geben Sie die Anzahl Ihrer Kinder, eine anerkannte Behinderung und Ihren Familienstand an, um gesetzliche Steuerfreibeträge anzuwenden.',
  },
  {
    name: 'Wählen Sie Ihre Autonome Gemeinschaft',
    text: 'Ihr steuerlicher Wohnsitz bestimmt den angewandten regionalen Steuersatz, was sich auf Ihr endgültiges Nettoeinkommen auswirkt.',
  },
  {
    name: 'Überprüfen Sie die Aufschlüsselung',
    text: 'Sehen Sie, wie viel in die IRPF und die Sozialversicherung fließt und wie hoch Ihr reales monatliches und jährliches Nettogehalt ist.',
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
  inLanguage: 'de',
};

export const content: ToolLocaleContent<IrpfCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    titleVariables: 'Berechnungsvariablen',
    titleCalculo: 'Transparente Berechnung 2026',
    labelBruto: 'Jährliches Bruttogehalt (€)',
    labelPagas: 'Anzahl der Gehaltszahlungen',
    labelComunidad: 'Steuerlicher Wohnsitz',
    labelHijos: 'Kinder (unter 25)',
    labelDiscapacidad: 'Grad der Behinderung',
    labelUnidad: 'Familieneinheit oder Lebensgemeinschaft',
    opt12pagas: '12 Zahlungen',
    opt14pagas: '14 Zahlungen',
    optGen: 'Gemeinsames Territorium (Allgemein)',
    optMad: 'Madrid',
    optCat: 'Katalonien',
    optAnd: 'Andalusien',
    optVal: 'Region Valencia',
    optPV: 'Baskenland (Foral)',
    optNav: 'Navarra (Foral)',
    optNinguna: 'Keine',
    opt33: '> 33 %',
    opt65: '> 65 %',
    optSoltero: 'Ledig, geschieden oder verwitwet',
    optCasadoLow: 'Verheiratet (Ehepartner verdient weniger als 1.500 €/Jahr)',
    optCasadoHigh: 'Verheiratet (Ehepartner hat Einkommen)',
    labelSalarioBruto: 'Bruttogehalt',
    labelSS: 'Sozialversicherung / MEI (-)',
    labelGastos: 'Abzugsfähige Ausgaben (Art. 20)',
    labelNetoAnual: 'JÄHRLICHES NETTOGEHALT',
    labelRetencionIRPF: 'IRPF-Einbehalt (%)',
    labelNetoMensual: 'Verfügbares monatliches Netto',
    labelMarginal: 'Angewandter Grenzsteuersatz',
    resultRetention: 'IRPF-Einbehalt (%)',
    resultAnual: '/ Jahr',
    infoText:
      'AEAT-Algorithmus (Bruttosteuer - Mindeststeuer) validiert für 2026. Enthält MEI-Beitrag von 6,47 % und Ermäßigungen für Arbeitseinkommen. jjlmoya.es.',
  },
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Quellen',
  bibliography: [
    {
      name: 'Steuerbehörde: IRPF',
      url: 'https://sede.agenciatributaria.gob.es/Sede/irpf.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'IRPF-Rechner 2026: Vollständiger Leitfaden zum neuen Steuerszenario',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Einkommensteuer für natürliche Personen (IRPF) ist die wichtigste Abgabe im spanischen Steuersystem und wirkt sich direkt auf die monatliche Gehaltsabrechnung von Millionen von Arbeitnehmern aus. Im Jahr 2026 erleben wir eine Konsolidierung verschiedener Reformen, die auf Progressivität und Anpassung an neue wirtschaftliche Realitäten abzielen, wie die Erhöhung des Generationengerechtigkeitsmechanismus (MEI) und die Deflationierung der Tarife in verschiedenen Autonomen Gemeinschaften.',
    },
    {
      type: 'paragraph',
      html: 'Unser <strong>IRPF-Rechner für 2026</strong> wurde entwickelt, um einen genauen und aktuellen Einblick in das zu geben, was tatsächlich auf Ihrem Bankkonto ankommt. Die Berechnung des Nettogehalts besteht nicht einfach darin, einen festen Prozentsatz abzuziehen; es ist ein mathematischer Prozess, der Ihre persönliche Situation, Unterhaltsberechtigte, Behinderung und entscheidend Ihren steuerlichen Wohnsitz berücksichtigt, da jede Region in Spanien die Kontrolle über den regionalen Steuerabschnitt hat.',
    },
    {
      type: 'title',
      text: 'Was ändert sich bei den Gehaltsabrechnungen 2026?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Um Ihre Simulationsergebnisse zu verstehen, ist es wichtig, die Säulen der Einbehaltsberechnungen in diesem Jahr zu kennen:',
    },
    {
      type: 'list',
      items: [
        '<strong>MEI-Auswirkung:</strong> Der Generationengerechtigkeitsmechanismus setzt seinen Aufwärtspfad fort, um die Renten zu garantieren, und erreicht im Jahr 2026 0,90 %. Der Großteil wird vom Arbeitgeber getragen, aber Arbeitnehmer sehen ihren Beitrag auf etwa 0,15 % erhöht, was das Nettoeinkommen leicht reduziert.',
        '<strong>SMI und Ermäßigungen:</strong> Der interprofessionelle Mindestlohn fungiert als Barriere. Geringe Einkommen profitieren von einer erweiterten Ermäßigung für Arbeitseinkommen, um sicherzustellen, dass Bruttogehaltserhöhungen nicht durch höhere Steuerabzüge aufgezehrt werden.',
        '<strong>Regionale Tarife:</strong> Regionen wie Madrid, Andalusien oder Murcia wenden in der Regel niedrigere Sätze als der staatliche Durchschnitt an, während Katalonien oder die Region Valencia eigene Skalen haben, die den Einbehalt bei höheren Einkommensstufen erhöhen können.',
      ],
    },
    {
      type: 'title',
      text: 'Kernkonzepte zum Verständnis Ihres Nettogehalts',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Steuerbemessungsgrundlage vs. Bruttogehalt:</strong> Sie zahlen keine Steuern auf alles, was Sie verdienen. Die Grundlage, auf der die IRPF berechnet wird, ist das Ergebnis der Subtraktion der Sozialversicherungsbeiträge (ca. 6,45 %) und eines pauschalen Abzugs für Werbungskosten (2.000 € jährlich) von Ihrem Bruttogehalt. Auf dieses Ergebnis werden dann die steuerfreien Grundbeträge angewendet.',
    },
    {
      type: 'title',
      text: 'Grundbegriffe',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Grenzsteuersatz:</strong> Der Steuersatz auf Ihren letzten verdienten Euro. Wichtig, um zu wissen, wie viel eine Gehaltserhöhung oder ein Bonus tatsächlich an Steuern kostet.',
        '<strong>Existenzminimum:</strong> Einkommen, das der Staat als wesentlich ansieht, um die Grundbedürfnisse des Steuerpflichtigen und seiner Familie zu decken, und das daher steuerfrei bleibt.',
        '<strong>Lohnsteuerabzug:</strong> Abschlagszahlung, die Arbeitgeber monatlich in Ihrem Namen an die Steuerbehörde abführen, basierend auf einer Schätzung dessen, was Sie am Jahresende schulden werden.',
        '<strong>Nettoeinkommen:</strong> Bruttogehalt abzüglich der nach dem Steuerrecht zulässigen Sozialversicherungsbeiträge und abzugsfähigen Ausgaben.',
      ],
    },
    {
      type: 'title',
      text: 'So optimieren Sie Ihren IRPF-Einbehalt',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Viele Arbeitnehmer fragen sich, ob sie ihren Arbeitgeber bitten sollten, mehr oder weniger einzubehalten. In Wirklichkeit ist der Einbehalt eine „Vorauszahlung“ an die Steuerbehörde. Wenn Ihnen im Laufe des Jahres zu wenig einbehalten wurde, kann Ihre Steuererklärung eine Nachzahlung ergeben; bei zu hohem Einbehalt erhalten Sie eine Rückerstattung.',
    },
    {
      type: 'paragraph',
      html: '<strong>Der Mythos vom Steuerklassen-Sprung:</strong> Es gibt den Mythos, dass ein Wechsel in eine höhere Steuerklasse bedeutet, dass man weniger netto verdient. Das ist falsch. Die IRPF ist progressiv; nur das Einkommen, das den Schwellenwert übersteigt, wird mit dem höheren Steuersatz besteuert. Sie werden durch eine Bruttoerhöhung niemals weniger netto verdienen, selbst bei einem höheren Grenzsteuersatz.',
    },
    {
      type: 'paragraph',
      html: '<strong>Tipp für Familien:</strong> Stellen Sie sicher, dass Sie die Geburt von Kindern oder Änderungen des Behinderungsstatus von Familienmitgliedern korrekt mit dem Formular 145 gemeldet haben. Dies passt Ihren monatlichen Einbehalt an und vermeidet Überraschungen bei der Steuererklärung im Juni.',
    },
    {
      type: 'title',
      text: 'Unterschiede nach Autonomer Gemeinschaft',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die steuerliche Dezentralisierung in Spanien bedeutet, dass zwei Personen mit demselben Gehalt und derselben familiären Situation unterschiedliche Nettoeinkommen haben, je nachdem, ob sie in Toledo oder Barcelona leben. Die Gemeinschaften kontrollieren die Hälfte der Steuer (regionaler Anteil). Madrid zeichnet sich zum Beispiel durch die niedrigsten Sätze auf fast allen Einkommensstufen aus, während andere Regionen Abzüge für Miete oder Bildung der Kinder anwenden, die national nicht verfügbar sind. Unser Rechner berücksichtigt diese Abweichungen, um Ihnen die realistischste Zahl basierend auf Ihrem Standort zu liefern.',
    },
    {
      type: 'paragraph',
      html: 'Zusammenfassend lässt sich sagen, dass die <strong>Nettolohnsimulation 2026</strong> ein grundlegendes Instrument der Finanzplanung ist. Die Kenntnis Ihrer tatsächlichen Sparfähigkeit und das Verständnis dafür, welcher Teil Ihres Einkommens der Aufrechterhaltung öffentlicher Dienstleistungen dient, ermöglicht es Ihnen, fundierte Entscheidungen über Investitionen, Hypotheken oder berufliche Veränderungen zu treffen.',
    },
  ],
};
