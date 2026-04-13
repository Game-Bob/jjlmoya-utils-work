import type { WorkToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import ResignationLetterGeneratorComponent from './component.astro';
import ResignationLetterGeneratorSEO from './seo.astro';
import ResignationLetterGeneratorBibliography from './bibliography.astro';
import type { ResignationLetterGeneratorUI } from './ui';

export type ResignationLetterGeneratorLocaleContent = ToolLocaleContent<ResignationLetterGeneratorUI>;

import { content as en } from './i18n/en';
import { content as es } from './i18n/es';
import { content as fr } from './i18n/fr';

export const resignationLetterGenerator: WorkToolEntry<ResignationLetterGeneratorUI> = {
  id: 'generador-carta-renuncia',
  icons: {
    bg: 'mdi:file-document-edit-outline',
    fg: 'mdi:pen',
  },
  i18n: {
    en: async () => en,
    es: async () => es,
    fr: async () => fr,
  },
};

export {
  ResignationLetterGeneratorComponent,
  ResignationLetterGeneratorSEO,
  ResignationLetterGeneratorBibliography,
};

export const RESIGNATION_LETTER_GENERATOR_TOOL: ToolDefinition = {
  entry: resignationLetterGenerator,
  Component: ResignationLetterGeneratorComponent,
  SEOComponent: ResignationLetterGeneratorSEO,
  BibliographyComponent: ResignationLetterGeneratorBibliography,
};
