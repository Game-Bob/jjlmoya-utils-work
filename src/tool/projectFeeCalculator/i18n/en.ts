import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ProjectFeeCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'project-fee-to-hourly-rate-calculator';
const title = 'Project Fee to Hourly Rate Calculator';
const description =
  'Turn a fixed project fee into an effective hourly rate after revisions, meetings, and direct costs. Test a delay buffer and find the fee needed to hit your own target rate.';

const faq = [
  {
    question: 'What does an effective hourly rate show?',
    answer:
      'It shows what remains of a fixed project fee per hour after direct costs are removed and planned work is combined with the revision and meeting time you enter. It is a project-specific figure, not a universal professional rate.',
  },
  {
    question: 'Which hours should I include in the estimate?',
    answer:
      'Start with the hands-on production hours, then add a realistic number of revision rounds and meetings. The calculator keeps those hidden hours visible so you can compare the promise with the work it is likely to require.',
  },
  {
    question: 'How does the delay buffer work?',
    answer:
      'The selected buffer adds that percentage to the total project hours. It is a sensitivity scenario for extra rework or scope pressure; it does not predict calendar dates or include taxes.',
  },
  {
    question: 'How is the minimum recommended fee calculated?',
    answer:
      'The tool adds your direct costs to your total estimated hours multiplied by the target hourly rate you enter. This gives you a negotiation floor for this project, not a claim about what every freelancer should charge.',
  },
];

const howTo = [
  {
    name: 'Enter the fixed project fee',
    text: 'Add the amount the client would pay before taxes or payment-processing fees.',
  },
  {
    name: 'Expose the hidden work',
    text: 'Enter hands-on hours, revision rounds, revision time, meetings, and meeting time.',
  },
  {
    name: 'Choose a delay scenario',
    text: 'Use 10%, 25%, or 50% to see how extra work changes the effective hourly rate.',
  },
  {
    name: 'Compare with your target',
    text: 'Enter the hourly rate you want for this kind of work and use the recommended fee when accepting or renegotiating the project.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

const applicationSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'en',
};

export const content: ToolLocaleContent<ProjectFeeCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelFee: 'Fixed project fee',
    labelPlannedHours: 'Hands-on hours',
    labelRevisions: 'Revision rounds',
    labelRevisionHours: 'Hours per revision round',
    labelMeetings: 'Meetings',
    labelMeetingHours: 'Hours per meeting',
    labelDirectCosts: 'Direct project costs',
    labelTargetRate: 'Your target hourly rate',
    labelDelay: 'Extra-hours scenario',
    labelEffectiveRate: 'Effective hourly rate',
    labelAfterCosts: 'Fee after direct costs',
    labelTotalHours: 'Realistic project hours',
    labelHiddenHours: 'Hidden hours exposed',
    labelBufferedRate: 'Rate after scenario',
    labelRecommendedFee: 'Fee to hit your target',
    labelFeeGap: 'Negotiation gap',
    labelPlanned: 'Planned work',
    labelHidden: 'Hidden work',
    labelWorkloadLedger: 'Workload ledger',
    labelHandsOn: 'Hands-on work',
    labelRevisionTime: 'Revision time',
    labelMeetingTime: 'Meeting time',
    labelScenarioTotal: 'With scenario buffer',
    labelBuffer: 'Scenario',
    labelCurrency: 'Currency',
    labelProjectMath: 'Project math',
    titleInputs: 'Make the hidden work visible',
    titleHiddenWork: 'Hidden work',
    titleResults: 'Your project, in hours',
    statusBelow: 'Below your target by',
    statusAtOrAbove: 'At or above your target by',
    statusNoHours: 'Add at least one project hour to see the rate.',
    noteBeforeTax: 'Before taxes. Uses only the inputs you provide and runs in your browser.',
    btnBuffer0: 'No buffer',
    btnBuffer10: '+10%',
    btnBuffer25: '+25%',
    btnBuffer50: '+50%',
    numberLocale: 'en-US',
  },
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, applicationSchema],
  seo: [
    {
      type: 'title',
      text: 'Make the invisible hours count',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A fixed project fee only looks attractive while the estimate contains the whole project. <strong>Revisions, calls, handovers, and direct costs</strong> can turn a healthy quote into an underpaid commitment. This calculator makes that trade-off visible before you say yes.',
    },
    {
      type: 'card',
      title: 'The project-specific formula',
      html: '<p><strong>Effective hourly rate</strong> = (fixed fee - direct costs) / (hands-on hours + revision hours + meeting hours).</p><p>The result describes this project only. It does not include taxes, a market rate, unpaid leave, or a promise that a project will finish on schedule.</p>',
    },
    {
      type: 'code',
      code: 'Example\nFee: $2,400\nHands-on work: 24 h\nRevisions and meetings: 8 h\nDirect costs: $120\nEffective rate: ($2,400 - $120) / 32 h = $71.25/h',
    },
    {
      type: 'title',
      text: 'Use the scenario before you negotiate',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A 25% scenario does not claim that every project will overrun by exactly 25%. It answers a more useful question: <strong>if the work expands, does this fee still make sense?</strong> Compare the scenario rate with the target you set for this type of work, then decide whether to accept, reduce scope, or raise the fee.',
    },
    {
      type: 'list',
      items: [
        '<strong>Quote the work, not only the deliverable:</strong> include the communication and review time the project needs.',
        '<strong>Keep direct costs visible:</strong> subtract them before judging the hourly return.',
        '<strong>Use your own target:</strong> the recommended fee is a personal negotiation floor, not financial advice.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Before accepting:</strong> if the buffered rate is uncomfortable, change one project variable deliberately: increase the fee, reduce the scope, or cap the revision and meeting allowance.',
    },
  ],
};
