import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MeetingCostCalculatorUI } from '../ui';

const slug = 'besprechungskosten-rechner';
const title = 'Besprechungskosten-Rechner Echtzeit-Ticker';
const description =
  'Sehen Sie in Echtzeit, wie viel Ihre Besprechung kostet. Geben Sie die Anzahl der Teilnehmer und das Durchschnittsgehalt ein, um zuzusehen, wie der Betrag jede Sekunde steigt.';

const faqData = [
  {
    question: 'Warum ist es nützlich, die Kosten einer Besprechung zu messen?',
    answer:
      'Indem man der Besprechungszeit einen Geldwert zuweist, schafft man ein Bewusstsein für Produktivität. Es hilft, unnötige Meetings zu reduzieren, fördert Pünktlichkeit und stellt sicher, dass die besprochenen Themen die wirtschaftliche Investition des Teams rechtfertigen.',
  },
  {
    question: 'Wie werden die Echtzeitkosten berechnet?',
    answer:
      'Das System nimmt das geschätzte Jahres- oder Stundengehalt jedes Teilnehmers und berechnet eine Kostenrate pro Sekunde. Der Ticker aktualisiert sich bei jedem Animationsframe, um die aufgelaufenen Kosten in Echtzeit anzuzeigen.',
  },
  {
    question: 'Welche indirekten Kosten sind in diesem Tool nicht enthalten?',
    answer:
      'Dieser Rechner konzentriert sich auf die direkten Gehaltskosten. Opportunitätskosten (was Mitarbeiter stattdessen hätten produzieren können) oder fixe Gemeinkosten wie Büromiete, Softwarelizenzen oder Nebenkosten sind nicht enthalten.',
  },
  {
    question: 'Wie kann ich die Kosten meiner Besprechungen senken?',
    answer:
      'Definieren Sie eine klare Agenda, begrenzen Sie die Teilnehmer auf die wesentlichen Personen, setzen Sie ein striktes Zeitlimit und überlegen Sie, ob eine asynchrone Nachricht oder E-Mail dasselbe Ergebnis erzielen könnte.',
  },
];

const howToData = [
  {
    name: 'Geben Sie die Anzahl der Teilnehmer ein',
    text: 'Geben Sie ein, wie viele Personen derzeit an der Besprechung teilnehmen.',
  },
  {
    name: 'Legen Sie das Durchschnittsgehalt fest',
    text: 'Geben Sie eine Schätzung des durchschnittlichen Bruttojahresgehalts oder des Stundensatzes der Teilnehmer für eine genaue Berechnung ein.',
  },
  {
    name: 'Starten Sie den Ticker',
    text: 'Drücken Sie die Start-Taste, sobald die Besprechung beginnt, und beobachten Sie, wie die Kosten in Echtzeit auflaufen.',
  },
  {
    name: 'Anhalten und reflektieren',
    text: 'Wenn die Besprechung endet, halten Sie den Ticker an. Überprüfen Sie die Gesamtkosten und bewerten Sie, ob die erzielten Ergebnisse die Investition wert waren.',
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

export const content: ToolLocaleContent<MeetingCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelAccumulated: 'Aufgelaufene Kosten',
    labelAttendees: 'Teilnehmer',
    labelSalary: 'Durchschnittsgehalt',
    optAnnual: 'Jahresbrutto',
    optHourly: 'Stundensatz',
    btnStart: 'Meeting starten',
    btnPause: 'Pause',
    btnResume: 'Fortsetzen',
    btnReset: 'Zurücksetzen',
    currencySymbol: '€',
    defaultSalary: '75000',
    numberLocale: 'de-DE',
  },
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Quellen',
  bibliography: [
    { name: 'Meeting Madness beenden (Harvard Business Review)', url: 'https://hbr.org/2017/07/stop-the-meeting-madness' },
    { name: 'Zeitverschwendung am Arbeitsplatz (Atlassian)', url: 'https://www.atlassian.com/time-wasting-at-work-infographic' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Warum die Kosten eines Meetings visualisieren?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Zeit ist die teuerste und am wenigsten erneuerbare Ressource in jeder Organisation. Dieses Tool soll die Zusammenarbeit nicht entmutigen – es soll ein <strong>Bewusstsein für Produktivität</strong> fördern. Wenn wir zusehen, wie Geld in Echtzeit "verbrennt", werden wir pünktlicher, prägnanter und bewusster bei der Gestaltung der Agenda.',
    },
    {
      type: 'card',
      title: 'Die Mathematik hinter den versteckten Kosten',
      html: '<p>Wir berechnen die Kosten auf Basis des Bruttojahresgehalts oder des Stundensatzes. Bei Jahresgehältern verwenden wir einen branchenüblichen Standard von <strong>1.750 Arbeitsstunden pro Jahr</strong> (unter Berücksichtigung von Urlaub und Feiertagen), um das Gehalt in einen Stundensatz umzurechnen.</p><p>Die Formel lautet:<br><code>(Stundensatz × Anzahl der Teilnehmer) / 3600</code><br>Dies ergibt die exakten Kosten pro Sekunde, die im Ticker angezeigt werden.</p>',
    },
    {
      type: 'code',
      code: 'Jahresgehalt: 85.000 €\nStundensatz: 85.000 € / 1.750 = 48,57 €/Std\nKostenrate (4 Personen): (48,57 € × 4) / 3600 = 0,054 €/Sek\nKosten eines einstündigen Meetings: 194,29 €',
    },
    {
      type: 'title',
      text: 'Tipps für effizientere Besprechungen',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Die 2-Pizza-Regel:</strong> Von Jeff Bezos geprägt – wenn zwei Pizzen nicht ausreichen, um alle Teilnehmer satt zu bekommen, sind zu viele Leute im Raum.',
        '<strong>Keine Agenda, kein Meeting:</strong> Akzeptieren Sie niemals ein Meeting ohne klare Agenda und definierte Ziele.',
        '<strong>Stand-up-Meetings:</strong> Führen Sie tägliche Synchronisationen im Stehen durch. Körperliches Unbehagen fördert die Kürze.',
        '<strong>Parkinsons Gesetz:</strong> Arbeit dehnt sich in dem Maße aus, wie Zeit für ihre Erledigung zur Verfügung steht. Setzen Sie 25- oder 50-Minuten-Slots.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Nutzen Sie den Ticker live:</strong> Teilen Sie Ihren Bildschirm mit dem Ticker während Team-Meetings. Der sichtbare Geldbetrag schafft einen natürlichen Anreiz, beim Thema zu bleiben.',
    },
  ],
};
