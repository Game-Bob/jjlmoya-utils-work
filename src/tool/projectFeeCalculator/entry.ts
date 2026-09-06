import type { WorkToolEntry, ToolLocaleContent } from '../../types';
import type { ProjectFeeCalculatorUI } from './ui';

export type ProjectFeeCalculatorLocaleContent = ToolLocaleContent<ProjectFeeCalculatorUI>;

import { content as en } from './i18n/en';
import { getLocalizedProjectFeeContent } from './i18n/localized';

export const projectFeeCalculator: WorkToolEntry<ProjectFeeCalculatorUI> = {
  id: 'calculadora-tarifa-efectiva-proyecto',
  icons: {
    bg: 'mdi:scale-balance',
    fg: 'mdi:clock-check-outline',
  },
  i18n: {
    de: async () => getLocalizedProjectFeeContent('de'),
    en: async () => en,
    es: async () => getLocalizedProjectFeeContent('es'),
    fr: async () => getLocalizedProjectFeeContent('fr'),
    id: async () => getLocalizedProjectFeeContent('id'),
    it: async () => getLocalizedProjectFeeContent('it'),
    ja: async () => getLocalizedProjectFeeContent('ja'),
    ko: async () => getLocalizedProjectFeeContent('ko'),
    nl: async () => getLocalizedProjectFeeContent('nl'),
    pl: async () => getLocalizedProjectFeeContent('pl'),
    pt: async () => getLocalizedProjectFeeContent('pt'),
    ru: async () => getLocalizedProjectFeeContent('ru'),
    sv: async () => getLocalizedProjectFeeContent('sv'),
    tr: async () => getLocalizedProjectFeeContent('tr'),
    zh: async () => getLocalizedProjectFeeContent('zh'),
  },
};
