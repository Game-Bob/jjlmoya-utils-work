import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NieNifVerifierUI } from '../ui';

const slug = 'verificatore-nie-nif-spagna';
const title = 'Verificatore NIE/NIF/CIF Spagna: Validatore Identità Fiscale Spagnola';
const description =
  'Strumento gratuito per verificare la validità di NIF (DNI spagnolo), NIE (stranieri) e CIF (aziende) in Spagna. Controlla la cifra di controllo e il formato ufficiale.';

const faqData = [
  {
    question: 'È sicuro inserire il mio NIF o NIE in questo strumento?',
    answer:
      'Sì, è completamente sicuro. La validazione viene eseguita interamente nel tuo browser tramite JavaScript. I tuoi dati non vengono mai inviati a nessun server né memorizzati in alcun database.',
  },
  {
    question: 'Qual è la differenza tra NIF e CIF?',
    answer:
      'NIF (Número de Identificación Fiscal) è il termine attuale per tutti gli ID fiscali. Tuttavia, CIF (Código de Identificación Fiscal) è ancora comunemente usato per riferirsi al NIF delle persone giuridiche (società e organizzazioni).',
  },
  {
    question: 'Come posso sapere se un NIF è valido se non ho la lettera?',
    answer:
      'Inserisci le 8 cifre nel nostro verificatore e controlla se la lettera corrisponde. L\'algoritmo calcola la lettera esatta dividendo il numero per 23.',
  },
  {
    question: 'Questo strumento funziona per i numeri NIE che iniziano con Y o Z?',
    answer:
      'Sì, il nostro verificatore supporta tutti i formati NIE: quelli più vecchi che iniziano con X e quelli più recenti che iniziano con Y o Z, applicando la conversione numerica ufficiale.',
  },
  {
    question: 'Convalida se il numero esiste effettivamente nell\'anagrafe tributaria?',
    answer:
      'No. Questo strumento esegue una validazione algoritmica e matematica. Conferma che il numero abbia una struttura legale e una cifra di controllo corretta, ma non interroga il censimento reale dell\'Agencia Tributaria.',
  },
];

const howToData = [
  {
    name: 'Trova l\'identificativo',
    text: 'Cerca il codice alfanumerico sul documento (DNI, Tessera di residenza o Certificato di identità fiscale).',
  },
  {
    name: 'Inserisci il codice',
    text: 'Digita il NIF, NIE o CIF nel campo di testo. Non preoccuparti di spazi o trattini.',
  },
  {
    name: 'Controlla il risultato',
    text: 'Lo strumento analizzerà istantaneamente se la struttura è valida e se il carattere di controllo corrisponde.',
  },
  {
    name: 'Copia il risultato',
    text: 'Se il codice è valido, puoi copiarlo direttamente per incollarlo nella tua fattura, contratto o modulo amministrativo.',
  },
];

const bibliography = [
  {
    name: 'Agencia Tributaria: NIF per persone fisiche e giuridiche',
    url: 'https://sede.agenciatributaria.gob.es/Sede/procedimiento-recaudatorio-gestor/nif.html',
  },
  {
    name: 'Ministero dell\'Interno: Struttura di DNI e NIE',
    url: 'https://www.dnielectronico.es/PortalDNIe/PRF1_9._2.html?punto=5.2',
  },
  {
    name: 'BOE: Regolamento Generale sulla Gestione Tributaria',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2007-14406',
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

export const content: ToolLocaleContent<NieNifVerifierUI> = {
  slug,
  title,
  description,
  ui: {
    labelInput: 'Inserisci identificativo fiscale spagnolo',
    placeholder: '45938210Y',
    typeNIF: 'NIF / DNI',
    typeNIE: 'NIE',
    typeCIF: 'CIF',
    msgValidSuffix: 'Valido',
    msgInvalidControl: 'Cifra di controllo errata',
    msgInvalidNIEControl: 'Errore carattere di controllo',
    msgInvalidCIF: 'Combinazione errata',
    msgIncomplete: 'Incompleto',
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
      text: 'L\'importanza di verificare NIF, NIE e CIF in Spagna',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nell\'ecosistema amministrativo e commerciale della Spagna, l\'identificazione fiscale è la pietra angolare di tutte le transazioni, contratti e affari pubblici. Che tu sia un freelance che emette fatture, un\'azienda che gestisce fornitori o un privato che effettua un acquisto, un <strong>verificatore NIF, NIE e CIF</strong> affidabile è uno strumento indispensabile per evitare errori amministrativi e potenziali frodi.',
    },
    {
      type: 'title',
      text: 'Cosa sono NIF, NIE e CIF? Differenze principali',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>NIF (Número de Identificación Fiscal):</strong> Il termine generico per l\'identificazione fiscale in Spagna. Per i cittadini spagnoli, il NIF corrisponde al numero DNI seguito da una lettera di controllo (8 cifre + 1 lettera).',
        '<strong>NIE (Número de Identidad de Extranjero):</strong> Il codice identificativo per persone non spagnole con attività fiscale in Spagna. Inizia con X, Y o Z, seguito da 7 cifre e una lettera di controllo.',
        '<strong>CIF (Código de Identificación Fiscal):</strong> Il nome comune per il NIF delle persone giuridiche (aziende, associazioni). Una lettera che indica il tipo di organizzazione + 7 cifre + cifra o lettera di controllo.',
      ],
    },
    {
      type: 'title',
      text: 'Come funziona l\'algoritmo di validazione',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Per il NIF/DNI, la lettera finale si ottiene dividendo la parte numerica per 23 (modulo 23) e mappando il resto sulla sequenza <strong>TRWAGMYFPDXBNJZSQVHLCKE</strong>. Per il CIF, le coppie e le cifre in posizione dispari raddoppiate vengono sommate per verificare il carattere di controllo. L\'intero calcolo viene eseguito nel browser in pochi millisecondi.',
    },
    {
      type: 'title',
      text: 'Usi comuni del verificatore NIE/NIF',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Contabilità e agenzie fiscali:</strong> Verificare gli identificativi prima di registrare clienti o fornitori nei modelli fiscali.',
        '<strong>E-commerce:</strong> Convalidare il NIF al checkout per emettere fatture corrette.',
        '<strong>Dipartimenti HR:</strong> Confermare il NIE dei dipendenti stranieri prima di registrarli alla Previdenza Sociale.',
      ],
    },
    {
      type: 'title',
      text: 'Consigli per una corretta verifica',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Se il verificatore segnala un errore, controlla se hai confuso uno 0 (zero) con una O (lettera) — un errore molto comune nei numeri NIE.',
        'Per il CIF, includi sempre la lettera iniziale che identifica il tipo di entità (A = S.A., B = S.L., ecc.).',
        'Questo strumento verifica la validità matematica, non se il numero è attualmente attivo nel censimento AEAT.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Privacy garantita:</strong> La validazione avviene interamente nel tuo browser. I numeri inseriti non vengono mai inviati a nessun server.',
    },
  ],
};
