import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { InvoiceLateFeeCalculatorUI } from '../ui';

const slug = 'invoice-late-fee-calculator';
const title = '发票逾期费用计算器';
const description = '根据逾期发票金额、宽限期和合同约定的费率，计算简单的逾期费用。清楚查看计费天数、费用和应付总额。';

const faq = [
  { question: '发票逾期费用如何计算？', answer: '计算器会从付款到期日和计算日之间的日历天数中减去宽限天数。对于年费率或月费率，按计费天数对约定百分比进行比例计算。一次性费率在宽限期结束后只应用一次。' },
  { question: '可以使用法定逾期费率吗？', answer: '如果您已经核实费率，并且合同或适用法律允许使用，就可以输入。请自行填写费率。工具不会选择国家、猜测法定费率，也不会判断费用是否可以依法追收。' },
  { question: '宽限期会改变什么？', answer: '在逾期费用开始前，宽限天数会从付款到期后的时间中扣除。如果发票仍处于宽限期内，逾期费用保持为零，结果会显示仍在宽限期内。' },
  { question: '总额包括税费、催收成本或复利吗？', answer: '不包括。结果是所选货币的本金加上根据您输入计算出的简单费用。更换货币使用固定的参考换算系数，而不是实时汇率。税费、固定催收成本、法律费用、复利和付款记录都不会自动加入。' },
];

const howTo = [
  { name: '输入发票金额', text: '填写未付本金并选择发票使用的货币。如果之后更换货币，金额会按照页面显示的参考系数换算，不是实时外汇报价。' },
  { name: '设置日期', text: '选择合同约定的付款到期日，以及要核算到的日期。工具会计算两个日期之间完整的日历天数。' },
  { name: '填写宽限期和费率', text: '输入宽限天数和发票约定的百分比，并选择年费率、月费率或一次性费用。' },
  { name: '检查明细', text: '查看逾期天数、计费天数、逾期费用和总额。把明细与发票一起保存，发送追款通知前确认合同内容。' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const applicationSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'BusinessApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' }, inLanguage: 'zh' };

export const content: ToolLocaleContent<InvoiceLateFeeCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    eyebrow: '逾期发票 / 简明明细',
    intro: '把错过的付款日期变成清楚的追款依据。',
    sectionTerms: '设置发票条件',
    labelAmount: '未付发票金额',
    labelCurrency: '发票货币',
    currencyConversionHint: '更换货币会按照固定参考系数换算金额，不使用实时汇率。',
    currencyRateTemplate: '1 EUR ≈ {value} {currency}。',
    labelDueDate: '合同付款到期日',
    labelCalculationDate: '计算截至',
    labelGraceDays: '宽限期',
    labelRate: '约定的逾期费率',
    labelRatePeriod: '费率适用方式',
    rateAnnual: '每年',
    rateMonthly: '每月',
    rateOneTime: '一次性',
    sectionReceipt: '催收明细',
    labelDaysSinceDue: '逾期天数',
    labelChargedDays: '计费天数',
    labelAppliedRate: '适用费率',
    labelLateFee: '逾期费用',
    labelTotalDue: '应追收总额',
    statusNotDue: '尚未逾期',
    statusGrace: '仍在宽限期内',
    statusOverdue: '正在产生费用',
    timelineDue: '付款到期日',
    timelineToday: '核算截至',
    timelineGrace: '宽限期后的计费天数',
    noteDisclaimer: '根据输入内容进行的简单估算。提出追款前，请确认合同、管辖法律、税务处理和固定催收成本。',
    buttonReset: '清除已保存条件',
    numberLocale: 'zh-CN',
  },
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, applicationSchema],
  seo: [
    { type: 'title', text: '轻松解释逾期发票', level: 2 },
    { type: 'paragraph', html: '当本金、日期、宽限期、费率和费用集中显示时，付款追款更容易核对。这个计算器会把合同条件整理成一份收据式明细。' },
    { type: 'card', title: '简单公式', html: '<p><strong>计费天数</strong> = 付款到期日与计算日之间的天数 - 宽限天数。</p><p><strong>逾期费用</strong> = 发票金额 × 费率 ÷ 100 × 时间系数。年费率使用计费天数 ÷ 365，月费率使用计费天数 ÷ 30，一次性费率在宽限期后应用一次。</p>' },
    { type: 'paragraph', html: '计算过程有意保持透明，不会替您选择法定利率。合同可能规定固定费用、年费率或不同的日数计算方式。货币换算只是根据所选系数提供的参考值，不是实时汇率。如果合同约定不同，请核对条款并在工具外调整计算。' },
    { type: 'title', text: '追款前检查计算结果', level: 2 },
    { type: 'code', code: '发票: ¥1,250\n核算天数: 38 天\n宽限期: 5 天\n年费率: 10%\n计费天数: 33 天\n逾期费用: ¥1,250 × 0.10 × 33 / 365 = ¥11.30\n总额: ¥1,261.30' },
    { type: 'list', items: ['将付款到期日与已签署的订单、发票或合同进行核对。', '使用实际准备追款通知的日期，不要使用假定的付款日期。', '将本金和逾期费用分开，方便收款方核对两项金额。', '确认税费、固定追偿成本或法律上限是否会改变可追收金额。'] },
    { type: 'tip', html: '<strong>证据提示:</strong> 将发票、交付或验收证明、合同条款和本次计算一起保存。工具可以解释算术过程，但不能证明债务已经到期或费用一定可以追收。' },
  ],
};
