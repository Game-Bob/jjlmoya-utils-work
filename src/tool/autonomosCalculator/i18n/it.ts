import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AutonomosCalculatorUI } from '../ui';

const slug = 'calcolatore-quota-autonomi-spagna';
const title = 'Calcolatore Quota Autonomi 2026: Sistema Reale RETA Spagna';
const description =
  'Simulatore gratuito per i contributi dei lavoratori autonomi in Spagna 2026. Calcola il tuo reddito netto reale, gli scaglioni contributivi e la quota mensile con il nuovo MEI allo 0,9%.';

const faqData = [
  {
    question: 'Come funziona il nuovo sistema contributivo per il 2026?',
    answer:
      'Il sistema si basa su 15 scaglioni di reddito netto reale. È necessario dichiarare una previsione dei propri profitti (entrate meno spese) e pagare il contributo associato allo scaglione mensile corrispondente.',
  },
  {
    question: 'Cos'è l'MEI e come influisce sulla mia quota di lavoratore autonomo?',
    answer:
      "Il Meccanismo di Equità Intergenerazionale (MEI) è una tassa finalizzata alle pensioni. Nel 2026 sale allo 0,9%, aumentando leggermente il contributo rispetto al 2025 per tutti i lavoratori autonomi.",
  },
  {
    question: 'Quante volte posso cambiare la mia base contributiva?',
    answer:
      'Puoi modificare la tua base contributiva, e quindi la tua quota di lavoratore autonomo, fino a 6 volte all'anno per adattarla alla realtà dei tuoi profitti mensili.',
  },
  {
    question: 'Cosa succede se il mio reddito effettivo differisce dalla mia previsione?',
    answer:
      "La Previdenza Sociale effettuerà una riconciliazione annuale incrociando i dati con l'Agenzia delle Entrate. Se hai pagato meno del dovuto, richiederanno la differenza; se hai pagato in eccesso, l'eccedenza verrà rimborsata automaticamente.",
  },
  {
    question: 'Esiste ancora la tariffa fissa di 80 euro?',
    answer:
      'Sì, la quota ridotta di 80 € è mantenuta per i nuovi lavoratori autonomi durante i primi 12 mesi di attività, estendibile per altri 12 se il reddito è inferiore al salario minimo.',
  },
];

const howToData = [
  {
    name: 'Inserisci entrate e spese',
    text: 'Inserisci il fatturato mensile previsto e le spese deducibili della tua attività professionale.',
  },
  {
    name: 'Definisci il tuo profilo lavorativo',
    text: 'Seleziona se sei un lavoratore autonomo individuale (detrazione del 7%) o un amministratore di società (detrazione del 3%).',
  },
  {
    name: 'Visualizza il tuo scaglione effettivo',
    text: 'Il simulatore calcolerà il tuo reddito netto e ti mostrerà lo scaglione contributivo applicabile per il 2026.',
  },
  {
    name: 'Verifica l'impatto MEI',
    text: "Vedrai il dettaglio della quota finale, incluse le contingenze e il nuovo fattore di equità intergenerazionale.",
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

export const content: ToolLocaleContent<AutonomosCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelIncome: 'Reddito Lordo Mensile',
    labelExpenses: 'Spese Deducibili Mensili',
    labelType: 'Profilo Lavoratore',
    labelFlatRate: 'Tariffa Piatta (Nuova Iscrizione)',
    optStandard: 'Autonomo Individuale (detrazione 7%)',
    optSocietario: 'Amministratore di Società (detrazione 3%)',
    optNoFlatRate: 'Non applicato (Quota Reale)',
    optFlatRate: 'Sì, primo anno (80 €/mese)',
    labelBracket: 'Il tuo Scaglione di Reddito Netto',
    labelNetDisplay: 'Reddito Netto Mensile',
    labelCuota: 'Contributo Previdenza Sociale',
    labelBase: 'Base Contributiva',
    labelNetAfter: 'Netto Reale (Dopo Contributo)',
    labelProjection: 'PROIEZIONE 2026 (MEI 0,9%)',
    infoText:
      'Sistema RETA 2026: Il calcolo include il reddito netto mensile con la detrazione delle spese generali (7% o 3%). La quota mostrata include contingenze comuni, contingenze professionali, cessazione di attività, formazione e il Meccanismo di Equità Intergenerazionale (MEI) aggiornato allo 0,9% per il 2026.',
  },
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Fonti',
  bibliography: [
    {
      name: 'Previdenza Sociale: Nuovo sistema contributivo',
      url: 'https://portal.seg-social.gob.es/wps/portal/importass/importass/Colectivos/Trabajo+Autonomo/guia',
    },
    {
      name: 'Agenzia delle Entrate: Redditi da attività economiche',
      url: 'https://sede.agenciatributaria.gob.es/Sede/irpf/empresarios-individuales-profesionales/rendimientos-actividades-economicas.html',
    },
    {
      name: 'BOE: Regio Decreto-Legge 13/2022 sulla riforma RETA',
      url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2022-12482',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Calcolatore Quota Autonomi 2026: Guida al Nuovo Sistema',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Essere un lavoratore autonomo in Spagna significa affrontare uno dei compiti più dinamici e a volte confusi: i <strong>contributi alla Previdenza Sociale</strong>. Da quando è entrato in vigore il nuovo sistema basato sul <strong>reddito netto reale</strong>, il concetto di \"quota fissa\" è scomparso, sostituito da un modello progressivo.",
    },
    {
      type: 'title',
      text: 'Come Funziona il Nuovo Sistema Contributivo RETA?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Fino al 2023, ogni lavoratore autonomo poteva scegliere liberamente la propria base contributiva, il che portava la maggior parte a contribuire al minimo. La riforma mira a garantire che chi guadagna di più contribuisca di più, mentre chi ha redditi più bassi veda ridotto il proprio carico mensile.',
    },
    {
      type: 'paragraph',
      html: "Il sistema si basa su <strong>scaglioni di reddito netto</strong>. Ciò significa che la tua quota non dipende dal tuo reddito lordo (fatturato), ma da ciò che effettivamente ti rimane \"pulito\" dopo aver dedotto le spese professionali e applicato un'ulteriore detrazione per spese generali.",
    },
    {
      type: 'title',
      text: 'Cambiamenti Chiave per il 2026: Il Fattore MEI',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "L'anno 2026 segna il consolidamento della seconda fase della riforma. Uno degli aggiornamenti più critici è l'aumento del <strong>Meccanismo di Equità Intergenerazionale (MEI)</strong>.",
    },
    {
      type: 'list',
      items: [
        "<strong>Aumento MEI:</strong> Per il 2026, l'MEI sale allo 0,9%, rappresentando un leggero aumento del contributo rispetto al 2025 per tutti gli scaglioni.",
        "<strong>Revisione Scaglioni:</strong> Gli scaglioni di reddito netto vengono mantenuti, ma i contributi minimi e massimi di ogni fascia vengono adeguati per convergere con il sistema di contribuzione sul reddito reale.",
        "<strong>Riconciliazione Annuale:</strong> A fine anno, la Previdenza Sociale incrocerà i dati con l'Agenzia delle Entrate. Se hai pagato in eccesso o in difetto in base ai profitti effettivi, verrà emesso un rimborso o una richiesta di pagamento.",
      ],
    },
    {
      type: 'title',
      text: 'Come Calcolare il tuo Reddito Netto Mensile',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Per utilizzare il nostro calcolatore in modo accurato, è fondamentale capire quale cifra inserire. La formula applicata dalla Previdenza Sociale è:",
    },
    {
      type: 'code',
      code: 'Reddito Netto = (Reddito Lordo - Spese Deducibili) / (1 - Detrazione Spese Generali)',
    },
    {
      type: 'paragraph',
      html: "La <strong>Detrazione Spese Generali</strong> è del <strong>7%</strong> per i lavoratori autonomi individuali e del <strong>3%</strong> per gli amministratori di società.",
    },
    {
      type: 'card',
      title: 'Esempio di calcolo 2026',
      html: '<ul><li>Fatturato: €4.000 / Spese: €1.000</li><li>Margine di profitto: €3.000</li><li>Detrazione generale (7%): €210</li><li>Reddito netto computabile: €2.790</li><li><strong>Quota stimata 2026:</strong> Scaglione 8, circa €350 + adeguamento MEI.</li></ul>',
    },
    {
      type: 'title',
      text: 'Vantaggi del Sistema Progressivo',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Migliore protezione sociale:</strong> Contribuendo su basi più realistiche, le prestazioni per indennità di malattia, maternità, paternità e soprattutto pensione saranno significativamente più elevate.',
        '<strong>Piena flessibilità:</strong> Puoi cambiare la tua base contributiva fino a 6 volte all'anno. Se prevedi un drastico calo del reddito, puoi passare a uno scaglione inferiore per evitare tensioni finanziarie.',
        '<strong>Tariffa Piatta €80:</strong> Mantenuta per i nuovi imprenditori nel primo anno, consentendo un inizio con costi fissi controllati.',
      ],
    },
    {
      type: 'title',
      text: 'Amministratore di Società vs. Autonomo Individuale',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "L'<strong>amministratore di società</strong> (con una società SL) ha una base contributiva minima leggermente superiore e la detrazione per spese generali è inferiore (3%). Questo perché la legge ritiene che il controllo dei soci conferisca loro una posizione diversa rispetto ai rischi di mercato.",
    },
    {
      type: 'tip',
      html: "<strong>Suggerimento Pro:</strong> Se il tuo reddito netto varia molto di mese in mese, cerca di posizionarti in uno scaglione intermedio prudente. La successiva riconciliazione è inevitabile, ma in questo modo eviterai pagamenti imprevisti di migliaia di euro quando arriverà il \"conto\" della Previdenza Sociale a fine anno.",
    },
    {
      type: 'title',
      text: 'Cosa include la tua quota mensile?',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Contingenze Comuni (28,30%):</strong> Copre le assenze per malattia comune o infortuni non lavorativi.',
        '<strong>Contingenze Professionali (1,30%):</strong> Infortuni sul lavoro e malattie professionali.',
        '<strong>Cessazione di Attività (0,90%):</strong> L'indennità di "disoccupazione" degli autonomi.',
        '<strong>Formazione Professionale (0,10%):</strong> Accesso a corsi e formazione.',
        '<strong>MEI (0,90% nel 2026):</strong> Fondo per garantire la sostenibilità delle pensioni.',
      ],
    },
    {
      type: 'title',
      text: 'Il Processo di Riconciliazione (Agenzia delle Entrate e Previdenza Sociale)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Ogni anno, dopo la campagna della dichiarazione dei redditi, l'Agenzia delle Entrate comunica il tuo reddito netto effettivo alla Previdenza Sociale. Se hai scelto uno scaglione inferiore a quello richiesto dal tuo reddito effettivo, riceverai una notifica di pagamento per la differenza. Al contrario, se hai contribuito al di sopra dei tuoi profitti, la Previdenza Sociale rimborserà automaticamente l'eccedenza senza che tu debba richiederlo esplicitamente.",
    },
    {
      type: 'title',
      text: 'Conclusioni e Raccomandazioni',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Il <strong>calcolatore per autonomi 2026</strong> è uno strumento indispensabile per la pianificazione fiscale di ogni freelancer. Consigliamo di utilizzare questo simulatore ogni volta che firmi un contratto importante o cambi i tuoi costi fissi per assicurarti che la tua quota di lavoratore autonomo sia sempre in linea con la realtà del tuo business.",
    },
  ],
};
