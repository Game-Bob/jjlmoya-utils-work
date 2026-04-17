import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResignationLetterGeneratorUI } from '../ui';

const slug = 'ontslagbrief-generator';
const title = 'Professionele Ontslagbrief Generator';
const description =
  'Maak in enkele seconden uw persoonlijke ontslagbrief. Professionele sjablonen die klaar zijn om te kopiëren of direct als PDF te downloaden.';

const faqData = [
  {
    question: 'Hoeveel dagen opzegtermijn moet ik aanhouden?',
    answer:
      'In Nederland is de wettelijke opzegtermijn voor werknemers standaard één kalendermaand. Dit kan echter anders zijn als er in uw arbeidsovereenkomst of cao een afwijkende termijn is afgesproken. Bij een tijdelijk contract zonder tussentijds opzegbeding kunt u in principe niet zomaar opzeggen.',
  },
  {
    question: 'Heb ik recht op een transitievergoeding als ik zelf ontslag neem?',
    answer:
      'Nee, in principe niet. Een transitievergoeding is bedoeld voor ontslag op initiatief van de werkgever. Alleen als u ontslag neemt vanwege ernstig verwijtbaar handelen van de werkgever, kunt u er recht op hebben.',
  },
  {
    question: 'Krijg ik een WW-uitkering als ik vrijwillig ontslag neem?',
    answer:
      'Als u zelf ontslag neemt zonder dringende reden, bent u "verwijtbaar werkloos" en heeft u meestal geen recht op een WW-uitkering. Het is raadzaam om eerst een nieuwe baan te hebben.',
  },
  {
    question: 'Wat gebeurt er als ik de opzegtermijn niet respecteer?',
    answer:
      'Als u zich niet aan de opzegtermijn houdt, kan de werkgever een schadevergoeding eisen die gelijk is aan het loon over de periode dat u te vroeg bent vertrokken.',
  },
  {
    question: 'Kan ik mijn ontslagbrief intrekken?',
    answer:
      'Een ontslagname is een eenzijdige rechtshandeling. Zodra de werkgever deze heeft ontvangen, kunt u deze alleen intrekken als de werkgever hiermee akkoord gaat.',
  },
];

const howToData = [
  {
    name: 'Vul uw persoonlijke gegevens in',
    text: 'Voer uw volledige naam, de naam van uw manager of HR-contactpersoon en de bedrijfsnaam in.',
  },
  {
    name: 'Stel uw laatste werkdag in',
    text: 'Selecteer uw vertrekdatum en houd daarbij rekening met de opzegtermijn in uw contract.',
  },
  {
    name: 'Kies het type reden',
    text: 'Kies de aanpak die het beste bij uw situatie past om de tekst van de brief te personaliseren.',
  },
  {
    name: 'Kopieer of download de brief',
    text: 'Klik op de knop om de tekst naar uw klembord te kopiëren of direct als PDF te downloaden.',
  },
];

const bibliography = [
  {
    name: 'Rijksoverheid - Ontslag nemen',
    url: 'https://www.rijksoverheid.nl',
  },
  {
    name: 'Juridisch Loket - Opzegtermijn',
    url: 'https://www.juridischloket.nl',
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

export const content: ToolLocaleContent<ResignationLetterGeneratorUI> = {
  slug,
  title,
  description,
  ui: {
    labelUserName: 'Uw volledige naam',
    labelManagerName: 'Naam manager of HR',
    labelManagerGender: 'Aanhef',
    labelCompanyName: 'Bedrijfsnaam',
    labelLastDay: 'Uw laatste werkdag (datum uit dienst)',
    labelReasonType: 'Type reden',
    labelCity: 'Plaats',
    optGenderNeutral: 'Geachte (Neutraal)',
    optGenderM: 'Geachte heer (Mannelijk)',
    optGenderF: 'Geachte mevrouw (Vrouwelijk)',
    optReasonStandard: 'Standaard (Professioneel)',
    optReasonOpportunity: 'Nieuwe professionele uitdaging',
    optReasonPersonal: 'Persoonlijke redenen',
    optReasonEducation: 'Studie / Academische groei',
    optReasonGrowth: 'Gebrek aan doorgroeimogelijkheden',
    optReasonDirect: 'Direct en kort (Geen toelichting)',
    btnCopy: 'Brief kopiëren',
    btnDownload: 'Download PDF',
    copyFeedback: 'Gekopieerd naar klembord',
    defaultUserName: 'Jan de Vries',
    defaultManagerName: 'Pieter Post',
    defaultCompanyName: 'Voorbeeld BV',
    defaultCity: 'Amsterdam',
    dateLocale: 'nl-NL',
    datePrefix: '',
    managerPrefix: 'T.a.v.',
    managerFallback: 'Afdeling Personeelszaken',
    companyFallback: 'Bedrijfsnaam',
    salutationNeutral: 'Geachte',
    salutationM: 'Geachte heer',
    salutationF: 'Geachte mevrouw',
    salutationFallback: 'Manager',
    signatureFallback: 'Handtekening medewerker',
    thanksParagraph:
      'Ik wil mijn oprechte dank uitspreken voor de professionele en persoonlijke groeimogelijkheden die ik heb gekregen tijdens mijn tijd bij de organisatie.',
    transitionParagraph:
      'Ik zet mij volledig in voor een soepele overdracht van mijn werkzaamheden en ben beschikbaar om mijn verantwoordelijkheden zo effectief mogelijk over te dragen.',
    closingWord: 'Met vriendelijke groet,',
    reasonStandard:
      'Hiermee zeg ik formeel mijn arbeidsovereenkomst op. Mijn laatste werkdag zal [DATE] zijn, met inachtneming van de contractuele opzegtermijn.',
    reasonOpportunity:
      'Langs deze weg informeer ik u over mijn besluit om ontslag te nemen, aangezien ik een nieuwe uitdaging heb geaccepteerd. Mijn laatste werkdag zal [DATE] zijn.',
    reasonPersonal:
      'Vanwege persoonlijke omstandigheden die mijn volledige aandacht vereisen, ben ik genoodzaakt mijn ontslag in te dienen. Mijn dienstverband eindigt op [DATE].',
    reasonEducation:
      'Ik heb besloten om een fulltime studie te gaan volgen en dien daarom mijn ontslag in. Mijn laatste werkdag is [DATE].',
    reasonGrowth:
      'Na zorgvuldige overweging heb ik besloten mijn carrière voort te zetten in een omgeving waar ik mij op andere vlakken kan ontwikkelen. Ik neem ontslag per [DATE].',
    reasonDirect:
      'Hierbij informeer ik u over mijn besluit om mijn dienstverband te beëindigen. Mijn laatste werkdag is [DATE].',
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
      text: 'Hoe schrijf je een professionele ontslagbrief',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Het beëindigen van een dienstverband is een grote stap. Een <strong>ontslagbrief</strong> is niet alleen een formaliteit, maar ook het laatste wat u achterlaat bij een organisatie.',
    },
    {
      type: 'tip',
      html: '<strong>Tip:</strong> Lever uw ontslagbrief <strong>altijd schriftelijk</strong> in. Dit bevestigt de start van de opzegtermijn en beschermt beide partijen.',
    },
    {
      type: 'code',
      code: '[Plaats, Datum]\n\nT.a.v. [Naam Manager]\n[Bedrijfsnaam]\n\nGeachte [Naam],\n\nHierbij zeg ik mijn contract op. Mijn laatste werkdag is [Datum].\n\nMet vriendelijke groet,\n[Handtekening]',
    },
  ],
};
