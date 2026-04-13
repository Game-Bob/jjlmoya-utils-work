export interface EarlyRetirementSimulatorUI extends Record<string, string> {
  labelBirthYear: string;
  labelContributions: string;
  labelBasePension: string;
  labelRetirementAge: string;
  labelExpectedDate: string;
  labelEstimatedPension: string;
  labelPermanentReduction: string;
  labelYears: string;
  btnLegalTitle: string;
  btnLegalDesc: string;
  btnVoluntaryTitle: string;
  btnVoluntaryDesc: string;
  btnInvoluntaryTitle: string;
  btnInvoluntaryDesc: string;
  defaultBirthYear: string;
  defaultContributions: string;
  defaultBasePension: string;
  adviceDefault: string;
  adviceDelay: string;
  adviceBonus: string;
  adviceOptimal: string;
}
