import { describe, expect, it } from 'vitest';
import { calculateProjectFee } from '../tool/projectFeeCalculator/logic';

describe('Project fee to hourly rate calculator', () => {
  it('includes revisions and meetings in the effective rate', () => {
    const result = calculateProjectFee({
      projectFee: 2400,
      estimatedHours: 24,
      revisions: 2,
      hoursPerRevision: 2,
      meetings: 3,
      hoursPerMeeting: 0.75,
      directCosts: 120,
      delayPercent: 25,
      targetHourlyRate: 75,
    });

    expect(result.hiddenHours).toBe(6.25);
    expect(result.totalHours).toBe(30.25);
    expect(result.feeAfterCosts).toBe(2280);
    expect(result.effectiveHourlyRate).toBeCloseTo(75.3719, 3);
    expect(result.bufferedHourlyRate).toBeCloseTo(60.2975, 3);
    expect(result.recommendedFee).toBe(2388.75);
    expect(result.feeGap).toBeCloseTo(-11.25, 6);
  });

  it('keeps the recommended fee tied to the freelancer target', () => {
    const result = calculateProjectFee({
      projectFee: 1000,
      estimatedHours: 10,
      revisions: 1,
      hoursPerRevision: 1,
      meetings: 1,
      hoursPerMeeting: 1,
      directCosts: 100,
      delayPercent: 50,
      targetHourlyRate: 100,
    });

    expect(result.recommendedFee).toBe(1300);
    expect(result.bufferedHours).toBe(18);
    expect(result.bufferedHourlyRate).toBe(50);
  });

  it('clamps invalid or negative inputs without producing NaN', () => {
    const result = calculateProjectFee({
      projectFee: -100,
      estimatedHours: Number.NaN,
      revisions: -2,
      hoursPerRevision: 4,
      meetings: 2,
      hoursPerMeeting: -1,
      directCosts: 500,
      delayPercent: -25,
      targetHourlyRate: 80,
    });

    expect(result.hiddenHours).toBe(0);
    expect(result.totalHours).toBe(0);
    expect(result.bufferedHours).toBe(0);
    expect(result.effectiveHourlyRate).toBe(0);
    expect(result.bufferedHourlyRate).toBe(0);
    expect(result.recommendedFee).toBe(500);
  });
});
