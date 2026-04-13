import { loadInvoiceState, saveInvoiceState, addInvoiceItem, invoiceItems } from './invoiceStore';
import { calculateTotalsUI } from './invoiceMath';
import { renderInvoiceRows } from './invoiceRenderer';

type InvoiceEls = {
  tbody: HTMLElement;
  btnAddRow: HTMLElement;
  taxInput: HTMLInputElement;
  retInput: HTMLInputElement;
  currSelect: HTMLSelectElement;
  printBtn: HTMLElement | null;
};

function getElements(): InvoiceEls | null {
  const tbody = document.getElementById('interactive-items-body');
  const btnAddRow = document.getElementById('btn-add-row');
  const taxInput = document.getElementById('tax-input') as HTMLInputElement;
  const retInput = document.getElementById('ret-input') as HTMLInputElement;
  const currSelect = document.getElementById('inv-currency') as HTMLSelectElement;
  if (!tbody || !btnAddRow || !taxInput || !retInput || !currSelect) return null;
  return { tbody, btnAddRow, taxInput, retInput, currSelect, printBtn: document.getElementById('btn-print-invoice') };
}

function onEditableInput(e: Event) {
  const target = e.currentTarget as HTMLElement;
  if (target.textContent?.trim() === '') target.classList.add('empty');
  else target.classList.remove('empty');
  if (!target.classList.contains('item-desc')) saveInvoiceState();
}

function onEditableKeydown(e: Event) {
  const kEvent = e as KeyboardEvent;
  if (kEvent.key === 'Enter') {
    kEvent.preventDefault();
    (kEvent.currentTarget as HTMLElement).blur();
  }
}

function setupEditableListeners() {
  document.querySelectorAll('.editable').forEach((el) => {
    el.addEventListener('input', onEditableInput);
    if (!el.classList.contains('ig-pre')) {
      el.addEventListener('keydown', onEditableKeydown);
    }
  });
}

function setupAddRow(tbody: HTMLElement, btn: HTMLElement) {
  btn.addEventListener('click', () => {
    addInvoiceItem();
    renderInvoiceRows();
    saveInvoiceState();
    const idx = invoiceItems.length - 1;
    setTimeout(() => {
      (tbody.querySelector(`[data-idx="${idx}"]`) as HTMLElement)?.focus();
    }, 50);
  });
}

function setupTaxControls(taxInput: HTMLInputElement, retInput: HTMLInputElement) {
  const update = () => { calculateTotalsUI(); saveInvoiceState(); };
  taxInput.addEventListener('input', update);
  retInput.addEventListener('input', update);
}

function setupCurrencyControl(currSelect: HTMLSelectElement) {
  currSelect.addEventListener('change', () => {
    document.querySelectorAll('.out-currency').forEach((el) => {
      el.textContent = currSelect.value;
    });
    saveInvoiceState();
  });
}

function initDocument() {
  const dateInput = document.getElementById('inv-date-input') as HTMLInputElement;
  if (dateInput && !dateInput.value) dateInput.valueAsDate = new Date();
  document.querySelectorAll('.item-desc').forEach((el) => {
    if (el.textContent?.trim() === '') el.classList.add('empty');
    else el.classList.remove('empty');
  });
}

export function initInvoiceGenerator() {
  const els = getElements();
  if (!els) return;
  setupEditableListeners();
  setupAddRow(els.tbody, els.btnAddRow);
  setupTaxControls(els.taxInput, els.retInput);
  setupCurrencyControl(els.currSelect);
  els.printBtn?.addEventListener('click', () => window.print());
  loadInvoiceState();
  initDocument();
  renderInvoiceRows();
}
