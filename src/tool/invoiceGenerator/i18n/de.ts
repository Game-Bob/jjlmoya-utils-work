import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InvoiceGeneratorUI } from '../ui';

const slug = 'rechnung-generator';
const title = 'Kostenloser Rechnung-Generator für Freiberufler und Kleinunternehmen';
const description =
  'Erstellen Sie professionelle Rechnungen kostenlos online. Geben Sie Ihre Daten ein, fügen Sie Leistungen hinzu, legen Sie Umsatzsteuer und Einbehalt fest und erstellen Sie ein druckfertiges PDF. Kein Konto erforderlich.';

const faqData = [
  {
    question: 'Welche Informationen muss eine professionelle Rechnung enthalten?',
    answer:
      'Eine professionelle Rechnung muss eine eindeutige Rechnungsnummer, das Rechnungsdatum, Ihren vollständigen Firmennamen und Kontaktinformationen (einschließlich Steuernummer), die Geschäftsinformationen des Kunden, eine detaillierte Liste der Leistungen oder Produkte mit Mengen und Einzelpreisen, die geltende Umsatzsteuer und klare Zahlungsbedingungen enthalten.',
  },
  {
    question: 'Müssen Freiberufler Umsatzsteuer auf Dienstleistungen erheben?',
    answer:
      'Dies hängt von Ihrem Land und der Art der Dienstleistung ab. In Deutschland müssen Freiberufler in der Regel Umsatzsteuer erheben, es sei denn, sie fallen unter die Kleinunternehmerregelung. Konsultieren Sie einen Steuerberater für Ihre spezifische Situation.',
  },
  {
    question: 'Was ist der Quellensteuerabzug und wann wird er angewendet?',
    answer:
      'In einigen Ländern oder bei bestimmten Leistungen (z.B. in Spanien der IRPF-Einbehalt) behält der Kunde einen Teil des Rechnungsbetrags ein und führt ihn direkt an das Finanzamt ab. Dies dient als Steuervorauszahlung des Leistungserbringers.',
  },
  {
    question: 'Sollte ich meine persönliche Steuer-ID oder eine Umsatzsteuer-Identifikationsnummer verwenden?',
    answer:
      'Für geschäftliche Rechnungen ist es ratsam, eine Umsatzsteuer-Identifikationsnummer (USt-IdNr.) zu verwenden, wenn Sie am gewerblichen Verkehr teilnehmen. Dies schützt Ihre persönlichen Daten und ist für EU-weite Geschäfte oft zwingend erforderlich.',
  },
];

const howToData = [
  {
    name: 'Geben Sie Ihre Unternehmensdaten ein',
    text: 'Klicken Sie auf "Meine Firma GmbH" und ersetzen Sie diese durch Ihren tatsächlichen Firmennamen, Ihre Steuernummer, Postanschrift und Kontakt-E-Mail.',
  },
  {
    name: 'Füllen Sie die Kundendaten aus',
    text: 'Klicken Sie unter "Rechnung an:" auf jedes Feld, um den Namen der Kundenfirma, die Steuernummer, die Adresse und die Kontakt-E-Mail einzugeben.',
  },
  {
    name: 'Leistungen hinzufügen und Preise festlegen',
    text: 'Beschreiben Sie jede Leistung in der Tabelle, legen Sie Menge und Einzelpreis fest. Klicken Sie auf "Zeile hinzufügen", um weitere Positionen aufzunehmen.',
  },
  {
    name: 'Summen prüfen und PDF erstellen',
    text: 'Überprüfen Sie, ob alle Beträge korrekt sind, legen Sie gegebenenfalls den Umsatzsteuersatz fest und klicken Sie auf "PDF erstellen", um die Rechnung zu drucken oder zu speichern.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'de',
};

export const content: ToolLocaleContent<InvoiceGeneratorUI> = {
  slug,
  title,
  description,
  ui: {
    labelEditor: 'Interaktiver Editor',
    labelEditHint: 'Klicken Sie auf einen beliebigen Text im Dokument, um ihn direkt zu bearbeiten.',
    btnGenerate: 'PDF erstellen',
    labelFrom: 'Von:',
    labelTo: 'Rechnung an:',
    labelDesc: 'Beschreibung der Leistung oder des Produkts',
    labelQty: 'Menge',
    labelPrice: 'Einzelpreis',
    labelAmount: 'Betrag',
    btnAddRow: 'Zeile hinzufügen',
    labelSubtotal: 'Zwischensumme:',
    labelTax: 'Umsatzsteuer',
    labelWithholding: 'Einbehalt',
    labelTotal: 'Gesamtsumme:',
    defaultInvoiceTitle: 'RECHNUNG',
    defaultInvoiceNum: 'RE-24-001',
    defaultCompanyName: 'Meine Firma GmbH',
    defaultCompanyId: 'USt-IdNr. DE123456789',
    defaultAddress: 'Hauptstraße 123',
    defaultCity: '10115 Berlin',
    defaultEmail: 'info@meinefirma.de',
    placeholderDesc: 'Beschreibung hinzufügen...',
    placeholderNotes: 'z.B. Zahlbar innerhalb von 14 Tagen ohne Abzug...',
    labelNotes: 'Hinweise / Zahlungsbedingungen',
    currencySymbol: '€',
    defaultTaxRate: '19',
    defaultRetRate: '0',
  },
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Quellen',
  bibliography: [
    { name: 'Vorgaben für Rechnungen - IHK', url: 'https://www.ihk.de/' },
    { name: 'Pflichtangaben in einer Rechnung - Buchhaltung', url: 'https://www.bmf.de/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Wesentliche Elemente einer professionellen Rechnung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Eine gültige Geschäftsrechnung ist mehr als nur eine Zahlungsaufforderung – sie ist ein Rechtsdokument, das sowohl Sie als auch Ihren Kunden schützt. Fehlende Pflichtangaben können die Zahlung verzögern, Probleme bei der Steuerprüfung verursachen oder die Rechnung sogar ungültig machen. Für Freiberufler und Einzelunternehmer ist es entscheidend, dies von Anfang an richtig zu machen.',
    },
    {
      type: 'card',
      title: 'Pflichtangaben auf einer Rechnung',
      html: '<ul><li><strong>Rechnungsnummer:</strong> Muss fortlaufend und einmalig sein.</li><li><strong>Rechnungsdatum:</strong> Das Ausstellungsdatum der Rechnung.</li><li><strong>Angaben zum Aussteller und Empfänger:</strong> Vollständiger Name, Steuernummer oder USt-IdNr. und Anschrift beider Parteien.</li><li><strong>Leistungsbeschreibung:</strong> Art, Menge und Einzelpreis pro Position.</li><li><strong>Zahlungsziel:</strong> Fälligkeitsdatum und akzeptierte Zahlungsmethoden.</li></ul>',
    },
    {
      type: 'title',
      text: 'Umsatzsteuer und Einbehalte auf Rechnungen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Zwei Faktoren beeinflussen den Endbetrag. Die <strong>Umsatzsteuer</strong> wird vom Kunden eingezogen und an den Staat abgeführt – sie erhöht die Kosten für den Kunden. <strong>Quellensteuern</strong> (falls zutreffend) werden vom Kunden direkt vom Betrag abgezogen und an das Finanzamt abgeführt – dies reduziert den Auszahlungsbetrag, gilt aber als Steuervorauszahlung.',
    },
    {
      type: 'code',
      code: 'Erbringte Leistungen          1.000,00 €\n+ Umsatzsteuer (19%)            190,00 €\n- Einbehalt (z.B. IRPF)           0,00 €\n-----------------------------------------\nNetto-Auszahlungsbetrag       1.190,00 €',
    },
    {
      type: 'title',
      text: 'Schutz Ihrer Identität als Freiberufler',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Verwenden Sie nach Möglichkeit eine Umsatzsteuer-Identifikationsnummer anstelle Ihrer privaten Steuernummer auf Rechnungen. Dies verhindert die Weitergabe sensibler persönlicher Informationen in Dokumenten, die von mehreren Abteilungen beim Kunden eingesehen werden können.',
    },
    {
      type: 'tip',
      html: '<strong>Speichern Sie jede Rechnung als PDF:</strong> Es wird empfohlen, Geschäftsunterlagen mindestens 10 Jahre lang aufzubewahren. Nutzen Sie die Funktion "PDF erstellen" und speichern Sie diese in einem nach Jahren und Kunden organisierten Ordner.',
    },
  ],
};
