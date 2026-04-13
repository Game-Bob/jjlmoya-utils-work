import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SalaryCalculatorUI } from '../ui';

const slug = 'salary-calculator-spain';
const title = 'Salary Calculator Spain: Net Salary Simulator IRPF and Social Security';
const description =
  'Discover how much you will actually earn each month. Accurate calculation of withholdings, taxable base and net income according to Spanish regulations.';

const faqData = [
  {
    question: 'How is net salary calculated in Spain?',
    answer:
      'Net salary is calculated by subtracting IRPF withholdings (according to brackets) and Social Security contributions (approximately 6.35% of gross) from the gross amount. The percentage of IRPF varies according to your personal situation and salary level.',
  },
  {
    question: 'What is the difference between 12 and 14 pay periods?',
    answer:
      'With 12 pay periods, bonus pay is distributed monthly. With 14 pay periods, you receive two bonus payments (usually in June/July and December). Annual gross is the same, only the distribution changes.',
  },
  {
    question: 'Why does my payslip not match the calculator exactly?',
    answer:
      'This calculator uses standard approximate values. Your actual payslip may vary due to: company-specific deductions, benefits, dependent children, disability, or personal situations that affect IRPF.',
  },
  {
    question: 'What percentage of my salary does the Treasury keep?',
    answer:
      'It depends on your salary. In general, between IRPF and Social Security, 25% to 45% of gross is withheld. The higher the salary, the higher the withholding percentage due to IRPF\'s progressive system.',
  },
  {
    question: 'What is IRPF?',
    answer:
      'Personal Income Tax. It is a progressive tax: those who earn more pay a higher percentage on the higher brackets of their salary.',
  },
];

const howToData = [
  {
    name: 'Enter annual gross salary',
    text: 'Type the total amount agreed in your contract before taxes and withholdings.',
  },
  {
    name: 'Set family situation',
    text: 'Indicate if you have children or dependents, as this reduces the percentage of IRPF applied to you.',
  },
  {
    name: 'Number of pay periods',
    text: 'Choose whether you receive your salary in 12 pay periods (bonuses distributed) or 14 pay periods.',
  },
  {
    name: 'Review monthly breakdown',
    text: 'Check how much goes to Social Security, IRPF and what is the exact net income that will reach your bank account.',
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

export const content: ToolLocaleContent<SalaryCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelGross: 'Annual Gross Salary',
    labelPays: 'Number of Pay Periods',
    btn12: '12 Periods',
    btn14: '14 Periods',
    labelAge: 'Age',
    labelContract: 'Contract Type',
    optIndefinite: 'Indefinite / General',
    optTemporal: 'Temporary',
    btnCalculate: 'Calculate Net Salary',
    labelNetMonthly: 'Monthly Net Salary',
    labelNetAnnual: 'Annual Net Salary',
    labelPaysDisplay: 'Pay Periods',
    labelBreakdown: 'Withholding Breakdown (Estimated)',
    labelIRPF: 'IRPF',
    labelSS: 'Social Security',
    disclaimer:
      '*Simplified calculation for single worker, no children and under 65 years old.',
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
      text: 'Where does my gross salary disappear?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'It\'s the most common surprise in a first job: you sign a contract for €24,000 a year, divide by 12 expecting €2,000 a month, and find €1,600 in your account. Where are the other €400?',
    },
    {
      type: 'paragraph',
      html: 'In Spain, the difference between <strong>Gross</strong> (what the company pays) and <strong>Net</strong> (what you receive) is split between two main items: IRPF and Social Security. Understanding them is key to negotiating salary increases.',
    },
    {
      type: 'title',
      text: 'Social Security: The ~6.35% that funds your future',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'It is a fixed contribution for almost all workers. It does not depend on whether you are single or married. With this money you finance:',
    },
    {
      type: 'list',
      items: [
        '<strong>Common Contingencies (4.70%)</strong>: Covers absences due to common illness, non-work accidents, retirement and maternity.',
        '<strong>Unemployment (1.55% or 1.60%)</strong>: Your contribution to claim unemployment benefits if you lose your job. Varies slightly if the contract is temporary.',
        '<strong>Professional Training (0.10%)</strong>: For subsidized training courses and retraining.',
      ],
    },
    {
      type: 'title',
      text: 'IRPF: The tax that hurts the most',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'It is progressive and can range from 2% to 47% depending on your salary and personal situation. It is not a fixed tax; it is an advance payment to the Treasury. The company calculates how much you should pay in taxes next year and deducts it month by month.',
    },
    {
      type: 'title',
      text: 'Factors that lower your IRPF',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Having children (especially under 3 years old).',
        'Having a recognized disability (>33%).',
        'Having a spouse in charge with low income.',
      ],
    },
    {
      type: 'title',
      text: 'State IRPF Brackets (Approx. 2026)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '€0 - €12,450: 19%',
        '€12,450 - €20,200: 24%',
        '€20,200 - €35,200: 30%',
        '€35,200 - €60,000: 37%',
        '> €60,000: 45%',
      ],
    },
    {
      type: 'title',
      text: 'The eternal question: 12 or 14 pay periods?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Many workers prefer 14 pay periods for the extra payments in summer and Christmas. Others prefer (or the company imposes) spreading the pay over 12 months. Mathematically, you earn exactly the same per year.',
    },
    {
      type: 'list',
      items: [
        '<strong>12 PAY PERIODS</strong>: You earn more each month, but have no bonuses. Better for constant monthly cash flow.',
        '<strong>14 PAY PERIODS</strong>: You earn a bit less each month, but receive two double payments per year. Works like "forced savings".',
      ],
    },
  ],
};
