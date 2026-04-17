import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MeetingCostCalculatorUI } from '../ui';

const slug = 'moteskostnadskalkylator';
const title = 'Möteskostnadskalkylator i Realtid';
const description =
  'Se i realtid hur mycket ditt möte kostar. Ange antal deltagare och genomsnittlig lön för att se beloppet ticka upp varje sekund.';

const faqData = [
  {
    question: 'Varför är det användbart att mäta möteskostnaden?',
    answer:
      'Att sätta en prislapp på mötestiden skapar en produktivitetsmedvetenhet. Det hjälper till att minska onödiga möten, uppmuntrar till punktlighet och säkerställer att de ämnen som diskuteras motiverar teamets ekonomiska investering.',
  },
  {
    question: 'Hur beräknas kostnaden i realtid?',
    answer:
      'Systemet tar den uppskattade års- eller timlönen för varje deltagare och beräknar en burn rate per sekund. Räknaren uppdateras varje animeringsruta för att visa den ackumulerade kostnaden i realtid.',
  },
  {
    question: 'Vilka indirekta kostnader inkluderar inte detta verktyg?',
    answer:
      'Denna kalkylator fokuserar på direkta lönekostnader. Den inkluderar inte alternativkostnader (vad anställda kunde ha producerat istället), eller fasta overheadkostnader som kontorshyra, mjukvarulicenser eller el.',
  },
  {
    question: 'Hur kan jag minska kostnaden för mina möten?',
    answer:
      'Definiera en tydlig agenda, begränsa deltagarna till endast nödvändiga personer, sätt en strikt tidsgräns och överväg om ett asynkront meddelande eller e-post skulle kunna uppnå samma resultat.',
  },
];

const howToData = [
  {
    name: 'Ange antal deltagare',
    text: 'Skriv hur många personer som för närvarande deltar i mötet.',
  },
  {
    name: 'Ställ in genomsnittlig lön',
    text: 'Ange en uppskattning av deltagarnas genomsnittliga årliga bruttolön eller timpris för en noggrann beräkning.',
  },
  {
    name: 'Starta räknaren',
    text: 'Tryck på Start-knappen så snart mötet börjar och se kostnaden ackumuleras i realtid.',
  },
  {
    name: 'Stoppa och reflektera',
    text: 'Pausa räknaren när mötet slutar. Granska den totala kostnaden och utvärdera om resultaten var värda investeringen.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'SEK' },
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<MeetingCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelAccumulated: 'Ackumulerad Kostnad',
    labelAttendees: 'Deltagare',
    labelSalary: 'Genomsnittlig Lön',
    optAnnual: 'Årsbrutto',
    optHourly: 'Timpris',
    btnStart: 'Starta Möte',
    btnPause: 'Pausa',
    btnResume: 'Återuppta',
    btnReset: 'Återställ',
    currencySymbol: 'kr',
    defaultSalary: '500000',
    numberLocale: 'sv-SE',
  },
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Källor',
  bibliography: [
    { name: 'Stop the Meeting Madness (Harvard Business Review)', url: 'https://hbr.org/2017/07/stop-the-meeting-madness' },
    { name: 'Time Wasting at Work (Atlassian)', url: 'https://www.atlassian.com/time-wasting-at-work-infographic' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Varför visualisera kostnaden för ett möte?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tid är den dyraste och minst förnybara resursen i alla organisationer. Det här verktyget är inte utformat för att motverka samarbete – det är utformat för att främja <strong>produktiv medvetenhet</strong>. När vi ser pengar "brinna" i realtid blir vi mer punktliga, mer kortfattade och mer medvetna om vad som står på agendan.',
    },
    {
      type: 'card',
      title: 'Matematiken bakom den dolda kostnaden',
      html: '<p>Vi beräknar kostnaden baserat på årlig bruttolön eller timpris. För årslöner använder vi en industristandard på <strong>1 750 arbetstimmar per år</strong> (efter avdrag för semester och helgdagar) för att omvandla lönen till ett timpris.</p><p>Formeln är:<br><code>(Timpris × Antal deltagare) / 3600</code><br>Detta ger den exakta kostnaden per sekund som visas i räknaren.</p>',
    },
    {
      type: 'code',
      code: 'Årslön: 500 000 kr\nTimpris: 500 000 / 1 750 = 285.71 kr/tim\nBurn Rate (4 personer): (285.71 × 4) / 3600 = 0.317 kr/sek\nKostnad för ett 1-timmarsmöte: 1 142.84 kr',
    },
    {
      type: 'title',
      text: 'Tips för effektivare möten',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>2-pizza-regeln:</strong> Populariserad av Jeff Bezos – om två pizzor inte kan mätta alla i mötet är det för många personer i rummet.',
        '<strong>Ingen agenda, inget möte:</strong> Acceptera aldrig ett möte utan en tydlig agenda och definierade mål.',
        '<strong>Stående möten:</strong> Håll dagliga synkmöten stående. Fysiskt obehag främjar kortfattathet.',
        '<strong>Parkinsons lag:</strong> Arbete expanderar för att fylla den tid som finns tillgänglig. Sätt en fast tid på 25 eller 50 minuter.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Använd räknaren live:</strong> Dela din skärm med möteskostnadsräknaren under teammöten. Det synliga beloppet skapar ett naturligt incitament att hålla sig till ämnet.',
    },
  ],
};
