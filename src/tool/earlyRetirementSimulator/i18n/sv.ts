import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EarlyRetirementSimulatorUI } from '../ui';

const slug = 'fortids-pension-simulator-spanien';
const title = 'Förtidspension Simulator Spanien: Beräkna din Pension';
const description =
  'Beräkna din pensionsålder, reduktionskoefficienter och beräknad pension kostnadsfritt. Uppdaterad simulator för frivillig och ofrivillig förtidspension i Spanien.';

const faqData = [
  {
    question: 'Vad är minimiåldern för förtidspension i Spanien?',
    answer:
      'För frivillig förtidspension är minimiåldern 2 år före den lagstadgade åldern (vanligtvis 63 eller 65 år beroende på bidrag). För ofrivillig pension är det upp till 4 år före (61 eller 63 år).',
  },
  {
    question: 'Hur många bidragsår behöver jag?',
    answer:
      'För frivillig förtidspension krävs minst 35 års effektiva bidrag. För ofrivillig eller tvingad pension är minimikravet 33 år.',
  },
  {
    question: 'Hur mycket förlorar jag på att gå i pension i förtid?',
    answer:
      'Minskningen beror på antalet månader i förväg och det totala antalet bidragsår. Avdragen varierar från 2,81 % för en enstaka månad upp till maximalt cirka 21 % för en fullständig 2-årig frivillig förtidspension.',
  },
  {
    question: 'Räknas arbetslöshetstid in i pensionen?',
    answer:
      'Ja, tid då man erhållit arbetslöshetsersättning (paro) räknas in i pensionen, eftersom SEPE gör motsvarande inbetalningar till socialförsäkringen.',
  },
];

const howToData = [
  {
    name: 'Ange ditt födelseår',
    text: 'Detta avgör din lagstadgade ordinarie pensionsålder enligt de regler som gäller 2026.',
  },
  {
    name: 'Uppskatta dina bidragsår',
    text: 'Inkludera anställningstid, egenföretagande och perioder med bidragsgrundande arbetslöshet.',
  },
  {
    name: 'Välj typ av pensionering',
    text: 'Ange om pensioneringen är frivillig eller tvingad för att tillämpa rätt koefficienter.',
  },
  {
    name: 'Granska din beräknade pension',
    text: 'Se den tillämpade reduktionen och det exakta datumet då du kan sluta arbeta.',
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
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<EarlyRetirementSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelBirthYear: 'Födelseår',
    labelContributions: 'Bidragsår',
    labelBasePension: 'Månatligt Bruttounderlag',
    labelRetirementAge: 'Pensionsålder',
    labelExpectedDate: 'Förväntat Datum',
    labelEstimatedPension: 'Beräknad Pension',
    labelPermanentReduction: 'Permanent Reduktion',
    labelYears: 'ÅR',
    btnLegalTitle: 'Standard',
    btnLegalDesc: 'Lagstadgad pensionsålder. Ingen reduktion. 100 % av underlaget.',
    btnVoluntaryTitle: 'Frivillig Förtidspension',
    btnVoluntaryDesc: 'Pensionering genom personligt val. Månatlig reduktion tillämpas.',
    btnInvoluntaryTitle: 'Ofrivillig / ERE',
    btnInvoluntaryDesc: 'Tvingad uppsägning. Mer förmånliga koefficienter.',
    defaultBirthYear: '1975',
    defaultContributions: '30',
    defaultBasePension: '2500',
    adviceDefault: 'Flytta regreglaget för att projicera din pensionstidslinje.',
    adviceDefaultWithParams: 'Flytta regreglaget för att projicera din pensionstidslinje.',
    adviceDelay:
      'Om du skjuter upp din pension till åldern <strong>[AGE]</strong> skulle du tjäna cirka <strong>[GAIN] € extra</strong> per månad.',
    adviceBonus: 'Du samlar på dig en uppskjutandebonus. Din pension kommer att överstiga 100 % av underlaget.',
    adviceOptimal: 'Du har nått den optimala standardåldern med 100 % av dina rättigheter.',
  },
  faqTitle: 'Vanliga frågor',
  faq: faqData: 'Källor',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Förtidspension Simulator för Spanien: Guide 2026',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Förtidspension</strong> är en av de största ekonomiska farhågorna för arbetstagare i Spanien. Att förstå när man kan sluta arbeta och framför allt hur mycket pengar man förlorar genom reduktionskoefficienter är avgörande för en sund livsplanering.',
    },
    {
      type: 'list',
      items: [
        '<strong>Ordinarie lagstadgad ålder:</strong> 67 år (eller 65 år med tillräckliga bidrag).',
        '<strong>Frivillig Förtidspension:</strong> Upp till 2 år före den lagstadgade gränsen.',
        '<strong>Ofrivillig Förtidspension:</strong> Upp till 4 år före (på grund av övertalighet eller andra orsaker).',
        '<strong>Reduktionskoefficienter:</strong> Permanenta månatliga avdrag på pensionen.',
        '<strong>Bidragskrav:</strong> Minst 35 år för frivillig, 33 för tvingad pension.',
      ],
    },
    {
      type: 'title',
      text: 'Vid vilken ålder kan jag lagligt gå i pension i Spanien?',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>65-årsrutten:</strong> Om du har bidragit i mer än 38 år och 6 månader kan du gå i pension vid 65 år med 100 % av ditt underlag.',
        '<strong>67-årsrutten:</strong> Om dina bidrag ligger under det tröskelvärdet är din standardålder 67 år.',
        '<strong>Militärtjänst:</strong> Obligatorisk militärtjänst eller samhällstjänst kan lägga till upp till 1 år av bidrag.',
      ],
    },
    {
      type: 'title',
      text: 'Frivillig Förtidspension',
      level: 2,
    },
    {
      type: 'card',
      title: 'Krav för Frivillig Förtidspension',
      html: '<ul><li>Vara i en ålder som är två år under den ordinarie lagstadgade åldern.</li><li>Ha en minsta effektiv bidragsperiod på 35 år.</li><li>Pensionen som ska erhållas måste överstiga minimipensionen.</li></ul>',
    },
    {
      type: 'title',
      text: 'Reduktionskoefficienter: Kostnaden för att gå i pension i förtid',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Under 38,5 bidragsår:</strong> Maximal minskning med 21 % (2 års förtid).',
        '<strong>Mellan 38,5 och 41,5 år:</strong> Maximal minskning med cirka 19 %.',
        '<strong>Mellan 41,5 och 44,5 år:</strong> Maximal minskning med cirka 17 %.',
        '<strong>Över 44,5 år:</strong> Maximal minskning med cirka 15 %.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Gyllene tips:</strong> Att skjuta upp din förtidspension med bara en månad kan göra en betydande skillnad för reduktionskoefficienten. Beräkna alltid fördelen med att vänta några extra dagar om du befinner dig nära en månatlig gräns.',
    },
    {
      type: 'title',
      text: 'Ofrivillig eller Tvingad Förtidspension',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Maximal förtid:</strong> 4 år (48 månader) före standardåldern.',
        '<strong>Nödvändiga bidrag:</strong> 33 år.',
        '<strong>Villkor:</strong> Måste ha varit registrerad som arbetssökande i minst 6 månader dessförinnan.',
        '<strong>Koefficienter:</strong> Mer förmånliga än frivilliga, men effekten av 4 år är fortfarande kännbar.',
      ],
    },
    {
      type: 'card',
      title: 'Praktiskt exempel',
      html: '<p>En arbetstagare med ett underlag på 2 000 € som går i pension frivilligt 2 år för tidigt med 36 bidragsår. Deras minskning blir cirka 21 %, vilket ger en pension på cirka <strong>1 580 € per månad</strong> resten av livet.</p>',
    },
  ],
};
