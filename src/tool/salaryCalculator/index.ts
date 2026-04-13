import type { WorkToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import SalaryCalculatorComponent from './component.astro';
import SalaryCalculatorSEO from './seo.astro';
import SalaryCalculatorBibliography from './bibliography.astro';
import type { SalaryCalculatorUI } from './ui';

export type SalaryCalculatorLocaleContent = ToolLocaleContent<SalaryCalculatorUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const salaryCalculator: WorkToolEntry<SalaryCalculatorUI> = {
  id: 'calculadora-sueldo-neto',
  icons: {
    bg: 'mdi:bank-outline',
    fg: 'mdi:cash-multiple',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { SalaryCalculatorComponent, SalaryCalculatorSEO, SalaryCalculatorBibliography };

export const SALARY_CALCULATOR_TOOL: ToolDefinition = {
  entry: salaryCalculator,
  Component: SalaryCalculatorComponent,
  SEOComponent: SalaryCalculatorSEO,
  BibliographyComponent: SalaryCalculatorBibliography,
};
