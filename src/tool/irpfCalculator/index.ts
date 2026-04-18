import { irpfCalculator } from './entry';
export * from './entry';
export const IRPF_CALCULATOR_TOOL: ToolDefinition = {
  entry: irpfCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
