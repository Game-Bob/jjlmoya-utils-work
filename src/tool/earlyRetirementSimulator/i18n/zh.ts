import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EarlyRetirementSimulatorUI } from '../ui';

const slug = 'early-retirement-simulator-spain';
const title = '西班牙提前退休模拟器：计算您的养老金';
const description =
  '免费计算您的退休年龄、削减系数和预计养老金。适用于西班牙自愿和非自愿提前退休的更新模拟器。';

const faqData = [
  {
    question: '西班牙提前退休的最低年龄是多少？',
    answer:
      '对于自愿提前退休，最低年龄比法定年龄早 2 年（根据缴费情况，通常为 63 岁或 65 岁）。对于非自愿退休，最多可提前 4 年（61 岁或 63 岁）。',
  },
  {
    question: '我需要缴纳多少年的社保？',
    answer:
      '对于自愿提前退休，至少需要 35 年的有效缴费。对于非自愿或强制退休，最低要求为 33 年。',
  },
  {
    question: '提前退休我会损失多少钱？',
    answer:
      '削减比例取决于提前退休的月数和总缴费年限。削减幅度从提前一个月的 2.81% 到自愿提前整整 2 年的最高约 21% 不等。',
  },
  {
    question: '失业时间计入退休年限吗？',
    answer:
      '计入。领取失业金（paro）的时间计入退休年限，因为 SEPE 会向社会保障局缴纳相应的费用。',
  },
];

const howToData = [
  {
    name: '输入您的出生年份',
    text: '这将根据 2026 年执行的法规确定您的法定普通退休年龄。',
  },
  {
    name: '估算您的缴费年限',
    text: '包括受雇时间、自雇时间以及领取失业金的时期。',
  },
  {
    name: '选择退休类型',
    text: '标明是自愿退休还是强制退休，以便应用正确的系数。',
  },
  {
    name: '查看您的预计养老金',
    text: '查看应用的削减比例以及您可以停止工作的确切日期。',
  },
];

const bibliography = [
  {
    name: '西班牙社会保障局：普通和提前退休',
    url: 'https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/PrestacionesPensionesTrabajadores/10963',
  },
  {
    name: '关于保证养老金购买力的第 21/2021 号法律',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-21652',
  },
  {
    name: '官方模拟器 - Tu Seguridad Social',
    url: 'https://prestaciones.seg-social.es/simulador-servicio/simulador-pension-jubilacion.html',
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

export const content: ToolLocaleContent<EarlyRetirementSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelBirthYear: '出生年份',
    labelContributions: '缴费年限',
    labelBasePension: '月度税前基数',
    labelRetirementAge: '退休年龄',
    labelExpectedDate: '预计日期',
    labelEstimatedPension: '预计养老金',
    labelPermanentReduction: '永久性削减',
    labelYears: '年',
    btnLegalTitle: '标准',
    btnLegalDesc: '法定退休年龄。无削减。发放基数的 100%。',
    btnVoluntaryTitle: '自愿提前',
    btnVoluntaryDesc: '个人选择退休。应用月度削减系数。',
    btnInvoluntaryTitle: '非自愿 / ERE',
    btnInvoluntaryDesc: '强制终止合同。系数更优惠。',
    defaultBirthYear: '1975',
    defaultContributions: '30',
    defaultBasePension: '2500',
    adviceDefault: '移动滑块以规划您的退休时间表。',
    adviceDefaultWithParams: '移动滑块以规划您的退休时间表。',
    adviceDelay:
      '如果您将退休延迟到 <strong>[AGE]</strong> 岁，您每月将多获得约 <strong>[GAIN] 欧元</strong>。',
    adviceBonus: '您正在积累延迟奖励。您的养老金将超过基数的 100%。',
    adviceOptimal: '您已达到最佳标准年龄，享有 100% 的权益。',
  },
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '来源',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '西班牙提前退休模拟器：2026 年指南',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>提前退休</strong>是西班牙劳动者最大的经济担忧之一。了解何时可以停止工作，尤其是通过削减系数会损失多少钱，对于健康的未来规划至关重要。',
    },
    {
      type: 'list',
      items: [
        '<strong>标准法定年龄：</strong> 67 岁（如缴费充足则为 65 岁）。',
        '<strong>自愿提前退休：</strong> 最多比法定限制早 2 年。',
        '<strong>非自愿提前退休：</strong> 由于裁员或其他原因，最多可提前 4 年。',
        '<strong>削减系数：</strong> 对养老金进行的永久性每月扣除。',
        '<strong>缴费要求：</strong> 自愿退休最低 35 年，强制退休最低 33 年。',
      ],
    },
    {
      type: 'title',
      text: '在西班牙我可以在什么年龄合法退休？',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>65 岁路径：</strong> 如果您缴费超过 38 年零 6 个月，您可以在 65 岁以基数的 100% 退休。',
        '<strong>67 岁路径：</strong> 如果您的缴费低于该门槛，您的标准退休年龄为 67 岁。',
        '<strong>兵役：</strong> 义务兵役或社会服务可增加最多 1 年的缴费年限。',
      ],
    },
    {
      type: 'title',
      text: '自愿提前退休',
      level: 2,
    },
    {
      type: 'card',
      title: '自愿提前退休的要求',
      html: '<ul><li>年龄在标准法定年龄以下两年之内。</li><li>具有至少 35 年的有效缴费期。</li><li>收到的养老金必须超过最低养老金标准。</li></ul>',
    },
    {
      type: 'title',
      text: '削减系数：提前退休的代价',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>缴费少于 38.5 年：</strong> 最高削减 21%（提前 2 年）。',
        '<strong>在 38.5 至 41.5 年之间：</strong> 最高削减约 19%。',
        '<strong>在 41.5 至 44.5 年之间：</strong> 最高削减约 17%。',
        '<strong>超过 44.5 年：</strong> 最高削减约 15%。',
      ],
    },
    {
      type: 'tip',
      html: '<strong>黄金贴士：</strong> 仅延迟一个月提前退休就可能使削减系数产生显著差异。如果您接近每月档次的边界，请务必计算多等几天的收益。',
    },
    {
      type: 'title',
      text: '非自愿或强制提前退休',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>最大提前量：</strong> 标准年龄前 4 年（48 个月）。',
        '<strong>所需缴费：</strong> 33 年。',
        '<strong>条件：</strong> 必须在至少 6 个月前登记为求职者。',
        '<strong>系数：</strong> 比自愿退休更优惠，但 4 年的影响仍然很大。',
      ],
    },
    {
      type: 'card',
      title: '实战案例',
      html: '<p>一位基数为 2,000 欧元、缴费年限为 36 年的劳动者选择提前 2 年自愿退休。其削减比例约为 21%，其余生每月养老金约为 <strong>1,580 欧元</strong>。</p>',
    },
  ],
};
