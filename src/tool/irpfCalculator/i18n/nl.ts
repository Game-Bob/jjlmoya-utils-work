import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IrpfCalculatorUI } from '../ui';

const slug = 'irpf-calculator-spanje';
const title = 'IRPF-calculator 2026: Netto Salaris Simulator Spanje';
const description =
  'Bereken uw netto maandsalaris en jaarsalaris voor 2026 in Spanje. Bijgewerkte simulator met staats- en regionale schalen, MEI en gezinssituatie.';

const faqData = [
  {
    question: 'Hoe beïnvloedt de MEI mijn netto salaris in 2026?',
    answer:
      'Het Intergenerationeel Solidariteitsmechanisme (MEI) stijgt naar 0,90% in 2026 om de houdbaarheid van de pensioenen te waarborgen. Het grootste deel wordt door de werkgever betaald, maar werknemers zien hun netto salaris dalen door hun eigen bijdragepercentage.',
  },
  {
    question: 'Waarom is mijn netto salaris anders in Madrid dan in Catalonië?',
    answer:
      'IRPF is een belasting die voor 50% is overgedragen aan de Autonome Gemeenschappen. Madrid hanteert lagere schijven dan de staatsschaal, terwijl Catalonië een eigen schaal heeft die de initiële inhouding kan verhogen.',
  },
  {
    question: 'Wat is het marginaal tarief en hoe beïnvloedt dit mij?',
    answer:
      'Het marginaal tarief is het belastingpercentage over uw laatst verdiende euro. Het laat zien wat een salarisverhoging of bonus u daadwerkelijk aan belasting kost.',
  },
  {
    question: 'Hoeveel betalingsperioden moet ik selecteren voor de maandelijkse berekening?',
    answer:
      'Normaal gesproken ontvangt u 12 of 14 betalingen (met extra betalingen in de zomer en met Kerst). Selecteer de optie die uw bedrijf gebruikt om uw werkelijke netto maandinkomen te weten.',
  },
  {
    question: 'Is deze calculator betrouwbaar voor mijn belastingaangifte?',
    answer:
      'Deze tool biedt een schatting op basis van de regelgeving voor 2026. De maandelijkse inhouding is een benadering; uw werkelijke eindresultaat wordt bepaald bij de belastingaangifte in juni.',
  },
];

const howToData = [
  {
    name: 'Voer uw brutosalaris in',
    text: 'Typ het totale jaarbedrag dat in uw contract staat, vóór eventuele aftrekposten of inhoudingen.',
  },
  {
    name: 'Definieer uw persoonlijke situatie',
    text: 'Geef het aantal kinderen, eventuele erkende arbeidsongeschiktheid en burgerlijke staat aan om wettelijke belastingvrije voet toe te passen.',
  },
  {
    name: 'Kies uw Autonome Gemeenschap',
    text: 'Uw fiscale woonplaats bepaalt de toegepaste regionale belastingschaal, wat uw uiteindelijke netto inkomen beïnvloedt.',
  },
  {
    name: 'Bekijk de specificatie',
    text: 'Zie hoeveel er naar IRPF en Sociale Zekerheid gaat, en wat uw echte netto maandsalaris en jaarsalaris is.',
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

export const content: ToolLocaleContent<IrpfCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    titleVariables: 'Berekeningsvariabelen',
    titleCalculo: 'Transparante Berekening 2026',
    labelBruto: 'Jaarlijks Brutosalaris (€)',
    labelPagas: 'Aantal Betalingen',
    labelComunidad: 'Fiscale Woonplaats',
    labelHijos: 'Kinderen (onder de 25)',
    labelDiscapacidad: 'Mate van Arbeidsongeschiktheid',
    labelUnidad: 'Gezinsonderdeel of Samenleving',
    opt12pagas: '12 betalingen',
    opt14pagas: '14 betalingen',
    optGen: 'Algemeen Gebied (Generiek)',
    optMad: 'Madrid',
    optCat: 'Catalonië',
    optAnd: 'Andalusië',
    optVal: 'Regio Valencia',
    optPV: 'Baskenland (Foral)',
    optNav: 'Navarra (Foral)',
    optNinguna: 'Geen',
    opt33: '> 33%',
    opt65: '> 65%',
    optSoltero: 'Ongehuwd, gescheiden of weduwnaar/weduwe',
    optCasadoLow: 'Gehuwd (partner verdient minder dan € 1.500/jaar)',
    optCasadoHigh: 'Gehuwd (partner heeft inkomen)',
    labelSalarioBruto: 'Brutosalaris',
    labelSS: 'Sociale Zekerheid / MEI (-)',
    labelGastos: 'Aftrekbare Kosten (Art. 20)',
    labelNetoAnual: 'NETTO JAARSALARIS',
    labelRetencionIRPF: 'IRPF-inhouding (%)',
    labelNetoMensual: 'Beschikbaar Netto Maandbedrag',
    labelMarginal: 'Toegepast Marginaal Tarief',
    resultRetention: 'IRPF-inhouding (%)',
    resultAnual: '/ jaar',
    infoText:
      'AEAT-algoritme (Brutobelasting - Minimumbelasting) gevalideerd voor 2026. Inclusief MEI-bijdrage van 6,47% en verminderingen voor inkomsten uit arbeid. jjlmoya.es.',
  },
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Bronnen',
  bibliography: [
    {
      name: 'Belastingdienst: IRPF',
      url: 'https://sede.agenciatributaria.gob.es/Sede/irpf.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'IRPF-calculator 2026: Volledige gids voor het nieuwe fiscale scenario',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De personenbelasting (IRPF) is de meest relevante heffing in het Spaanse belastingstelsel en heeft een directe invloed op de maandelijkse loonstrook van miljoenen werknemers. In 2026 zien we een consolidatie van diverse hervormingen gericht op progressiviteit en aanpassing aan nieuwe economische realiteiten, zoals de stijging van het Intergenerationeel Solidariteitsmechanisme (MEI) en de afvlakking van de tarieven in verschillende autonome gemeenschappen.',
    },
    {
      type: 'paragraph',
      html: 'Onze <strong>IRPF-calculator voor 2026</strong> is ontworpen om een nauwkeurig en up-to-date inzicht te geven in wat er daadwerkelijk op uw bankrekening binnenkomt. Het berekenen van het netto salaris is niet simpelweg een vast percentage aftrekken; het is een wiskundig proces dat rekening houdt met uw persoonlijke situatie, familieleden ten laste, arbeidsongeschiktheid en, cruciaal, uw fiscale woonplaats, aangezien elke regio in Spanje zeggenschap heeft over de regionale belastingschijf.',
    },
    {
      type: 'title',
      text: 'Wat verandert er in de loonstroken van 2026?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Om uw simulatieresultaten te begrijpen, is het essentieel om de pijlers van de inhoudingsberekeningen van dit jaar te kennen:',
    },
    {
      type: 'list',
      items: [
        '<strong>Impact van de MEI:</strong> Het Intergenerationeel Solidariteitsmechanisme zet zijn opwaartse pad voort om de pensioenen te garanderen en bereikt in 2026 0,90%. Het grootste deel wordt door de werkgever betaald, maar werknemers zien hun eigen bijdrage stijgen tot ongeveer 0,15%, wat het netto inkomen licht verlaagt.',
        '<strong>SMI en Verminderingen:</strong> Het interprofessioneel minimumloon (SMI) fungeert als een drempel. Lage inkomens profiteren van een uitgebreide vermindering van het inkomen uit arbeid om ervoor te zorgen dat loonsverhogingen niet volledig worden opgeslokt door een hogere belastinginhouding.',
        '<strong>Regionale belastingschijven:</strong> Regio\'s zoals Madrid, Andalusië of Murcia hanteren doorgaans lagere tarieven dan het staatsgemiddelde, terwijl Catalonië of de regio Valencia eigen schalen hebben die de inhouding bij hogere inkomensniveaus kunnen verhogen.',
      ],
    },
    {
      type: 'title',
      text: 'Kernbegrippen om uw netto salaris te begrijpen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Belastbare grondslag vs. bruto salaris:</strong> U betaalt geen belasting over alles wat u verdient. De grondslag waarop de IRPF van toepassing is, is het resultaat van het aftrekken van de sociale zekerheidsbijdragen (ongeveer 6,45%) en een algemene vermindering voor moeilijk te verantwoorden kosten (€ 2.000 per jaar) van uw bruto salaris. Vervolgens worden de belastingvrije voet en andere aftrekposten op dit resultaat toegepast.',
    },
    {
      type: 'title',
      text: 'Basisbegrippen',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Marginaal Tarief:</strong> Het belastingpercentage over uw laatst verdiende euro. Cruciaal om te weten hoeveel een salarisverhoging of bonus u daadwerkelijk aan belasting kost.',
        '<strong>Bestaansminimum (Vital Minimum):</strong> Het inkomen dat de Staat als essentieel beschouwt om te voorzien in de basisbehoeften van de belastingbetaler en zijn gezin, en dat daarom is vrijgesteld van belasting.',
        '<strong>Inhouding op het loon:</strong> Een voorschot op de belasting die werkgevers maandelijks namens u afdragen aan de Belastingdienst, gebaseerd op een schatting van wat u aan het einde van het jaar verschuldigd zult zijn.',
        '<strong>Netto inkomen:</strong> Het bruto salaris minus de sociale zekerheidsbijdragen en aftrekbare kosten die zijn toegestaan door de belastingwetgeving.',
      ],
    },
    {
      type: 'title',
      text: 'Hoe optimaliseert u uw IRPF-inhouding?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Veel werknemers vragen zich af of ze hun werkgever moeten vragen om meer of minder in te houden. De realiteit is dat inhouding een "voorschot" is aan de Belastingdienst. Als er gedurende het jaar te weinig is ingehouden, kan uw belastingaangifte resulteren in een te betalen bedrag; als er te veel is ingehouden, krijgt u geld terug.',
    },
    {
      type: 'paragraph',
      html: '<strong>De mythe van de schijvensprong:</strong> Er bestaat een mythe dat overgaan naar een hogere schijf betekent dat u minder netto overhoudt. Dit is onjuist. De IRPF is progressief; alleen het inkomen boven de drempel van de schijf wordt tegen het hogere tarief belast. U zult nooit minder netto verdienen door een bruto salarisverhoging, zelfs niet met een hoger marginaal tarief.',
    },
    {
      type: 'paragraph',
      html: '<strong>Tip voor gezinnen:</strong> Zorg ervoor dat u de geboorte van kinderen of veranderingen in de arbeidsongeschiktheidsstatus van gezinsleden correct hebt gemeld via formulier 145. Dit past uw maandelijkse inhouding aan en voorkomt verrassingen bij de belastingaangifte in juni.',
    },
    {
      type: 'title',
      text: 'Verschillen per Autonome Gemeenschap',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Fiscale decentralisatie in Spanje betekent dat twee mensen met hetzelfde salaris en dezelfde gezinssituatie een verschillend netto inkomen hebben, afhankelijk van of ze in Toledo of Barcelona wonen. De gemeenschappen hebben zeggenschap over de helft van de belasting (regionale schijf). Madrid staat bijvoorbeeld bekend om de laagste tarieven op vrijwel elk inkomensniveau, terwijl andere regio\'s aftrekposten voor huur of de opleiding van kinderen toepassen die op nationaal niveau niet beschikbaar zijn. Onze calculator houdt rekening met deze variaties om u het meest realistische cijfer te geven op basis van uw locatie.',
    },
    {
      type: 'paragraph',
      html: 'Kortom, de <strong>netto salarissimulatie voor 2026</strong> is een fundamenteel instrument voor financiële planning. Inzicht in uw werkelijke spaarcapaciteit en begrijpen welk deel van uw inkomen naar openbare diensten gaat, stelt u in staat om weloverwogen beslissingen te nemen over investeringen, hypotheken of carrièrestappen.',
    },
  ],
};
