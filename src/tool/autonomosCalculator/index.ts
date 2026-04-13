import type { WorkToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import AutonomosCalculatorComponent from './component.astro';
import AutonomosCalculatorSEO from './seo.astro';
import AutonomosCalculatorBibliography from './bibliography.astro';
import type { AutonomosCalculatorUI } from './ui';

export type AutonomosCalculatorLocaleContent = ToolLocaleContent<AutonomosCalculatorUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const autonomosCalculator: WorkToolEntry<AutonomosCalculatorUI> = {
  id: 'calculadora-cuota-autonomos-2026',
  icons: {
    bg: 'mdi:briefcase-account-outline',
    fg: 'mdi:account-hard-hat',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export {
  AutonomosCalculatorComponent,
  AutonomosCalculatorSEO,
  AutonomosCalculatorBibliography,
};

export const AUTONOMOS_CALCULATOR_TOOL: ToolDefinition = {
  entry: autonomosCalculator,
  Component: AutonomosCalculatorComponent,
  SEOComponent: AutonomosCalculatorSEO,
  BibliographyComponent: AutonomosCalculatorBibliography,
};
