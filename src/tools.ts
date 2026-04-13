import type { ToolDefinition } from './types';
import { IRPF_CALCULATOR_TOOL } from './tool/irpfCalculator/index';
import { SALARY_CALCULATOR_TOOL } from './tool/salaryCalculator/index';
import { AUTONOMOS_CALCULATOR_TOOL } from './tool/autonomosCalculator/index';
import { REVERSE_VAT_CALCULATOR_TOOL } from './tool/reverseVatCalculator/index';
import { INVOICE_GENERATOR_TOOL } from './tool/invoiceGenerator/index';
import { MEETING_COST_CALCULATOR_TOOL } from './tool/meetingCostCalculator/index';
import { SETTLEMENT_CALCULATOR_TOOL } from './tool/settlementCalculator/index';
import { RESIGNATION_LETTER_GENERATOR_TOOL } from './tool/resignationLetterGenerator/index';
import { EARLY_RETIREMENT_SIMULATOR_TOOL } from './tool/earlyRetirementSimulator/index';
import { NIE_NIF_VERIFIER_TOOL } from './tool/nieNifVerifier/index';

export const ALL_TOOLS: ToolDefinition[] = [
  IRPF_CALCULATOR_TOOL,
  SALARY_CALCULATOR_TOOL,
  AUTONOMOS_CALCULATOR_TOOL,
  REVERSE_VAT_CALCULATOR_TOOL,
  INVOICE_GENERATOR_TOOL,
  MEETING_COST_CALCULATOR_TOOL,
  SETTLEMENT_CALCULATOR_TOOL,
  RESIGNATION_LETTER_GENERATOR_TOOL,
  EARLY_RETIREMENT_SIMULATOR_TOOL,
  NIE_NIF_VERIFIER_TOOL,
];

