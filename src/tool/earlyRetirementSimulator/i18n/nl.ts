import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EarlyRetirementSimulatorUI } from '../ui';

const slug = 'vroegpensioen-simulator-spanje';
const title = 'Vroegpensioen Simulator Spanje: Bereken uw Pensioen';
const description =
  'Bereken gratis uw pensioenleeftijd, kortingscoëfficiënten en geschatte pensioen. Geactualiseerde simulator voor vrijwillig und onvrijwillig vervroegd pensioen in Spanje.';

const faqData = [
  {
    question: 'Wat is de minimumleeftijd voor vroegpensioen in Spanje?',
    answer:
      'Voor vrijwillig vroegpensioen is de minimumleeftijd 2 jaar vóór de wettelijke leeftijd (over het algemeen 63 of 65 jaar, afhankelijk van de bijdragen). Voor onvrijwillig pensioen is dit tot 4 jaar eerder (61 of 63 jaar).',
  },
  {
    question: 'Hoeveel jaar bijdragen heb ik nodig?',
    answer:
      'Voor vrijwillig vroegpensioen is ten minste 35 jaar aan effectieve bijdragen vereist. Voor onvrijwillig of gedwongen pensioen is het minimum 33 jaar.',
  },
  {
    question: 'Hoeveel verlies ik door eerder met pensioen te gaan?',
    answer:
      'De korting hangt af van het aantal maanden vervroeging en het totaal aantal jaren bijgedragen. De kortingen variëren van 2,81% voor een enkele maand tot een maximum van ongeveer 21% voor de volledige vrijwillige vervroeging van 2 jaar.',
  },
  {
    question: 'Telt de tijd van werkloosheid mee voor het pensioen?',
    answer:
      'Ja, de tijd waarin u een werkloosheidsuitkering (paro) ontvangt, telt mee voor het pensioen, aangezien de SEPE de bijbehorende bijdragen aan de Sociale Zekerheid betaalt.',
  },
];

const howToData = [
  {
    name: 'Voer uw geboortejaar in',
    text: 'Dit bepaalt uw wettelijke gewone pensioenleeftijd volgens de regelgeving die in 2026 van kracht is.',
  },
  {
    name: 'Schat uw jaren van bijdragen',
    text: 'Inclusief tijd in loondienst, als zelfstandige en perioden van premieplichtige werkloosheid.',
  },
  {
    name: 'Kies het type pensioen',
    text: 'Geef aan of het pensioen vrijwillig of gedwongen is om de juiste coëfficiënten toe te passen.',
  },
  {
    name: 'Bekijk uw geschatte pensioen',
    text: 'Zie de toegepaste korting en de exacte datum waarop u zou kunnen stoppen met werken.',
  },
];

const bibliography = [
  {
    name: 'Sociale Zekerheid Spanje: Gewoon en Vervroegd Pensioen',
    url: 'https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/PrestacionesPensionesTrabajadores/10963',
  },
  {
    name: 'Wet 21/2021 over het garanderen van de koopkracht van pensioenen',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-21652',
  },
  {
    name: 'Officiële Simulator - Tu Seguridad Social',
    url: 'https://prestaciones.seg-social.es/simulador-servicio/simulador-pension-jubilacion.html',
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
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<EarlyRetirementSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelBirthYear: 'Geboortejaar',
    labelContributions: 'Jaren Bijgedragen',
    labelBasePension: 'Bruto Maandbasis',
    labelRetirementAge: 'Pensioenleeftijd',
    labelExpectedDate: 'Verwachte Datum',
    labelEstimatedPension: 'Geschat Pensioen',
    labelPermanentReduction: 'Permanente Korting',
    labelYears: 'JAAR',
    btnLegalTitle: 'Standaard',
    btnLegalDesc: 'Wettelijke pensioenleeftijd. Geen korting. 100% van de basis.',
    btnVoluntaryTitle: 'Vrijwillig Vervroegd',
    btnVoluntaryDesc: 'Pensioen door persoonlijke keuze. Maandelijkse korting toegepast.',
    btnInvoluntaryTitle: 'Onvrijwillig / ERE',
    btnInvoluntaryDesc: 'Gedwongen beëindiging. Gunstigere coëfficiënten.',
    defaultBirthYear: '1975',
    defaultContributions: '30',
    defaultBasePension: '2500',
    adviceDefault: 'Beweeg de slider om uw pensioentijdlijn te projecteren.',
    adviceDefaultWithParams: 'Beweeg de slider om uw pensioentijdlijn te projecteren.',
    adviceDelay:
      'Als u uw pensioen uitstelt tot de leeftijd van <strong>[AGE]</strong>, zou u ongeveer <strong>€ [GAIN] extra</strong> per maand verdienen.',
    adviceBonus: 'U bouwt een uitstelsubsidie op. Uw pensioen zal meer dan 100% van de basis bedragen.',
    adviceOptimal: 'U heeft de optimale standaardleeftijd bereikt met 100% van uw rechten.',
  },
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Bronnen',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Vroegpensioen Simulator voor Spanje: Gids 2026',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Vervroegd pensioen</strong> is een van de grootste financiële zorgen voor werknemers in Spanje. Begrijpen wanneer u kunt stoppen met werken en vooral hoeveel geld u verliest via kortingscoëfficiënten, is essentieel voor een gezonde levensplanning.',
    },
    {
      type: 'list',
      items: [
        '<strong>Standaard wettelijke leeftijd:</strong> 67 jaar (of 65 jaar met voldoende bijdragen).',
        '<strong>Vrijwillig Vroegpensioen:</strong> Tot 2 jaar vóór de wettelijke grens.',
        '<strong>Onvrijwillig Vroegpensioen:</strong> Tot 4 jaar eerder (vanwege ontslag of andere oorzaken).',
        '<strong>Kortingscoëfficiënten:</strong> Permanente maandelijkse kortingen op het pensioen.',
        '<strong>Bijdragevereiste:</strong> Minimaal 35 jaar voor vrijwillig, 33 voor gedwongen pensioen.',
      ],
    },
    {
      type: 'title',
      text: 'Op welke leeftijd kan ik in Spanje wettelijk met pensioen gaan?',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>65-jarige route:</strong> Als u meer dan 38 jaar en 6 maanden heeft bijgedragen, kunt u op 65-jarige leeftijd met pensioen gaan met 100% van uw basis.',
        '<strong>67-jarige route:</strong> Als uw bijdragen onder die drempel liggen, is uw standaardleeftijd 67 jaar.',
        '<strong>Militaire dienst:</strong> Verplichte militaire dienst of sociale dienst kan tot 1 jaar aan bijdragen toevoegen.',
      ],
    },
    {
      type: 'title',
      text: 'Vrijwillig Vroegpensioen',
      level: 2,
    },
    {
      type: 'card',
      title: 'Vereisten voor Vrijwillig Vroegpensioen',
      html: '<ul><li>Een leeftijd hebben die twee jaar onder de standaard wettelijke leeftijd ligt.</li><li>Een minimale effectieve bijdrageperiode van 35 jaar hebben.</li><li>Het te ontvangen pensioen moet hoger zijn dan het minimumpensioen.</li></ul>',
    },
    {
      type: 'title',
      text: 'Kortingscoëfficiënten: De Kosten van Eerder met Pensioen gaan',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Minder dan 38,5 jaar bijgedragen:</strong> Maximale korting van 21% (2 jaar vervroeging).',
        '<strong>Tussen 38,5 en 41,5 jaar:</strong> Maximale korting van ongeveer 19%.',
        '<strong>Tussen 41,5 en 44,5 jaar:</strong> Maximale korting van ongeveer 17%.',
        '<strong>Meer dan 44,5 jaar:</strong> Maximale korting van ongeveer 15%.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Gouden tip:</strong> Het uitstellen van uw vroegpensioen met slechts één maand kan een aanzienlijk verschil maken voor de kortingscoëfficiënt. Bereken altijd het voordeel van een paar dagen langer wachten als u in de buurt van een maandelijkse schijfgrens zit.',
    },
    {
      type: 'title',
      text: 'Onvrijwillig of Gedwongen Vroegpensioen',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Maximale vervroeging:</strong> 4 jaar (48 maanden) vóór de standaardleeftijd.',
        '<strong>Vereiste bijdragen:</strong> 33 jaar.',
        '<strong>Voorwaarde:</strong> Moet ten minste 6 maanden van tevoren geregistreerd staan als werkzoekende.',
        '<strong>Coëfficiënten:</strong> Gunstiger dan vrijwillig, maar de impact van 4 jaar is nog steeds groot.',
      ],
    },
    {
      type: 'card',
      title: 'Praktijkvoorbeeld',
      html: '<p>Een werknemer met een basis van € 2.000 die vrijwillig 2 jaar eerder met pensioen gaat met 36 jaar aan bijdragen. Zijn korting zal ongeveer 21% zijn, waardoor zijn pensioen de rest van zijn leven rond de <strong>€ 1.580 per maand</strong> zal liggen.</p>',
    },
  ],
};
