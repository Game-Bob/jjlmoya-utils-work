import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReverseVatCalculatorUI } from '../ui';

const slug = 'reverse-vat-calculator-spain';
const title = 'Reverse VAT Calculator: Deduct VAT Spain';
const description =
  'Online reverse VAT calculator. Break down VAT from any total amount to get the taxable base. Essential tool for freelancers and invoicing in Spain.';

const faqData = [
  {
    question: 'What is reverse VAT or breaking down VAT?',
    answer:
      'It is the process of calculating the taxable base from a total price that already includes tax. It is essential for freelancers who need to issue invoices from an agreed final price.',
  },
  {
    question: 'How is reverse VAT calculated manually?',
    answer:
      'For a 21% VAT rate, divide the total amount by 1.21. The result is the taxable base. The difference between the total and the base is the VAT amount.',
  },
  {
    question: 'What types of VAT exist in Spain?',
    answer:
      'There are three types: General (21%), Reduced (10% for food, health, housing) and Super-reduced (4% for books, newspapers, bread, milk).',
  },
  {
    question: 'When is it mandatory to break down VAT?',
    answer:
      'Whenever you issue a professional or simplified invoice. You must separately indicate the taxable base, the applicable tax rate and the total VAT amount.',
  },
];

const howToData = [
  {
    name: 'Enter the total amount',
    text: 'Type the final amount including VAT that you want to break down.',
  },
  {
    name: 'Select the VAT type',
    text: 'Choose between 21%, 10% or 4% depending on the category of your product or service.',
  },
  {
    name: 'Get the taxable base',
    text: 'Review the automatic calculation showing how much money is actually yours before taxes.',
  },
  {
    name: 'Copy billing data',
    text: 'Use the calculated values to fill in the base and VAT fields in your invoicing software.',
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
  inLanguage: 'en',
};

export const content: ToolLocaleContent<ReverseVatCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelTotal: 'Total Amount (VAT Included)',
    labelVatType: 'VAT Type',
    btn21: '21 %',
    btn10: '10 %',
    btn4: '4 %',
    btn0: '0 %',
    labelBase: 'Taxable Base',
    labelVat: 'VAT',
  },
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Sources',
  bibliography: [],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'The Problem of Breaking Down Reverse VAT',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'For many freelancers and SMEs, calculating the taxable base from a total price remains a headache. The most common mistake is thinking that to remove 21% VAT, you simply subtract 21% from the total. <strong>This is wrong!</strong> Doing so will cost you money every quarter.',
    },
    {
      type: 'title',
      text: 'The Math Explained',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'VAT is applied <strong>on top of</strong> the base. Therefore, the final price is 121% of the base (if VAT is 21%). To go back, we do not subtract; we <strong>divide</strong>. By dividing by <code>1.21</code>, we are asking: "What number, multiplied by 1.21, gives me 100?". This is the only way to get the exact breakdown for your quarterly VAT return.',
    },
    {
      type: 'card',
      title: 'Common Error vs. The Real Formula',
      html: '<p><strong>Common error:</strong> <code>€100 - 21% = €79</code> (If you then add 21% to €79, you get €95.59, not €100!)</p><p><strong>Correct:</strong> <code>Base = Total / (1 + Rate)</code> → <code>100 / 1.21 = €82.64</code></p>',
    },
    {
      type: 'code',
      code: 'Taxable Base = Total Amount / (1 + VAT Rate)\nVAT Amount = Total Amount - Taxable Base',
    },
    {
      type: 'title',
      text: 'VAT Types in Spain',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'It is vital to know which rate applies to each product to avoid tax fraud or overpayment.',
    },
    {
      type: 'list',
      items: [
        '<strong>21% General:</strong> Clothing and footwear, electronics and technology, electricity and gas, professional services.',
        '<strong>10% Reduced:</strong> Processed food, drinking water, hospitality and restaurants, passenger transport, prescription glasses.',
        '<strong>4% Super-reduced:</strong> Common bread and flours, milk, cheese and eggs, fruits and vegetables, books and newspapers, medicines.',
        '<strong>0% (temporary measures):</strong> Some oils and pasta have had temporary reductions to 0% or 5% under anti-inflation measures.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Tip for your quarterly VAT return:</strong> Make sure to save each calculation. The taxable base and VAT amount you get here are exactly the fields you need to fill in your quarterly VAT declaration.',
    },
  ],
};
