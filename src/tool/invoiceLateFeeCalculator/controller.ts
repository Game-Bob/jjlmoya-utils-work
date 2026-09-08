import { calculateInvoiceLateFee, type InvoiceLateFeeConfig, type RatePeriod } from './logic';
import { clearInvoiceLateFeeConfig, readInvoiceLateFeeConfig, writeInvoiceLateFeeConfig, type StoredInvoiceLateFeeConfig } from './storage';
import { renderInvoiceLateFee, type InvoiceLateFeeViewElements } from './dom-views';
import type { InvoiceLateFeeCalculatorUI } from './ui';
import { convertCurrencyValue, getCurrencySymbol, parseCurrencyCode, type CurrencyCode } from '../../currency';

interface ControllerElements extends InvoiceLateFeeViewElements {
  form: HTMLFormElement;
  amount: HTMLInputElement;
  currency: HTMLInputElement;
  dueDate: HTMLInputElement;
  calculationDate: HTMLInputElement;
  graceDays: HTMLInputElement;
  rate: HTMLInputElement;
  ratePeriod: HTMLElement;
  reset: HTMLButtonElement;
  currencyTrigger: HTMLButtonElement;
  currencyMenu: HTMLElement;
  currencyCurrent: HTMLElement;
  currencyHint: HTMLElement;
}

const getInput = (root: HTMLElement, name: string): HTMLInputElement => {
  const element = root.querySelector<HTMLInputElement>(`[data-late-fee-input="${name}"]`);
  if (!element) throw new Error(`Missing late fee input: ${name}`);
  return element;
};

const getElement = <T extends HTMLElement>(root: HTMLElement, name: string): T => {
  const element = root.querySelector<T>(`[data-late-fee="${name}"]`);
  if (!element) throw new Error(`Missing late fee element: ${name}`);
  return element;
};

const collectElements = (root: HTMLElement): ControllerElements => ({
  form: getElement<HTMLFormElement>(root, 'form'),
  amount: getInput(root, 'amount'),
  currency: getInput(root, 'currency'),
  dueDate: getInput(root, 'dueDate'),
  calculationDate: getInput(root, 'calculationDate'),
  graceDays: getInput(root, 'graceDays'),
  rate: getInput(root, 'rate'),
  ratePeriod: getElement(root, 'ratePeriod'),
  reset: getElement<HTMLButtonElement>(root, 'reset'),
  currencyTrigger: getElement<HTMLButtonElement>(root, 'currencyTrigger'),
  currencyMenu: getElement(root, 'currencyMenu'),
  currencyCurrent: getElement(root, 'currencyCurrent'),
  currencyHint: getElement(root, 'currencyHint'),
  status: getElement(root, 'status'),
  daysSinceDue: getElement(root, 'daysSinceDue'),
  chargedDays: getElement(root, 'chargedDays'),
  appliedRate: getElement(root, 'appliedRate'),
  lateFee: getElement(root, 'lateFee'),
  totalDue: getElement(root, 'totalDue'),
  timeline: getElement(root, 'timeline'),
  timelineNote: getElement(root, 'timelineNote'),
});

const readConfig = (elements: ControllerElements): InvoiceLateFeeConfig => ({
  amount: Number(elements.amount.value),
  dueDate: elements.dueDate.value,
  calculationDate: elements.calculationDate.value,
  graceDays: Number(elements.graceDays.value),
  rate: Number(elements.rate.value),
  ratePeriod: (elements.ratePeriod.querySelector<HTMLElement>('[aria-pressed="true"]')?.dataset.period ?? 'annual') as RatePeriod,
});

const updatePeriodButtons = (container: HTMLElement, period: RatePeriod): void => {
  container.querySelectorAll<HTMLElement>('[data-period]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.period === period));
  });
};

const getCurrencyRateLabel = (currency: CurrencyCode, ui: InvoiceLateFeeCalculatorUI): string => {
  const value = convertCurrencyValue(1, 'EUR', currency).toLocaleString(ui.numberLocale, { maximumFractionDigits: 4 });
  return ui.currencyRateTemplate.replace('{value}', value).replace('{currency}', currency);
};

const updateCurrencyMenu = (root: HTMLElement, elements: ControllerElements, currency: CurrencyCode, ui: InvoiceLateFeeCalculatorUI): void => {
  elements.currency.value = currency;
  elements.currencyCurrent.textContent = currency;
  elements.currencyHint.textContent = `${ui.currencyConversionHint} ${getCurrencyRateLabel(currency, ui)}`;
  const symbol = root.querySelector<HTMLElement>('.invoice-late-fee-currency-symbol');
  if (symbol) symbol.textContent = getCurrencySymbol(currency);
  root.querySelectorAll<HTMLButtonElement>('[data-currency-option]').forEach((button) => {
    const selected = button.dataset.currencyOption === currency;
    button.classList.toggle('is-selected', selected);
    button.setAttribute('aria-selected', String(selected));
  });
};

const closeCurrencyMenu = (elements: ControllerElements): void => {
  elements.currencyMenu.hidden = true;
  elements.currencyTrigger.setAttribute('aria-expanded', 'false');
};

const openCurrencyMenu = (elements: ControllerElements): void => {
  elements.currencyMenu.hidden = false;
  elements.currencyTrigger.setAttribute('aria-expanded', 'true');
};

const applyConfig = (root: HTMLElement, elements: ControllerElements, config: StoredInvoiceLateFeeConfig, ui: InvoiceLateFeeCalculatorUI): void => {
  if (config.amount !== undefined) elements.amount.value = String(config.amount);
  if (config.dueDate) elements.dueDate.value = config.dueDate;
  if (config.calculationDate) elements.calculationDate.value = config.calculationDate;
  if (config.graceDays !== undefined) elements.graceDays.value = String(config.graceDays);
  if (config.rate !== undefined) elements.rate.value = String(config.rate);
  updatePeriodButtons(elements.ratePeriod, config.ratePeriod ?? 'annual');
  updateCurrencyMenu(root, elements, parseCurrencyCode(config.currency, parseCurrencyCode(elements.currency.value)), ui);
};

const getCurrency = (elements: ControllerElements): CurrencyCode => parseCurrencyCode(elements.currency.value);

const refresh = (elements: ControllerElements, ui: InvoiceLateFeeCalculatorUI): void => {
  const config = readConfig(elements);
  const result = calculateInvoiceLateFee(config);
  renderInvoiceLateFee({ elements, result, ui, currency: getCurrency(elements), rate: config.rate, ratePeriod: config.ratePeriod });
  writeInvoiceLateFeeConfig({ ...config, ratePeriod: config.ratePeriod, currency: getCurrency(elements) });
};

const bindPeriods = (elements: ControllerElements, refreshView: () => void): void => {
  elements.ratePeriod.addEventListener('click', (event) => {
    const button = (event.target as HTMLElement).closest<HTMLElement>('[data-period]');
    if (!button?.dataset.period) return;
    updatePeriodButtons(elements.ratePeriod, button.dataset.period as RatePeriod);
    refreshView();
  });
};

const bindCurrencyTrigger = (elements: ControllerElements): void => {
  elements.currencyTrigger.addEventListener('click', () => {
    if (elements.currencyMenu.hidden) openCurrencyMenu(elements);
    else closeCurrencyMenu(elements);
  });
  elements.currencyTrigger.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeCurrencyMenu(elements);
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (elements.currencyMenu.hidden) openCurrencyMenu(elements);
      else closeCurrencyMenu(elements);
    }
  });
};

const bindCurrencyOptions = (root: HTMLElement, elements: ControllerElements, refreshView: () => void, ui: InvoiceLateFeeCalculatorUI): void => {
  root.querySelectorAll<HTMLButtonElement>('[data-currency-option]').forEach((button) => button.addEventListener('click', () => {
    const currency = parseCurrencyCode(button.dataset.currencyOption, getCurrency(elements));
    const previousCurrency = getCurrency(elements);
    const amount = Number(elements.amount.value);
    if (Number.isFinite(amount) && previousCurrency !== currency) elements.amount.value = convertCurrencyValue(amount, previousCurrency, currency).toFixed(2);
    updateCurrencyMenu(root, elements, currency, ui);
    closeCurrencyMenu(elements);
    refreshView();
    elements.currencyTrigger.focus();
  }));
};

const bindCurrencyDismiss = (root: HTMLElement, elements: ControllerElements): void => {
  root.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeCurrencyMenu(elements);
  });
  root.ownerDocument.addEventListener('click', (event) => {
    const control = elements.currencyMenu.parentElement;
    if (control && !control.contains(event.target as Node)) closeCurrencyMenu(elements);
  });
};

const bindCurrencies = (root: HTMLElement, elements: ControllerElements, refreshView: () => void, ui: InvoiceLateFeeCalculatorUI): void => {
  bindCurrencyTrigger(elements);
  bindCurrencyOptions(root, elements, refreshView, ui);
  bindCurrencyDismiss(root, elements);
};

export const mountInvoiceLateFeeCalculator = (root: HTMLElement, ui: InvoiceLateFeeCalculatorUI): void => {
  const elements = collectElements(root);
  applyConfig(root, elements, readInvoiceLateFeeConfig(), ui);
  const refreshView = (): void => refresh(elements, ui);
  elements.form.addEventListener('input', refreshView);
  elements.form.addEventListener('change', refreshView);
  elements.form.addEventListener('submit', (event) => event.preventDefault());
  elements.reset.addEventListener('click', () => {
    clearInvoiceLateFeeConfig();
    window.location.reload();
  });
  bindPeriods(elements, refreshView);
  bindCurrencies(root, elements, refreshView, ui);
  refreshView();
};
