import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SettlementCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculateur-indemnite-licenciement-espagne';
const title = 'Calculateur Indemnité Licenciement Espagne 2026';
const description =
  'Calculez votre solde de tout compte étape par étape: congés non pris, primes et indemnité de licenciement selon le droit du travail espagnol.';

const faqData = [
  {
    question: 'Ai-je droit à un solde de tout compte si je démissionne?',
    answer:
      "Oui, absolument. Le finiquito comprend les montants déjà acquis: jours travaillés du mois en cours, congés non pris et quote-part des primes. Vous n'aurez pas droit à une indemnité de licenciement ni aux allocations chômage.",
  },
  {
    question: "Quelle indemnité pour un licenciement sans cause réelle et sérieuse?",
    answer:
      "Pour les contrats signés après le 12 février 2012, l'indemnité est de 33 jours de salaire par année travaillée, dans la limite de 24 mensualités. Pour les périodes antérieures, le calcul est de 45 jours par an.",
  },
  {
    question: "L'employeur peut-il déduire des jours de préavis non respectés?",
    answer:
      "Oui. Si votre contrat exige un préavis (généralement 15 jours) et que vous ne le respectez pas, l'entreprise peut déduire de votre solde le salaire correspondant aux jours de préavis non effectués.",
  },
  {
    question: "Que se passe-t-il avec les congés et les cotisations sociales dans le solde?",
    answer:
      "Lorsque vous recevez le paiement des congés non pris, l'entreprise doit continuer à cotiser à la Sécurité sociale espagnole en votre nom pendant ces jours. Pendant cette période, vous ne pouvez pas commencer à percevoir des allocations chômage.",
  },
  {
    question: "Les indemnités de licenciement sont-elles soumises à l'impôt?",
    answer:
      "Les indemnités de licenciement obligatoires sont exonérées d'impôt sur le revenu espagnol (IRPF) jusqu'à 180 000 EUR, à condition que le licenciement soit objectif ou déclaré sans cause réelle. Le finiquito, lui, est imposable normalement.",
  },
];

const howToData = [
  {
    name: 'Saisir votre salaire brut',
    text: "Entrez votre salaire brut annuel (avant impôts) et sélectionnez le nombre de versements salariaux.",
  },
  {
    name: 'Définir les dates exactes',
    text: "Indiquez la date exacte de votre entrée dans l'entreprise et votre dernier jour de travail prévu.",
  },
  {
    name: 'Ajouter les congés non pris',
    text: "Précisez combien de jours de congés il vous reste à prendre dans l'année en cours.",
  },
  {
    name: 'Choisir le motif de départ',
    text: 'Sélectionnez le motif de départ pour que le simulateur applique le bon taux d\'indemnité.',
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
    labelStartDate: 'Date de Début',
    labelEndDate: 'Date de Fin',
    labelVacationDays: 'Congés Non Pris',
    labelDepartureReason: 'Motif de Départ',
    opt12pays: '12 versements (Proratés)',
    opt14pays: '14 versements (Standard)',
    optImprocedente: 'Licenciement Abusif (33 jours)',
    optObjetivo: 'Licenciement Objectif (20 jours)',
    optTemporal: 'Fin de Contrat à Durée Déterminée (12 jours)',
    optVoluntaria: 'Démission Volontaire (Sans indemnité)',
    labelTotal: 'Total Estimé du Solde de Tout Compte',
    labelSeverance: 'Indemnité de Licenciement',
    labelVacation: 'Congés Non Pris',
    labelExtras: 'Quote-part des Primes',
    labelMonthSalary: 'Salaire du Mois',
    disclaimer:
      "Note: Ce calcul est une estimation brute approximative basée sur le droit du travail espagnol général. Le montant final peut varier selon les conventions collectives, les retenues d'impôt sur le revenu et les cotisations sociales.",
    btnCopy: 'Copier le Résumé',
    copySuccess: 'Copié',
    copySummaryTitle: 'Résumé du Solde de Tout Compte Estimé',
    defaultSalary: '24000',
  },
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Calculateur Indemnité Licenciement Espagne: Guide Complet',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "La fin d'un contrat de travail est un moment crucial, souvent chargé d'incertitude financière. Qu'il s'agisse d'un <strong>licenciement</strong>, d'une <strong>démission</strong> ou de la <strong>fin d'un contrat à durée déterminée</strong>, comprendre le montant qui vous est dû est essentiel pour protéger vos droits en tant que travailleur en Espagne.",
    },
    {
      type: 'title',
      text: 'Finiquito vs Indemnización: Quelle est la différence?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        "<strong>Finiquito (Solde de tout compte):</strong> Document qui solde toutes les dettes en cours entre l'entreprise et le salarié à la fin de la relation de travail. Vous y avez toujours droit, quel que soit le motif de départ.",
        "<strong>Indemnización (Indemnité):</strong> Compensation économique que l'entreprise doit verser pour certains types de licenciement. Elle ne s'applique pas toujours - par exemple, en cas de démission volontaire, il n'y a pas d'indemnité.",
      ],
    },
    {
      type: 'title',
      text: 'Composantes clés du Solde de Tout Compte',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Salaire du mois en cours:</strong> Jours travaillés depuis la dernière paie jusqu\'au dernier jour de travail.',
        "<strong>Congés non pris:</strong> Si vous partez avec des jours de congés restants, l'entreprise doit vous les payer.",
        '<strong>Primes:</strong> La part proportionnelle des primes de fin d\'année et d\'été si elles ne sont pas déjà proratisées mensuellement.',
        '<strong>Bonus ou incentives:</strong> Tout bonus acquis et non encore versé à la date de départ.',
      ],
    },
    {
      type: 'card',
      title: 'Exemple pratique de calcul',
      html: "<p>Salarié avec un salaire brut annuel de 30 000 EUR et 2 ans d'ancienneté:</p><ul><li>Salaire journalier: 30 000 / 365 = 82,19 EUR</li><li>Licenciement abusif (33 jours): 33 x 2 x 82,19 = <strong>5 424,54 EUR</strong></li><li>Licenciement objectif (20 jours): 20 x 2 x 82,19 = <strong>3 287,60 EUR</strong></li></ul>",
    },
    {
      type: 'tip',
      html: "<strong>Conseil d'expert:</strong> Consultez toujours votre Convention Collective. Certains secteurs professionnels ont négocié des indemnités supérieures aux minimums légaux du Statut des Travailleurs espagnol.",
    },
  ],
};
