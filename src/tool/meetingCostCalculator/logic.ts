export type SalaryType = 'annual' | 'hourly';

export interface MeetingConfig {
  attendees: number;
  salary: number;
  salaryType: SalaryType;
}

export class MeetingCostService {
  private static readonly ANNUAL_HOURS = 1750;

  static calculateBurnRatePerSecond(config: MeetingConfig): number {
    const hourlyRate =
      config.salaryType === 'hourly'
        ? config.salary
        : config.salary / this.ANNUAL_HOURS;
    return (hourlyRate * config.attendees) / 3600;
  }

  static formatCurrency(amount: number, locale: string): string {
    return amount.toLocaleString(locale, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
}
