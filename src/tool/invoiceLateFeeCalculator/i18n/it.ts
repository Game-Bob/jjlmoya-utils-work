import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { InvoiceLateFeeCalculatorUI } from '../ui';

const slug = 'calcolatore-penale-ritardo-fattura';
const title = 'Calcolatore della penale per ritardo di pagamento';
const description = 'Calcola una penale semplice partendo da una fattura scaduta, un periodo di tolleranza e il tasso concordato nel contratto. Visualizza giorni addebitati, penale e totale in un riepilogo chiaro.';

const faq = [
  { question: 'Come funziona il calcolo della penale sulla fattura?', answer: 'Il calcolatore sottrae i giorni di tolleranza dai giorni di calendario tra la data di scadenza e la data del calcolo. Per i tassi annuali o mensili, applica in proporzione la percentuale concordata ai giorni addebitati. Un tasso una tantum viene applicato una sola volta dopo la fine della tolleranza.' },
  { question: 'Posso usare un tasso legale di mora?', answer: 'Sì, se hai verificato il tasso e il contratto o la legge applicabile ne consentono l\'uso. Inserisci tu il tasso. Lo strumento non sceglie un paese, non indovina un tasso legale e non decide se la penale sia esigibile.' },
  { question: 'Che cosa cambia il periodo di tolleranza?', answer: 'I giorni di tolleranza vengono esclusi dal periodo successivo alla scadenza prima dell\'inizio della penale. Se la fattura è ancora dentro questo periodo, la penale resta a zero e il risultato indica che la tolleranza è ancora attiva.' },
  { question: 'Il totale include imposte, costi di recupero o interessi composti?', answer: 'No. Il risultato è il capitale nella valuta selezionata più la penale semplice dei tuoi dati. Il cambio valuta usa un fattore indicativo fisso, non un tasso di cambio in tempo reale. Non aggiunge imposte, costi fissi di recupero, spese legali, interessi composti o storico dei pagamenti.' },
];

const howTo = [
  { name: 'Inserisci l\'importo della fattura', text: 'Aggiungi il capitale non pagato e seleziona la valuta della fattura. Se cambi valuta in seguito, l\'importo viene convertito con il fattore indicativo mostrato, non con una quotazione valutaria in tempo reale.' },
  { name: 'Imposta le date', text: 'Scegli la data di scadenza prevista dal contratto e la data fino alla quale controllare il conto. Lo strumento conta i giorni di calendario completi tra le due date.' },
  { name: 'Aggiungi tolleranza e tasso', text: 'Inserisci i giorni di tolleranza e la percentuale concordata per la fattura. Scegli se il tasso è annuale, mensile o una tantum.' },
  { name: 'Controlla il riepilogo', text: 'Verifica giorni dalla scadenza, giorni addebitati, penale e totale. Conserva il riepilogo con la fattura e controlla il contratto prima di inviare una richiesta.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const applicationSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'BusinessApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'it' };

export const content: ToolLocaleContent<InvoiceLateFeeCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    eyebrow: 'FATTURA SCADUTA / RIEPILOGO SEMPLICE',
    intro: 'Trasforma una scadenza mancata in una richiesta chiara.',
    sectionTerms: 'Imposta i termini della fattura',
    labelAmount: 'Importo non pagato della fattura',
    labelCurrency: 'Valuta della fattura',
    currencyConversionHint: 'Cambiare valuta converte l\'importo con un fattore indicativo fisso, non con un tasso di cambio in tempo reale.',
    currencyRateTemplate: '1 EUR ≈ {value} {currency}.',
    labelDueDate: 'Data di scadenza contrattuale',
    labelCalculationDate: 'Calcola fino al',
    labelGraceDays: 'Periodo di tolleranza',
    labelRate: 'Tasso di penale concordato',
    labelRatePeriod: 'Il tasso si applica',
    rateAnnual: 'All\'anno',
    rateMonthly: 'Al mese',
    rateOneTime: 'Una volta',
    sectionReceipt: 'Riepilogo per il recupero',
    labelDaysSinceDue: 'Giorni dalla scadenza',
    labelChargedDays: 'Giorni addebitati',
    labelAppliedRate: 'Tasso applicato',
    labelLateFee: 'Penale per ritardo',
    labelTotalDue: 'Totale da richiedere',
    statusNotDue: 'Non ancora scaduta',
    statusGrace: 'Ancora nel periodo di tolleranza',
    statusOverdue: 'La penale è attiva',
    timelineDue: 'Scadenza',
    timelineToday: 'Controllato fino al',
    timelineGrace: 'giorni addebitabili dopo la tolleranza',
    noteDisclaimer: 'Stima semplice basata sui tuoi dati. Conferma contratto, giurisdizione, trattamento fiscale ed eventuali costi fissi di recupero prima di presentare una richiesta.',
    buttonReset: 'Cancella i termini salvati',
    numberLocale: 'it-IT',
  },
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, applicationSchema],
  seo: [
    { type: 'title', text: 'Spiega con chiarezza una fattura scaduta', level: 2 },
    { type: 'paragraph', html: 'Una richiesta di pagamento è più facile da verificare quando capitale, date, tolleranza, tasso e penale sono visibili insieme. Questo calcolatore trasforma i termini del contratto in un riepilogo in stile ricevuta.' },
    { type: 'card', title: 'La formula semplice', html: '<p><strong>Giorni addebitabili</strong> = giorni tra la scadenza e la data del calcolo - giorni di tolleranza.</p><p><strong>Penale</strong> = importo della fattura × tasso ÷ 100 × fattore temporale. I tassi annuali usano giorni addebitabili ÷ 365, quelli mensili giorni addebitabili ÷ 30 e quelli una tantum si applicano una volta dopo la tolleranza.</p>' },
    { type: 'paragraph', html: 'Il calcolo è volutamente esplicito e non sceglie un tasso legale al posto tuo. Un contratto può prevedere un importo fisso, un tasso annuo o una diversa convenzione per i giorni. Il cambio valuta è solo un aiuto indicativo basato sul fattore selezionato, non una quotazione in tempo reale. Se l\'accordo prevede altro, verifica la clausola e adatta il calcolo fuori da questo strumento.' },
    { type: 'title', text: 'Controlla il risultato prima di chiedere il pagamento', level: 2 },
    { type: 'code', code: 'Fattura: 1.250 €\nGiorni fino al controllo: 38\nPeriodo di tolleranza: 5 giorni\nTasso annuale: 10%\nGiorni addebitabili: 33\nPenale: 1.250 € × 0,10 × 33 / 365 = 11,30 €\nTotale: 1.261,30 €' },
    { type: 'list', items: ['Confronta la scadenza con ordine, fattura o contratto firmato.', 'Usa la data reale in cui prepari la richiesta, non una data di pagamento ipotetica.', 'Tieni separati capitale e penale per permettere al destinatario di verificare entrambi gli importi.', 'Controlla se imposte, costi fissi di recupero o limiti di legge cambiano ciò che puoi richiedere.'] },
    { type: 'tip', html: '<strong>Consiglio sulla documentazione:</strong> conserva insieme fattura, prova di consegna o accettazione, clausola contrattuale e questo calcolo. Lo strumento spiega l\'aritmetica, ma non dimostra che il debito sia esigibile o che la penale sia applicabile.' },
  ],
};
