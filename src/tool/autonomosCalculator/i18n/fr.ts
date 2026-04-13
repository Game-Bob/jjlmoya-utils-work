import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AutonomosCalculatorUI } from '../ui';

const slug = 'calculatrice-cotisation-independant';
const title = 'Calculatrice Cotisation Travailleur Indépendant 2026: Système RETA Espagne';
const description =
  'Simulateur gratuit des cotisations des travailleurs indépendants en Espagne 2026. Calculez vos revenus nets réels, tranches de cotisation et quota mensuel avec le nouveau MEI à 0,9%.';

const faqData = [
  {
    question: 'Comment fonctionne le nouveau système de cotisation pour 2026?',
    answer:
      'Le système est basé sur 15 tranches de revenus nets réels. Vous devez déclarer une prévision de vos bénéfices (revenus moins dépenses) et payer la cotisation associée à cette tranche mensuelle.',
  },
  {
    question: 'Qu\'est-ce que le MEI et comment affecte-t-il ma cotisation?',
    answer:
      'Le Mécanisme d\'Équité Intergénérationnelle (MEI) est un impôt ciblé pour les retraites. En 2026, il passe à 0,9%, ce qui augmente légèrement la cotisation par rapport à 2025 pour tous les travailleurs indépendants.',
  },
  {
    question: 'Combien de fois puis-je modifier ma base de cotisation?',
    answer:
      'Vous pouvez modifier votre base de cotisation, et donc votre quota, jusqu\'à 6 fois par an pour l\'adapter à la réalité de vos bénéfices mensuels.',
  },
  {
    question: 'Que se passe-t-il si mes revenus réels diffèrent de ma prévision?',
    answer:
      'La Sécurité Sociale effectuera une régularisation annuelle en croisant les données avec l\'Agence Fiscale. Si vous avez sous-payé, ils réclameront la différence; si vous avez trop payé, l\'excédent vous sera automatiquement remboursé.',
  },
  {
    question: 'Le tarif fixe de 80 euros existe-t-il encore?',
    answer:
      'Oui, la cotisation réduite de 80€ est maintenue pour les nouveaux travailleurs indépendants pendant les 12 premiers mois d\'activité, prolongeable de 12 autres si les revenus sont inférieurs au salaire minimum.',
  },
];

const howToData = [
  {
    name: 'Indiquez vos revenus et dépenses',
    text: 'Saisissez le chiffre d\'affaires mensuel prévu et les dépenses déductibles de votre activité professionnelle.',
  },
  {
    name: 'Définissez votre profil professionnel',
    text: 'Sélectionnez si vous êtes travailleur indépendant individuel (7% déduction) ou dirigeant de société (3% déduction).',
  },
  {
    name: 'Visualisez votre tranche réelle',
    text: 'Le simulateur calculera votre revenu net et vous montrera la tranche de cotisation applicable en 2026.',
  },
  {
    name: 'Vérifiez l\'impact du MEI',
    text: 'Vous verrez la répartition finale de la cotisation incluant les contingences et le nouveau facteur d\'équité intergénérationnelle.',
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

export const content: ToolLocaleContent<AutonomosCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelIncome: 'Revenus Mensuels Bruts',
    labelExpenses: 'Dépenses Mensuelles Déductibles',
    labelType: 'Profil de Travailleur',
    labelFlatRate: 'Tarif Fixe (Nouvelle Inscription)',
    optStandard: 'Indépendant Individuel (7% déduc.)',
    optSocietario: 'Dirigeant de Société (3% déduc.)',
    optNoFlatRate: 'Non appliqué (Quota Réel)',
    optFlatRate: 'Oui, première année (80€/mois)',
    labelBracket: 'Votre Tranche de Revenu Net',
    labelNetDisplay: 'Revenu Net Mensuel',
    labelCuota: 'Cotisation Sécurité Sociale',
    labelBase: 'Base de Cotisation',
    labelNetAfter: 'Net Réel (Après Cotisation)',
    labelProjection: 'PROJECTION 2026 (MEI 0,9%)',
    infoText:
      'Système RETA 2026: Le calcul inclut le revenu net mensuel avec la déduction des dépenses génériques (7% ou 3%). La cotisation affichée inclut les contingences communes, professionnelles, cessation d\'activité, formation et le Mécanisme d\'Équité Intergénérationnelle (MEI) mis à jour à 0,9% pour 2026.',
  },
  faqTitle: 'Questions Fréquemment Posées',
  faq: faqData,
  bibliographyTitle: 'Sources',
  bibliography: [
    {
      name: 'Sécurité Sociale: Nouveau système de cotisation',
      url: 'https://portal.seg-social.gob.es/wps/portal/importass/importass/Colectivos/Trabajo+Autonomo/guia',
    },
    {
      name: 'Agence Fiscale: Revenus d\'activités économiques',
      url: 'https://sede.agenciatributaria.gob.es/Sede/irpf/empresarios-individuales-profesionales/rendimientos-actividades-economicas.html',
    },
    {
      name: 'BOE: Décret-loi Royal 13/2022 sur la réforme du RETA',
      url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2022-12482',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Calculatrice de Cotisation des Indépendants 2026: Guide du Nouveau Système',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Être travailleur indépendant en Espagne implique faire face à l\'une des tâches les plus dynamiques et parfois confuses: les <strong>cotisations à la Sécurité Sociale</strong>. Depuis l\'entrée en vigueur du nouveau système basé sur les <strong>revenus nets réels</strong>, la notion de "quota fixe" a disparu pour laisser place à un modèle progressif.',
    },
    {
      type: 'title',
      text: 'Comment fonctionne le Nouveau Système de Cotisation RETA?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Jusqu\'en 2023, chaque travailleur indépendant pouvait choisir librement sa base de cotisation, ce qui conduisait la grande majorité à cotiser au minimum. La réforme vise à ce que ceux qui gagnent le plus contribuent davantage, tandis que ceux avec des revenus plus faibles voient leur charge mensuelle allégée.',
    },
    {
      type: 'paragraph',
      html: 'Le système est basé sur les <strong>tranches de revenu net</strong>. Cela signifie que votre quota ne dépend pas de vos revenus bruts (chiffre d\'affaires), mais de ce que vous gardez réellement "net" après déduction des dépenses professionnelles et d\'une déduction supplémentaire pour dépenses génériques.',
    },
    {
      type: 'title',
      text: 'Nouveautés Clés pour 2026: Le facteur MEI',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L\'année 2026 marque la consolidation de la deuxième phase de la réforme. L\'une des mises à jour les plus critiques est l\'augmentation du <strong>Mécanisme d\'Équité Intergénérationnelle (MEI)</strong>.',
    },
    {
      type: 'list',
      items: [
        '<strong>Augmentation du MEI:</strong> Pour 2026, le MEI passe à 0,9%, représentant une légère augmentation de la cotisation par rapport à 2025 pour toutes les tranches.',
        '<strong>Révision des Tranches:</strong> Les tranches de revenus nets sont maintenues, mais les cotisations minimales et maximales de chaque fourchette sont ajustées pour converger avec le système de cotisation sur revenus réels.',
        '<strong>Régularisation Annuelle:</strong> En fin d\'année, la Sécurité Sociale croisera les données avec l\'Agence Fiscale. Si vous avez trop ou pas assez payé selon vos bénéfices réels, un remboursement ou une réclamation sera émis.',
      ],
    },
    {
      type: 'title',
      text: 'Comment calculer votre Revenu Net Mensuel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pour utiliser notre calculatrice avec précision, il est essentiel de comprendre quelle valeur saisir. La formule appliquée par la Sécurité Sociale est:',
    },
    {
      type: 'code',
      code: 'Revenu Net = (Revenus Bruts - Dépenses Déductibles) / (1 - Dépenses Génériques)',
    },
    {
      type: 'paragraph',
      html: 'La <strong>Déduction des Dépenses Génériques</strong> est de <strong>7%</strong> pour les travailleurs indépendants individuels et de <strong>3%</strong> pour les dirigeants de société.',
    },
    {
      type: 'card',
      title: 'Exemple de calcul 2026',
      html: '<ul><li>Facturation: 4 000€ / Dépenses: 1 000€</li><li>Marge bénéficiaire: 3 000€</li><li>Déduction générique (7%): 210€</li><li>Revenu net calculable: 2 790€</li><li><strong>Cotisation 2026 estimée:</strong> Tranche 8, ~350€ + ajustement MEI.</li></ul>',
    },
    {
      type: 'title',
      text: 'Avantages du Système Progressif',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Meilleure protection sociale:</strong> En cotisant sur des bases plus réalistes, les prestations pour incapacité temporaire, maternité, paternité et surtout la retraite seront significativement supérieures.',
        '<strong>Flexibilité totale:</strong> Vous pouvez changer votre base de cotisation jusqu\'à 6 fois par an. Si vous prévoyez une chute drastique des revenus, vous pouvez descendre de tranche.',
        '<strong>Tarif Fixe à 80€:</strong> Maintenu pour les nouveaux entrepreneurs pendant la première année, permettant un démarrage avec des coûts fixes contrôlés.',
      ],
    },
    {
      type: 'title',
      text: 'Dirigeant de Société vs. Indépendant Individuel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le <strong>dirigeant de société</strong> (avec une SL) a une base de cotisation minimale légèrement supérieure et la déduction des dépenses génériques est moindre (3%). Cela est dû au fait que la loi considère que le contrôle actionnarial lui confère une position différente face aux risques du marché.',
    },
    {
      type: 'tip',
      html: '<strong>Conseil Pro:</strong> Si vos revenus nets varient beaucoup d\'un mois à l\'autre, essayez de vous positionner dans une tranche intermédiaire prudente. La régularisation ultérieure est inévitable, mais vous éviterez ainsi des paiements imprévus de milliers d\'euros lorsque la "facture" de la Sécurité Sociale arrivera en fin d\'année.',
    },
    {
      type: 'title',
      text: 'Que comprend votre quota mensuel?',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Contingences Communes (28,30%):</strong> Couvre les absences pour maladie commune ou accidents non professionnels.',
        '<strong>Contingences Professionnelles (1,30%):</strong> Accidents du travail et maladies professionnelles.',
        '<strong>Cessation d\'Activité (0,90%):</strong> Le "chômage" du travailleur indépendant.',
        '<strong>Formation Professionnelle (0,10%):</strong> Accès aux cours et formations.',
        '<strong>MEI (0,90% en 2026):</strong> Fonds pour garantir la durabilité des retraites.',
      ],
    },
    {
      type: 'title',
      text: 'Le Processus de Régularisation (Fisc et Sécurité Sociale)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Chaque année, après la campagne de déclaration d\'impôts, l\'Agence Fiscale communique vos revenus nets effectifs à la Sécurité Sociale. Si vous avez choisi une tranche inférieure à celle qui vous correspondait réellement, vous recevrez une notification de paiement pour la différence. Au contraire, si vous avez cotisé au-dessus de vos bénéfices, la Sécurité Sociale vous remboursera automatiquement l\'excédent.',
    },
    {
      type: 'title',
      text: 'Conclusion et Recommandations',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La <strong>calculatrice des indépendants 2026</strong> est un allié indispensable pour la planification fiscale de tout freelance. Nous vous recommandons d\'utiliser ce simulateur chaque fois que vous signez un contrat important ou que vous modifiez vos coûts fixes pour vous assurer que votre cotisation est toujours en phase avec la réalité de votre activité.',
    },
  ],
};
