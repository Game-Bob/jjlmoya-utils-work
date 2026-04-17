import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SalaryCalculatorUI } from '../ui';

const slug = 'salaris-calculator-spanje';
const title = 'Salaris Calculator Spanje: Netto Salaris Simulator IRPF en Sociale Zekerheid';
const description =
  'Ontdek hoeveel u daadwerkelijk per maand gaat verdienen. Nauwkeurige berekening van inhoudingen, belastbare grondslag en netto inkomen volgens de Spaanse regelgeving.';

const faqData = [
  {
    question: 'Hoe wordt het netto salaris berekend in Spanje?',
    answer:
      'Het netto salaris wordt berekend door de IRPF-inhoudingen (volgens schijven) en de socialezekerheidsbijdragen (ongeveer 6,35% van het bruto) van het brutobedrag af te trekken. Het percentage IRPF varieert afhankelijk van uw persoonlijke situatie en salarisniveau.',
  },
  {
    question: 'Wat is het verschil tussen 12 en 14 betalingsperioden?',
    answer:
      'Bij 12 betalingsperioden wordt de vakantiebijslag maandelijks verdeeld. Bij 14 betalingsperioden ontvangt u twee extra betalingen (meestal in juni/juli en december). Het jaarlijkse bruto is hetzelfde, alleen de verdeling verandert.',
  },
  {
    question: 'Waarom komt mijn loonstrook niet precies overeen met de calculator?',
    answer:
      'Deze calculator maakt gebruik van standaardbenaderingen. Uw werkelijke loonstrook kan afwijken door: bedrijfsspecifieke inhoudingen, secundaire arbeidsvoorwaarden, kinderen ten laste, arbeidsongeschiktheid of persoonlijke situaties die de IRPF beïnvloeden.',
  },
  {
    question: 'Welk percentage van mijn salaris houdt de belastingdienst in?',
    answer:
      'Dit hangt af van uw salaris. Over het algemeen wordt er tussen IRPF en Sociale Zekerheid 25% tot 45% van het bruto ingehouden. Hoe hoger het salaris, hoe hoger het inhoudingspercentage vanwege het progressieve systeem van de IRPF.',
  },
  {
    question: 'Wat is IRPF?',
    answer:
      'Inkomstenbelasting voor natuurlijke personen. Het is een progressieve belasting: wie meer verdient, betaalt een hoger percentage over de hogere schijven van zijn salaris.',
  },
];

const howToData = [
  {
    name: 'Voer het jaarlijkse brutosalaris in',
    text: 'Typ het totale bedrag dat in uw contract is overeengekomen, vóór belastingen en inhoudingen.',
  },
  {
    name: 'Stel de gezinssituatie in',
    text: 'Geef aan of u kinderen of personen ten laste heeft, aangezien dit het percentage IRPF dat op u wordt toegepast verlaagt.',
  },
  {
    name: 'Aantal betalingsperioden',
    text: 'Kies of u uw salaris in 12 betalingsperioden (bonussen verdeeld) of 14 betalingsperioden ontvangt.',
  },
  {
    name: 'Maandelijkse specificatie bekijken',
    text: 'Controleer hoeveel er naar de Sociale Zekerheid en de IRPF gaat en wat het exacte netto inkomen is dat op uw bankrekening wordt gestort.',
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
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<SalaryCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelGross: 'Jaarlijks Brutosalaris',
    labelPays: 'Aantal Betalingen',
    btn12: '12 Perioden',
    btn14: '14 Perioden',
    labelAge: 'Leeftijd',
    labelContract: 'Contracttype',
    optIndefinite: 'Onbepaalde tijd / Algemeen',
    optTemporal: 'Tijdelijk',
    btnCalculate: 'Netto Salaris Berekenen',
    labelNetMonthly: 'Maandelijks Netto Salaris',
    labelNetAnnual: 'Jaarlijks Netto Salaris',
    labelPaysDisplay: 'Betalingsperioden',
    labelBreakdown: 'Indeling Inhoudingen (Geschat)',
    labelIRPF: 'IRPF',
    labelSS: 'Sociale Zekerheid',
    disclaimer:
      '*Vereenvoudigde berekening voor een alleenstaande werknemer, zonder kinderen en jonger dan 65 jaar.',
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
      text: 'Waar verdwijnt mijn brutosalaris?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Het is de meest voorkomende verrassing bij een eerste baan: u tekent een contract voor € 24.000 per jaar, deelt dat door 12 in de verwachting € 2.000 per maand te ontvangen, en vindt € 1.600 op uw rekening. Waar is die andere € 400?',
    },
    {
      type: 'paragraph',
      html: 'In Spanje is het verschil tussen <strong>Bruto</strong> (wat het bedrijf betaalt) en <strong>Netto</strong> (wat u ontvangt) verdeeld over twee hoofdonderdelen: IRPF en Sociale Zekerheid. Inzicht hierin is essentieel bij het onderhandelen over salarisverhogingen.',
    },
    {
      type: 'title',
      text: 'Sociale Zekerheid: De ~6,35% die uw toekomst financiert',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Het is een vaste bijdrage voor bijna alle werknemers. Het hangt niet af van de vraag of u alleenstaand bent of getrouwd. Met dit geld financiert u:',
    },
    {
      type: 'list',
      items: [
        '<strong>Algemene Risico\'s (4,70%)</strong>: Dekt afwezigheid wegens ziekte, ongevallen buiten het werk, pensionering en moederschap.',
        '<strong>Werkloosheid (1,55% of 1,60%)</strong>: Uw bijdrage om aanspraak te kunnen maken op een werkloosheidsuitkering als u uw baan verliest. Varieert enigszins als het contract tijdelijk is.',
        '<strong>Beroepsopleiding (0,10%)</strong>: Voor gesubsidieerde opleidingscursussen en omscholing.',
      ],
    },
    {
      type: 'title',
      text: 'IRPF: De belasting die het meeste pijn doet',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Deze is progressief en kan variëren van 2% tot 47%, afhankelijk van uw salaris en persoonlijke situatie. Het is geen vaste belasting; het is een vooruitbetaling aan de belastingdienst. Het bedrijf berekent hoeveel belasting u volgend jaar zou moeten betalen en houdt dat maand na maand in.',
    },
    {
      type: 'title',
      text: 'Factoren die uw IRPF verlagen',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Kinderen hebben (vooral onder de 3 jaar).',
        'Een erkende arbeidsongeschiktheid hebben (>33%).',
        'Een partner ten laste hebben met een laag inkomen.',
      ],
    },
    {
      type: 'title',
      text: 'Staatsschijven IRPF (Schatting 2026)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '€ 0 - € 12.450: 19%',
        '€ 12.450 - € 20.200: 24%',
        '€ 20.200 - € 35.200: 30%',
        '€ 35.200 - € 60.000: 37%',
        '> € 60.000: 45%',
      ],
    },
    {
      type: 'title',
      text: 'De eeuwige vraag: 12 of 14 betalingen?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Veel werknemers geven de voorkeur aan 14 betalingen voor de extra betalingen in de zomer en met Kerstmis. Anderen geven de voorkeur aan (of het bedrijf verplicht) het spreiden van het loon over 12 maanden. Wiskundig gezien verdient u per jaar precies hetzelfde.',
    },
    {
      type: 'list',
      items: [
        '<strong>12 BETALINGSOPERIODEN</strong>: U verdient elke maand meer, maar heeft geen bonussen. Beter voor een constante maandelijkse cashflow.',
        '<strong>14 BETALINGSOPERIODEN</strong>: U verdient elke maand iets minder, maar ontvangt twee dubbele betalingen per jaar. Werkt als "gedwongen sparen".',
      ],
    },
  ],
};
