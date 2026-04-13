import type { WorkToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import ReverseVatCalculatorComponent from './component.astro';
import ReverseVatCalculatorSEO from './seo.astro';
import ReverseVatCalculatorBibliography from './bibliography.astro';
import type { ReverseVatCalculatorUI } from './ui';

export type ReverseVatCalculatorLocaleContent = ToolLocaleContent<ReverseVatCalculatorUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const reverseVatCalculator: WorkToolEntry<ReverseVatCalculatorUI> = {
  id: 'calculadora-iva-inverso',
  icons: {
    bg: 'mdi:receipt-text-outline',
    fg: 'mdi:percent',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export {
  ReverseVatCalculatorComponent,
  ReverseVatCalculatorSEO,
  ReverseVatCalculatorBibliography,
};

export const REVERSE_VAT_CALCULATOR_TOOL: ToolDefinition = {
  entry: reverseVatCalculator,
  Component: ReverseVatCalculatorComponent,
  SEOComponent: ReverseVatCalculatorSEO,
  BibliographyComponent: ReverseVatCalculatorBibliography,
};
