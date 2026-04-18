export * from './entry';
export const MEETING_COST_CALCULATOR_TOOL: ToolDefinition = {
  entry: meetingCostCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
