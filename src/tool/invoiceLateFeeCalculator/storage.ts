import type { InvoiceLateFeeConfig } from './logic';

const storageKey = 'jjlmoya-invoice-late-fee-calculator';

export interface StoredInvoiceLateFeeConfig extends Partial<InvoiceLateFeeConfig> {
  currency?: string;
}

export const readInvoiceLateFeeConfig = (): StoredInvoiceLateFeeConfig => {
  try {
    const saved = window.localStorage.getItem(storageKey);
    if (!saved) return {};
    const parsed: unknown = JSON.parse(saved);
    return parsed && typeof parsed === 'object' ? (parsed as StoredInvoiceLateFeeConfig) : {};
  } catch {
    return {};
  }
};

export const writeInvoiceLateFeeConfig = (config: StoredInvoiceLateFeeConfig): void => {
  try {
    window.localStorage.setItem(storageKey, JSON.stringify(config));
  } catch {}
};

export const clearInvoiceLateFeeConfig = (): void => {
  try {
    window.localStorage.removeItem(storageKey);
  } catch {}
};
