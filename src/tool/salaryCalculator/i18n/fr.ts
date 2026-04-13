import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SalaryCalculatorUI } from '../ui';

const slug = 'calculatrice-salaire-espagne';
const title = 'Calculatrice Salaire Espagne: Simulateur Salaire Net IRPF et Sécurité Sociale';
const description =
  'Découvrez combien vous gagnerez réellement chaque mois. Calcul précis des retenues, de la base imposable et du revenu net selon la réglementation espagnole.';

const faqData = [
  {
    question: 'Comment le salaire net est-il calculé en Espagne?',
    answer:
      'Le salaire net est calculé en soustrayant du salaire brut les retenues d\'IRPF (selon les tranches) et les cotisations de Sécurité Sociale (environ 6,35% du brut). Le pourcentage d\'IRPF varie selon votre situation personnelle et votre niveau de salaire.',
  },
  {
    question: 'Quelle est la différence entre 12 et 14 périodes de paie?',
    answer:
      'Avec 12 périodes, les paies supplémentaires sont réparties mensuellement. Avec 14 périodes, vous recevez deux paies supplémentaires complètes (normalement en juin/juillet et décembre). Le brut annuel est le même, seule la répartition change.',
  },
  {
    question: 'Pourquoi mon bulletin de salaire ne correspond-il pas exactement à la calculatrice?',
    answer:
      'Cette calculatrice utilise des valeurs approximatives standard. Votre bulletin réel peut varier en raison de: déductions spécifiques de votre entreprise, avantages sociaux, enfants à charge, handicap, ou situations personnelles affectant l\'IRPF.',
  },
  {
    question: 'Quel pourcentage du salaire le Trésor conserve-t-il?',
    answer:
      'Cela dépend de votre salaire. En général, entre l\'IRPF et la Sécurité Sociale, 25 % à 45 % du brut sont retenus. Plus le salaire est élevé, plus le pourcentage de retenue est important en raison du système progressif de l\'IRPF.',
  },
  {
    question: 'Qu\'est-ce que l\'IRPF?',
    answer:
      'L\'Impôt sur le Revenu des Personnes Physiques. C\'est un impôt progressif: celui qui gagne plus paie un pourcentage plus élevé sur les tranches supérieures de son salaire.',
  },
];

const howToData = [
  {
    name: 'Entrez le salaire brut annuel',
    text: 'Tapez le montant total convenu dans votre contrat avant les impôts et retenues.',
  },
  {
    name: 'Définir la situation familiale',
    text: 'Indiquez si vous avez des enfants ou des personnes à charge, car cela réduit le pourcentage d\'IRPF qui vous s\'applique.',
  },
  {
    name: 'Nombre de périodes de paie',
    text: 'Choisissez si vous recevez votre salaire en 12 périodes (bonus répartis) ou 14 périodes.',
  },
  {
    name: 'Consulter la répartition mensuelle',
    text: 'Vérifiez combien va à la Sécurité Sociale, à l\'IRPF et quel est le revenu net exact qui arrivera sur votre compte bancaire.',
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
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<SalaryCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelGross: 'Salaire Brut Annuel',
    labelPays: 'Nombre de Périodes de Paie',
    btn12: '12 Périodes',
    btn14: '14 Périodes',
    labelAge: 'Âge',
    labelContract: 'Type de Contrat',
    optIndefinite: 'Indéfini / Général',
    optTemporal: 'Temporaire',
    btnCalculate: 'Calculer le Salaire Net',
    labelNetMonthly: 'Salaire Net Mensuel',
    labelNetAnnual: 'Salaire Net Annuel',
    labelPaysDisplay: 'Périodes',
    labelBreakdown: 'Répartition des Retenues (Estimée)',
    labelIRPF: 'IRPF',
    labelSS: 'Sécurité Sociale',
    disclaimer:
      '*Calcul simplifié pour un travailleur célibataire, sans enfants et âgé de moins de 65 ans.',
  },
  faqTitle: 'Questions Fréquemment Posées',
  faq: faqData,
  bibliographyTitle: 'Sources',
  bibliography: [],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Où disparaît mon salaire brut?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'C\'est la surprise la plus courante du premier emploi: vous signez un contrat de 24 000€ par an, vous divisez par 12 en espérant 2 000€ par mois, et vous trouvez 1 600€ sur votre compte. Où sont les 400€ restants?',
    },
    {
      type: 'paragraph',
      html: 'En Espagne, la différence entre <strong>Brut</strong> (ce que paie l\'entreprise) et <strong>Net</strong> (ce que vous recevez) est répartie entre deux postes principaux: l\'IRPF et la Sécurité Sociale. Les comprendre est essentiel pour négocier des augmentations salariales.',
    },
    {
      type: 'title',
      text: 'Sécurité Sociale: Le ~6,35% qui finance votre avenir',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'C\'est une cotisation fixe pour pratiquement tous les travailleurs. Elle ne dépend pas de votre situation maritale. Avec cet argent, vous financez:',
    },
    {
      type: 'list',
      items: [
        '<strong>Contingences Communes (4,70%)</strong>: Couvre les absences pour maladie commune, les accidents non professionnels, la retraite et la maternité.',
        '<strong>Chômage (1,55% ou 1,60%)</strong>: Votre contribution pour percevoir les allocations chômage si vous perdez votre emploi. Varie légèrement si le contrat est temporaire.',
        '<strong>Formation Professionnelle (0,10%)</strong>: Pour les cours de formation subventionnés et le recyclage.',
      ],
    },
    {
      type: 'title',
      text: 'IRPF: L\'impôt qui fait le plus mal',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il est progressif et peut varier de 2% à 47% selon votre salaire et votre situation personnelle. Ce n\'est pas un impôt fixe; c\'est un acompte auprès du Trésor. L\'entreprise calcule combien vous devriez payer en impôts l\'année prochaine et le déduit mois par mois.',
    },
    {
      type: 'title',
      text: 'Facteurs qui réduisent votre IRPF',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Avoir des enfants (surtout moins de 3 ans).',
        'Avoir un handicap reconnu (>33%).',
        'Avoir un conjoint à charge avec un faible revenu.',
      ],
    },
    {
      type: 'title',
      text: 'Tranches IRPF d\'État (Approx. 2026)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '0€ - 12 450€: 19%',
        '12 450€ - 20 200€: 24%',
        '20 200€ - 35 200€: 30%',
        '35 200€ - 60 000€: 37%',
        '> 60 000€: 45%',
      ],
    },
    {
      type: 'title',
      text: 'La question éternelle: 12 ou 14 périodes de paie?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De nombreux travailleurs préfèrent 14 périodes pour les paies supplémentaires en été et à Noël. D\'autres préfèrent (ou l\'entreprise impose) répartir le salaire sur 12 mois. Mathématiquement, vous gagnez exactement la même chose par an.',
    },
    {
      type: 'list',
      items: [
        '<strong>12 PÉRIODES</strong>: Vous gagnez plus chaque mois, mais pas de bonus. Meilleur pour un flux de trésorerie mensuel constant.',
        '<strong>14 PÉRIODES</strong>: Vous gagnez un peu moins chaque mois, mais recevez deux paiements doubles par an. Fonctionne comme une "économie forcée".',
      ],
    },
  ],
};
