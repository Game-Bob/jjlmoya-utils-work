import { nieNifVerifier } from './entry';
export * from './entry';
export const NIE_NIF_VERIFIER_TOOL: ToolDefinition = {
  entry: nieNifVerifier,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
