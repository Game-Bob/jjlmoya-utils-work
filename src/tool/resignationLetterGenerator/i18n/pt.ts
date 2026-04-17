import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResignationLetterGeneratorUI } from '../ui';

const slug = 'gerador-carta-demissao';
const title = 'Gerador de Carta de Demissão Profissional';
const description =
  'Crie a sua carta de demissão personalizada em segundos. Modelos profissionais prontos a copiar ou descarregar como PDF instantaneamente.';

const faqData = [
  {
    question: 'Com quantos dias de antecedência tenho de avisar?',
    answer:
      'Em Portugal, o prazo de aviso prévio depende da antiguidade. Para contratos sem termo, é de 30 dias se tiver até 2 anos de serviço, e de 60 dias se tiver mais de 2 anos. No entanto, deve sempre consultar o seu contrato de trabalho ou o contrato coletivo aplicável.',
  },
  {
    question: 'Tenho direito a receber o acerto de contas (contas finais) se me demitir?',
    answer:
      'Sim. Tem direito a receber a retribuição correspondente aos dias de férias vencidos e não gozados, o subsídio de férias e de Natal proporcionais ao tempo de serviço no ano da cessação, e o salário dos dias trabalhados no mês de saída.',
  },
  {
    question: 'Terei direito a subsídio de desemprego se me demitir voluntariamente?',
    answer:
      'Em Portugal, a denúncia do contrato pelo trabalhador sem justa causa não dá direito a subsídio de desemprego, uma vez que a lei considera que a situação de desemprego não foi involuntária.',
  },
  {
    question: 'O que acontece se eu não respeitar o aviso prévio?',
    answer:
      'Se não cumprir o aviso prévio, a empresa tem o direito de lhe descontar na compensação final o valor correspondente ao salário do período de aviso não cumprido.',
  },
  {
    question: 'Posso retirar a minha carta de demissão depois de entregue?',
    answer:
      'Em princípio, a demissão só pode ser revogada se a empresa aceitar. Idealmente, deve estar 100% certo antes de a submeter.',
  },
  {
    question: 'A carta de demissão tem de ser manuscrita?',
    answer:
      'Não é obrigatório que seja manuscrita. Uma carta impressa é perfeitamente válida. O importante é que o documento esteja assinado à mão (ou com assinatura digital certificada).',
  },
];

const howToData = [
  {
    name: 'Preencha os seus dados pessoais',
    text: 'Introduza o seu nome completo, o nome do seu gestor ou contacto de RH e o nome da empresa.',
  },
  {
    name: 'Defina o seu último dia de trabalho',
    text: 'Selecione a data de saída, garantindo que contabiliza o período de aviso prévio do seu contrato.',
  },
  {
    name: 'Escolha o tipo de motivo',
    text: 'Escolha a abordagem que melhor se adapta à sua situação para personalizar o texto da carta.',
  },
  {
    name: 'Copie ou descarregue a carta',
    text: 'Clique no botão para copiar o texto para a área de transferência ou descarregue diretamente em formato PDF.',
  },
];

const bibliography = [
  {
    name: 'Autoridade para as Condições do Trabalho (ACT)',
    url: 'https://bit.ly/act-cessacao',
  },
  {
    name: 'Código do Trabalho - Diário da República',
    url: 'https://dre.pt/dre/legislacao-consolidada/lei/2009-34546475',
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

export const content: ToolLocaleContent<ResignationLetterGeneratorUI> = {
  slug,
  title,
  description,
  ui: {
    labelUserName: 'O seu nome completo',
    labelManagerName: 'Nome do Gestor ou RH',
    labelManagerGender: 'Saudação',
    labelCompanyName: 'Nome da empresa',
    labelLastDay: 'O seu último dia (data de saída)',
    labelReasonType: 'Tipo de motivo',
    labelCity: 'Cidade',
    optGenderNeutral: 'Exmo(a). Sr(a). (Neutro)',
    optGenderM: 'Exmo. Sr. (Masculino)',
    optGenderF: 'Exma. Sra. (Feminino)',
    optReasonStandard: 'Padrão (Profissional e cordial)',
    optReasonOpportunity: 'Nova oportunidade profissional',
    optReasonPersonal: 'Motivos pessoais',
    optReasonEducation: 'Crescimento académico / Estudos',
    optReasonGrowth: 'Falta de crescimento interno',
    optReasonDirect: 'Direto e breve (Sem explicação)',
    btnCopy: 'Copiar Carta',
    btnDownload: 'Descarregar PDF',
    copyFeedback: 'Copiado para a área de transferência',
    defaultUserName: 'João Silva',
    defaultManagerName: 'Ana Rodrigues',
    defaultCompanyName: 'Exemplo S.A.',
    defaultCity: 'Lisboa',
    dateLocale: 'pt-PT',
    datePrefix: '',
    managerPrefix: 'A/C:',
    managerFallback: 'Departamento de Recursos Humanos',
    companyFallback: 'Nome da Empresa',
    salutationNeutral: 'Exmo(a). Sr(a).',
    salutationM: 'Exmo. Sr.',
    salutationF: 'Exma. Sra.',
    salutationFallback: 'Responsável',
    signatureFallback: 'Assinatura do Colaborador',
    thanksParagraph:
      'Gostaria de expressar a minha sincera gratidão pelas oportunidades de crescimento profissional e pessoal que me foram proporcionadas durante o meu tempo na empresa.',
    transitionParagraph:
      'Estou totalmente empenhado em apoiar uma transição suave e disponível para ajudar na passagem das minhas responsabilidades e tarefas pendentes.',
    closingWord: 'Com os meus melhores cumprimentos,',
    reasonStandard:
      'Venho por este meio comunicar formalmente a minha demissão do cargo que ocupo. O meu último dia de trabalho será [DATE], cumprindo o prazo de aviso prévio legalmente estabelecido.',
    reasonOpportunity:
      'Escrevo para informar a minha decisão de cessar o contrato de trabalho por ter aceitado um novo desafio profissional. A minha data de saída será o dia [DATE].',
    reasonPersonal:
      'Devido a circunstâncias pessoais que requerem a minha atenção imediata, vejo-me na necessidade de rescindir o meu contrato de trabalho a partir de [DATE].',
    reasonEducation:
      'Decidi prosseguir estudos académicos a tempo inteiro, pelo que apresento a minha demissão voluntária. O meu último dia ao serviço será [DATE].',
    reasonGrowth:
      'Após reflexão, decidi redirecionar a minha carreira em busca de um ambiente que me permita desenvolver competências noutras áreas. A minha saída efetiva será a [DATE].',
    reasonDirect:
      'Venho por este meio informar a minha vontade de cessar o meu contrato de trabalho. O meu último dia será [DATE].',
  },
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Fontes',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Como escrever uma carta de demissão profissional',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Decidir deixar um emprego é um passo importante. <strong>Entregar uma carta de demissão</strong> não é apenas uma formalidade; é a última impressão que deixa e um documento com implicações legais.',
    },
    {
      type: 'tip',
      html: '<strong>Dica profissional:</strong> Mesmo que tenha uma boa relação com o seu gestor, a demissão <strong>deve ser sempre entregue por escrito</strong>.',
    },
    {
      type: 'code',
      code: '[Cidade, Data]\n\nA/C: [Nome do Gestor]\n[Nome da Empresa]\n\nAssunto: Rescisão do contrato de trabalho\n\nExmo(a). Sr(a). [Nome],\nComunico a minha demissão. O meu último dia será [Data].\n\nAtenciosamente,\n[Assinatura]',
    },
  ],
};
