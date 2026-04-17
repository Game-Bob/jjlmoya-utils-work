import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SettlementCalculatorUI } from '../ui';

const slug = 'calculadora-acerto-contas-espanha';
const title = 'Calculadora de Acerto de Contas Espanha 2026: Calcular Finiquito';
const description =
  'Calcule o seu acerto de contas bruto passo a passo: dias de férias não gozados, subsídios proporcionais e indemnização por despedimento em Espanha.';

const faqData = [
  {
    question: 'Tenho direito ao acerto de contas se me demitir voluntariamente?',
    answer:
      'Sim, com certeza. O acerto de contas (finiquito) inclui valores já vencidos, como os dias trabalhados no mês atual, férias não gozadas e a parte proporcional dos subsídios de férias e Natal. Não terá direito a indemnização nem a subsídio de desemprego.',
  },
  {
    question: 'Qual é a indemnização que me cabe por despedimento improcedente?',
    answer:
      'Para contratos assinados após 12 de fevereiro de 2012, o direito é de 33 dias de salário por ano trabalhado, até um máximo de 24 mensalidades.',
  },
  {
    question: 'A empresa pode descontar dinheiro se eu não der o aviso prévio?',
    answer:
      'Sim. Se o seu contrato exigir um período de pré-aviso (geralmente 15 dias) e não o cumprir, a empresa tem o direito de descontar do seu acerto o correspondente aos dias de aviso em falta.',
  },
  {
    question: 'O que acontece com os impostos no pagamento das férias não gozadas?',
    answer:
      'Ao receber o pagamento de férias não gozadas, a empresa deve continuar a descontar para a Segurança Social por esses dias. Durante esse período, não pode começar a receber o subsídio de desemprego.',
  },
];

const howToData = [
  {
    name: 'Introduza o seu salário bruto',
    text: 'Digite o seu salário anual bruto (antes de impostos) e selecione o número de pagamentos por ano.',
  },
  {
    name: 'Defina as datas exatas',
    text: 'Introduza a data de início na empresa e o seu último dia de trabalho planeado.',
  },
  {
    name: 'Adicione férias não gozadas',
    text: 'Especifique quantos dias de férias ainda tem por gozar no ano atual.',
  },
  {
    name: 'Escolha o motivo da saída',
    text: 'Selecione o motivo da cessação para que o simulador aplique o rácio de indemnização correto.',
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
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<SettlementCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelSalary: 'Salário Bruto Anual',
    labelExtraPayments: 'Pagamentos Extra por Ano',
    labelStartDate: 'Data de Início',
    labelEndDate: 'Data de Fim',
    labelVacationDays: 'Dias de Férias não Gozados',
    labelDepartureReason: 'Motivo da Saída',
    opt12pays: '12 pagamentos (Prorrateado)',
    opt14pays: '14 pagamentos (Standard)',
    optImprocedente: 'Despedimento Improcedente (33 dias)',
    optObjetivo: 'Despedimento Objetivo (20 dias)',
    optTemporal: 'Fim de Contrato Temporal (12 dias)',
    optVoluntaria: 'Demissão Voluntária (Sem indemnização)',
    labelTotal: 'Total Estimado do Acerto',
    labelSeverance: 'Indemnização',
    labelVacation: 'Férias não Gozadas',
    labelExtras: 'Subsídios Prorrateados',
    labelMonthSalary: 'Salário Mensal',
    disclaimer:
      'Nota: Esta é uma estimativa bruta aproximada baseada na lei espanhola. O valor final pode variar conforme o contrato coletivo e impostos.',
    btnCopy: 'Copiar Resumo',
    copySuccess: 'Copiado',
    copySummaryTitle: 'Resumo Estimativo do Acerto',
    defaultSalary: '24000',
  },
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Fontes',
  bibliography: [],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Guia do Acerto de Contas e Indemnização em Espanha',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Compreender quanto dinheiro lhe é devido no final de um contrato em Espanha é fundamental para proteger os seus direitos, seja por <strong>despedimento</strong> ou <strong>demissão</strong>.',
    },
    {
      type: 'title',
      text: 'Diferença entre Finiquito e Indemnização',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Finiquito:</strong> Acerto de contas de valores pendentes (férias, dias trabalhados, bónus). Tem sempre direito, independentemente do motivo.',
        '<strong>Indemnização:</strong> Compensação económica no caso de certos tipos de despedimento.',
      ],
    },
  ],
};
