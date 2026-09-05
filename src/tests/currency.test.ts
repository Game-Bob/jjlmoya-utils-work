import { describe, expect, it } from 'vitest';
import {
  SUPPORTED_CURRENCIES,
  convertCurrencyValue,
  getDefaultCurrency,
  getCurrencySymbol,
  toInternalCurrency,
} from '../currency';

describe('currency preferences', () => {
  it('covers the currency symbols used by every translated locale', () => {
    expect(SUPPORTED_CURRENCIES.map((item) => item.code)).toEqual([
      'EUR',
      'USD',
      'GBP',
      'JPY',
      'CNY',
      'IDR',
      'KRW',
      'PLN',
      'RUB',
      'SEK',
      'TRY',
      'CHF',
      'INR',
      'CAD',
      'AUD',
      'BRL',
    ]);
    expect(getCurrencySymbol('EUR')).toBe('€');
    expect(getCurrencySymbol('IDR')).toBe('Rp');
    expect(getCurrencySymbol('KRW')).toBe('₩');
    expect(getCurrencySymbol('PLN')).toBe('zł');
    expect(getCurrencySymbol('TRY')).toBe('₺');
  });

  it('selects a sensible default from each site locale', () => {
    expect(getDefaultCurrency('es')).toBe('EUR');
    expect(getDefaultCurrency('en-US')).toBe('USD');
    expect(getDefaultCurrency('id')).toBe('IDR');
    expect(getDefaultCurrency('ja')).toBe('JPY');
    expect(getDefaultCurrency('zh-CN')).toBe('CNY');
  });

  it('converts displayed values through the hidden internal base', () => {
    expect(toInternalCurrency(100, 'USD')).toBeCloseTo(92);
    expect(convertCurrencyValue(100, 'USD', 'EUR')).toBeCloseTo(92);
    expect(convertCurrencyValue(100, 'EUR', 'USD')).toBeCloseTo(108.6956, 3);
    expect(convertCurrencyValue(300, 'EUR', 'RUB')).toBeCloseTo(29411.7647, 2);
  });
});
