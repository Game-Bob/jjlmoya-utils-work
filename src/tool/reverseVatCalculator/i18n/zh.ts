import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReverseVatCalculatorUI } from '../ui';

const slug = 'reverse-vat-calculator-spain-zh';
const title = '增值税逆算计算器：计算西班牙税前金额';
const description =
  '在线增值税（IVA）逆算工具。从任何含税总额中拆分出增值税，以获取税前计税基数。西班牙自由职业者开具发票的必备工具。';

const faqData = [
  {
    question: '什么是增值税逆算（Scorporo/Break down）？',
    answer:
      '这是指从已经包含税费的总价中计算出计税基数（税前金额）的过程。对于需要根据协议最终价格开具发票的自由职业者来说至关重要。',
  },
  {
    question: '如何手动计算增值税逆算？',
    answer:
      '对于 21% 的增值税率，将总额除以 1.21。结果即为计税基数。总额与基数之间的差额即为增值税额。',
  },
  {
    question: '西班牙有哪些类型的增值税？',
    answer:
      '主要有三种：普通税率 (21%)、减低税率 (10%，适用于食品、健康、住房等) 和超低税率 (4%，适用于面包、牛奶、图书等生活必需品)。',
  },
  {
    question: '是否有义务在发票中拆分列出增值税？',
    answer:
      '是的。每当您开具专业发票或简化发票时，必须分别注明计税基数、适用税率和增值税总额。',
  },
];

const howToData = [
  {
    name: '输入总额',
    text: '输入包含增值税的最终结算总金额。',
  },
  {
    name: '选择增值税率',
    text: '根据您的产品或服务类别，选择 21%、10% 或 4%。',
  },
  {
    name: '获取计税基数',
    text: '查看自动计算结果，了解税前实际属于您的金额。',
  },
  {
    name: '复制开票数据',
    text: '使用计算出的结果填写开票软件中的“基数”和“增值税”字段。',
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
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<ReverseVatCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelTotal: '含税总额',
    labelVatType: '增值税 (IVA) 类型',
    btn21: '21 %',
    btn10: '10 %',
    btn4: '4 %',
    btn0: '0 %',
    labelBase: '计税基数 (税前)',
    labelVat: '增值税额',
  },
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考资料',
  bibliography: [],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '增值税逆算中的常见错误',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '许多自由职业者常犯的一个错误是认为去掉 21% 的增值税只需从总额中减去 21%。<strong>这是错误的！</strong> 这样做会导致您在每个季度申报时损失资金。',
    },
    {
      type: 'title',
      text: '数学原理解析',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '增值税是<strong>在基数之上</strong>计算的。因此，最终价格是基数的 121%（如果税率为 21%）。要算回基数，我们不是做减法，而是做<strong>除法</strong>。<code>基数 = 总额 / 1.21</code>。',
    },
    {
      type: 'code',
      code: '计税基数 = 含税总额 / (1 + 增值税率)\n增值税额 = 含税总额 - 计税基数',
    },
  ],
};
