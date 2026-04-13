import type { WorkToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import InvoiceGeneratorComponent from './component.astro';
import InvoiceGeneratorSEO from './seo.astro';
import InvoiceGeneratorBibliography from './bibliography.astro';
import type { InvoiceGeneratorUI } from './ui';

export type InvoiceGeneratorLocaleContent = ToolLocaleContent<InvoiceGeneratorUI>;

import { content as en } from './i18n/en';
import { content as es } from './i18n/es';
import { content as fr } from './i18n/fr';

export const invoiceGenerator: WorkToolEntry<InvoiceGeneratorUI> = {
  id: 'invoice-generator',
  icons: {
    bg: 'mdi:file-document-outline',
    fg: 'mdi:receipt',
  },
  i18n: {
    en: async () => en,
    es: async () => es,
    fr: async () => fr,
  },
};

export {
  InvoiceGeneratorComponent,
  InvoiceGeneratorSEO,
  InvoiceGeneratorBibliography,
};

export const INVOICE_GENERATOR_TOOL: ToolDefinition = {
  entry: invoiceGenerator,
  Component: InvoiceGeneratorComponent,
  SEOComponent: InvoiceGeneratorSEO,
  BibliographyComponent: InvoiceGeneratorBibliography,
};
