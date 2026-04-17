import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IrpfCalculatorUI } from '../ui';

const slug = 'irpf-kalkylator-spanien';
const title = 'IRPF-kalkylator 2026: Simulator för nettolön i Spanien';
const description =
  'Beräkna din netto månadslön och årslön för 2026 i Spanien. Uppdaterad simulator med statliga och regionala skalor, MEI och familjesituation.';

const faqData = [
  {
    question: 'Hur påverkar MEI min nettolön 2026?',
    answer:
      'Mekanismen för generationsüvergripande rättvisa (MEI) stiger till 0,90 % 2026 för att garantera pensionernas hållbarhet. Det mesta betalas av arbetsgivaren, men anställda ser sin nettolön minska med sin bidragsprocent.',
  },
  {
    question: 'Varför är min nettolön annorlunda i Madrid än i Katalonien?',
    answer:
      'IRPF är en skatt som till 50 % är delegerad till de autonoma regionerna. Madrid tillämpar lägre skalor än den statliga, medan Katalonien har en egen skala som kan öka det initiala skatteavdraget.',
  },
  {
    question: 'Vad är marginalskatt och hur påverkar den mig?',
    answer:
      'Marginalskatten är skatteprocentsatsen på din sista intjänade euro. Den visar vad en löneökning eller bonus faktiskt kostar dig i skatt.',
  },
  {
    question: 'Hur många löneutbetalningar ska jag välja för månadsberäkning?',
    answer:
      'Normalt får du 12 eller 14 löneutbetalningar (med bonusar sommar och jul). Välj det alternativ ditt företag använder för att få veta din faktiska månatliga nettoinkomst.',
  },
  {
    question: 'Är denna kalkylator tillförlitlig för min deklaration?',
    answer:
      'Detta verktyg ger en uppskattning baserad på 2026 års regler. Mnatliga skatteavdrag är en approximation; ditt faktiska slutresultat fastställs vid deklarationen i juni.',
  },
];

const howToData = [
  {
    name: 'Ange din bruttolön',
    text: 'Skriv in det totala årsbeloppet som anges i ditt kontrakt före eventuella avdrag eller skatteinbetalningar.',
  },
  {
    name: 'Definiera din personliga situation',
    text: 'Ange antal barn, eventuell erkänd funktionsnedsättning och civilstånd för att tillämpa lagstadgade skattefria avdrag.',
  },
  {
    name: 'Välj din autonoma region',
    text: 'Din skatterättsliga hemvist avgör vilken regional skatteskala som tillämpas, vilket påverkar din slutliga nettoinkomst.',
  },
  {
    name: 'Granska sammanställningen',
    text: 'Se hur mycket som går till IRPF, socialförsäkring och vad din faktiska månatliga och årliga nettolön är.',
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

export const content: ToolLocaleContent<IrpfCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    titleVariables: 'Beräkningsvariabler',
    titleCalculo: 'Transparent beräkning 2026',
    labelBruto: 'Årlig bruttolön (€)',
    labelPagas: 'Antal löneutbetalningar',
    labelComunidad: 'Skatterättslig hemvist',
    labelHijos: 'Barn (under 25)',
    labelDiscapacidad: 'Grad av funktionsnedsättning',
    labelUnidad: 'Familjeenhet eller sammanboende',
    opt12pagas: '12 utbetalningar',
    opt14pagas: '14 utbetalningar',
    optGen: 'Gemensamt territorium (Allmänt)',
    optMad: 'Madrid',
    optCat: 'Katalonien',
    optAnd: 'Andalusien',
    optVal: 'Region Valencia',
    optPV: 'Baskien (Foral)',
    optNav: 'Navarra (Foral)',
    optNinguna: 'Ingen',
    opt33: '> 33 %',
    opt65: '> 65 %',
    optSoltero: 'Ogift, frånskild eller änka/änkling',
    optCasadoLow: 'Gift (make/maka tjänar mindre än 1 500 €/år)',
    optCasadoHigh: 'Gift (make/maka har inkomst)',
    labelSalarioBruto: 'Bruttolön',
    labelSS: 'Socialförsäkring / MEI (-)',
    labelGastos: 'Avdragsgilla kostnader (Art. 20)',
    labelNetoAnual: 'ÅRLIG NETTOLÖN',
    labelRetencionIRPF: 'IRPF-skatteavdrag (%)',
    labelNetoMensual: 'Tillgängligt månatligt netto',
    labelMarginal: 'Tillämpad marginalskatt',
    resultRetention: 'IRPF-skatteavdrag (%)',
    resultAnual: '/ år',
    infoText:
      'AEAT-algoritm (Bruttoskatt - Minimiskatt) validerad för 2026. Inkluderar MEI-bidrag på 6,47 % och avdrag för arbetsinkomst. jjlmoya.es.',
  },
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Källor',
  bibliography: [
    {
      name: 'Skatteverket (AEAT): IRPF',
      url: 'https://sede.agenciatributaria.gob.es/Sede/irpf.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'IRPF-kalkylator 2026: Komplett guide till det nya skattescenariot',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Inkomstskatt för fysiska personer (IRPF) är den mest relevanta avgiften i det spanska skattesystemet och påverkar direkt den månatliga lönechecken för miljontals arbetstagare. Under 2026 ser vi en konsolidering av olika reformer som syftar till progressivitet och anpassning till nya ekonomiska realiteter, såsom höjningen av mekanismen för generationsüvergripande rättvisa (MEI) och justering för inflation i olika autonoma regioner.',
    },
    {
      type: 'paragraph',
      html: 'Vår <strong>IRPF-kalkylator för 2026</strong> är utformad för att ge en korrekt och uppdaterad bild av vad som faktiskt hamnar på ditt bankkonto. Att beräkna nettolön handlar inte bara om att dra av en fast procentsats; det är en matematisk process som tar hänsyn till din personliga situation, familjemedlemmar, funktionsnedsättning och, vilket är avgörande, din skatterättsliga hemvist, eftersom varje region i Spanien har bestämmanderätt över den regionala skatteskalan.',
    },
    {
      type: 'title',
      text: 'Vad ändras i lönebeskeden 2026?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'För att förstå dina simuleringsresultat är det viktigt att känna till pelarna i årets skatteberäkningar:',
    },
    {
      type: 'list',
      items: [
        '<strong>MEI:s inverkan:</strong> Mekanismen för generationsüvergripande rättvisa fortsätter sin uppåtgående bana för att garantera pensionerna och når 0,90 % 2026. Det mesta betalas av arbetsgivaren, men anställda ser sitt bidrag öka till cirka 0,15 %, vilket minskar nettoinkomsten något.',
        '<strong>SMI och avdrag:</strong> Den lagstadgade minimilönen fungerar som en barriär. Låga inkomster drar nytta av ett utökat avdrag för arbetsinkomst för att säkerställa att bruttolöneökningar inte äts upp av högre skatteavdrag.',
        '<strong>Regionala skalor:</strong> Regioner som Madrid, Andalusien eller Murcia tillämpar vanligtvis lägre skattesatser än det statliga genomsnittet, medan Katalonien eller Valencia-regionen har egna skalor som kan öka skatteavdraget vid högre inkomstnivåer.',
      ],
    },
    {
      type: 'title',
      text: 'Nyckelbegrepp för att förstå din nettolön',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Beskattningsbar bas vs. Bruttolön:</strong> Du betalar inte skatt på allt du tjänar. Basen som IRPF tillämpas på är resultatet av att dra av socialförsäkringsavgifter (ca 6,45 %) och ett allmänt avdrag för svårmotiverade utgifter (2 000 € årligen) från din bruttolön. Skattefria avdrag tillämpas sedan på detta resultat.',
    },
    {
      type: 'title',
      text: 'Grundläggande begrepp',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Marginalskatt:</strong> Skatteprocentsatsen på din sista intjänade euro. Avgörande för att veta hur mycket en löneökning eller bonus faktiskt kommer att kosta dig i skatt.',
        '<strong>Existensminimum (Vital Minimum):</strong> Inkomst som staten anser vara nödvändig för att täcka skattebetalarens och familjens grundläggande behov, och som därför är skattebefriad.',
        '<strong>Skatteavdrag på lön:</strong> Förskottsbetalning som arbetsgivare betalar in varje månad till skatteverket för din räkning, baserat på en uppskattning av vad du kommer att vara skyldig vid årets slut.',
        '<strong>Nettoinkomst:</strong> Bruttolön minus socialförsäkringsavgifter och avdragsgilla kostnader som tillåts enligt skattelagstiftningen.',
      ],
    },
    {
      type: 'title',
      text: 'Hur du optimerar ditt IRPF-skatteavdrag',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Många arbetstagare undrar om de ska be sin arbetsgivare att dra av mer eller mindre skatt. Verkligheten är att skatteavdraget är en "förskottsbetalning" till skatteverket. Om du har dragit för lite skatt under året kan din deklaration visa ett belopp att betala; om du har dragit för mycket får du en återbetalning.',
    },
    {
      type: 'paragraph',
      html: '<strong>Myten om skattehoppet:</strong> Det finns en myt om att flytt till en högre skatteklass innebär att du tjänar mindre netto. Detta är felaktigt. IRPF är progressiv; endast inkomst som överstiger gränsen beskattas med den högre skattesatsen. Du kommer aldrig att tjäna mindre netto på grund av en löneökning, även med en högre marginalskatt.',
    },
    {
      type: 'paragraph',
      html: '<strong>Tips för familjer:</strong> Se till att du har rapporterat födelse av barn eller ändringar i familjemedlemmars funktionsnedsättning korrekt med blankett 145. Detta justerar ditt månatliga skatteavdrag och undviker överraskningar i samband med deklarationen i juni.',
    },
    {
      type: 'title',
      text: 'Skillnader per autonom region',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Finansiell decentralisering i Spanien innebär att två personer med samma lön och familjesituation har olika nettoinkomster beroende på om de bor i Toledo eller Barcelona. Regionerna kontrollerar hälften av skatten (regional del). Madrid utmärker sig till exempel genom att ha de lägsta skattesatserna på nästan alla inkomstnivåer, medan andra regioner tillämpar avdrag för hyra eller barnens utbildning som inte finns på nationell nivå. Vår kalkylator tar hänsyn till dessa variationer för att ge dig den mest realistiska siffran baserat på din bostadsort.',
    },
    {
      type: 'paragraph',
      html: 'Sammanfattningsvis är <strong>simulationen av nettolön 2026</strong> ett grundläggande verktyg för finansiell planering. Genom att känna till din verkliga sparkapacitet och förstå vilken del av din inkomst som går till att stödja offentliga tjänster kan du fatta välgrundade beslut om investeringar, bolån eller karriärbyten.',
    },
  ],
};
