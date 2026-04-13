import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResignationLetterGeneratorUI } from '../ui';

const slug = 'resignation-letter-generator';
const title = 'Professional Resignation Letter Generator';
const description =
  'Create your personalized resignation letter in seconds. Professional templates ready to copy or download as PDF instantly.';

const faqData = [
  {
    question: 'How many days of notice do I have to give?',
    answer:
      'In Spain, the standard notice period is usually 15 calendar days, although you should check your employment contract and the collective agreement for your sector. Some agreements or senior management contracts may require between 3 and 6 months.',
  },
  {
    question: 'Am I entitled to receive a settlement (finiquito) if I resign?',
    answer:
      'Yes. The finiquito is an inalienable right that includes payment for unused vacation days, the proportional share of bonus payments, and the salary for days worked in the month of departure.',
  },
  {
    question: 'Will I receive unemployment benefits if I resign voluntarily?',
    answer:
      'In Spain, a voluntary resignation does not immediately entitle you to unemployment benefits, as the law considers that the worker left the position of their own free will and not as a result of an involuntary unemployment situation.',
  },
  {
    question: 'What happens if I do not respect the notice period?',
    answer:
      'The company has the legal right to deduct from your settlement the proportional salary for each day of notice not served. It is extremely important to calculate your departure date correctly.',
  },
  {
    question: 'Can I withdraw my resignation letter once submitted?',
    answer:
      'In principle, it is possible to withdraw your resignation as long as it happens within the notice period and does not cause real harm to the company. Ideally, be 100% certain before submitting it.',
  },
  {
    question: 'Does the resignation letter have to be handwritten?',
    answer:
      'No, it does not need to be handwritten. A printed letter is perfectly valid legally. What truly matters is that the document is signed by hand (if delivered in paper) or with a certified digital signature.',
  },
];

const howToData = [
  {
    name: 'Fill in your personal details',
    text: 'Enter your full name, the name of your manager or HR contact, and the company name.',
  },
  {
    name: 'Set your last working day',
    text: 'Select your departure date, making sure to account for the notice period in your contract.',
  },
  {
    name: 'Choose the reason type',
    text: 'Pick the approach that best fits your situation to personalise the letter text.',
  },
  {
    name: 'Copy or download the letter',
    text: 'Click the button to copy the text to your clipboard or download it directly as a PDF.',
  },
];

const bibliography = [
  {
    name: 'Spanish Ministry of Labour - Labour Information',
    url: 'https://www.mites.gob.es/es',
  },
  {
    name: "Workers' Statute (BOE)",
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-11430',
  },
  {
    name: 'Guide to labour rights and obligations',
    url: 'https://www.mites.gob.es/es/sec_leyes/trabajo/index.htm',
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

export const content: ToolLocaleContent<ResignationLetterGeneratorUI> = {
  slug,
  title,
  description,
  ui: {
    labelUserName: 'Your full name',
    labelManagerName: 'Manager or HR contact name',
    labelManagerGender: 'Salutation',
    labelCompanyName: 'Company name',
    labelLastDay: 'Your last day (departure date)',
    labelReasonType: 'Reason approach',
    labelCity: 'City you are writing from',
    optGenderNeutral: 'Dear (Neutral)',
    optGenderM: 'Dear Mr. (Male)',
    optGenderF: 'Dear Ms. (Female)',
    optReasonStandard: 'Standard (Professional and cordial)',
    optReasonOpportunity: 'New professional opportunity',
    optReasonPersonal: 'Personal reasons',
    optReasonEducation: 'Academic growth / studies',
    optReasonGrowth: 'Lack of internal growth',
    optReasonDirect: 'Direct and brief (No explanation)',
    btnCopy: 'Copy Letter',
    btnDownload: 'Download PDF',
    copyFeedback: 'Copied to clipboard',
    defaultUserName: 'John Smith',
    defaultManagerName: 'Jane Doe',
    defaultCompanyName: 'Acme Corp Ltd',
    defaultCity: 'London',
    dateLocale: 'en-GB',
    datePrefix: '',
    managerPrefix: 'Attn:',
    managerFallback: 'To the HR Department',
    companyFallback: 'Company Name',
    salutationNeutral: 'Dear',
    salutationM: 'Dear Mr.',
    salutationF: 'Dear Ms.',
    salutationFallback: 'Manager',
    signatureFallback: 'Employee Signature',
    thanksParagraph:
      'I would like to express my sincere gratitude for the professional and personal growth opportunities I have been given during my time at the company.',
    transitionParagraph:
      'I am fully committed to supporting a smooth transition and am available to help hand over my responsibilities and pending tasks as effectively as possible.',
    closingWord: 'Sincerely,',
    reasonStandard:
      'I am writing to formally submit my irrevocable resignation from my current position. My last day of work will be [DATE], in accordance with the notice period stipulated in my contract.',
    reasonOpportunity:
      'I am writing to inform you of my decision to resign from my current role, having accepted a new professional opportunity that will allow me to take on new challenges. My effective departure date will be [DATE].',
    reasonPersonal:
      'Due to personal circumstances that require my full and immediate attention, I find it necessary to resign from my current position. My employment with the company will end on [DATE].',
    reasonEducation:
      'I have decided to pursue further advanced studies on a full-time basis, and I am therefore submitting my voluntary resignation. My last day of service will be [DATE].',
    reasonGrowth:
      'After careful reflection, I have decided to redirect my career in search of an environment that will allow me to develop skills in different areas. My effective departure will be on [DATE].',
    reasonDirect:
      'I am writing to inform you of my decision to end my employment with the company. My last working day will be [DATE].',
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
      text: 'How to write a professional and effective resignation letter',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Deciding to leave a job is a significant step in any professional career. <strong>Submitting a resignation letter</strong> is not simply an administrative formality; it is the last impression you leave on an organisation and a document with legal implications that must be handled with precision and professionalism.',
    },
    {
      type: 'tip',
      html: '<strong>Professional tip:</strong> Even if you have a close relationship with your manager, your resignation <strong>should always be submitted in writing</strong>. Written documents mark the official start of the notice period and protect both parties.',
    },
    {
      type: 'title',
      text: 'Essential elements of a resignation letter',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Contact details:</strong> Your full name and the details of the recipient.',
        '<strong>Date of issue:</strong> The exact day you are submitting the document.',
        '<strong>Resignation statement:</strong> A clear and unambiguous phrase stating your intention to leave.',
        '<strong>Last working day:</strong> The precise date you will cease activity, correctly accounting for the notice period.',
        '<strong>Acknowledgements:</strong> A brief paragraph appreciating the opportunity and experience gained.',
        '<strong>Signature:</strong> Your handwritten or digital signature.',
      ],
    },
    {
      type: 'title',
      text: 'Notice periods and their consequences',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>General employment contract:</strong> 15 calendar days — proportional deduction from settlement if not respected.',
        '<strong>Senior management:</strong> 3 to 6 months — potential compensation for damages.',
        '<strong>Probationary period:</strong> 0 days (unless agreed otherwise) — immediate termination with no penalty.',
      ],
    },
    {
      type: 'title',
      text: 'Types of resignation letters',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>New opportunity resignation:</strong> Focused on professional growth. Ideal for maintaining good relations.',
        '<strong>Personal reasons resignation:</strong> Does not go into detail, simply states the need for time on private matters.',
        '<strong>Direct resignation:</strong> Neutral, minimalist and purely formal. Used when there is no interest in giving explanations.',
      ],
    },
    {
      type: 'title',
      text: 'Recommended structure',
      level: 3,
    },
    {
      type: 'code',
      code: '[City, Date]\n\nAttn: [Manager Name]\n[Company Name]\n\nDear [Name],\n\nI am writing to formally resign from my position. My last working day will be [Date], in compliance with the required notice period.\n\nI sincerely thank you for the trust placed in me during this time.\n\nSincerely,\n[Your Signature]',
    },
    {
      type: 'title',
      text: 'Common mistakes to avoid',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Not including an exact departure date:</strong> Saying "I am leaving in two weeks" is not the same as stating a specific calendar date.',
        '<strong>Using the letter to complain:</strong> A resignation letter is not the place to air grievances. Save those for the exit interview.',
        '<strong>Forgetting to request the final settlement:</strong> It is advisable to include a line requesting that the settlement document be prepared for your last day.',
        '<strong>Not keeping a copy:</strong> Always deliver two copies and ask for one to be stamped or signed as received with the date.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Privacy guaranteed:</strong> All processing is done locally in your browser. Your personal and professional details never leave your device.',
    },
  ],
};
