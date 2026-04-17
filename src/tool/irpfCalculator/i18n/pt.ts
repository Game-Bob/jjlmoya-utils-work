import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IrpfCalculatorUI } from '../ui';

const slug = 'calculadora-irpf-espanha';
const title = 'Calculadora IRPF 2026: Simulador de Salário Líquido Espanha';
const description =
  'Calcule o seu salário líquido mensal e anual para 2026 em Espanha. Simulador atualizado com tabelas estatais, regionais, MEI e situação familiar.';

const faqData = [
  {
    question: 'Como é que o MEI afeta o meu salário líquido em 2026?',
    answer:
      'O Mecanismo de Equidade Intergeneracional (MEI) sobe para 0,90% em 2026 para garantir a sustentabilidade das pensões. A maior parte é paga pelo empregador, mas os trabalhadores veem o seu salário líquido reduzido pela sua percentagem de contribuição.',
  },
  {
    question: 'Porque é que o meu salário líquido é diferente em Madrid e na Catalunha?',
    answer:
      'O IRPF é um imposto cedido em 50% às Comunidades Autónomas. Madrid aplica escalões mais baixos do que a tabela estatal, enquanto a Catalunha tem uma tabela própria que pode aumentar a retenção inicial.',
  },
  {
    question: 'O que é a taxa marginal e como me afeta?',
    answer:
      'A taxa marginal é a percentagem de imposto incidente sobre o último euro ganho. Mostra o que um aumento de salário ou um bónus lhe custa realmente em termos de impostos.',
  },
  {
    question: 'Quantos pagamentos devo selecionar para o cálculo mensal?',
    answer:
      'Normalmente recebe 12 ou 14 pagamentos (com subsídios de verão e Natal). Selecione a opção que a sua empresa utiliza para saber o seu rendimento líquido mensal real.',
  },
  {
    question: 'Esta calculadora é fiável para a minha declaração de rendimentos?',
    answer:
      'Esta ferramenta fornece uma estimativa baseada nos regulamentos de 2026. A retenção mensal é uma aproximação; o resultado final real é determinado na entrega da declaração em junho.',
  },
];

const howToData = [
  {
    name: 'Introduza o seu salário bruto',
    text: 'Indique o montante total anual que consta no seu contrato antes de quaisquer descontos ou retenções.',
  },
  {
    name: 'Defina a sua situação pessoal',
    text: 'Indique o número de filhos, qualquer deficiência reconhecida e o estado civil para aplicar os mínimos isentos de lei.',
  },
  {
    name: 'Escolha a sua Comunidade Autónoma',
    text: 'A sua residência fiscal determina a tabela de imposto regional aplicada, afetando o seu rendimento líquido final.',
  },
  {
    name: 'Reveja o detalhe',
    text: 'Veja quanto vai para o IRPF, para a Segurança Social e qual é o seu salário líquido real mensal e anual.',
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

export const content: ToolLocaleContent<IrpfCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    titleVariables: 'Variáveis de Cálculo',
    titleCalculo: 'Cálculo Transparente 2026',
    labelBruto: 'Salário Bruto Anual (€)',
    labelPagas: 'Número de Pagamentos',
    labelComunidad: 'Residência Fiscal',
    labelHijos: 'Filhos (menores de 25)',
    labelDiscapacidad: 'Grau de Deficiência',
    labelUnidad: 'Unidade Familiar ou Coabitação',
    opt12pagas: '12 pagamentos',
    opt14pagas: '14 pagamentos',
    optGen: 'Território Comum (Geral)',
    optMad: 'Madrid',
    optCat: 'Catalunha',
    optAnd: 'Andaluzia',
    optVal: 'C. Valenciana',
    optPV: 'País Basco (Foral)',
    optNav: 'Navarra (Foral)',
    optNinguna: 'Nenhuma',
    opt33: '> 33%',
    opt65: '> 65%',
    optSoltero: 'Solteiro, divorciado ou viúvo',
    optCasadoLow: 'Casado (cônjuge ganha menos de 1.500€/ano)',
    optCasadoHigh: 'Casado (cônjuge tem rendimentos)',
    labelSalarioBruto: 'Salário Bruto',
    labelSS: 'Segurança Social / MEI (-)',
    labelGastos: 'Gastos Dedutíveis (Art. 20)',
    labelNetoAnual: 'SALÁRIO LÍQUIDO ANUAL',
    labelRetencionIRPF: 'Retenção IRPF (%)',
    labelNetoMensual: 'Líquido Mensal Disponível',
    labelMarginal: 'Taxa Marginal Aplicada',
    resultRetention: 'Retenção IRPF (%)',
    resultAnual: '/ ano',
    infoText:
      'Algoritmo AEAT (Imposto Bruto - Mínimo Isento) validado para 2026. Inclui contribuição MEI a 6,47% e reduções de rendimentos do trabalho. jjlmoya.es.',
  },
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Fontes',
  bibliography: [
    {
      name: 'Agência Tributária: IRPF',
      url: 'https://sede.agenciatributaria.gob.es/Sede/irpf.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Calculadora IRPF 2026: Guia completo do novo cenário fiscal',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O Imposto sobre o Rendimento de Pessoas Físicas (IRPF) é o tributo mais relevante no sistema fiscal espanhol, afetando diretamente o salário mensal de milhões de trabalhadores. Em 2026, assistimos a uma consolidação de várias reformas orientadas para a progressividade e adaptação às novas realidades económicas, como o aumento do Mecanismo de Equidade Intergeneracional (MEI) e a deflação de taxas em várias comunidades autónomas.',
    },
    {
      type: 'paragraph',
      html: 'A nossa <strong>calculadora de IRPF para 2026</strong> foi desenhada para oferecer uma visão precisa e atualizada do que realmente chegará à sua conta bancária. Calcular o salário líquido não é simplesmente subtrair uma percentagem fixa; é um processo matemático que tem em conta a sua situação pessoal, dependentes, deficiência e, crucialmente, a sua residência fiscal, uma vez que cada região em Espanha tem autoridade sobre o escalão regional do imposto.',
    },
    {
      type: 'title',
      text: 'O que muda nos recibos de vencimento de 2026?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Para compreender os resultados da sua simulação, é essencial conhecer os pilares dos cálculos das retenções este ano:',
    },
    {
      type: 'list',
      items: [
        '<strong>Impacto do MEI:</strong> O Mecanismo de Equidade Intergeneracional continua a sua trajetória ascendente para garantir as pensões, atingindo os 0,90% em 2026. A maior parte é paga pelo empregador, mas os trabalhadores veem a sua contribuição aumentada para aproximadamente 0,15%, reduzindo ligeiramente o rendimento líquido.',
        '<strong>SMI e Reduções:</strong> O Salário Mínimo Interprofissional atua como barreira. Os baixos rendimentos beneficiam de uma redução por rendimentos do trabalho alargada para garantir que os aumentos do salário bruto não são absorvidos por uma maior retenção fiscal.',
        '<strong>Escalões Regionais:</strong> Regiões como Madrid, Andaluzia ou Múrcia aplicam tipicamente taxas mais baixas do que a média estatal, enquanto a Catalunha ou a Comunidade Valenciana têm tabelas próprias que podem aumentar a retenção em níveis de rendimento mais elevados.',
      ],
    },
    {
      type: 'title',
      text: 'Conceitos-chave para entender o seu salário líquido',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Base Tributável vs. Salário Bruto:</strong> Não paga imposto sobre tudo o que ganha. A base sobre a qual o IRPF se aplica é o resultado de subtrair ao seu salário bruto as contribuições para a Segurança Social (aproximadamente 6,45%) e uma redução geral para despesas de difícil justificação (2.000 € anuais). São depois aplicados os mínimos isentos a este resultado.',
    },
    {
      type: 'title',
      text: 'Conceitos básicos',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Taxa Marginal:</strong> A percentagem de imposto sobre o seu último euro ganho. Crítico para saber quanto um aumento ou bónus lhe custará realmente em impostos.',
        '<strong>Mínimo Vital:</strong> Rendimento que o Estado considera essencial para cobrir as necessidades básicas do contribuinte e da família, e que é, portanto, isento de impostos.',
        '<strong>Retenção na Fonte:</strong> Pagamento por conta que as empresas entregam mensalmente à Agência Tributária em seu nome, com base numa estimativa do que deverá no final do ano.',
        '<strong>Rendimento Líquido:</strong> Salário bruto menos as contribuições sociais e as despesas dedutíveis permitidas pela lei fiscal.',
      ],
    },
    {
      type: 'title',
      text: 'Como otimizar a sua retenção de IRPF',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Muitos trabalhadores perguntam-se se devem pedir ao empregador para reter mais ou menos. A realidade é que a retenção é um "adiantamento" à Agência Tributária. Se lhe for retido menos durante o ano, a declaração de IRS pode apresentar um saldo a pagar; se for retido a mais, receberá um reembolso.',
    },
    {
      type: 'paragraph',
      html: '<strong>O Mito do Salto de Escalão:</strong> Existe o mito de que passar para um escalão superior significa ganhar menos líquido. É falso. O IRPF é progressivo; apenas o rendimento que excede o limite do escalão é tributado à taxa superior. Nunca ganhará menos líquido por receber um aumento bruto, mesmo com uma taxa marginal superior.',
    },
    {
      type: 'paragraph',
      html: '<strong>Dica para famílias:</strong> Certifique-se de que comunicou corretamente o nascimento de filhos ou alterações no grau de deficiência dos membros da família através do modelo 145. Isto ajusta a sua retenção mensal e evita surpresas na entrega do IRS em junho.',
    },
    {
      type: 'title',
      text: 'Diferenças por Comunidade Autónoma',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A descentralização fiscal em Espanha faz com que duas pessoas com o mesmo salário e situação familiar recebam rendimentos líquidos diferentes dependendo de viverem em Toledo ou em Barcelona. As comunidades controlam metade do imposto (escalão regional). Madrid, por exemplo, destaca-se por ter as taxas mais baixas em praticamente todos os níveis de rendimento, enquanto outras regiões aplicam deduções para arrendamento ou educação de filhos não disponíveis a nível nacional. A nossa calculadora contempla estas variações para lhe dar o dado mais realista possível com base na sua localização.',
    },
    {
      type: 'paragraph',
      html: 'Em conclusão, a <strong>simulação de salário líquido 2026</strong> é uma ferramenta de planeamento financeiro básica. Conhecer a sua capacidade de poupança real e entender que parte dos seus rendimentos apoia os serviços públicos permite-lhe tomar decisões informadas sobre investimentos, hipotecas ou mudanças de carreira.',
    },
  ],
};
