import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReverseVatCalculatorUI } from '../ui';

const slug = 'calculadora-iva-reverso-espanha';
const title = 'Calculadora de IVA Reverso: Calcular Base Tributável Espanha';
const description =
  'Calculadora online de IVA reverso. Separe o IVA de qualquer valor total para obter a base tributável. Ferramenta essencial para freelancers em Espanha.';

const faqData = [
  {
    question: 'O que é IVA reverso ou separar o IVA?',
    answer:
      'É o processo de calcular a base tributável (valor líquido) a partir de um preço total que já inclui o imposto. É essencial para freelancers que precisam de emitir faturas a partir de um preço final acordado.',
  },
  {
    question: 'Como se calcula o IVA reverso manualmente?',
    answer:
      'Para uma taxa de IVA de 21%, divida o valor total por 1,21. O resultado é a base tributável. A diferença entre o total e a base é o valor do IVA.',
  },
  {
    question: 'Que tipos de IVA existem em Espanha?',
    answer:
      'Existem três tipos: Geral (21%), Reduzido (10% para alimentação, saúde, habitação) e Super-reduzido (4% para bens de primeira necessidade como pão, leite, livros e jornais).',
  },
  {
    question: 'Quando é obrigatório separar o IVA?',
    answer:
      'Sempre que emitir uma fatura profissional ou simplificada. Deve indicar separadamente a base tributável, a taxa de imposto aplicada e o valor total do IVA.',
  },
];

const howToData = [
  {
    name: 'Introduza o valor total',
    text: 'Digite o valor final incluindo o IVA que deseja separar.',
  },
  {
    name: 'Selecione o tipo de IVA',
    text: 'Escolha entre 21%, 10% ou 4% dependendo da categoria do seu produto ou serviço.',
  },
  {
    name: 'Obtenha a base tributável',
    text: 'Veja o cálculo automático que mostra quanto dinheiro é realmente seu antes de impostos.',
  },
  {
    name: 'Copie os dados de faturação',
    text: 'Use os valores calculados para preencher os campos de base e IVA no seu software de faturação.',
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

export const content: ToolLocaleContent<ReverseVatCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelTotal: 'Valor Total (IVA Incluído)',
    labelVatType: 'Tipo de IVA',
    btn21: '21 %',
    btn10: '10 %',
    btn4: '4 %',
    btn0: '0 %',
    labelBase: 'Base Tributável',
    labelVat: 'Valor do IVA',
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
      text: 'O Problema de Separar o IVA Reverso',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Para muitos freelancers, calcular a base a partir do total é uma dor de cabeça. O erro mais comum é pensar que para retirar 21% de IVA, basta subtrair 21% do total. <strong>Isto está errado!</strong> Fazer isso custar-lhe-á dinheiro em cada trimestre.',
    },
    {
      type: 'title',
      text: 'A Explicação Matemática',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O IVA é aplicado <strong>sobre</strong> a base. Portanto, o preço final é 121% da base (se o IVA for 21%). Para voltar atrás, não subtraímos; <strong>dividimos</strong>. <code>Base = Total / 1,21</code>.',
    },
    {
      type: 'code',
      code: 'Base Tributável = Valor Total / (1 + Taxa de IVA)\nValor do IVA = Valor Total - Base Tributável',
    },
  ],
};
