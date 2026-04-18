export * from './entry';
export const INVOICE_GENERATOR_TOOL: ToolDefinition = {
  entry: invoiceGenerator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
