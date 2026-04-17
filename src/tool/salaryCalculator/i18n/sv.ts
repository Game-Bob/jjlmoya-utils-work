import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SalaryCalculatorUI } from '../ui';

const slug = 'salary-calculator-spain-sv';
const title = 'Lönekalkylator Spanien: Simulator för nettolön, IRPF och socialförsäkring';
const description =
  'Ta reda på hur mycket du faktiskt kommer att tjäna varje månad. Exakt beräkning av skatteavdrag, beskattningsbar bas och nettoinkomst enligt spanska regler.';

const faqData = [
  {
    question: 'Hur beräknas nettolönen i Spanien?',
    answer:
      'Nettolönen beräknas genom att dra av IRPF-skatteavdrag (enligt skalor) och socialförsäkringsavgifter (cirka 6,35 % av bruttolönen) från bruttobeloppet. Procentsatsen för IRPF varierar beroende på din personliga situation och lönenivå.',
  },
  {
    question: 'Vad är skillnaden mellan 12 och 14 löneutbetalningar?',
    answer:
      'Vid 12 löneutbetalningar fördelas bonuslönen månatligen. Vid 14 löneutbetalningar får du två extra utbetalningar (vanligtvis i juni/juli och december). Årsbruttolönen är densamma, det är bara fördelningen som ändras.',
  },
  {
    question: 'Varför stämmer inte mitt lönebesked exakt med kalkylatorn?',
    answer:
      'Denna kalkylator använder standardiserade närmevärden. Ditt faktiska lönebesked kan variera på grund av: företagsspecifika avdrag, förmåner, hemmavarande barn, funktionsnedsättning eller personliga situationer som påverkar IRPF.',
  },
  {
    question: 'Hur stor del av min lön behåller skatteverket?',
    answer:
      'Det beror på din lön. Generellt sett dras mellan 25 % och 45 % av bruttolönen i form av IRPF och socialförsäkring. Ju högre lön, desto högre blir skatteavdraget i procent på grund av IRPF:s progressiva system.',
  },
  {
    question: 'Vad är IRPF?',
    answer:
      'Inkomstskatt för fysiska personer. Det är en progressiv skatt: de som tjänar mer betalar en högre procentsats på de högre delarna av sin lön.',
  },
];

const howToData = [
  {
    name: 'Ange årlig bruttolön',
    text: 'Skriv in det totala beloppet som avtalats i ditt kontrakt före skatt och avdrag.',
  },
  {
    name: 'Ange familjesituation',
    text: 'Ange om du har barn eller försörjningspliktiga, eftersom detta minskar den procentsats IRPF som tillämpas på dig.',
  },
  {
    name: 'Antal löneutbetalningar',
    text: 'Välj om du får din lön i 12 utbetalningar (bonusar fördelade) eller 14 utbetalningar.',
  },
  {
    name: 'Granska månadsöversikten',
    text: 'Se hur mycket som går till socialförsäkring, IRPF och vad den exakta nettoinkomsten som hamnar på ditt bankkonto är.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<SalaryCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelGross: 'Årlig bruttolön',
    labelPays: 'Antal löneutbetalningar',
    btn12: '12 utbetalningar',
    btn14: '14 utbetalningar',
    labelAge: 'Ålder',
    labelContract: 'Typ av kontrakt',
    optIndefinite: 'Tillsvidare / Allmän',
    optTemporal: 'Tidsbegränsad',
    btnCalculate: 'Beräkna nettolön',
    labelNetMonthly: 'Månadslön netto',
    labelNetAnnual: 'Årslön netto',
    labelPaysDisplay: 'Utbetalningar',
    labelBreakdown: 'Sammanställning av skatteavdrag (uppskattat)',
    labelIRPF: 'IRPF',
    labelSS: 'Socialförsäkring',
    disclaimer:
      '*Förenklad beräkning för ensamstående arbetstagare, utan barn och under 65 år.',
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
      text: 'Vart tar min bruttolön vägen?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Det är den vanligaste överraskningen i ett första jobb: du skriver på ett kontrakt på 24 000 € om året, delar med 12 och förväntar dig 2 000 € i månaden, men hittar 1 600 € på ditt konto. Var är de övriga 400 €?',
    },
    {
      type: 'paragraph',
      html: 'I Spanien är skillnaden mellan <strong>Brutto</strong> (vad företaget betalar) och <strong>Netto</strong> (vad du får ut) uppdelad på två huvudposter: IRPF och socialförsäkring. Att förstå dem är nyckeln till att förhandla om löneökningar.',
    },
    {
      type: 'title',
      text: 'Socialförsäkring: De ~6,35 % som finansierar din framtid',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Det är en fast avgift för nästan alla arbetstagare. Det spelar ingen roll om du är ensamstående eller gift. Med dessa pengar finansierar du:',
    },
    {
      type: 'list',
      items: [
        '<strong>Allmänna sjukdomar (4,70 %)</strong>: Täcker frånvaro vid vanlig sjukdom, olyckor utanför arbetet, pension och mammaledighet.',
        '<strong>Arbetslöshet (1,55 % eller 1,60 %)</strong>: Ditt bidrag för att kunna begära arbetslöshetsersättning om du förlorar jobbet. Varierar något om kontraktet är tidsbegränsat.',
        '<strong>Yrkesutbildning (0,10 %)</strong>: För subventionerade utbildningskurser och omställning.',
      ],
    },
    {
      type: 'title',
      text: 'IRPF: Skatten som svider mest',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Den är progressiv och kan variera från 2 % till 47 % beroende på din lön och personliga situation. Det är ingen fast skatt, utan en förskottsbetalning till skatteverket. Företaget beräknar hur mycket skatt du förväntas betala nästa år och drar av den månad för månad.',
    },
    {
      type: 'title',
      text: 'Faktorer som sänker din IRPF',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Att ha barn (särskilt under 3 år).',
        'Att ha en erkänd funktionsnedsättning (>33 %).',
        'Att ha en make/maka med låg inkomst för försörjning.',
      ],
    },
    {
      type: 'title',
      text: 'Statliga IRPF-skalor (uppskattat 2026)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '0 € - 12 450 €: 19 %',
        '12 450 € - 20 200 €: 24 %',
        '20 200 € - 35.200 €: 30 %',
        '35 200 € - 60 000 €: 37 %',
        '> 60 000 €: 45 %',
      ],
    },
    {
      type: 'title',
      text: 'Den eviga frågan: 12 eller 14 utbetalningar?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Många arbetstagare föredrar 14 utbetalningar för att få extra pengar sommar och jul. Andra föredrar (eller så kräver företaget det) att sprida ut lönen över 12 månader. Matematiskt sett tjänar du exakt lika mycket per år.',
    },
    {
      type: 'list',
      items: [
        '<strong>12 UTBETALNINGAR</strong>: Du tjänar mer varje månad, men får inga bonusar. Bättre för ett jämnt månatligt kassaflöde.',
        '<strong>14 UTBETALNINGAR</strong>: Du tjänar lite mindre varje månad, men får två dubbla utbetalningar per år. Fungerar som ett "påtvingat sparande".',
      ],
    },
  ],
};
