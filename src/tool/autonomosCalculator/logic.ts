export const TRAMOS = [
  { min: 0, max: 670, cuota: 200, label: 'Tramo 1 (Reducido)' },
  { min: 670, max: 900, cuota: 220, label: 'Tramo 2 (Reducido)' },
  { min: 900, max: 1166.7, cuota: 260, label: 'Tramo 3 (Reducido)' },
  { min: 1166.7, max: 1300, cuota: 291, label: 'Tramo 1 (Base)' },
  { min: 1300, max: 1500, cuota: 294, label: 'Tramo 2 (Base)' },
  { min: 1500, max: 1700, cuota: 294, label: 'Tramo 3 (Base)' },
  { min: 1700, max: 1850, cuota: 310, label: 'Tramo 4 (Base)' },
  { min: 1850, max: 2030, cuota: 315, label: 'Tramo 5 (Base)' },
  { min: 2030, max: 2330, cuota: 320, label: 'Tramo 6 (Base)' },
  { min: 2330, max: 2760, cuota: 330, label: 'Tramo 7 (Base)' },
  { min: 2760, max: 3190, cuota: 350, label: 'Tramo 8 (Base)' },
  { min: 3190, max: 3620, cuota: 370, label: 'Tramo 9 (Base)' },
  { min: 3620, max: 4050, cuota: 390, label: 'Tramo 10 (Base)' },
  { min: 4050, max: 6000, cuota: 445, label: 'Tramo 11 (Base)' },
  { min: 6000, max: 999999, cuota: 590, label: 'Tramo 12 (Base)' },
] as const;

type Tramo = (typeof TRAMOS)[number];

export class AutonomosCalculator {
  static calculate(params: {
    income: number;
    expenses: number;
    isSocietario: boolean;
    isFlatRate: boolean;
  }) {
    const { income, expenses, isSocietario, isFlatRate } = params;

    const marginProfit = income - expenses;
    const genDeduction = isSocietario ? 0.03 : 0.07;
    const rendimientoNeto = marginProfit * (1 - genDeduction);

    const { cuota, selectedTramo } = this.getCuota(
      rendimientoNeto,
      isFlatRate
    );
    const baseCotizacion = cuota / 0.312;

    return {
      rendimientoNeto: Math.max(0, rendimientoNeto),
      cuota,
      baseCotizacion,
      netAfter: Math.max(0, rendimientoNeto - cuota),
      bracketLabel: selectedTramo.label,
    };
  }

  private static readonly LAST_TRAMO = TRAMOS[14] as Tramo;

  private static findTramo(rendimientoNeto: number): Tramo {
    const found = TRAMOS.find(
      (t) => rendimientoNeto >= t.min && rendimientoNeto < t.max
    );
    return found ?? this.LAST_TRAMO;
  }

  private static getCuota(
    rendimientoNeto: number,
    isFlatRate: boolean
  ): { cuota: number; selectedTramo: Tramo } {
    if (isFlatRate) {
      const selectedTramo = this.findTramo(rendimientoNeto);
      return { cuota: 80, selectedTramo };
    }

    const selectedTramo = this.findTramo(rendimientoNeto);
    let cuota = selectedTramo.cuota;

    if (rendimientoNeto > 0) {
      cuota += Math.round(selectedTramo.cuota * 0.01);
    }

    return { cuota, selectedTramo };
  }
}
