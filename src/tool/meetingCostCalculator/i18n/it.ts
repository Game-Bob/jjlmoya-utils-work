import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MeetingCostCalculatorUI } from '../ui';

const slug = 'calcolatore-costo-riunione';
const title = 'Calcolatore Costo Riunione Ticker in Tempo Reale';
const description =
  'Scopri in tempo reale quanto costa la tua riunione. Inserisci il numero di partecipanti e lo stipendio medio per vedere l\'importo aumentare ogni secondo.';

const faqData = [
  {
    question: 'Perché è utile misurare il costo di una riunione?',
    answer:
      'Assegnare un valore monetario al tempo della riunione crea consapevolezza produttiva. Aiuta a ridurre le riunioni non necessarie, incoraggia la puntualità e assicura che gli argomenti discussi giustifichino l\'investimento economico del team.',
  },
  {
    question: 'Come viene calcolato il costo in tempo reale?',
    answer:
      'Il sistema prende lo stipendio annuo o orario stimato di ogni partecipante e calcola un tasso di spesa al secondo. Il ticker si aggiorna ad ogni frame di animazione per mostrare il costo accumulato in tempo reale.',
  },
  {
    question: 'Quali costi indiretti non include questo strumento?',
    answer:
      'Questo calcolatore si concentra sui costi diretti di stipendio. Non include i costi opportunità (ciò che i dipendenti avrebbero potuto produrre invece), o i costi fissi generali come l\'affitto dell\'ufficio, le licenze software o le utenze.',
  },
  {
    question: 'Come posso ridurre il costo delle mie riunioni?',
    answer:
      'Definisci un\'agenda chiara, limita i partecipanti alle sole persone essenziali, stabilisci un limite di tempo rigoroso e considera se un messaggio asincrono o un\'email potrebbero ottenere lo stesso risultato.',
  },
];

const howToData = [
  {
    name: 'Inserisci il numero di partecipanti',
    text: 'Digita quante persone stanno partecipando attualmente alla riunione.',
  },
  {
    name: 'Imposta lo stipendio medio',
    text: 'Inserisci una stima dello stipendio annuo lordo medio o della tariffa oraria dei partecipanti per un calcolo accurato.',
  },
  {
    name: 'Avvia il ticker',
    text: 'Premi il pulsante Inizia non appena inizia la riunione e osserva il costo accumularsi in tempo reale.',
  },
  {
    name: 'Ferma e rifletti',
    text: 'Al termine della riunione, metti in pausa il ticker. Esamina il costo totale e valuta se i risultati raggiunti valgono l\'investimento.',
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

export const content: ToolLocaleContent<MeetingCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelAccumulated: 'Costo Accumulato',
    labelAttendees: 'Partecipanti',
    labelSalary: 'Stipendio Medio',
    optAnnual: 'Lordo Annuo',
    optHourly: 'Tariffa Oraria',
    btnStart: 'Inizia Riunione',
    btnPause: 'Pausa',
    btnResume: 'Riprendi',
    btnReset: 'Reset',
    currencySymbol: '€',
    defaultSalary: '45000',
    numberLocale: 'it-IT',
  },
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Fonti',
  bibliography: [
    { name: 'Stop the Meeting Madness (Harvard Business Review)', url: 'https://hbr.org/2017/07/stop-the-meeting-madness' },
    { name: 'Time Wasting at Work (Atlassian)', url: 'https://www.atlassian.com/time-wasting-at-work-infographic' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Perché visualizzare il costo di una riunione?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il tempo è la risorsa più costosa e meno rinnovabile di qualsiasi organizzazione. Questo strumento non è progettato per scoraggiare la collaborazione, ma per favorire una <strong>consapevolezza produttiva</strong>. Quando guardiamo il denaro "bruciare" in tempo reale, diventiamo più puntuali, più concisi e più intenzionali riguardo a ciò che inseriamo nell\'agenda di una riunione.',
    },
    {
      type: 'card',
      title: 'Il calcolo dei costi nascosti',
      html: '<p>Calcoliamo il costo in base allo stipendio annuo lordo o alla tariffa oraria. Per gli stipendi annui, utilizziamo uno standard di settore di <strong>1.750 ore lavorative all\'anno</strong> (considerando vacanze e festività) per convertire lo stipendio in una tariffa oraria.</p><p>La formula di spesa è:<br><code>(Tariffa Oraria × Numero di Partecipanti) / 3600</code><br>Questo produce il costo esatto al secondo mostrato nel ticker.</p>',
    },
    {
      type: 'code',
      code: 'Stipendio Annuo: 45.000 €\nTariffa Oraria: 45.000 € / 1.750 = 25,71 €/ora\nTasso di spesa (4 persone): (25,71 € × 4) / 3600 = 0,028 €/sec\nCosto di una riunione di 1 ora: 102,84 €',
    },
    {
      type: 'title',
      text: 'Consigli per riunioni più efficienti',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>La regola delle 2 pizze:</strong> Popolarizzata da Jeff Bezos: se due pizze non possono nutrire tutti i presenti alla riunione, ci sono troppe persone nella stanza.',
        '<strong>Nessun ordine del giorno, nessuna riunione:</strong> Non accettare mai una riunione senza un\'agenda chiara e obiettivi definiti.',
        '<strong>Riunioni in piedi (Stand-up):</strong> Mantieni in piedi i sync giornalieri. Il disagio fisico favorisce la brevità e mantiene le discussioni mirate.',
        '<strong>Legge di Parkinson:</strong> Il lavoro si espande fino a occupare tutto il tempo disponibile. Imposta slot di 25 o 50 minuti invece di quelli predefiniti di un\'ora.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Usa il ticker dal vivo:</strong> Condividi lo schermo con il ticker del costo della riunione durante i meeting del team. L\'importo visibile crea un incentivo naturale a rimanere in tema e chiudere in tempo.',
    },
  ],
};
