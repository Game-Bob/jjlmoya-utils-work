import type { WorkToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import InvoiceGeneratorComponent from './component.astro';
import InvoiceGeneratorSEO from './seo.astro';
import InvoiceGeneratorBibliography from './bibliography.astro';
import type { InvoiceGeneratorUI } from './ui';

export type InvoiceGeneratorLocaleContent = ToolLocaleContent<InvoiceGeneratorUI>;

import { content as en } from './i18n/en';
import { content as es } from './i18n/es';
import { content as fr } from './i18n/fr';
import { content as de } from './i18n/de';
import { content as id } from './i18n/id';
import { content as it } from './i18n/it';
import { content as ja } from './i18n/ja';
import { content as ko } from './i18n/ko';
import { content as nl } from './i18n/nl';
import { content as pl } from './i18n/pl';
import { content as pt } from './i18n/pt';
import { content as ru } from './i18n/ru';
import { content as sv } from './i18n/sv';
import { content as tr } from './i18n/tr';
import { content as zh } from './i18n/zh';

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
    de: async () => de,
    id: async () => id,
    it: async () => it,
    ja: async () => ja,
    ko: async () => ko,
    nl: async () => nl,
    pl: async () => pl,
    pt: async () => pt,
    ru: async () => ru,
    sv: async () => sv,
    tr: async () => tr,
    zh: async () => zh,
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
