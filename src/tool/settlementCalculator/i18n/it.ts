import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SettlementCalculatorUI } from '../ui';

const slug = 'calcolo-liquidazione-spagna';
const title = 'Calcolo Liquidazione Spagna 2026: Calcola il Finiquito';
const description =
  'Calcola la tua liquidazione lorda passo dopo passo: ferie non godute, ratei di tredicesima e quattordicesima e indennità di licenziamento in Spagna.';

const faqData = [
  {
    question: 'Ho diritto alla liquidazione se mi dimetto volontariamente?',
    answer:
      'Sì, certamente. La liquidazione (finiquito) include importi già maturati come i giorni lavorati nel mese, le ferie non godute e i ratei delle mensilità supplementari. Non avrai però diritto all\'indennità di licenziamento né alla disoccupazione.',
  },
  {
    question: 'A quanto ammonta l\'indennità per licenziamento improprio?',
    answer:
      'Per i contratti successivi al 12 febbraio 2012, l\'indennità è di 33 giorni di stipendio per anno lavorato, fino a un massimo di 24 mensilità.',
  },
  {
    question: 'Il datore di lavoro può trattenere soldi se non do il preavviso?',
    answer:
      'Sì. Se il contratto prevede un preavviso (solitamente 15 giorni) e non lo rispetti, l\'azienda ha il diritto di trattenere dal finiquito lo stipendio corrispondente ai giorni di preavviso mancanti.',
  },
  {
    question: 'Cosa succede ai contributi durante la liquidazione delle ferie?',
    answer:
      'Quando vengono pagate le ferie non godute, l\'azienda deve continuare a versare i contributi previdenziali per quei giorni. In quel periodo non è possibile iniziare a percepire la disoccupazione.',
  },
];

const howToData = [
  {
    name: 'Inserisci lo stipendio lordo',
    text: 'Inserisci il tuo stipendio annuale lordo e seleziona il numero di mensilità (12 o 14).',
  },
  {
    name: 'Imposta le date',
    text: 'Inserisci la data di inizio rapporto e l\'ultimo giorno di lavoro previsto.',
  },
  {
    name: 'Aggiungi ferie residue',
    text: 'Specifica quanti giorni di ferie non hai ancora goduto nell\'anno in corso.',
  },
  {
    name: 'Scegli il motivo dell\'uscita',
    text: 'Seleziona la causa della cessazione affinché il simulatore applichi l\'indennità corretta.',
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
  inLanguage: 'it',
};

export const content: ToolLocaleContent<SettlementCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelSalary: 'Stipendio Lordo Annuale',
    labelExtraPayments: 'Numero di mensilità',
    labelStartDate: 'Data Inizio',
    labelEndDate: 'Data Fine',
    labelVacationDays: 'Ferie non godute',
    labelDepartureReason: 'Motivo della cessazione',
    opt12pays: '12 mensilità (extra incluse)',
    opt14pays: '14 mensilità (standard)',
    optImprocedente: 'Licenziamento Improprio (33 gg)',
    optObjetivo: 'Licenziamento Oggettivo (20 gg)',
    optTemporal: 'Fine Contratto Temporaneo (12 gg)',
    optVoluntaria: 'Dimissioni Volontarie (No indennità)',
    labelTotal: 'Liquidazione Totale Stimata',
    labelSeverance: 'Indennità di Licenziamento',
    labelVacation: 'Ferie non godute',
    labelExtras: 'Ratei mensilità extra',
    labelMonthSalary: 'Stipendio Mensile',
    disclaimer:
      'Nota: Questa è una stima lorda basata sulla legge spagnola. L\'importo finale può variare in base a tasse e contributi.',
    btnCopy: 'Copia Riepilogo',
    copySuccess: 'Copiato',
    copySummaryTitle: 'Riepilogo Liquidazione Stimata',
    defaultSalary: '24000',
  },
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Fonti',
  bibliography: [],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Guida alla Liquidazione e Indennità in Spagna',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Comprendere quanto ti spetta alla fine di un rapporto di lavoro in Spagna è fondamentale per tutelare i tuoi diritti, che si tratti di <strong>licenziamento</strong> o <strong>dimissioni</strong>.',
    },
  ],
};
