import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SettlementCalculatorUI } from '../ui';

const slug = 'severance-pay-calculator-spain-zh';
const title = '2026 西班牙遣散费与离职金计算器';
const description =
  '分步计算您的西班牙离职金（Finiquito）：包括未休年假、按比例计算的奖金以及根据西班牙劳动法应得的遣散补偿。';

const faqData = [
  {
    question: '如果我主动辞职，还能拿到离职金吗？',
    answer:
      '是的，肯定能拿。离职金（Finiquito）包括已经产生但尚未结算的金额，例如当月已工作的工资、未休的年假补偿以及按比例计算的年度额外奖金（Pagas extras）。但是，主动辞职通常没有遣散费（Indemnización），也没有领取失业救济金的权利。',
  },
  {
    question: '不当解雇的遣散费是多少？',
    answer:
      '对于 2012 年 2 月 12 日以后签订的合同，赔偿标准为每工作一年支付 33 天工资，最高不超过 24 个月的月薪。',
  },
  {
    question: '如果我没有提前通知就离职，老板可以扣钱吗？',
    answer:
      '是的。如果您的合同规定了预告期（通常为 15 天）而您未遵守，公司有权从您的离职金中扣除对应天数的工资。',
  },
  {
    question: '离职金中关于未休年假的社保缴纳是如何规定的？',
    answer:
      '当您结算未休年假工资时，公司必须在这些天数内继续为您缴纳社保。在此期间，您不能开始领取失业金，也不能在其他公司入职。',
  },
];

const howToData = [
  {
    name: '输入您的税前薪资',
    text: '输入您的年薪总额（税前），并选择每年的薪水派发次数（12 次或 14 次）。',
  },
  {
    name: '设定准确日期',
    text: '输入您入职公司的具体日期以及计划的最后工作日。',
  },
  {
    name: '添加未休年假',
    text: '注明您在当前年度还有多少天年假尚未休完。',
  },
  {
    name: '选择离职原因',
    text: '选择离职原因，以便模拟器应用正确的遣散费计算标准。',
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

export const content: ToolLocaleContent<SettlementCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelSalary: '年薪总额 (税前)',
    labelExtraPayments: '每年薪水派发次数',
    labelStartDate: '入职日期',
    labelEndDate: '离职日期',
    labelVacationDays: '未休年假天数',
    labelDepartureReason: '离职原因',
    opt12pays: '12 薪 (已分摊奖金)',
    opt14pays: '14 薪 (标准)',
    optImprocedente: '不当解雇 (33天标准)',
    optObjetivo: '客观原因解雇 (20天标准)',
    optTemporal: '临时合同到期 (12天标准)',
    optVoluntaria: '主动辞职 (无遣散费)',
    labelTotal: '预估总离职金额',
    labelSeverance: '遣散费 (Indemnización)',
    labelVacation: '未休年假补偿',
    labelExtras: '按比例计算的奖金',
    labelMonthSalary: '折算月薪',
    disclaimer:
      '注：此计算结果为基于西班牙普通劳动法的初步预估。最终金额可能因集体协议、个税扣除及社保缴纳而有所不同。',
    btnCopy: '复制摘要',
    copySuccess: '已复制',
    copySummaryTitle: '预估离职金明细摘要',
    defaultSalary: '24000',
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
      text: '西班牙离职金与遣散费完全指南',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在西班牙结束雇佣合同时，无论是<strong>辞职</strong>、<strong>被解雇</strong>还是<strong>合同到期</strong>，了解自己应得的权益至关重要。',
    },
    {
      type: 'title',
      text: 'Finiquito 与 Indemnización 的区别',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Finiquito:</strong> 离职时的各项清算费用（如应得年假、当月工资等）。无论任何原因离职，都有权拿到。',
        '<strong>Indemnización:</strong> 某些解雇情况下法律规定公司必须支付的补偿金。主动辞职通常没有这一项。',
      ],
    },
  ],
};
