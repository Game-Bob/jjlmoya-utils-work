import type { InvoiceLateFeeResult } from './logic';
import type { InvoiceLateFeeCalculatorUI } from './ui';

export interface InvoiceLateFeeStatus {
  label: string;
  tone: 'quiet' | 'warm' | 'alert';
}

export const getInvoiceLateFeeStatus = (result: InvoiceLateFeeResult, ui: InvoiceLateFeeCalculatorUI): InvoiceLateFeeStatus => {
  if (result.status === 'not-due') return { label: ui.statusNotDue, tone: 'quiet' };
  if (result.status === 'grace') return { label: ui.statusGrace, tone: 'warm' };
  return { label: ui.statusOverdue, tone: 'alert' };
};
