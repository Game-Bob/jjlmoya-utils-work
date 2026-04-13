import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NieNifVerifierUI } from '../ui';

const slug = 'verificateur-nie-nif-espagne';
const title = 'Vérificateur NIE/NIF/CIF Espagne : Validateur de numéros fiscaux espagnols';
const description =
  "Outil gratuit pour vérifier la validité du NIF (DNI espagnol), NIE (étrangers) et CIF (entreprises) en Espagne. Vérifie le chiffre de contrôle et le format officiel.";

const faqData = [
  {
    question: "Est-il sécurisé d'entrer mon NIF ou NIE dans cet outil ?",
    answer:
      "Oui, c'est totalement sécurisé. La validation s'effectue entièrement dans votre navigateur via JavaScript. Vos données ne sont jamais envoyées à un serveur ni stockées dans une base de données.",
  },
  {
    question: "Quelle est la différence entre le NIF et le CIF ?",
    answer:
      "Le NIF (Número de Identificación Fiscal) est le terme actuel pour tous les identifiants fiscaux. Cependant, on utilise encore couramment CIF (Código de Identificación Fiscal) pour désigner le NIF des personnes morales (entreprises et entités).",
  },
  {
    question: "Comment savoir si un NIF est valide sans la lettre ?",
    answer:
      "Entrez les 8 chiffres dans notre vérificateur et observez si la lettre attendue correspond. L'algorithme calcule la lettre exacte en divisant le nombre par 23.",
  },
  {
    question: "Cet outil fonctionne-t-il pour les NIE commençant par Y ou Z ?",
    answer:
      "Oui, notre vérificateur prend en charge tous les formats de NIE : les anciens commençant par X et les nouveaux commençant par Y ou Z, en appliquant la conversion numérique officielle.",
  },
  {
    question: "Vérifie-t-il si le numéro existe réellement au fisc espagnol ?",
    answer:
      "Non. Cet outil effectue une validation algorithmique et mathématique. Il confirme que le numéro a une structure légale et un chiffre de contrôle correct, mais ne consulte pas le registre réel de l'Agencia Tributaria.",
  },
];

const howToData = [
  {
    name: "Localisez l'identifiant",
    text: "Cherchez le code alphanumérique sur le document (DNI, Carte de Résidence ou Carte d'identification fiscale).",
  },
  {
    name: 'Entrez le code',
    text: "Saisissez le NIF, NIE ou CIF dans le champ de texte. Pas besoin de vous soucier des espaces ou des tirets.",
  },
  {
    name: 'Vérifiez le résultat',
    text: "L'outil analysera instantanément si la structure est valide et si le caractère de contrôle correspond au numéro.",
  },
  {
    name: 'Copiez le résultat',
    text: "Si le code est valide, vous pouvez le copier directement pour le coller dans votre facture, contrat ou formulaire administratif.",
  },
];

const bibliography = [
  {
    name: 'Agencia Tributaria : NIF pour personnes physiques et morales',
    url: 'https://sede.agenciatributaria.gob.es/Sede/procedimiento-recaudatorio-gestor/nif.html',
  },
  {
    name: 'Ministère de l\'Intérieur espagnol : Structure du DNI et NIE',
    url: 'https://www.dnielectronico.es/PortalDNIe/PRF1_9._2.html?punto=5.2',
  },
  {
    name: 'BOE : Règlement général de gestion fiscale',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2007-14406',
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

export const content: ToolLocaleContent<NieNifVerifierUI> = {
  slug,
  title,
  description,
  ui: {
    labelInput: 'Saisir un identifiant fiscal espagnol',
    placeholder: '45938210Y',
    typeNIF: 'NIF / DNI',
    typeNIE: 'NIE',
    typeCIF: 'CIF',
    msgValidSuffix: 'Valide',
    msgInvalidControl: 'Chiffre de contrôle incorrect',
    msgInvalidNIEControl: 'Caractère de contrôle erroné',
    msgInvalidCIF: 'Combinaison incorrecte',
    msgIncomplete: 'Incomplet',
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
      text: "L'importance de vérifier le NIF, NIE et CIF en Espagne",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Dans l'écosystème administratif et commercial espagnol, l'identification fiscale est le pilier de toutes les transactions. Que vous soyez un travailleur indépendant émettant des factures ou une entreprise gérant des fournisseurs, disposer d'un <strong>vérificateur de NIF, NIE et CIF</strong> fiable est indispensable pour éviter les erreurs administratives et les fraudes potentielles.",
    },
    {
      type: 'title',
      text: 'Qu\'est-ce que le NIF, le NIE et le CIF ? Différences clés',
      level: 2,
    },
    {
      type: 'list',
      items: [
        "<strong>NIF (Número de Identificación Fiscal) :</strong> Terme générique pour l'identification fiscale espagnole. Pour les ressortissants espagnols, c'est le numéro du DNI avec une lettre de contrôle (8 chiffres + 1 lettre).",
        "<strong>NIE (Número de Identidad de Extranjero) :</strong> Identifiant pour les non-ressortissants espagnols ayant une activité fiscale en Espagne. Commence par X, Y ou Z, suivi de 7 chiffres et une lettre.",
        "<strong>CIF (Código de Identificación Fiscal) :</strong> Nom populaire du NIF des personnes morales. Une lettre de type + 7 chiffres + chiffre ou lettre de contrôle.",
      ],
    },
    {
      type: 'title',
      text: "Fonctionnement de l'algorithme de validation",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Pour le NIF/DNI, la lettre finale s'obtient en calculant le reste de la division par 23 (modulo 23) et en le mappant à la séquence <strong>TRWAGMYFPDXBNJZSQVHLCKE</strong>. Pour le CIF, les positions paires et impaires (doublées) sont additionnées pour vérifier le caractère de contrôle. Le calcul s'effectue dans votre navigateur en quelques millisecondes.",
    },
    {
      type: 'title',
      text: 'Conseils pour une vérification correcte',
      level: 2,
    },
    {
      type: 'list',
      items: [
        "Si le vérificateur signale une erreur, vérifiez si vous avez confondu 0 (zéro) avec O (lettre) — erreur très fréquente dans les NIE.",
        "Pour le CIF, incluez toujours la lettre initiale qui identifie le type d'entité (A = S.A., B = S.L., etc.).",
        "Cet outil vérifie la validité mathématique, pas si le numéro est actif dans le registre de l'AEAT.",
        "Utilisez le format standard sans espaces ni tirets pour de meilleurs résultats.",
      ],
    },
    {
      type: 'tip',
      html: "<strong>Confidentialité garantie :</strong> La validation s'effectue entièrement dans votre navigateur. Les numéros saisis ne sont jamais envoyés à un serveur ni stockés dans une base de données.",
    },
  ],
};
