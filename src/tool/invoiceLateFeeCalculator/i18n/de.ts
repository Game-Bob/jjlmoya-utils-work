import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { InvoiceLateFeeCalculatorUI } from '../ui';

const slug = 'rechner-mahngebuehr-rechnung';
const title = 'Rechner für Mahngebühren auf Rechnungen';
const description = 'Berechnen Sie eine einfache Mahngebühr aus einer überfälligen Rechnung, einer Kulanzfrist und dem vertraglich vereinbarten Satz. Prüfen Sie berechnete Tage, Gebühr und Gesamtbetrag in einer klaren Aufschlüsselung.';

const faq = [
  { question: 'Wie funktioniert die Berechnung der Mahngebühr?', answer: 'Der Rechner zieht die Kulanzfrist von den Kalendertagen zwischen Fälligkeit und Berechnungstag ab. Bei jährlichen oder monatlichen Sätzen wird der vereinbarte Prozentsatz anteilig auf die berechneten Tage angewendet. Ein einmaliger Satz wird nach Ablauf der Kulanzfrist einmal berechnet.' },
  { question: 'Kann ich einen gesetzlichen Verzugszinssatz verwenden?', answer: 'Ja, wenn Sie den Satz geprüft haben und Vertrag oder anwendbares Recht seine Verwendung erlauben. Geben Sie den Satz selbst ein. Das Tool wählt kein Land, schätzt keinen gesetzlichen Satz und entscheidet nicht, ob eine Gebühr durchsetzbar ist.' },
  { question: 'Was ändert die Kulanzfrist?', answer: 'Kulanztage werden von der Zeit nach der Fälligkeit abgezogen, bevor die Gebühr beginnt. Liegt die Rechnung noch innerhalb dieser Frist, bleibt die Gebühr bei null und der Status zeigt weiterhin Kulanz an.' },
  { question: 'Enthält der Gesamtbetrag Steuern, Inkassokosten oder Zinseszinsen?', answer: 'Nein. Das Ergebnis ist der offene Hauptbetrag in der ausgewählten Währung plus die einfache Gebühr aus Ihren Angaben. Währungswechsel verwenden einen festen Richtwert, keinen aktuellen Wechselkurs. Steuern, feste Einziehungskosten, Rechtskosten, Zinseszinsen und Zahlungshistorie sind nicht enthalten.' },
];

const howTo = [
  { name: 'Rechnungsbetrag eingeben', text: 'Geben Sie den offenen Hauptbetrag ein und wählen Sie die Rechnungswährung. Wenn Sie die Währung später wechseln, wird der Betrag mit dem angezeigten Richtwert umgerechnet, nicht mit einem Live-Devisenkurs.' },
  { name: 'Daten festlegen', text: 'Wählen Sie das vertragliche Fälligkeitsdatum und den Tag, bis zu dem Sie das Konto prüfen. Das Tool zählt vollständige Kalendertage dazwischen.' },
  { name: 'Kulanz und Satz ergänzen', text: 'Geben Sie Kulanztage und den für die Rechnung vereinbarten Prozentsatz ein. Wählen Sie, ob der Satz pro Jahr, pro Monat oder einmalig gilt.' },
  { name: 'Aufschlüsselung prüfen', text: 'Prüfen Sie Tage seit Fälligkeit, berechnete Tage, Mahngebühr und Gesamtbetrag. Bewahren Sie die Aufschlüsselung bei der Rechnung auf und prüfen Sie den Vertrag vor einer Forderung.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const applicationSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'BusinessApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'de' };

export const content: ToolLocaleContent<InvoiceLateFeeCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    eyebrow: 'ÜBERFÄLLIGE RECHNUNG / EINFACHE AUFSTELLUNG',
    intro: 'Machen Sie aus einer verpassten Fälligkeit eine klare Forderung.',
    sectionTerms: 'Rechnungsbedingungen festlegen',
    labelAmount: 'Offener Rechnungsbetrag',
    labelCurrency: 'Rechnungswährung',
    currencyConversionHint: 'Beim Währungswechsel wird der Betrag mit einem festen Richtwert umgerechnet, nicht mit einem aktuellen Wechselkurs.',
    currencyRateTemplate: '1 EUR ≈ {value} {currency}.',
    labelDueDate: 'Vertragliches Fälligkeitsdatum',
    labelCalculationDate: 'Berechnung bis',
    labelGraceDays: 'Kulanzfrist',
    labelRate: 'Vereinbarter Mahngebührensatz',
    labelRatePeriod: 'Satz gilt',
    rateAnnual: 'Pro Jahr',
    rateMonthly: 'Pro Monat',
    rateOneTime: 'Einmalig',
    sectionReceipt: 'Forderungsbeleg',
    labelDaysSinceDue: 'Tage seit Fälligkeit',
    labelChargedDays: 'Berechnete Tage',
    labelAppliedRate: 'Angewandter Satz',
    labelLateFee: 'Mahngebühr',
    labelTotalDue: 'Zu fordernder Gesamtbetrag',
    statusNotDue: 'Nicht überfällig',
    statusGrace: 'Noch in der Kulanzfrist',
    statusOverdue: 'Gebühr läuft',
    timelineDue: 'Fälligkeit',
    timelineToday: 'Geprüft bis',
    timelineGrace: 'berechenbare Tage nach Kulanz',
    noteDisclaimer: 'Einfache Schätzung aus Ihren Angaben. Prüfen Sie Vertrag, Rechtsordnung, steuerliche Behandlung und feste Einziehungskosten vor einer Forderung.',
    buttonReset: 'Gespeicherte Angaben löschen',
    numberLocale: 'de-DE',
  },
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, applicationSchema],
  seo: [
    { type: 'title', text: 'Eine überfällige Rechnung verständlich erklären', level: 2 },
    { type: 'paragraph', html: 'Eine Zahlungsaufforderung ist leichter zu prüfen, wenn Hauptbetrag, Daten, Kulanzfrist, Satz und Gebühr an einem Ort sichtbar sind. Dieser Rechner macht aus den Vertragsbedingungen eine kleine Aufschlüsselung im Belegstil.' },
    { type: 'card', title: 'Die einfache Formel', html: '<p><strong>Berechenbare Tage</strong> = Tage zwischen Fälligkeit und Berechnungstag - Kulanztage.</p><p><strong>Mahngebühr</strong> = Rechnungsbetrag × Satz ÷ 100 × Zeitfaktor. Jährliche Sätze verwenden berechenbare Tage ÷ 365, monatliche Sätze berechenbare Tage ÷ 30, einmalige Sätze werden nach der Kulanz einmal angewendet.</p>' },
    { type: 'paragraph', html: 'Die Berechnung wählt bewusst keinen gesetzlichen Zinssatz für Sie. Ein Vertrag kann eine feste Gebühr, einen Jahressatz oder eine andere Tageszählung vorsehen. Die Währungsumrechnung ist nur ein fester Richtwert und kein aktueller Devisenkurs. Prüfen Sie die Klausel, wenn die Vereinbarung eine andere Methode verlangt.' },
    { type: 'title', text: 'Prüfen Sie das Ergebnis vor der Forderung', level: 2 },
    { type: 'code', code: 'Rechnung: 1.250 €\nFälligkeit bis Prüfung: 38 Tage\nKulanzfrist: 5 Tage\nJahressatz: 10 %\nBerechnete Tage: 33\nMahngebühr: 1.250 € × 0,10 × 33 / 365 = 11,30 €\nGesamt: 1.261,30 €' },
    { type: 'list', items: ['Gleichen Sie das Fälligkeitsdatum mit Bestellung, Rechnung oder Vertrag ab.', 'Verwenden Sie den tatsächlichen Tag der Forderungsvorbereitung.', 'Halten Sie Hauptbetrag und Mahngebühr getrennt, damit beide Beträge geprüft werden können.', 'Prüfen Sie, ob Steuern, feste Einziehungskosten oder gesetzliche Grenzen den Forderungsbetrag ändern.'] },
    { type: 'tip', html: '<strong>Nachweis-Tipp:</strong> Speichern Sie Rechnung, Liefer- oder Abnahmebeleg, Vertragsklausel und diese Berechnung zusammen. Das Tool erklärt die Arithmetik, beweist aber weder die Fälligkeit noch die Durchsetzbarkeit.' },
  ],
};
