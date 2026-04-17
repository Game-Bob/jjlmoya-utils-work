import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SalaryCalculatorUI } from '../ui';

const slug = 'salary-calculator-spain';
const title = '西班牙薪资计算器：IRPF 与社会保障净薪资模拟器';
const description =
  '了解您每月实际能拿到多少收入。根据西班牙法规精确计算税款代扣、课税基础及净收入。';

const faqData = [
  {
    question: '在西班牙如何计算净薪资？',
    answer:
      '净薪资是通过从税前总额中减去 IRPF 代扣（按阶梯计算）和社会保障缴费（约为总额的 6.35%）得出的。IRPF 的百分比根据您的个人情况和薪资水平而有所不同。',
  },
  {
    question: '12 次发放与 14 次发放有什么区别？',
    answer:
      '如果采用 12 次发放，奖金会按月平均分配。如果采用 14 次发放，您将领取两次额外的奖金（通常在 6/7 月和 12 月）。年度总额是一样的，只是分配方式不同。',
  },
  {
    question: '为什么我的工资单与计算器的结果不完全一致？',
    answer:
      '本计算器使用标准的估算值。由于公司特定的扣款、福利、受抚养子女、残疾或影响 IRPF 的个人情况，您的实际工资单可能会有所波动。',
  },
  {
    question: '税务局会从我的薪资中扣除多少百分比？',
    answer:
      '这取决于您的薪资水平。通常，IRPF 和社会保障合计会扣除总额的 25% 到 45%。由于 IRPF 的累进税制，薪资越高，扣除比例就越高。',
  },
  {
    question: '什么是 IRPF？',
    answer:
      '个人所得税。这是一种累进税：收入越高的人，对薪资中较高阶梯部分支付的比例就越高。',
  },
];

const howToData = [
  {
    name: '输入年度税前总薪资',
    text: '输入合同约定的税前及代扣前的总额。',
  },
  {
    name: '设置家庭状况',
    text: '说明您是否有子女或受抚养人，因为这会降低适用于您的 IRPF 比例。',
  },
  {
    name: '薪资发放次数',
    text: '选择您是按 12 次领取薪资（奖金已分配）还是按 14 次领取。',
  },
  {
    name: '查看每月明细',
    text: '查看社会保障、IRPF 分别扣除了多少，以及最终打入您银行账户的精确净收入。',
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
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<SalaryCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelGross: '年度税前总薪资',
    labelPays: '薪资发放次数',
    btn12: '12 次发放',
    btn14: '14 次发放',
    labelAge: '年龄',
    labelContract: '合同类型',
    optIndefinite: '长期合同 / 通用',
    optTemporal: '临时合同',
    btnCalculate: '计算净薪资',
    labelNetMonthly: '每月净薪资',
    labelNetAnnual: '年度净薪资',
    labelPaysDisplay: '发放期间',
    labelBreakdown: '代扣明细（估算）',
    labelIRPF: 'IRPF',
    labelSS: '社会保障',
    disclaimer:
      '*针对 65 岁以下、单身且无子女工作的简化计算。',
  },
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '来源',
  bibliography: [],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '我的税前薪资都去哪儿了？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '这是第一份工作中最常见的惊讶：您签了一份年薪 24,000 欧元的合同，除以 12 期望每月拿到 2,000 欧元，结果账户里只有 1,600 欧元。剩下的 400 欧元去哪儿了？',
    },
    {
      type: 'paragraph',
      html: '在西班牙，<strong>税前（Gross）</strong>（公司支付的部分）与<strong>净得（Net）</strong>（您拿到的部分）之间的差额分为两个主要项目：IRPF 和社会保障。理解这两点是谈判加薪的关键。',
    },
    {
      type: 'title',
      text: '社会保障：为您未来注资的约 6.35%',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '这是几乎所有劳动者都要支付的固定缴费。它与您是单身还是已婚无关。这笔资金用于：',
    },
    {
      type: 'list',
      items: [
        '<strong>一般意外 (4.70%)</strong>：涵盖因普通疾病、非工作事故、退休和分娩造成的缺勤。',
        '<strong>失业 (1.55% 或 1.60%)</strong>：您在失业时申请失业救济金的缴费。如果是临时合同，比例会略有不同。',
        '<strong>职业培训 (0.10%)</strong>：用于资助培训课程和再培训。',
      ],
    },
    {
      type: 'title',
      text: 'IRPF：最让人头疼的税收',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '它是累进的，根据您的薪资和个人情况，税率从 2% 到 47% 不等。它不是固定税，而是向税务局预付的税款。公司会计算您明年应缴纳多少税款，并按月扣除。',
    },
    {
      type: 'title',
      text: '降低 IRPF 的因素',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '有子女（尤其是 3 岁以下）。',
        '有认定的残疾（>33%）。',
        '有收入较低的受抚养配偶。',
      ],
    },
    {
      type: 'title',
      text: '国家 IRPF 阶梯（2026 年估算）',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '0 € - 12,450 €: 19%',
        '12,450 € - 20,200 €: 24%',
        '20,200 € - 35,200 €: 30%',
        '35,200 € - 60,000 €: 37%',
        '> 60,000 €: 45%',
      ],
    },
    {
      type: 'title',
      text: '永恒的问题：12 次还是 14 次发放？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '许多员工更喜欢 14 次发放，以便在夏季和圣诞节获得额外薪水。另一些人则更喜欢（或公司强制要求）将薪资分摊到 12 个月中。从数学上讲，您每年的总收入是完全一样的。',
    },
    {
      type: 'list',
      items: [
        '<strong>12 次发放</strong>：您每月拿到的钱更多，但没有额外奖金。适合保持稳定的每月现金流。',
        '<strong>14 次发放</strong>：您每月拿到的钱略少，但每年有两次双薪。这就像是“强制储蓄”。',
      ],
    },
  ],
};
