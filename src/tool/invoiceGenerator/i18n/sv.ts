import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InvoiceGeneratorUI } from '../ui';

const slug = 'faktura-generator';
const title = 'Gratis Fakturagenerator för Frilansare och Småföretag';
const description =
  'Skapa professionella fakturor online helt gratis. Fyll i dina uppgifter, lägg till tjänster, ställ in moms och skatteavdrag, och generera en utskriftsklar PDF. Inget konto krävs.';

const faqData = [
  {
    question: 'Vilken information måste en professionell faktura innehålla?',
    answer:
      'En professionell faktura måste innehålla ett unikt fakturanummer, fakturadatum, ditt fullständiga företagsnamn och kontaktinformation (inklusive organisationsnummer eller momsregistreringsnummer), kundens företagsinformation, en specifikation av tjänster eller produkter med antal och enhetspriser, tillämplig moms och tydliga betalningsvillkor.',
  },
  {
    question: 'Behöver frilansare debitera moms på tjänster?',
    answer:
      'Det beror på ditt land och typen av tjänst. I Sverige måste de flesta företag debitera moms, men det finns undantag (t.ex. om du inte har nått gränsen för momsplikt vid låg omsättning). Konsultera en redovisningsekonom för din specifika situation.',
  },
  {
    question: 'Vad är källskatt och när tillämpas det?',
    answer:
      'I vissa sammanhang (t.ex. vid arbete för utländska företag eller särskilda förmedlingstjänster) kan källskatt dras av direkt från din betalning av kunden. I Sverige gäller oftast F-skatt där du själv ansvarar för skatteinbetalningen.',
  },
  {
    question: 'Ska jag använda mitt personnummer eller organisationsnummer på fakturor?',
    answer:
      'Om du har en enskild firma används ofta ditt personnummer som organisationsnummer, men det är säkrare att använda ett momsregistreringsnummer (VAT-nummer) om möjligt för att skydda din integritet.',
  },
];

const howToData = [
  {
    name: 'Ange din företagsinformation',
    text: 'Klicka på "Mitt Företag AB" och ersätt det med ditt faktiska företagsnamn, organisationsnummer, adress och e-postadress.',
  },
  {
    name: 'Fyll i kunduppgifter',
    text: 'Under "Faktura till:", klicka på varje fält för att ange kundens företagsnamn, organisationsnummer, adress och e-post.',
  },
  {
    name: 'Lägg till tjänster och priser',
    text: 'Beskriv varje tjänst i tabellen, ställ in antal och enhetspris. Klicka på "Lägg till rad" för ytterligare poster.',
  },
  {
    name: 'Granska totalbelopp och skapa PDF',
    text: 'Verifiera att alla belopp är korrekla, ställ in momssatsen och klicka på "Skapa PDF" för att spara eller skriva ut.',
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

export const content: ToolLocaleContent<InvoiceGeneratorUI> = {
  slug,
  title,
  description,
  ui: {
    labelEditor: 'Interaktiv Redigerare',
    labelEditHint: 'Klicka på valfri text i dokumentet för att redigera den direkt.',
    btnGenerate: 'Skapa PDF',
    labelFrom: 'Från:',
    labelTo: 'Faktura till:',
    labelDesc: 'Beskrivning av Tjänst eller Produkt',
    labelQty: 'Antal',
    labelPrice: 'Pris',
    labelAmount: 'Belopp',
    btnAddRow: 'Lägg till rad',
    labelSubtotal: 'Subtotal:',
    labelTax: 'Moms',
    labelWithholding: 'Skatteavdrag',
    labelTotal: 'Totalt:',
    defaultInvoiceTitle: 'FAKTURA',
    defaultInvoiceNum: 'FAK-24-001',
    defaultCompanyName: 'Mitt Företag AB',
    defaultCompanyId: 'Org.nr 556000-0000',
    defaultAddress: 'Storgatan 1',
    defaultCity: '111 22 Stockholm',
    defaultEmail: 'info@mittforetag.se',
    placeholderDesc: 'Lägg till beskrivning...',
    placeholderNotes: 't.ex. Betalning oss tillhanda inom 30 dagar via bankgiro...',
    labelNotes: 'Anteckningar / Betalningsvillkor',
    currencySymbol: 'kr',
    defaultTaxRate: '25',
    defaultRetRate: '0',
  },
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Källor',
  bibliography: [
    { name: 'Krav på fakturans innehåll - Skatteverket', url: 'https://www.skatteverket.se/' },
    { name: 'Fakturering för företagare - Verksamt', url: 'https://www.verksamt.se/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Viktiga Element i en Professionell Faktura',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En giltig affärsfaktura är mer än bara en begäran om betalning — det är ett juridiskt dokument som skyddar både dig och din kund. Om obligatoriska uppgifter saknas kan det fördröja betalningen, orsaka problem vid skattekontroller eller till och med göra fakturan ogiltig. För frilansare och konsulter är det avgörande att göra rätt från början.',
    },
    {
      type: 'card',
      title: 'Obligatoriska Uppgifter på en Svensk Faktura',
      html: '<ul><li><strong>Fakturanummer:</strong> Måste vara löpande och unikt.</li><li><strong>Fakturadatum:</strong> Datumet då fakturan utfärdas.</li><li><strong>Info om säljare och köpare:</strong> Fullständigt namn, organisationsnummer och adress för båda parter.</li><li><strong>Specificerade tjänster:</strong> Beskrivning, antal och enhetspris för varje post.</li><li><strong>Betalningsvillkor:</strong> Förfallodatum och accepterade betalningsmetoder.</li></ul>',
    },
    {
      type: 'title',
      text: 'Moms och Skatt på Frilansfakturor',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Två faktorer påverkar slutbeloppet. <strong>Momsen</strong> tas ut av kunden och betalas in till staten — det ökar kostnaden för kunden. <strong>Skatteavdrag</strong> (om tillämpligt) dras av från din ersättning av kunden — det minskar vad du faktiskt får utbetalt men räknas som din inbetalda skatt.',
    },
    {
      type: 'code',
      code: 'Utförda tjänster               10 000 kr\n+ Moms (25 %)                   2 500 kr\n- Skatteavdrag                     0 kr\n------------------------------------------\nNetto utbetalt belopp           12 500 kr',
    },
    {
      type: 'title',
      text: 'Skydda din Identitet som Frilansare',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Använd alltid ett organisationsnummer eller momsregistreringsnummer på fakturor. Detta minskar spridningen av ditt privata personnummer på dokument som kan delas med många personer hos kundens ekonomiavdelning.',
    },
    {
      type: 'tip',
      html: '<strong>Spara varje faktura som PDF:</strong> Bokföringslagen kräver att du sparar dina underlag i 7 år. Använd knappen "Skapa PDF" och spara dokumentet i en mapp organiserad efter år och kund.',
    },
  ],
};
