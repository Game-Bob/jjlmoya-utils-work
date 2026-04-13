export class TaxCalculator {
  private static STATE_SCALE = [
    { limit: 12450, rate: 0.095 },
    { limit: 20200, rate: 0.12 },
    { limit: 35200, rate: 0.15 },
    { limit: 60000, rate: 0.185 },
    { limit: 300000, rate: 0.225 },
    { limit: Infinity, rate: 0.245 },
  ];

  private static AUTO_OFFSET: Record<string, number> = {
    MAD: -0.02,
    CAT: 0.015,
    AND: -0.01,
    VAL: 0.01,
    PV: -0.025,
    NAV: -0.02,
    GEN: 0,
  };

  static calculate(params: {
    salary: number;
    pagas: number;
    comunidad: string;
    estado: string;
    hijos: number;
    discapacidad: number;
  }) {
    if (params.salary <= 0) return this.zeroResult();

    const ssAnual = this.calculateSocialSecurity(params.salary);
    const totalDeducible = this.calculateDeductible(params.salary);
    const baseLiquidable = Math.max(0, params.salary - ssAnual - totalDeducible);

    const totalExempt = this.calculateTotalExempt(params);
    const off = this.AUTO_OFFSET[params.comunidad] || 0;

    const ciBase = this.calculateCuota(baseLiquidable, off);
    const ciMin = this.calculateCuota(totalExempt, off);

    const totalTax = Math.max(0, ciBase - ciMin);
    const netAnual = params.salary - ssAnual - totalTax;
    const marginal = this.calculateMarginal(baseLiquidable, off);

    return this.formatResult({
      netAnual,
      pagas: params.pagas,
      totalTax,
      salary: params.salary,
      ssAnual,
      totalDeducible,
      marginal,
    });
  }

  private static zeroResult() {
    return {
      netAnual: 0,
      netMensual: 0,
      totalTax: 0,
      irpfPerc: 0,
      ssAnual: 0,
      totalDeducible: 0,
      netPerc: 0,
      marginal: 0,
    };
  }

  private static formatResult(data: {
    netAnual: number;
    pagas: number;
    totalTax: number;
    salary: number;
    ssAnual: number;
    totalDeducible: number;
    marginal: number;
  }) {
    return {
      netAnual: data.netAnual,
      netMensual: data.netAnual / data.pagas,
      totalTax: data.totalTax,
      irpfPerc: (data.totalTax / data.salary) * 100,
      ssAnual: data.ssAnual,
      totalDeducible: data.totalDeducible,
      netPerc: (data.netAnual / data.salary) * 100,
      marginal: data.marginal,
    };
  }

  private static calculateSocialSecurity(salary: number): number {
    const ssRate = 0.0647;
    return Math.min(salary, 54000) * ssRate;
  }

  private static calculateDeductible(salary: number): number {
    const reduction =
      salary < 19747
        ? Math.max(0, 6498 - (salary > 14852 ? 1.14 * (salary - 14852) : 0))
        : 0;
    return reduction + 2000;
  }

  private static calculateTotalExempt(params: {
    estado: string;
    hijos: number;
    discapacidad: number;
  }): number {
    let baseExempt = 5550;
    if (params.discapacidad >= 33) baseExempt += 3000;
    if (params.discapacidad >= 65) baseExempt += 9000;
    const childDeductions = [2400, 2700, 4000, 4500];
    for (let i = 0; i < params.hijos; i++) {
      const deduction = childDeductions[Math.min(i, 3)];
      if (deduction !== undefined) baseExempt += deduction;
    }

    let situationAdjustment = 0;
    if (params.estado === 'soltero' && params.hijos > 0)
      situationAdjustment = 1200;
    else if (params.estado === 'casado-low')
      situationAdjustment = 1620 + params.hijos * 600;

    return baseExempt + situationAdjustment;
  }

  private static calculateCuota(base: number, offset: number): number {
    const stateScale = this.STATE_SCALE.map((b) => ({
      ...b,
      rate: b.rate + offset,
    }));
    let cuota = 0,
      prev = 0;
    for (const step of stateScale) {
      if (base > prev) {
        cuota += Math.min(base - prev, step.limit - prev) * step.rate;
        prev = step.limit;
      } else break;
    }
    return cuota;
  }

  private static calculateMarginal(base: number, offset: number): number {
    const rate =
      this.STATE_SCALE.find((b) => base < b.limit)?.rate || 0.245;
    return rate * 200 + offset * 100;
  }
}
