import { bibliography } from "../bibliography";
import { createOvertimeContent } from "./content";

export const content = createOvertimeContent({
  locale: "en",
  slug: "overtime-pay-calculator",
  title: "Overtime Pay Calculator",
  description:
    "Turn your hourly rate, regular hours and overtime multiplier into an estimated extra gross pay and a clear comparison of possible rates.",
  ui: {
    eyebrow: "Your workday, translated into pay",
    intro: "Set the pay rules you already know",
    labelBasis: "Base amount means",
    optionHourly: "Hourly rate",
    optionPeriod: "Pay for the regular period",
    labelBaseAmount: "Base amount",
    labelRegularHours: "Regular hours in the period",
    labelOvertimeHours: "Overtime hours",
    labelMultiplier: "Overtime multiplier",
    multiplierHint: "For example, 1.5 means 150% of the base hourly rate.",
    labelRegularPay: "Regular gross pay",
    labelOvertimePay: "Extra gross pay",
    labelTotalGross: "Period gross total",
    labelPremium: "Extra premium",
    labelEffectiveRate: "Effective blended rate",
    labelScenarios: "Compare the rule",
    labelScenarioMultiplier: "Multiplier",
    labelScenarioOvertime: "Extra gross",
    labelScenarioTotal: "Period total",
    labelDecision: "Decision",
    decisionPositive:
      "Your overtime adds this amount before tax and deductions.",
    decisionNeutral: "Enter positive values to see the comparison.",
    disclaimer:
      "This is a gross-pay estimate. It does not calculate tax, social contributions, legal entitlement or your employer payroll rules. Use the multiplier and base amount from your contract, agreement or payslip.",
    hourlyUnit: "per hour",
    periodUnit: "per period",
    hoursUnit: "hours",
    currencyUnit: "€",
  },
  faq: [
    {
      question: "How is overtime pay calculated?",
      answer:
        "The calculator finds the base hourly rate, multiplies it by your overtime hours and applies the multiplier you enter. It then adds that extra gross amount to the regular pay for the period.",
    },
    {
      question: "What does an overtime multiplier of 1.5 mean?",
      answer:
        "A multiplier of 1.5 means each overtime hour is valued at 150% of the base hourly rate. The tool does not decide whether that multiplier is legally or contractually correct.",
    },
    {
      question:
        "Can I use a monthly or weekly salary instead of an hourly rate?",
      answer:
        "Yes. Choose pay for the regular period, enter that gross amount and add the regular hours in the same period. The calculator derives an effective hourly rate for the comparison.",
    },
    {
      question: "Is this a net salary calculation?",
      answer:
        "No. The results are gross amounts before tax, social contributions and other deductions. Actual payroll can also include rules that are not represented here.",
    },
    {
      question: "Why compare several multipliers?",
      answer:
        "A scenario table makes a difference in an offer, timesheet or payslip easy to spot. You can compare the rule you were given with nearby assumptions without rebuilding a spreadsheet.",
    },
  ],
  howTo: [
    {
      name: "Choose the base amount",
      text: "Select an hourly rate or the gross pay for the regular period, then enter the amount you have.",
    },
    {
      name: "Add the hours",
      text: "Enter regular hours and the overtime hours recorded for the same period.",
    },
    {
      name: "Set the multiplier",
      text: "Use the overtime multiplier stated in your contract, collective agreement or payroll document.",
    },
    {
      name: "Read the decision",
      text: "Check extra gross pay, the period total and the nearby multiplier scenarios before accepting or querying the figure.",
    },
  ],
  seo: [
    { type: "title", text: "Make extra hours visible", level: 2 },
    {
      type: "paragraph",
      html: "Overtime is easy to undercount when a timesheet shows hours but a payslip shows only a final total. This calculator gives that extra work a separate line: the base rate, the overtime premium and the new gross total for the same pay period.",
    },
    {
      type: "paragraph",
      html: "Bring the figures you already have from your offer, contract, timesheet or payslip. Nothing is uploaded and no public table is required. The calculation happens in your browser, so you can check a number before replying to payroll or negotiating a project.",
    },
    { type: "title", text: "Two ways to describe your normal pay", level: 2 },
    {
      type: "list",
      items: [
        "Hourly rate: enter the amount earned for one regular hour.",
        "Period pay: enter the gross amount for the normal period and its regular hours. The tool derives the equivalent hourly rate.",
      ],
    },
    { type: "title", text: "What the multiplier changes", level: 2 },
    {
      type: "paragraph",
      html: "A multiplier of 1 means overtime is valued at the normal hourly rate. A multiplier above 1 adds a premium. The scenario table keeps the hours fixed and shows how the gross result changes at 1x, 1.25x, 1.5x and 2x.",
    },
    { type: "title", text: "Gross pay is not take-home pay", level: 2 },
    {
      type: "paragraph",
      html: "The output is deliberately gross. Taxes, social contributions, caps, compensatory rest and entitlement rules depend on the jurisdiction and the agreement that applies to you. Use the result as a transparent check of the arithmetic, not as a legal ruling or a promise of net pay.",
    },
  ],
  bibliography,
});
