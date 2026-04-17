import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SalaryCalculatorUI } from '../ui';

const slug = 'calculadora-salario-espanha';
const title = 'Calculadora de Salário Espanha: Simulador de Salário Líquido IRPF e Segurança Social';
const description =
  'Descubra quanto vai ganhar realmente por mês. Cálculo preciso de retenções, base tributável e rendimento líquido de acordo com as normas espanholas.';

const faqData = [
  {
    question: 'Como é calculado o salário líquido em Espanha?',
    answer:
      'O salário líquido é calculado subtraindo as retenções de IRPF (de acordo com os escalões) e as contribuições para a Segurança Social (aproximadamente 6,35% do bruto) ao valor bruto. A percentagem de IRPF varia de acordo com a sua situação pessoal e o nível salarial.',
  },
  {
    question: 'Qual é a diferença entre 12 e 14 pagamentos?',
    answer:
      'Com 12 pagamentos, os subsídios são distribuídos mensalmente. Com 14 pagamentos, recebe dois subsídios extra (normalmente em junho/julho e dezembro). O bruto anual é o mesmo, apenas muda a distribuição.',
  },
  {
    question: 'Porque é que o meu recibo de vencimento não coincide exatamente com a calculadora?',
    answer:
      'Esta calculadora utiliza valores aproximados padrão. O seu recibo real pode variar devido a: deduções específicas da empresa, benefícios, filhos a cargo, deficiência ou situações pessoais que afetam o IRPF.',
  },
  {
    question: 'Que percentagem do meu salário fica para o Fisco?',
    answer:
      'Depende do seu salário. Em geral, entre IRPF e Segurança Social, é retido entre 25% e 45% do bruto. Quanto maior o salário, maior a percentagem de retenção devido ao sistema progressivo do IRPF.',
  },
  {
    question: 'O que é o IRPF?',
    answer:
      'Imposto sobre o Rendimento de Pessoas Físicas. É um imposto progressivo: quem ganha mais paga uma percentagem maior sobre os escalões mais elevados do seu salário.',
  },
];

const howToData = [
  {
    name: 'Introduza o salário bruto anual',
    text: 'Indique o montante total acordado no seu contrato antes de impostos e retenções.',
  },
  {
    name: 'Defina a situação familiar',
    text: 'Indique se tem filhos ou dependentes, pois isso reduz a percentagem de IRPF aplicada.',
  },
  {
    name: 'Número de pagamentos',
    text: 'Escolha se recebe o seu salário em 12 pagamentos (subsídios distribuídos) ou 14 pagamentos.',
  },
  {
    name: 'Reveja o detalhe mensal',
    text: 'Verifique quanto vai para a Segurança Social, para o IRPF e qual é o rendimento líquido exato que chegará à sua conta bancária.',
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
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<SalaryCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelGross: 'Salário Bruto Anual',
    labelPays: 'Número de Pagamentos',
    btn12: '12 Pagamentos',
    btn14: '14 Pagamentos',
    labelAge: 'Idade',
    labelContract: 'Tipo de Contrato',
    optIndefinite: 'Indeterminado / Geral',
    optTemporal: 'Temporário',
    btnCalculate: 'Calcular Salário Líquido',
    labelNetMonthly: 'Salário Líquido Mensal',
    labelNetAnnual: 'Salário Líquido Anual',
    labelPaysDisplay: 'Pagamentos',
    labelBreakdown: 'Detalhe de Retenções (Estimado)',
    labelIRPF: 'IRPF',
    labelSS: 'Segurança Social',
    disclaimer:
      '*Cálculo simplificado para trabalhador solteiro, sem filhos e com menos de 65 anos.',
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
      text: 'Para onde desaparece o meu salário bruto?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'É a surpresa mais comum num primeiro emprego: assina um contrato de 24.000 € por ano, divide por 12 esperando 2.000 € por mês, e encontra 1.600 € na sua conta. Onde estão os outros 400 €?',
    },
    {
      type: 'paragraph',
      html: 'Em Espanha, a diferença entre <strong>Bruto</strong> (o que a empresa paga) e <strong>Líquido</strong> (o que recebe) divide-se entre dois itens principais: IRPF e Segurança Social. Compreendê-los é fundamental para negociar aumentos salariais.',
    },
    {
      type: 'title',
      text: 'Segurança Social: Os ~6,35% que financiam o seu futuro',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'É uma contribuição fixa para quase todos os trabalhadores. Não depende de ser solteiro ou casado. Com este dinheiro financia:',
    },
    {
      type: 'list',
      items: [
        '<strong>Contingências Comuns (4,70%)</strong>: Cobre ausências por doença comum, acidentes não laborais, reforma e maternidade.',
        '<strong>Desemprego (1,55% ou 1,60%)</strong>: A sua contribuição para solicitar o subsídio de desemprego se perder o trabalho. Varia ligeiramente se o contrato for temporário.',
        '<strong>Formação Profissional (0,10%)</strong>: Para cursos de formação subsidiados e requalificação.',
      ],
    },
    {
      type: 'title',
      text: 'IRPF: O imposto que mais dói',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'É progressivo e pode variar entre 2% e 47% dependendo do seu salário e situação pessoal. Não é um imposto fixo; é um adiantamento ao Fisco. A empresa calcula quanto deverá pagar de impostos no próximo ano e deduz mês a mês.',
    },
    {
      type: 'title',
      text: 'Fatores que baixam o seu IRPF',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Ter filhos (especialmente com menos de 3 anos).',
        'Ter uma deficiência reconhecida (>33%).',
        'Ter um cônjuge a cargo com baixos rendimentos.',
      ],
    },
    {
      type: 'title',
      text: 'Escalões Estatais de IRPF (Aprox. 2026)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '0 € - 12.450 €: 19%',
        '12.450 € - 20.200 €: 24%',
        '20.200 € - 35.200 €: 30%',
        '35.200 € - 60.000 €: 37%',
        '> 60.000 €: 45%',
      ],
    },
    {
      type: 'title',
      text: 'A questão eterna: 12 ou 14 pagamentos?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Muitos trabalhadores preferem 14 pagamentos pelos subsídios extra no verão e Natal. Outros preferem (ou a empresa impõe) repartir o salário por 12 meses. Matematicamente, ganha exatamente o mesmo por ano.',
    },
    {
      type: 'list',
      items: [
        '<strong>12 PAGAMENTOS</strong>: Ganha mais mensalmente, mas não tem subsídios extra. Melhor para um fluxo de caixa mensal constante.',
        '<strong>14 PAGAMENTOS</strong>: Ganha um pouco menos mensalmente, mas recebe dois pagamentos duplos por ano. Funciona como "poupança forçada".',
      ],
    },
  ],
};
