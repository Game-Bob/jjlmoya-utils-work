import type { WorkToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import EarlyRetirementSimulatorComponent from './component.astro';
import EarlyRetirementSimulatorSEO from './seo.astro';
import EarlyRetirementSimulatorBibliography from './bibliography.astro';
import type { EarlyRetirementSimulatorUI } from './ui';

export type EarlyRetirementSimulatorLocaleContent = ToolLocaleContent<EarlyRetirementSimulatorUI>;

import { content as en } from './i18n/en';
import { content as es } from './i18n/es';
import { content as fr } from './i18n/fr';

export const earlyRetirementSimulator: WorkToolEntry<EarlyRetirementSimulatorUI> = {
  id: 'simulador-jubilacion-anticipada',
  icons: {
    bg: 'mdi:calendar-clock-outline',
    fg: 'mdi:piggy-bank-outline',
  },
  i18n: {
    en: async () => en,
    es: async () => es,
    fr: async () => fr,
  },
};

export {
  EarlyRetirementSimulatorComponent,
  EarlyRetirementSimulatorSEO,
  EarlyRetirementSimulatorBibliography,
};

export const EARLY_RETIREMENT_SIMULATOR_TOOL: ToolDefinition = {
  entry: earlyRetirementSimulator,
  Component: EarlyRetirementSimulatorComponent,
  SEOComponent: EarlyRetirementSimulatorSEO,
  BibliographyComponent: EarlyRetirementSimulatorBibliography,
};
