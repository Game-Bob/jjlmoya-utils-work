import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SettlementCalculatorUI } from '../ui';

const slug = 'berakna-slutlon-spanien';
const title = 'Beräkna Slutlön Spanien 2026: Finiquito kalkylator';
const description =
  'Beräkna din slutlön och ersättning steg för steg: outtaga semesterdagar, proportionell bonus och avgångsvederlag enligt spansk arbetsrätt.';

const faqData = [
  {
    question: 'Har jag rätt till slutlön om jag säger upp mig själv?',
    answer:
      'Ja, absolut. Slutlönen (finiquito) inkluderar intjänade belopp som arbetade dagar i månaden, obetald semester och proportionell del av bonusar. Du har dock inte rätt till avgångsvederlag (indemnización) eller a-kassa.',
  },
  {
    question: 'Vilket avgångsvederlag får jag vid osaklig uppsägning?',
    answer:
      'För kontrakt tecknade efter 12 februari 2012 är ersättningen 33 dagars lön per arbetat år, upp till maximalt 24 månadslöner.',
  },
  {
    question: 'Kan arbetsgivaren dra av pengar om jag inte iakttar uppsägningstiden?',
    answer:
      'Ja. Om ditt avtal kräver en uppsägningstid (oftast 15 dagar) och du inte följer den, har företaget rätt att dra av lönen för de missade dagarna från din slutlön.',
  },
  {
    question: 'Vad händer med semesterersättning i slutlönen?',
    answer:
      'När du får ersättning för outtagen semester måste företaget fortsätta betala sociala avgifter för dig under dessa dagar. Under den perioden kan du inte börja ta ut a-kassa.',
  },
];

const howToData = [
  {
    name: 'Ange din bruttolön',
    text: 'Fyll i din årliga bruttolön och välj antal utbetalningar per år (12 eller 14).',
  },
  {
    name: 'Ställ in datum',
    text: 'Ange startdatum i företaget och din planerade sista arbetsdag.',
  },
  {
    name: 'Lägg till obetald semester',
    text: 'Ange hur många semesterdagar du har kvar att ta ut för innevarande år.',
  },
  {
    name: 'Välj anledning till avslut',
    text: 'Välj anledningen till att du slutar så att kalkylatorn tillämpar rätt ersättningsnivå.',
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

export const content: ToolLocaleContent<SettlementCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelSalary: 'Årlig bruttolön',
    labelExtraPayments: 'Antal utbetalningar per år',
    labelStartDate: 'Startdatum',
    labelEndDate: 'Slutdatum',
    labelVacationDays: 'Obetalda semesterdagar',
    labelDepartureReason: 'Anledning till avslut',
    opt12pays: '12 utbetalningar (inkl. bonus)',
    opt14pays: '14 utbetalningar (Standard)',
    optImprocedente: 'Osaklig uppsägning (33 dagar)',
    optObjetivo: 'Saklig uppsägning (20 dagar)',
    optTemporal: 'Avslut av tidsbegränsat avtal (12 dagar)',
    optVoluntaria: 'Egen uppsägning (Inget vederlag)',
    labelTotal: 'Beräknad total slutlön',
    labelSeverance: 'Avgångsvederlag',
    labelVacation: 'Semesterersättning',
    labelExtras: 'Proportionell bonus',
    labelMonthSalary: 'Månadslön',
    disclaimer:
      'Obs: Detta är en grov uppskattning baserad på spansk lagstiftning. Det slutliga beloppet kan variera beroende på avtal och skatt.',
    btnCopy: 'Kopiera sammanfattning',
    copySuccess: 'Kopierat',
    copySummaryTitle: 'Sammanfattning av beräknad slutlön',
    defaultSalary: '24000',
  },
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Källor',
  bibliography: [],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Guide till slutlön och avgångsvederlag i Spanien',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att förstå vad du har rätt till när ett anställningsavtal upphör i Spanien är viktigt för att skydda dina rättigheter.',
    },
  ],
};
