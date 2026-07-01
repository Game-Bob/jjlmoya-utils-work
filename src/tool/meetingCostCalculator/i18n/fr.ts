import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MeetingCostCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculateur-cout-reunion';
const title = 'Calculateur Coût Réunion Temps Réel Ticker';
const description =
  'Visualisez en temps réel combien coûtent vos réunions. Entrez le nombre de participants et le salaire moyen pour voir le compteur s\'incrémenter à chaque seconde.';

const faqData = [
  {
    question: 'Pourquoi mesurer le coût d\'une réunion ?',
    answer:
      'Mettre un chiffre sur le coût d\'une réunion crée une prise de conscience productive. Cela aide à réduire les réunions inutiles, encourage la ponctualité et s\'assure que les sujets traités justifient l\'investissement économique de l\'équipe.',
  },
  {
    question: 'Comment le coût est-il calculé en temps réel ?',
    answer:
      'Le système additionne les salaires bruts estimés de tous les participants et calcule un taux de dépense par seconde. Le ticker se met à jour à chaque image pour afficher le coût cumulé en direct.',
  },
  {
    question: 'Quels coûts indirects cet outil n\'inclut-il pas ?',
    answer:
      'Cette calculatrice se concentre sur le coût salarial direct. Elle n\'inclut pas le coût d\'opportunité (ce que les employés auraient pu produire), ni les charges fixes comme le loyer, les licences logicielles ou les services publics.',
  },
  {
    question: 'Comment réduire le coût de mes réunions ?',
    answer:
      'Définissez un ordre du jour clair, limitez les participants aux personnes indispensables, fixez une durée maximale et évaluez si l\'objectif peut être atteint par un message asynchrone ou un e-mail.',
  },
];

const howToData = [
  {
    name: 'Indiquer le nombre de participants',
    text: 'Saisissez combien de personnes participent actuellement à la réunion.',
  },
  {
    name: 'Ajuster le salaire moyen',
    text: 'Entrez une estimation du salaire brut annuel moyen ou du taux horaire des participants pour un calcul réaliste.',
  },
  {
    name: 'Démarrer le chronomètre',
    text: 'Appuyez sur le bouton Démarrer dès le début de la réunion pour voir le compteur de coût s\'incrémenter.',
  },
  {
    name: 'Arrêter et réfléchir',
    text: 'À la fin, mettez le ticker en pause. Observez le coût total et évaluez si les résultats obtenus valaient l\'investissement.',
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

export const content: ToolLocaleContent<MeetingCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelAccumulated: 'Coût Accumulé',
    labelAttendees: 'Participants',
    labelSalary: 'Salaire Moyen',
    optAnnual: 'Annuel Brut',
    optHourly: 'Taux Horaire',
    btnStart: 'Démarrer',
    btnPause: 'Pause',
    btnResume: 'Reprendre',
    btnReset: 'Réinitialiser',
    currencySymbol: '€',
    defaultSalary: '45000',
    numberLocale: 'fr-FR',
  },
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Pourquoi visualiser le coût d\'une réunion ?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le temps est la ressource la plus chère et la moins renouvelable dans toute organisation. Cet outil ne vise pas à décourager la collaboration, mais à favoriser une <strong>prise de conscience productive</strong>. Quand on voit l\'argent brûler en temps réel, on devient plus ponctuel, plus concis et plus intentionnel.',
    },
    {
      type: 'card',
      title: 'Le Calcul du Coût Caché',
      html: '<p>Nous calculons le coût sur la base du salaire brut annuel ou du taux horaire. Pour le calcul annuel, nous utilisons un standard de <strong>1 750 heures travaillées par an</strong> (vacances et jours fériés déduits) pour convertir le salaire en taux horaire.</p><p>La formule du burn rate est :<br><code>(Taux Horaire x Participants) / 3600</code><br>Cela donne le coût exact par seconde affiché dans le compteur.</p>',
    },
    {
      type: 'code',
      code: 'Salaire annuel: 45 000 €\nTaux horaire: 45 000 / 1 750 = 25,71 €/h\nBurn rate (4 personnes): (25,71 x 4) / 3600 = 0,029 €/sec\nCoût d\'une réunion d\'1h: 102,86 €',
    },
    {
      type: 'title',
      text: 'Conseils pour des Réunions plus Efficaces',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>La règle des 2 pizzas :</strong> Popularisée par Jeff Bezos: si deux pizzas ne suffisent pas à nourrir tout le groupe, il y a trop de monde dans la réunion.',
        '<strong>Pas d\'ordre du jour, pas de réunion :</strong> N\'acceptez jamais une réunion sans un ordre du jour clair et des objectifs définis.',
        '<strong>Réunions debout :</strong> Maintenez les points quotidiens debout. L\'inconfort physique favorise la concision.',
        '<strong>Loi de Parkinson :</strong> Le travail se dilate pour occuper le temps disponible. Fixez des créneaux de 25 ou 50 minutes plutôt que l\'heure entière.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Utilisez le ticker comme rappel visuel :</strong> Partagez votre écran avec le compteur de coût visible pendant les réunions d\'équipe. Le montant affiché crée une incitation naturelle à rester dans le sujet et à terminer à l\'heure.',
    },
  ],
};
