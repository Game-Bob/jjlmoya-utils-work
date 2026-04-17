import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MeetingCostCalculatorUI } from '../ui';

const slug = 'calculadora-custo-reuniao';
const title = 'Calculadora de Custo de Reunião Ticker em Tempo Real';
const description =
  'Veja em tempo real quanto está a custar a sua reunião. Introduza o número de participantes e o salário médio para ver o valor aumentar a cada segundo.';

const faqData = [
  {
    question: 'Porque é útil medir o custo de uma reunião?',
    answer:
      'Atribuir um valor monetário ao tempo da reunião cria uma consciência produtiva. Ajuda a reduzir reuniões desnecessárias, incentiva a pontualidade e garante que os tópicos discutidos justificam o investimento económico da equipa.',
  },
  {
    question: 'Como é calculado o custo em tempo real?',
    answer:
      'O sistema utiliza o salário anual ou horário estimado de cada participante e calcula uma taxa de gasto por segundo. O ticker atualiza-se a cada frame de animação para mostrar o custo acumulado em tempo real.',
  },
  {
    question: 'Que custos indiretos não são incluídos nesta ferramenta?',
    answer:
      'Esta calculadora foca-se nos custos diretos de salário. Não inclui o custo de oportunidade (o que os colaboradores poderiam ter produzido em alternativa), ou custos fixos como aluguer de escritório, licenças de software ou utilidades.',
  },
  {
    question: 'Como posso reduzir o custo das minhas reuniões?',
    answer:
      'Defina uma agenda clara, limite os participantes apenas às pessoas essenciais, estabeleça um limite de tempo rigoroso e considere se uma mensagem assíncrona ou e-mail poderia obter o mesmo resultado.',
  },
];

const howToData = [
  {
    name: 'Introduza o número de participantes',
    text: 'Indique quantas pessoas estão a participar atualmente na reunião.',
  },
  {
    name: 'Defina o salário médio',
    text: 'Introduza uma estimativa do salário anual bruto médio ou da taxa horária dos participantes para um cálculo preciso.',
  },
  {
    name: 'Inicie o ticker',
    text: 'Pressione o botão Iniciar assim que a reunião começar e observe o custo acumular-se em tempo real.',
  },
  {
    name: 'Pare e reflita',
    text: 'Quando a reunião terminar, pause o ticker. Reveja o custo total e avalie se os resultados alcançados valeram o investimento.',
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

export const content: ToolLocaleContent<MeetingCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelAccumulated: 'Custo Acumulado',
    labelAttendees: 'Participantes',
    labelSalary: 'Salário Médio',
    optAnnual: 'Bruto Anual',
    optHourly: 'Taxa Horária',
    btnStart: 'Iniciar Reunião',
    btnPause: 'Pausar',
    btnResume: 'Retomar',
    btnReset: 'Reset',
    currencySymbol: '€',
    defaultSalary: '40000',
    numberLocale: 'pt-PT',
  },
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Fontes',
  bibliography: [
    { name: 'Stop the Meeting Madness (Harvard Business Review)', url: 'https://hbr.org/2017/07/stop-the-meeting-madness' },
    { name: 'Time Wasting at Work (Atlassian)', url: 'https://www.atlassian.com/time-wasting-at-work-infographic' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Porque visualizar o custo de uma reunião?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O tempo é o recurso mais caro e menos renovável em qualquer organização. Esta ferramenta não foi desenhada para desencorajar a colaboração — foi desenhada para fomentar a <strong>consciência produtiva</strong>. Quando observamos o dinheiro a "arder" em tempo real, tornamo-nos mais pontuais, mais concisos e mais intencionais sobre o que incluímos na agenda.',
    },
    {
      type: 'card',
      title: 'A Matemática dos Custos Ocultos',
      html: '<p>Calculamos o custo baseados no salário anual bruto ou taxa horária. Para salários anuais, utilizamos um padrão de <strong>1.750 horas de trabalho por ano</strong> (contabilizando férias e feriados) para converter o salário numa taxa horária.</p><p>A fórmula é:<br><code>(Taxa Horária × Número de Participantes) / 3600</code><br>Isto produz o custo exato por segundo mostrado no ticker.</p>',
    },
    {
      type: 'code',
      code: 'Salário Anual: 85.000 €\nTaxa Horária: 85.000 € / 1.750 = 48,57 €/h\nTaxa de Gasto (4 pessoas): (48,57 € × 4) / 3600 = 0,054 €/seg\nCusto de uma reunião de 1 hora: 194,29 €',
    },
    {
      type: 'title',
      text: 'Dicas para Reuniões mais Eficientes',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>A Regra das 2 Pizzas:</strong> Popularizada por Jeff Bezos — se duas pizzas não conseguem alimentar todos na reunião, há demasiadas pessoas na sala.',
        '<strong>Sem Agenda, Sem Reunião:</strong> Nunca aceite uma reunião sem uma agenda clara e objetivos definidos.',
        '<strong>Reuniões Stand-up:</strong> Mantenha sincronizações diárias de pé. O desconforto físico promove a brevidade.',
        '<strong>Lei de Parkinson:</strong> O trabalho expande-se até preencher o tempo disponível. Defina blocos de 25 ou 50 minutos.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Use o ticker ao vivo:</strong> Partilhe o seu ecrã com o ticker durante as reuniões de equipa. O valor visível cria um incentivo natural para manter o foco no tópico.',
    },
  ],
};
