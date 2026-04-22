import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResignationLetterGeneratorUI } from '../ui';

const slug = 'generateur-lettre-demission';
const title = 'Generateur de Lettre de Demission Professionnelle';
const description =
  'Creez votre lettre de demission personnalisee en quelques secondes. Modeles professionnels prets a copier ou telecharger en PDF instantanement.';

const faqData = [
  {
    question: 'Combien de jours de preavis dois-je donner?',
    answer:
      "En Espagne, la periode standard est generalement de 15 jours calendaires, bien que vous deviez verifier votre contrat de travail et la convention collective de votre secteur. Certains contrats de direction peuvent exiger entre 3 et 6 mois de preavis.",
  },
  {
    question: "Ai-je droit a un solde de tout compte si je demissionne?",
    answer:
      "Oui. Le finiquito est un droit inalieable qui comprend le paiement des conges non pris, la part proportionnelle des primes et le salaire des jours travailles dans le mois de depart.",
  },
  {
    question: "Percevrai-je des allocations chomage si je demissionne volontairement?",
    answer:
      "En Espagne, la demission volontaire ne donne pas immediatement droit aux allocations chomage, car la loi considere que le travailleur a quitte son poste de son propre gre et non en raison d'une situation de chomage involontaire.",
  },
  {
    question: "Que se passe-t-il si je ne respecte pas le preavis?",
    answer:
      "L'entreprise a le droit legal de deduire de votre solde le salaire proportionnel pour chaque jour de preavis non respecte. Il est donc essentiel de bien calculer votre date de depart.",
  },
  {
    question: "Puis-je retirer ma lettre de demission une fois remise?",
    answer:
      "En principe, il est possible de retirer une demission tant que cela se produit dans la periode de preavis et ne cause pas de prejudice reel a l'entreprise. Dans tous les cas, il est preferable d'etre certain avant de la remettre.",
  },
  {
    question: "La lettre de demission doit-elle etre ecrite a la main?",
    answer:
      "Non, elle n'a pas besoin d'etre manuscrite. Une lettre imprimee est parfaitement valide juridiquement. Ce qui compte vraiment c'est que le document soit signe de votre main ou par signature numerique certifiee.",
  },
];

const howToData = [
  {
    name: 'Remplissez vos informations personnelles',
    text: "Saisissez votre nom complet, celui de votre responsable ou contact RH et le nom de l'entreprise.",
  },
  {
    name: 'Definissez votre dernier jour de travail',
    text: "Selectionnez votre date de depart en tenant compte de la periode de preavis prevue dans votre contrat.",
  },
  {
    name: 'Choisissez le motif',
    text: 'Selectionnez l\'approche qui correspond le mieux a votre situation pour personnaliser le texte.',
  },
  {
    name: 'Copiez ou telechargez la lettre',
    text: 'Cliquez sur le bouton pour copier le texte dans votre presse-papiers ou le telecharger directement en PDF.',
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

export const content: ToolLocaleContent<ResignationLetterGeneratorUI> = {
  slug,
  title,
  description,
  ui: {
    labelUserName: 'Votre nom complet',
    labelManagerName: 'Nom du responsable ou RH',
    labelManagerGender: 'Formule de politesse',
    labelCompanyName: "Nom de l'entreprise",
    labelLastDay: 'Votre dernier jour (date de depart)',
    labelReasonType: 'Type de motif',
    labelCity: 'Ville depuis laquelle vous ecrivez',
    optGenderNeutral: 'Monsieur ou Madame (Neutre)',
    optGenderM: 'Monsieur (Masculin)',
    optGenderF: 'Madame (Feminin)',
    optReasonStandard: 'Standard (Professionnel et cordial)',
    optReasonOpportunity: 'Nouvelle opportunite professionnelle',
    optReasonPersonal: 'Raisons personnelles',
    optReasonEducation: 'Croissance academique / etudes',
    optReasonGrowth: 'Manque d\'evolution interne',
    optReasonDirect: 'Direct et bref (Sans justification)',
    btnCopy: 'Copier la lettre',
    btnDownload: 'Telecharger en PDF',
    copyFeedback: 'Copie dans le presse-papiers',
    defaultUserName: 'Jean Dupont',
    defaultManagerName: 'Marie Martin',
    defaultCompanyName: 'Solutions Tech SARL',
    defaultCity: 'Paris',
    dateLocale: 'fr-FR',
    datePrefix: 'le',
    managerPrefix: 'A l\'attention de',
    managerFallback: 'Au Responsable des Ressources Humaines',
    companyFallback: "Nom de l'entreprise",
    salutationNeutral: 'Monsieur ou Madame',
    salutationM: 'Monsieur',
    salutationF: 'Madame',
    salutationFallback: 'Responsable',
    signatureFallback: 'Signature du salarie',
    thanksParagraph:
      "Je tiens a exprimer mes plus sinceres remerciements pour les opportunites de developpement professionnel et personnel qui m'ont ete offertes durant mon sejour au sein de l'entreprise.",
    transitionParagraph:
      "Je me tiens a votre entiere disposition pour faciliter la transition de mes responsabilites et assurer la transmission de mes taches en cours de la meilleure facon possible.",
    closingWord: 'Cordialement,',
    reasonStandard:
      "Je vous adresse par la presente ma demission irrevocable de mon poste actuel. Mon dernier jour de travail sera le [DATE], dans le respect du preavis prevu.",
    reasonOpportunity:
      "Je vous informe de ma decision de demissionner de mon poste actuel, ayant accepte une nouvelle opportunite professionnelle qui me permettra de relever de nouveaux defis. Ma date de depart effective sera le [DATE].",
    reasonPersonal:
      "En raison de circonstances personnelles qui necessitent toute mon attention, je me vois dans l'obligation de demissionner du poste que j'occupe. Mon lien avec l'entreprise prendra fin le [DATE].",
    reasonEducation:
      "J'ai decide de reprendre mes etudes de formation avancee a temps plein, c'est pourquoi je presente ma demission volontaire. Mon dernier jour de service sera le [DATE].",
    reasonGrowth:
      "Apres mure reflexion, j'ai decide de donner une nouvelle orientation a ma carriere professionnelle en recherchant un environnement qui me permette de developper des competences dans d'autres domaines. Mon depart effectif aura lieu le [DATE].",
    reasonDirect:
      "Par la presente, je vous communique ma decision de mettre fin a ma relation de travail avec l'entreprise. Mon dernier jour d'activite professionnelle sera le [DATE].",
  },
  faqTitle: 'Questions Frequemment Posees',
  faq: faqData: 'Sources',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Comment rediger une lettre de demission professionnelle et efficace',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Decider de quitter un emploi est une etape determinante dans toute carriere professionnelle. <strong>Remettre une lettre de demission</strong> n'est pas qu'une formalite administrative; c'est la derniere impression que vous laissez dans une organisation et un document aux implications juridiques qui doit etre gere avec precision.",
    },
    {
      type: 'tip',
      html: "<strong>Conseil professionnel:</strong> Meme si vous avez une relation de confiance avec votre superieur, la demission <strong>doit toujours etre remise par ecrit</strong>. Les documents marquent le debut officiel de la periode de preavis.",
    },
    {
      type: 'title',
      text: 'Elements essentiels d\'une lettre de demission',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Coordonnees:</strong> Votre nom complet et les informations du destinataire.',
        "<strong>Date d'emission:</strong> Le jour exact ou vous remettez le document.",
        '<strong>Declaration de demission:</strong> Une phrase claire indiquant votre volonte de quitter le poste.',
        '<strong>Dernier jour de travail:</strong> La date precise calculee en respectant le preavis.',
        '<strong>Remerciements:</strong> Un bref paragraphe valorisant l\'opportunite et l\'apprentissage.',
        '<strong>Signature:</strong> Votre signature manuscrite ou numerique.',
      ],
    },
    {
      type: 'title',
      text: 'Periodes de preavis et leurs consequences',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Contrat general:</strong> 15 jours calendaires — deduction proportionnelle sur le solde si non respecte.',
        '<strong>Direction:</strong> 3 a 6 mois — possible indemnisation pour prejudice.',
        '<strong>Periode d\'essai:</strong> 0 jour (sauf accord) — rupture immediate sans penalite.',
      ],
    },
    {
      type: 'title',
      text: 'Types de lettres selon votre situation',
      level: 3,
    },
    {
      type: 'list',
      items: [
        "<strong>Demission pour nouvelle opportunite:</strong> Axee sur l'evolution professionnelle. Ideale pour maintenir de bonnes relations.",
        '<strong>Demission pour raisons personnelles:</strong> N\'entre pas dans les details, indique simplement un besoin de temps pour des affaires privees.',
        '<strong>Demission directe:</strong> Neutre, minimaliste et purement formelle. Utilisee quand il n\'y a pas d\'interet a donner des explications.',
      ],
    },
    {
      type: 'title',
      text: 'Structure recommandee',
      level: 3,
    },
    {
      type: 'code',
      code: '[Ville, le Date]\n\nA l\'attention de [Nom du responsable]\n[Nom de l\'entreprise]\n\nMonsieur ou Madame [Prenom],\n\nJe vous adresse par la presente ma demission de mon poste. Mon dernier jour de travail sera le [Date], en respect du preavis prevu.\n\nJe vous remercie sincerement de la confiance que vous m\'avez accordee.\n\nCordialement,\n[Votre signature]',
    },
    {
      type: 'title',
      text: 'Erreurs courantes a eviter',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Ne pas indiquer de date de depart precise:</strong> Dire "je pars dans deux semaines" n\'est pas la meme chose que d\'indiquer une date precise.',
        '<strong>Utiliser la lettre pour se plaindre:</strong> La lettre de demission n\'est pas le lieu pour exprimer des frustrations.',
        '<strong>Oublier de demander le solde de tout compte:</strong> Il est recommande d\'inclure une ligne demandant la preparation du document de liquidation.',
        '<strong>Ne pas garder de copie:</strong> Remettez toujours deux exemplaires et demandez qu\'un soit tamponné avec la date de reception.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Confidentialite garantie:</strong> Tout le traitement s\'effectue localement dans votre navigateur. Vos donnees personnelles et professionnelles ne quittent jamais votre appareil.',
    },
  ],
};
