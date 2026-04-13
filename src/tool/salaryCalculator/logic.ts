export class SalaryCalculator {
  private static readonly BRACKETS = [
    { limit: 12450, rate: 0.19 },
    { limit: 20200, rate: 0.24 },
    { limit: 35200, rate: 0.3 },
    { limit: 60000, rate: 0.37 },
    { limit: 300000, rate: 0.45 },
    { limit: Infinity, rate: 0.47 },
  ];

  private static readonly PERSONAL_ALLOWANCE = 5550;
  private static readonly SS_RATE = 0.0635;
  private static readonly DEDUCTION = 2000;
  private static readonly MIN_TAXABLE = 15876;

  static calculate(gross: number, pays: number) {
    if (gross <= 0) return this.zeroResult();

    const ssTotal = this.calculateSocialSecurity(gross);
    const taxableBase = Math.max(0, gross - ssTotal - this.DEDUCTION);
    const irpfTotal = this.calculateIRPF(gross, taxableBase);
    const net = gross - irpfTotal - ssTotal;

    return {
      irpfTotal,
      ssTotal,
      net,
      netMonthly: net / pays,
      irpfPercent: (irpfTotal / gross) * 100,
    };
  }

  private static zeroResult() {
    return {
      irpfTotal: 0,
      ssTotal: 0,
      net: 0,
      netMonthly: 0,
      irpfPercent: 0,
    };
  }

  private static calculateSocialSecurity(gross: number): number {
    return gross * this.SS_RATE;
  }

  private static calculateIRPF(gross: number, taxableBase: number): number {
    if (gross < this.MIN_TAXABLE) return 0;

    const fullTax = this.getTaxForAmount(taxableBase);
    const minTax = this.getTaxForAmount(this.PERSONAL_ALLOWANCE);
    const finalTax = Math.max(0, fullTax - minTax);

    return finalTax;
  }

  private static getTaxForAmount(amount: number): number {
    let tax = 0;
    let previousLimit = 0;

    for (const bracket of this.BRACKETS) {
      if (amount > previousLimit) {
        const taxableInBracket =
          Math.min(amount, bracket.limit) - previousLimit;
        tax += taxableInBracket * bracket.rate;
        previousLimit = bracket.limit;
      } else {
        break;
      }
    }

    return tax;
  }
}
