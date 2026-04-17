import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SalaryCalculatorUI } from '../ui';

const slug = 'calcolatore-stipendio-spagna';
const title = 'Calcolatore Stipendio Spagna: Simulatore Stipendio Netto IRPF e Previdenza Sociale';
const description =
  "Scopri quanto guadagnerai effettivamente ogni mese. Calcolo accurato di ritenute, base imponibile e reddito netto secondo le normative spagnole.";

const faqData = [
  {
    question: 'Come viene calcolato lo stipendio netto in Spagna?',
    answer:
      "Lo stipendio netto viene calcolato sottraendo l'importo lordo dalle ritenute IRPF (secondo gli scaglioni) e dai contributi previdenziali (circa il 6,35% del lordo). La percentuale di IRPF varia in base alla situazione personale e al livello di stipendio.",
  },
  {
    question: 'Qual è la differenza tra 12 e 14 mensilità?',
    answer:
      "Con 12 mensilità, la tredicesima e la quattordicesima sono ripartite mensilmente. Con 14 mensilità, si ricevono due pagamenti extra (solitamente a giugno/luglio e a dicembre). Il lordo annuo è lo stesso, cambia solo la distribuzione.",
  },
  {
    question: 'Perché la mia busta paga non corrisponde esattamente al calcolatore?',
    answer:
      "Questo calcolatore utilizza valori approssimativi standard. La busta paga effettiva può variare a causa di: detrazioni specifiche dell'azienda, benefit, figli a carico, disabilità o situazioni personali che influiscono sull'IRPF.",
  },
  {
    question: 'Quale percentuale del mio stipendio trattiene il Fisco?',
    answer:
      "Dipende dallo stipendio. In generale, tra IRPF e Previdenza Sociale, viene trattenuto dal 25% al 45% del lordo. Più alto è lo stipendio, maggiore è la percentuale di ritenuta a causa del sistema progressivo dell'IRPF.",
  },
  {
    question: "Cos'è l'IRPF?",
    answer:
      "L'Imposta sul Reddito delle Persone Fisiche. È un'imposta progressiva: chi guadagna di più paga una percentuale maggiore sugli scaglioni più alti del proprio stipendio.",
  },
];

const howToData = [
  {
    name: 'Inserisci lo stipendio lordo annuo',
    text: "Digita l'importo totale concordato nel tuo contratto prima delle tasse e delle ritenute.",
  },
  {
    name: 'Imposta la situazione familiare',
    text: "Indica se hai figli o familiari a carico, poiché questo riduce la percentuale di IRPF applicata.",
  },
  {
    name: 'Numero di mensilità',
    text: "Scegli se ricevere lo stipendio in 12 mensilità (extra ripartite) o in 14 mensilità.",
  },
  {
    name: 'Esamina il dettaglio mensile',
    text: "Controlla quanto viene destinato alla Previdenza Sociale, all'IRPF e qual è l'esatto reddito netto che arriverà sul tuo conto bancario.",
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
  inLanguage: 'it',
};

export const content: ToolLocaleContent<SalaryCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelGross: 'Stipendio Lordo Annuo',
    labelPays: 'Numero di Mensilità',
    btn12: '12 Mensilità',
    btn14: '14 Mensilità',
    labelAge: 'Età',
    labelContract: 'Tipo di Contratto',
    optIndefinite: 'Indeterminato / Generale',
    optTemporal: 'Temporaneo',
    btnCalculate: 'Calcola Stipendio Netto',
    labelNetMonthly: 'Stipendio Netto Mensile',
    labelNetAnnual: 'Stipendio Netto Annuo',
    labelPaysDisplay: 'Mensilità',
    labelBreakdown: 'Dettaglio Ritenute (Stimato)',
    labelIRPF: 'IRPF',
    labelSS: 'Previdenza Sociale',
    disclaimer:
      '*Calcolo semplificato per lavoratore celibe/nubile, senza figli e di età inferiore a 65 anni.',
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
      text: "Dove sparisce il mio stipendio lordo?",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "È la sorpresa più comune al primo lavoro: firmi un contratto da 24.000 € all'anno, dividi per 12 aspettandoti 2.000 € al mese, e trovi 1.600 € sul tuo conto. Dove sono gli altri 400 €?",
    },
    {
      type: 'paragraph',
      html: "In Spagna, la differenza tra <strong>Lordo</strong> (ciò che l'azienda paga) e <strong>Netto</strong> (ciò che ricevi) è divisa tra due voci principali: IRPF e Previdenza Sociale. Capirle è fondamentale per negoziare aumenti di stipendio.",
    },
    {
      type: 'title',
      text: "Previdenza Sociale: Il ~6,35% che finanzia il tuo futuro",
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'È un contributo fisso per quasi tutti i lavoratori. Non dipende dal fatto di essere celibi o sposati. Con questo denaro finanzi:',
    },
    {
      type: 'list',
      items: [
        '<strong>Contingenza Comune (4,70%)</strong>: Copre le assenze per malattia comune, infortuni non lavorativi, pensione e maternità.',
        "<strong>Disoccupazione (1,55% o 1,60%)</strong>: Il tuo contributo per richiedere l'indennità di disoccupazione se perdi il lavoro. Varia leggermente se il contratto è temporaneo.",
        '<strong>Formazione Professionale (0,10%)</strong>: Per corsi di formazione sovvenzionati e riqualificazione.',
      ],
    },
    {
      type: 'title',
      text: "IRPF: L'imposta che fa più male",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "È progressiva e può variare dal 2% al 47% a seconda dello stipendio e della situazione personale. Non è un'imposta fissa; è un pagamento anticipato al Fisco. L'azienda calcola quanto dovresti pagare di tasse l'anno prossimo e lo detrae mese per mese.",
    },
    {
      type: 'title',
      text: "Fattori che abbassano l'IRPF",
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Avere figli (specialmente sotto i 3 anni).',
        'Avere una disabilità riconosciuta (>33%).',
        'Avere un coniuge a carico con basso reddito.',
      ],
    },
    {
      type: 'title',
      text: "Scaglioni IRPF Statali (Appross. 2026)",
      level: 3,
    },
    {
      type: 'list',
      items: [
        '0 € - 12.450 €: 19%',
        '12.450 € - 20.200 €: 24%',
        '20.200 € - 35.200 €: 30%',
        '35.200 € - 60.000 €: 37%',
        '> 60.000 €: 45%',
      ],
    },
    {
      type: 'title',
      text: "L'eterna domanda: 12 o 14 mensilità?",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Molti lavoratori preferiscono 14 mensilità per i pagamenti extra in estate e a Natale. Altri preferiscono (o l'azienda impone) di spalmare la paga su 12 mesi. Matematicamente, guadagni esattamente lo stesso all'anno.",
    },
    {
      type: 'list',
      items: [
        '<strong>12 MENSILITÀ</strong>: Guadagni di più ogni mese, ma non hai mensilità extra. Meglio per un flusso di cassa mensile costante.',
        "<strong>14 MENSILITÀ</strong>: Guadagni un po' meno ogni mese, ma ricevi due pagamenti doppi all'anno. Funziona come un \"risparmio forzato\".",
      ],
    },
  ],
};
