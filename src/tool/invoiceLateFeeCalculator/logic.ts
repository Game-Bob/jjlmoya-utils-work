export type RatePeriod = 'annual' | 'monthly' | 'one-time';

export interface InvoiceLateFeeConfig {
  amount: number;
  dueDate: string;
  calculationDate: string;
  graceDays: number;
  rate: number;
  ratePeriod: RatePeriod;
}

export interface InvoiceLateFeeResult {
  daysSinceDue: number;
  chargedDays: number;
  lateFee: number;
  totalDue: number;
  rateFactor: number;
  status: 'not-due' | 'grace' | 'overdue';
}

const nonNegative = (value: number): number => (Number.isFinite(value) ? Math.max(0, value) : 0);

const parseDate = (value: string): number | null => {
  const parsed = Date.parse(`${value}T00:00:00Z`);
  return Number.isFinite(parsed) ? parsed : null;
};

export const calendarDaysBetween = (from: string, to: string): number => {
  const fromTime = parseDate(from);
  const toTime = parseDate(to);
  if (fromTime === null || toTime === null) return 0;
  return Math.max(0, Math.floor((toTime - fromTime) / 86_400_000));
};

const getRateFactor = (ratePeriod: RatePeriod, chargedDays: number): number => {
  if (ratePeriod === 'monthly') return chargedDays / 30;
  if (ratePeriod === 'one-time') return chargedDays > 0 ? 1 : 0;
  return chargedDays / 365;
};

export const calculateInvoiceLateFee = (config: InvoiceLateFeeConfig): InvoiceLateFeeResult => {
  const amount = nonNegative(config.amount);
  const graceDays = Math.floor(nonNegative(config.graceDays));
  const rate = nonNegative(config.rate);
  const daysSinceDue = calendarDaysBetween(config.dueDate, config.calculationDate);
  const chargedDays = Math.max(0, daysSinceDue - graceDays);
  const rateFactor = getRateFactor(config.ratePeriod, chargedDays);
  const lateFee = amount * (rate / 100) * rateFactor;
  const status = daysSinceDue === 0 ? 'not-due' : getStatus(chargedDays);

  return {
    daysSinceDue,
    chargedDays,
    lateFee,
    totalDue: amount + lateFee,
    rateFactor,
    status,
  };
};

const getStatus = (chargedDays: number): InvoiceLateFeeResult['status'] => (chargedDays === 0 ? 'grace' : 'overdue');
