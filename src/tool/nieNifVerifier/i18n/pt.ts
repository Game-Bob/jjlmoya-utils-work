import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NieNifVerifierUI } from '../ui';

const slug = 'verificador-nie-nif-espanha';
const title = 'Verificador NIE/NIF/CIF Espanha: Validador de Identidade Fiscal Espanhola';
const description =
  'Ferramenta gratuita para verificar a validade do NIF (DNI espanhol), NIE (estrangeiros) e CIF (empresas) em Espanha. Verifica o dígito de controlo e o formato oficial.';

const faqData = [
  {
    question: 'É seguro introduzir o meu NIF ou NIE nesta ferramenta?',
    answer:
      'Sim, é completamente seguro. A validação é realizada inteiramente no seu navegador através de JavaScript. Os seus dados nunca são enviados para qualquer servidor nem armazenados em qualquer base de dados.',
  },
  {
    question: 'Qual é a diferença entre NIF e CIF?',
    answer:
      'NIF (Número de Identificación Fiscal) é o termo atual para todos os IDs fiscais. No entanto, CIF (Código de Identificación Fiscal) ainda é comummente utilizado para referir o NIF de pessoas coletivas (empresas e organizações).',
  },
  {
    question: 'Como posso saber se um NIF é válido se não tiver a letra?',
    answer:
      'Introduza os 8 dígitos no nosso verificador e verifique se a letra coincide. O algoritmo calcula a letra exata dividindo o número por 23.',
  },
  {
    question: 'Esta ferramenta funciona para números NIE que começam com Y ou Z?',
    answer:
      'Sim, o nosso verificador suporta todos os formatos NIE: os mais antigos que começam com X e os mais recentes que começam com Y ou Z, aplicando a conversão numérica oficial.',
  },
  {
    question: 'Valida se o número existe realmente na autoridade tributária?',
    answer:
      'Não. Esta ferramenta realiza uma validação algorítmica e matemática. Confirma que o número tem uma estrutura legal e o dígito de controlo correto, mas não consulta o censo real da Agencia Tributaria.',
  },
];

const howToData = [
  {
    name: 'Encontre o identificador',
    text: 'Procure o código alfanumérico no documento (DNI, Cartão de Residência ou Cartão de Identificação Fiscal).',
  },
  {
    name: 'Introduza o código',
    text: 'Digite o NIF, NIE ou CIF no campo de texto. Não se preocupe com espaços ou hífenes.',
  },
  {
    name: 'Verifique o resultado',
    text: 'A ferramenta analisará instantaneamente se a estrutura é válida e se o caráter de controlo coincide.',
  },
  {
    name: 'Copie o resultado',
    text: 'Se o código for válido, pode copiá-lo diretamente para colar na sua fatura, contrato ou formulário administrativo.',
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

export const content: ToolLocaleContent<NieNifVerifierUI> = {
  slug,
  title,
  description,
  ui: {
    labelInput: 'Introduza o identificador fiscal espanhol',
    placeholder: '45938210Y',
    typeNIF: 'NIF / DNI',
    typeNIE: 'NIE',
    typeCIF: 'CIF',
    msgValidSuffix: 'Válido',
    msgInvalidControl: 'Dígito de controlo incorreto',
    msgInvalidNIEControl: 'Erro no caráter de controlo',
    msgInvalidCIF: 'Combinação incorreta',
    msgIncomplete: 'Incompleto',
  },
  faqTitle: 'Perguntas Frequentes',
  faq: faqData: 'Fontes',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'A Importância de Verificar o NIF, NIE e CIF em Espanha',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'No ecossistema administrativo e empresarial de Espanha, a identificação fiscal é a base de todas as transações, contratos e assuntos públicos. Quer seja um freelancer a emitir faturas, uma empresa a gerir fornecedores ou um particular a fazer uma compra, um <strong>verificador de NIF, NIE e CIF</strong> fiável é uma ferramenta indispensável para evitar erros administrativos e fraudes potenciais.',
    },
    {
      type: 'title',
      text: 'O que são NIF, NIE e CIF? Diferenças Principais',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>NIF (Número de Identificación Fiscal):</strong> O termo genérico para identificação fiscal em Espanha. Para nacionais espanhóis, o NIF coincide com o número do DNI seguido de uma letra de controlo (8 dígitos + 1 letra).',
        '<strong>NIE (Número de Identidad de Extranjero):</strong> O código de identificação para estrangeiros com atividade fiscal em Espanha. Começa por X, Y ou Z, seguido de 7 dígitos e uma letra de controlo.',
        '<strong>CIF (Código de Identificación Fiscal):</strong> O nome popular para o NIF de pessoas coletivas (empresas, associações). Uma letra indicando o tipo de organização + 7 dígitos + dígito ou letra de controlo.',
      ],
    },
    {
      type: 'title',
      text: 'Como funciona o Algoritmo de Validação',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Para o NIF/DNI, a letra final é obtida dividindo a parte numérica por 23 (módulo 23) e mapeando o resto para a sequência <strong>TRWAGMYFPDXBNJZSQVHLCKE</strong>. Para o CIF, somam-se os pares e o dobro dos dígitos em posições ímpares para verificar o caráter de controlo. Todo o cálculo é executado no navegador em milissegundos.',
    },
    {
      type: 'title',
      text: 'Dicas para uma Verificação Correta',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Se o verificador indicar erro, verifique se confundiu um 0 (zero) com um O (letra) — um erro muito comum em números NIE.',
        'No caso do CIF, inclua sempre a letra inicial que identifica o tipo de entidade (A = S.A., B = S.L., etc.).',
        'Esta ferramenta verifica a validade matemática, não a atividade no censo da AEAT.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Privacidade garantida:</strong> A validação corre inteiramente no seu navegador. Os números introduzidos nunca são enviados para um servidor.',
    },
  ],
};
