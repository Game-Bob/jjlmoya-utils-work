import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { InvoiceLateFeeCalculatorUI } from '../ui';

const slug = 'calculadora-multa-atraso-fatura';
const title = 'Calculadora de penalização por atraso de fatura';
const description = 'Calcule uma penalização simples a partir de uma fatura vencida, de um período de tolerância e da taxa acordada no contrato. Veja os dias cobrados, a penalização e o total num resumo claro.';

const faq = [
  { question: 'Como funciona o cálculo da penalização de uma fatura?', answer: 'A calculadora subtrai os dias de tolerância aos dias de calendário entre a data de vencimento e a data do cálculo. Para taxas anuais ou mensais, aplica proporcionalmente a percentagem acordada aos dias cobrados. Uma taxa única é aplicada uma vez depois de terminar a tolerância.' },
  { question: 'Posso utilizar uma taxa legal de atraso?', answer: 'Sim, se tiver confirmado a taxa e se o contrato ou a lei aplicável permitirem a sua utilização. Introduza a taxa manualmente. A ferramenta não escolhe um país, não adivinha uma taxa legal e não decide se a penalização pode ser exigida.' },
  { question: 'O que muda com o período de tolerância?', answer: 'Os dias de tolerância são retirados ao período depois do vencimento antes de começar a penalização. Se a fatura ainda estiver nesse período, a penalização fica a zero e o resultado indica que a tolerância continua.' },
  { question: 'O total inclui impostos, custos de cobrança ou juros compostos?', answer: 'Não. O resultado é o capital na moeda escolhida mais a penalização simples dos seus dados. A mudança de moeda utiliza um fator indicativo fixo, não uma taxa de câmbio em tempo real. Não acrescenta impostos, custos fixos de cobrança, despesas legais, juros compostos ou histórico de pagamentos.' },
];

const howTo = [
  { name: 'Introduza o valor da fatura', text: 'Adicione o capital em dívida e selecione a moeda da fatura. Se mudar de moeda depois, o valor é convertido com o fator indicativo apresentado, não com uma cotação cambial em direto.' },
  { name: 'Defina as datas', text: 'Escolha a data de vencimento prevista no contrato e a data até à qual pretende verificar a conta. A ferramenta conta os dias de calendário completos entre as duas datas.' },
  { name: 'Adicione a tolerância e a taxa', text: 'Indique os dias de tolerância e a percentagem acordada para a fatura. Escolha se a taxa é anual, mensal ou única.' },
  { name: 'Veja o resumo', text: 'Confirme os dias desde o vencimento, os dias cobrados, a penalização e o total. Guarde o resumo com a fatura e confirme o contrato antes de enviar uma cobrança.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const applicationSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'BusinessApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'pt' };

export const content: ToolLocaleContent<InvoiceLateFeeCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    eyebrow: 'FATURA VENCIDA / RESUMO SIMPLES',
    intro: 'Transforme um vencimento ultrapassado numa cobrança clara.',
    sectionTerms: 'Defina as condições da fatura',
    labelAmount: 'Valor da fatura não pago',
    labelCurrency: 'Moeda da fatura',
    currencyConversionHint: 'Mudar de moeda converte o valor com um fator indicativo fixo, não com uma taxa de câmbio em tempo real.',
    currencyRateTemplate: '1 EUR ≈ {value} {currency}.',
    labelDueDate: 'Data contratual de vencimento',
    labelCalculationDate: 'Calcular até',
    labelGraceDays: 'Período de tolerância',
    labelRate: 'Taxa de penalização acordada',
    labelRatePeriod: 'A taxa aplica-se',
    rateAnnual: 'Por ano',
    rateMonthly: 'Por mês',
    rateOneTime: 'Uma vez',
    sectionReceipt: 'Resumo de cobrança',
    labelDaysSinceDue: 'Dias desde o vencimento',
    labelChargedDays: 'Dias cobrados',
    labelAppliedRate: 'Taxa aplicada',
    labelLateFee: 'Penalização por atraso',
    labelTotalDue: 'Total a cobrar',
    statusNotDue: 'Ainda não vencida',
    statusGrace: 'Ainda no período de tolerância',
    statusOverdue: 'A penalização está ativa',
    timelineDue: 'Vencimento',
    timelineToday: 'Verificado até',
    timelineGrace: 'dias cobrados depois da tolerância',
    noteDisclaimer: 'Estimativa simples com base nos seus dados. Confirme o contrato, a jurisdição, o tratamento fiscal e os custos fixos antes de apresentar uma cobrança.',
    buttonReset: 'Apagar condições guardadas',
    numberLocale: 'pt-PT',
  },
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, applicationSchema],
  seo: [
    { type: 'title', text: 'Explique facilmente uma fatura vencida', level: 2 },
    { type: 'paragraph', html: 'Um pedido de pagamento é mais fácil de rever quando o capital, as datas, a tolerância, a taxa e a penalização aparecem no mesmo lugar. Esta calculadora transforma essas condições contratuais num pequeno resumo semelhante a um recibo.' },
    { type: 'card', title: 'A fórmula simples', html: '<p><strong>Dias cobrados</strong> = dias entre o vencimento e a data do cálculo - dias de tolerância.</p><p><strong>Penalização</strong> = valor da fatura × taxa ÷ 100 × fator de tempo. As taxas anuais usam dias cobrados ÷ 365, as mensais usam dias cobrados ÷ 30 e as únicas aplicam-se uma vez depois da tolerância.</p>' },
    { type: 'paragraph', html: 'O cálculo é deliberadamente explícito e não escolhe uma taxa legal por si. Um contrato pode prever um valor fixo, uma taxa anual ou uma forma diferente de contar os dias. A conversão de moeda é apenas uma referência indicativa baseada no fator escolhido, não uma cotação cambial em direto. Se o acordo disser outra coisa, confirme a cláusula e adapte o cálculo fora desta ferramenta.' },
    { type: 'title', text: 'Confirme o resultado antes de cobrar', level: 2 },
    { type: 'code', code: 'Fatura: 1 250 €\nAté à verificação: 38 dias\nPeríodo de tolerância: 5 dias\nTaxa anual: 10%\nDias cobrados: 33\nPenalização: 1 250 € × 0,10 × 33 / 365 = 11,30 €\nTotal: 1 261,30 €' },
    { type: 'list', items: ['Compare a data de vencimento com a encomenda, a fatura ou o contrato assinado.', 'Use a data em que está realmente a preparar a cobrança, não uma data de pagamento imaginada.', 'Mantenha o capital e a penalização separados para que o destinatário possa conferir ambos.', 'Confirme se impostos, custos fixos de recuperação ou limites legais alteram o valor que pode pedir.'] },
    { type: 'tip', html: '<strong>Dica de documentação:</strong> guarde juntos a fatura, a prova de entrega ou aceitação, a cláusula contratual e este cálculo. A ferramenta explica a aritmética, mas não prova que a dívida esteja vencida ou que a penalização seja exigível.' },
  ],
};
