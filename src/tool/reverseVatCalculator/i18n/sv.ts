import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReverseVatCalculatorUI } from '../ui';

const slug = 'berakna-moms-baklanges-spanien';
const title = 'Räkna moms baklänges: Beräkna beskattningsunderlag Spanien';
const description =
  'Onlineverktyg för att räkna moms baklänges (IVA). Bryt ner momsen från valfritt totalbelopp för att få fram beskattningsunderlaget. Oumbärligt för frilansare i Spanien.';

const faqData = [
  {
    question: 'Vad innebär det att räkna moms baklänges?',
    answer:
      'Det är processen att beräkna beskattningsunderlaget (beloppet exklusive moms) från ett totalpris som redan inkluderar skatt. Det är viktigt för frilansare som behöver ställa ut fakturor utifrån ett överenskommet slutpris.',
  },
  {
    question: 'Hur beräknar man moms baklänges manuellt?',
    answer:
      'För en momssats på 21%, dividera totalbeloppet med 1,21. Resultatet är beskattningsunderlaget. Skillnaden mellan totalbeloppet och underlaget är momsbeloppet.',
  },
  {
    question: 'Vilka momsatser finns i Spanien?',
    answer:
      'Det finns tre typer: Generell (21%), Reducerad (10% för o.a. livsmedel, hälsa, bostäder) och Superreducerad (4% för baslivsmedel som bröd och mjölk, böcker).',
  },
  {
    question: 'När är det obligatoriskt att särredovisa momsen?',
    answer:
      'Alltid när du ställer ut en professionell eller förenklad faktura. Du måste separat ange beskattningsunderlaget, tillämpad skattesats och totalt momsbelopp.',
  },
];

const howToData = [
  {
    name: 'Ange totalbeloppet',
    text: 'Skriv in slutbeloppet inklusive moms som du vill bryta ner.',
  },
  {
    name: 'Välj momssats',
    text: 'Välj mellan 21%, 10% eller 4% beroende på kategori av din produkt eller tjänst.',
  },
  {
    name: 'Få fram beskattningsunderlaget',
    text: 'Se den automatiska beräkningen som visar hur mycket pengar som faktiskt är dina före skatt.',
  },
  {
    name: 'Kopiera faktureringsuppgifter',
    text: 'Använd de beräknade värdena för att fylla i fälten för underlag och moms i ditt faktureringsprogram.',
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

export const content: ToolLocaleContent<ReverseVatCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelTotal: 'Totalbelopp (Inkl. moms)',
    labelVatType: 'Momssats',
    btn21: '21 %',
    btn10: '10 %',
    btn4: '4 %',
    btn0: '0 %',
    labelBase: 'Beskattningsunderlag',
    labelVat: 'Momsbelopp',
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
      text: 'Vanliga misstag vid momsberäkning baklänges',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Många gör misstaget att tro att man kan dra av 21% från totalbeloppet för att få fram nettopriset. <strong>Det är fel!</strong> Gör du så förlorar du pengar vid varje momsredovisning.',
    },
    {
      type: 'title',
      text: 'Matematiken bakom',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Momsen läggs <strong>ovanpå</strong> basbeloppet. Därför är slutpriset 121% av basen (vid 21% moms). För att gå tillbaka dividerar vi: <code>Bas = Total / 1,21</code>.',
    },
    {
      type: 'code',
      code: 'Beskattningsunderlag = Totalbelopp / (1 + Momssats)\nMomsbelopp = Totalbelopp - Beskattningsunderlag',
    },
  ],
};
