import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InvoiceGeneratorUI } from '../ui';

const slug = 'gerador-faturas';
const title = 'Gerador de Faturas Grátis para Freelancers e Pequenas Empresas';
const description =
  'Crie faturas profissionais online gratuitamente. Preencha os seus dados, adicione serviços, defina impostos e retenções, e gere um PDF pronto a imprimir. Sem necessidade de conta.';

const faqData = [
  {
    question: 'Que informações deve incluir uma fatura profissional?',
    answer:
      'Uma fatura profissional deve incluir um número de fatura único, a data da fatura, o nome completo da sua empresa e informações de contacto (incluindo NIF), as informações da empresa do cliente, uma lista detalhada de serviços ou produtos com quantidades e preços unitários, os impostos aplicáveis e termos de pagamento claros.',
  },
  {
    question: 'Os freelancers precisam de cobrar IVA sobre os serviços?',
    answer:
      'Depende do seu país e do tipo de serviço. Em Portugal, por exemplo, os freelancers podem estar isentos de IVA ao abrigo do artigo 53.º se não ultrapassarem um determinado volume de negócios. Caso contrário, devem cobrar a taxa em vigor.',
  },
  {
    question: 'O que é a retenção na fonte e quando se aplica?',
    answer:
      'A retenção na fonte é um adiantamento de imposto que o cliente retém do seu pagamento para entregar ao Estado em seu nome. Aplica-se frequentemente a profissionais que prestam serviços a entidades com contabilidade organizada.',
  },
  {
    question: 'Devo utilizar o meu NIF pessoal ou um NIF de empresa nas faturas?',
    answer:
      'Se atua como trabalhador independente (em nome individual), deve utilizar o seu NIF pessoal associado à sua atividade profissional. Para sociedades, utiliza-se o NIPC (Número de Identificação de Pessoa Coletiva).',
  },
];

const howToData = [
  {
    name: 'Introduza as informações da sua empresa',
    text: 'Clique em "A Minha Empresa" e substitua pelo nome real, NIF, morada e e-mail de contacto.',
  },
  {
    name: 'Preencha os dados do cliente',
    text: 'Em "Faturar a:", clique em cada campo para introduzir o nome da empresa cliente, NIF, morada e e-mail.',
  },
  {
    name: 'Adicione serviços e defina preços',
    text: 'Descreva cada serviço na tabela, defina a quantidade e o preço unitário. Clique em "Adicionar Linha" para incluir mais itens.',
  },
  {
    name: 'Reveja os totais e gere o PDF',
    text: 'Verifique se todos os valores estão corretos, defina a taxa de imposto se aplicável e clique em "Gerar PDF" para imprimir ou guardar.',
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

export const content: ToolLocaleContent<InvoiceGeneratorUI> = {
  slug,
  title,
  description,
  ui: {
    labelEditor: 'Editor Interativo',
    labelEditHint: 'Clique em qualquer texto no documento para editá-lo diretamente.',
    btnGenerate: 'Gerar PDF',
    labelFrom: 'De:',
    labelTo: 'Faturar a:',
    labelDesc: 'Descrição do Serviço ou Produto',
    labelQty: 'Qtd.',
    labelPrice: 'Preço',
    labelAmount: 'Valor',
    btnAddRow: 'Adicionar Linha',
    labelSubtotal: 'Subtotal:',
    labelTax: 'Imposto',
    labelWithholding: 'Retenção',
    labelTotal: 'Total:',
    defaultInvoiceTitle: 'FATURA',
    defaultInvoiceNum: 'FAT-24-001',
    defaultCompanyName: 'A Minha Empresa',
    defaultCompanyId: 'NIF 500 000 000',
    defaultAddress: 'Rua Principal, 123',
    defaultCity: '1000-001 Lisboa',
    defaultEmail: 'geral@aminhaempresa.pt',
    placeholderDesc: 'Adicionar descrição...',
    placeholderNotes: 'ex: Pagamento a 30 dias por transferência bancária...',
    labelNotes: 'Notas / Termos de Pagamento',
    currencySymbol: '€',
    defaultTaxRate: '23',
    defaultRetRate: '0',
  },
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Fontes',
  bibliography: [
    { name: 'Guia de Faturação - Autoridade Tributária', url: 'https://portaldasfinancas.gov.pt/' },
    { name: 'Regras para emissão de faturas - Portugal', url: 'https://portaldasfinancas.gov.pt/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Elementos Essenciais de uma Fatura Profissional',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Uma fatura comercial válida é mais do que um pedido de pagamento — é um documento legal que protege tanto o profissional como o cliente. A falta de um campo obrigatório pode atrasar o pagamento ou causar problemas fiscais. Para freelancers e trabalhadores independentes, fazer bem desde o primeiro dia é crítico.',
    },
    {
      type: 'card',
      title: 'Campos Obrigatórios numa Fatura',
      html: '<ul><li><strong>Número da fatura:</strong> Deve ser sequencial e sem falhas (ex: 2024/1, 2024/2).</li><li><strong>Data da fatura:</strong> A data em que emite o documento.</li><li><strong>Info do vendedor e comprador:</strong> Nome legal completo, NIF e morada de ambas as partes.</li><li><strong>Serviços detalhados:</strong> Descrição, quantidade e preço unitário por item.</li><li><strong>Termos de pagamento:</strong> Prazo, métodos aceites e eventuais notas fiscais.</li></ul>',
    },
    {
      type: 'title',
      text: 'Impostos e Retenções em Faturas de Freelancer',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Duas variáveis fiscais afetam o valor final. O <strong>IVA</strong> é cobrado ao cliente e entregue ao Estado — aumenta o custo para o cliente. A <strong>Retenção na Fonte</strong> é deduzida do seu pagamento pelo cliente — reduz o valor líquido que recebe, mas conta como adiantamento do seu IRS/IRC.',
    },
    {
      type: 'code',
      code: 'Serviços prestados            1.000,00 €\n+ IVA (23%)                     230,00 €\n- Retenção na Fonte (25%)      -250,00 €\n------------------------------------------\nPagamento líquido recebido       980,00 €',
    },
    {
      type: 'title',
      text: 'Proteger a sua Identidade Fiscal como Freelancer',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Utilize sempre o seu NIF associado à atividade. Isto garante que a faturação é processada corretamente pelas autoridades tributárias e mantém a transparência nos documentos partilhados com os clientes.',
    },
    {
      type: 'tip',
      html: '<strong>Guarde cada fatura em PDF:</strong> É recomendado guardar os registos comerciais por pelo menos 10 anos. Utilize o botão Gerar PDF após cada fatura e guarde-a numa pasta organizada por ano e cliente.',
    },
  ],
};
