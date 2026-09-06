export type ContributionBasis = "annual" | "perPay";
export type PayPeriods = 12 | 14;

export interface SalarySacrificeInput {
  annualGross: number;
  contributionAmount: number;
  contributionBasis: ContributionBasis;
  payPeriods: PayPeriods;
  incomeTaxRate: number;
  payrollDeductionRate: number;
}

export type SalarySacrificeError =
  | "gross"
  | "contribution"
  | "basis"
  | "payPeriods"
  | "incomeTaxRate"
  | "payrollDeductionRate"
  | "combinedRate";

export interface SalarySacrificeResult {
  valid: boolean;
  errors: SalarySacrificeError[];
  annualContribution: number;
  contributionPerPay: number;
  grossAfterSacrifice: number;
  cashBefore: number;
  cashAfter: number;
  cashBeforePerPay: number;
  cashAfterPerPay: number;
  cashDrop: number;
  cashDropPerPay: number;
  incomeTaxBefore: number;
  incomeTaxAfter: number;
  incomeTaxSavings: number;
  payrollDeductionsBefore: number;
  payrollDeductionsAfter: number;
  payrollDeductionSavings: number;
  totalSavings: number;
  effectiveCost: number;
  effectiveCostPerPay: number;
  savingsShare: number;
}

const emptyResult = (
  errors: SalarySacrificeError[],
): SalarySacrificeResult => ({
  valid: false,
  errors,
  annualContribution: 0,
  contributionPerPay: 0,
  grossAfterSacrifice: 0,
  cashBefore: 0,
  cashAfter: 0,
  cashBeforePerPay: 0,
  cashAfterPerPay: 0,
  cashDrop: 0,
  cashDropPerPay: 0,
  incomeTaxBefore: 0,
  incomeTaxAfter: 0,
  incomeTaxSavings: 0,
  payrollDeductionsBefore: 0,
  payrollDeductionsAfter: 0,
  payrollDeductionSavings: 0,
  totalSavings: 0,
  effectiveCost: 0,
  effectiveCostPerPay: 0,
  savingsShare: 0,
});

const annualContributionFor = (input: SalarySacrificeInput): number =>
  input.contributionBasis === "perPay"
    ? input.contributionAmount * input.payPeriods
    : input.contributionAmount;

const invalidPositive = (value: number): boolean =>
  !Number.isFinite(value) || value <= 0;

const invalidNonNegative = (value: number): boolean =>
  !Number.isFinite(value) || value < 0;

const invalidRate = (value: number): boolean =>
  !Number.isFinite(value) || value < 0 || value > 100;

const contributionExceedsGross = (
  input: SalarySacrificeInput,
  annualContribution: number,
): boolean =>
  Number.isFinite(input.annualGross) &&
  Number.isFinite(annualContribution) &&
  annualContribution > input.annualGross;

const combinedRateIsInvalid = (input: SalarySacrificeInput): boolean =>
  Number.isFinite(input.incomeTaxRate) &&
  Number.isFinite(input.payrollDeductionRate) &&
  input.incomeTaxRate + input.payrollDeductionRate >= 100;

export function validateSalarySacrificeInput(
  input: SalarySacrificeInput,
): SalarySacrificeError[] {
  const annualContribution = annualContributionFor(input);
  const checks: Array<[boolean, SalarySacrificeError]> = [
    [invalidPositive(input.annualGross), "gross"],
    [invalidNonNegative(input.contributionAmount), "contribution"],
    [
      !(["annual", "perPay"] as string[]).includes(input.contributionBasis),
      "basis",
    ],
    [![12, 14].includes(input.payPeriods), "payPeriods"],
    [invalidRate(input.incomeTaxRate), "incomeTaxRate"],
    [invalidRate(input.payrollDeductionRate), "payrollDeductionRate"],
    [contributionExceedsGross(input, annualContribution), "contribution"],
    [combinedRateIsInvalid(input), "combinedRate"],
  ];
  return [
    ...new Set(checks.filter(([invalid]) => invalid).map(([, error]) => error)),
  ];
}

interface ScenarioBase {
  annualContribution: number;
  grossAfterSacrifice: number;
  cashBefore: number;
  cashAfter: number;
  incomeTaxBefore: number;
  incomeTaxAfter: number;
  payrollDeductionsBefore: number;
  payrollDeductionsAfter: number;
}

interface ResultMetrics {
  contributionPerPay: number;
  cashBeforePerPay: number;
  cashAfterPerPay: number;
  cashDrop: number;
  cashDropPerPay: number;
  incomeTaxSavings: number;
  payrollDeductionSavings: number;
  totalSavings: number;
  effectiveCost: number;
  effectiveCostPerPay: number;
  savingsShare: number;
}

const getScenarioBase = (input: SalarySacrificeInput): ScenarioBase => {
  const annualContribution = annualContributionFor(input);
  const grossAfterSacrifice = input.annualGross - annualContribution;
  const taxRate = input.incomeTaxRate / 100;
  const payrollRate = input.payrollDeductionRate / 100;
  const incomeTaxBefore = input.annualGross * taxRate;
  const incomeTaxAfter = grossAfterSacrifice * taxRate;
  const payrollDeductionsBefore = input.annualGross * payrollRate;
  const payrollDeductionsAfter = grossAfterSacrifice * payrollRate;
  return {
    annualContribution,
    grossAfterSacrifice,
    cashBefore: input.annualGross - incomeTaxBefore - payrollDeductionsBefore,
    cashAfter: grossAfterSacrifice - incomeTaxAfter - payrollDeductionsAfter,
    incomeTaxBefore,
    incomeTaxAfter,
    payrollDeductionsBefore,
    payrollDeductionsAfter,
  };
};

const getResultMetrics = (
  input: SalarySacrificeInput,
  base: ScenarioBase,
): ResultMetrics => {
  const incomeTaxSavings = base.incomeTaxBefore - base.incomeTaxAfter;
  const payrollDeductionSavings =
    base.payrollDeductionsBefore - base.payrollDeductionsAfter;
  const totalSavings = incomeTaxSavings + payrollDeductionSavings;
  const cashDrop = base.cashBefore - base.cashAfter;
  const contributionPerPay = base.annualContribution / input.payPeriods;
  const cashDropPerPay = cashDrop / input.payPeriods;
  return {
    contributionPerPay,
    cashBeforePerPay: base.cashBefore / input.payPeriods,
    cashAfterPerPay: base.cashAfter / input.payPeriods,
    cashDrop,
    cashDropPerPay,
    incomeTaxSavings,
    payrollDeductionSavings,
    totalSavings,
    effectiveCost: cashDrop,
    effectiveCostPerPay: cashDropPerPay,
    savingsShare:
      base.annualContribution > 0
        ? (totalSavings / base.annualContribution) * 100
        : 0,
  };
};

export function calculateSalarySacrifice(
  input: SalarySacrificeInput,
): SalarySacrificeResult {
  const errors = validateSalarySacrificeInput(input);
  if (errors.length > 0) return emptyResult(errors);
  const base = getScenarioBase(input);
  return {
    valid: true,
    errors: [],
    ...base,
    ...getResultMetrics(input, base),
  };
}
