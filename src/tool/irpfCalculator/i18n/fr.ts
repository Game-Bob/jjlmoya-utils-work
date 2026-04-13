import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IrpfCalculatorUI } from '../ui';

const slug = 'calculatrice-irpf-espagne';
const title = 'Calculatrice IRPF: Simulateur Salaire Net Espagne';
const description =
  'Calculez votre salaire net mensuel et annuel pour 2026 en Espagne. Simulateur mis à jour avec les tranches nationales, régionales, MEI et situation familiale.';

const faqData = [
  {
    question: 'Comment le MEI affecte-t-il mon salaire net en 2026 ?',
    answer:
      'Le Mécanisme d\'Équité Intergénérationnelle augmente à 0,90% en 2026 pour assurer la durabilité des pensions. La majorité est payée par l\'employeur, mais l\'employé voit son salaire net réduit par sa contribution.',
  },
  {
    question: 'Pourquoi mon salaire net diffère-t-il entre Madrid et la Catalogne ?',
    answer:
      'L\'IRPF est un impôt décentralisé à 50% aux communautés autonomes. Madrid applique des tranches plus faibles que l\'échelle nationale, tandis que la Catalogne a sa propre échelle qui peut augmenter la retenue initiale.',
  },
  {
    question: 'Qu\'est-ce que le taux marginal et comment m\'affecte-t-il ?',
    answer:
      'Le taux marginal est le pourcentage d\'impôt sur votre dernier euro gagné. C\'est ce que vous coûte réellement une augmentation de salaire ou un bonus en impôts.',
  },
  {
    question: 'Combien de périodes de paye dois-je sélectionner pour le calcul mensuel ?',
    answer:
      'Normalement, vous êtes payé en 12 ou 14 périodes (avec bonus en été et à Noël). Sélectionnez l\'option utilisée par votre entreprise pour connaître votre salaire net mensuel réel.',
  },
  {
    question: 'Cette calculatrice est-elle fiable pour ma déclaration d\'impôts ?',
    answer:
      'Cet outil fournit une estimation basée sur la réglementation 2026. La retenue mensuelle est une approximation ; votre résultat final réel est déterminé dans la déclaration d\'impôts de juin.',
  },
];

const howToData = [
  {
    name: 'Entrez votre salaire brut',
    text: 'Tapez le montant annuel total indiqué dans votre contrat avant toute déduction ou retenue.',
  },
  {
    name: 'Définissez votre situation personnelle',
    text: 'Indiquez votre nombre d\'enfants, toute incapacité reconnue et votre état civil pour appliquer les abattements fiscaux légaux.',
  },
  {
    name: 'Choisissez votre communauté autonome',
    text: 'Votre résidence fiscale détermine l\'échelle fiscale régionale appliquée, affectant votre salaire net final.',
  },
  {
    name: 'Consultez la ventilation',
    text: 'Voyez combien va à l\'IRPF, à la Sécurité Sociale, et quel est votre salaire net réel mensuel et annuel.',
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

export const content: ToolLocaleContent<IrpfCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    titleVariables: 'Variables de calcul',
    titleCalculo: 'Calcul transparent 2026',
    labelBruto: 'Salaire annuel brut (€)',
    labelPagas: 'Nombre de périodes de paye',
    labelComunidad: 'Résidence fiscale',
    labelHijos: 'Enfants (moins de 25 ans)',
    labelDiscapacidad: 'Degré d\'incapacité',
    labelUnidad: 'Unité familiale ou concubinage',
    opt12pagas: '12 périodes',
    opt14pagas: '14 périodes',
    optGen: 'Territoire commun (Général)',
    optMad: 'Madrid',
    optCat: 'Catalogne',
    optAnd: 'Andalousie',
    optVal: 'Région de Valence',
    optPV: 'Pays basque (Foral)',
    optNav: 'Navarre (Foral)',
    optNinguna: 'Aucune',
    opt33: '> 33%',
    opt65: '> 65%',
    optSoltero: 'Célibataire, divorcé ou veuf',
    optCasadoLow: 'Marié (conjoint gagne moins de 1 500 €/an)',
    optCasadoHigh: 'Marié (conjoint a des revenus)',
    labelSalarioBruto: 'Salaire brut',
    labelSS: 'Sécurité Sociale / MEI (-)',
    labelGastos: 'Dépenses déductibles (Art. 20)',
    labelNetoAnual: 'SALAIRE NET ANNUEL',
    labelRetencionIRPF: 'Retenue IRPF (%)',
    labelNetoMensual: 'Net mensuel disponible',
    labelMarginal: 'Taux marginal appliqué',
    resultRetention: 'Retenue IRPF (%)',
    resultAnual: '/ an',
    infoText:
      'Algorithme AEAT (Quota intégrale brute - Quota minimum) validé pour 2026. Inclut la cotisation MEI à 6,47% et les réductions de revenus du travail. jjlmoya.es.',
  },
  faqTitle: 'Questions fréquemment posées',
  faq: faqData,
  bibliographyTitle: 'Sources',
  bibliography: [
    {
      name: 'Agence fiscale : IRPF',
      url: 'https://sede.agenciatributaria.gob.es/Sede/irpf.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Calculatrice IRPF 2026 : Guide complet du nouveau scénario fiscal',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L\'impôt sur le revenu des personnes physiques (IRPF) est la charge la plus pertinente du système fiscal espagnol, affectant directement le salaire mensuel de millions de travailleurs. En 2026, nous assistons à une consolidation de diverses réformes visant la progressivité et l\'adaptation aux nouvelles réalités économiques, telles que l\'augmentation du Mécanisme d\'Équité Intergénérationnelle (MEI) et la déflation des tarifs dans diverses communautés autonomes.',
    },
    {
      type: 'paragraph',
      html: 'Notre <strong>calculatrice IRPF pour 2026</strong> est conçue pour fournir une vue précise et à jour de ce qui arrivera réellement sur votre compte bancaire. Calculer le salaire net n\'est pas simplement soustraire un pourcentage fixe ; c\'est un processus mathématique qui tient compte de votre situation personnelle, de vos personnes à charge, de votre incapacité, et surtout, de votre résidence fiscale, car chaque région d\'Espagne a autorité sur la tranche fiscale régionale.',
    },
    {
      type: 'title',
      text: 'Qu\'est-ce qui change dans les bulletins de salaire 2026 ?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Pour comprendre les résultats de votre simulation, il est essentiel de connaître les piliers des calculs de retenue cette année :',
    },
    {
      type: 'list',
      items: [
        '<strong>Impact du MEI :</strong> Le Mécanisme d\'Équité Intergénérationnelle poursuit sa trajectoire haussière pour garantir les pensions, atteignant 0,90% en 2026. La majorité est payée par l\'employeur, mais les employés voient leur contribution augmentée à environ 0,15%, réduisant légèrement le salaire net.',
        '<strong>SMI et réductions :</strong> Le salaire minimum interprofessionnel agit comme une barrière. Les revenus faibles bénéficient d\'une réduction élargie des revenus du travail pour s\'assurer que les augmentations de salaire brut ne sont pas absorbées par une retenue fiscale plus élevée.',
        '<strong>Tranches régionales :</strong> Les régions comme Madrid, l\'Andalousie ou Murcie appliquent généralement des taux plus bas que la moyenne nationale, tandis que la Catalogne ou la Région de Valence ont leurs propres échelles qui peuvent augmenter la retenue aux niveaux de revenus plus élevés.',
      ],
    },
    {
      type: 'title',
      text: 'Concepts clés pour comprendre votre salaire net',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Base imposable vs. salaire brut :</strong> Vous ne payez pas d\'impôt sur tout ce que vous gagnez. La base sur laquelle s\'applique l\'IRPF est le résultat de la soustraction de votre salaire brut des cotisations de Sécurité Sociale (environ 6,45%) et d\'une réduction générale pour dépenses difficiles à justifier (2 000 € annuellement). Les abattements exonérés d\'impôt sont alors appliqués à ce résultat.',
    },
    {
      type: 'title',
      text: 'Concepts fondamentaux',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Taux marginal :</strong> Le pourcentage d\'impôt sur votre dernier euro gagné. Essentiel pour savoir ce qu\'une augmentation ou un bonus vous coûte réellement en impôts.',
        '<strong>Minimum vital :</strong> Revenu que l\'État considère comme essentiel pour couvrir les besoins élémentaires du contribuable et de sa famille, qui est donc exonéré d\'impôt.',
        '<strong>Retenue sur salaire :</strong> Paiement à compte que les employeurs versent mensuellement à l\'Agence fiscale en votre nom, basé sur une estimation de ce que vous devrez l\'année prochaine.',
        '<strong>Revenu net :</strong> Salaire brut moins les cotisations de Sécurité Sociale et les dépenses déductibles autorisées par la loi fiscale.',
      ],
    },
    {
      type: 'title',
      text: 'Comment optimiser votre retenue IRPF',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De nombreux travailleurs se demandent s\'ils doivent demander à leur employeur de retenir plus ou moins. La réalité est que la retenue est un « paiement anticipé » à l\'Agence fiscale. Si vous êtes sous-retenu pendant l\'année, votre déclaration d\'impôts peut montrer un montant dû ; si vous êtes sur-retenu, vous recevez un remboursement.',
    },
    {
      type: 'paragraph',
      html: '<strong>Le mythe du changement de tranche :</strong> Il y a un mythe selon lequel passer à une tranche supérieure signifie que vous gagnez moins net. C\'est faux. L\'IRPF est progressif ; seul le revenu dépassant la limite de tranche est imposé au taux supérieur. Vous ne gagnerez jamais moins net d\'une augmentation brute, même avec un taux marginal plus élevé.',
    },
    {
      type: 'paragraph',
      html: '<strong>Conseil pour les familles :</strong> Assurez-vous d\'avoir correctement signalé la naissance d\'enfants ou les changements de situation d\'incapacité des membres de la famille à l\'aide du formulaire 145. Cela ajuste votre retenue mensuelle et évite les mauvaises surprises lors de la campagne de déclaration d\'impôts de juin.',
    },
    {
      type: 'title',
      text: 'Différences par communauté autonome',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La décentralisation fiscale en Espagne signifie que deux personnes ayant le même salaire et la même situation familiale ont des salaires nets différents selon qu\'elles vivent à Tolède ou à Barcelone. Les communautés contrôlent la moitié de l\'impôt (tranche régionale). Madrid, par exemple, se distingue par les taux les plus bas à pratiquement tous les niveaux de revenu, tandis que d\'autres régions appliquent des déductions pour le loyer ou l\'éducation des enfants non disponibles au niveau national. Notre calculatrice tient compte de ces variations pour vous donner le chiffre le plus réaliste en fonction de votre localisation.',
    },
    {
      type: 'paragraph',
      html: 'En conclusion, la <strong>simulation du salaire net 2026</strong> est un outil de planification financière de base. Connaître votre capacité d\'épargne réelle et comprendre quelle partie de vos revenus soutient les services publics vous permet de prendre des décisions éclairées concernant les investissements, les hypothèques ou les changements de carrière.',
    },
  ],
};
