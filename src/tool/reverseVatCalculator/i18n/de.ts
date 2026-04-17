import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReverseVatCalculatorUI } from '../ui';

const slug = 'netto-rechner-umsatzsteuer-spanien';
const title = 'Netto Rechner Umsatzsteuer: MwSt. aus Brutto herausrechnen';
const description =
  'Online-Rechner zur Ermittlung des Nettobetrags aus dem Bruttobetrag. Rechnen Sie die spanische MwSt. (IVA) aus jedem Gesamtbetrag heraus. Unverzichtbar für Freelancer.';

const faqData = [
  {
    question: 'Was bedeutet es, die MwSt. herauszurechnen?',
    answer:
      'Es ist der Prozess, die Bemessungsgrundlage (Netto) aus einem Gesamtpreis (Brutto) zu berechnen, der bereits die Steuer enthält. Dies ist wichtig für Freelancer, die Rechnungen auf Basis eines vereinbarten Endpreises erstellen müssen.',
  },
  {
    question: 'Wie berechnet man Netto aus Brutto manuell?',
    answer:
      'Bei einem Steuersatz von 21 % dividieren Sie den Bruttobetrag durch 1,21. Das Ergebnis ist der Nettobetrag. Die Differenz zwischen Brutto und Netto ist der MwSt.-Betrag.',
  },
  {
    question: 'Welche MwSt.-Sätze gibt es in Spanien?',
    answer:
      'In Spanien (IVA) gibt es drei Sätze: Allgemein (21 %), Ermäßigt (10 % für Lebensmittel, Gesundheit, Wohnen) und Stark ermäßigt (4 % für Grundnahrungsmittel wie Brot, Milch sowie Bücher).',
  },
  {
    question: 'Wann muss die MwSt. auf der Rechnung aufgeschlüsselt werden?',
    answer:
      'Immer wenn Sie eine professionelle Rechnung ausstellen. Sie müssen den Nettobetrag, den Steuersatz und den MwSt.-Betrag separat angeben.',
  },
];

const howToData = [
  {
    name: 'Bruttobetrag eingeben',
    text: 'Geben Sie den Endbetrag inklusive MwSt. ein, den Sie aufschlüsseln möchten.',
  },
  {
    name: 'MwSt.-Satz wählen',
    text: 'Wählen Sie zwischen 21 %, 10 % oder 4 %, je nach Kategorie Ihres Produkts oder Ihrer Dienstleistung.',
  },
  {
    name: 'Nettobetrag erhalten',
    text: 'Prüfen Sie die automatische Berechnung, die zeigt, wie viel Geld vor Steuern tatsächlich bei Ihnen verbleibt.',
  },
  {
    name: 'Daten für Rechnung kopieren',
    text: 'Nutzen Sie die berechneten Werte, um die Felder Netto und MwSt. in Ihrer Buchhaltungssoftware auszufüllen.',
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
  inLanguage: 'de',
};

export const content: ToolLocaleContent<ReverseVatCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelTotal: 'Bruttobetrag (inkl. MwSt.)',
    labelVatType: 'MwSt.-Satz',
    btn21: '21 %',
    btn10: '10 %',
    btn4: '4 %',
    btn0: '0 %',
    labelBase: 'Nettobetrag (Basis)',
    labelVat: 'MwSt. Anteil',
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
      text: ' MwSt. aus Brutto herausrechnen: Ein häufiger Fehler',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Viele Freelancer machen den Fehler, von einem Endpreis einfach 21 % abzuziehen, um das Netto zu erhalten. <strong>Das ist falsch!</strong> Wenn Sie 21 % von 100 € abziehen, erhalten Sie 79 €. Wenn Sie auf 79 € wieder 21 % MwSt. aufschlagen, landen Sie bei 95,59 € – nicht bei 100 €.',
    },
    {
      type: 'title',
      text: 'Die mathematische Erklärung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die MwSt. wird <strong>auf den Nettobetrag</strong> aufgeschlagen. Daher entspricht der Bruttobetrag 121 % des Nettos (bei 21 % MwSt.). Um zurückzurechnen, müssen wir dividieren. <code>Netto = Brutto / 1,21</code>.',
    },
    {
      type: 'code',
      code: 'Nettobetrag = Bruttobetrag / (1 + MwSt.-Satz)\nMwSt.-Betrag = Bruttobetrag - Nettobetrag',
    },
  ],
};
