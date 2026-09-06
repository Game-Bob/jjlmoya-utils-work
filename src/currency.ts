export type CurrencyCode =
  | "EUR"
  | "USD"
  | "GBP"
  | "JPY"
  | "CNY"
  | "IDR"
  | "KRW"
  | "PLN"
  | "RUB"
  | "SEK"
  | "TRY"
  | "CHF"
  | "INR"
  | "CAD"
  | "AUD"
  | "BRL";

export interface CurrencyOption {
  code: CurrencyCode;
  symbol: string;
}

export const SUPPORTED_CURRENCIES: readonly CurrencyOption[] = [
  { code: "EUR", symbol: "€" },
  { code: "USD", symbol: "$" },
  { code: "GBP", symbol: "£" },
  { code: "JPY", symbol: "¥" },
  { code: "CNY", symbol: "¥" },
  { code: "IDR", symbol: "Rp" },
  { code: "KRW", symbol: "₩" },
  { code: "PLN", symbol: "zł" },
  { code: "RUB", symbol: "₽" },
  { code: "SEK", symbol: "kr" },
  { code: "TRY", symbol: "₺" },
  { code: "CHF", symbol: "CHF" },
  { code: "INR", symbol: "₹" },
  { code: "CAD", symbol: "C$" },
  { code: "AUD", symbol: "A$" },
  { code: "BRL", symbol: "R$" },
];

export const SITE_LOCALE_CURRENCY_CODES: readonly CurrencyCode[] = [
  "EUR",
  "USD",
  "IDR",
  "JPY",
  "KRW",
  "PLN",
  "RUB",
  "SEK",
  "TRY",
  "CNY",
];

export const SITE_LOCALE_CURRENCIES: readonly CurrencyOption[] =
  SITE_LOCALE_CURRENCY_CODES.map(
    (code) => SUPPORTED_CURRENCIES.find((item) => item.code === code)!,
  );

export const CURRENCY_CONVERSION_UPDATED = "2026-09-06";
export const CURRENCY_CONVERSION_REFERENCE =
  "Fixed illustrative factors against EUR; not live exchange rates.";

const INTERNAL_TO_EUR: Record<CurrencyCode, number> = {
  EUR: 1,
  USD: 0.92,
  GBP: 1.17,
  JPY: 0.0061,
  CNY: 0.127,
  IDR: 0.000056,
  KRW: 0.00069,
  PLN: 0.232,
  RUB: 0.0102,
  SEK: 0.088,
  TRY: 0.025,
  CHF: 1.04,
  INR: 0.011,
  CAD: 0.68,
  AUD: 0.61,
  BRL: 0.17,
};

export function getCurrencyConversionFactor(currency: CurrencyCode): number {
  return INTERNAL_TO_EUR[currency];
}

const LOCALE_DEFAULTS: Record<string, CurrencyCode> = {
  de: "EUR",
  en: "USD",
  es: "EUR",
  fr: "EUR",
  id: "IDR",
  it: "EUR",
  ja: "JPY",
  ko: "KRW",
  nl: "EUR",
  pl: "PLN",
  pt: "EUR",
  ru: "RUB",
  sv: "SEK",
  tr: "TRY",
  zh: "CNY",
};

const CURRENCY_LABELS: Record<string, string> = {
  de: "Währung",
  en: "Currency",
  es: "Moneda",
  fr: "Devise",
  id: "Mata uang",
  it: "Valuta",
  ja: "通貨",
  ko: "통화",
  nl: "Valuta",
  pl: "Waluta",
  pt: "Moeda",
  ru: "Валюта",
  sv: "Valuta",
  tr: "Para birimi",
  zh: "货币",
};

export function getDefaultCurrency(locale?: string): CurrencyCode {
  const language = (locale ?? "en").toLowerCase().split("-")[0] ?? "en";
  return LOCALE_DEFAULTS[language] ?? "EUR";
}

export function getCurrencyLabel(locale?: string): string {
  const language = (locale ?? "en").toLowerCase().split("-")[0] ?? "en";
  return CURRENCY_LABELS[language] ?? "Currency";
}

export function toInternalCurrency(
  value: number,
  currency: CurrencyCode,
): number {
  return value * INTERNAL_TO_EUR[currency];
}

export function fromInternalCurrency(
  value: number,
  currency: CurrencyCode,
): number {
  return value / INTERNAL_TO_EUR[currency];
}

export function convertCurrencyValue(
  value: number,
  from: CurrencyCode,
  to: CurrencyCode,
): number {
  return fromInternalCurrency(toInternalCurrency(value, from), to);
}

export function getCurrencySymbol(currency: CurrencyCode): string {
  return (
    SUPPORTED_CURRENCIES.find((item) => item.code === currency)?.symbol ?? "€"
  );
}

export function parseCurrencyCode(
  value: string | undefined,
  fallback: CurrencyCode = "EUR",
): CurrencyCode {
  const byCode = SUPPORTED_CURRENCIES.find((item) => item.code === value);
  if (byCode) return byCode.code;
  const bySymbol = SUPPORTED_CURRENCIES.find((item) => item.symbol === value);
  return bySymbol?.code ?? fallback;
}

export function formatCurrency(
  value: number,
  currency: CurrencyCode,
  locale = "en",
  maximumFractionDigits = 2,
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits,
  }).format(value);
}

export function formatCurrencyWithSymbol(
  value: number,
  currency: CurrencyCode,
  locale = "en",
  fractionDigits = 2,
): string {
  const number = new Intl.NumberFormat(locale, {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(value);
  return `${getCurrencySymbol(currency)}${number}`;
}
