import { getInvoiceLateFeeStatus } from './evaluator';
import type { InvoiceLateFeeResult } from './logic';
import type { InvoiceLateFeeCalculatorUI } from './ui';

export interface InvoiceLateFeeViewElements {
  status: HTMLElement;
  daysSinceDue: HTMLElement;
  chargedDays: HTMLElement;
  appliedRate: HTMLElement;
  lateFee: HTMLElement;
  totalDue: HTMLElement;
  timeline: HTMLElement;
  timelineNote: HTMLElement;
}

interface RenderOptions {
  elements: InvoiceLateFeeViewElements;
  result: InvoiceLateFeeResult;
  ui: InvoiceLateFeeCalculatorUI;
  currency: string;
  rate: number;
  ratePeriod: string;
}

const formatNumber = (value: number, locale: string, maximumFractionDigits = 2): string => value.toLocaleString(locale, { maximumFractionDigits });

const formatMoney = (value: number, locale: string, currency: string): string => value.toLocaleString(locale, { style: 'currency', currency, maximumFractionDigits: 2 });

const getRateLabel = (rate: number, period: string, ui: InvoiceLateFeeCalculatorUI): string => {
  let periodLabel = ui.rateAnnual;
  if (period === 'monthly') periodLabel = ui.rateMonthly;
  if (period === 'one-time') periodLabel = ui.rateOneTime;
  return `${formatNumber(rate, ui.numberLocale, 3)}% · ${periodLabel}`;
};

const renderTimeline = (timeline: HTMLElement, note: HTMLElement, result: InvoiceLateFeeResult, ui: InvoiceLateFeeCalculatorUI): void => {
  const progress = result.daysSinceDue === 0 ? 0 : Math.min(100, 18 + result.daysSinceDue * 1.8);
  timeline.style.setProperty('--n-progress', `${progress}%`);
  timeline.dataset.status = result.status;
  note.textContent = result.status === 'overdue' ? `${formatNumber(result.chargedDays, ui.numberLocale, 0)} ${ui.timelineGrace}` : ui.timelineGrace;
};

export const renderInvoiceLateFee = ({ elements, result, ui, currency, rate, ratePeriod }: RenderOptions): void => {
  const status = getInvoiceLateFeeStatus(result, ui);
  elements.status.textContent = status.label;
  elements.status.dataset.tone = status.tone;
  elements.daysSinceDue.textContent = formatNumber(result.daysSinceDue, ui.numberLocale, 0);
  elements.chargedDays.textContent = formatNumber(result.chargedDays, ui.numberLocale, 0);
  elements.appliedRate.textContent = getRateLabel(rate, ratePeriod, ui);
  elements.lateFee.textContent = formatMoney(result.lateFee, ui.numberLocale, currency);
  elements.totalDue.textContent = formatMoney(result.totalDue, ui.numberLocale, currency);
  renderTimeline(elements.timeline, elements.timelineNote, result, ui);
};
