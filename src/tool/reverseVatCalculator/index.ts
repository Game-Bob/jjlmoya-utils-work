export * from './entry';
export const REVERSE_VAT_CALCULATOR_TOOL: ToolDefinition = {
  entry: reverseVatCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
