import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SettlementCalculatorUI } from '../ui';

const slug = 'abfindungsrechner-spanien';
const title = 'Abfindungsrechner Spanien 2026: Finiquito berechnen';
const description =
  'Berechnen Sie Ihre Abfindung und Endabrechnung (Finiquito) in Spanien Schritt für Schritt: Nicht genutzte Urlaubstage, anteilige Sonderzahlungen und Entschädigungen.';

const faqData = [
  {
    question: 'Habe ich bei einer Eigenkündigung Anspruch auf eine Endabrechnung?',
    answer:
      'Ja, absolut. Die Endabrechnung (Finiquito) umfasst bereits erworbene Beträge wie die im aktuellen Monat gearbeiteten Tage, nicht genutzte Urlaubstage und den anteiligen Teil der Sonderzahlungen. Sie haben jedoch keinen Anspruch auf eine Abfindung oder Arbeitslosengeld.',
  },
  {
    question: 'Wie hoch ist die Abfindung bei einer unrechtmäßigen Kündigung?',
    answer:
      'Für Verträge, die nach dem 12. Februar 2012 unterzeichnet wurden, beträgt der Anspruch 33 Tage Gehalt pro gearbeitetem Jahr, bis zu einem Maximum von 24 Monatsgehältern.',
  },
  {
    question: 'Kann mein Arbeitgeber Geld abziehen, wenn ich die Kündigungsfrist nicht einhalte?',
    answer:
      'Ja. Wenn Ihr Vertrag eine Kündigungsfrist (meist 15 Tage) vorsieht und Sie diese nicht einhalten, hat das Unternehmen das Recht, das Gehalt für die fehlenden Tage von der Endabrechnung abzuziehen.',
  },
  {
    question: 'Was passiert mit dem Urlaub in der Endabrechnung?',
    answer:
      'Wenn Sie für nicht genutzten Urlaub bezahlt werden, muss das Unternehmen für diese Tage weiterhin Sozialversicherungsbeiträge für Sie abführen. In diesem Zeitraum können Sie noch kein Arbeitslosengeld beziehen.',
  },
];

const howToData = [
  {
    name: 'Bruttogehalt eingeben',
    text: 'Geben Sie Ihr Jahresbruttogehalt ein und wählen Sie die Anzahl der Gehaltszahlungen pro Jahr.',
  },
  {
    name: 'Daten festlegen',
    text: 'Geben Sie das Startdatum im Unternehmen und Ihren letzten Arbeitstag ein.',
  },
  {
    name: 'Urlaubstage hinzufügen',
    text: 'Geben Sie an, wie viele Urlaubstage Sie im laufenden Jahr noch offen haben.',
  },
  {
    name: 'Grund des Ausscheidens',
    text: 'Wählen Sie den Grund, damit der Simulator den korrekten Abfindungssatz anwendet.',
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

export const content: ToolLocaleContent<SettlementCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelSalary: 'Jahresbruttogehalt',
    labelExtraPayments: 'Sonderzahlungen pro Jahr',
    labelStartDate: 'Eintrittsdatum',
    labelEndDate: 'Austrittsdatum',
    labelVacationDays: 'Offene Urlaubstage',
    labelDepartureReason: 'Grund des Ausscheidens',
    opt12pays: '12 Zahlungen (pro rata)',
    opt14pays: '14 Zahlungen (Standard)',
    optImprocedente: 'Unberechtigte Kündigung (33 Tage)',
    optObjetivo: 'Betriebsbedingte Kündigung (20 Tage)',
    optTemporal: 'Ende eines Zeitvertrags (12 Tage)',
    optVoluntaria: 'Eigenkündigung (keine Abfindung)',
    labelTotal: 'Geschätzte Endabrechnung',
    labelSeverance: 'Abfindung',
    labelVacation: 'Urlaubsauszahlung',
    labelExtras: 'Anteilige Sonderzahlungen',
    labelMonthSalary: 'Monatsgehalt',
    disclaimer:
      'Hinweis: Dies ist eine grobe Schätzung basierend auf dem spanischen Arbeitsrecht. Der finale Betrag kann je nach Tarifvertrag und Steuern variieren.',
    btnCopy: 'Zusammenfassung kopieren',
    copySuccess: 'Kopiert',
    copySummaryTitle: 'Zusammenfassung der Endabrechnung',
    defaultSalary: '24000',
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
      text: 'Abfindung und Finiquito in Spanien verstehen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Das Ende eines Arbeitsverhältnisses in Spanien ist oft mit finanziellen Unsicherheiten verbunden. Ob <strong>Kündigung</strong> oder <strong>Resignation</strong>, es ist wichtig zu wissen, welcher Betrag Ihnen rechtlich zusteht.',
    },
    {
      type: 'title',
      text: 'Finiquito vs. Indemnización',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Finiquito:</strong> Die Abrechnung aller noch offenen Beträge (Urlaub, laufender Monat, Weihnachtsbonus). Steht jedem Mitarbeiter zu.',
        '<strong>Indemnización:</strong> Die eigentliche Abfindung als Entschädigung für den Verlust des Arbeitsplatzes.',
      ],
    },
  ],
};
