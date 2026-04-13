import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IrpfCalculatorUI } from '../ui';

const slug = 'irpf-calculator-spain';
const title = 'IRPF Calculator: Net Salary Simulator Spain';
const description =
  'Calculate your net monthly and annual salary for 2026 in Spain. Updated simulator with state, regional, MEI scales and family situation.';

const faqData = [
  {
    question: 'How does MEI affect my net salary in 2026?',
    answer:
      'The Intergenerational Equity Mechanism rises to 0.90% in 2026 to ensure pension sustainability. Most is paid by the employer, but employees see their net salary reduced by their contribution percentage.',
  },
  {
    question: 'Why is my net salary different in Madrid than in Catalonia?',
    answer:
      'IRPF is a tax 50% devolved to Autonomous Communities. Madrid applies lower brackets than the state scale, while Catalonia has its own scale which may increase initial withholding.',
  },
  {
    question: 'What is the marginal rate and how does it affect me?',
    answer:
      'The marginal rate is the tax percentage on your last euro earned. It shows what a salary increase or bonus actually costs you in taxes.',
  },
  {
    question: 'How many pay periods should I select for monthly calculation?',
    answer:
      'Normally you receive 12 or 14 pay periods (with bonuses in summer and Christmas). Select the option your company uses to know your actual monthly net income.',
  },
  {
    question: 'Is this calculator reliable for my tax return?',
    answer:
      'This tool provides an estimate based on 2026 regulations. Monthly withholding is an approximation; your actual final result is determined in the June tax return filing.',
  },
];

const howToData = [
  {
    name: 'Enter your gross salary',
    text: 'Type the total annual amount listed in your contract before any deductions or withholdings.',
  },
  {
    name: 'Define your personal situation',
    text: 'Indicate your number of children, any recognized disability, and marital status to apply legal tax-free allowances.',
  },
  {
    name: 'Choose your Autonomous Community',
    text: 'Your tax residence determines the regional tax scale applied, affecting your final net income.',
  },
  {
    name: 'Review the breakdown',
    text: 'See how much goes to IRPF, Social Security, and what your real monthly and annual net salary is.',
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

export const content: ToolLocaleContent<IrpfCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    titleVariables: 'Calculation Variables',
    titleCalculo: 'Transparent Calculation 2026',
    labelBruto: 'Annual Gross Salary (€)',
    labelPagas: 'Number of Pay Periods',
    labelComunidad: 'Tax Residence',
    labelHijos: 'Children (under 25)',
    labelDiscapacidad: 'Disability Grade',
    labelUnidad: 'Family Unit or Cohabitation',
    opt12pagas: '12 periods',
    opt14pagas: '14 periods',
    optGen: 'Common Territory (General)',
    optMad: 'Madrid',
    optCat: 'Catalonia',
    optAnd: 'Andalusia',
    optVal: 'Valencia Region',
    optPV: 'Basque Country (Foral)',
    optNav: 'Navarre (Foral)',
    optNinguna: 'None',
    opt33: '> 33%',
    opt65: '> 65%',
    optSoltero: 'Single, divorced or widowed',
    optCasadoLow: 'Married (spouse earns less than €1,500/year)',
    optCasadoHigh: 'Married (spouse has income)',
    labelSalarioBruto: 'Gross Salary',
    labelSS: 'Social Security / MEI (-)',
    labelGastos: 'Deductible Expenses (Art. 20)',
    labelNetoAnual: 'ANNUAL NET SALARY',
    labelRetencionIRPF: 'IRPF Withholding (%)',
    labelNetoMensual: 'Available Monthly Net',
    labelMarginal: 'Applied Marginal Rate',
    resultRetention: 'IRPF Withholding (%)',
    resultAnual: '/ year',
    infoText:
      'AEAT Algorithm (Gross Tax - Minimum Tax) validated for 2026. Includes MEI contribution at 6.47% and employment income reductions. jjlmoya.es.',
  },
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Sources',
  bibliography: [
    {
      name: 'Tax Agency: IRPF',
      url: 'https://sede.agenciatributaria.gob.es/Sede/irpf.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'IRPF Calculator 2026: Complete guide to the new tax scenario',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The Personal Income Tax (IRPF) is the most relevant levy in the Spanish tax system, directly affecting the monthly paycheck of millions of workers. In 2026, we are seeing a consolidation of various reforms aimed at progressivity and adaptation to new economic realities, such as the increase in the Intergenerational Equity Mechanism (MEI) and deflation of rates in various autonomous communities.',
    },
    {
      type: 'paragraph',
      html: 'Our <strong>IRPF calculator for 2026</strong> is designed to provide an accurate and up-to-date view of what will really reach your bank account. Calculating net salary is not simply subtracting a fixed percentage; it is a mathematical process that takes into account your personal situation, dependents, disability, and crucially, your tax residence, as each region in Spain has authority over the regional tax bracket.',
    },
    {
      type: 'title',
      text: 'What changes in 2026 payslips?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'To understand your simulation results, it is essential to know the pillars of withholding calculations this year:',
    },
    {
      type: 'list',
      items: [
        '<strong>MEI impact:</strong> The Intergenerational Equity Mechanism continues its upward path to guarantee pensions, reaching 0.90% in 2026. Most is paid by the employer, but employees see their contribution increased to approximately 0.15%, slightly reducing net income.',
        '<strong>SMI and Reductions:</strong> The Minimum Interprofessional Salary acts as a barrier. Low incomes benefit from an expanded employment income reduction to ensure gross salary increases are not absorbed by higher tax withholding.',
        '<strong>Regional Brackets:</strong> Regions like Madrid, Andalusia or Murcia typically apply lower rates than the state average, while Catalonia or the Valencia Region have their own scales that may increase withholding at higher income levels.',
      ],
    },
    {
      type: 'title',
      text: 'Key concepts to understand your net salary',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Taxable Base vs. Gross Salary:</strong> You do not pay tax on everything you earn. The base on which IRPF applies is the result of subtracting from your gross salary the Social Security contributions (approximately 6.45%) and a general reduction for hard-to-justify expenses (€2,000 annually). Tax-free allowances are then applied to this result.',
    },
    {
      type: 'title',
      text: 'Basic concepts',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Marginal Rate:</strong> The tax percentage on your last euro earned. Critical to know how much a raise or bonus will actually cost you in taxes.',
        '<strong>Vital Minimum:</strong> Income the State considers essential to cover the taxpayer and family\'s basic needs, which is therefore tax-exempt.',
        '<strong>Payroll Withholding:</strong> Payment on account that employers remit monthly to the Tax Agency on your behalf, based on an estimate of what you will owe at year end.',
        '<strong>Net Income:</strong> Gross salary minus Social Security contributions and deductible expenses allowed by tax law.',
      ],
    },
    {
      type: 'title',
      text: 'How to optimize your IRPF withholding',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Many workers wonder if they should ask their employer to withhold more or less. The reality is withholding is a "prepayment" to the Tax Agency. If you are under-withheld during the year, your tax return may show a balance due; if over-withheld, you receive a refund.',
    },
    {
      type: 'paragraph',
      html: '<strong>The Tax Bracket Jump Myth:</strong> There is a myth that moving to a higher bracket means you earn less net. This is false. IRPF is progressive; only income exceeding the bracket limit is taxed at the higher rate. You will never earn less net from a gross raise, even with a higher marginal rate.',
    },
    {
      type: 'paragraph',
      html: '<strong>Tip for families:</strong> Make sure you have correctly reported the birth of children or changes in family members\' disability status using form 145. This adjusts your monthly withholding and avoids surprises in the June tax filing campaign.',
    },
    {
      type: 'title',
      text: 'Differences by Autonomous Community',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Fiscal decentralization in Spain means two people with the same salary and family situation have different net income depending on whether they live in Toledo or Barcelona. Communities control half the tax (regional bracket). Madrid, for example, stands out for having the lowest rates at virtually all income levels, while other regions apply deductions for rent or children\'s education not available nationally. Our calculator accounts for these variations to give you the most realistic figure based on your location.',
    },
    {
      type: 'paragraph',
      html: 'In conclusion, the <strong>2026 net salary simulation</strong> is a basic financial planning tool. Knowing your real savings capacity and understanding what portion of your income supports public services lets you make informed decisions about investments, mortgages, or career changes.',
    },
  ],
};
