export interface ProjectFeeConfig {
  projectFee: number;
  estimatedHours: number;
  revisions: number;
  hoursPerRevision: number;
  meetings: number;
  hoursPerMeeting: number;
  directCosts: number;
  delayPercent: number;
  targetHourlyRate: number;
}

export interface ProjectFeeResult {
  revisionHours: number;
  meetingHours: number;
  hiddenHours: number;
  totalHours: number;
  bufferedHours: number;
  feeAfterCosts: number;
  effectiveHourlyRate: number;
  bufferedHourlyRate: number;
  recommendedFee: number;
  feeGap: number;
  targetGap: number;
}

const nonNegative = (value: number): number => (Number.isFinite(value) ? Math.max(0, value) : 0);

export const calculateProjectFee = (config: ProjectFeeConfig): ProjectFeeResult => {
  const projectFee = nonNegative(config.projectFee);
  const estimatedHours = nonNegative(config.estimatedHours);
  const revisionHours = nonNegative(config.revisions) * nonNegative(config.hoursPerRevision);
  const meetingHours = nonNegative(config.meetings) * nonNegative(config.hoursPerMeeting);
  const hiddenHours = revisionHours + meetingHours;
  const totalHours = estimatedHours + hiddenHours;
  const delayPercent = nonNegative(config.delayPercent);
  const bufferedHours = totalHours * (1 + delayPercent / 100);
  const feeAfterCosts = Math.max(0, projectFee - nonNegative(config.directCosts));
  const targetHourlyRate = nonNegative(config.targetHourlyRate);
  const recommendedFee = nonNegative(config.directCosts) + totalHours * targetHourlyRate;

  return {
    revisionHours,
    meetingHours,
    hiddenHours,
    totalHours,
    bufferedHours,
    feeAfterCosts,
    effectiveHourlyRate: totalHours > 0 ? feeAfterCosts / totalHours : 0,
    bufferedHourlyRate: bufferedHours > 0 ? feeAfterCosts / bufferedHours : 0,
    recommendedFee,
    feeGap: recommendedFee - projectFee,
    targetGap: targetHourlyRate - (totalHours > 0 ? feeAfterCosts / totalHours : 0),
  };
};
