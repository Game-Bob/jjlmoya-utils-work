import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AutonomosCalculatorUI } from '../ui';

const slug = 'salary-calculator-autonomos-spain-sv';
const title = 'Avgiftskalkylator för Egenföretagare 2026: Spaniens RETA-system för verklig inkomst';
const description =
  'Gratis simulator för egenavgifter (autónomo) i Spanien 2026. Beräkna din verkliga nettoinkomst, avgiftstrappa och månadsavgift med den nya MEI-nivån på 0,9 %.';

const faqData = [
  {
    question: 'Hur fungerar det nya avgiftssystemet för 2026?',
    answer:
      'Systemet är baserat på 15 trappsteg för verklig nettoinkomst. Du måste lämna en prognos över din vinst (intäkter minus kostnader) och betala den avgift som är kopplad till det aktuella månadssteget.',
  },
  {
    question: 'Vad är MEI och hur påverkar det min egenavgift?',
    answer:
      'Mekanismen för generationsövergripande rättvisa (MEI) är en öronmärkt skatt för pensioner. Under 2026 stiger den till 0,9 %, vilket höjer avgiften något jämfört med 2025 för alla egenföretagare.',
  },
  {
    question: 'Hur många gånger kan jag ändra mitt avgiftsunderlag?',
    answer:
      'Du kan ändra ditt avgiftsunderlag, och därmed din egenavgift, upp till 6 gånger per år för att anpassa den till din faktiska månadsinkomst.',
  },
  {
    question: 'Vad händer om min faktiska inkomst skiljer sig från min prognos?',
    answer:
      'Försäkringskassan (Seguridad Social) gör en årlig avstämning genom att kontrollera uppgifter mot skatteverket. Om du har betalat för lite krävs mellanskillnaden in; om du har betalat för mycket återbetalas överskottet automatiskt.',
  },
  {
    question: 'Finns det kvar schablonavgiften på 80 euro?',
    answer:
      'Ja, den reducerade avgiften på 80 € bibehålls för nya egenföretagare under de första 12 månaderna av verksamheten, med möjlighet till förlängning i ytterligare 12 månader om inkomsten understiger minimilönen.',
  },
];

const howToData = [
  {
    name: 'Ange intäkter och kostnader',
    text: 'Skriv in din förväntade månatliga omsättning och de avdragsgilla kostnaderna för din yrkesverksamhet.',
  },
  {
    name: 'Definiera din arbetsprofil',
    text: 'Välj om du är en enskild egenföretagare (7 % schablonavdrag) eller en bolagsstyrd egenföretagare (3 % schablonavdrag).',
  },
  {
    name: 'Visa din faktiska trappa',
    text: 'Simulatorn beräknar din nettoinkomst och visar vilken avgiftstrappa som gäller för 2026.',
  },
  {
    name: 'Kontrollera MEI-effekten',
    text: 'Du ser den slutliga avgiftssammanställningen inklusive sociala förmåner och den nya generationsövergripande rättvisefaktorn.',
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

export const content: ToolLocaleContent<AutonomosCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelIncome: 'Månatlig bruttoinkomst',
    labelExpenses: 'Månatliga avdragsgilla kostnader',
    labelType: 'Arbetarprofil',
    labelFlatRate: 'Schablonavgift (Nyregistrering)',
    optStandard: 'Enskild egenföretagare (7 % avdrag)',
    optSocietario: 'Bolagsstyrd egenföretagare (3 % avdrag)',
    optNoFlatRate: 'Tillämpas ej (Verklig avgift)',
    optFlatRate: 'Ja, första året (80 €/månad)',
    labelBracket: 'Din nettoinkomsttrappa',
    labelNetDisplay: 'Månatlig nettoinkomst',
    labelCuota: 'Socialförsäkringsavgift',
    labelBase: 'Avgiftsunderlag',
    labelNetAfter: 'Realt netto (efter avgift)',
    labelProjection: 'PROGNOS 2026 (MEI 0,9 %)',
    infoText:
      'RETA 2026-systemet: Beräkningen inkluderar månatlig nettoinkomst med schablonavdrag (7 % eller 3 %). Den visade avgiften inkluderar allmänna förmåner, yrkesmässiga förmåner, verksamhetsupphörande, utbildning och mekanismen för generationsövergripande rättvisa (MEI) uppdaterad till 0,9 % för 2026.',
  },
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Källor',
  bibliography: [
    {
      name: 'Seguridad Social: Nytt avgiftssystem',
      url: 'https://portal.seg-social.gob.es/wps/portal/importass/importass/Colectivos/Trabajo+Autonomo/guia',
    },
    {
      name: 'Skatteverket: Inkomster från ekonomisk verksamhet',
      url: 'https://sede.agenciatributaria.gob.es/Sede/irpf/empresarios-individuales-profesionales/rendimientos-actividades-economicas.html',
    },
    {
      name: 'BOE: Kungligt förordnande 13/2022 om RETA-reformen',
      url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2022-12482',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Avgiftskalkylator för Egenföretagare 2026: Guide till det nya systemet',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att vara egenföretagare i Spanien innebär att hantera en av de mest dynamiska och ibland förvirrande uppgifterna: <strong>socialförsäkringsavgifterna</strong>. Sedan det nya systemet baserat på <strong>faktisk nettoinkomst</strong> trädde i kraft har begreppet "fast avgift" försvunnit och ersatts av en progressiv modell.',
    },
    {
      type: 'title',
      text: 'Hur fungerar det nya RETA-avgiftssystemet?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Fram till 2023 kunde varje egenföretagare fritt välja sitt avgiftsunderlag, vilket ledde till att de flesta betalade minimiavgift. Reformen syftar till att säkerställa att höginkomsttagare bidrar mer, medan de med lägre inkomster får en minskad månatlig börda.',
    },
    {
      type: 'paragraph',
      html: 'Systemet är baserat på <strong>nettoinkomsttrappsteg</strong>. Detta innebär att din avgift inte beror på din bruttoinkomst (omsättning), utan på vad du faktiskt har kvar efter att ha dragit av yrkesmässiga kostnader och tillämpat ett extra schablonavdrag.',
    },
    {
      type: 'title',
      text: 'Viktiga ändringar för 2026: MEI-faktorn',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'År 2026 markerar konsolideringen av reformens andra fas. En av de mest kritiska uppdateringarna är höjningen av <strong>mekanismen för generationsövergripande rättvisa (MEI)</strong>.',
    },
    {
      type: 'list',
      items: [
        '<strong>MEI-höjning:</strong> För 2026 stiger MEI till 0,9 %, vilket innebär en liten höjning av avgiften jämfört med 2025 för alla trappsteg.',
        '<strong>Översyn av trappsteg:</strong> Nettoinkomsttrappstegen bibehålls, men minimi- och maximiavgifterna i varje intervall justeras för att sammanfalla med avgiftssystemet för verklig inkomst.',
        '<strong>Årlig avstämning:</strong> Vid årets slut kommer Seguridad Social att kontrollera uppgifter mot skatteverket. Om du har betalat för mycket eller för lite baserat på den faktiska vinsten kommer en återbetalning eller ett betalningskrav att utfärdas.',
      ],
    },
    {
      type: 'title',
      text: 'Så beräknar du din månatliga nettoinkomst',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'För att använda vår kalkylator på rätt sätt är det viktigt att förstå vilken siffra som ska matas in. Formeln som Seguridad Social tillämpar är:',
    },
    {
      type: 'code',
      code: 'Nettoinkomst = (Bruttoinkomst - Avdragsgilla kostnader) / (1 - Schablonavdrag)',
    },
    {
      type: 'paragraph',
      html: '<strong>Schablonavdraget</strong> är <strong>7 %</strong> för enskilda egenföretagare och <strong>3 %</strong> för bolagsstyrda egenföretagare.',
    },
    {
      type: 'card',
      title: 'Exempelberäkning 2026',
      html: '<ul><li>Omsättning: 4 000 € / Kostnader: 1 000 €</li><li>Vinstmarginal: 3 000 €</li><li>Schablonavdrag (7 %): 210 €</li><li>Beräkningsgrundande nettoinkomst: 2 790 €</li><li><strong>Uppskattad avgift 2026:</strong> Steg 8, ca 350 € + MEI-justering.</li></ul>',
    },
    {
      type: 'title',
      text: 'Fördelar med det progressiva systemet',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Bättre socialt skydd:</strong> Genom att betala avgifter baserat på mer realistiska underlag kommer ersättningarna för sjukdom, föräldraledighet och särskilt pensionen att bli betydligt högre.',
        '<strong>Full flexibilitet:</strong> Du kan ändra ditt avgiftsunderlag upp till 6 gånger per år. Om du förutser ett kraftigt inkomsttapp kan du byta till ett lägre steg för att undvika likviditetsproblem.',
        '<strong>80 € schablonavgift:</strong> Behålls för nya företagare under första året, vilket möjliggör en start med kontrollerade fasta kostnader.',
      ],
    },
    {
      type: 'title',
      text: 'Bolagsstyrd vs Enskild egenföretagare',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Den <strong>bolagsstyrda egenföretagaren</strong> (med ett SL-bolag) har ett något högre minimiavgiftsunderlag och schablonavdraget är lägre (3 %). Detta beror på att lagen anser att delägarskap ger dem en annan position i förhållande till marknadsrisker.',
    },
    {
      type: 'tip',
      html: '<strong>Pro-tips:</strong> Om din nettoinkomst varierar mycket från månad till månad, försök att lägga dig på ett försiktigt mellansteg. Den efterföljande avstämningen är oundviklig, men på detta sätt undviker du oväntade betalningar på tusentals euro när "räkningen" från Seguridad Social kommer vid årets slut.',
    },
    {
      type: 'title',
      text: 'Vad ingår i din månadsavgift?',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Allmänna förmåner (28,30 %):</strong> Täcker frånvaro vid vanlig sjukdom eller olycksfall utanför arbetet.',
        '<strong>Yrkesmässiga förmåner (1,30 %):</strong> Arbetsskador och yrkessjukdomar.',
        '<strong>Verksamhetsupphörande (0,90 %):</strong> Egenföretagarnas motsvarighet till a-kassa.',
        '<strong>Yrkesutbildning (0,10 %):</strong> Tillgång till kurser och utbildning.',
        '<strong>MEI (0,90 % under 2026):</strong> Fond för att garantera pensionernas hållbarhet.',
      ],
    },
    {
      type: 'title',
      text: 'Avstämningsprocessen (Skatteverket och Seguridad Social)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Varje år, efter inkomstdeklarationen, meddelar skatteverket din faktiska nettoinkomst till Seguridad Social. Om du har valt ett lägre steg än vad din faktiska inkomst krävde kommer du att få ett betalningskrav på mellanskillnaden. Om du däremot har betalat in mer än vad din vinst krävde kommer Seguridad Social automatiskt att återbetala överskottet utan att du behöver ansöka om det.',
    },
    {
      type: 'title',
      text: 'Slutsats och rekommendationer',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Egenföretagarkalkylatorn 2026</strong> är ett oumbärligt verktyg för skatteplanering för varje frilansare. Vi rekommenderar att du använder denna simulator varje gång du sluter ett viktigt avtal eller ändrar dina fasta kostnader för att säkerställa att din egenavgift alltid ligger i linje med din affärsmässiga verklighet.',
    },
  ],
};
