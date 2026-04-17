import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResignationLetterGeneratorUI } from '../ui';

const slug = 'kundigungsschreiben-generator';
const title = 'Professioneller Kündigungsschreiben Generator';
const description =
  'Erstellen Sie in Sekundenschnelle Ihr personalisiertes Kündigungsschreiben. Professionelle Vorlagen, die sofort kopiert oder als PDF heruntergeladen werden können.';

const faqData = [
  {
    question: 'Wie viele Tage Kündigungsfrist muss ich einhalten?',
    answer:
      'In Deutschland ist die gesetzliche Grundkündigungsfrist 4 Wochen zum 15. oder zum Ende eines Kalendermonats. Sie sollten jedoch Ihren Arbeitsvertrag und eventuelle Tarifverträge prüfen, da dort längere Fristen vereinbart sein können.',
  },
  {
    question: 'Habe ich bei einer Kündigung Anspruch auf eine Abfindung?',
    answer:
      'Bei einer Eigenkündigung besteht in der Regel kein gesetzlicher Anspruch auf eine Abfindung. Ein Anspruch kann jedoch entstehen, wenn dies in einem Aufhebungsvertrag oder im Arbeitsvertrag vereinbart wurde.',
  },
  {
    question: 'Erhalte ich Arbeitslosengeld, wenn ich selbst kündige?',
    answer:
      'Wenn Sie von sich aus kündigen, verhängt die Agentur für Arbeit normalerweise eine Sperrzeit von 12 Wochen für den Bezug von Arbeitslosengeld I, es sei denn, Sie haben einen wichtigen Grund für die Kündigung.',
  },
  {
    question: 'Was passiert, wenn ich die Kündigungsfrist nicht einhalte?',
    answer:
      'Wenn Sie die Frist nicht einhalten, kann der Arbeitgeber Schadensersatz verlangen. Zudem kann das Enddatum im Arbeitszeugnis negativ vermerkt werden. Es ist sehr wichtig, das Austrittsdatum korrekt zu berechnen.',
  },
  {
    question: 'Kann ich meine Kündigung zurückziehen?',
    answer:
      'Eine Kündigung ist eine einseitige, empfangsbedürftige Willenserklärung. Sobald sie dem Arbeitgeber zugegangen ist, kann sie nur mit dessen Zustimmung zurückgenommen werden.',
  },
  {
    question: 'Muss das Kündigungsschreiben handschriftlich sein?',
    answer:
      'In Deutschland schreibt § 623 BGB die Schriftform vor. Das bedeutet, das Schreiben muss auf Papier ausgedruckt und eigenhändig unterschrieben sein. Eine E-Mail oder ein Scan reicht rechtlich nicht aus.',
  },
];

const howToData = [
  {
    name: 'Persönliche Daten ausfüllen',
    text: 'Geben Sie Ihren vollständigen Namen, den Namen Ihres Vorgesetzten oder HR-Kontakts und den Firmennamen ein.',
  },
  {
    name: 'Letzten Arbeitstag festlegen',
    text: 'Wählen Sie Ihr Austrittsdatum unter Berücksichtigung der vertraglichen Kündigungsfrist.',
  },
  {
    name: 'Kündigungsgrund wählen',
    text: 'Wählen Sie den Ansatz, der am besten zu Ihrer Situation passt, um den Text zu personalisieren.',
  },
  {
    name: 'Kopieren oder herunterladen',
    text: 'Klicken Sie auf die Schaltfläche, um den Text in die Zwischenablage zu kopieren oder direkt als PDF zu speichern.',
  },
];

const bibliography = [
  {
    name: 'Bundesministerium für Arbeit und Soziales - Kündigungsschutz',
    url: 'https://www.bmas.de',
  },
  {
    name: 'Bürgerliches Gesetzbuch (BGB) - § 623 Schriftform',
    url: 'https://www.gesetze-im-internet.de/bgb/__623.html',
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

export const content: ToolLocaleContent<ResignationLetterGeneratorUI> = {
  slug,
  title,
  description,
  ui: {
    labelUserName: 'Ihr vollständiger Name',
    labelManagerName: 'Name des Vorgesetzten / HR',
    labelManagerGender: 'Anrede',
    labelCompanyName: 'Firmenname',
    labelLastDay: 'Ihr letzter Arbeitstag',
    labelReasonType: 'Art der Kündigung',
    labelCity: 'Ort',
    optGenderNeutral: 'Sehr geehrte Damen und Herren',
    optGenderM: 'Sehr geehrter Herr',
    optGenderF: 'Sehr geehrte Frau',
    optReasonStandard: 'Standard (Professionell)',
    optReasonOpportunity: 'Neue berufliche Herausforderung',
    optReasonPersonal: 'Persönliche Gründe',
    optReasonEducation: 'Weiterbildung / Studium',
    optReasonGrowth: 'Mangelnde Entwicklungsmöglichkeiten',
    optReasonDirect: 'Direkt und kurz (Ohne Angabe)',
    btnCopy: 'Text kopieren',
    btnDownload: 'Als PDF laden',
    copyFeedback: 'In Zwischenablage kopiert',
    defaultUserName: 'Max Mustermann',
    defaultManagerName: 'Erika Musterfrau',
    defaultCompanyName: 'Muster GmbH',
    defaultCity: 'Berlin',
    dateLocale: 'de-DE',
    datePrefix: 'den ',
    managerPrefix: 'z. Hd.',
    managerFallback: 'Personalabteilung',
    companyFallback: 'Unternehmen',
    salutationNeutral: 'Sehr geehrte Damen und Herren',
    salutationM: 'Sehr geehrter Herr',
    salutationF: 'Sehr geehrte Frau',
    salutationFallback: 'Damen und Herren',
    signatureFallback: 'Unterschrift Arbeitnehmer',
    thanksParagraph:
      'Ich bedanke mich herzlich für die Möglichkeiten zur beruflichen und persönlichen Weiterentwicklung, die mir während meiner Zeit im Unternehmen geboten wurden.',
    transitionParagraph:
      'Selbstverständlich werde ich bis zu meinem Ausscheiden eine ordnungsgemäße Übergabe meiner Aufgaben sicherstellen und meine laufenden Projekte bestmöglich abschließen.',
    closingWord: 'Mit freundlichen Grüßen,',
    reasonStandard:
      'hiermit kündige ich meinen Arbeitsvertrag ordentlich und fristgerecht zum [DATE]. Die Kündigung erfolgt unter Einhaltung der vertraglich vereinbarten Kündigungsfrist.',
    reasonOpportunity:
      'hiermit kündige ich mein bestehendes Arbeitsverhältnis zum [DATE], da ich mich einer neuen beruflichen Herausforderung stellen möchte. Mein letzter Arbeitstag wird der [DATE] sein.',
    reasonPersonal:
      'aufgrund persönlicher Umstände, die meine volle Aufmerksamkeit erfordern, kündige ich hiermit meinen Arbeitsvertrag zum [DATE].',
    reasonEducation:
      'ich habe mich dazu entschlossen, ein Vollzeitstudium bzw. eine Weiterbildung aufzunehmen und kündige daher mein Arbeitsverhältnis zum [DATE].',
    reasonGrowth:
      'nach reiflicher Überlegung habe ich mich dazu entschieden, mich beruflich neu zu orientieren, um mich in anderen Bereichen weiterzuentwickeln. Ich kündige daher zum [DATE].',
    reasonDirect:
      'hiermit kündige ich meinen Arbeitsvertrag fristgerecht zum [DATE].',
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
      text: 'So schreiben Sie eine korrekte Kündigung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Entscheidung, einen Job zu verlassen, ist ein wichtiger Schritt. Ein <strong>Kündigungsschreiben</strong> ist nicht nur eine Formalität, sondern ein rechtlich bindendes Dokument, das den letzten Eindruck hinterlässt.',
    },
    {
      type: 'tip',
      html: '<strong>Wichtiger Hinweis:</strong> In Deutschland ist die <strong>Schriftform zwingend</strong> (§ 623 BGB). Eine Kündigung per E-Mail, WhatsApp oder Fax ist unwirksam.',
    },
    {
      type: 'title',
      text: 'Pflichtangaben in der Kündigung',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Name und Anschrift von Arbeitnehmer und Arbeitgeber',
        'Das aktuelle Datum',
        'Eindeutige Kündigungserklärung',
        'Der genaue Beendigungszeitpunkt (Datum)',
        'Handschriftliche Unterschrift des Arbeitnehmers',
      ],
    },
    {
      type: 'title',
      text: 'Kündigungsfristen',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Gesetzliche Frist: 4 Wochen zum 15. oder Monatsende.',
        'In der Probezeit: Meist 2 Wochen zu jedem Tag.',
        'Vertragliche Fristen: Können individuell länger vereinbart sein.',
      ],
    },
    {
      type: 'code',
      code: '[Ort, Datum]\n\nKündigung meines Arbeitsverhältnisses\n\nSehr geehrte(r) [Name],\n\nhiermit kündige ich meinen Arbeitsvertrag fristgerecht zum [Datum].\n\nMit freundlichen Grüßen,\n[Unterschrift]',
    },
  ],
};
