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
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

