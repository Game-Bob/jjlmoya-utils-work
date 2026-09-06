import type { ToolDefinition } from '../../types';
import { projectFeeCalculator } from './entry';

export * from './entry';

export const PROJECT_FEE_CALCULATOR_TOOL: ToolDefinition = {
  entry: projectFeeCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
