export * from './entry';
export const EARLY_RETIREMENT_SIMULATOR_TOOL: ToolDefinition = {
  entry: earlyRetirementSimulator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
