import type { WorkToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import SettlementCalculatorComponent from './component.astro';
import SettlementCalculatorSEO from './seo.astro';
import SettlementCalculatorBibliography from './bibliography.astro';
import type { SettlementCalculatorUI } from './ui';

export type SettlementCalculatorLocaleContent = ToolLocaleContent<SettlementCalculatorUI>;

import { content as en } from './i18n/en';
import { content as es } from './i18n/es';
import { content as fr } from './i18n/fr';

export const settlementCalculator: WorkToolEntry<SettlementCalculatorUI> = {
  id: 'calculadora-finiquito-indemnizacion',
  icons: {
    bg: 'mdi:briefcase-remove-outline',
    fg: 'mdi:currency-eur',
  },
  i18n: {
    en: async () => en,
    es: async () => es,
    fr: async () => fr,
  },
};

export {
  SettlementCalculatorComponent,
  SettlementCalculatorSEO,
  SettlementCalculatorBibliography,
};

export const SETTLEMENT_CALCULATOR_TOOL: ToolDefinition = {
  entry: settlementCalculator,
  Component: SettlementCalculatorComponent,
  SEOComponent: SettlementCalculatorSEO,
  BibliographyComponent: SettlementCalculatorBibliography,
};
