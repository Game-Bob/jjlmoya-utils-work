export * from './entry';
export const SETTLEMENT_CALCULATOR_TOOL: ToolDefinition = {
  entry: settlementCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
