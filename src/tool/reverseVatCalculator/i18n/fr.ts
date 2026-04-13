import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReverseVatCalculatorUI } from '../ui';

const slug = 'calculatrice-tva-inverse-espagne';
const title = 'Calculatrice TVA Inverse: Décomposer la TVA Espagne';
const description =
  'Calculatrice TVA inverse en ligne. Décomposez la TVA de n\'importe quel montant total pour obtenir la base imposable. Outil essentiel pour les indépendants et la facturation en Espagne.';

const faqData = [
  {
    question: 'Qu\'est-ce que la TVA inverse ou décomposer la TVA?',
    answer:
      'C\'est le processus de calcul de la base imposable à partir d\'un prix total qui inclut déjà la taxe. C\'est essentiel pour les indépendants qui ont besoin d\'émettre des factures à partir d\'un prix final convenu.',
  },
  {
    question: 'Comment calculer manuellement la TVA inverse?',
    answer:
      'Pour une TVA de 21%, vous devez diviser le montant total par 1,21. Le résultat est la base imposable. La différence entre le total et la base est le montant de TVA.',
  },
  {
    question: 'Quels types de TVA existent en Espagne?',
    answer:
      'Il en existe trois types: le Général (21%), le Réduit (10% pour l\'alimentation, la santé, le logement) et le Super-réduit (4% pour les livres, journaux, pain, lait).',
  },
  {
    question: 'Quand est-il obligatoire de décomposer la TVA?',
    answer:
      'Chaque fois que vous émettez une facture professionnelle ou simplifiée. Vous devez indiquer séparément la base imposable, le taux d\'imposition appliqué et le montant total de TVA.',
  },
];

const howToData = [
  {
    name: 'Saisir le montant total',
    text: 'Tapez le montant final TVA incluse que vous souhaitez décomposer.',
  },
  {
    name: 'Sélectionner le type de TVA',
    text: 'Choisissez entre 21%, 10% ou 4% selon la catégorie de votre produit ou service.',
  },
  {
    name: 'Obtenir la base imposable',
    text: 'Consultez le calcul automatique qui montre combien d\'argent vous appartient réellement avant impôts.',
  },
  {
    name: 'Copier les données de facturation',
    text: 'Utilisez les valeurs calculées pour remplir les champs de base et TVA dans votre logiciel de facturation.',
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

export const content: ToolLocaleContent<ReverseVatCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelTotal: 'Montant Total (TVA Incluse)',
    labelVatType: 'Type de TVA',
    btn21: '21 %',
    btn10: '10 %',
    btn4: '4 %',
    btn0: '0 %',
    labelBase: 'Base Imposable',
    labelVat: 'TVA',
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
      text: 'Le Problème de Décomposer la TVA Inverse',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Pour de nombreux indépendants et PME, calculer la base imposable à partir d\'un prix total reste un casse-tête. L\'erreur la plus courante est de penser que pour enlever 21% de TVA, il suffit de soustraire 21% du total. <strong>C\'est incorrect!</strong> Procéder ainsi vous fera perdre de l\'argent chaque trimestre.',
    },
    {
      type: 'title',
      text: 'La Mathématique Expliquée',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La TVA s\'applique <strong>sur</strong> la base. Par conséquent, le prix final représente 121% de la base (si la TVA est de 21%). Pour revenir en arrière, on ne soustrait pas; on <strong>divise</strong>. En divisant par <code>1,21</code>, on demande: "Quel nombre, multiplié par 1,21, donne 100?". C\'est la seule façon d\'obtenir la décomposition exacte pour votre déclaration trimestrielle de TVA.',
    },
    {
      type: 'card',
      title: 'Erreur Courante vs. La Vraie Formule',
      html: '<p><strong>Erreur courante:</strong> <code>100€ - 21% = 79€</code> (Si vous ajoutez ensuite 21% à 79€, vous obtenez 95,59€, pas 100€!)</p><p><strong>Correct:</strong> <code>Base = Total / (1 + Taux)</code> → <code>100 / 1,21 = 82,64€</code></p>',
    },
    {
      type: 'code',
      code: 'Base Imposable = Montant Total / (1 + Taux TVA)\nMontant TVA = Montant Total - Base Imposable',
    },
    {
      type: 'title',
      text: 'Types de TVA en Espagne',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il est vital de savoir quel taux appliquer à chaque produit pour ne pas commettre de fraude fiscale ni payer en trop.',
    },
    {
      type: 'list',
      items: [
        '<strong>21% Général:</strong> Vêtements et chaussures, électronique et technologie, électricité et gaz, services professionnels.',
        '<strong>10% Réduit:</strong> Aliments transformés, eau potable, hôtellerie et restauration, transport de passagers, lunettes de vue.',
        '<strong>4% Super-réduit:</strong> Pain ordinaire et farines, lait, fromages et œufs, fruits et légumes, livres et journaux, médicaments.',
        '<strong>0% (mesures temporaires):</strong> Certaines huiles et pâtes ont eu des réductions temporaires à 0% ou 5% dans le cadre de mesures anti-inflation.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Conseil pour votre déclaration trimestrielle de TVA:</strong> Assurez-vous de sauvegarder chaque calcul. La base imposable et le montant de TVA que vous obtenez ici sont exactement les champs à remplir dans votre déclaration trimestrielle de TVA.',
    },
  ],
};
