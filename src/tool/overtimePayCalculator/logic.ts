export type OvertimeBasis = "hourly" | "period";

export interface OvertimePayInput {
  basis: OvertimeBasis;
  baseAmount: number;
  regularHours: number;
  overtimeHours: number;
  multiplier: number;
}

export interface OvertimeScenario {
  multiplier: number;
  overtimePay: number;
  totalGross: number;
}

export interface OvertimePayResult {
  valid: boolean;
  hourlyRate: number;
  regularPay: number;
  overtimePay: number;
  premium: number;
  totalGross: number;
  effectiveRate: number;
  scenarios: OvertimeScenario[];
}

const SCENARIO_MULTIPLIERS = [1, 1.25, 1.5, 2];

const invalidResult = (): OvertimePayResult => ({
  valid: false,
  hourlyRate: 0,
  regularPay: 0,
  overtimePay: 0,
  premium: 0,
  totalGross: 0,
  effectiveRate: 0,
  scenarios: [],
});

const finiteNonNegative = (value: number): number =>
  Number.isFinite(value) && value >= 0 ? value : 0;

function buildResult(
  hourlyRate: number,
  regularPay: number,
  overtimeHours: number,
  multiplier: number,
): OvertimePayResult {
  const overtimePay = hourlyRate * multiplier * overtimeHours;
  const totalGross = regularPay + overtimePay;
  const premium = overtimePay - hourlyRate * overtimeHours;
  const totalHours =
    regularPay > 0 ? regularPay / hourlyRate + overtimeHours : 0;

  return {
    valid: true,
    hourlyRate,
    regularPay,
    overtimePay,
    premium,
    totalGross,
    effectiveRate: totalHours > 0 ? totalGross / totalHours : 0,
    scenarios: SCENARIO_MULTIPLIERS.map((scenarioMultiplier) => ({
      multiplier: scenarioMultiplier,
      overtimePay: hourlyRate * scenarioMultiplier * overtimeHours,
      totalGross: regularPay + hourlyRate * scenarioMultiplier * overtimeHours,
    })),
  };
}

export function calculateOvertimePay(
  input: OvertimePayInput,
): OvertimePayResult {
  const baseAmount = finiteNonNegative(input.baseAmount);
  const regularHours = finiteNonNegative(input.regularHours);
  const overtimeHours = finiteNonNegative(input.overtimeHours);
  const multiplier = finiteNonNegative(input.multiplier);

  if (baseAmount <= 0 || regularHours <= 0 || multiplier <= 0)
    return invalidResult();

  const hourlyRate =
    input.basis === "period" ? baseAmount / regularHours : baseAmount;
  const regularPay =
    input.basis === "period" ? baseAmount : hourlyRate * regularHours;
  return buildResult(hourlyRate, regularPay, overtimeHours, multiplier);
}
