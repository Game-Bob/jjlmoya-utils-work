import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EarlyRetirementSimulatorUI } from '../ui';

const slug = 'early-retirement-simulator-spain';
const title = 'Early Retirement Simulator Spain: Calculate Your Pension';
const description =
  'Calculate your retirement age, reduction coefficients and estimated pension for free. Updated simulator for voluntary and involuntary early retirement in Spain.';

const faqData = [
  {
    question: 'What is the minimum age for early retirement in Spain?',
    answer:
      'For voluntary early retirement, the minimum age is 2 years before the statutory age (generally 63 or 65 depending on contributions). For involuntary retirement, it is up to 4 years before (61 or 63).',
  },
  {
    question: 'How many years of contributions do I need?',
    answer:
      'For voluntary early retirement, at least 35 years of effective contributions are required. For involuntary or forced retirement, the minimum is 33 years.',
  },
  {
    question: 'How much will I lose by retiring early?',
    answer:
      'The reduction depends on the months of advancement and total years contributed. Cuts range from 2.81% for a single month up to a maximum of around 21% for the full 2-year voluntary advancement.',
  },
  {
    question: 'Does unemployment time count towards retirement?',
    answer:
      'Yes, time spent receiving unemployment benefits (paro) counts towards retirement, as the SEPE makes the corresponding contributions to Social Security.',
  },
];

const howToData = [
  {
    name: 'Enter your year of birth',
    text: 'This determines your legal ordinary retirement age under the regulations in force in 2026.',
  },
  {
    name: 'Estimate your years of contributions',
    text: 'Include employment time, self-employment, and periods of contributory unemployment.',
  },
  {
    name: 'Choose the type of retirement',
    text: 'Indicate whether the retirement is voluntary or forced to apply the correct coefficients.',
  },
  {
    name: 'Review your estimated pension',
    text: 'See the applied reduction and the exact date when you could stop working.',
  },
];

const bibliography = [
  {
    name: 'Social Security Spain: Ordinary and Early Retirement',
    url: 'https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/PrestacionesPensionesTrabajadores/10963',
  },
  {
    name: 'Law 21/2021 on guaranteeing the purchasing power of pensions',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-21652',
  },
  {
    name: 'Official Simulator - Tu Seguridad Social',
    url: 'https://prestaciones.seg-social.es/simulador-servicio/simulador-pension-jubilacion.html',
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

export const content: ToolLocaleContent<EarlyRetirementSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelBirthYear: 'Year of Birth',
    labelContributions: 'Years Contributed',
    labelBasePension: 'Gross Monthly Base',
    labelRetirementAge: 'Retirement Age',
    labelExpectedDate: 'Expected Date',
    labelEstimatedPension: 'Estimated Pension',
    labelPermanentReduction: 'Permanent Reduction',
    labelYears: 'YEARS',
    btnLegalTitle: 'Standard',
    btnLegalDesc: 'Legal retirement age. No reduction. 100% of the base.',
    btnVoluntaryTitle: 'Voluntary Early',
    btnVoluntaryDesc: 'Retirement by personal choice. Monthly reduction applied.',
    btnInvoluntaryTitle: 'Involuntary / ERE',
    btnInvoluntaryDesc: 'Forced termination. More favourable coefficients.',
    defaultBirthYear: '1975',
    defaultContributions: '30',
    defaultBasePension: '2500',
    adviceDefault: 'Move the slider to project your retirement timeline.',
    adviceDelay:
      'If you delay your retirement to age <strong>[AGE]</strong>, you would gain approximately <strong>€[GAIN] extra</strong> per month.',
    adviceBonus: 'You are accruing a delay bonus. Your pension will exceed 100% of the base.',
    adviceOptimal: 'You have reached the optimal standard age with 100% of your entitlement.',
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
      text: 'Early Retirement Simulator for Spain: 2026 Guide',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Early retirement</strong> is one of the biggest financial concerns for workers in Spain. Understanding when you can stop working and, above all, how much money you will lose through reduction coefficients is vital for healthy life planning.',
    },
    {
      type: 'list',
      items: [
        '<strong>Standard legal age:</strong> 67 years (or 65 with sufficient contributions).',
        '<strong>Voluntary Early Retirement:</strong> Up to 2 years before the legal limit.',
        '<strong>Involuntary Early Retirement:</strong> Up to 4 years before (due to redundancy or other causes).',
        '<strong>Reduction Coefficients:</strong> Permanent monthly cuts to the pension.',
        '<strong>Contribution requirement:</strong> Minimum 35 years for voluntary, 33 for forced.',
      ],
    },
    {
      type: 'title',
      text: 'At what age can I legally retire in Spain?',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>65-year route:</strong> If you have contributed more than 38 years and 6 months, you can retire at 65 with 100% of your base.',
        '<strong>67-year route:</strong> If your contributions are below that threshold, your standard age is 67.',
        '<strong>Military service:</strong> Compulsory military service or social service may add up to 1 year of contributions.',
      ],
    },
    {
      type: 'title',
      text: 'Voluntary Early Retirement',
      level: 2,
    },
    {
      type: 'card',
      title: 'Requirements for Voluntary Early Retirement',
      html: '<ul><li>Be at an age that is two years below the standard legal age.</li><li>Have a minimum effective contribution period of 35 years.</li><li>The pension to be received must exceed the minimum pension.</li></ul>',
    },
    {
      type: 'title',
      text: 'Reduction Coefficients: The Cost of Retiring Early',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Under 38.5 years contributed:</strong> Maximum reduction of 21% (2 years of advancement).',
        '<strong>Between 38.5 and 41.5 years:</strong> Maximum reduction of approximately 19%.',
        '<strong>Between 41.5 and 44.5 years:</strong> Maximum reduction of approximately 17%.',
        '<strong>Over 44.5 years:</strong> Maximum reduction of approximately 15%.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Golden tip:</strong> Delaying your early retirement by just one month can make a significant difference to the reduction coefficient. Always calculate the benefit of waiting a few extra days if you are near a monthly bracket boundary.',
    },
    {
      type: 'title',
      text: 'Involuntary or Forced Early Retirement',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Maximum advancement:</strong> 4 years (48 months) before the standard age.',
        '<strong>Required contributions:</strong> 33 years.',
        '<strong>Condition:</strong> Must be registered as a job seeker for at least 6 months before.',
        '<strong>Coefficients:</strong> More favourable than voluntary, but the impact of 4 years is still severe.',
      ],
    },
    {
      type: 'card',
      title: 'Practical example',
      html: '<p>A worker with a base of €2,000 who retires voluntarily 2 years early with 36 years of contributions. Their reduction will be approximately 21%, leaving their pension at around <strong>€1,580 per month</strong> for the rest of their life.</p>',
    },
  ],
};
