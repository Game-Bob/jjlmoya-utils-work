import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NieNifVerifierUI } from '../ui';

const slug = 'nie-nif-verifier-spain';
const title = 'NIE/NIF/CIF Verifier Spain: Spanish Tax ID Validator';
const description =
  'Free tool to verify the validity of NIF (Spanish DNI), NIE (foreigners) and CIF (companies) in Spain. Checks the control digit and official format.';

const faqData = [
  {
    question: 'Is it safe to enter my NIF or NIE in this tool?',
    answer:
      'Yes, it is completely safe. Validation is performed entirely in your browser using JavaScript. Your data is never sent to any server or stored in any database.',
  },
  {
    question: "What is the difference between NIF and CIF?",
    answer:
      "NIF (Número de Identificación Fiscal) is the current term for all tax IDs. However, CIF (Código de Identificación Fiscal) is still commonly used to refer to the NIF of legal entities (companies and organisations).",
  },
  {
    question: "How can I find out if a NIF is valid if I don't have the letter?",
    answer:
      "Enter the 8 digits in our verifier and check whether the letter matches. The algorithm calculates the exact letter by dividing the number by 23.",
  },
  {
    question: 'Does this tool work for NIE numbers starting with Y or Z?',
    answer:
      'Yes, our verifier supports all NIE formats: the older ones starting with X and the newer ones beginning with Y or Z, applying the official numeric conversion.',
  },
  {
    question: 'Does it validate whether the number actually exists in the tax authority?',
    answer:
      'No. This tool performs algorithmic and mathematical validation. It confirms the number has a legal structure and correct control digit, but does not query the real census of the Agencia Tributaria.',
  },
];

const howToData = [
  {
    name: 'Find the identifier',
    text: 'Look for the alphanumeric code on the document (DNI, Residence Card or Tax Identification Card).',
  },
  {
    name: 'Enter the code',
    text: 'Type the NIF, NIE or CIF in the text field. Do not worry about spaces or hyphens.',
  },
  {
    name: 'Check the result',
    text: 'The tool will instantly analyse whether the structure is valid and whether the control character matches.',
  },
  {
    name: 'Copy the result',
    text: 'If the code is valid, you can copy it directly to paste into your invoice, contract or administrative form.',
  },
];

const bibliography = [
  {
    name: 'Agencia Tributaria: NIF for individuals and legal entities',
    url: 'https://sede.agenciatributaria.gob.es/Sede/procedimiento-recaudatorio-gestor/nif.html',
  },
  {
    name: 'Ministry of the Interior: Structure of DNI and NIE',
    url: 'https://www.dnielectronico.es/PortalDNIe/PRF1_9._2.html?punto=5.2',
  },
  {
    name: 'BOE: General Tax Management Regulations',
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
  inLanguage: 'en',
};

export const content: ToolLocaleContent<NieNifVerifierUI> = {
  slug,
  title,
  description,
  ui: {
    labelInput: 'Enter Spanish tax identifier',
    placeholder: '45938210Y',
    typeNIF: 'NIF / DNI',
    typeNIE: 'NIE',
    typeCIF: 'CIF',
    msgValidSuffix: 'Valid',
    msgInvalidControl: 'Incorrect control digit',
    msgInvalidNIEControl: 'Control character error',
    msgInvalidCIF: 'Incorrect combination',
    msgIncomplete: 'Incomplete',
  },
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Sources',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'The Importance of Verifying NIF, NIE and CIF in Spain',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In the administrative and business ecosystem of Spain, tax identification is the cornerstone of all transactions, contracts and public dealings. Whether you are a freelancer issuing invoices, a company managing suppliers, or an individual making a purchase, a reliable <strong>NIF, NIE and CIF verifier</strong> is an indispensable tool to avoid administrative errors and potential fraud.',
    },
    {
      type: 'title',
      text: 'What are NIF, NIE and CIF? Key Differences',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>NIF (Número de Identificación Fiscal):</strong> The generic term for tax identification in Spain. For Spanish nationals, the NIF matches the DNI number followed by a control letter (8 digits + 1 letter).',
        '<strong>NIE (Número de Identidad de Extranjero):</strong> The identification code for non-Spanish individuals with tax activity in Spain. Starts with X, Y or Z, followed by 7 digits and a control letter.',
        '<strong>CIF (Código de Identificación Fiscal):</strong> The popular name for the NIF of legal entities (companies, associations). One letter indicating organisation type + 7 digits + control digit or letter.',
      ],
    },
    {
      type: 'title',
      text: 'How the Validation Algorithm Works',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'For NIF/DNI, the final letter is obtained by dividing the numeric part by 23 (modulo 23) and mapping the remainder to the sequence <strong>TRWAGMYFPDXBNJZSQVHLCKE</strong>. For CIF, pairs and doubled odd-position digits are summed to verify the control character. The entire calculation runs in your browser in milliseconds.',
    },
    {
      type: 'title',
      text: 'Common Uses of the NIE/NIF Verifier',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Accounting and Tax Agencies:</strong> Verify identifiers before registering clients or suppliers in tax models (303, 347...).',
        '<strong>E-commerce:</strong> Validate the NIF at checkout to issue correct invoices and avoid dirty data.',
        '<strong>HR Departments:</strong> Confirm the NIE of foreign employees before registering them with Social Security.',
      ],
    },
    {
      type: 'title',
      text: 'Tips for Correct Verification',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'If the verifier reports an error, check if you confused a 0 (zero) with an O (letter) — a very common mistake in NIE numbers.',
        'For CIF, always include the initial letter that identifies the entity type (A = S.A., B = S.L., etc.).',
        'This tool checks mathematical validity, not whether the number is currently active in the AEAT census.',
        'Use the standard format without spaces or hyphens for best results.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Privacy guaranteed:</strong> Validation runs entirely in your browser. The numbers you enter are never sent to any server or stored in any database.',
    },
  ],
};
