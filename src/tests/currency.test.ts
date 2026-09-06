import { describe, expect, it } from "vitest";
import {
  CURRENCY_CONVERSION_REFERENCE,
  SITE_LOCALE_CURRENCIES,
  SUPPORTED_CURRENCIES,
  convertCurrencyValue,
  formatCurrencyWithSymbol,
  getCurrencyConversionFactor,
  getDefaultCurrency,
  getCurrencySymbol,
  toInternalCurrency,
} from "../currency";

describe("currency preferences", () => {
  it("covers the currency symbols used by every translated locale", () => {
    expect(SUPPORTED_CURRENCIES.map((item) => item.code)).toEqual([
      "EUR",
      "USD",
      "GBP",
      "JPY",
      "CNY",
      "IDR",
      "KRW",
      "PLN",
      "RUB",
      "SEK",
      "TRY",
      "CHF",
      "INR",
      "CAD",
      "AUD",
      "BRL",
    ]);
    expect(getCurrencySymbol("EUR")).toBe("€");
    expect(getCurrencySymbol("IDR")).toBe("Rp");
    expect(getCurrencySymbol("KRW")).toBe("₩");
    expect(getCurrencySymbol("PLN")).toBe("zł");
    expect(getCurrencySymbol("TRY")).toBe("₺");
  });

  it("selects a sensible default from each site locale", () => {
    expect(getDefaultCurrency("es")).toBe("EUR");
    expect(getDefaultCurrency("en-US")).toBe("USD");
    expect(getDefaultCurrency("id")).toBe("IDR");
    expect(getDefaultCurrency("ja")).toBe("JPY");
    expect(getDefaultCurrency("zh-CN")).toBe("CNY");
  });

  it("converts displayed values through the hidden internal base", () => {
    expect(toInternalCurrency(100, "USD")).toBeCloseTo(92);
    expect(convertCurrencyValue(100, "USD", "EUR")).toBeCloseTo(92);
    expect(convertCurrencyValue(100, "EUR", "USD")).toBeCloseTo(108.6956, 3);
    expect(convertCurrencyValue(300, "EUR", "RUB")).toBeCloseTo(29411.7647, 2);
  });

  it("exposes one fixed, testable factor for every site-locale currency", () => {
    expect(SITE_LOCALE_CURRENCIES.map((item) => item.code)).toEqual([
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
    ]);
    expect(
      SITE_LOCALE_CURRENCIES.every(
        (item) => getCurrencyConversionFactor(item.code) > 0,
      ),
    ).toBe(true);
    expect(CURRENCY_CONVERSION_REFERENCE).toContain("not live exchange rates");
    expect(formatCurrencyWithSymbol(1250.5, "IDR")).toBe("Rp1,250.50");
  });
});
