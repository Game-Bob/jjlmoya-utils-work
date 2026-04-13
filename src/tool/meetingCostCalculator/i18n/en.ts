import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MeetingCostCalculatorUI } from '../ui';

const slug = 'meeting-cost-calculator';
const title = 'Meeting Cost Calculator Real Time Ticker';
const description =
  'See in real time how much your meeting is costing. Enter the number of attendees and average salary to watch the dollar amount tick up every second.';

const faqData = [
  {
    question: 'Why is it useful to measure the cost of a meeting?',
    answer:
      'Putting a dollar figure on meeting time creates productive awareness. It helps reduce unnecessary meetings, encourages punctuality, and ensures the topics discussed justify the economic investment of the team.',
  },
  {
    question: 'How is the real-time cost calculated?',
    answer:
      'The system takes the estimated annual or hourly salary of each attendee and calculates a per-second burn rate. The ticker updates every animation frame to show the accumulated cost in real time.',
  },
  {
    question: 'What indirect costs does this tool not include?',
    answer:
      'This calculator focuses on direct salary cost. It does not include opportunity cost (what employees could have produced instead), or fixed overhead costs like office rent, software licenses, or utilities.',
  },
  {
    question: 'How can I reduce the cost of my meetings?',
    answer:
      'Define a clear agenda, limit attendees to essential participants only, set a hard time limit, and consider whether an asynchronous message or email could achieve the same outcome.',
  },
];

const howToData = [
  {
    name: 'Enter the number of attendees',
    text: 'Type how many people are currently participating in the meeting.',
  },
  {
    name: 'Set the average salary',
    text: 'Enter an estimate of the average annual gross salary or hourly rate of the attendees for an accurate calculation.',
  },
  {
    name: 'Start the ticker',
    text: 'Press the Start button as soon as the meeting begins and watch the cost accumulate in real time.',
  },
  {
    name: 'Stop and reflect',
    text: 'When the meeting ends, pause the ticker. Review the total cost and evaluate whether the outcomes achieved were worth the investment.',
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

export const content: ToolLocaleContent<MeetingCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelAccumulated: 'Accumulated Cost',
    labelAttendees: 'Attendees',
    labelSalary: 'Average Salary',
    optAnnual: 'Annual Gross',
    optHourly: 'Hourly Rate',
    btnStart: 'Start Meeting',
    btnPause: 'Pause',
    btnResume: 'Resume',
    btnReset: 'Reset',
    currencySymbol: '$',
    defaultSalary: '85000',
    numberLocale: 'en-US',
  },
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Sources',
  bibliography: [
    { name: 'Stop the Meeting Madness (Harvard Business Review)', url: 'https://hbr.org/2017/07/stop-the-meeting-madness' },
    { name: 'Time Wasting at Work (Atlassian)', url: 'https://www.atlassian.com/time-wasting-at-work-infographic' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Why Visualize the Cost of a Meeting?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Time is the most expensive and least renewable resource in any organization. This tool is not designed to discourage collaboration — it is designed to foster <strong>productive awareness</strong>. When we watch dollars burn in real time, we become more punctual, more concise, and more intentional about what goes on a meeting agenda.',
    },
    {
      type: 'card',
      title: 'The Hidden Cost Math',
      html: '<p>We calculate cost based on annual gross salary or hourly rate. For annual salaries, we use an industry-standard baseline of <strong>1,750 working hours per year</strong> (accounting for vacations and public holidays) to convert salary to an hourly rate.</p><p>The burn rate formula is:<br><code>(Hourly Rate × Number of Attendees) / 3600</code><br>This gives the exact cost per second shown in the ticker.</p>',
    },
    {
      type: 'code',
      code: 'Annual Salary: $85,000\nHourly Rate: $85,000 / 1,750 = $48.57/hr\nBurn Rate (4 people): ($48.57 × 4) / 3600 = $0.054/sec\nCost of a 1-hour meeting: $194.29',
    },
    {
      type: 'title',
      text: 'Tips for More Efficient Meetings',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>The 2-Pizza Rule:</strong> Popularized by Jeff Bezos — if two pizzas cannot feed everyone in the meeting, there are too many people in the room.',
        '<strong>No Agenda, No Meeting:</strong> Never accept a meeting without a clear agenda and defined objectives. Catch-up sessions are often a euphemism for wasted time.',
        '<strong>Stand-up meetings:</strong> Keep daily syncs standing. Physical discomfort promotes brevity and keeps discussions on point.',
        '<strong>Parkinson\'s Law:</strong> Work expands to fill the time available. Set a hard 25-minute or 50-minute slot instead of defaulting to the hour.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Use the ticker as a live prompt:</strong> Share your screen with the meeting cost ticker running during team meetings. The visible dollar amount creates a natural incentive to stay on topic and wrap up on time.',
    },
  ],
};
