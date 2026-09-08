import type { ToolDefinition } from '../../types';
import { invoiceLateFeeCalculator } from './entry';

export * from './entry';

export const INVOICE_LATE_FEE_CALCULATOR_TOOL: ToolDefinition = {
  entry: invoiceLateFeeCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
