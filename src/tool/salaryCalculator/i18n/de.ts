import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SalaryCalculatorUI } from '../ui';

const slug = 'gehaltsrechner-spanien';
const title = 'Gehaltsrechner Spanien: Nettolohn Simulator IRPF und Sozialversicherung';
const description =
  'Finden Sie heraus, wie viel Sie tatsächlich jeden Monat verdienen werden. Genaue Berechnung von Einbehalten, Steuerbemessungsgrundlage und Nettoeinkommen nach spanischen Vorschriften.';

const faqData = [
  {
    question: 'Wie wird das Nettogehalt in Spanien berechnet?',
    answer:
      'Das Nettogehalt wird berechnet, indem IRPF-Einbehalte (nach Tarifen) und Sozialversicherungsbeiträge (ca. 6,35 % des Bruttogehalts) vom Bruttobetrag abgezogen werden. Der Prozentsatz der IRPF variiert je nach Ihrer persönlichen Situation und Gehaltshöhe.',
  },
  {
    question: 'Was ist der Unterschied zwischen 12 und 14 Gehaltszahlungen?',
    answer:
      'Bei 12 Zahlungen wird das Urlaubsgeld monatlich verteilt. Bei 14 Zahlungen erhalten Sie zwei Sonderzahlungen (normalerweise im Juni/Juli und Dezember). Das Jahresbrutto ist gleich, nur die Verteilung ändert sich.',
  },
  {
    question: 'Warum stimmt meine Gehaltsabrechnung nicht genau mit dem Rechner überein?',
    answer:
      'Dieser Rechner verwendet standardisierte Näherungswerte. Ihre tatsächliche Abrechnung kann abweichen aufgrund von: unternehmensspezifischen Abzügen, Sachbezügen, unterhaltspflichtigen Kindern, Behinderung oder persönlichen Situationen, die die IRPF beeinflussen.',
  },
  {
    question: 'Welchen Prozentsatz meines Gehalts behält das Finanzamt ein?',
    answer:
      'Das hängt von Ihrem Gehalt ab. Im Allgemeinen werden zwischen IRPF und Sozialversicherung 25 % bis 45 % des Bruttogehalts einbehalten. Je höher das Gehalt, desto höher der Einbehaltsprozentsatz aufgrund des progressiven IRPF-Systems.',
  },
  {
    question: 'Was ist die IRPF?',
    answer:
      'Die Einkommensteuer für natürliche Personen. Es handelt sich um eine progressive Steuer: Wer mehr verdient, zahlt einen höheren Prozentsatz auf die höheren Stufen seines Gehalts.',
  },
];

const howToData = [
  {
    name: 'Jahresbruttogehalt eingeben',
    text: 'Geben Sie den in Ihrem Vertrag vereinbarten Gesamtbetrag vor Steuern und Abzügen ein.',
  },
  {
    name: 'Familiäre Situation festlegen',
    text: 'Geben Sie an, ob Sie Kinder oder Unterhaltsberechtigte haben, da dies den Prozentsatz der auf Sie angewandten IRPF reduziert.',
  },
  {
    name: 'Anzahl der Gehaltszahlungen',
    text: 'Wählen Sie, ob Sie Ihr Gehalt in 12 Zahlungen (Sonderzahlungen verteilt) oder 14 Zahlungen erhalten.',
  },
  {
    name: 'Monatliche Aufschlüsselung prüfen',
    text: 'Prüfen Sie, wie viel an die Sozialversicherung und IRPF geht und wie hoch das genaue Nettoeinkommen ist, das auf Ihrem Bankkonto eingeht.',
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

export const content: ToolLocaleContent<SalaryCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelGross: 'Jährliches Bruttogehalt',
    labelPays: 'Anzahl der Zahlungen',
    btn12: '12 Zahlungen',
    btn14: '14 Zahlungen',
    labelAge: 'Alter',
    labelContract: 'Vertragsart',
    optIndefinite: 'Unbefristet / Allgemein',
    optTemporal: 'Befristet',
    btnCalculate: 'Nettogehalt berechnen',
    labelNetMonthly: 'Monatliches Nettogehalt',
    labelNetAnnual: 'Jährliches Nettogehalt',
    labelPaysDisplay: 'Zahlungsperioden',
    labelBreakdown: 'Aufschlüsselung der Einbehalte (geschätzt)',
    labelIRPF: 'IRPF',
    labelSS: 'Sozialversicherung',
    disclaimer:
      '*Vereinfachte Berechnung für einen ledigen Arbeitnehmer, ohne Kinder und unter 65 Jahre alt.',
  },
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Quellen',
  bibliography: [],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Wo verschwindet mein Bruttogehalt?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Es ist die häufigste Überraschung beim ersten Job: Sie unterschreiben einen Vertrag über 24.000 € pro Jahr, teilen durch 12 und erwarten 2.000 € pro Monat, finden aber nur 1.600 € auf Ihrem Konto. Wo sind die restlichen 400 €?',
    },
    {
      type: 'paragraph',
      html: 'In Spanien wird die Differenz zwischen <strong>Brutto</strong> (was das Unternehmen zahlt) und <strong>Netto</strong> (was Sie erhalten) auf zwei Hauptposten aufgeteilt: IRPF und Sozialversicherung. Diese zu verstehen, ist der Schlüssel zur Aushandlung von Gehaltserhöhungen.',
    },
    {
      type: 'title',
      text: 'Sozialversicherung: Die ~6,35 %, die Ihre Zukunft finanzieren',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Es ist ein fester Beitrag für fast alle Arbeitnehmer. Er hängt nicht davon ab, ob Sie ledig oder verheiratet sind. Mit diesem Geld finanzieren Sie:',
    },
    {
      type: 'list',
      items: [
        '<strong>Allgemeine Risiken (4,70 %)</strong>: Deckt Fehlzeiten aufgrund von allgemeiner Krankheit, Unfällen außerhalb der Arbeit, Rente und Mutterschutz ab.',
        '<strong>Arbeitslosigkeit (1,55 % oder 1,60 %)</strong>: Ihr Beitrag zum Arbeitslosengeld, falls Sie Ihren Job verlieren. Variiert leicht, wenn der Vertrag befristet ist.',
        '<strong>Berufliche Bildung (0,10 %)</strong>: Für geförderte Fortbildungskurse und Umschulungen.',
      ],
    },
    {
      type: 'title',
      text: 'IRPF: Die Steuer, die am meisten wehtut',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sie ist progressiv und kann je nach Gehalt und persönlicher Situation zwischen 2 % und 47 % liegen. Es ist keine feste Steuer, sondern eine Vorauszahlung an das Finanzamt. Das Unternehmen berechnet, wie viel Steuern Sie im nächsten Jahr voraussichtlich zahlen müssen, und zieht dies Monat für Monat ab.',
    },
    {
      type: 'title',
      text: 'Faktoren, die Ihre IRPF senken',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Kinder haben (insbesondere unter 3 Jahren).',
        'Eine anerkannte Behinderung haben (>33 %).',
        'Einen abhängigen Ehepartner mit geringem Einkommen haben.',
      ],
    },
    {
      type: 'title',
      text: 'Staatliche IRPF-Tarifstufen (ca. 2026)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '0 € - 12.450 €: 19 %',
        '12.450 € - 20.200 €: 24 %',
        '20.200 € - 35.200 €: 30 %',
        '35.200 € - 60.000 €: 37 %',
        '> 60.000 €: 45 %',
      ],
    },
    {
      type: 'title',
      text: 'Die ewige Frage: 12 oder 14 Gehaltszahlungen?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Viele Arbeitnehmer bevorzugen 14 Zahlungen für die Sonderzahlungen im Sommer und zu Weihnachten. Andere bevorzugen (oder das Unternehmen schreibt vor), das Gehalt über 12 Monate zu verteilen. Mathematisch gesehen verdienen Sie pro Jahr genau das Gleiche.',
    },
    {
      type: 'list',
      items: [
        '<strong>12 ZAHLUNGEN</strong>: Sie verdienen jeden Monat mehr, erhalten aber kein Urlaubsgeld. Besser für einen konstanten monatlichen Cashflow.',
        '<strong>14 ZAHLUNGEN</strong>: Sie verdienen jeden Monat etwas weniger, erhalten aber zwei Doppelauszahlungen pro Jahr. Funktioniert wie „Zwangssparen“.',
      ],
    },
  ],
};
