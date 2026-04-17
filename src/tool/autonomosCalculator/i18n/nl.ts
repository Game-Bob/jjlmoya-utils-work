import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AutonomosCalculatorUI } from '../ui';

const slug = 'zzp-premie-calculator-spanje';
const title = 'ZZP-premie Calculator 2026: Spanje RETA Systeem op basis van Werkelijk Inkomen';
const description =
  'Gratis simulator voor bijdragen van zelfstandigen in Spanje 2026. Bereken uw werkelijke netto-inkomen, contributieschijven en maandelijkse premie met de nieuwe MEI van 0,9%.';

const faqData = [
  {
    question: 'Hoe werkt het nieuwe contributiesysteem voor 2026?',
    answer:
      'Het systeem is gebaseerd op 15 schijven van werkelijk netto-inkomen. U moet een prognose van uw winst (inkomsten minus uitgaven) opgeven en de bijdrage betalen die bij die maandelijkse schijf hoort.',
  },
  {
    question: 'Wat is de MEI en hoe beïnvloedt deze mijn ZZP-premie?',
    answer:
      'Het Mechanisme voor Intergenerationele Gelijkheid (MEI) is een belasting bestemd voor pensioenen. In 2026 stijgt deze naar 0,9%, wat de bijdrage voor alle zelfstandigen licht verhoogt ten opzichte van 2025.',
  },
  {
    question: 'Hoe vaak kan ik mijn contributiegrondslag wijzigen?',
    answer:
      'U kunt uw contributiegrondslag, en daarmee uw ZZP-premie, tot 6 keer per jaar wijzigen om deze aan te passen aan de realiteit van uw maandelijkse winst.',
  },
  {
    question: 'Wat gebeurt er als mijn werkelijke inkomen afwijkt van mijn prognose?',
    answer:
      'De Sociale Zekerheid zal een jaarlijkse afrekening uitvoeren door gegevens te vergelijken met de Belastingdienst. Als u te weinig heeft betaald, wordt het verschil nagevorderd; als u te veel heeft betaald, wordt het overschot automatisch teruggestort.',
  },
  {
    question: 'Bestaat het vaste tarief van 80 euro nog?',
    answer:
      'Ja, het verlaagde tarief van € 80 blijft gehandhaafd voor nieuwe zelfstandigen gedurende de eerste 12 maanden van de activiteit, verlengbaar met nog eens 12 maanden als het inkomen onder het minimumloon ligt.',
  },
];

const howToData = [
  {
    name: 'Voer inkomsten und uitgaven in',
    text: 'Voer uw verwachte maandelijkse omzet en de aftrekbare kosten van uw professionele activiteit in.',
  },
  {
    name: 'Definieer uw werkprofiel',
    text: 'Selecteer of u een individuele zelfstandige bent (7% aftrek) of een directeur van een vennootschap (3% aftrek).',
  },
  {
    name: 'Bekijk uw werkelijke schijf',
    text: 'De simulator berekent uw netto-inkomen en toont u de contributieschijf die van toepassing is voor 2026.',
  },
  {
    name: 'Controleer de impact van de MEI',
    text: 'U ziet de definitieve specificatie van de premie, inclusief onvoorziene omstandigheden en de nieuwe intergenerationele gelijkheidsfactor.',
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

export const content: ToolLocaleContent<AutonomosCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelIncome: 'Maandelijks Bruto-inkomen',
    labelExpenses: 'Maandelijkse Aftrekbare Kosten',
    labelType: 'Arbeidsprofiel',
    labelFlatRate: 'Vast Tarief (Nieuwe Inschrijving)',
    optStandard: 'Individuele Zelfstandige (7% aftrek)',
    optSocietario: 'Directeur Vennootschap (3% aftrek)',
    optNoFlatRate: 'Niet toegepast (Werkelijke Premie)',
    optFlatRate: 'Ja, eerste jaar (€ 80/maand)',
    labelBracket: 'Uw Netto-inkomensschijf',
    labelNetDisplay: 'Maandelijks Netto-inkomen',
    labelCuota: 'Socialezekerheidsbijdrage',
    labelBase: 'Contributiegrondslag',
    labelNetAfter: 'Werkelijk Netto (na premie)',
    labelProjection: 'PROGNOSE 2026 (MEI 0,9%)',
    infoText:
      'RETA 2026 Systeem: De berekening omvat het maandelijkse netto-inkomen met de algemene kostenaftrek (7% of 3%). De getoonde bijdrage omvat algemene onvoorziene omstandigheden, beroepsgebonden onvoorziene omstandigheden, beëindiging van de activiteit, opleiding en het voor 2026 op 0,9% bijgewerkte Mechanisme voor Intergenerationele Gelijkheid (MEI).',
  },
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Bronnen',
  bibliography: [
    {
      name: 'Sociale Zekerheid: Nieuw contributiesysteem',
      url: 'https://portal.seg-social.gob.es/wps/portal/importass/importass/Colectivos/Trabajo+Autonomo/guia',
    },
    {
      name: 'Belastingdienst: Inkomsten uit economische activiteiten',
      url: 'https://sede.agenciatributaria.gob.es/Sede/irpf/empresarios-individuales-profesionales/rendimientos-actividades-economicas.html',
    },
    {
      name: 'BOE: Koninklijk Besluit-Wet 13/2022 over de RETA-hervorming',
      url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2022-12482',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'ZZP-premie Calculator 2026: Gids voor het Nieuwe Systeem',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Zelfstandige zijn in Spanje betekent dat u geconfronteerd wordt met een van de meest dynamische en soms verwarrende taken: de <strong>socialezekerheidsbijdragen</strong>. Sinds het nieuwe systeem op basis van het <strong>werkelijke netto-inkomen</strong> van kracht is geworden, is het concept van een "vaste premie" verdwenen en vervangen door een progressief model.',
    },
    {
      type: 'title',
      text: 'Hoe werkt het nieuwe RETA-contributiesysteem?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tot 2023 kon elke zelfstandige vrij zijn contributiegrondslag kiezen, wat ertoe leidde dat de meesten het minimum bijdroegen. De hervorming is bedoeld om ervoor te zorgen dat hogere verdieners meer bijdragen, terwijl mensen met lagere inkomsten hun maandelijkse lasten zien dalen.',
    },
    {
      type: 'paragraph',
      html: 'Het systeem is gebaseerd op <strong>schijven van netto-inkomen</strong>. Dit betekent dat uw premie niet afhangt van uw bruto-inkomen (omzet), maar van wat u daadwerkelijk "schoon" overhoudt na aftrek van professionele kosten en toepassing van een extra algemene kostenaftrek.',
    },
    {
      type: 'title',
      text: 'Belangrijkste wijzigingen voor 2026: De MEI-factor',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Het jaar 2026 markeert de consolidatie van de tweede fase van de hervorming. Een van de meest kritieke updates is de verhoging van het <strong>Mechanisme voor Intergenerationele Gelijkheid (MEI)</strong>.',
    },
    {
      type: 'list',
      items: [
        '<strong>MEI Verhoging:</strong> Voor 2026 stijgt de MEI naar 0,9%, wat een lichte verhoging van de bijdrage betekent ten opzichte van 2025 voor alle schijven.',
        '<strong>Herziening Schijven:</strong> De netto-inkomensschijven blijven behouden, maar de minimum- en maximumbijdragen van elke reeks worden aangepast om te convergeren met het bijdragesysteem voor werkelijk inkomen.',
        '<strong>Jaarlijkse Afrekening:</strong> Aan het einde van het jaar zal de Sociale Zekerheid de gegevens vergelijken met de Belastingdienst. Als u op basis van de werkelijke winst te veel of te weinig heeft betaald, volgt een terugbetaling of een extra rekening.',
      ],
    },
    {
      type: 'title',
      text: 'Hoe berekent u uw maandelijks netto-inkomen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Om onze calculator nauwkeurig te gebruiken, is het essentieel om te begrijpen welk bedrag moet worden ingevoerd. De door de Sociale Zekerheid toegepaste formule is:',
    },
    {
      type: 'code',
      code: 'Netto-inkomen = (Bruto-inkomen - Aftrekbare Kosten) / (1 - Algemene Kostenaftrek)',
    },
    {
      type: 'paragraph',
      html: 'De <strong>Algemene Kostenaftrek</strong> bedraagt <strong>7%</strong> voor individuele zelfstandigen en <strong>3%</strong> voor directeuren van vennootschappen.',
    },
    {
      type: 'card',
      title: 'Voorbeeldberekening 2026',
      html: '<ul><li>Omzet: € 4.000 / Kosten: € 1.000</li><li>Winstmarge: € 3.000</li><li>Algemene aftrek (7%): € 210</li><li>Toerekenbaar netto-inkomen: € 2.790</li><li><strong>Geschatte premie 2026:</strong> Schijf 8, ca. € 350 + MEI-aanpassing.</li></ul>',
    },
    {
      type: 'title',
      text: 'Voordelen van het progressieve systeem',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Betere sociale bescherming:</strong> Door bij te dragen op basis van realistischere grondslagen, zullen uitkeringen voor tijdelijke arbeidsongeschiktheid, moederschap, vaderschap en vooral pensioen aanzienlijk hoger zijn.',
        '<strong>Volledige flexibiliteit:</strong> U kunt uw contributiegrondslag tot 6 keer per jaar wijzigen. Als u een forse inkomensdaling verwacht, kunt u naar een lagere schijf overstappen om liquiditeitsproblemen te voorkomen.',
        '<strong>€ 80 Vast Tarief:</strong> Wordt gehandhaafd voor nieuwe ondernemers in het eerste jaar, wat een start met gecontroleerde vaste kosten mogelijk maakt.',
      ],
    },
    {
      type: 'title',
      text: 'Directeur Vennootschap vs. Individuele Zelfstandige',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De <strong>directeur van een vennootschap</strong> (met een SL-vennootschap) heeft een iets hogere minimum contributiegrondslag en de algemene kostenaftrek is lager (3%). Dit komt omdat de wet ervan uitgaat dat de controle van de aandeelhouders hen een andere positie geeft ten opzichte van marktrisico\'s.',
    },
    {
      type: 'tip',
      html: '<strong>Pro-tip:</strong> Als uw netto-inkomen per maand veel varieert, probeer uzelf dan in een voorzichtige middenschijf te positioneren. De latere afrekening is onvermijdelijk, but op deze manier voorkomt u onverwachte betalingen van duizenden euro\'s wanneer de "rekening" van de Sociale Zekerheid aan het einde van het jaar komt.',
    },
    {
      type: 'title',
      text: 'Wat is inbegrepen in uw maandelijkse premie?',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Algemene Onvoorziene Omstandigheden (28,30%):</strong> Dekt afwezigheid wegens ziekte of ongevallen buiten het werk.',
        '<strong>Beroepsgebonden Onvoorziene Omstandigheden (1,30%):</strong> Arbeidsongevallen en beroepsziekten.',
        '<strong>Beëindiging van Activiteit (0,90%):</strong> De "werkloosheidsuitkering" voor zelfstandigen.',
        '<strong>Beroepsopleiding (0,10%):</strong> Toegang tot cursussen en trainingen.',
        '<strong>MEI (0,90% in 2026):</strong> Fonds om de duurzaamheid van de pensioenen te garanderen.',
      ],
    },
    {
      type: 'title',
      text: 'Het afrekeningsproces (Belastingdienst en Sociale Zekerheid)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Elk jaar, na de campagne voor de belastingaangifte, geeft de Belastingdienst uw werkelijke netto-inkomen door aan de Sociale Zekerheid. Als u een lagere schijf heeft gekozen dan uw werkelijke inkomen vereiste, ontvangt u een betaalverzoek voor het verschil. Omgekeerd, als u meer heeft bijgedragen dan uw winst, zal de Sociale Zekerheid het overschot automatisch terugstorten zonder dat u dit expliciet hoeft aan te vragen.',
    },
    {
      type: 'title',
      text: 'Conclusie en aanbevelingen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De <strong>ZZP-calculator 2026</strong> is een onmisbaar instrument voor de belastingplanning van elke freelancer. Wij raden aan om deze simulator telkens te gebruiken wanneer u een belangrijk contract sluit of uw vaste kosten wijzigt om ervoor te zorgen dat uw ZZP-premie altijd in lijn is met de realiteit van uw bedrijf.',
    },
  ],
};
