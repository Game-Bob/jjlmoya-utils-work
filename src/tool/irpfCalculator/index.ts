import type { WorkToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import IrpfCalculatorComponent from './component.astro';
import IrpfCalculatorSEO from './seo.astro';
import IrpfCalculatorBibliography from './bibliography.astro';
import type { IrpfCalculatorUI } from './ui';

export type IrpfCalculatorLocaleContent = ToolLocaleContent<IrpfCalculatorUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const irpfCalculator: WorkToolEntry<IrpfCalculatorUI> = {
  id: 'calculadora-irpf',
  icons: {
    bg: 'mdi:calculator-variant-outline',
    fg: 'mdi:cash-multiple',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { IrpfCalculatorComponent, IrpfCalculatorSEO, IrpfCalculatorBibliography };

export const IRPF_CALCULATOR_TOOL: ToolDefinition = {
  entry: irpfCalculator,
  Component: IrpfCalculatorComponent,
  SEOComponent: IrpfCalculatorSEO,
  BibliographyComponent: IrpfCalculatorBibliography,
};
