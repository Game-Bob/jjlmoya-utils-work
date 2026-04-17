import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AutonomosCalculatorUI } from '../ui';

const slug = 'calculadora-quota-trabalhador-independente-espanha';
const title = 'Calculadora de Quota de Autônomo 2026: Sistema Real RETA Espanha';
const description =
  'Simulador gratuito para contribuições de trabalhadores independentes em Espanha 2026. Calcule o seu rendimento líquido real, escalões de contribuição e quota mensal com o novo MEI de 0,9%.';

const faqData = [
  {
    question: 'Como funciona o novo sistema de contribuição para 2026?',
    answer:
      'O sistema baseia-se em 15 escalões de rendimento líquido real. Deve declarar uma previsão dos seus lucros (receitas menos despesas) e pagar a contribuição associada a esse escalão mensal.',
  },
  {
    question: 'O que é o MEI e como afeta a minha quota de autônomo?',
    answer:
      'O Mecanismo de Equidade Intergeracional (MEI) é um imposto destinado às pensões. Em 2026 sobe para 0,9%, aumentando ligeiramente a contribuição em relação a 2025 para todos os trabalhadores por conta própria.',
  },
  {
    question: 'Quantas vezes posso alterar a minha base de contribuição?',
    answer:
      'Pode alterar a sua base de contribuição, e consequentemente a sua quota de autônomo, até 6 vezes por ano para a adaptar à realidade dos seus lucros mensais.',
  },
  {
    question: 'O que acontece se o meu rendimento real for diferente da minha previsão?',
    answer:
      'A Segurança Social efetuará uma regularização anual cruzando dados com o Fisco. Se pagou a menos, reclamarão a diferença; se pagou a mais, o excesso será devolvido automaticamente.',
  },
  {
    question: 'A tarifa fixa de 80 euros ainda existe?',
    answer:
      'Sim, a quota reduzida de 80 € mantém-se para novos autônomos durante os primeiros 12 meses de atividade, prorrogável por mais 12 se o rendimento for inferior ao salário mínimo.',
  },
];

const howToData = [
  {
    name: 'Introduza receitas e despesas',
    text: 'Introduza a faturação mensal prevista e as despesas dedutíveis da sua atividade profissional.',
  },
  {
    name: 'Defina o seu perfil de trabalho',
    text: 'Selecione se é um trabalhador por conta própria individual (dedução de 7%) ou um sócio-gerente (dedução de 3%).',
  },
  {
    name: 'Visualize o seu escalão real',
    text: 'O simulador calculará o seu rendimento líquido e mostrará o escalão de contribuição aplicável para 2026.',
  },
  {
    name: 'Verifique o impacto do MEI',
    text: 'Verá o detalhe da quota final incluindo contingências e o novo fator de equidade intergeracional.',
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

export const content: ToolLocaleContent<AutonomosCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelIncome: 'Rendimento Bruto Mensal',
    labelExpenses: 'Despesas Mensais Dedutíveis',
    labelType: 'Perfil do Trabalhador',
    labelFlatRate: 'Tarifa Fixa (Nova Inscrição)',
    optStandard: 'Autônomo Individual (dedução 7%)',
    optSocietario: 'Sócio-Gerente (dedução 3%)',
    optNoFlatRate: 'Não aplicado (Quota Real)',
    optFlatRate: 'Sim, primeiro ano (80 €/mês)',
    labelBracket: 'O seu Escalão de Rendimento Líquido',
    labelNetDisplay: 'Rendimento Líquido Mensal',
    labelCuota: 'Contribuição Segurança Social',
    labelBase: 'Base de Contribuição',
    labelNetAfter: 'Líquido Real (Após Quota)',
    labelProjection: 'PROJEÇÃO 2026 (MEI 0,9%)',
    infoText:
      'Sistema RETA 2026: O cálculo inclui o rendimento líquido mensal com a dedução de despesas gerais (7% ou 3%). A quota apresentada inclui contingências comuns, contingências profissionais, cessação de atividade, formação e o Mecanismo de Equidade Intergeracional (MEI) atualizado para 0,9% para 2026.',
  },
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Fontes',
  bibliography: [
    {
      name: 'Segurança Social: Novo sistema de contribuição',
      url: 'https://portal.seg-social.gob.es/wps/portal/importass/importass/Colectivos/Trabajo+Autonomo/guia',
    },
    {
      name: 'Fisco: Rendimentos de atividades económicas',
      url: 'https://sede.agenciatributaria.gob.es/Sede/irpf/empresarios-individuales-profesionales/rendimientos-actividades-economicas.html',
    },
    {
      name: 'BOE: Real Decreto-Lei 13/2022 sobre reforma RETA',
      url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2022-12482',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Calculadora de Quota de Autônomo 2026: Guia do Novo Sistema',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ser trabalhador por conta própria em Espanha significa enfrentar uma das tarefas mais dinâmicas e por vezes confusas: as <strong>contribuições para a Segurança Social</strong>. Desde que entrou em vigor o novo sistema baseado no <strong>rendimento líquido real</strong>, o conceito de "quota fixa" desapareceu, sendo substituído por um modelo progressivo.',
    },
    {
      type: 'title',
      text: 'Como Funciona o Novo Sistema de Contribuição RETA?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Até 2023, cada autônomo podia escolher livremente a sua base de contribuição, o que levava a maioria a contribuir pelo mínimo. A reforma visa garantir que quem ganha mais contribua mais, enquanto quem tem rendimentos mais baixos vê reduzida a sua carga mensal.',
    },
    {
      type: 'paragraph',
      html: 'O sistema baseia-se em <strong>escalões de rendimento líquido</strong>. Isto significa que a sua quota não depende do seu rendimento bruto (faturação), mas do que realmente lhe sobra "limpo" após deduzir as despesas profissionais e aplicar uma dedução adicional por despesas gerais.',
    },
    {
      type: 'title',
      text: 'Alterações Chave para 2026: O Fator MEI',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O ano de 2026 marca a consolidação da segunda fase da reforma. Uma das atualizações mais críticas é o aumento do <strong>Mecanismo de Equidade Intergeracional (MEI)</strong>.',
    },
    {
      type: 'list',
      items: [
        '<strong>Aumento do MEI:</strong> Para 2026, o MEI sobe para 0,9%, representando um ligeiro aumento da contribuição em relação a 2025 para todos os escalões.',
        '<strong>Revisão de Escalões:</strong> Os escalões de rendimento líquido são mantidos, mas as contribuições mínimas e máximas de cada faixa são ajustadas para convergir com o sistema de contribuição por rendimento real.',
        '<strong>Regularização Anual:</strong> No final do ano, a Segurança Social cruzará dados com o Fisco. Se pagou a mais ou a menos com base nos lucros reais, será emitido um reembolso ou uma reclamação de pagamento.',
      ],
    },
    {
      type: 'title',
      text: 'Como Calcular o seu Rendimento Líquido Mensal',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Para utilizar a nossa calculadora com precisão, é fundamental compreender que valor deve introduzir. A fórmula aplicada pela Segurança Social é:',
    },
    {
      type: 'code',
      code: 'Rendimento Líquido = (Rendimento Bruto - Despesas Dedutíveis) / (1 - Dedução de Despesas Gerais)',
    },
    {
      type: 'paragraph',
      html: 'A <strong>Dedução de Despesas Gerais</strong> é de <strong>7%</strong> para autônomos individuais e <strong>3%</strong> para sócios-gerentes.',
    },
    {
      type: 'card',
      title: 'Exemplo de cálculo 2026',
      html: '<ul><li>Faturação: 4.000 € / Despesas: 1.000 €</li><li>Margem de lucro: 3.000 €</li><li>Dedução geral (7%): 210 €</li><li>Rendimento líquido computável: 2.790 €</li><li><strong>Quota estimada 2026:</strong> Escalão 8, aprox. 350 € + ajuste MEI.</li></ul>',
    },
    {
      type: 'title',
      text: 'Vantagens do Sistema Progressivo',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Melhor proteção social:</strong> Ao contribuir sobre bases mais realistas, as prestações por incapacidade temporária, maternidade, paternidade e especialmente a reforma serão significativamente mais elevadas.',
        '<strong>Flexibilidade total:</strong> Pode alterar a sua base de contribuição até 6 vezes por ano. Se prever uma descida drástica de rendimentos, pode mudar para um escalão inferior para evitar tensões de tesouraria.',
        '<strong>Tarifa Fixa 80 €:</strong> Mantém-se para novos empreendedores no primeiro ano, permitindo um início com custos fixos controlados.',
      ],
    },
    {
      type: 'title',
      text: 'Sócio-Gerente vs Autônomo Individual',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O <strong>sócio-gerente</strong> (com uma sociedade SL) tem uma base de contribuição mínima ligeiramente superior e a dedução por despesas gerais é inferior (3%). Isto deve-se ao facto de a lei considerar que o controlo dos sócios lhes confere uma posição diferente relativamente aos riscos de mercado.',
    },
    {
      type: 'tip',
      html: '<strong>Dica Pro:</strong> Se o seu rendimento líquido variar muito de mês para mês, tente posicionar-se num escalão intermédio prudente. A regularização posterior é inevitável, mas desta forma evitará pagamentos inesperados de milhares de euros quando chegar a "fatura" da Segurança Social no final do ano.',
    },
    {
      type: 'title',
      text: 'O que inclui a sua quota mensal?',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Contingências Comuns (28,30%):</strong> Cobre ausências por doença comum ou acidentes não laborais.',
        '<strong>Contingências Profissionais (1,30%):</strong> Acidentes de trabalho e doenças profissionais.',
        '<strong>Cessação de Atividade (0,90%):</strong> O "subsídio de desemprego" dos autônomos.',
        '<strong>Formação Profissional (0,10%):</strong> Acesso a cursos e formação.',
        '<strong>MEI (0,90% em 2026):</strong> Fundo para garantir a sustentabilidade das pensões.',
      ],
    },
    {
      type: 'title',
      text: 'O Processo de Regularização (Fisco e Segurança Social)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Todos os anos, após a campanha da declaração de rendimentos, o Fisco comunica o seu rendimento líquido real à Segurança Social. Se escolheu um escalão inferior ao exigido pelo seu rendimento real, receberá uma notificação de pagamento para a diferença. Pelo contrário, se contribuiu acima dos seus lucros, a Segurança Social devolverá automaticamente o excesso sem que tenha de o solicitar explicitamente.',
    },
    {
      type: 'title',
      text: 'Conclusões e Recomendações',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A <strong>calculadora de autônomos 2026</strong> é uma ferramenta indispensável para o planeamento fiscal de qualquer freelancer. Recomendamos utilizar este simulador sempre que fechar um contrato importante ou alterar os seus custos fixos para garantir que a sua quota de autônomo está sempre alinhada com a realidade do seu negócio.',
    },
  ],
};
