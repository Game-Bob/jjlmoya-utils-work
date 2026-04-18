import { autonomosCalculator } from './entry';
export * from './entry';
export const AUTONOMOS_CALCULATOR_TOOL: ToolDefinition = {
  entry: autonomosCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
