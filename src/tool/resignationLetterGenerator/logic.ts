export function buildDateLine(city: string, locale: string, prefix: string): string {
  const formatted = new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date());
  const sep = prefix ? `, ${prefix} ` : ', ';
  return `${city}${sep}${formatted}`;
}

export function buildManagerLine(name: string, prefix: string, fallback: string): string {
  return name ? `${prefix} ${name}` : fallback;
}

export function getFirstName(fullName: string): string {
  return fullName.trim().split(' ')[0] ?? '';
}

export function buildSalutation(gender: string, neutral: string, m: string, f: string): string {
  if (gender === 'gender-m') return m;
  if (gender === 'gender-f') return f;
  return neutral;
}

export function buildMainBody(
  reasonKey: string,
  lastDayISO: string,
  reasons: Record<string, string>,
  locale: string
): string {
  const future = Date.now() + 15 * 24 * 60 * 60 * 1000;
  const baseDate = lastDayISO ? new Date(lastDayISO) : new Date(future);
  const formatted = new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(baseDate);
  const template = reasons[reasonKey] || reasons['standard'] || '';
  return template.replace('[DATE]', formatted);
}
