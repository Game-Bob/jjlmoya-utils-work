import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InvoiceGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'generateur-factures-gratuit';
const title = 'Générateur de Factures Gratuit pour Freelances';
const description =
  'Créez des factures professionnelles en ligne sans inscription. Remplissez vos informations, ajoutez vos services, configurez les taxes et générez un PDF prêt à imprimer.';

const faqData = [
  {
    question: 'Quelles informations doit contenir une facture professionnelle ?',
    answer:
      'Une facture valide doit inclure un numéro séquentiel unique, la date d\'émission, le nom et les coordonnées fiscales de l\'émetteur et du destinataire, une liste détaillée des services ou produits avec quantités et prix unitaires, les taxes applicables et les conditions de paiement.',
  },
  {
    question: 'Les freelances doivent-ils facturer la taxe de vente ?',
    answer:
      'Cela dépend de l\'État et du type de service. Aux États-Unis, la plupart des services professionnels tels que le conseil, le design ou le développement logiciel sont exonérés de taxe de vente dans la majorité des États. Consultez un conseiller fiscal pour votre situation spécifique.',
  },
  {
    question: 'Qu\'est-ce que la retenue à la source sur une facture ?',
    answer:
      'La retenue à la source (backup withholding aux États-Unis) est un pourcentage que le client déduit de votre paiement et verse au fisc en votre nom. Le taux standard aux États-Unis est de 24% et s\'applique lorsque vous n\'avez pas fourni un numéro d\'identification fiscale valide.',
  },
  {
    question: 'Dois-je utiliser mon SSN ou mon EIN sur les factures ?',
    answer:
      'Pour des raisons de sécurité, il est préférable d\'utiliser un EIN (Employer Identification Number) plutôt que votre numéro de Sécurité sociale. L\'EIN est gratuit et s\'obtient sur irs.gov. Les clients qui vous paient 600$ ou plus par an auront besoin de votre identifiant fiscal pour le formulaire 1099-NEC.',
  },
];

const howToData = [
  {
    name: 'Saisissez vos informations d\'entreprise',
    text: 'Cliquez sur "My Company LLC" et remplacez par le nom réel de votre entreprise, votre EIN ou identifiant fiscal, adresse et email de contact.',
  },
  {
    name: 'Renseignez les coordonnées du client',
    text: 'Dans la section "Bill To:", cliquez sur chaque champ pour saisir le nom de l\'entreprise cliente, son identifiant fiscal, son adresse et son email de contact.',
  },
  {
    name: 'Ajoutez vos services et tarifs',
    text: 'Décrivez chaque service dans le tableau, indiquez la quantité et le prix unitaire. Cliquez sur "Add Row" pour ajouter des lignes supplémentaires.',
  },
  {
    name: 'Vérifiez les totaux et générez le PDF',
    text: 'Vérifiez que tous les montants sont corrects, ajustez le pourcentage de taxe si nécessaire, puis cliquez sur "Generate PDF" pour imprimer ou enregistrer en PDF.',
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

export const content: ToolLocaleContent<InvoiceGeneratorUI> = {
  slug,
  title,
  description,
  ui: {
    labelEditor: 'Éditeur Interactif',
    labelEditHint: 'Cliquez sur n\'importe quel texte du document pour le modifier.',
    btnGenerate: 'Générer le PDF',
    labelFrom: 'De :',
    labelTo: 'Facturer à :',
    labelDesc: 'Description du Service ou Produit',
    labelQty: 'Qté',
    labelPrice: 'Prix',
    labelAmount: 'Montant',
    btnAddRow: 'Ajouter une ligne',
    labelSubtotal: 'Sous-total :',
    labelTax: 'Taxe',
    labelWithholding: 'Retenue',
    labelTotal: 'Total :',
    defaultInvoiceTitle: 'FACTURE',
    defaultInvoiceNum: 'INV-24-001',
    defaultCompanyName: 'Mon Entreprise LLC',
    defaultCompanyId: 'EIN 12-3456789',
    defaultAddress: '123 Main Street',
    defaultCity: 'New York, NY 10001',
    defaultEmail: 'contact@monentreprise.com',
    placeholderDesc: 'Ajouter une description...',
    placeholderNotes: 'Ex: Paiement du sous 30 jours par virement bancaire ou chèque...',
    labelNotes: 'Notes et Conditions de Paiement',
    currencySymbol: '$',
    defaultTaxRate: '0',
    defaultRetRate: '0',
  },
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Éléments Essentiels d\'une Facture Professionnelle pour les États-Unis',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Une facture valide est bien plus qu\'une simple demande de paiement: c\'est un document légal qui vous protège, vous et votre client. Omettre un champ obligatoire peut retarder le paiement, causer des problèmes fiscaux ou invalider la facture. Pour les freelances travaillant avec des clients américains, il est essentiel de bien faire les choses dès le début.',
    },
    {
      type: 'card',
      title: 'Champs Obligatoires sur une Facture US',
      html: '<ul><li><strong>Numéro de facture :</strong> Doit être séquentiel sans interruption (ex. INV-2024-001, INV-2024-002).</li><li><strong>Date d\'émission :</strong> La date à laquelle vous émettez la facture.</li><li><strong>Informations émetteur et client :</strong> Nom complet, EIN ou Tax ID et adresse postale des deux parties.</li><li><strong>Services détaillés :</strong> Description, quantité et prix unitaire de chaque ligne.</li><li><strong>Conditions de paiement :</strong> Date d\'échéance, moyens de paiement acceptés et politique de pénalités.</li></ul>',
    },
    {
      type: 'title',
      text: 'Taxe de Vente et Retenue Fiscale sur les Factures Freelance',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Deux variables fiscales influencent le montant final de votre facture. La <strong>taxe de vente</strong> est collectée auprès du client et reversée à l\'État: elle s\'ajoute au coût du client. La <strong>retenue à la source</strong> est déduite de votre paiement par le client et versée à l\'IRS: elle réduit ce que vous recevez. La plupart des freelances prestataires de services professionnels ne facturent pas de taxe de vente.',
    },
    {
      type: 'code',
      code: 'Services rendus    $1,000.00\n+ Taxe de vente (6%)    $60.00\n- Retenue (24%)     -$240.00\n=========================================\nMontant net reçu     $820.00',
    },
    {
      type: 'tip',
      html: '<strong>Conservez chaque facture en PDF :</strong> L\'IRS recommande de garder les documents comptables pendant au moins 3 ans (jusqu\'à 7 ans pour les impôts sur les salaires). Utilisez le bouton "Generate PDF" après chaque facture et classez-les dans un dossier organisé par année et par client.',
    },

  { type: 'paragraph', html: "Vérifiez les données, unités, arrondi, date et juridiction, car chacun de ces éléments peut modifier l'estimation." },
  { type: 'paragraph', html: "Utilisez le résultat pour planifier et comparer des scénarios ; il ne remplace ni un calcul officiel ni un avis professionnel." },],
};
