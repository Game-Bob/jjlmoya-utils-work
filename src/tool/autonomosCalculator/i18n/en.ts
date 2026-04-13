import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AutonomosCalculatorUI } from '../ui';

const slug = 'freelancer-quota-calculator-spain';
const title = 'Freelancer Quota Calculator 2026: Spain RETA Real System';
const description =
  'Free simulator for self-employed contributions in Spain 2026. Calculate your real net income, contribution brackets and monthly quota with the new 0.9% MEI.';

const faqData = [
  {
    question: 'How does the new contribution system work for 2026?',
    answer:
      'The system is based on 15 tiers of real net income. You must declare a forecast of your profits (income minus expenses) and pay the contribution associated with that monthly tier.',
  },
  {
    question: 'What is the MEI and how does it affect my self-employed quota?',
    answer:
      'The Intergenerational Equity Mechanism (MEI) is a targeted tax for pensions. In 2026 it rises to 0.9%, slightly increasing the contribution compared to 2025 for all self-employed workers.',
  },
  {
    question: 'How many times can I change my contribution base?',
    answer:
      'You can modify your contribution base, and therefore your self-employed quota, up to 6 times a year to adapt it to the reality of your monthly profits.',
  },
  {
    question: 'What happens if my actual income differs from my forecast?',
    answer:
      'Social Security will perform an annual reconciliation by cross-referencing data with the Tax Agency. If you underpaid, they will claim the difference; if you overpaid, the excess will be automatically refunded.',
  },
  {
    question: 'Does the flat rate of 80 euros still exist?',
    answer:
      'Yes, the reduced fee of €80 is maintained for new self-employed workers during the first 12 months of activity, extendable for another 12 if income is below the minimum wage.',
  },
];

const howToData = [
  {
    name: 'Enter your income and expenses',
    text: 'Input your expected monthly turnover and the deductible expenses of your professional activity.',
  },
  {
    name: 'Define your work profile',
    text: 'Select whether you are a self-employed individual (7% deduction) or a company director (3% deduction).',
  },
  {
    name: 'View your actual tier',
    text: 'The simulator will calculate your net income and show you the contribution tier applicable for 2026.',
  },
  {
    name: 'Check the MEI impact',
    text: 'You will see the final quota breakdown including contingencies and the new intergenerational equity factor.',
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

export const content: ToolLocaleContent<AutonomosCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelIncome: 'Monthly Gross Income',
    labelExpenses: 'Monthly Deductible Expenses',
    labelType: 'Worker Profile',
    labelFlatRate: 'Flat Rate (New Registration)',
    optStandard: 'Individual Self-Employed (7% deduction)',
    optSocietario: 'Company Director (3% deduction)',
    optNoFlatRate: 'Not applied (Real Quota)',
    optFlatRate: 'Yes, first year (€80/month)',
    labelBracket: 'Your Net Income Tier',
    labelNetDisplay: 'Monthly Net Income',
    labelCuota: 'Social Security Contribution',
    labelBase: 'Contribution Base',
    labelNetAfter: 'Real Net (After Contribution)',
    labelProjection: '2026 PROJECTION (MEI 0.9%)',
    infoText:
      'RETA 2026 System: The calculation includes the monthly net income with the general expenses deduction (7% or 3%). The contribution shown includes common contingencies, professional contingencies, cessation of activity, training and the Intergenerational Equity Mechanism (MEI) updated to 0.9% for 2026.',
  },
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Sources',
  bibliography: [
    {
      name: 'Social Security: New contribution system',
      url: 'https://portal.seg-social.gob.es/wps/portal/importass/importass/Colectivos/Trabajo+Autonomo/guia',
    },
    {
      name: 'Tax Agency: Income from economic activities',
      url: 'https://sede.agenciatributaria.gob.es/Sede/irpf/empresarios-individuales-profesionales/rendimientos-actividades-economicas.html',
    },
    {
      name: 'BOE: Royal Decree-Law 13/2022 on RETA reform',
      url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2022-12482',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Self-Employed Quota Calculator 2026: Guide to the New System',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Being self-employed in Spain means facing one of the most dynamic and sometimes confusing tasks: <strong>Social Security contributions</strong>. Since the new system based on <strong>real net income</strong> came into force, the concept of a "fixed quota" has disappeared, replaced by a progressive model.',
    },
    {
      type: 'title',
      text: 'How Does the New RETA Contribution System Work?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Until 2023, every self-employed worker could freely choose their contribution base, which led most to contribute at the minimum. The reform aims to ensure higher earners contribute more, while those with lower incomes see their monthly burden reduced.',
    },
    {
      type: 'paragraph',
      html: 'The system is based on <strong>net income tiers</strong>. This means your quota does not depend on your gross income (turnover), but on what you actually keep "clean" after deducting professional expenses and applying an additional general expenses deduction.',
    },
    {
      type: 'title',
      text: 'Key Changes for 2026: The MEI Factor',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The year 2026 marks the consolidation of the second phase of the reform. One of the most critical updates is the increase of the <strong>Intergenerational Equity Mechanism (MEI)</strong>.',
    },
    {
      type: 'list',
      items: [
        '<strong>MEI Increase:</strong> For 2026, the MEI rises to 0.9%, representing a slight increase in the contribution compared to 2025 for all tiers.',
        '<strong>Tier Review:</strong> Net income tiers are maintained, but the minimum and maximum contributions of each range are adjusted to converge with the real income contribution system.',
        '<strong>Annual Reconciliation:</strong> At year end, Social Security will cross-reference data with the Tax Agency. If you overpaid or underpaid based on actual profits, a refund or claim will be issued.',
      ],
    },
    {
      type: 'title',
      text: 'How to Calculate Your Monthly Net Income',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'To use our calculator accurately, it is vital to understand which figure to enter. The formula applied by Social Security is:',
    },
    {
      type: 'code',
      code: 'Net Income = (Gross Income - Deductible Expenses) / (1 - General Expenses Deduction)',
    },
    {
      type: 'paragraph',
      html: 'The <strong>General Expenses Deduction</strong> is <strong>7%</strong> for individual self-employed workers and <strong>3%</strong> for company directors.',
    },
    {
      type: 'card',
      title: 'Example calculation 2026',
      html: '<ul><li>Turnover: €4,000 / Expenses: €1,000</li><li>Profit margin: €3,000</li><li>General deduction (7%): €210</li><li>Computable net income: €2,790</li><li><strong>Estimated 2026 quota:</strong> Tier 8, approx. €350 + MEI adjustment.</li></ul>',
    },
    {
      type: 'title',
      text: 'Advantages of the Progressive System',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Better social protection:</strong> By contributing based on more realistic bases, benefits for temporary disability, maternity, paternity and especially retirement will be significantly higher.',
        '<strong>Full flexibility:</strong> You can change your contribution base up to 6 times a year. If you anticipate a drastic drop in income, you can move to a lower tier to avoid cash flow strain.',
        '<strong>€80 Flat Rate:</strong> Maintained for new entrepreneurs in the first year, allowing a start with controlled fixed costs.',
      ],
    },
    {
      type: 'title',
      text: 'Company Director vs. Individual Self-Employed',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The <strong>company director</strong> (with an SL company) has a slightly higher minimum contribution base and the general expenses deduction is lower (3%). This is because the law considers that shareholder control gives them a different position relative to market risks.',
    },
    {
      type: 'tip',
      html: '<strong>Pro Tip:</strong> If your net income varies a lot month to month, try to position yourself in a prudent intermediate tier. The subsequent reconciliation is inevitable, but this way you will avoid unexpected payments of thousands of euros when the Social Security "bill" arrives at year end.',
    },
    {
      type: 'title',
      text: 'What does your monthly quota include?',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Common Contingencies (28.30%):</strong> Covers absences due to common illness or non-work accidents.',
        '<strong>Professional Contingencies (1.30%):</strong> Work accidents and occupational diseases.',
        '<strong>Cessation of Activity (0.90%):</strong> The self-employed "unemployment" benefit.',
        '<strong>Professional Training (0.10%):</strong> Access to courses and training.',
        '<strong>MEI (0.90% in 2026):</strong> Fund to guarantee pension sustainability.',
      ],
    },
    {
      type: 'title',
      text: 'The Reconciliation Process (Tax Agency and Social Security)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Each year, after the tax return campaign, the Tax Agency communicates your actual net income to Social Security. If you chose a lower tier than your actual income required, you will receive a payment notification for the difference. Conversely, if you contributed above your profits, Social Security will automatically refund the excess without you needing to explicitly request it.',
    },
    {
      type: 'title',
      text: 'Conclusion and Recommendations',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The <strong>2026 self-employed calculator</strong> is an indispensable tool for tax planning for any freelancer. We recommend using this simulator every time you close an important contract or change your fixed costs to ensure your self-employed quota is always in line with your business reality.',
    },
  ],
};
