export interface SettlementConfig {
  salaryAnual: number;
  extraPagas: number;
  vacationDays: number;
  reason: string;
  startDate: Date;
  endDate: Date;
}

export interface SettlementResult {
  total: number;
  severance: number;
  vacation: number;
  extras: number;
  monthSalary: number;
}

function getSeveranceDaysPerYear(reason: string): number {
  if (reason === 'improcedente') return 33;
  if (reason === 'objetivo') return 20;
  if (reason === 'temporal') return 12;
  return 0;
}

function applySeveranceCap(reason: string, severance: number, dailySalary: number): number {
  if (reason === 'improcedente') return Math.min(severance, dailySalary * 24 * 30);
  if (reason === 'objetivo') return Math.min(severance, dailySalary * 12 * 30);
  return severance;
}

function startOfYear(date: Date): Date {
  return new Date(date.getFullYear(), 0, 1);
}

function daysIntoPeriod(start: Date, current: Date): number {
  return Math.ceil((current.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
}

export function calculateSettlement(config: SettlementConfig): SettlementResult | null {
  const { salaryAnual, extraPagas, vacationDays, reason, startDate, endDate } = config;

  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime()) || endDate < startDate) {
    return null;
  }

  const dailySalary = salaryAnual / 365;
  const monthlySalary = salaryAnual / 12;
  const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
  const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
  const yearsWorked = totalDays / 365;

  const daysPerYear = getSeveranceDaysPerYear(reason);
  const rawSeverance = Math.min(daysPerYear * yearsWorked * dailySalary, dailySalary * 365 * 2);
  const severance = applySeveranceCap(reason, rawSeverance, dailySalary);

  const vacation = vacationDays * dailySalary;

  let extras = 0;
  if (extraPagas === 14) {
    extras = (monthlySalary / 182.5) * (daysIntoPeriod(startOfYear(endDate), endDate) % 182.5);
  }

  const monthSalary = (endDate.getDate() / 30) * monthlySalary;
  const total = severance + vacation + extras + monthSalary;

  return { total, severance, vacation, extras, monthSalary };
}
