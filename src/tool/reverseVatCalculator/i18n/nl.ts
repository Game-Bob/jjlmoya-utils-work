import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReverseVatCalculatorUI } from '../ui';

const slug = 'btw-terugrekenen-spanje';
const title = 'BTW Terugrekenen: Bereken de Belastbare Grondslag Spanje';
const description =
  'Online tool voor het terugrekenen van BTW (IVA). Bereken de belastbare grondslag vanuit elk totaalbedrag. Onmisbaar voor freelancers en facturatie in Spanje.';

const faqData = [
  {
    question: 'Wat is BTW terugrekenen of uitsplitsen?',
    answer:
      'Het is het proces waarbij de belastbare grondslag (het bedrag exclusief BTW) wordt berekend vanuit een totaalprijs inclusief BTW. Dit is essentieel voor freelancers die een factuur moeten maken op basis van een overeengekomen eindprijs.',
  },
  {
    question: 'Hoe bereken ik BTW terugrekenen handmatig?',
    answer:
      'Bij een BTW-tarief van 21% deelt u het totaalbedrag door 1,21. Het resultaat is de belastbare grondslag. Het verschil tussen het totaal en de grondslag is het BTW-bedrag.',
  },
  {
    question: 'Welke BTW-tarieven bestaan er in Spanje?',
    answer:
      'Er zijn drie tarieven: Algemeen (21%), Verlaagd (10% voor o.a. voeding, gezondheid, huisvesting) en Superverlaagd (4% voor o.a. brood, melk, boeken en kranten).',
  },
  {
    question: 'Wanneer is het verplicht om BTW uit te splitsen?',
    answer:
      'Altijd wanneer u een professionele of vereenvoudigde factuur uitreikt. U moet de belastbare grondslag, het toegepaste belastingtarief en het totale BTW-bedrag apart vermelden.',
  },
];

const howToData = [
  {
    name: 'Voer het totaalbedrag in',
    text: 'Typ het eindbedrag inclusief BTW dat u wilt uitsplitsen.',
  },
  {
    name: 'Selecteer het BTW-tarief',
    text: 'Kies tussen 21%, 10% of 4% afhankelijk van de categorie van uw product of dienst.',
  },
  {
    name: 'Krijg de belastbare grondslag',
    text: 'Bekijk de automatische berekening die aangeeft hoeveel geld daadwerkelijk van u is vóór belastingen.',
  },
  {
    name: 'Kopieer de gegevens',
    text: 'Gebruik de berekende waarden om de velden voor grondslag en BTW in uw facturatiesoftware in te vullen.',
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

export const content: ToolLocaleContent<ReverseVatCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelTotal: 'Totaalbedrag (Inclusief BTW)',
    labelVatType: 'BTW-tarief',
    btn21: '21 %',
    btn10: '10 %',
    btn4: '4 %',
    btn0: '0 %',
    labelBase: 'Belastbare Grondslag',
    labelVat: 'BTW-bedrag',
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
      text: 'De meest gemaakte fout bij BTW terugrekenen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Voor veel ondernemers is het berekenen van het bedrag exclusief BTW vanuit een totaalprijs een bron van fouten. De meest gemaakte fout is denken dat u eenvoudig 21% van het totaal kunt aftrekken. <strong>Dit is onjuist!</strong> Als u dit doet, betaalt u elk kwartaal te veel belasting.',
    },
    {
      type: 'title',
      text: 'De wiskundige uitleg',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'BTW wordt toegepast <strong>bovenop</strong> de basis (nettoprijs). Daarom is de eindprijs 121% van de basis (bij 21% BTW). Om terug te gaan, trekken we niet af, maar <strong>delen</strong> we. <code>Basis = Totaal / 1,21</code>.',
    },
    {
      type: 'code',
      code: 'Belastbare Grondslag = Totaalbedrag / (1 + BTW-tarief)\nBTW-bedrag = Totaalbedrag - Belastbare Grondslag',
    },
  ],
};
