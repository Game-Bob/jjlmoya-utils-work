import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NieNifVerifierUI } from '../ui';

const slug = 'nie-nif-verifier-spanje';
const title = 'NIE/NIF/CIF Verifier Spanje: Spaanse Tax ID Validator';
const description =
  'Gratis tool om de geldigheid van NIF (Spaanse DNI), NIE (buitenlanders) en CIF (bedrijven) in Spanje te controleren. Controleert het controlegetal en het officiële formaat.';

const faqData = [
  {
    question: 'Is het veilig om mijn NIF of NIE in deze tool in te vullen?',
    answer:
      'Ja, het is volkomen veilig. De validatie wordt volledig in uw browser uitgevoerd met behulp van JavaScript. Uw gegevens worden nooit naar een server verzonden of in een database opgeslagen.',
  },
  {
    question: 'Wat is het verschil tussen NIF en CIF?',
    answer:
      'NIF (Número de Identificación Fiscal) is de huidige term voor alle belasting-ID\'s. De term CIF (Código de Identificación Fiscal) wordt echter nog steeds veel gebruikt om te verwijzen naar het NIF van rechtspersonen (bedrijven en organisaties).',
  },
  {
    question: 'Hoe kom ik erachter of een NIF geldig is als ik de letter niet heb?',
    answer:
      'Voer de 8 cijfers in onze verifier in en controleer of de letter overeenkomt. Het algoritme berekent de exacte letter door het getal door 23 te delen.',
  },
  {
    question: 'Werkt deze tool voor NIE-nummers die beginnen met Y of Z?',
    answer:
      'Ja, onze verifier ondersteunt alle NIE-formaten: de oudere die beginnen met X en de nieuwere die beginnen met Y of Z, door de officiële numerieke conversie toe te passen.',
  },
  {
    question: 'Controleert het of het nummer daadwerkelijk bestaat bij de belastingdienst?',
    answer:
      'Nee. Deze tool voert een algoritmische en wiskundige validatie uit. Het bevestigt dat het nummer een legale structuur en een correct controlegetal heeft, maar raadpleegt niet het werkelijke census van de Agencia Tributaria.',
  },
];

const howToData = [
  {
    name: 'Zoek de identificatiecode',
    text: 'Zoek de alfanumerieke code op het document (DNI, verblijfskaart of fiscaal identificatiebewijs).',
  },
  {
    name: 'Voer de code in',
    text: 'Typ het NIF, NIE of CIF in het tekstveld. Maak u geen zorgen over spaties of strepjes.',
  },
  {
    name: 'Controleer het resultaat',
    text: 'De tool analyseert direct of de structuur geldig is en of het controleteken overeenkomt.',
  },
  {
    name: 'Kopieer het resultaat',
    text: 'Als de code geldig is, kunt u deze direct kopiëren om in uw factuur, contract of administratief formulier te plakken.',
  },
];

const bibliography = [
  {
    name: 'Agencia Tributaria: NIF voor natuurlijke personen en rechtspersonen',
    url: 'https://sede.agenciatributaria.gob.es/Sede/procedimiento-recaudatorio-gestor/nif.html',
  },
  {
    name: 'Ministerie van Binnenlandse Zaken: Structuur van DNI en NIE',
    url: 'https://www.dnielectronico.es/PortalDNIe/PRF1_9._2.html?punto=5.2',
  },
  {
    name: 'BOE: Algemene Belastingbeheersregels',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2007-14406',
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

export const content: ToolLocaleContent<NieNifVerifierUI> = {
  slug,
  title,
  description,
  ui: {
    labelInput: 'Voer Spaanse belastingcode in',
    placeholder: '45938210Y',
    typeNIF: 'NIF / DNI',
    typeNIE: 'NIE',
    typeCIF: 'CIF',
    msgValidSuffix: 'Geldig',
    msgInvalidControl: 'Onjuist controlegetal',
    msgInvalidNIEControl: 'Fout in controleteken',
    msgInvalidCIF: 'Onjuiste combinatie',
    msgIncomplete: 'Incompleet',
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
      text: 'Het belang van het verifiëren van NIF, NIE en CIF in Spanje',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In het Spaanse administratieve en zakelijke ecosysteem is de fiscale identificatie de hoeksteen van alle transacties, contracten en publieke contacten. Of u nu een freelancer bent die facturen verstuurt, een bedrijf dat leveranciers beheert, of een individu dat een aankoop doet, een betrouwbare <strong>NIF, NIE en CIF verifier</strong> is een onmisbaar hulpmiddel om administratieve fouten en mogelijke fraude te voorkomen.',
    },
    {
      type: 'title',
      text: 'Wat zijn NIF, NIE en CIF? Belangrijkste verschillen',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>NIF (Número de Identificación Fiscal):</strong> De generieke term voor fiscale identificatie in Spanje. Voor Spaanse staatsburgers komt het NIF overeen met het DNI-nummer gevolgd door een controleletter (8 cijfers + 1 letter).',
        '<strong>NIE (Número de Identidad de Extranjero):</strong> De identificatiecode voor niet-Spaanse individuen met fiscale activiteiten in Spanje. Begint met X, Y of Z, gevolgd door 7 cijfers en een controleletter.',
        '<strong>CIF (Código de Identificación Fiscal):</strong> De populaire naam voor het NIF van rechtspersonen (bedrijven, verenigingen). Een letter die het types organisatie aangeeft + 7 cijfers + controlegetal of -letter.',
      ],
    },
    {
      type: 'title',
      text: 'Hoe het validatie-algoritme werkt',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Voor NIF/DNI wordt de eindletter verkregen door het numerieke deel te delen door 23 (modulo 23) en de rest aan de reeks <strong>TRWAGMYFPDXBNJZSQVHLCKE</strong> te koppelen. Voor CIF worden de paren en verdubbelde cijfers op oneven posities bij elkaar opgeteld om het controleteken te verifiëren. De hele berekening wordt in milliseconden in uw browser uitgevoerd.',
    },
    {
      type: 'title',
      text: 'Veelvoorkomende toepassingen van de NIE/NIF Verifier',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Boekhouding- en belastingadviseurs:</strong> Verifieer codes voordat u klanten of leveranciers registreert in belastingmodellen.',
        '<strong>E-commerce:</strong> Valideer het NIF bij de kassa om de juiste facturen uit te reiken.',
        '<strong>HR-afdelingen:</strong> Bevestig het NIE van buitenlandse werknemers voordat u ze aanmeldt bij de sociale verzekeringen.',
      ],
    },
    {
      type: 'title',
      text: 'Tips voor een correcte verificatie',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Mocht de verifier een fout melden, controleer dan of u een 0 (nul) met een O (letter) heeft verward — een veelvoorkomende fout in NIE-nummers.',
        'Voeg bij CIF altijd de beginletter toe die het type entiteit identificeert (A = S.A., B = S.L., etc.).',
        'Deze tool controleert de wiskundige geldigheid, niet of het nummer momenteel actief is in de databases van de belastingdienst.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Privacy gegarandeerd:</strong> De validatie vindt volledig plaats in uw browser. De nummers die u invoert, worden nooit naar een server verzonden.',
    },
  ],
};
