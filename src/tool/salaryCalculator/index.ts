import { salaryCalculator } from './entry';
export * from './entry';
export const SALARY_CALCULATOR_TOOL: ToolDefinition = {
  entry: salaryCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
