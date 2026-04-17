import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NieNifVerifierUI } from '../ui';

const slug = 'nie-nif-prufer-spanien';
const title = 'NIE/NIF/CIF Prüfer Spanien: Validierung der spanischen Steuernummer';
const description =
  'Kostenloses Tool zur Überprüfung der Gültigkeit von NIF (spanische DNI), NIE (Ausländer) und CIF (Unternehmen) in Spanien. Prüft die Kontrollziffer und das offizielle Format.';

const faqData = [
  {
    question: 'Ist es sicher, meine NIF oder NIE in dieses Tool einzugeben?',
    answer:
      'Ja, es ist absolut sicher. Die Validierung erfolgt vollständig in Ihrem Browser mittels JavaScript. Ihre Daten werden niemals an einen Server gesendet oder in einer Datenbank gespeichert.',
  },
  {
    question: 'Was ist der Unterschied zwischen NIF und CIF?',
    answer:
      'NIF (Número de Identificación Fiscal) ist der aktuelle Begriff für alle Steuernummern. CIF (Código de Identificación Fiscal) wird jedoch immer noch häufig verwendet, um sich auf die NIF von juristischen Personen (Unternehmen und Organisationen) zu beziehen.',
  },
  {
    question: 'Wie finde ich heraus, ob eine NIF gültig ist, wenn ich den Buchstaben nicht habe?',
    answer:
      'Geben Sie die 8 Ziffern in unseren Prüfer ein und schauen Sie, ob der Buchstabe übereinstimmt. Der Algorithmus berechnet den exakten Buchstaben, indem er die Zahl durch 23 teilt.',
  },
  {
    question: 'Funktioniert dieses Tool für NIE-Nummern, die mit Y oder Z beginnen?',
    answer:
      'Ja, unser Prüfer unterstützt alle NIE-Formate: die älteren, die mit X beginnen, und die neueren, die mit Y oder Z beginnen, unter Anwendung der offiziellen numerischen Konvertierung.',
  },
  {
    question: 'Validiert es, ob die Nummer tatsächlich beim Finanzamt existiert?',
    answer:
      'Nein. Dieses Tool führt eine algorithmische und mathematische Validierung durch. Es bestätigt, dass die Nummer eine legale Struktur und eine korrekte Kontrollziffer hat, fragt aber nicht den realen Zensus der Agencia Tributaria ab.',
  },
];

const howToData = [
  {
    name: 'Identifikator finden',
    text: 'Suchen Sie den alphanumerischen Code auf dem Dokument (DNI, Aufenthaltskarte oder Steueridentitätskarte).',
  },
  {
    name: 'Code eingeben',
    text: 'Geben Sie die NIF, NIE oder CIF in das Textfeld ein. Achten Sie nicht auf Leerzeichen oder Bindestriche.',
  },
  {
    name: 'Ergebnis prüfen',
    text: 'Das Tool analysiert sofort, ob die Struktur gültig ist und ob das Kontrollzeichen übereinstimmt.',
  },
  {
    name: 'Ergebnis kopieren',
    text: 'Wenn der Code gültig ist, können Sie ihn direkt kopieren, um ihn in Ihre Rechnung, Ihren Vertrag oder Ihr Verwaltungsformular einzufügen.',
  },
];

const bibliography = [
  {
    name: 'Agencia Tributaria: NIF für natürliche und juristische Personen',
    url: 'https://sede.agenciatributaria.gob.es/Sede/procedimiento-recaudatorio-gestor/nif.html',
  },
  {
    name: 'Innenministerium: Struktur von DNI und NIE',
    url: 'https://www.dnielectronico.es/PortalDNIe/PRF1_9._2.html?punto=5.2',
  },
  {
    name: 'BOE: Allgemeine Vorschriften zur Steuerverwaltung',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2007-14406',
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

export const content: ToolLocaleContent<NieNifVerifierUI> = {
  slug,
  title,
  description,
  ui: {
    labelInput: 'Spanische Steueridentifikationsnummer eingeben',
    placeholder: '45938210Y',
    typeNIF: 'NIF / DNI',
    typeNIE: 'NIE',
    typeCIF: 'CIF',
    msgValidSuffix: 'Gültig',
    msgInvalidControl: 'Falsche Kontrollziffer',
    msgInvalidNIEControl: 'Fehler beim Kontrollzeichen',
    msgInvalidCIF: 'Falsche Kombination',
    msgIncomplete: 'Unvollständig',
  },
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Quellen',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Die Bedeutung der Überprüfung von NIF, NIE und CIF in Spanien',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Im Verwaltungs- und Geschäftssystem Spaniens ist die steuerliche Identifikation der Grundstein für alle Transaktionen, Verträge und Behördengänge. Egal, ob Sie als Freiberufler Rechnungen ausstellen, als Unternehmen Lieferanten verwalten oder als Privatperson einen Kauf tätigen, ein zuverlässiger <strong>NIF-, NIE- und CIF-Prüfer</strong> ist ein unverzichtbares Werkzeug, um Verwaltungsfehler und potenziellen Betrug zu vermeiden.',
    },
    {
      type: 'title',
      text: 'Was sind NIF, NIE und CIF? Hauptunterschiede',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>NIF (Número de Identificación Fiscal):</strong> Der allgemeine Begriff für die Steueridentifikation in Spanien. Für spanische Staatsangehörige entspricht die NIF der DNI-Nummer gefolgt von einem Kontrollbuchstaben (8 Ziffern + 1 Buchstabe).',
        '<strong>NIE (Número de Identidad de Extranjero):</strong> Die Identifikationsnummer für nicht-spanische Personen mit steuerlichen Aktivitäten in Spanien. Beginnt mit X, Y oder Z, gefolgt von 7 Ziffern und einem Kontrollbuchstaben.',
        '<strong>CIF (Código de Identificación Fiscal):</strong> Der Name für die NIF von juristischen Personen (Firmen, Vereine). Besteht aus einem Buchstaben für den Organisationstyp + 7 Ziffern + Kontrollziffer oder -buchstabe.',
      ],
    },
    {
      type: 'title',
      text: 'Wie der Validierungsalgorithmus funktioniert',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bei NIF/DNI wird der Endbuchstabe ermittelt, indem der numerische Teil durch 23 geteilt wird (Modulo 23) und der Rest der Sequenz <strong>TRWAGMYFPDXBNJZSQVHLCKE</strong> zugeordnet wird. Beim CIF werden Paare und verdoppelte ungerade Ziffern summiert, um das Kontrollzeichen zu prüfen. Die gesamte Berechnung erfolgt in Millisekunden in Ihrem Browser.',
    },
    {
      type: 'title',
      text: 'Häufige Anwendungen des NIE/NIF-Prüfers',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Buchhaltung und Steuerberater:</strong> Überprüfung von Identifikatoren vor der Erfassung von Kunden oder Lieferanten in Steuermodellen.',
        '<strong>E-Commerce:</strong> Validierung der NIF beim Checkout, um korrekte Rechnungen auszustellen.',
        '<strong>Personalabteilungen:</strong> Bestätigung der NIE ausländischer Mitarbeiter vor der Anmeldung bei der Sozialversicherung.',
      ],
    },
    {
      type: 'title',
      text: 'Tipps für die korrekte Überprüfung',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Wenn der Prüfer einen Fehler meldet, prüfen Sie, ob Sie eine 0 (Null) mit einem O (Buchstabe) verwechselt haben.',
        'Beim CIF immer den Anfangsbuchstaben angeben (A = S.A., B = S.L., etc.).',
        'Dieses Tool prüft die mathematische Gültigkeit, nicht die Aktivität im AEAT-Zensus.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Datenschutz garantiert:</strong> Die Validierung erfolgt vollständig in Ihrem Browser. Die eingegebenen Nummern werden niemals an einen Server gesendet.',
    },
  ],
};
