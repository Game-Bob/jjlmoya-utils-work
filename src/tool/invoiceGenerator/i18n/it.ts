import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InvoiceGeneratorUI } from '../ui';

const slug = 'generatore-fatture';
const title = 'Generatore di Fatture Gratuito per Freelance e Piccole Imprese';
const description =
  'Crea fatture professionali online gratuitamente. Inserisci i tuoi dati, aggiungi i servizi, imposta l\'IVA e la ritenuta, quindi genera un PDF pronto per la stampa. Nessun account richiesto.';

const faqData = [
  {
    question: 'Quali informazioni deve includere una fattura professionale?',
    answer:
      'Una fattura professionale deve includere un numero di fattura univoco, la data della fattura, il nome completo dell\'attività e le informazioni di contatto (inclusa la Partita IVA o il Codice Fiscale), i dati dell\'azienda cliente, un elenco dettagliato dei servizi o prodotti con quantità e prezzi unitari, l\'IVA applicabile e termini di pagamento chiari.',
  },
  {
    question: 'I freelance devono addebitare l\'IVA sui servizi?',
    answer:
      'Dipende dal tuo regime fiscale e dal tipo di servizio. In Italia, i freelance nel regime forfettario non addebitano l\'IVA in fattura, mentre quelli nel regime ordinario devono farlo. Consulta un commercialista per la tua situazione specifica.',
  },
  {
    question: 'Cos\'è la ritenuta d\'acconto e quando si applica?',
    answer:
      'La ritenuta d\'acconto è un\'anticipazione delle tasse che il cliente trattiene dal tuo pagamento per versarla allo Stato a tuo nome. Si applica generalmente ai professionisti che prestano servizi ad aziende o altri professionisti.',
  },
  {
    question: 'Dovrei usare il mio Codice Fiscale o la Partita IVA sulle fatture?',
    answer:
      'È necessario includere entrambi se possiedi una Partita IVA. Se operi come ditta individuale o libero professionista, la Partita IVA è il riferimento principale per le operazioni commerciali.',
  },
];

const howToData = [
  {
    name: 'Inserisci le informazioni della tua attività',
    text: 'Clicca su "La Mia Azienda" e sostituiscilo con il nome reale della tua attività, Partita IVA, indirizzo e email di contatto.',
  },
  {
    name: 'Compila i dettagli del cliente',
    text: 'Sotto "Fatturato a:", clicca su ogni campo per inserire il nome dell\'azienda cliente, Partita IVA, indirizzo ed email.',
  },
  {
    name: 'Aggiungi i servizi e imposta le tariffe',
    text: 'Descrivi ogni servizio nella tabella, imposta quantità e prezzo unitario. Clicca su "Aggiungi Riga" per includere ulteriori voci.',
  },
  {
    name: 'Esamina i totali e genera il PDF',
    text: 'Verifica che tutti gli importi siano corretti, imposta la percentuale IVA se applicabile e clicca su "Genera PDF" per stampare o salvare come PDF.',
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

export const content: ToolLocaleContent<InvoiceGeneratorUI> = {
  slug,
  title,
  description,
  ui: {
    labelEditor: 'Editor Interattivo',
    labelEditHint: 'Clicca su qualsiasi testo nel documento per modificarlo direttamente.',
    btnGenerate: 'Genera PDF',
    labelFrom: 'Da:',
    labelTo: 'Fatturato a:',
    labelDesc: 'Descrizione del Servizio o Prodotto',
    labelQty: 'Qtà',
    labelPrice: 'Prezzo',
    labelAmount: 'Importo',
    btnAddRow: 'Aggiungi Riga',
    labelSubtotal: 'Subtotale:',
    labelTax: 'IVA',
    labelWithholding: 'Ritenuta',
    labelTotal: 'Totale:',
    defaultInvoiceTitle: 'FATTURA',
    defaultInvoiceNum: 'FAT-24-001',
    defaultCompanyName: 'La Mia Azienda',
    defaultCompanyId: 'P.IVA IT12345678901',
    defaultAddress: 'Via Roma 123',
    defaultCity: '00184 Roma, RM',
    defaultEmail: 'info@lamiaazienda.it',
    placeholderDesc: 'Aggiungi descrizione...',
    placeholderNotes: 'es. Pagamento entro 30 giorni tramite bonifico bancario...',
    labelNotes: 'Note / Termini di Pagamento',
    currencySymbol: '€',
    defaultTaxRate: '22',
    defaultRetRate: '0',
  },
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Fonti',
  bibliography: [
    { name: 'Guida alla Fatturazione - Agenzia delle Entrate', url: 'https://www.agenziaentrate.gov.it/' },
    { name: 'Informazioni Partita IVA Freelance', url: 'https://www.agenziaentrate.gov.it/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Elementi Essenziali di una Fattura Professionale',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Una fattura commerciale valida è più di una semplice richiesta di pagamento: è un documento legale che protegge sia te che il tuo cliente. La mancanza di un campo obbligatorio può ritardare il pagamento, causare problemi fiscali o rendere la fattura non esigibile. Per i freelance e i collaboratori indipendenti, impostare correttamente la fatturazione è fondamentale.',
    },
    {
      type: 'card',
      title: 'Campi Obbligatori in una Fattura Italiana',
      html: '<ul><li><strong>Numero fattura:</strong> Deve essere progressivo e senza salti (es. 2024/001, 2024/002).</li><li><strong>Data fattura:</strong> La data di emissione del documento.</li><li><strong>Info venditore e acquirente:</strong> Nome legale completo, Partita IVA o Codice Fiscale, e indirizzo di entrambe le parti.</li><li><strong>Dettaglio servizi:</strong> Descrizione, quantità e prezzo unitario per ogni voce.</li><li><strong>Termini di pagamento:</strong> Scadenza, metodi di pagamento accettati ed eventuali note fiscali.</li></ul>',
    },
    {
      type: 'title',
      text: 'IVA e Ritenuta d\'Acconto nelle Fatture Freelance',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Due variabili fiscali influenzano l\'importo finale. L\'<strong>IVA</strong> viene raccolta dal cliente e versata allo Stato: è un costo aggiuntivo per il cliente. La <strong>Ritenuta d\'Acconto</strong> viene detratta dal tuo compenso dal cliente e versata all\'erario: riduce l\'importo che ricevi effettivamente come netto ma vale come acconto sulle tue tasse.',
    },
    {
      type: 'code',
      code: 'Servizi prestati            € 1.000,00\n+ IVA (22%)                  € 220,00\n- Ritenuta d\'Acconto (20%)   -€ 200,00\n-----------------------------------------\nPagamento netto ricevuto     € 1.020,00',
    },
    {
      type: 'title',
      text: 'Proteggere la tua Identità Fiscale come Freelance',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Utilizza sempre la tua Partita IVA come riferimento principale. Questo assicura che le transazioni siano registrate correttamente ai fini fiscali e professionali nei documenti condivisi con i clienti.',
    },
    {
      type: 'tip',
      html: '<strong>Salva ogni fattura come PDF:</strong> Si consiglia di conservare i documenti commerciali per almeno 10 anni. Usa il pulsante "Genera PDF" dopo ogni fattura e salvala in una cartella dedicata organizzata per anno e cliente.',
    },
  ],
};
