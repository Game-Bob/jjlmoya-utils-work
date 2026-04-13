import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InvoiceGeneratorUI } from '../ui';

const slug = 'generateur-factures-gratuit';
const title = 'Generateur de Factures Gratuit pour Freelances';
const description =
  'Creez des factures professionnelles en ligne sans inscription. Remplissez vos informations, ajoutez vos services, configurez les taxes et generez un PDF pret a imprimer.';

const faqData = [
  {
    question: 'Quelles informations doit contenir une facture professionnelle ?',
    answer:
      'Une facture valide doit inclure un numero sequentiel unique, la date d\'emission, le nom et les coordonnees fiscales de l\'emetteur et du destinataire, une liste detaillee des services ou produits avec quantites et prix unitaires, les taxes applicables et les conditions de paiement.',
  },
  {
    question: 'Les freelances doivent-ils facturer la taxe de vente ?',
    answer:
      'Cela depend de l\'Etat et du type de service. Aux Etats-Unis, la plupart des services professionnels tels que le conseil, le design ou le developpement logiciel sont exoneres de taxe de vente dans la majorite des Etats. Consultez un conseiller fiscal pour votre situation specifique.',
  },
  {
    question: 'Qu\'est-ce que la retenue a la source sur une facture ?',
    answer:
      'La retenue a la source (backup withholding aux Etats-Unis) est un pourcentage que le client deduit de votre paiement et verse au fisc en votre nom. Le taux standard aux Etats-Unis est de 24% et s\'applique lorsque vous n\'avez pas fourni un numero d\'identification fiscale valide.',
  },
  {
    question: 'Dois-je utiliser mon SSN ou mon EIN sur les factures ?',
    answer:
      'Pour des raisons de securite, il est preferable d\'utiliser un EIN (Employer Identification Number) plutot que votre numero de Securite sociale. L\'EIN est gratuit et s\'obtient sur irs.gov. Les clients qui vous paient 600$ ou plus par an auront besoin de votre identifiant fiscal pour le formulaire 1099-NEC.',
  },
];

const howToData = [
  {
    name: 'Saisissez vos informations d\'entreprise',
    text: 'Cliquez sur "My Company LLC" et remplacez par le nom reel de votre entreprise, votre EIN ou identifiant fiscal, adresse et email de contact.',
  },
  {
    name: 'Renseignez les coordonnees du client',
    text: 'Dans la section "Bill To:", cliquez sur chaque champ pour saisir le nom de l\'entreprise cliente, son identifiant fiscal, son adresse et son email de contact.',
  },
  {
    name: 'Ajoutez vos services et tarifs',
    text: 'Decrivez chaque service dans le tableau, indiquez la quantite et le prix unitaire. Cliquez sur "Add Row" pour ajouter des lignes supplementaires.',
  },
  {
    name: 'Verifiez les totaux et generez le PDF',
    text: 'Verifiez que tous les montants sont corrects, ajustez le pourcentage de taxe si necessaire, puis cliquez sur "Generate PDF" pour imprimer ou enregistrer en PDF.',
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
    labelEditor: 'Editeur Interactif',
    labelEditHint: 'Cliquez sur n\'importe quel texte du document pour le modifier.',
    btnGenerate: 'Generer le PDF',
    labelFrom: 'De :',
    labelTo: 'Facturer a :',
    labelDesc: 'Description du Service ou Produit',
    labelQty: 'Qte',
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
    placeholderNotes: 'Ex : Paiement du sous 30 jours par virement bancaire ou cheque...',
    labelNotes: 'Notes et Conditions de Paiement',
    currencySymbol: '$',
    defaultTaxRate: '0',
    defaultRetRate: '0',
  },
  faqTitle: 'Questions Frequemment Posees',
  faq: faqData,
  bibliographyTitle: 'Sources',
  bibliography: [
    { name: 'IRS Publication 583 Starting a Business and Keeping Records', url: 'https://www.irs.gov/pub/irs-pdf/p583.pdf' },
    { name: 'IRS Self-Employed Individuals Tax Center', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Elements Essentiels d\'une Facture Professionnelle pour les Etats-Unis',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Une facture valide est bien plus qu\'une simple demande de paiement : c\'est un document legal qui vous protege, vous et votre client. Omettre un champ obligatoire peut retarder le paiement, causer des problemes fiscaux ou invalider la facture. Pour les freelances travaillant avec des clients americains, il est essentiel de bien faire les choses des le debut.',
    },
    {
      type: 'card',
      title: 'Champs Obligatoires sur une Facture US',
      html: '<ul><li><strong>Numero de facture :</strong> Doit etre sequentiel sans interruption (ex. INV-2024-001, INV-2024-002).</li><li><strong>Date d\'emission :</strong> La date a laquelle vous emettez la facture.</li><li><strong>Informations emetteur et client :</strong> Nom complet, EIN ou Tax ID et adresse postale des deux parties.</li><li><strong>Services detailles :</strong> Description, quantite et prix unitaire de chaque ligne.</li><li><strong>Conditions de paiement :</strong> Date d\'echeance, moyens de paiement acceptes et politique de penalites.</li></ul>',
    },
    {
      type: 'title',
      text: 'Taxe de Vente et Retenue Fiscale sur les Factures Freelance',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Deux variables fiscales influencent le montant final de votre facture. La <strong>taxe de vente</strong> est collectee aupres du client et reversee a l\'Etat : elle s\'ajoute au cout du client. La <strong>retenue a la source</strong> est deduite de votre paiement par le client et versee a l\'IRS : elle reduit ce que vous recevez. La plupart des freelances prestataires de services professionnels ne facturent pas de taxe de vente.',
    },
    {
      type: 'code',
      code: 'Services rendus            $1,000.00\n+ Taxe de vente (6%)          $60.00\n- Retenue (24%)             -$240.00\n-----------------------------------------\nMontant net recu             $820.00',
    },
    {
      type: 'tip',
      html: '<strong>Conservez chaque facture en PDF :</strong> L\'IRS recommande de garder les documents comptables pendant au moins 3 ans (jusqu\'a 7 ans pour les impots sur les salaires). Utilisez le bouton "Generate PDF" apres chaque facture et classez-les dans un dossier organise par annee et par client.',
    },
  ],
};
