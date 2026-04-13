export { workCategory } from './category';
export { default as workCategorySEO } from './category/seo.astro';

export type {
  KnownLocale,
  FAQItem,
  BibliographyEntry,
  HowToStep,
  ToolLocaleContent,
  CategoryLocaleContent,
  LocaleLoader,
  LocaleMap,
  WorkToolEntry,
  WorkCategoryEntry,
  ToolDefinition,
} from './types';

export { ALL_TOOLS } from './tools';

export { IRPF_CALCULATOR_TOOL } from './tool/irpfCalculator/index';
export { SALARY_CALCULATOR_TOOL } from './tool/salaryCalculator/index';
export { AUTONOMOS_CALCULATOR_TOOL } from './tool/autonomosCalculator/index';
export { REVERSE_VAT_CALCULATOR_TOOL } from './tool/reverseVatCalculator/index';
export { INVOICE_GENERATOR_TOOL } from './tool/invoiceGenerator/index';
export { MEETING_COST_CALCULATOR_TOOL } from './tool/meetingCostCalculator/index';
export { SETTLEMENT_CALCULATOR_TOOL } from './tool/settlementCalculator/index';
export { RESIGNATION_LETTER_GENERATOR_TOOL } from './tool/resignationLetterGenerator/index';
export { EARLY_RETIREMENT_SIMULATOR_TOOL } from './tool/earlyRetirementSimulator/index';
export { NIE_NIF_VERIFIER_TOOL } from './tool/nieNifVerifier/index';

