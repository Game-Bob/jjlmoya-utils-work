import { resignationLetterGenerator } from './entry';
export * from './entry';
export const RESIGNATION_LETTER_GENERATOR_TOOL: ToolDefinition = {
  entry: resignationLetterGenerator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
