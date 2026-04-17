import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MeetingCostCalculatorUI } from '../ui';

const slug = 'vergaderkosten-calculator';
const title = 'Vergaderkosten Calculator Realtime Ticker';
const description =
  'Bekijk in realtime hoeveel uw vergadering kost. Voer het aantal deelnemers en het gemiddelde salaris in om de teller elke seconde te zien oplopen.';

const faqData = [
  {
    question: 'Waarom is het nuttig om de kosten van een vergadering te meten?',
    answer:
      'Het toekennen van een geldbedrag aan vergadertijd creëert productiviteitsbewustzijn. Het helpt onnodige vergaderingen te verminderen, moedigt punctualiteit aan en zorgt ervoor dat de besproken onderwerpen de economische investering van het team rechtvaardigen.',
  },
  {
    question: 'Hoe wordt de realtime kostprijs berekend?',
    answer:
      'Het systeem neemt het geschatte jaar- of uursalaris van elke deelnemer en berekent een kostenpercentage per seconde. De ticker wordt bij elk animatieframe bijgewerkt om de opgebouwde kosten in realtime te tonen.',
  },
  {
    question: 'Welke indirecte kosten zijn niet inbegrepen in deze tool?',
    answer:
      'Deze calculator richt zich op de directe salariskosten. Het omvat geen opportuniteitskosten (wat medewerkers in plaats daarvan hadden kunnen produceren), of vaste kosten zoals kantoorhuur, softwarelicenties of nutsvoorzieningen.',
  },
  {
    question: 'Hoe kan ik de kosten van mijn vergaderingen verlagen?',
    answer:
      'Definieer een duidelijke agenda, beperk de deelnemers tot alleen de essentiële personen, stel een strikte tijdslimiet in en overweeg of een asynchroon bericht of e-mail hetzelfde resultaat kan bereiken.',
  },
];

const howToData = [
  {
    name: 'Voer het aantal deelnemers in',
    text: 'Typ hoeveel mensen er momenteel deelnemen aan de vergadering.',
  },
  {
    name: 'Stel het gemiddelde salaris in',
    text: 'Voer een schatting in van het gemiddelde bruto jaarsalaris of uurtarief van de deelnemers voor een nauwkeurige berekening.',
  },
  {
    name: 'Start de ticker',
    text: 'Druk op de Start-knop zodra de vergadering begint en zie de kosten in realtime oplopen.',
  },
  {
    name: 'Stop en reflecteer',
    text: 'Pauzeer de ticker wanneer de vergadering eindigt. Bekijk de totale kosten en evalueer of de behaalde resultaten de investering waard waren.',
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

export const content: ToolLocaleContent<MeetingCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelAccumulated: 'Opgebouwde Kosten',
    labelAttendees: 'Deelnemers',
    labelSalary: 'Gemiddeld Salaris',
    optAnnual: 'Bruto Jaarbasis',
    optHourly: 'Uurtarief',
    btnStart: 'Start Vergadering',
    btnPause: 'Pauze',
    btnResume: 'Hervatten',
    btnReset: 'Reset',
    currencySymbol: '€',
    defaultSalary: '55000',
    numberLocale: 'nl-NL',
  },
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Bronnen',
  bibliography: [
    { name: 'Stop the Meeting Madness (Harvard Business Review)', url: 'https://hbr.org/2017/07/stop-the-meeting-madness' },
    { name: 'Time Wasting at Work (Atlassian)', url: 'https://www.atlassian.com/time-wasting-at-work-infographic' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Waarom de kosten van een vergadering visualiseren?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tijd is de duurste en minst hernieuwbare bron in elke organisatie. Deze tool is niet ontworpen om samenwerking te ontmoedigen — hij is ontworpen om <strong>productiviteitsbewustzijn</strong> te bevorderen. Als we geld in realtime zien "verbranden", worden we punctueler, bondiger en bewuster over wat er op de agenda staat.',
    },
    {
      type: 'card',
      title: 'De berekening van de verborgen kosten',
      html: '<p>De kosten worden berekend op basis van het bruto jaarsalaris of uurtarief. Voor jaarsalarissen gebruiken we een standaard van <strong>1.750 werkuren per jaar</strong> (rekening houdend met vakanties en feestdagen) om het salaris om te zetten naar een uurtarief.</p><p>De formule voor het kostenpercentage is:<br><code>(Uurtarief × Aantal Deelnemers) / 3600</code><br>Dit geeft de exacte prijs per seconde die in de ticker wordt getoond.</p>',
    },
    {
      type: 'code',
      code: 'Jaarsalaris: € 85.000\nUurtarief: € 85.000 / 1.750 = € 48,57/uur\nKosten per seconde (4 personen): (€ 48,57 × 4) / 3600 = € 0,054/sec\nKosten van een vergadering van 1 uur: € 194,29',
    },
    {
      type: 'title',
      text: 'Tips voor efficiëntere vergaderingen',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>De 2-Pizza Regel:</strong> Gepopulariseerd door Jeff Bezos — als twee pizza's niet genoeg zijn om iedereen in de vergadering te voeden, zijn er te veel mensen in de kamer.',
        '<strong>Geen agenda, geen vergadering:</strong> Accepteer nooit een vergadering zonder duidelijke agenda en gedefinieerde doelstellingen.',
        '<strong>Stand-up vergaderingen:</strong> Houd dagelijkse syncs staand. Fysiek ongemak bevordert bondigheid en houdt discussies relevant.',
        '<strong>De wet van Parkinson:</strong> Werk expandeert om de beschikbare tijd te vullen. Stel een vast blok van 25 of 50 minuten in in plaats van de standaard een uur.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Gebruik de ticker live:</strong> Deel uw scherm met de vergaderkosten-ticker tijdens teamvergaderingen. Het zichtbare geldbedrag creëert een natuurlijke stimulans om bij het onderwerp te blijven en op tijd af te ronden.',
    },
  ],
};
