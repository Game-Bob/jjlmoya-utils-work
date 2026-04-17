import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InvoiceGeneratorUI } from '../ui';

const slug = 'invoice-generator';
const title = '面向自由职业者和小微企业的免费在线发票生成器';
const description =
  '免费在线创建专业的发票。填写您的详细信息，添加服务，设置税率和预扣税，然后生成可直接打印的 PDF。无需注册账户。';

const faqData = [
  {
    question: '一份专业的发票必须包含哪些信息？',
    answer:
      '一份专业的发票必须包含唯一的发票编号、发票日期、您的完整企业名称和联系信息（包括纳税人识别号）、客户的企业信息、包含数量和单价的服务或产品清单、适用的税率以及明确的支付条款。',
  },
  {
    question: '自由职业者需要对服务征收营业税或增值税吗？',
    answer:
      '这取决于您所在的国家/地区和业务类型。在中国，如果您登记为纳税人，则需要根据适用的税率计算并申报增值税。具体请咨询会计师或税务顾问。',
  },
  {
    question: '什么是预扣税？它在什么时候适用？',
    answer:
      '预扣税（如个人所得税预扣）是客户从您的付款中扣除并代表您向税务机关缴纳的税款。这通常适用于个人为企业提供专业劳务的情况。',
  },
  {
    question: '我应该在发票上使用身份证号还是统一社会信用代码？',
    answer:
      '为了保护个人隐私和确保商务专业性，建议尽可能使用统一社会信用代码（纳税人识别号）。对于以个人名义开展业务的，请确保符合当地的财税合規要求。',
  },
];

const howToData = [
  {
    name: '输入您的企业信息',
    text: '点击“我的公司”并替换为您真实的名称、纳税人识别号、通讯地址和联系邮箱。',
  },
  {
    name: '填写客户详情',
    text: '在“账单寄至：”下方，点击每个字段输入客户公司名称、识别号、地址和电子邮箱。',
  },
  {
    name: '添加服务并设置价格',
    text: '在表格中描述每项服务，设置数量和单价。点击“添加行”以包含更多项目。',
  },
  {
    name: '核对总额并生成 PDF',
    text: '核实所有金额是否正确，设置适用的税率，然后点击“生成 PDF”以打印或保存。',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<InvoiceGeneratorUI> = {
  slug,
  title,
  description,
  ui: {
    labelEditor: '交互式编辑器',
    labelEditHint: '点击文档中的任何文本即可直接编辑。',
    btnGenerate: '生成 PDF',
    labelFrom: '来自：',
    labelTo: '账单寄至：',
    labelDesc: '服务或产品说明',
    labelQty: '数量',
    labelPrice: '单价',
    labelAmount: '金额',
    btnAddRow: '添加行',
    labelSubtotal: '小计：',
    labelTax: '税金',
    labelWithholding: '预扣',
    labelTotal: '总计：',
    defaultInvoiceTitle: '发票',
    defaultInvoiceNum: 'INV-2024-001',
    defaultCompanyName: '我的公司',
    defaultCompanyId: '识别号 91XXXXXXXXXXXX',
    defaultAddress: '某某路 123 号',
    defaultCity: '某省某市',
    defaultEmail: 'admin@mycompany.com',
    placeholderDesc: '添加说明...',
    placeholderNotes: '例如：请在 30 天内通过银行转账支付...',
    labelNotes: '备注 / 支付条款',
    currencySymbol: '¥',
    defaultTaxRate: '1',
    defaultRetRate: '0',
  },
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '来源',
  bibliography: [
    { name: '税务机关：发票开具指南', url: 'https://www.chinatax.gov.cn/' },
    { name: '自由职业者纳税中心', url: 'https://www.chinatax.gov.cn/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '专业发票的基本要素',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '一份有效的商业发票不仅仅是付款请求，它更是保护您和客户双方的法律文件。缺失必填字段可能会导致付款延迟、引发税务审计问题，甚至使发票失效。对于自由职业者，从第一天起就做对这一点至关重要。',
    },
    {
      type: 'card',
      title: '发票上的必填字段',
      html: '<ul><li><strong>发票编号：</strong> 必须是连续的，且没有缺失（例：2024-001, 2024-002）。</li><li><strong>发票日期：</strong> 您开具发票的日期。</li><li><strong>买卖双方信息：</strong> 双方的完整法定名称、纳税人识别号和通讯地址。</li><li><strong>详细服务清单：</strong> 每项服务的描述、数量和单价。</li><li><strong>支付条款：</strong> 到期日和接受的付款方式。</li></ul>',
    },
    {
      type: 'title',
      text: '自由职业发票中的税金与预扣',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '两个税务变量会影响您的最终收款金额。<strong>增值税/营业税</strong>是由客户支付并最终交给国家的——它增加了客户的成本。<strong>预扣税</strong>是由客户从您的报酬中扣除并交给税务局的——它减少了您实际收到的净额，但这通常被视为您的预缴所得税。',
    },
    {
      type: 'code',
      code: '所提供的服务金额             ¥ 1,000.00\n+ 增值税 (3%)                 ¥ 30.00\n- 个人所得税预扣 (依规定)       -¥ 0.00\n------------------------------------------\n实际收到的净款项              ¥ 1,030.00',
    },
    {
      type: 'title',
      text: '保护您的税务身份',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '尽可能在发票上使用统一社会信用代码或企业纳税号。这可以避免在共享给客户公司多个部门的文档中暴露过多的个人私密信息。',
    },
    {
      type: 'tip',
      html: '<strong>将每份发票保存为 PDF：</strong> 税务相关记录通常建议保存至少 5 年。在创建每份发票后使用“生成 PDF”按钮，并将其保存到按年度和客户组织的专门文件夹中。',
    },
  ],
};
