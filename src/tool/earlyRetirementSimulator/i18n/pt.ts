import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EarlyRetirementSimulatorUI } from '../ui';

const slug = 'simulador-reforma-antecipada-espanha';
const title = 'Simulador de Reforma Antecipada Espanha: Calcule a sua Pensão';
const description =
  'Calcule gratuitamente a sua idade de reforma, coeficientes de redução e pensão estimada. Simulador atualizado para reforma antecipada voluntária e involuntária em Espanha.';

const faqData = [
  {
    question: 'Qual é a idade mínima para a reforma antecipada em Espanha?',
    answer:
      'Para a reforma antecipada voluntária, a idade mínima é de 2 anos antes da idade legal (geralmente 63 ou 65 anos, dependendo das contribuições). Para a reforma involuntária, é até 4 anos antes (61 ou 63 anos).',
  },
  {
    question: 'De quantos anos de contribuição necessito?',
    answer:
      'Para a reforma antecipada voluntária, são necessários pelo menos 35 anos de contribuições efetivas. Para a reforma involuntária ou forçada, o mínimo é de 33 anos.',
  },
  {
    question: 'Quanto perderei ao reformar-me antecipadamente?',
    answer:
      'A redução depende dos meses de antecipação e do total de anos contribuídos. Os cortes variam entre 2,81% para um único mês até um máximo de cerca de 21% para a antecipação voluntária completa de 2 anos.',
  },
  {
    question: 'O tempo de desemprego conta para a reforma?',
    answer:
      'Sim, o tempo passado a receber subsídio de desemprego (paro) conta para a reforma, uma vez que o SEPE faz as contribuições correspondentes para a Segurança Social.',
  },
];

const howToData = [
  {
    name: 'Introduza o seu ano de nascimento',
    text: 'Isto determina a sua idade de reforma ordinária legal de acordo com os regulamentos em vigor em 2026.',
  },
  {
    name: 'Estime os seus anos de contribuições',
    text: 'Inclua o tempo de emprego, trabalho independente e períodos de desemprego contributivo.',
  },
  {
    name: 'Escolha o tipo de reforma',
    text: 'Indique se a reforma é voluntária ou forçada para aplicar os coeficientes corretos.',
  },
  {
    name: 'Reveja a sua pensão estimada',
    text: 'Veja a redução aplicada e a data exata em que poderá deixar de trabalhar.',
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

export const content: ToolLocaleContent<EarlyRetirementSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelBirthYear: 'Ano de Nascimento',
    labelContributions: 'Anos Contribuídos',
    labelBasePension: 'Base Mensal Bruta',
    labelRetirementAge: 'Idade de Reforma',
    labelExpectedDate: 'Data Prevista',
    labelEstimatedPension: 'Pensão Estimada',
    labelPermanentReduction: 'Redução Permanente',
    labelYears: 'ANOS',
    btnLegalTitle: 'Padrão',
    btnLegalDesc: 'Idade de reforma legal. Sem redução. 100% da base.',
    btnVoluntaryTitle: 'Antecipada Voluntária',
    btnVoluntaryDesc: 'Reforma por escolha pessoal. Redução mensal aplicada.',
    btnInvoluntaryTitle: 'Involuntária / ERE',
    btnInvoluntaryDesc: 'Cessação forçada. Coeficientes mais favoráveis.',
    defaultBirthYear: '1975',
    defaultContributions: '30',
    defaultBasePension: '2500',
    adviceDefault: 'Mova o controlo deslizante para projetar a sua cronologia de reforma.',
    adviceDefaultWithParams: 'Mova o controlo deslizante para projetar a sua cronologia de reforma.',
    adviceDelay:
      'Se adiar a sua reforma para a idade de <strong>[AGE]</strong>, ganharia aproximadamente <strong>[GAIN] € extra</strong> por mês.',
    adviceBonus: 'Está a acumular um bónus por atraso. A sua pensão excederá 100% da base.',
    adviceOptimal: 'Atingiu a idade padrão ideal com 100% dos seus direitos.',
  },
  faqTitle: 'Perguntas Frequentes',
  faq: faqData: 'Fontes',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Simulador de Reforma Antecipada para Espanha: Guia 2026',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A <strong>reforma antecipada</strong> é uma das maiores preocupações financeiras dos trabalhadores em Espanha. Compreender quando pode deixar de trabalhar e, sobretudo, quanto dinheiro perderá através dos coeficientes de redução é vital para um planeamento de vida saudável.',
    },
    {
      type: 'list',
      items: [
        '<strong>Idade legal padrão:</strong> 67 anos (ou 65 anos com contribuições suficientes).',
        '<strong>Reforma Antecipada Voluntária:</strong> Até 2 anos antes do limite legal.',
        '<strong>Reforma Antecipada Involuntária:</strong> Até 4 anos antes (devido a despedimento ou outras causas).',
        '<strong>Coeficientes de Redução:</strong> Cortes mensais permanentes na pensão.',
        '<strong>Requisito de contribuição:</strong> Mínimo 35 anos para a voluntária, 33 para a forçada.',
      ],
    },
    {
      type: 'title',
      text: 'Com que idade me posso reformar legalmente em Espanha?',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Via dos 65 anos:</strong> Se tiver contribuído mais de 38 anos e 6 meses, pode reformar-se aos 65 anos com 100% da sua base.',
        '<strong>Via dos 67 anos:</strong> Se as suas contribuições estiverem abaixo desse limite, a sua idade padrão é 67 anos.',
        '<strong>Serviço militar:</strong> O serviço militar obrigatório ou serviço social pode somar até 1 ano de contribuições.',
      ],
    },
    {
      type: 'title',
      text: 'Reforma Antecipada Voluntária',
      level: 2,
    },
    {
      type: 'card',
      title: 'Requisitos para a Reforma Antecipada Voluntária',
      html: '<ul><li>Estar numa idade que seja dois anos inferior à idade legal padrão.</li><li>Ter um período mínimo de contribuição efetiva de 35 anos.</li><li>A pensão a receber deve exceder a pensão mínima.</li></ul>',
    },
    {
      type: 'title',
      text: 'Coeficientes de Redução: O Custo de Reformar-se Antecipadamente',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Menos de 38,5 anos contribuídos:</strong> Redução máxima de 21% (2 anos de antecipação).',
        '<strong>Entre 38,5 e 41,5 anos:</strong> Redução máxima de aproximadamente 19%.',
        '<strong>Entre 41,5 e 44,5 anos:</strong> Redução máxima de aproximadamente 17%.',
        '<strong>Mais de 44,5 anos:</strong> Redução máxima de aproximadamente 15%.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Dica de ouro:</strong> Adiar a sua reforma antecipada por apenas um mês pode fazer uma diferença significativa no coeficiente de redução. Calcule sempre o benefício de esperar mais uns dias se estiver perto do limite de um escalão mensal.',
    },
    {
      type: 'title',
      text: 'Reforma Antecipada Involuntária ou Forçada',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Antecipação máxima:</strong> 4 anos (48 meses) antes da idade padrão.',
        '<strong>Contribuições exigidas:</strong> 33 anos.',
        '<strong>Condição:</strong> Deve estar inscrito como candidato a emprego há pelo menos 6 meses antes.',
        '<strong>Coeficientes:</strong> Mais favoráveis do que a voluntária, mas o impacto de 4 anos é ainda severo.',
      ],
    },
    {
      type: 'card',
      title: 'Exemplo prático',
      html: '<p>Um trabalhador com uma base de 2.000 € que se reforma voluntariamente 2 anos mais cedo com 36 anos de contribuições. A sua redução será de aproximadamente 21%, deixando a sua pensão em cerca de <strong>1.580 € por mês</strong> para o resto da vida.</p>',
    },
  ],
};
