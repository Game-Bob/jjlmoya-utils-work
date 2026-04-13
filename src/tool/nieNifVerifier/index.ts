import type { WorkToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import NieNifVerifierComponent from './component.astro';
import NieNifVerifierSEO from './seo.astro';
import NieNifVerifierBibliography from './bibliography.astro';
import type { NieNifVerifierUI } from './ui';

export type NieNifVerifierLocaleContent = ToolLocaleContent<NieNifVerifierUI>;

import { content as en } from './i18n/en';
import { content as es } from './i18n/es';
import { content as fr } from './i18n/fr';

export const nieNifVerifier: WorkToolEntry<NieNifVerifierUI> = {
  id: 'verificador-nie-nif',
  icons: {
    bg: 'mdi:card-account-details-outline',
    fg: 'mdi:shield-check-outline',
  },
  i18n: {
    en: async () => en,
    es: async () => es,
    fr: async () => fr,
  },
};

export { NieNifVerifierComponent, NieNifVerifierSEO, NieNifVerifierBibliography };

export const NIE_NIF_VERIFIER_TOOL: ToolDefinition = {
  entry: nieNifVerifier,
  Component: NieNifVerifierComponent,
  SEOComponent: NieNifVerifierSEO,
  BibliographyComponent: NieNifVerifierBibliography,
};
