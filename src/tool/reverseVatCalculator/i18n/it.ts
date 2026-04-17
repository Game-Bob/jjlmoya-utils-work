import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReverseVatCalculatorUI } from '../ui';

const slug = 'scorporo-iva-spagna';
const title = 'Calcolo Scorporo IVA: Calcola Imponibile Spagna';
const description =
  'Calcolatore online per lo scorporo dell\'IVA. Scomponi l\'IVA da qualsiasi importo totale per ottenere la base imponibile. Strumento essenziale per professionisti in Spagna.';

const faqData = [
  {
    question: 'Cosa si intende per scorporo IVA?',
    answer:
      'È il processo di calcolo della base imponibile a partire da un prezzo totale che include già l\'imposta. È fondamentale per i liberi professionisti che devono emettere fatture partendo da un prezzo finale concordato.',
  },
  {
    question: 'Come si calcola lo scorporo IVA manualmente?',
    answer:
      'Per un\'aliquota IVA al 21%, dividi l\'importo totale per 1,21. Il risultato è la base imponibile. La differenza tra il totale e la base è l\'ammontare dell\'IVA.',
  },
  {
    question: 'Quali tipi di IVA esistono in Spagna?',
    answer:
      'Esistono tre tipi: Generale (21%), Ridotta (10% per alimentari, salute, edilizia) e Super-ridotta (4% per generi di prima necessità come pane e latte, libri, farmaci).',
  },
  {
    question: 'Quando è obbligatorio indicare lo scorporo IVA?',
    answer:
      'Sempre quando si emette una fattura professionale o semplificata. È necessario indicare separatamente la base imponibile, l\'aliquota applicata e l\'ammontare dell\'IVA.',
  },
];

const howToData = [
  {
    name: 'Inserisci l\'importo totale',
    text: 'Digita l\'importo finale comprensivo di IVA che desideri scomporre.',
  },
  {
    name: 'Seleziona l\'aliquota IVA',
    text: 'Scegli tra 21%, 10% o 4% in base alla categoria del prodotto o servizio.',
  },
  {
    name: 'Ottieni la base imponibile',
    text: 'Visualizza il calcolo automatico che mostra quanto effettivamente ti spetta al netto delle tasse.',
  },
  {
    name: 'Copia i dati per la fattura',
    text: 'Usa i valori calcolati per compilare i campi imponibile e IVA nel tuo software di fatturazione.',
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

export const content: ToolLocaleContent<ReverseVatCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelTotal: 'Importo Totale (IVA inclusa)',
    labelVatType: 'Aliquota IVA',
    btn21: '21 %',
    btn10: '10 %',
    btn4: '4 %',
    btn0: '0 %',
    labelBase: 'Base Imponibile',
    labelVat: 'Importo IVA',
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
      text: 'Il problema dello scorporo IVA',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Per molti professionisti, calcolare l\'imponibile da un prezzo totale è fonte di errori. L\'errore più comune è pensare che per togliere l\'IVA al 21%, basti sottrarre il 21% dal totale. <strong>È sbagliato!</strong> Questo errore ti fa perdere denaro ogni trimestre.',
    },
    {
      type: 'title',
      text: 'La spiegazione matematica',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L\'IVA si applica <strong>sopra</strong> la base imponibile. Quindi, il prezzo finale è il 121% della base (se l\'IVA è al 21%). Per tornare indietro, non sottraiamo; <strong>dividiamo</strong>. <code>Base = Totale / 1,21</code>.',
    },
    {
      type: 'code',
      code: 'Base Imponibile = Importo Totale / (1 + Aliquota IVA)\nImporto IVA = Importo Totale - Base Imponibile',
    },
  ],
};
