import { describe, expect, it } from "vitest";
import { calculateOvertimePay } from "../tool/overtimePayCalculator/logic";

describe("Overtime pay calculator", () => {
  it("calculates hourly pay, premium and gross total", () => {
    const result = calculateOvertimePay({
      basis: "hourly",
      baseAmount: 20,
      regularHours: 160,
      overtimeHours: 10,
      multiplier: 1.5,
    });

    expect(result.valid).toBe(true);
    expect(result.hourlyRate).toBe(20);
    expect(result.regularPay).toBe(3200);
    expect(result.overtimePay).toBe(300);
    expect(result.premium).toBe(100);
    expect(result.totalGross).toBe(3500);
    expect(result.effectiveRate).toBeCloseTo(20.588235, 5);
  });

  it("derives the same result from a period salary", () => {
    const result = calculateOvertimePay({
      basis: "period",
      baseAmount: 3200,
      regularHours: 160,
      overtimeHours: 10,
      multiplier: 1.5,
    });

    expect(result.hourlyRate).toBe(20);
    expect(result.overtimePay).toBe(300);
    expect(result.totalGross).toBe(3500);
  });

  it("keeps scenarios comparable while changing only the multiplier", () => {
    const result = calculateOvertimePay({
      basis: "hourly",
      baseAmount: 20,
      regularHours: 160,
      overtimeHours: 10,
      multiplier: 1.5,
    });

    expect(result.scenarios.map((scenario) => scenario.multiplier)).toEqual([
      1, 1.25, 1.5, 2,
    ]);
    expect(result.scenarios.map((scenario) => scenario.overtimePay)).toEqual([
      200, 250, 300, 400,
    ]);
    expect(result.scenarios.map((scenario) => scenario.totalGross)).toEqual([
      3400, 3450, 3500, 3600,
    ]);
  });

  it("rejects unusable base values", () => {
    const result = calculateOvertimePay({
      basis: "hourly",
      baseAmount: 20,
      regularHours: 0,
      overtimeHours: 10,
      multiplier: 1.5,
    });

    expect(result.valid).toBe(false);
    expect(result.scenarios).toEqual([]);
  });
});
