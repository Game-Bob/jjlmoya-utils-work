import { describe, expect, it } from 'vitest';
import { calculateInvoiceLateFee, calendarDaysBetween } from './logic';

describe('invoice late-fee calculation', () => {
  it('counts complete calendar days and never returns a negative interval', () => {
    expect(calendarDaysBetween('2026-08-01', '2026-09-08')).toBe(38);
    expect(calendarDaysBetween('2026-09-08', '2026-08-01')).toBe(0);
    expect(calendarDaysBetween('bad-date', '2026-08-01')).toBe(0);
  });

  it('prorates an annual rate after the grace period', () => {
    const result = calculateInvoiceLateFee({ amount: 1250, dueDate: '2026-08-01', calculationDate: '2026-09-08', graceDays: 5, rate: 10, ratePeriod: 'annual' });
    expect(result.daysSinceDue).toBe(38);
    expect(result.chargedDays).toBe(33);
    expect(result.lateFee).toBeCloseTo(11.3014, 4);
    expect(result.totalDue).toBeCloseTo(1261.3014, 4);
    expect(result.status).toBe('overdue');
  });

  it('supports monthly and one-time rates', () => {
    const monthly = calculateInvoiceLateFee({ amount: 1000, dueDate: '2026-01-01', calculationDate: '2026-01-31', graceDays: 0, rate: 2, ratePeriod: 'monthly' });
    const oneTime = calculateInvoiceLateFee({ amount: 1000, dueDate: '2026-01-01', calculationDate: '2026-01-31', graceDays: 0, rate: 2, ratePeriod: 'one-time' });
    expect(monthly.lateFee).toBeCloseTo(20, 6);
    expect(oneTime.lateFee).toBeCloseTo(20, 6);
  });

  it('shows no fee when the invoice is due today or within grace', () => {
    const notDue = calculateInvoiceLateFee({ amount: 1000, dueDate: '2026-09-08', calculationDate: '2026-09-08', graceDays: 0, rate: 20, ratePeriod: 'annual' });
    const grace = calculateInvoiceLateFee({ amount: 1000, dueDate: '2026-09-01', calculationDate: '2026-09-08', graceDays: 10, rate: 20, ratePeriod: 'annual' });
    expect(notDue.status).toBe('not-due');
    expect(grace.status).toBe('grace');
    expect(notDue.lateFee).toBe(0);
    expect(grace.totalDue).toBe(1000);
  });

  it('normalizes negative numeric inputs', () => {
    const result = calculateInvoiceLateFee({ amount: -100, dueDate: '2026-01-01', calculationDate: '2026-02-01', graceDays: -2, rate: -5, ratePeriod: 'annual' });
    expect(result.lateFee).toBe(0);
    expect(result.totalDue).toBe(0);
  });
});
