import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EarlyRetirementSimulatorUI } from '../ui';

const slug = 'fruehrentensimulator-spanien';
const title = 'Frührentensimulator Spanien: Berechnen Sie Ihre Rente';
const description =
  'Berechnen Sie kostenlos Ihr Rentenalter, die Kürzungsfaktoren und die voraussichtliche Rente. Aktualisierter Simulator für den freiwilligen und unfreiwilligen Vorruhestand in Spanien.';

const faqData = [
  {
    question: 'Was ist das Mindestalter für den Vorruhestand in Spanien?',
    answer:
      'Für den freiwilligen Vorruhestand liegt das Mindestalter 2 Jahre vor dem gesetzlichen Alter (in der Regel 63 oder 65 Jahre, je nach Beiträgen). Für den unfreiwilligen Vorruhestand sind es bis zu 4 Jahre vorher (61 oder 63 Jahre).',
  },
  {
    question: 'Wie viele Beitragsjahre benötige ich?',
    answer:
      'Für den freiwilligen Vorruhestand sind mindestens 35 effektive Beitragsjahre erforderlich. Für den unfreiwilligen oder erzwungenen Vorruhestand sind es mindestens 33 Jahre.',
  },
  {
    question: 'Wie viel verliere ich durch den Vorruhestand?',
    answer:
      'Die Kürzung hängt von den Monaten der Vorziehung und der Gesamtzahl der Beitragsjahre ab. Die Kürzungen reichen von 2,81 % für einen einzelnen Monat bis zu einem Maximum von etwa 21 % bei einer vollen Vorziehung von 2 Jahren beim freiwilligen Ruhestand.',
  },
  {
    question: 'Zählt die Zeit der Arbeitslosigkeit für die Rente?',
    answer:
      'Ja, Zeiten, in denen Arbeitslosengeld (paro) bezogen wird, zählen für die Rente, da der SEPE die entsprechenden Beiträge zur Sozialversicherung leistet.',
  },
];

const howToData = [
  {
    name: 'Geben Sie Ihr Geburtsjahr ein',
    text: 'Dies bestimmt Ihr gesetzliches ordentliches Rentenalter nach den im Jahr 2026 geltenden Vorschriften.',
  },
  {
    name: 'Schätzen Sie Ihre Beitragsjahre',
    text: 'Berücksichtigen Sie Beschäftigungszeiten, Selbstständigkeit und Zeiten der beitragspflichtigen Arbeitslosigkeit.',
  },
  {
    name: 'Wählen Sie die Art des Ruhestands',
    text: 'Geben Sie an, ob der Ruhestand freiwillig oder erzwungen ist, um die richtigen Koeffizienten anzuwenden.',
  },
  {
    name: 'Überprüfen Sie Ihre geschätzte Rente',
    text: 'Sehen Sie die angewandte Kürzung und das genaue Datum, an dem Sie aufhören könnten zu arbeiten.',
  },
];

const bibliography = [
  {
    name: 'Sozialversicherung Spanien: Ordentlicher Ruhestand und Vorruhestand',
    url: 'https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/PrestacionesPensionesTrabajadores/10963',
  },
  {
    name: 'Gesetz 21/2021 zur Gewährleistung der Kaufkraft von Renten',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-21652',
  },
  {
    name: 'Offizieller Simulator - Tu Seguridad Social',
    url: 'https://prestaciones.seg-social.es/simulador-servicio/simulador-pension-jubilacion.html',
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

export const content: ToolLocaleContent<EarlyRetirementSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelBirthYear: 'Geburtsjahr',
    labelContributions: 'Beitragsjahre',
    labelBasePension: 'Bruttomonatsbasis',
    labelRetirementAge: 'Rentenalter',
    labelExpectedDate: 'Voraussichtliches Datum',
    labelEstimatedPension: 'Geschätzte Rente',
    labelPermanentReduction: 'Dauerhafte Kürzung',
    labelYears: 'JAHRE',
    btnLegalTitle: 'Standard',
    btnLegalDesc: 'Gesetzliches Rentenalter. Keine Kürzung. 100 % der Basis.',
    btnVoluntaryTitle: 'Freiwillig vorzeitig',
    btnVoluntaryDesc: 'Ruhestand aus eigener Entscheidung. Monatliche Kürzung wird angewendet.',
    btnInvoluntaryTitle: 'Unfreiwillig / ERE',
    btnInvoluntaryDesc: 'Erzwungene Beendigung. Günstigere Koeffizienten.',
    defaultBirthYear: '1975',
    defaultContributions: '30',
    defaultBasePension: '2500',
    adviceDefault: 'Bewegen Sie den Schieberegler, um Ihren Rentenzeitplan zu planen.',
    adviceDefaultWithParams: 'Bewegen Sie den Schieberegler, um Ihren Rentenzeitplan zu planen.',
    adviceDelay:
      'Wenn Sie Ihren Ruhestand auf das Alter von <strong>[AGE]</strong> verschieben, würden Sie etwa <strong>[GAIN] € zusätzlich</strong> pro Monat gewinnen.',
    adviceBonus: 'Sie sammeln einen Verzögerungsbonus an. Ihre Rente wird 100 % der Basis übersteigen.',
    adviceOptimal: 'Sie haben das optimale Standardalter mit 100 % Ihres Anspruchs erreicht.',
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
      text: 'Frührentensimulator für Spanien: Leitfaden 2026',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Der <strong>Vorruhestand</strong> ist eine der größten finanziellen Sorgen für Arbeitnehmer in Spanien. Zu verstehen, wann man aufhören kann zu arbeiten und vor allem, wie viel Geld man durch Kürzungsfaktoren verliert, ist entscheidend für eine gesunde Lebensplanung.',
    },
    {
      type: 'list',
      items: [
        '<strong>Gesetzliches Standardalter:</strong> 67 Jahre (oder 65 Jahre bei ausreichenden Beiträgen).',
        '<strong>Freiwilliger Vorruhestand:</strong> Bis zu 2 Jahre vor der gesetzlichen Grenze.',
        '<strong>Unfreiwilliger Vorruhestand:</strong> Bis zu 4 Jahre vorher (aufgrund von Entlassungen oder anderen Ursachen).',
        '<strong>Kürzungsfaktoren:</strong> Dauerhafte monatliche Rentenkürzungen.',
        '<strong>Beitragsanforderung:</strong> Mindestens 35 Jahre für freiwilligen, 33 Jahre für erzwungenen Ruhestand.',
      ],
    },
    {
      type: 'title',
      text: 'Ab welchem Alter kann ich in Spanien gesetzlich in Rente gehen?',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>65-Jahre-Weg:</strong> Wenn Sie mehr als 38 Jahre und 6 Monate Beiträge gezahlt haben, können Sie mit 65 Jahren mit 100 % Ihrer Basis in Rente gehen.',
        '<strong>67-Jahre-Weg:</strong> Wenn Ihre Beiträge unter diesem Schwellenwert liegen, beträgt Ihr Standardalter 67 Jahre.',
        '<strong>Militärdienst:</strong> Gesetzlicher Militärdienst oder Zivildienst kann mit bis zu 1 Jahr auf die Beiträge angerechnet werden.',
      ],
    },
    {
      type: 'title',
      text: 'Freiwilliger Vorruhestand',
      level: 2,
    },
    {
      type: 'card',
      title: 'Voraussetzungen für den freiwilligen Vorruhestand',
      html: '<ul><li>Ein Alter erreicht haben, das zwei Jahre unter dem gesetzlichen Standardalter liegt.</li><li>Eine effektive Mindestbeitragszeit von 35 Jahren nachweisen.</li><li>Die zu erhaltende Rente muss die Mindestrente übersteigen.</li></ul>',
    },
    {
      type: 'title',
      text: 'Kürzungsfaktoren: Die Kosten des Vorruhestands',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Weniger als 38,5 Beitragsjahre:</strong> Maximale Kürzung von 21 % (2 Jahre Vorziehung).',
        '<strong>Zwischen 38,5 und 41,5 Jahren:</strong> Maximale Kürzung von etwa 19 %.',
        '<strong>Zwischen 41,5 und 44,5 Jahren:</strong> Maximale Kürzung von etwa 17 %.',
        '<strong>Mehr als 44,5 Jahre:</strong> Maximale Kürzung von etwa 15 %.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Goldener Tipp:</strong> Wenn Sie Ihren Vorruhestand um nur einen Monat verschieben, kann dies einen erheblichen Unterschied beim Kürzungsfaktor ausmachen. Berechnen Sie immer den Vorteil, ein paar Tage länger zu warten, wenn Sie sich nahe an einer monatlichen Schwellengrenze befinden.',
    },
    {
      type: 'title',
      text: 'Unfreiwilliger oder erzwungener Vorruhestand',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Maximale Vorziehung:</strong> 4 Jahre (48 Monate) vor dem Standardalter.',
        '<strong>Erforderliche Beiträge:</strong> 33 Jahre.',
        '<strong>Bedingung:</strong> Sie müssen mindestens 6 Monate zuvor als arbeitssuchend gemeldet gewesen sein.',
        '<strong>Koeffizienten:</strong> Günstiger als beim freiwilligen Ruhestand, aber die Auswirkungen von 4 Jahren sind dennoch gravierend.',
      ],
    },
    {
      type: 'card',
      title: 'Praxisbeispiel',
      html: '<p>Ein Arbeitnehmer mit einer Basis von 2.000 €, der mit 36 Beitragsjahren 2 Jahre vorzeitig freiwillig in Rente geht. Die Kürzung beträgt etwa 21 %, sodass die Rente für den Rest des Lebens bei rund <strong>1.580 € pro Monat</strong> liegt.</p>',
    },
  ],
};
