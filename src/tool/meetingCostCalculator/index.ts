import type { WorkToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import MeetingCostCalculatorComponent from './component.astro';
import MeetingCostCalculatorSEO from './seo.astro';
import MeetingCostCalculatorBibliography from './bibliography.astro';
import type { MeetingCostCalculatorUI } from './ui';

export type MeetingCostCalculatorLocaleContent = ToolLocaleContent<MeetingCostCalculatorUI>;

import { content as en } from './i18n/en';
import { content as es } from './i18n/es';
import { content as fr } from './i18n/fr';

export const meetingCostCalculator: WorkToolEntry<MeetingCostCalculatorUI> = {
  id: 'calculadora-coste-reunion',
  icons: {
    bg: 'mdi:account-group-outline',
    fg: 'mdi:currency-usd',
  },
  i18n: {
    en: async () => en,
    es: async () => es,
    fr: async () => fr,
  },
};

export {
  MeetingCostCalculatorComponent,
  MeetingCostCalculatorSEO,
  MeetingCostCalculatorBibliography,
};

export const MEETING_COST_CALCULATOR_TOOL: ToolDefinition = {
  entry: meetingCostCalculator,
  Component: MeetingCostCalculatorComponent,
  SEOComponent: MeetingCostCalculatorSEO,
  BibliographyComponent: MeetingCostCalculatorBibliography,
};
