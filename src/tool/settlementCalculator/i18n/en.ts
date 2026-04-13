import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SettlementCalculatorUI } from '../ui';

const slug = 'severance-pay-calculator-spain';
const title = 'Spain Severance Pay Calculator 2026';
const description =
  'Calculate your gross settlement step by step: unused vacation days, bonus pay, and severance compensation based on Spanish labor law.';

const faqData = [
  {
    question: 'Am I entitled to a settlement if I resign voluntarily?',
    answer:
      'Yes, absolutely. The settlement (finiquito) includes amounts already accrued, such as days worked in the current month, unused vacation days, and the proportional part of bonus payments. You will not be entitled to severance pay or unemployment benefits.',
  },
  {
    question: 'What severance pay am I owed for unfair dismissal?',
    answer:
      'For contracts signed after February 12, 2012, the entitlement is 33 days of salary per year worked, up to a maximum of 24 monthly salaries. For periods prior to that date, the calculation is 45 days per year.',
  },
  {
    question: 'Can my employer deduct money from my settlement for not giving notice?',
    answer:
      'Yes. If your contract requires a notice period (usually 15 days) and you do not comply, the company has the right to deduct from your settlement the salary corresponding to the missed notice days.',
  },
  {
    question: 'What happens with vacation pay and social security contributions in the settlement?',
    answer:
      'When you receive payment for unused vacation, the company must continue contributing to Social Security on your behalf for those days. During that period you cannot start claiming unemployment benefits or register with another employer.',
  },
  {
    question: 'Does severance pay for dismissal attract income tax?',
    answer:
      'Mandatory severance pay for dismissal is exempt from income tax (IRPF) up to a limit of €180,000, provided the dismissal is objective or declared unfair. The settlement (finiquito) component is taxed normally.',
  },
];

const howToData = [
  {
    name: 'Enter your gross salary',
    text: 'Type your annual gross salary (before taxes) and select the number of payment instalments.',
  },
  {
    name: 'Set the exact dates',
    text: 'Enter the exact date you started at the company and your last planned working day.',
  },
  {
    name: 'Add unused vacation',
    text: 'Specify how many vacation days you still have left to take in the current year.',
  },
  {
    name: 'Choose the reason for leaving',
    text: 'Select the reason for leaving so the simulator applies the correct severance ratio.',
  },
];

const bibliography = [
  {
    name: "Workers' Statute (BOE): Contract termination",
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-11430',
  },
  {
    name: 'Spain Labour Guide: Severance Pay (Finiquito)',
    url: 'https://espanalaboral.es/guias-y-recursos/trabajadores/finiquito/',
  },
  {
    name: 'Spanish Judiciary: Calculation of termination indemnities',
    url: 'https://www.poderjudicial.es/cgpj/es/Servicios/Utilidades/Calculo-de-indemnizaciones-por-extincion-de-contrato-de-trabajo/',
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

export const content: ToolLocaleContent<SettlementCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelSalary: 'Annual Gross Salary',
    labelExtraPayments: 'Extra Payments per Year',
    labelStartDate: 'Start Date',
    labelEndDate: 'End Date',
    labelVacationDays: 'Unused Vacation Days',
    labelDepartureReason: 'Reason for Leaving',
    opt12pays: '12 payments (Prorated)',
    opt14pays: '14 payments (Standard)',
    optImprocedente: 'Unfair Dismissal (33 days)',
    optObjetivo: 'Objective Dismissal (20 days)',
    optTemporal: 'End of Temporary Contract (12 days)',
    optVoluntaria: 'Voluntary Resignation (No severance)',
    labelTotal: 'Estimated Total Settlement',
    labelSeverance: 'Severance Pay',
    labelVacation: 'Unused Vacation',
    labelExtras: 'Prorated Bonuses',
    labelMonthSalary: 'Monthly Salary',
    disclaimer:
      'Note: This is an approximate gross estimate based on general Spanish labor law. The final amount may vary based on collective agreements, income tax withholding, and social security contributions.',
    btnCopy: 'Copy Summary',
    copySuccess: 'Copied',
    copySummaryTitle: 'Estimated Settlement Summary',
    defaultSalary: '24000',
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
      text: 'Spain Severance Pay Calculator: Complete Guide',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The end of an employment contract is a critical moment, often filled with financial uncertainty. Whether it is a <strong>dismissal</strong>, a <strong>resignation</strong>, or the <strong>end of a fixed-term contract</strong>, understanding how much money you are owed is essential to protecting your rights as a worker in Spain.',
    },
    {
      type: 'title',
      text: 'Finiquito vs Indemnización: What is the difference?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Finiquito (Settlement):</strong> The document that settles all outstanding debts between the company and the employee at the end of the employment relationship. You are always entitled to this, regardless of the reason for leaving.',
        '<strong>Indemnización (Severance):</strong> Economic compensation the company must pay for certain types of dismissal or contract termination. Not always applicable — for example, in voluntary resignations there is no severance.',
      ],
    },
    {
      type: 'title',
      text: 'Key components of the Finiquito',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Current month salary:</strong> Days worked from the last pay date to the last day of employment.',
        '<strong>Unused vacation:</strong> If you leave with remaining vacation days, the company must pay them out.',
        '<strong>Bonus payments:</strong> The proportional share of Christmas and summer bonuses, if not already prorated monthly.',
        '<strong>Bonuses or incentives:</strong> Any accrued and unpaid bonus up to the leaving date.',
      ],
    },
    {
      type: 'card',
      title: 'Practical calculation example',
      html: '<p>Employee with an annual gross salary of €30,000 and 2 years of service:</p><ul><li>Daily salary: 30,000 / 365 = €82.19</li><li>Unfair dismissal (33 days): 33 x 2 x 82.19 = <strong>€5,424.54</strong></li><li>Objective dismissal (20 days): 20 x 2 x 82.19 = <strong>€3,287.60</strong></li></ul>',
    },
    {
      type: 'tip',
      html: '<strong>Expert tip:</strong> Always review your Collective Bargaining Agreement. Some professional sectors have agreed severance amounts higher than the legal minimums set by the Workers Statute.',
    },
  ],
};
