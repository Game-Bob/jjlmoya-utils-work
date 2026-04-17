import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IrpfCalculatorUI } from '../ui';

const slug = 'calcolo-irpf-spagna';
const title = 'Calcolatore IRPF 2026: Simulatore Stipendio Netto Spagna';
const description =
  'Calcola il tuo stipendio netto mensile e annuale per il 2026 in Spagna. Simulatore aggiornato con aliquote statali, regionali, MEI e situazione familiare.';

const faqData = [
  {
    question: "In che modo l'MEI influisce sul mio stipendio netto nel 2026?",
    answer:
      "Il Meccanismo di Equità Intergenerazionale (MEI) sale allo 0,90% nel 2026 per garantire la sostenibilità delle pensioni. La maggior parte è a carico del datore di lavoro, ma i dipendenti vedono ridotto il proprio stipendio netto in base alla propria percentuale di contribuzione.",
  },
  {
    question: 'Perché il mio stipendio netto è diverso a Madrid rispetto alla Catalogna?',
    answer:
      "L'IRPF è un'imposta devoluta per il 50% alle Comunità Autonome. Madrid applica scaglioni più bassi rispetto alla scala statale, mentre la Catalogna ha una propria scala che può aumentare la ritenuta iniziale.",
  },
  {
    question: "Cos'è l'aliquota marginale e come mi riguarda?",
    answer:
      "L'aliquota marginale è la percentuale di imposta sull'ultimo euro guadagnato. Indica quanto ti costa effettivamente in tasse un aumento di stipendio o un bonus.",
  },
  {
    question: 'Quante mensilità dovrei selezionare per il calcolo mensile?',
    answer:
      "Normalmente si ricevono 12 o 14 mensilità (con gratifiche in estate e a Natale). Seleziona l'opzione utilizzata dalla tua azienda per conoscere il tuo effettivo reddito netto mensile.",
  },
  {
    question: 'Questo calcolatore è affidabile per la mia dichiarazione dei redditi?',
    answer:
      "Questo strumento fornisce una stima basata sulle normative del 2026. La ritenuta mensile è un'approssimazione; il risultato finale effettivo viene determinato nella dichiarazione dei redditi presentata a giugno.",
  },
];

const howToData = [
  {
    name: 'Inserisci il tuo stipendio lordo',
    text: "Digita l'importo totale annuo indicato nel tuo contratto prima di eventuali detrazioni o ritenute.",
  },
  {
    name: 'Definisci la tua situazione personale',
    text: "Indica il numero di figli, eventuali disabilità riconosciute e lo stato civile per applicare le esenzioni fiscali previste dalla legge.",
  },
  {
    name: 'Scegli la tua Comunità Autonoma',
    text: "La tua residenza fiscale determina l'aliquota fiscale regionale applicata, influenzando il tuo reddito netto finale.",
  },
  {
    name: 'Esamina il dettaglio',
    text: "Scopri quanto viene destinato all'IRPF, alla Previdenza Sociale e qual è il tuo stipendio netto reale mensile e annuale.",
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

export const content: ToolLocaleContent<IrpfCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    titleVariables: 'Variabili di Calcolo',
    titleCalculo: 'Calcolo Trasparente 2026',
    labelBruto: 'Stipendio Lordo Annuo (€)',
    labelPagas: 'Numero di Mensilità',
    labelComunidad: 'Residenza Fiscale',
    labelHijos: 'Figli (sotto i 25 anni)',
    labelDiscapacidad: 'Grado di Disabilità',
    labelUnidad: 'Nucleo Familiare o Convivenza',
    opt12pagas: '12 mensilità',
    opt14pagas: '14 mensilità',
    optGen: 'Territorio Comune (Generale)',
    optMad: 'Madrid',
    optCat: 'Catalogna',
    optAnd: 'Andalusia',
    optVal: 'Regione di Valencia',
    optPV: 'Paesi Baschi (Forale)',
    optNav: 'Navarra (Forale)',
    optNinguna: 'Nessuno',
    opt33: '> 33%',
    opt65: '> 65%',
    optSoltero: 'Celibe/nubile, divorziato o vedovo',
    optCasadoLow: 'Sposato (il coniuge guadagna meno di 1.500 €/anno)',
    optCasadoHigh: 'Sposato (il coniuge ha un reddito)',
    labelSalarioBruto: 'Stipendio Lordo',
    labelSS: 'Previdenza Sociale / MEI (-)',
    labelGastos: 'Spese Deducibili (Art. 20)',
    labelNetoAnual: 'STIPENDIO NETTO ANNUALE',
    labelRetencionIRPF: 'Ritenuta IRPF (%)',
    labelNetoMensual: 'Netto Mensile Disponibile',
    labelMarginal: 'Aliquota Marginale Applicata',
    resultRetention: 'Ritenuta IRPF (%)',
    resultAnual: '/ anno',
    infoText:
      "Algoritmo AEAT (Imposta Lorda - Minimo Esente) validato per il 2026. Include il contributo MEI al 6,47% e le riduzioni per redditi da lavoro. jjlmoya.es.",
  },
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Fonti',
  bibliography: [
    {
      name: 'Agenzia delle Entrate: IRPF',
      url: 'https://sede.agenciatributaria.gob.es/Sede/irpf.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Calcolatore IRPF 2026: Guida completa al nuovo scenario fiscale',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "L'Imposta sul Reddito delle Persone Fisiche (IRPF) è il prelievo più rilevante del sistema fiscale spagnolo e influisce direttamente sulla busta paga mensile di milioni di lavoratori. Nel 2026, assistiamo al consolidamento di varie riforme volte alla progressività e all'adattamento alle nuove realtà economiche, come l'aumento del Meccanismo di Equità Intergenerazionale (MEI) e la deflazione delle aliquote in varie comunità autonome.",
    },
    {
      type: 'paragraph',
      html: "Il nostro <strong>calcolatore IRPF per il 2026</strong> è progettato per fornire una visione accurata e aggiornata di ciò che arriverà effettivamente sul tuo conto bancario. Calcolare lo stipendio netto non significa semplicemente sottrarre una percentuale fissa; è un processo matematico che tiene conto della tua situazione personale, dei familiari a carico, della disabilità e, cosa fondamentale, della tua residenza fiscale, poiché ogni regione in Spagna ha autorità sullo scaglione fiscale regionale.",
    },
    {
      type: 'title',
      text: 'Cosa cambia nelle buste paga del 2026?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Per comprendere i risultati della tua simulazione, è essenziale conoscere i pilastri dei calcoli delle ritenute di quest'anno:",
    },
    {
      type: 'list',
      items: [
        "<strong>Impatto MEI:</strong> Il Meccanismo di Equità Intergenerazionale continua il suo percorso al rialzo per garantire le pensioni, raggiungendo lo 0,90% nel 2026. La maggior parte è pagata dal datore di lavoro, ma i dipendenti vedono aumentare il proprio contributo a circa lo 0,15%, riducendo leggermente il reddito netto.",
        "<strong>SMI e Riduzioni:</strong> Il Salario Minimo Interprofessionale funge da barriera. I redditi bassi beneficiano di un'estensione della riduzione per redditi da lavoro per garantire che gli aumenti dello stipendio lordo non vengano assorbiti da ritenute fiscali più elevate.",
        "<strong>Scaglioni Regionali:</strong> Regioni come Madrid, Andalusia o Murcia applicano tipicamente aliquote inferiori alla media statale, mentre la Catalogna o la Regione di Valencia hanno le proprie scale che possono aumentare la ritenuta a livelli di reddito più elevati.",
      ],
    },
    {
      type: 'title',
      text: 'Concetti chiave per capire il tuo stipendio netto',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "<strong>Base Imponibile vs. Stipendio Lordo:</strong> Non paghi le tasse su tutto ciò che guadagni. La base su cui si applica l'IRPF è il risultato della sottrazione dallo stipendio lordo dei contributi previdenziali (circa 6,45%) e di una riduzione generale per spese difficilmente giustificabili (2.000 € all'anno). Su questo risultato vengono poi applicate le esenzioni fiscali.",
    },
    {
      type: 'title',
      text: 'Concetti base',
      level: 3,
    },
    {
      type: 'list',
      items: [
        "<strong>Aliquota Marginale:</strong> La percentuale di imposta sull'ultimo euro guadagnato. Fondamentale per sapere quanto ti costerà effettivamente in tasse un aumento o un bonus.",
        "<strong>Minimo Vitale:</strong> Reddito che lo Stato considera essenziale per coprire i bisogni primari del contribuente e della famiglia, e che è quindi esente da imposte.",
        "<strong>Ritenuta in Busta Paga:</strong> Acconto che i datori di lavoro versano mensialmente all'Agenzia delle Entrate per tuo conto, sulla base di una stima di quanto dovrai a fine anno.",
        "<strong>Reddito Netto:</strong> Stipendio lordo meno i contributi previdenziali e le spese deducibili consentite dalla legge fiscale.",
      ],
    },
    {
      type: 'title',
      text: 'Come ottimizzare la ritenuta IRPF',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Molti lavoratori si chiedono se dovrebbero chiedere al proprio datore di lavoro di trattenere più o meno. La realtà è che la ritenuta è un \"anticipo\" all'Agenzia delle Entrate. Se la ritenuta è inferiore al dovuto durante l'anno, la dichiarazione dei redditi potrebbe presentare un saldo da pagare; se è superiore, riceverai un rimborso.",
    },
    {
      type: 'paragraph',
      html: "<strong>Il mito del salto di scaglione:</strong> Esiste il mito secondo cui passare a uno scaglione superiore significhi guadagnare meno netto. È falso. L'IRPF è progressivo; solo il reddito che eccede il limite dello scaglione è tassato con l'aliquota superiore. Non guadagnerai mai meno netto da un aumento lordo, anche con un'aliquota marginale più alta.",
    },
    {
      type: 'paragraph',
      html: "<strong>Suggerimento per le famiglie:</strong> Assicurati di aver comunicato correttamente la nascita di figli o cambiamenti nello stato di disabilità dei membri della famiglia utilizzando il modulo 145. Ciò adegua la ritenuta mensile ed evita sorprese nella dichiarazione dei redditi di giugno.",
    },
    {
      type: 'title',
      text: 'Differenze per Comunità Autonoma',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Il decentramento fiscale in Spagna significa che due persone con lo stesso stipendio e la stessa situazione familiare hanno redditi netti diversi a seconda che vivano a Toledo o a Barcellona. Le comunità controllano metà dell'imposta (scaglione regionale). Madrid, ad esempio, si distingue per avere le aliquote più basse a quasi tutti i livelli di reddito, mentre altre regioni applicano detrazioni per l'affitto o l'istruzione dei figli non disponibili a livello nazionale. Il nostro calcolatore tiene conto di queste variazioni per darti la cifra più realistica in base alla tua posizione.",
    },
    {
      type: 'paragraph',
      html: "In conclusione, la <strong>simulazione dello stipendio netto 2026</strong> è uno strumento di pianificazione finanziaria fondamentale. Conoscere la tua reale capacità di risparmio e capire quale parte del tuo reddito sostiene i servizi pubblici ti consente di prendere decisioni informate su investimenti, mutui o cambiamenti di carriera.",
    },
  ],
};
