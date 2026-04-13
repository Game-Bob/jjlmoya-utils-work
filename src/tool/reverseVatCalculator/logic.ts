export class ReverseVatCalculator {
  static calculate(total: number, ratePercent: number) {
    if (total <= 0 || isNaN(total)) {
      return { base: 0, vat: 0 };
    }
    const base = total / (1 + ratePercent / 100);
    const vat = total - base;
    return { base, vat };
  }
}
