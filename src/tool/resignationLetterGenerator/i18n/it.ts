import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResignationLetterGeneratorUI } from '../ui';

const slug = 'generatore-lettera-dimissioni';
const title = 'Generatore Professionale di Lettere di Dimissioni';
const description =
  'Crea la tua lettera di dimissioni personalizzata in pochi secondi. Modelli professionali pronti da copiare o scaricare istantaneamente in PDF.';

const faqData = [
  {
    question: 'Quanti giorni di preavviso devo dare?',
    answer:
      'Il periodo di preavviso varia in base al CCNL di riferimento, al livello di inquadramento e all\'anzianità di servizio. È fondamentale consultare il proprio contratto individuale o rivolgersi a un consulente del lavoro.',
  },
  {
    question: 'Ho diritto al TFR se mi dimetto?',
    answer:
      'Sì. Il Trattamento di Fine Rapporto (TFR) è un diritto del lavoratore che matura durante tutto il periodo di lavoro e deve essere liquidato indipendentemente dalla causa di cessazione del rapporto.',
  },
  {
    question: 'Posso ricevere la NASpI se mi dimetto volontariamente?',
    answer:
      'In Italia, le dimissioni volontarie non danno diritto alla NASpI, a meno che non siano "per giusta causa" (ad esempio mancato pagamento degli stipendi) o avvengano durante il periodo di tutela della maternità.',
  },
  {
    question: 'Cosa succede se non rispetto il periodo di preavviso?',
    answer:
      'Se il lavoratore non rispetta il preavviso, l\'azienda ha il diritto di trattenere dalle competenze di fine rapporto un importo pari alla retribuzione che sarebbe spettata per il periodo di preavviso non lavorato.',
  },
];

const howToData = [
  {
    name: 'Inserisci i tuoi dati personali',
    text: 'Inserisci il tuo nome completo, il nome del tuo responsabile o HR e il nome dell\'azienda.',
  },
  {
    name: 'Scegli il tuo ultimo giorno di lavoro',
    text: 'Seleziona la data di decorrenza delle dimissioni, assicurandoti di aver calcolato correttamente il preavviso.',
  },
  {
    name: 'Indica il motivo (opzionale)',
    text: 'Scegli l\'approccio che meglio si adatta alla tua situazione per personalizzare il testo della lettera.',
  },
  {
    name: 'Copia o scarica la lettera',
    text: 'Clicca sul pulsante per copiare il testo negli appunti o scaricarlo direttamente come PDF.',
  },
];

const bibliography = [
  {
    name: 'Ministero del Lavoro e delle Politiche Sociali',
    url: 'https://www.lavoro.gov.it',
  },
  {
    name: 'INPS - Dimissioni Volontarie',
    url: 'https://www.inps.it',
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

export const content: ToolLocaleContent<ResignationLetterGeneratorUI> = {
  slug,
  title,
  description,
  ui: {
    labelUserName: 'Tuo nome completo',
    labelManagerName: 'Nome Responsabile o HR',
    labelManagerGender: 'Appellativo',
    labelCompanyName: 'Nome dell\'azienda',
    labelLastDay: 'Ultimo giorno (Decorrenza)',
    labelReasonType: 'Tipo di approccio',
    labelCity: 'Città',
    optGenderNeutral: 'Spett.le (Neutro)',
    optGenderM: 'Gentile Sig. (Maschile)',
    optGenderF: 'Gentile Sig.ra (Femminile)',
    optReasonStandard: 'Standard (Professionale)',
    optReasonOpportunity: 'Nuova opportunità professionale',
    optReasonPersonal: 'Motivi personali',
    optReasonEducation: 'Crescita accademica / Studi',
    optReasonGrowth: 'Mancanza di crescita interna',
    optReasonDirect: 'Diretto e breve (Senza spiegazioni)',
    btnCopy: 'Copia Lettera',
    btnDownload: 'Scarica PDF',
    copyFeedback: 'Lettera copiata',
    defaultUserName: 'Mario Rossi',
    defaultManagerName: 'Luigi Verdi',
    defaultCompanyName: 'Azienda Esempio S.p.A.',
    defaultCity: 'Roma',
    dateLocale: 'it-IT',
    datePrefix: '',
    managerPrefix: 'Alla c.a. di:',
    managerFallback: 'Ufficio Risorse Umane',
    companyFallback: 'Nome Azienda',
    salutationNeutral: 'Spett.le',
    salutationM: 'Gentile Sig.',
    salutationF: 'Gentile Sig.ra',
    salutationFallback: 'Responsabile',
    signatureFallback: 'Firma del Dipendente',
    thanksParagraph:
      'Desidero esprimere la mia sincera gratitudine per le opportunità di crescita professionale e personale che mi sono state offerte durante il mio periodo in azienda.',
    transitionParagraph:
      'Mi impegno pienamente a garantire una transizione agevole e sono disponibile per il passaggio di consegne delle mie responsabilità e dei compiti pendenti.',
    closingWord: 'Cordiali saluti,',
    reasonStandard:
      'Con la presente rassegno formalmente le mie dimissioni irrevocabili dalla posizione attuale. Il mio ultimo giorno di lavoro sarà il [DATE], nel rispetto del periodo di preavviso previsto dal contratto.',
    reasonOpportunity:
      'Le comunico la mia decisione di dimettermi dal mio ruolo attuale avendo accettato una nuova opportunità professionale. La decorrenza delle dimissioni sarà il [DATE].',
    reasonPersonal:
      'A causa di circostanze personali che richiedono la mia attenzione immediata, ritengo necessario rassegnare le mie dimissioni. Il rapporto di lavoro cesserà il [DATE].',
    reasonEducation:
      'Ho deciso di proseguire gli studi a tempo pieno e pertanto rassegno le mie dimissioni volontarie. Il mio ultimo giorno di servizio sarà il [DATE].',
    reasonGrowth:
      'Dopo attenta riflessione, ho deciso di orientare la mia carriera verso un ambiente che mi permetta di sviluppare competenze in aree diverse. Le mie dimissioni decorreranno dal [DATE].',
    reasonDirect:
      'Le comunico la mia decisione di recedere dal rapporto di lavoro. Il mio ultimo giorno di lavoro sarà il [DATE].',
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
      text: 'Come scrivere una lettera di dimissioni efficace',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Decidere di lasciare un lavoro è un passo importante. <strong>Presentare una lettera di dimissioni</strong> non è solo una formalità burocratica, ma l\'ultima immagine che lasci di te all\'azienda.',
    },
    {
      type: 'tip',
      html: '<strong>Nota bene:</strong> In Italia le dimissioni devono essere presentate <strong>telematicamente</strong> tramite il portale Cliclavoro, ma consegnare una copia cartacea al proprio manager rimane una buona pratica professionale.',
    },
    {
      type: 'code',
      code: '[Città, Data]\n\nAlla c.a. di: [Nome Responsabile]\n[Nome Azienda]\n\nOggetto: Dimissioni volontarie\n\nGentile [Nome],\ncon la presente rassegno le mie dimissioni. Il mio ultimo giorno sarà il [Data].\n\nCordiali saluti,\n[Firma]',
    },
  ],
};
