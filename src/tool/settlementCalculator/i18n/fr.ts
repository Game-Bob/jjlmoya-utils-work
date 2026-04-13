import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SettlementCalculatorUI } from '../ui';

const slug = 'calculateur-indemnite-licenciement-espagne';
const title = 'Calculateur Indemnite Licenciement Espagne 2026';
const description =
  'Calculez votre solde de tout compte etape par etape: conges non pris, primes et indemnite de licenciement selon le droit du travail espagnol.';

const faqData = [
  {
    question: 'Ai-je droit a un solde de tout compte si je demissionne?',
    answer:
      "Oui, absolument. Le finiquito comprend les montants deja acquis: jours travailles du mois en cours, conges non pris et quote-part des primes. Vous n'aurez pas droit a une indemnite de licenciement ni aux allocations chomage.",
  },
  {
    question: "Quelle indemnite pour un licenciement sans cause reelle et serieuse?",
    answer:
      "Pour les contrats signes apres le 12 fevrier 2012, l'indemnite est de 33 jours de salaire par annee travaillee, dans la limite de 24 mensualites. Pour les periodes anterieures, le calcul est de 45 jours par an.",
  },
  {
    question: "L'employeur peut-il deduire des jours de preavis non respectes?",
    answer:
      "Oui. Si votre contrat exige un preavis (generalement 15 jours) et que vous ne le respectez pas, l'entreprise peut deduire de votre solde le salaire correspondant aux jours de preavis non effectues.",
  },
  {
    question: "Que se passe-t-il avec les conges et les cotisations sociales dans le solde?",
    answer:
      "Lorsque vous recevez le paiement des conges non pris, l'entreprise doit continuer a cotiser a la Securite sociale espagnole en votre nom pendant ces jours. Pendant cette periode, vous ne pouvez pas commencer a percevoir des allocations chomage.",
  },
  {
    question: "Les indemnites de licenciement sont-elles soumises a l'impot?",
    answer:
      "Les indemnites de licenciement obligatoires sont exonerees d'impot sur le revenu espagnol (IRPF) jusqu'a 180 000 EUR, a condition que le licenciement soit objectif ou declare sans cause reelle. Le finiquito, lui, est imposable normalement.",
  },
];

const howToData = [
  {
    name: 'Saisir votre salaire brut',
    text: "Entrez votre salaire brut annuel (avant impots) et selectionnez le nombre de versements salariaux.",
  },
  {
    name: 'Definir les dates exactes',
    text: "Indiquez la date exacte de votre entree dans l'entreprise et votre dernier jour de travail prevu.",
  },
  {
    name: 'Ajouter les conges non pris',
    text: "Precisez combien de jours de conges il vous reste a prendre dans l'annee en cours.",
  },
  {
    name: 'Choisir le motif de depart',
    text: 'Selectionnez le motif de depart pour que le simulateur applique le bon taux d\'indemnite.',
  },
];

const bibliography = [
  {
    name: 'Statut des Travailleurs (BOE): Extinction du contrat',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-11430',
  },
  {
    name: 'Guide du Travail en Espagne: Le Finiquito',
    url: 'https://espanalaboral.es/guias-y-recursos/trabajadores/finiquito/',
  },
  {
    name: 'Pouvoir Judiciaire espagnol: Calcul des indemnites de rupture',
    url: 'https://www.poderjudicial.es/cgpj/es/Servicios/Utilidades/Calculo-de-indemnizaciones-por-extincion-de-contrato-de-trabajo/',
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
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<SettlementCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelSalary: 'Salaire Brut Annuel',
    labelExtraPayments: 'Versements Extra par An',
    labelStartDate: 'Date de Debut',
    labelEndDate: 'Date de Fin',
    labelVacationDays: 'Conges Non Pris',
    labelDepartureReason: 'Motif de Depart',
    opt12pays: '12 versements (Prorates)',
    opt14pays: '14 versements (Standard)',
    optImprocedente: 'Licenciement Abusif (33 jours)',
    optObjetivo: 'Licenciement Objectif (20 jours)',
    optTemporal: 'Fin de Contrat a Duree Determinee (12 jours)',
    optVoluntaria: 'Demission Volontaire (Sans indemnite)',
    labelTotal: 'Total Estime du Solde de Tout Compte',
    labelSeverance: 'Indemnite de Licenciement',
    labelVacation: 'Conges Non Pris',
    labelExtras: 'Quote-part des Primes',
    labelMonthSalary: 'Salaire du Mois',
    disclaimer:
      "Note: Ce calcul est une estimation brute approximative basee sur le droit du travail espagnol general. Le montant final peut varier selon les conventions collectives, les retenues d'impot sur le revenu et les cotisations sociales.",
    btnCopy: 'Copier le Resume',
    copySuccess: 'Copie',
    copySummaryTitle: 'Resume du Solde de Tout Compte Estime',
    defaultSalary: '24000',
  },
  faqTitle: 'Questions Frequemment Posees',
  faq: faqData,
  bibliographyTitle: 'Sources',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Calculateur Indemnite Licenciement Espagne: Guide Complet',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "La fin d'un contrat de travail est un moment crucial, souvent charge d'incertitude financiere. Qu'il s'agisse d'un <strong>licenciement</strong>, d'une <strong>demission</strong> ou de la <strong>fin d'un contrat a duree determinee</strong>, comprendre le montant qui vous est du est essentiel pour proteger vos droits en tant que travailleur en Espagne.",
    },
    {
      type: 'title',
      text: 'Finiquito vs Indemnizacion: Quelle est la difference?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        "<strong>Finiquito (Solde de tout compte):</strong> Document qui solde toutes les dettes en cours entre l'entreprise et le salarie a la fin de la relation de travail. Vous y avez toujours droit, quel que soit le motif de depart.",
        "<strong>Indemnizacion (Indemnite):</strong> Compensation economique que l'entreprise doit verser pour certains types de licenciement. Elle ne s'applique pas toujours — par exemple, en cas de demission volontaire, il n'y a pas d'indemnite.",
      ],
    },
    {
      type: 'title',
      text: 'Composantes cles du Solde de Tout Compte',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Salaire du mois en cours:</strong> Jours travailles depuis la derniere paie jusqu\'au dernier jour de travail.',
        "<strong>Conges non pris:</strong> Si vous partez avec des jours de conges restants, l'entreprise doit vous les payer.",
        '<strong>Primes:</strong> La part proportionnelle des primes de fin d\'annee et d\'ete si elles ne sont pas deja proratisees mensuellement.',
        '<strong>Bonus ou incentives:</strong> Tout bonus acquis et non encore verse a la date de depart.',
      ],
    },
    {
      type: 'card',
      title: 'Exemple pratique de calcul',
      html: "<p>Salarie avec un salaire brut annuel de 30 000 EUR et 2 ans d'anciennete:</p><ul><li>Salaire journalier: 30 000 / 365 = 82,19 EUR</li><li>Licenciement abusif (33 jours): 33 x 2 x 82,19 = <strong>5 424,54 EUR</strong></li><li>Licenciement objectif (20 jours): 20 x 2 x 82,19 = <strong>3 287,60 EUR</strong></li></ul>",
    },
    {
      type: 'tip',
      html: "<strong>Conseil d'expert:</strong> Consultez toujours votre Convention Collective. Certains secteurs professionnels ont negocie des indemnites superieures aux minimums legaux du Statut des Travailleurs espagnol.",
    },
  ],
};
