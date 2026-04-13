import type { InvoiceItem } from './invoiceStore';
import { invoiceItems, saveInvoiceState, removeInvoiceItem } from './invoiceStore';
import { formatMoney, parseNumber, updateRowTotal, calculateTotalsUI } from './invoiceMath';

function buildRowHTML(item: InvoiceItem, idx: number, placeholder: string): string {
  const total = formatMoney(item.qty * item.price);
  return `<td class="ig-td-desc">
      <div class="editable item-desc" contenteditable="true" spellcheck="false"
           data-idx="${idx}" data-placeholder="${placeholder}">${item.desc}</div>
    </td>
    <td class="ig-td-num">
      <input type="number" class="seamless-number int-qty" data-idx="${idx}" value="${item.qty}" min="0" step="0.5" />
    </td>
    <td class="ig-td-num">
      <input type="number" class="seamless-number int-prc" data-idx="${idx}" value="${item.price}" min="0" step="1" />
    </td>
    <td class="ig-td-num ig-td-total">
      <span class="row-total">${total}</span>
    </td>
    <td class="no-print ig-td-del">
      <button type="button" class="ig-del-btn del-row" data-idx="${idx}" title="Delete">x</button>
    </td>`;
}

function attachDescListeners(tbody: HTMLElement) {
  tbody.querySelectorAll('.item-desc').forEach((el) => {
    el.addEventListener('input', (e) => {
      const target = e.target as HTMLElement;
      const item = invoiceItems[parseInt(target.dataset.idx || '0')];
      if (item) item.desc = target.innerHTML || '';
      saveInvoiceState();
    });
  });
}

function bindInput(tbody: HTMLElement, selector: string, field: 'qty' | 'price') {
  tbody.querySelectorAll(selector).forEach((el) => {
    el.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      const idx = parseInt(target.dataset.idx || '0');
      const item = invoiceItems[idx];
      if (item) item[field] = parseNumber(target.value);
      calculateTotalsUI();
      updateRowTotal(target, idx);
      saveInvoiceState();
    });
  });
}

function attachDeleteListeners(tbody: HTMLElement) {
  tbody.querySelectorAll('.del-row').forEach((el) => {
    el.addEventListener('click', (e) => {
      removeInvoiceItem(parseInt((e.target as HTMLElement).dataset.idx || '0'));
      renderInvoiceRows();
      saveInvoiceState();
    });
  });
}

function attachRowListeners(tbody: HTMLElement) {
  attachDescListeners(tbody);
  bindInput(tbody, '.int-qty', 'qty');
  bindInput(tbody, '.int-prc', 'price');
  attachDeleteListeners(tbody);
}

export const renderInvoiceRows = () => {
  const tbody = document.getElementById('interactive-items-body');
  if (!tbody) return;
  const placeholder = tbody.dataset.placeholder || 'Add description...';
  tbody.innerHTML = '';
  invoiceItems.forEach((item, index) => {
    const tr = document.createElement('tr');
    tr.className = 'ig-item-row';
    tr.innerHTML = buildRowHTML(item, index, placeholder);
    tbody.appendChild(tr);
  });
  attachRowListeners(tbody);
  calculateTotalsUI();
};
