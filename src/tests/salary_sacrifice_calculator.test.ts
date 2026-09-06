import { describe, expect, it } from "vitest";
import { calculateSalarySacrifice } from "../tool/salarySacrificeCalculator/logic";

describe("salary sacrifice calculator", () => {
  it("compares annual and per-pay cash impact", () => {
    const result = calculateSalarySacrifice({
      annualGross: 60000,
      contributionAmount: 500,
      contributionBasis: "perPay",
      payPeriods: 12,
      incomeTaxRate: 30,
      payrollDeductionRate: 6.5,
    });

    expect(result.valid).toBe(true);
    expect(result.annualContribution).toBe(6000);
    expect(result.cashBefore).toBeCloseTo(38100);
    expect(result.cashAfter).toBeCloseTo(34290);
    expect(result.totalSavings).toBeCloseTo(2190);
    expect(result.effectiveCost).toBeCloseTo(3810);
    expect(result.cashDropPerPay).toBeCloseTo(317.5);
  });

  it("converts an annual amount across fourteen pays", () => {
    const result = calculateSalarySacrifice({
      annualGross: 42000,
      contributionAmount: 4200,
      contributionBasis: "annual",
      payPeriods: 14,
      incomeTaxRate: 25,
      payrollDeductionRate: 5,
    });

    expect(result.valid).toBe(true);
    expect(result.contributionPerPay).toBeCloseTo(300);
    expect(result.cashBeforePerPay).toBeCloseTo(2100);
    expect(result.cashAfterPerPay).toBeCloseTo(1890);
  });

  it("rejects a contribution larger than gross salary", () => {
    const result = calculateSalarySacrifice({
      annualGross: 1000,
      contributionAmount: 1001,
      contributionBasis: "annual",
      payPeriods: 12,
      incomeTaxRate: 20,
      payrollDeductionRate: 5,
    });

    expect(result.valid).toBe(false);
    expect(result.errors).toContain("contribution");
  });

  it("rejects invalid or incompatible rates", () => {
    const result = calculateSalarySacrifice({
      annualGross: 30000,
      contributionAmount: 3000,
      contributionBasis: "annual",
      payPeriods: 12,
      incomeTaxRate: 75,
      payrollDeductionRate: 30,
    });

    expect(result.valid).toBe(false);
    expect(result.errors).toContain("combinedRate");
  });

  it("allows a zero contribution as a neutral comparison", () => {
    const result = calculateSalarySacrifice({
      annualGross: 30000,
      contributionAmount: 0,
      contributionBasis: "annual",
      payPeriods: 12,
      incomeTaxRate: 20,
      payrollDeductionRate: 5,
    });

    expect(result.valid).toBe(true);
    expect(result.cashDrop).toBe(0);
    expect(result.savingsShare).toBe(0);
  });
});
