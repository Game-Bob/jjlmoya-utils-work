export interface MeetingCostCalculatorUI extends Record<string, string> {
  labelAccumulated: string;
  labelAttendees: string;
  labelSalary: string;
  optAnnual: string;
  optHourly: string;
  btnStart: string;
  btnPause: string;
  btnResume: string;
  btnReset: string;
  currencySymbol: string;
  defaultSalary: string;
  numberLocale: string;
}
