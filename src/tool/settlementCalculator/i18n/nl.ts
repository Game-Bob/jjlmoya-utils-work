import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SettlementCalculatorUI } from '../ui';

const slug = 'transitievergoeding-berekenen-spanje';
const title = 'Ontslagvergoeding Calculator Spanje 2026: Finiquito berekenen';
const description =
  'Bereken stap voor stap je bruto ontslagvergoeding in Spanje: ongebruikte vakantiedagen, bonusbetalingen en compensatie op basis van de Spaanse arbeidswet.';

const faqData = [
  {
    question: 'Heb ik recht op een afrekening als ik vrijwillig ontslag neem?',
    answer:
      'Ja, absoluut. De afrekening (finiquito) omvat bedragen die al zijn opgebouwd, zoals gewerkte dagen in de huidige maand, ongebruikte vakantiedagen en het evenredige deel van bonusbetalingen. U heeft echter geen recht op een ontslagvergoeding.',
  },
  {
    question: 'Op welke vergoeding heb ik recht bij onredelijk ontslag?',
    answer:
      'Voor contracten getekend na 12 februari 2012 is de vergoeding 33 dagen salaris per gewerkt jaar, tot een maximum van 24 maandsalarissen.',
  },
  {
    question: 'Mag mijn werkgever geld inhouden als ik geen opzegtermijn aanhoud?',
    answer:
      'Ja. Als uw contract een opzegtermijn vereist (meestal 15 dagen) en u houdt zich hier niet aan, heeft het bedrijf het recht om het salaris voor de ontbrekende dagen in te houden op uw finiquito.',
  },
  {
    question: 'Wat gebeurt er met vakantiedagen en sociale lasten in de afrekening?',
    answer:
      'Wanneer u uitbetaald krijgt voor ongebruikte vakantiedagen, moet het bedrijf voor die dagen sociale premies blijven afdragen. Gedurende die periode kunt u nog niet starten met een WW-uitkering.',
  },
];

const howToData = [
  {
    name: 'Voer je brutosalaris in',
    text: 'Typ je bruto jaarsalaris en selecteer het aantal betalingstermijnen (meestal 12 of 14).',
  },
  {
    name: 'Stel de exacte data in',
    text: 'Voer de datum in waarop je bij het bedrijf bent begonnen en je laatste werkdag.',
  },
  {
    name: 'Voeg vakantiedagen toe',
    text: 'Geef aan hoeveel vakantiedagen je dit jaar nog over hebt.',
  },
  {
    name: 'Kies de reden van vertrek',
    text: 'Selecteer de reden van vertrek zodat de calculator de juiste vergoeding toepast.',
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
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<SettlementCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelSalary: 'Bruto Jaarsalaris',
    labelExtraPayments: 'Extra betalingen per jaar',
    labelStartDate: 'Startdatum',
    labelEndDate: 'Einddatum',
    labelVacationDays: 'Ongebruikte vakantiedagen',
    labelDepartureReason: 'Reden van vertrek',
    opt12pays: '12 betalingen (Geproreerd)',
    opt14pays: '14 betalingen (Standaard)',
    optImprocedente: 'Onredelijk Ontslag (33 dagen)',
    optObjetivo: 'Objectief Ontslag (20 dagen)',
    optTemporal: 'Einde Tijdelijk Contract (12 dagen)',
    optVoluntaria: 'Vrijwillig Ontslag (Geen vergoeding)',
    labelTotal: 'Geschatte Totale Afrekening',
    labelSeverance: 'Ontslagvergoeding',
    labelVacation: 'Ongebruikte vakantie',
    labelExtras: 'Geproreerde bonussen',
    labelMonthSalary: 'Maandsalaris',
    disclaimer:
      'Let op: Dit is een bruto schatting op basis van de algemene Spaanse arbeidswet. Het uiteindelijke bedrag kan variëren.',
    btnCopy: 'Kopieer Samenvatting',
    copySuccess: 'Gekopieerd',
    copySummaryTitle: 'Samenvatting Geschatte Afrekening',
    defaultSalary: '24000',
  },
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Bronnen',
  bibliography: [],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Gids voor Ontslagvergoeding en Finiquito in Spanje',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Het einde van een arbeidsovereenkomst in Spanje kan financieel onzeker zijn. Of het nu gaat om <strong>ontslag</strong> of <strong>rezygnatie</strong>, het is essentieel om te weten waar je recht op hebt.',
    },
  ],
};
