import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EarlyRetirementSimulatorUI } from '../ui';

const slug = 'simulateur-retraite-anticipee-espagne';
const title = 'Simulateur Retraite Anticipée Espagne 2026 : Calculez votre pension';
const description =
  "Calculez gratuitement votre âge de retraite, les coefficients réducteurs et la pension estimée. Simulateur mis à jour pour la retraite anticipée volontaire et involontaire en Espagne.";

const faqData = [
  {
    question: "Quel est l'âge minimum pour une retraite anticipée en Espagne ?",
    answer:
      "Pour la retraite anticipée volontaire, l'âge minimum est de 2 ans avant l'âge légal ordinaire (généralement 63 ou 65 ans selon les cotisations). Pour la retraite involontaire, jusqu'à 4 ans avant (61 ou 63 ans).",
  },
  {
    question: "Combien d'années de cotisation dois-je avoir ?",
    answer:
      "Pour la retraite volontaire, il faut au moins 35 ans de cotisation effective. Pour la retraite involontaire ou forcée, le minimum est de 33 ans.",
  },
  {
    question: "Combien vais-je perdre en partant à la retraite anticipée ?",
    answer:
      "La réduction dépend des mois d'avancement et du total des années cotisées. Les coupes vont de 2,81 % pour un seul mois jusqu'à un maximum d'environ 21 % pour l'avancement complet de 2 ans en voie volontaire.",
  },
  {
    question: "Le temps de chômage compte-t-il pour la retraite ?",
    answer:
      "Oui, le temps passé à percevoir des allocations chômage compte pour la retraite, car le SEPE effectue les cotisations correspondantes à la Sécurité sociale.",
  },
];

const howToData = [
  {
    name: 'Entrez votre année de naissance',
    text: "Cela détermine votre âge légal ordinaire selon la réglementation en vigueur en 2026.",
  },
  {
    name: 'Estimez vos années de cotisation',
    text: "Incluez le temps de travail, le travail indépendant et les périodes de chômage cotisé.",
  },
  {
    name: 'Choisissez le type de retraite',
    text: "Indiquez si le départ est volontaire ou forcé pour appliquer les coefficients corrects.",
  },
  {
    name: 'Vérifiez votre pension estimée',
    text: "Visualisez la réduction appliquée et la date exacte à laquelle vous pourriez arrêter de travailler.",
  },
];

const bibliography = [
  {
    name: 'Sécurité Sociale Espagne : Retraite Ordinaire et Anticipée',
    url: 'https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/PrestacionesPensionesTrabajadores/10963',
  },
  {
    name: "Loi 21/2021 de garantie du pouvoir d'achat des retraites",
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-21652',
  },
  {
    name: 'Simulateur Officiel - Tu Seguridad Social',
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
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<EarlyRetirementSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelBirthYear: 'Année de naissance',
    labelContributions: 'Années cotisées',
    labelBasePension: 'Base mensuelle brute',
    labelRetirementAge: 'Âge de retraite',
    labelExpectedDate: 'Date prévue',
    labelEstimatedPension: 'Pension estimée',
    labelPermanentReduction: 'Réduction permanente',
    labelYears: 'ANS',
    btnLegalTitle: 'Ordinaire',
    btnLegalDesc: "Âge légal sans réduction. 100 % de la base.",
    btnVoluntaryTitle: 'Anticipée Volontaire',
    btnVoluntaryDesc: "Départ par choix personnel. Réduction mensuelle appliquée.",
    btnInvoluntaryTitle: 'Involontaire / ERE',
    btnInvoluntaryDesc: "Cessation forcée. Coefficients plus favorables.",
    defaultBirthYear: '1975',
    defaultContributions: '30',
    defaultBasePension: '2500',
    adviceDefault: "Déplacez le curseur pour projeter votre parcours de retraite.",
    adviceDelay:
      "Si vous retardez votre départ jusqu'à <strong>[AGE] ans</strong>, vous gagneriez environ <strong>[GAIN] € supplémentaires</strong> par mois.",
    adviceBonus: "Vous capitalisez une bonification pour départ tardif. Votre pension dépassera 100 %.",
    adviceOptimal: "Vous avez atteint l'âge ordinaire optimal avec 100 % de votre prestation.",
  },
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Sources',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: "Simulateur de Retraite Anticipée en Espagne : Guide 2026",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "La <strong>retraite anticipée</strong> est l'une des principales préoccupations financières des travailleurs en Espagne. Comprendre à quel moment on peut arrêter de travailler et, surtout, combien d'argent on perdra sous forme de coefficients réducteurs, est essentiel pour une planification de vie saine.",
    },
    {
      type: 'list',
      items: [
        "<strong>Âge légal ordinaire :</strong> 67 ans (ou 65 avec suffisamment de cotisations).",
        "<strong>Retraite anticipée volontaire :</strong> Jusqu'à 2 ans avant la limite légale.",
        "<strong>Retraite anticipée involontaire :</strong> Jusqu'à 4 ans avant (licenciement ou autre).",
        "<strong>Coefficients réducteurs :</strong> Réductions mensuelles permanentes de la pension.",
        "<strong>Condition de cotisation :</strong> Minimum 35 ans pour la volontaire, 33 pour la forcée.",
      ],
    },
    {
      type: 'title',
      text: "À quel âge puis-je légalement prendre ma retraite en Espagne ?",
      level: 2,
    },
    {
      type: 'list',
      items: [
        "<strong>Voie des 65 ans :</strong> Si vous avez cotisé plus de 38 ans et 6 mois, vous pouvez partir à 65 ans avec 100 % de votre base.",
        "<strong>Voie des 67 ans :</strong> Si vos cotisations sont inférieures à ce seuil, votre âge ordinaire est fixé à 67 ans.",
        "<strong>Service militaire :</strong> Le service militaire obligatoire peut ajouter jusqu'à 1 an de cotisations.",
      ],
    },
    {
      type: 'title',
      text: "Retraite Anticipée Volontaire",
      level: 2,
    },
    {
      type: 'card',
      title: "Conditions pour la retraite anticipée volontaire",
      html: "<ul><li>Avoir un âge inférieur de deux ans à l'âge légal ordinaire.</li><li>Justifier d'une période minimale de cotisation effective de 35 ans.</li><li>Le montant de la pension à percevoir doit être supérieur à la pension minimale.</li></ul>",
    },
    {
      type: 'title',
      text: "Coefficients Réducteurs : Le Prix du Départ Anticipé",
      level: 2,
    },
    {
      type: 'list',
      items: [
        "<strong>Moins de 38,5 ans cotisés :</strong> Réduction maximale de 21 % (2 ans d'avancement).",
        "<strong>Entre 38,5 et 41,5 ans :</strong> Réduction maximale d'environ 19 %.",
        "<strong>Entre 41,5 et 44,5 ans :</strong> Réduction maximale d'environ 17 %.",
        "<strong>Plus de 44,5 ans :</strong> Réduction maximale d'environ 15 %.",
      ],
    },
    {
      type: 'tip',
      html: "<strong>Conseil d'or :</strong> Retarder votre retraite anticipée d'un seul mois peut représenter un saut significatif dans le coefficient réducteur. Calculez toujours le bénéfice d'attendre quelques jours si vous êtes à la limite d'un palier mensuel.",
    },
    {
      type: 'card',
      title: "Exemple pratique",
      html: "<p>Un travailleur avec une base de 2 000 € qui part volontairement 2 ans avant l'âge légal avec 36 ans de cotisations. Sa réduction sera d'environ 21 %, laissant sa pension à environ <strong>1 580 € par mois</strong> pour le reste de sa vie.</p>",
    },
  ],
};
