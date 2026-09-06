import type {
  FAQPage,
  HowTo,
  SoftwareApplication,
  WithContext,
} from "schema-dts";
import type { ToolLocaleContent } from "../../../types";
import type { SalarySacrificeCalculatorUI } from "../ui";
import { bibliography } from "../bibliography";

const title = "Salary Sacrifice Take Home Calculator";
const description =
  "Compare an estimated take-home salary before and after a salary sacrifice using the gross pay, contribution and payroll rates you already know.";

const faq = [
  {
    question: "What does this salary sacrifice calculator estimate?",
    answer:
      "It compares your estimated cash pay before and after a contribution is taken from gross salary. You provide the effective income-tax and payroll-deduction rates, so the result shows a transparent scenario rather than an automatic tax or payslip calculation.",
  },
  {
    question: "How much take-home pay will I give up?",
    answer:
      "The tool subtracts the contribution from gross salary, applies the rates you entered to both scenarios, and reports the resulting cash reduction per pay period and per year. The benefit contribution is shown separately so you can compare the cash cost with its value.",
  },
  {
    question: "Should I enter the salary sacrifice per year or per pay period?",
    answer:
      "Choose the basis that matches your offer or payroll document. An annual amount is divided across 12 or 14 pay periods; a per-pay amount is multiplied by the selected number of periods.",
  },
  {
    question: "Does this calculate my exact tax or payslip?",
    answer:
      "No. Tax treatment, National Insurance or social contributions, benefit exemptions, caps and employment rules vary by country and arrangement. Use the output to test your own assumptions, then confirm the final figure with payroll or the plan provider.",
  },
  {
    question: "What is the effective cost of the benefit?",
    answer:
      "It is the reduction in estimated take-home cash after the tax and payroll savings entered in the scenario. It is not the market price of the benefit and does not decide whether the arrangement is suitable for you.",
  },
];

const howTo = [
  {
    name: "Enter your gross salary",
    text: "Use the annual gross amount from your contract or payroll document, before tax and employee deductions.",
  },
  {
    name: "Add the sacrifice amount",
    text: "Enter the contribution offered by your employer and choose whether that figure is annual or per pay period.",
  },
  {
    name: "Set your pay rhythm and rates",
    text: "Choose 12 or 14 pay periods, then enter the effective income-tax and other payroll-deduction rates you want to test.",
  },
  {
    name: "Compare cash with the benefit",
    text: "Read the take-home reduction, annual contribution, estimated savings and effective cash cost before accepting or querying the arrangement.",
  },
];

const faqSchema: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: title,
  description,
  step: howTo.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

const applicationSchema: WithContext<SoftwareApplication> = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: title,
  description,
  applicationCategory: "BusinessApplication",
  operatingSystem: "All",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  inLanguage: "en",
};

export const content: ToolLocaleContent<SalarySacrificeCalculatorUI> = {
  slug: "salary-sacrifice-take-home-calculator",
  title,
  description,
  ui: {
    eyebrow: "See what the trade-off costs",
    intro: "Test the payroll assumptions you already have",
    labelCurrency: "Currency",
    currencyHint:
      "Approximate conversion using fixed local factors, not a live exchange rate.",
    labelGross: "Annual gross salary",
    grossHint: "Before tax and employee deductions",
    labelContribution: "Salary sacrifice amount",
    contributionHint: "Use the figure from your offer or plan",
    labelBasis: "That amount is",
    basisAnnual: "Per year",
    basisPerPay: "Per pay period",
    labelPayPeriods: "Pay periods",
    pay12: "12 pays",
    pay14: "14 pays",
    labelIncomeTax: "Effective income-tax rate",
    labelPayrollDeduction: "Other payroll deductions",
    ratesHint:
      "Use your own estimated rates; they are not looked up automatically.",
    btnCalculate: "Compare take-home pay",
    labelCashDropPerPay: "Estimated cash reduction per pay",
    labelDecision: "What this means",
    decision:
      "You give up {cost} in take-home cash for {benefit} in annual benefit value.",
    decisionZero: "Add a contribution to compare the two salary scenarios.",
    labelCashBefore: "Cash before sacrifice",
    labelCashAfter: "Cash after sacrifice",
    labelContributionPerPay: "Benefit contribution per pay",
    labelSavingsPerPay: "Tax and deduction savings per pay",
    labelAnnualContribution: "Annual benefit contribution",
    labelIncomeTaxSavings: "Estimated income-tax savings",
    labelPayrollSavings: "Estimated payroll savings",
    labelEffectiveCost: "Effective take-home cost",
    labelFlow: "Annual money flow",
    flowBefore: "Take-home before",
    flowAfter: "Take-home after",
    flowBenefit: "Benefit contribution",
    labelAnnualView: "Annual view",
    labelAssumptions: "Scenario assumptions",
    errorGross: "Enter a gross salary greater than zero.",
    errorContribution:
      "The contribution must be zero or less than your gross salary.",
    errorRates: "Use rates from 0% to 100%, with a combined rate below 100%.",
    errorPayPeriods: "Choose 12 or 14 pay periods.",
    errorBasis: "Choose whether the contribution is annual or per pay period.",
    disclaimer:
      "This is a transparent estimate, not a payslip or tax ruling. It uses only the rates and salary data you enter. Currency changes use fixed approximate factors, not live exchange rates. Salary sacrifice can affect tax, social contributions and earnings-related benefits differently depending on the country, plan and contract; confirm the final terms with payroll or the provider.",
    annualUnit: "per year",
    perPayUnit: "per pay",
    percentUnit: "%",
  },
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, applicationSchema],
  seo: [
    {
      type: "title",
      text: "Compare the cash cost before you opt in",
      level: 2,
    },
    {
      type: "paragraph",
      html: "A salary sacrifice offer can sound simple: exchange part of your cash salary for a pension contribution, transport plan, childcare support or another employee benefit. The difficult question is practical: <strong>how much will actually disappear from each payslip?</strong> This calculator turns the figures in your own offer into a before-and-after cash comparison.",
    },
    {
      type: "paragraph",
      html: "Enter your annual gross salary, the contribution and the effective rates you want to test. The calculation stays in your browser and does not fetch tax tables, employer rules or benefit catalogues. That keeps every assumption visible instead of presenting a false promise of an exact net salary.",
    },
    { type: "title", text: "What the calculation compares", level: 2 },
    {
      type: "list",
      items: [
        "<strong>Before:</strong> gross salary minus the income-tax and payroll-deduction rates you enter.",
        "<strong>After:</strong> the same rates applied to gross salary after the sacrifice amount is removed.",
        "<strong>Decision:</strong> the cash reduction per pay, the annual benefit contribution and the estimated savings that offset part of the contribution.",
      ],
    },
    {
      type: "card",
      title: "Why the rates are manual",
      html: "Salary sacrifice is not one universal tax rule. HMRC notes that the effect depends on the pay and non-cash benefit in the arrangement, while the Spanish tax authority treats in-kind remuneration under its own rules. Enter the effective rates from your payslip, plan document or payroll estimate so the comparison matches the scenario you are actually considering.",
    },
    { type: "title", text: "How to read the effective cost", level: 2 },
    {
      type: "paragraph",
      html: "If you contribute $500 and the scenario estimates $125 of tax and payroll savings, the benefit costs $375 in take-home cash. That does not mean the benefit is worth $500 or $375: it gives you the cash trade-off to compare with its real value to you. Try the annual and per-pay views before you decide.",
    },
    {
      type: "tip",
      html: "<strong>Before signing:</strong> check whether the arrangement changes pensionable pay, statutory benefits, bonuses, overtime, leave pay or eligibility thresholds. This tool cannot know those contract-specific effects.",
    },
  ],
};
