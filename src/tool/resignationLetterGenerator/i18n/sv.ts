import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResignationLetterGeneratorUI } from '../ui';

const slug = 'uppsagningsbrev-generator';
const title = 'Professionell Uppsägningsbrev Generator';
const description =
  'Skapa ditt personliga uppsägningsbrev på några sekunder. Professionella mallar redo att kopiera eller ladda ner som PDF direkt.';

const faqData = [
  {
    question: 'Hur många dagars uppsägningstid har jag?',
    answer:
      'Enligt LAS (Lagen om anställningsskydd) i Sverige är den minsta uppsägningstiden en månad. Detta kan dock variera beroende på kollektivavtal eller vad som står i ditt personliga anställningsavtal.',
  },
  {
    question: 'Har jag rätt till semesterersättning när jag säger upp mig?',
    answer:
      'Ja. Outtagen semester ska betalas ut i form av semesterersättning senast en månad efter att anställningen avslutats.',
  },
  {
    question: 'Får jag a-kassa om jag säger upp mig själv?',
    answer:
      'Om du säger upp dig själv utan ett giltigt skäl blir du oftast avstängd från a-kassa i ett antal dagar (vanligtvis 45 avstängningsdagar plus 2 karensdagar).',
  },
  {
    question: 'Vad händer om jag inte arbetar under uppsägningstiden?',
    answer:
      'Om du lämnar din anställning utan att iaktta uppsägningstiden kan du bli skadeståndsskyldig gentemot arbetsgivaren för den ekonomiska skada detta medför.',
  },
];

const howToData = [
  {
    name: 'Fyll i dina personuppgifter',
    text: 'Ange ditt fullständiga namn, namnet på din chef eller HR-kontakt och företagets namn.',
  },
  {
    name: 'Bestäm din sista arbetsdag',
    text: 'Välj det datum då din anställning upphör, se till att du räknat med rätt uppsägningstid.',
  },
  {
    name: 'Välj typ av anledning',
    text: 'Välj det alternativ som bäst beskriver din situation för att anpassa texten i brevet.',
  },
  {
    name: 'Kopiera eller ladda ner',
    text: 'Klicka på knappen för att kopiera texten eller ladda ner den direkt som en PDF-fil.',
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

export const content: ToolLocaleContent<ResignationLetterGeneratorUI> = {
  slug,
  title,
  description,
  ui: {
    labelUserName: 'Ditt fullständiga namn',
    labelManagerName: 'Chefens eller HR:s namn',
    labelManagerGender: 'Hälsningsfras',
    labelCompanyName: 'Företagets namn',
    labelLastDay: 'Sista arbetsdag',
    labelReasonType: 'Typ av anledning',
    labelCity: 'Ort',
    optGenderNeutral: 'Hej (Neutral)',
    optGenderM: 'Bäste Herr (Man)',
    optGenderF: 'Bästa Fru/Fröken (Kvinna)',
    optReasonStandard: 'Standard (Professionell)',
    optReasonOpportunity: 'Ny utmaning i karriären',
    optReasonPersonal: 'Personliga skäl',
    optReasonEducation: 'Studier / Utbildning',
    optReasonGrowth: 'Brist på utvecklingsmöjligheter',
    optReasonDirect: 'Direkt och kort (Ingen förklaring)',
    btnCopy: 'Kopiera Brev',
    btnDownload: 'Ladda ner PDF',
    copyFeedback: 'Kopierat till urklipp',
    defaultUserName: 'Anna Andersson',
    defaultManagerName: 'Erik Eriksson',
    defaultCompanyName: 'Exempel AB',
    defaultCity: 'Stockholm',
    dateLocale: 'sv-SE',
    datePrefix: '',
    managerPrefix: 'Att:',
    managerFallback: 'Personalavdelningen',
    companyFallback: 'Företagsnamn',
    salutationNeutral: 'Hej',
    salutationM: 'Bäste Herr',
    salutationF: 'Bästa Fru',
    salutationFallback: 'Chef',
    signatureFallback: 'Arbetstagarens signatur',
    thanksParagraph:
      'Jag vill uttrycka min uppriktiga tacksamhet för de möjligheter till professionell och personlig utveckling som jag har fått under min tid på företaget.',
    transitionParagraph:
      'Jag är fullt engagerad i att stödja en smidig överlämning och finns tillgänglig för att hjäpa till med mina ansvarsområden fram till sista dagen.',
    closingWord: 'Med vänlig hälsning,',
    reasonStandard:
      'Härmed säger jag formellt upp min anställning. Min sista arbetsdag kommer att vara [DATE], i enlighet med uppsägningstiden i mitt avtal.',
    reasonOpportunity:
      'Jag skriver för att informera om mitt beslut att säga upp mig då jag har accepterat ett nytt karriärsteg. Min sista dag blir [DATE].',
    reasonPersonal:
      'På grund av personliga omständigheter som kräver min fulla uppmärksamhet väljer jag att säga upp mig. Min anställning upphör den [DATE].',
    reasonEducation:
      'Jag har beslutat att påbörja studier på heltid och säger därför upp min anställning. Min sista arbetsdag är [DATE].',
    reasonGrowth:
      'Efter noga övervägande har jag beslutat att söka en ny miljö för att utvecklas vidare. Jag säger upp mig per [DATE].',
    reasonDirect:
      'Härmed meddelar jag mitt beslut att avsluta min anställning. Min sista arbetsdag är [DATE].',
  },
  faqTitle: 'Vanliga frågor',
  faq: faqData: 'Källor',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Så skriver du ett professionellt uppsägningsbrev',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att sluta ett jobb är ett stort steg. Ett <strong>uppsägningsbrev</strong> är mer än en formalitet; det är det sista intrycket du lämnar hos arbetsgivaren.',
    },
    {
      type: 'tip',
      html: '<strong>Professionellt råd:</strong> Även om du har en bra relation med din chef bör uppsägningen <strong>alltid ske skriftligt</strong>.',
    },
    {
      type: 'code',
      code: '[Ort, Datum]\n\nTill: [Chefens namn]\n[Företagsnamn]\n\nUppsägning av anställning\n\nHej [Namn],\nHärmed säger jag upp min anställning. Min sista dag blir [Datum].\n\nMed vänlig hälsning,\n[Signatur]',
    },
  ],
};
