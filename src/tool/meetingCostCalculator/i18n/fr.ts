import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MeetingCostCalculatorUI } from '../ui';

const slug = 'calculateur-cout-reunion';
const title = 'Calculateur Cout Reunion Temps Reel Ticker';
const description =
  'Visualisez en temps reel combien coutent vos reunions. Entrez le nombre de participants et le salaire moyen pour voir le compteur s\'incrementer a chaque seconde.';

const faqData = [
  {
    question: 'Pourquoi mesurer le cout d\'une reunion ?',
    answer:
      'Mettre un chiffre sur le cout d\'une reunion cree une prise de conscience productive. Cela aide a reduire les reunions inutiles, encourage la ponctualite et s\'assure que les sujets traites justifient l\'investissement economique de l\'equipe.',
  },
  {
    question: 'Comment le cout est-il calcule en temps reel ?',
    answer:
      'Le systeme additionne les salaires bruts estimes de tous les participants et calcule un taux de depense par seconde. Le ticker se met a jour a chaque image pour afficher le cout cumule en direct.',
  },
  {
    question: 'Quels couts indirects cet outil n\'inclut-il pas ?',
    answer:
      'Cette calculatrice se concentre sur le cout salarial direct. Elle n\'inclut pas le cout d\'opportunite (ce que les employes auraient pu produire), ni les charges fixes comme le loyer, les licences logicielles ou les services publics.',
  },
  {
    question: 'Comment reduire le cout de mes reunions ?',
    answer:
      'Definissez un ordre du jour clair, limitez les participants aux personnes indispensables, fixez une duree maximale et evaluez si l\'objectif peut etre atteint par un message asynchrone ou un e-mail.',
  },
];

const howToData = [
  {
    name: 'Indiquer le nombre de participants',
    text: 'Saisissez combien de personnes participent actuellement a la reunion.',
  },
  {
    name: 'Ajuster le salaire moyen',
    text: 'Entrez une estimation du salaire brut annuel moyen ou du taux horaire des participants pour un calcul realiste.',
  },
  {
    name: 'Demarrer le chronometre',
    text: 'Appuyez sur le bouton Demarrer des le debut de la reunion pour voir le compteur de cout s\'incrementer.',
  },
  {
    name: 'Arreter et reflechir',
    text: 'A la fin, mettez le ticker en pause. Observez le cout total et evaluez si les resultats obtenus valaient l\'investissement.',
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
    labelAccumulated: 'Cout Accumule',
    labelAttendees: 'Participants',
    labelSalary: 'Salaire Moyen',
    optAnnual: 'Annuel Brut',
    optHourly: 'Taux Horaire',
    btnStart: 'Demarrer',
    btnPause: 'Pause',
    btnResume: 'Reprendre',
    btnReset: 'Reinitialiser',
    currencySymbol: '€',
    defaultSalary: '45000',
    numberLocale: 'fr-FR',
  },
  faqTitle: 'Questions Frequemment Posees',
  faq: faqData,
  bibliographyTitle: 'Sources',
  bibliography: [
    { name: 'Stop the Meeting Madness (Harvard Business Review)', url: 'https://hbr.org/2017/07/stop-the-meeting-madness' },
    { name: 'Time Wasting at Work (Atlassian)', url: 'https://www.atlassian.com/time-wasting-at-work-infographic' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Pourquoi visualiser le cout d\'une reunion ?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le temps est la ressource la plus chere et la moins renouvelable dans toute organisation. Cet outil ne vise pas a decourager la collaboration, mais a favoriser une <strong>prise de conscience productive</strong>. Quand on voit l\'argent bruler en temps reel, on devient plus ponctuel, plus concis et plus intentionnel.',
    },
    {
      type: 'card',
      title: 'Le Calcul du Cout Cache',
      html: '<p>Nous calculons le cout sur la base du salaire brut annuel ou du taux horaire. Pour le calcul annuel, nous utilisons un standard de <strong>1 750 heures travaillees par an</strong> (vacances et jours feries deduits) pour convertir le salaire en taux horaire.</p><p>La formule du burn rate est :<br><code>(Taux Horaire x Participants) / 3600</code><br>Cela donne le cout exact par seconde affiche dans le compteur.</p>',
    },
    {
      type: 'code',
      code: 'Salaire annuel : 45 000 €\nTaux horaire : 45 000 / 1 750 = 25,71 €/h\nBurn rate (4 personnes) : (25,71 x 4) / 3600 = 0,029 €/sec\nCout d\'une reunion d\'1h : 102,86 €',
    },
    {
      type: 'title',
      text: 'Conseils pour des Reunions plus Efficaces',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>La regle des 2 pizzas :</strong> Popularisee par Jeff Bezos : si deux pizzas ne suffisent pas a nourrir tout le groupe, il y a trop de monde dans la reunion.',
        '<strong>Pas d\'ordre du jour, pas de reunion :</strong> N\'acceptez jamais une reunion sans un ordre du jour clair et des objectifs definis.',
        '<strong>Reunions debout :</strong> Maintenez les points quotidiens debout. L\'inconfort physique favorise la concision.',
        '<strong>Loi de Parkinson :</strong> Le travail se dilate pour occuper le temps disponible. Fixez des creneaux de 25 ou 50 minutes plutot que l\'heure entiere.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Utilisez le ticker comme rappel visuel :</strong> Partagez votre ecran avec le compteur de cout visible pendant les reunions d\'equipe. Le montant affiche cree une incitation naturelle a rester dans le sujet et a terminer a l\'heure.',
    },
  ],
};
