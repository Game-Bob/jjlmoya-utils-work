import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { InvoiceLateFeeCalculatorUI } from '../ui';

const slug = 'invoice-late-fee-calculator';
const title = 'Invoice Late Fee Calculator';
const description = 'Calculate a simple late fee from an overdue invoice, a grace period, and the rate agreed in your contract. See the charged days, fee, and total due in a clear breakdown.';

const faq = [
  { question: 'How does the invoice late-fee calculation work?', answer: 'The calculator subtracts your grace period from the calendar days between the due date and calculation date. For annual or monthly rates, it prorates the agreed percentage over the charged days. A one-time rate is applied once when the grace period has ended.' },
  { question: 'Can I use a statutory late-payment rate?', answer: 'Yes, if you have verified the rate and the contract or applicable law allows you to use it. Enter that rate yourself. The tool does not select a country, guess a legal rate, or decide whether a fee is enforceable.' },
  { question: 'What does the grace period change?', answer: 'Grace days are removed from the time after the due date before the fee starts. If the invoice is only within that period, the result keeps the late fee at zero and shows that the account is still in grace.' },
  { question: 'Does the total include tax, collection costs, or compound interest?', answer: 'No. The result is the principal in your selected currency plus the simple fee produced by your inputs. Currency changes use a fixed illustrative factor, not a live exchange rate. The result does not add tax, fixed collection costs, legal fees, compound interest, or payment history.' },
];

const howTo = [
  { name: 'Enter the invoice amount', text: 'Add the unpaid principal and select the currency used on the invoice. If you change currency later, the amount is converted with the displayed illustrative factor; it is not a live foreign-exchange quote.' },
  { name: 'Set the dates', text: 'Choose the contractual due date and the date on which you are checking the account. The tool counts complete calendar days between them.' },
  { name: 'Add grace and rate terms', text: 'Enter any grace days and the percentage agreed for the invoice. Choose whether that percentage is annual, monthly, or a single one-time charge.' },
  { name: 'Use the receipt breakdown', text: 'Review the days since due, charged days, late fee, and total due. Keep the breakdown with the invoice and verify the contract before sending a claim.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const applicationSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'BusinessApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, inLanguage: 'en' };

export const content: ToolLocaleContent<InvoiceLateFeeCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    eyebrow: 'OVERDUE INVOICE / SIMPLE LEDGER',
    intro: 'Turn a missed due date into a clear claim.',
    sectionTerms: 'Set the invoice terms',
    labelAmount: 'Unpaid invoice amount',
    labelCurrency: 'Invoice currency',
    currencyConversionHint: 'Changing currency converts the amount with a fixed illustrative factor, not a live exchange rate.',
    currencyRateTemplate: '1 EUR ≈ {value} {currency}.',
    labelDueDate: 'Contractual due date',
    labelCalculationDate: 'Calculate through',
    labelGraceDays: 'Grace period',
    labelRate: 'Agreed late-fee rate',
    labelRatePeriod: 'Rate applies',
    rateAnnual: 'Per year',
    rateMonthly: 'Per month',
    rateOneTime: 'One time',
    sectionReceipt: 'The collection receipt',
    labelDaysSinceDue: 'Days since due',
    labelChargedDays: 'Days charged',
    labelAppliedRate: 'Applied rate',
    labelLateFee: 'Late fee',
    labelTotalDue: 'Total to request',
    statusNotDue: 'Not overdue',
    statusGrace: 'Still in grace',
    statusOverdue: 'Fee is running',
    timelineDue: 'Due date',
    timelineToday: 'Checked through',
    timelineGrace: 'chargeable days after grace',
    noteDisclaimer: 'Simple estimate from your inputs. Confirm the contract, jurisdiction, tax treatment, and any fixed recovery costs before making a demand.',
    buttonReset: 'Clear saved terms',
    numberLocale: 'en-US',
  },
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, applicationSchema],
  seo: [
    { type: 'title', text: 'Make an overdue invoice easy to explain', level: 2 },
    { type: 'paragraph', html: 'A late-payment request is easier to review when the principal, dates, grace period, rate, and resulting fee are visible in one place. This calculator turns those contract terms into a small receipt-style breakdown you can check before writing to a client.' },
    { type: 'card', title: 'The simple formula', html: '<p><strong>Chargeable days</strong> = days between the due date and calculation date − grace days.</p><p><strong>Late fee</strong> = invoice amount × rate ÷ 100 × chargeable time factor. Annual rates use chargeable days ÷ 365, monthly rates use chargeable days ÷ 30, and one-time rates apply once after the grace period.</p>' },
    { type: 'paragraph', html: 'The calculation is deliberately explicit instead of choosing a legal interest rate for you. A contract may use a fixed charge, a rate per year, or a different day-count convention. Currency conversion is only an illustrative convenience based on the selected factor, not a live FX quote. If your agreement says something else, do not force it into the closest option: verify the clause and adapt the calculation outside this tool.' },
    { type: 'title', text: 'Check the result before you claim it', level: 2 },
    { type: 'code', code: 'Invoice: €1,250\nDue date to check: 38 days\nGrace period: 5 days\nAnnual rate: 10%\nCharged days: 33\nLate fee: €1,250 × 0.10 × 33 / 365 = €11.30\nTotal: €1,261.30' },
    { type: 'list', items: ['Match the due date to the signed order, invoice, or contract.', 'Use the date you are actually preparing the claim, not an imagined payment date.', 'Keep the principal and late fee separate so the recipient can reconcile both amounts.', 'Verify whether tax, fixed recovery costs, or statutory limits change what you can request.'] },
    { type: 'tip', html: '<strong>Evidence tip:</strong> save the invoice, delivery or acceptance evidence, the contract clause, and this calculation together. The tool explains arithmetic; it cannot prove that the debt is due or that the fee is enforceable.' },
  ],
};
