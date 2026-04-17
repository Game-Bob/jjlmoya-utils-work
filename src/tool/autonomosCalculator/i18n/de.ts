import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AutonomosCalculatorUI } from '../ui';

const slug = 'freiberufler-quotenrechner-spanien';
const title = 'Freiberufler Quotenrechner 2026: Spanien RETA Realsystem';
const description =
  'Kostenloser Simulator für Selbstständigenbeiträge in Spanien 2026. Berechnen Sie Ihr Realeinkommen, Beitragsstufen und monatliche Quote mit dem neuen MEI von 0,9 %.';

const faqData = [
  {
    question: 'Wie funktioniert das neue Beitragssystem für 2026?',
    answer:
      'Das System basiert auf 15 Stufen des realen Nettoeinkommens. Sie müssen eine Prognose Ihrer Gewinne (Einnahmen minus Ausgaben) abgeben und den Beitrag zahlen, der dieser monatlichen Stufe zugeordnet ist.',
  },
  {
    question: 'Was ist der MEI und wie beeinflusst er meine Selbstständigenquote?',
    answer:
      'Der Generationengerechtigkeitsmechanismus (MEI) ist eine zweckgebundene Steuer für Renten. Im Jahr 2026 steigt er auf 0,9 %, was den Beitrag im Vergleich zu 2025 für alle Selbstständigen leicht erhöht.',
  },
  {
    question: 'Wie oft kann ich meine Beitragsbemessungsgrundlage ändern?',
    answer:
      'Sie können Ihre Beitragsbemessungsgrundlage und damit Ihre Selbstständigenquote bis zu 6 Mal im Jahr ändern, um sie an die Realität Ihrer monatlichen Gewinne anzupassen.',
  },
  {
    question: 'Was passiert, wenn mein tatsächliches Einkommen von meiner Prognose abweicht?',
     answer:
      'Die Sozialversicherung führt einen jährlichen Abgleich durch, indem sie Daten mit der Steuerbehörde austauscht. Wenn Sie zu wenig bezahlt haben, wird die Differenz nachgefordert; wenn Sie zu viel bezahlt haben, wird der Überschuss automatisch zurückerstattet.',
  },
  {
    question: 'Gibt es die Flatrate von 80 Euro noch?',
    answer:
      'Ja, die ermäßigte Gebühr von 80 € wird für neue Selbstständige in den ersten 12 Monaten der Tätigkeit beibehalten und kann um weitere 12 Monate verlängert werden, wenn das Einkommen unter dem Mindestlohn liegt.',
  },
];

const howToData = [
  {
    name: 'Einnahmen und Ausgaben eingeben',
    text: 'Geben Sie Ihren erwarteten monatlichen Umsatz und die abzugsfähigen Ausgaben Ihrer beruflichen Tätigkeit ein.',
  },
  {
    name: 'Arbeitsprofil definieren',
    text: 'Wählen Sie aus, ob Sie eine selbstständige Einzelperson (7 % Abzug) oder ein Geschäftsführer (3 % Abzug) sind.',
  },
  {
    name: 'Aktuelle Stufe anzeigen',
    text: 'Der Simulator berechnet Ihr Nettoeinkommen und zeigt Ihnen die für 2026 geltende Beitragsstufe an.',
  },
  {
    name: 'MEI-Auswirkung prüfen',
    text: 'Sie sehen die endgültige Quotenaufschlüsselung einschließlich Eventualitäten und des neuen Generationengerechtigkeitsfaktors.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'de',
};

export const content: ToolLocaleContent<AutonomosCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelIncome: 'Monatliches Bruttoeinkommen',
    labelExpenses: 'Monatliche abzugsfähige Ausgaben',
    labelType: 'Arbeitnehmerprofil',
    labelFlatRate: 'Flatrate (Neuanmeldung)',
    optStandard: 'Einzel-Selbstständiger (7 % Abzug)',
    optSocietario: 'Geschäftsführer (3 % Abzug)',
    optNoFlatRate: 'Nicht angewendet (Reale Quote)',
    optFlatRate: 'Ja, erstes Jahr (80 €/Monat)',
    labelBracket: 'Ihre Nettoeinkommensstufe',
    labelNetDisplay: 'Monatliches Nettoeinkommen',
    labelCuota: 'Sozialversicherungsbeitrag',
    labelBase: 'Beitragsbemessungsgrundlage',
    labelNetAfter: 'Reales Netto (nach Beitrag)',
    labelProjection: 'PROGNOSE 2026 (MEI 0,9 %)',
    infoText:
      'RETA 2026 System: Die Berechnung umfasst das monatliche Nettoeinkommen mit dem allgemeinen Ausgabenabzug (7 % oder 3 %). Der angezeigte Beitrag umfasst allgemeine Eventualitäten, berufliche Eventualitäten, Einstellung der Tätigkeit, Ausbildung und den für 2026 auf 0,9 % aktualisierten Generationengerechtigkeitsmechanismus (MEI).',
  },
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Quellen',
  bibliography: [
    {
      name: 'Sozialversicherung: Neues Beitragssystem',
      url: 'https://portal.seg-social.gob.es/wps/portal/importass/importass/Colectivos/Trabajo+Autonomo/guia',
    },
    {
      name: 'Steuerbehörde: Einkünfte aus wirtschaftlichen Tätigkeiten',
      url: 'https://sede.agenciatributaria.gob.es/Sede/irpf/empresarios-individuales-profesionales/rendimientos-actividades-economicas.html',
    },
    {
      name: 'BOE: Königliches Dekret-Gesetz 13/2022 zur RETA-Reform',
      url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2022-12482',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Quotenrechner für Selbstständige 2026: Leitfaden zum neuen System',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In Spanien selbstständig zu sein bedeutet, sich einer der dynamischsten und manchmal verwirrendsten Aufgaben zu stellen: den <strong>Sozialversicherungsbeiträgen</strong>. Seit das neue System auf Basis des <strong>realen Nettoeinkommens</strong> in Kraft getreten ist, ist das Konzept einer „festen Quote“ verschwunden und wurde durch ein progressives Modell ersetzt.',
    },
    {
      type: 'title',
      text: 'Wie funktioniert das neue RETA-Beitragssystem?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bis 2023 konnte jeder Selbstständige seine Beitragsbemessungsgrundlage frei wählen, was dazu führte, dass die meisten den Mindestbeitrag zahlten. Die Reform zielt darauf ab, dass Besserverdienende mehr beitragen, während Geringverdiener ihre monatliche Belastung reduziert sehen.',
    },
    {
      type: 'paragraph',
      html: 'Das System basiert auf <strong>Nettoeinkommensstufen</strong>. Das bedeutet, dass Ihre Quote nicht von Ihrem Bruttoeinkommen (Umsatz) abhängt, sondern von dem, was Sie nach Abzug der beruflichen Ausgaben und Anwendung eines zusätzlichen Pauschalabzugs tatsächlich „sauber“ behalten.',
    },
    {
      type: 'title',
      text: 'Wichtige Änderungen für 2026: Der MEI-Faktor',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Das Jahr 2026 markiert die Konsolidierung der zweiten Phase der Reform. Eine der kritischsten Aktualisierungen ist die Erhöhung des <strong>Generationengerechtigkeitsmechanismus (MEI)</strong>.',
    },
    {
      type: 'list',
      items: [
        '<strong>MEI-Erhöhung:</strong> Für 2026 steigt der MEI auf 0,9 %, was eine leichte Erhöhung des Beitrags im Vergleich zu 2025 für alle Stufen bedeutet.',
        '<strong>Stufenüberprüfung:</strong> Die Nettoeinkommensstufen werden beibehalten, aber die Mindest- und Höchstbeiträge jeder Spanne werden angepasst, um mit dem Beitragssystem für das reale Einkommen zu konvergieren.',
        '<strong>Jährlicher Abgleich:</strong> Am Jahresende wird die Sozialversicherung Daten mit der Steuerbehörde abgleichen. Wenn Sie basierend auf den tatsächlichen Gewinnen zu viel oder zu wenig bezahlt haben, erfolgt eine Rückerstattung oder eine Nachforderung.',
      ],
    },
    {
      type: 'title',
      text: 'So berechnen Sie Ihr monatliches Nettoeinkommen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Um unseren Rechner genau zu nutzen, ist es wichtig zu verstehen, welcher Betrag eingegeben werden muss. Die von der Sozialversicherung angewandte Formel lautet:',
    },
    {
      type: 'code',
      code: 'Nettoeinkommen = (Bruttoeinkommen - abzugsfähige Ausgaben) / (1 - Pauschalabzug)',
    },
    {
      type: 'paragraph',
      html: 'Der <strong>Pauschalabzug</strong> beträgt <strong>7 %</strong> für Einzel-Selbstständige und <strong>3 %</strong> für Geschäftsführer.',
    },
    {
      type: 'card',
      title: 'Beispielrechnung 2026',
      html: '<ul><li>Umsatz: 4.000 € / Ausgaben: 1.000 €</li><li>Gewinnspanne: 3.000 €</li><li>Pauschalabzug (7 %): 210 €</li><li>Anrechenbares Nettoeinkommen: 2.790 €</li><li><strong>Geschätzte Quote 2026:</strong> Stufe 8, ca. 350 € + MEI-Anpassung.</li></ul>',
    },
    {
      type: 'title',
      text: 'Vorteile des progressiven Systems',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Besserer sozialer Schutz:</strong> Durch Beiträge auf realistischeren Grundlagen werden Leistungen bei vorübergehender Erwerbsunfähigkeit, Mutterschaft, Vaterschaft und insbesondere die Rente deutlich höher ausfallen.',
        '<strong>Volle Flexibilität:</strong> Sie können Ihre Beitragsbemessungsgrundlage bis zu 6 Mal im Jahr ändern. Wenn Sie einen drastischen Einkommensrückgang erwarten, können Sie in eine niedrigere Stufe wechseln, um Liquiditätsengpässe zu vermeiden.',
        '<strong>80 € Flatrate:</strong> Wird für neue Unternehmer im ersten Jahr beibehalten, was einen Start mit kontrollierten Fixkosten ermöglicht.',
      ],
    },
    {
      type: 'title',
      text: 'Geschäftsführer vs. Einzel-Selbstständiger',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Der <strong>Geschäftsführer</strong> (mit einer SL-Gesellschaft) hat eine etwas höhere Mindestbeitragsbemessungsgrundlage und der Pauschalabzug ist niedriger (3 %). Dies liegt daran, dass das Gesetz davon ausgeht, dass die Kontrolle durch die Gesellschafter ihnen eine andere Position im Vergleich zu Marktrisiken verschafft.',
    },
    {
      type: 'tip',
      html: '<strong>Pro-Tipp:</strong> Wenn Ihr Nettoeinkommen von Monat zu Monat stark variiert, versuchen Sie, sich in einer vorsichtigen mittleren Stufe zu positionieren. Der spätere Abgleich ist unvermeidlich, aber auf diese Weise vermeiden Sie unerwartete Zahlungen in Höhe von Tausenden von Euro, wenn am Jahresende die „Rechnung“ der Sozialversicherung eintrifft.',
    },
    {
      type: 'title',
      text: 'Was beinhaltet Ihre monatliche Quote?',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Allgemeine Eventualitäten (28,30 %):</strong> Deckt Fehlzeiten aufgrund von allgemeiner Krankheit oder Nicht-Arbeitsunfällen ab.',
        '<strong>Berufliche Eventualitäten (1,30 %):</strong> Arbeitsunfälle und Berufskrankheiten.',
        '<strong>Einstellung der Tätigkeit (0,90 %):</strong> Das „Arbeitslosengeld“ für Selbstständige.',
        '<strong>Berufliche Bildung (0,10 %):</strong> Zugang zu Kursen und Schulungen.',
        '<strong>MEI (0,90 % im Jahr 2026):</strong> Fonds zur Gewährleistung der Nachhaltigkeit der Renten.',
      ],
    },
    {
      type: 'title',
      text: 'Der Abgleichprozess (Steuerbehörde und Sozialversicherung)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Jedes Jahr nach der Steuererklärungskampagne teilt die Steuerbehörde der Sozialversicherung Ihr tatsächliches Nettoeinkommen mit. Wenn Sie eine niedrigere Stufe gewählt haben, als Ihr tatsächliches Einkommen erforderte, erhalten Sie einen Zahlungsbescheid über die Differenz. Wenn Sie hingegen mehr als Ihre Gewinne eingezahlt haben, erstattet die Sozialversicherung den Überschuss automatisch zurück, ohne dass Sie dies ausdrücklich beantragen müssen.',
    },
    {
      type: 'title',
      text: 'Fazit und Empfehlungen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Der <strong>Selbstständigen-Rechner 2026</strong> ist ein unverzichtbares Instrument für die Steuerplanung für jeden Freelancer. Wir empfehlen, diesen Simulator jedes Mal zu nutzen, wenn Sie einen wichtigen Vertrag abschließen oder Ihre Fixkosten ändern, um sicherzustellen, dass Ihre Selbstständigenquote immer Ihrer geschäftlichen Realität entspricht.',
    },
  ],
};
