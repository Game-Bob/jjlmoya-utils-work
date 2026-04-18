import type { WorkCategoryEntry } from '../types';
import { irpfCalculator } from '../tool/irpfCalculator/index';
import { salaryCalculator } from '../tool/salaryCalculator/index';
import { autonomosCalculator } from '../tool/autonomosCalculator/index';
import { reverseVatCalculator } from '../tool/reverseVatCalculator/index';
import { invoiceGenerator } from '../tool/invoiceGenerator/index';
import { meetingCostCalculator } from '../tool/meetingCostCalculator/index';
import { settlementCalculator } from '../tool/settlementCalculator/index';
import { resignationLetterGenerator } from '../tool/resignationLetterGenerator/index';
import { earlyRetirementSimulator } from '../tool/earlyRetirementSimulator/index';
import { nieNifVerifier } from '../tool/nieNifVerifier/index';

export const workCategory: WorkCategoryEntry = {
  icon: 'mdi:briefcase',
  tools: [irpfCalculator, salaryCalculator, autonomosCalculator, reverseVatCalculator, invoiceGenerator, meetingCostCalculator, settlementCalculator, resignationLetterGenerator, earlyRetirementSimulator, nieNifVerifier],
  i18n: {
    en: () => import('./i18n/en').then((m) => m.content),
    es: () => import('./i18n/es').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
    de: () => import('./i18n/de').then((m) => m.content),
    id: () => import('./i18n/id').then((m) => m.content),
    it: () => import('./i18n/it').then((m) => m.content),
    ja: () => import('./i18n/ja').then((m) => m.content),
    ko: () => import('./i18n/ko').then((m) => m.content),
    nl: () => import('./i18n/nl').then((m) => m.content),
    pl: () => import('./i18n/pl').then((m) => m.content),
    pt: () => import('./i18n/pt').then((m) => m.content),
    ru: () => import('./i18n/ru').then((m) => m.content),
    sv: () => import('./i18n/sv').then((m) => m.content),
    tr: () => import('./i18n/tr').then((m) => m.content),
    zh: () => import('./i18n/zh').then((m) => m.content),
  },
};

