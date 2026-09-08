import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { InvoiceLateFeeCalculatorUI } from '../ui';

const slug = 'calculateur-frais-retard-facture';
const title = 'Calculateur de pénalité de retard de facture';
const description = 'Calculez une pénalité simple à partir d\'une facture impayée, d\'un délai de grâce et du taux prévu au contrat. Consultez les jours facturés, la pénalité et le total dans un récapitulatif clair.';

const faq = [
  { question: 'Comment fonctionne le calcul de la pénalité de facture?', answer: 'Le calculateur retire le délai de grâce du nombre de jours calendaires entre la date d\'échéance et la date du calcul. Pour un taux annuel ou mensuel, le pourcentage prévu est proratisé selon les jours facturés. Un taux ponctuel est appliqué une seule fois après le délai de grâce.' },
  { question: 'Puis-je utiliser un taux légal de retard de paiement?', answer: 'Oui, si vous avez vérifié le taux et si le contrat ou le droit applicable permet son utilisation. Saisissez vous-même ce taux. L\'outil ne choisit pas de pays, ne devine pas un taux légal et ne décide pas si la pénalité est exigible.' },
  { question: 'Que change le délai de grâce?', answer: 'Les jours de grâce sont retirés de la période suivant l\'échéance avant le début de la pénalité. Si la facture est encore dans cette période, la pénalité reste à zéro et le résultat indique que le délai court toujours.' },
  { question: 'Le total inclut-il les taxes, les frais de recouvrement ou les intérêts composés?', answer: 'Non. Le résultat correspond au principal dans la devise choisie, plus la pénalité simple issue de vos données. Un changement de devise utilise un facteur indicatif fixe, pas un taux de change en temps réel. Les taxes, frais fixes de recouvrement, frais juridiques, intérêts composés et paiements antérieurs ne sont pas ajoutés.' },
];

const howTo = [
  { name: 'Saisir le montant de la facture', text: 'Ajoutez le principal impayé et sélectionnez la devise de la facture. Si vous changez ensuite de devise, le montant est converti avec le facteur indicatif affiché, pas avec une cotation de change en direct.' },
  { name: 'Définir les dates', text: 'Choisissez la date d\'échéance prévue au contrat et la date jusqu\'à laquelle vous vérifiez le compte. L\'outil compte les jours calendaires complets entre les deux dates.' },
  { name: 'Ajouter la grâce et le taux', text: 'Saisissez les jours de grâce et le pourcentage prévu pour la facture. Indiquez si ce taux est annuel, mensuel ou ponctuel.' },
  { name: 'Vérifier le récapitulatif', text: 'Contrôlez les jours depuis l\'échéance, les jours facturés, la pénalité et le total. Conservez ce récapitulatif avec la facture et vérifiez le contrat avant toute demande.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const applicationSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'BusinessApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'fr' };

export const content: ToolLocaleContent<InvoiceLateFeeCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    eyebrow: 'FACTURE EN RETARD / RÉCAPITULATIF SIMPLE',
    intro: 'Transformez une échéance manquée en demande claire.',
    sectionTerms: 'Définir les conditions de la facture',
    labelAmount: 'Montant impayé de la facture',
    labelCurrency: 'Devise de la facture',
    currencyConversionHint: 'Changer de devise convertit le montant avec un facteur indicatif fixe, pas avec un taux de change en temps réel.',
    currencyRateTemplate: '1 EUR ≈ {value} {currency}.',
    labelDueDate: 'Date d\'échéance contractuelle',
    labelCalculationDate: 'Calculer jusqu\'au',
    labelGraceDays: 'Délai de grâce',
    labelRate: 'Taux de pénalité prévu',
    labelRatePeriod: 'Le taux s\'applique',
    rateAnnual: 'Par an',
    rateMonthly: 'Par mois',
    rateOneTime: 'Une fois',
    sectionReceipt: 'Récapitulatif de recouvrement',
    labelDaysSinceDue: 'Jours depuis l\'échéance',
    labelChargedDays: 'Jours facturés',
    labelAppliedRate: 'Taux appliqué',
    labelLateFee: 'Pénalité de retard',
    labelTotalDue: 'Total à demander',
    statusNotDue: 'Pas encore en retard',
    statusGrace: 'Encore dans le délai de grâce',
    statusOverdue: 'La pénalité court',
    timelineDue: 'Échéance',
    timelineToday: 'Vérifié jusqu\'au',
    timelineGrace: 'jours facturables après la grâce',
    noteDisclaimer: 'Estimation simple fondée sur vos données. Confirmez le contrat, la juridiction, le traitement fiscal et les éventuels frais fixes avant toute demande.',
    buttonReset: 'Effacer les conditions enregistrées',
    numberLocale: 'fr-FR',
  },
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, applicationSchema],
  seo: [
    { type: 'title', text: 'Expliquer facilement une facture en retard', level: 2 },
    { type: 'paragraph', html: 'Une demande de paiement est plus facile à vérifier lorsque le principal, les dates, le délai de grâce, le taux et la pénalité sont visibles au même endroit. Ce calculateur transforme ces conditions contractuelles en un récapitulatif de type reçu.' },
    { type: 'card', title: 'La formule simple', html: '<p><strong>Jours facturables</strong> = jours entre l\'échéance et la date du calcul - jours de grâce.</p><p><strong>Pénalité</strong> = montant de la facture × taux ÷ 100 × facteur de temps. Les taux annuels utilisent les jours facturables ÷ 365, les taux mensuels les jours facturables ÷ 30 et les taux ponctuels s\'appliquent une fois après la grâce.</p>' },
    { type: 'paragraph', html: 'Le calcul reste volontairement explicite et ne choisit pas de taux légal à votre place. Un contrat peut prévoir un forfait, un taux annuel ou une autre convention de décompte des jours. La conversion de devise est seulement un repère indicatif fondé sur le facteur choisi, pas une cotation de change en direct. Si l\'accord prévoit autre chose, vérifiez la clause et adaptez le calcul hors de cet outil.' },
    { type: 'title', text: 'Vérifier le résultat avant de réclamer', level: 2 },
    { type: 'code', code: 'Facture: 1 250 €\nÉchéance jusqu\'au contrôle: 38 jours\nDélai de grâce: 5 jours\nTaux annuel: 10 %\nJours facturables: 33\nPénalité: 1 250 € × 0,10 × 33 / 365 = 11,30 €\nTotal: 1 261,30 €' },
    { type: 'list', items: ['Comparez l\'échéance avec le bon de commande, la facture ou le contrat signé.', 'Utilisez la date réelle de préparation de la demande, pas une date de paiement imaginée.', 'Séparez le principal et la pénalité pour permettre au destinataire de rapprocher les montants.', 'Vérifiez si les taxes, les frais fixes de recouvrement ou les plafonds légaux modifient ce que vous pouvez demander.'] },
    { type: 'tip', html: '<strong>Conseil de preuve:</strong> conservez ensemble la facture, la preuve de livraison ou d\'acceptation, la clause contractuelle et ce calcul. L\'outil explique l\'arithmétique, mais ne prouve ni l\'exigibilité de la dette ni la validité de la pénalité.' },
  ],
};
