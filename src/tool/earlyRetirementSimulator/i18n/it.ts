import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EarlyRetirementSimulatorUI } from '../ui';

const slug = 'simulatore-pensione-anticipata-spagna';
const title = 'Simulatore Pensione Anticipata Spagna: Calcola la tua Pensione';
const description =
  'Calcola gratuitamente la tua età pensionabile, i coefficienti di riduzione e la pensione stimata. Simulatore aggiornato per il pensionamento anticipato volontario e involontario in Spagna.';

const faqData = [
  {
    question: "Qual è l'età minima per il pensionamento anticipato in Spagna?",
    answer:
      "Per il pensionamento anticipato volontario, l'età minima è di 2 anni prima dell'età legale (generalmente 63 o 65 anni a seconda dei contributi). Per il pensionamento involontario, è fino a 4 anni prima (61 o 63 anni).",
  },
  {
    question: 'Di quanti anni di contributi ho bisogno?',
    answer:
      'Per il pensionamento anticipato volontario sono richiesti almeno 35 anni di contributi effettivi. Per il pensionamento involontario o forzato, il minimo è di 33 anni.',
  },
  {
    question: 'Quanto perderò andando in pensione anticipata?',
    answer:
      "La riduzione dipende dai mesi di anticipo e dagli anni totali versati. I tagli vanno dal 2,81% per un singolo mese fino a un massimo di circa il 21% per l'anticipo volontario completo di 2 anni.",
  },
  {
    question: "Il periodo di disoccupazione conta ai fini della pensione?",
    answer:
      "Sì, il tempo trascorso percependo l'indennità di disoccupazione (paro) conta ai fini della pensione, poiché il SEPE versa i contributi corrispondenti alla Previdenza Sociale.",
  },
];

const howToData = [
  {
    name: 'Inserisci il tuo anno di nascita',
    text: "Questo determina la tua età pensionabile ordinaria legale secondo le normative vigenti nel 2026.",
  },
  {
    name: 'Stima i tuoi anni di contributi',
    text: 'Includi il tempo di lavoro dipendente, autonomo e i periodi di disoccupazione contributiva.',
  },
  {
    name: 'Scegli il tipo di pensionamento',
    text: "Indica se il pensionamento è volontario o forzato per applicare i coefficienti corretti.",
  },
  {
    name: 'Esamina la tua pensione stimata',
    text: "Visualizza la riduzione applicata e la data esatta in cui potresti smettere di lavorare.",
  },
];

const bibliography = [
  {
    name: 'Previdenza Sociale Spagna: Pensionamento Ordinario e Anticipato',
    url: 'https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/PrestacionesPensionesTrabajadores/10963',
  },
  {
    name: "Legge 21/2021 sulla garanzia del potere d'acquisto delle pensioni",
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-21652',
  },
  {
    name: 'Simulatore Ufficiale - Tu Seguridad Social',
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
  inLanguage: 'it',
};

export const content: ToolLocaleContent<EarlyRetirementSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelBirthYear: 'Anno di Nascita',
    labelContributions: 'Anni Contribuiti',
    labelBasePension: 'Base Mensile Lorda',
    labelRetirementAge: 'Età Pensionabile',
    labelExpectedDate: 'Data Prevista',
    labelEstimatedPension: 'Pensione Stimata',
    labelPermanentReduction: 'Riduzione Permanente',
    labelYears: 'ANNI',
    btnLegalTitle: 'Standard',
    btnLegalDesc: 'Età pensionabile legale. Nessuna riduzione. 100% della base.',
    btnVoluntaryTitle: 'Anticipata Volontaria',
    btnVoluntaryDesc: 'Pensionamento per scelta personale. Riduzione mensile applicata.',
    btnInvoluntaryTitle: 'Involontaria / ERE',
    btnInvoluntaryDesc: 'Cessazione forzata. Coefficienti più favorevoli.',
    defaultBirthYear: '1975',
    defaultContributions: '30',
    defaultBasePension: '2500',
    adviceDefault: 'Muovi lo slider per proiettare la tua cronologia pensionistica.',
    adviceDefaultWithParams: 'Muovi lo slider per proiettare la tua cronologia pensionistica.',
    adviceDelay:
      "Se ritardi il pensionamento all'età di <strong>[AGE]</strong>, guadagneresti circa <strong>[GAIN] € extra</strong> al mese.",
    adviceBonus: 'Stai accumulando un bonus per il ritardo. La tua pensione supererà il 100% della base.',
    adviceOptimal: "Hai raggiunto l'età standard ottimale con il 100% dei tuoi diritti.",
  },
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Fonti',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Simulatore Pensione Anticipata per la Spagna: Guida 2026',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il <strong>pensionamento anticipato</strong> è una delle maggiori preoccupazioni finanziarie per i lavoratori in Spagna. Capire quando è possibile smettere di lavorare e, soprattutto, quanto denaro si perderà attraverso i coefficienti di riduzione è fondamentale per una sana pianificazione della vita.',
    },
    {
      type: 'list',
      items: [
        '<strong>Età legale standard:</strong> 67 anni (o 65 anni con contributi sufficienti).',
        '<strong>Pensionamento Anticipato Volontario:</strong> Fino a 2 anni prima del limite legale.',
        '<strong>Pensionamento Anticipato Involontario:</strong> Fino a 4 anni prima (a causa di licenziamenti o altre cause).',
        '<strong>Coefficienti di Riduzione:</strong> Tagli mensili permanenti alla pensione.',
        '<strong>Requisito contributivo:</strong> Minimo 35 anni per il volontario, 33 anni per quello forzato.',
      ],
    },
    {
      type: 'title',
      text: "A che età posso andare legalmente in pensione in Spagna?",
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Percorso dei 65 anni:</strong> Se hai contribuito per più di 38 anni e 6 mesi, puoi andare in pensione a 65 anni con il 100% della tua base.',
        '<strong>Percorso dei 67 anni:</strong> Se i tuoi contributi sono inferiori a tale soglia, la tua età standard è 67 anni.',
        '<strong>Servizio militare:</strong> Il servizio militare obbligatorio o il servizio sociale possono aggiungere fino a 1 anno di contributi.',
      ],
    },
    {
      type: 'title',
      text: 'Pensionamento Anticipato Volontario',
      level: 2,
    },
    {
      type: 'card',
      title: 'Requisiti per il Pensionamento Anticipato Volontario',
      html: "<ul><li>Avere un'età inferiore di due anni rispetto all'età legale standard.</li><li>Avere un periodo di contribuzione effettiva minimo di 35 anni.</li><li>La pensione da percepire deve superare la pensione minima.</li></ul>",
    },
    {
      type: 'title',
      text: 'Coefficienti di Riduzione: Il Costo di Andare in Pensione Anticipata',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Sotto i 38,5 anni di contributi:</strong> Riduzione massima del 21% (2 anni di anticipo).',
        '<strong>Tra 38,5 e 41,5 anni:</strong> Riduzione massima di circa il 19%.',
        '<strong>Tra 41,5 e 44,5 anni:</strong> Riduzione massima di circa il 17%.',
        '<strong>Oltre 44,5 anni:</strong> Riduzione massima di circa il 15%.',
      ],
    },
    {
      type: 'tip',
      html: "<strong>Consiglio d'oro:</strong> Ritardare il pensionamento anticipato di un solo mese può fare una differenza significativa nel coefficiente di riduzione. Calcola sempre il beneficio di aspettare qualche giorno in più se sei vicino a un limite mensile.",
    },
    {
      type: 'title',
      text: 'Pensionamento Anticipato Involontario o Forzato',
      level: 2,
    },
    {
      type: 'list',
      items: [
        "<strong>Anticipo massimo:</strong> 4 anni (48 mesi) prima dell'età standard.",
        "<strong>Contributi richiesti:</strong> 33 anni.",
        "<strong>Condizione:</strong> Devi essere iscritto come in cerca di occupazione da almeno 6 mesi prima.",
        "<strong>Coefficienti:</strong> Più favorevoli rispetto a quelli volontari, ma l'impatto di 4 anni è comunque severo.",
      ],
    },
    {
      type: 'card',
      title: 'Esempio pratico',
      html: '<p>Un lavoratore con una base di 2.000 € che va in pensione volontariamente 2 anni prima con 36 anni di contributi. La sua riduzione sarà di circa il 21%, lasciando la sua pensione a circa <strong>1.580 € al mese</strong> per il resto della sua vita.</p>',
    },
  ],
};
