import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NieNifVerifierUI } from '../ui';

const slug = 'nie-nif-verifierare-spanien';
const title = 'NIE/NIF/CIF Verifierare Spanien: Validering av spansk skatteidentitet';
const description =
  'Gratis verktyg för att verifiera giltigheten av NIF (spanskt DNI), NIE (utlänningar) och CIF (företag) i Spanien. Kontrollerar kontrollsiffra och officiellt format.';

const faqData = [
  {
    question: 'Är det säkert att ange mitt NIF eller NIE i det här verktyget?',
    answer:
      'Ja, det är helt säkert. Valideringen utförs helt i din webbläsare med JavaScript. Dina uppgifter skickas aldrig till någon server och lagras inte i någon databas.',
  },
  {
    question: 'Vad är skillnaden mellan NIF och CIF?',
    answer:
      'NIF (Número de Identificación Fiscal) är den nuvarande termen för alla skatte-ID:n. CIF (Código de Identificación Fiscal) används dock fortfarande ofta för att hänvisa till NIF för juridiska personer (företag och organisationer).',
  },
  {
    question: 'Hur kan jag ta reda på om ett NIF är giltigt om jag saknar bokstaven?',
    answer:
      'Ange de 8 siffrorna i vår verifierare och kontrollera om bokstaven stämmer. Algoritmen beräknar den exakta bokstaven genom att dela numret med 23.',
  },
  {
    question: 'Fungerar det här verktyget för NIE-nummer som börjar med Y eller Z?',
    answer:
      'Ja, vår verifierare stöder alla NIE-format: de äldre som börjar med X och de nyare som börjar med Y eller Z, genom att tillämpa den officiella numeriska konverteringen.',
  },
  {
    question: 'Validerar verktyget om numret faktiskt existerar hos skattemyndigheten?',
    answer:
      'Nej. Detta verktyg utför en algoritmisk och matematisk validering. Det bekräftar att numret har en laglig struktur och korrekt kontrollsiffra, men gör ingen sökning i Agencia Tributarias register.',
  },
];

const howToData = [
  {
    name: 'Hitta identifieraren',
    text: 'Leta efter den alfanumeriska koden på dokumentet (DNI, uppehållstillstånd eller skatteidentitetskort).',
  },
  {
    name: 'Ange koden',
    text: 'Skriv in NIF, NIE eller CIF i textfältet. Bry dig inte om mellanslag eller bindestreck.',
  },
  {
    name: 'Kontrollera resultatet',
    text: 'Verktyget analyserar omedelbart om strukturen är giltig och om kontrolltecknet stämmer.',
  },
  {
    name: 'Kopiera resultatet',
    text: 'Om koden är giltig kan du kopiera den direkt för att klistra in i din faktura, ditt kontrakt eller ditt formulär.',
  },
];

const bibliography = [
  {
    name: 'Agencia Tributaria: NIF för fysiska och juridiska personer',
    url: 'https://sede.agenciatributaria.gob.es/Sede/procedimiento-recaudatorio-gestor/nif.html',
  },
  {
    name: 'Inrikesministeriet: Struktur för DNI och NIE',
    url: 'https://www.dnielectronico.es/PortalDNIe/PRF1_9._2.html?punto=5.2',
  },
  {
    name: 'BOE: Allmänna skatteförvaltningsförordningen',
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
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<NieNifVerifierUI> = {
  slug,
  title,
  description,
  ui: {
    labelInput: 'Ange spansk skatteidentifierare',
    placeholder: '45938210Y',
    typeNIF: 'NIF / DNI',
    typeNIE: 'NIE',
    typeCIF: 'CIF',
    msgValidSuffix: 'Giltig',
    msgInvalidControl: 'Felaktig kontrollsiffra',
    msgInvalidNIEControl: 'Fel på kontrolltecken',
    msgInvalidCIF: 'Felaktig kombination',
    msgIncomplete: 'Ofullständig',
  },
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Källor',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Vikten av att verifiera NIF, NIE och CIF i Spanien',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'I Spaniens administrativa och affärsmässiga ekosystem är skatteidentifiering hörnstenen i alla transaktioner och avtal. Oavsett om du är frilansare som ställer ut fakturor eller ett företag som hanterar leverantörer, är en pålitlig <strong>NIF-, NIE- och CIF-verifierare</strong> ett oumbärligt verktyg.',
    },
    {
      type: 'title',
      text: 'Vad är NIF, NIE och CIF? Huvudsakliga skillnader',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>NIF (Número de Identificación Fiscal):</strong> Den generella termen för skatteidentifiering i Spanien. För spanska medborgare stämmer NIF överens med DNI-numret (8 siffror + bokstav).',
        '<strong>NIE (Número de Identidad de Extranjero):</strong> Identifieringskod för utlänningar. Börjar med X, Y eller Z följt av 7 siffror och en bokstav.',
        '<strong>CIF (Código de Identificación Fiscal):</strong> Det populära namnet för NIF för juridiska personer.',
      ],
    },
    {
      type: 'title',
      text: 'Tips för korrekt verifiering',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Om verifieraren rapporterar fel, kontrollera om du förväxlat en 0 (noll) med ett O (bokstav) — ett mycket vanligt misstag i NIE-nummer.',
        'För CIF, inkludera alltid den inledande bokstaven som identifierar typen av enhet (A = S.A., B = S.L., etc.).',
        'Detta verktyg kontrollerar matematisk giltighet, inte om numret är aktivt hos AEAT.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Sekretess garanterad:</strong> Valideringen sker helt i din webbläsare. Numren du anger skickas aldrig till någon server.',
    },
  ],
};
