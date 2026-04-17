import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IrpfCalculatorUI } from '../ui';

const slug = 'irpf-calculator-spain';
const title = 'IRPF 计算器 2026：西班牙净工资模拟器';
const description =
  '计算您 2026 年在西班牙的月度及年度税后净工资。模拟器已根据国家、大区阶梯、MEI 及家庭状况进行更新。';

const faqData = [
  {
    question: 'MEI 如何影响我 2026 年的净工资？',
    answer:
      '跨代公平机制 (MEI) 在 2026 年将升至 0.90%，以确保养老金的可持续性。大部分由雇主承担，但员工的税降净工资也会因其缴费比例而相应减少。',
  },
  {
    question: '为什么我在马德里的净工资与在加泰罗尼亚的不同？',
    answer:
      'IRPF 是一项 50% 下放给自治区的税收。马德里采用的税率阶梯低于国家标准，而加泰罗尼亚则有自己的阶梯，这可能会增加初始的代扣额。',
  },
  {
    question: '什么是边际税率，它对我有什么影响？',
    answer:
      '边际税率是指对您赚取的最后一欧元征税的百分比。它显示了加薪或奖金在税收方面为您带来的实际成本。',
  },
  {
    question: '月度计算时我该选择多少次工资发放？',
    answer:
      '通常您每年领取 12 次或 14 次工资（在夏季和圣诞节有额外奖金）。请选择您公司采用的选项，以了解您每月的实际净收入。',
  },
  {
    question: '这个计算器对我的纳税申报可靠吗？',
    answer:
      '本工具根据 2026 年的法规提供估算。每月代扣是一个近似值；您的实际最终结果将在次年 6 月提交纳税申报表时确定。',
  },
];

const howToData = [
  {
    name: '输入您的税前总薪水',
    text: '输入您合同中列出的年度总额（扣除任何费用或代扣税款之前）。',
  },
  {
    name: '定义您的个人情况',
    text: '说明您的子女数量、任何认定的残疾状况以及婚姻状况，以应用合法的免税额度。',
  },
  {
    name: '选择您所在的自治区',
    text: '您的纳税居住地决定了所适用的地区税率阶梯，从而影响您的最终净收入。',
  },
  {
    name: '查看明细',
    text: '查看有多少金额用于 IRPF、社会保障，以及您的实际月度和年度税后净工资是多少。',
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

export const content: ToolLocaleContent<IrpfCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    titleVariables: '计算变量',
    titleCalculo: '2026 透明计算',
    labelBruto: '年度税前薪水 (€)',
    labelPagas: '工资发放次数',
    labelComunidad: '纳税居住地',
    labelHijos: '子女（25岁以下）',
    labelDiscapacidad: '残疾等级',
    labelUnidad: '家庭单位或同居情况',
    opt12pagas: '12 次发放',
    opt14pagas: '14 次发放',
    optGen: '公共属地（通用）',
    optMad: '马德里',
    optCat: '加泰罗尼亚',
    optAnd: '安达卢西亚',
    optVal: '巴伦西亚大区',
    optPV: '巴斯克地区 (Foral)',
    optNav: '纳瓦拉 (Foral)',
    optNinguna: '无',
    opt33: '> 33%',
    opt65: '> 65%',
    optSoltero: '未婚、离婚或丧偶',
    optCasadoLow: '已婚（配偶年收入低于 1,500€）',
    optCasadoHigh: '已婚（配偶有收入）',
    labelSalarioBruto: '税前薪水',
    labelSS: '社会保障 / MEI (-)',
    labelGastos: '可抵扣费用（第 20 条）',
    labelNetoAnual: '年度税后净工资',
    labelRetencionIRPF: 'IRPF 代扣率 (%)',
    labelNetoMensual: '每月可用净额',
    labelMarginal: '适用的边际税率',
    resultRetention: 'IRPF 代扣率 (%)',
    resultAnual: '/ 年',
    infoText:
      '经过 2026 年验证的 AEAT 算法（总税额 - 最低税额）。包含 6.47% 的 MEI 缴费及就业收入扣除。jjlmoya.es。',
  },
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '来源',
  bibliography: [
    {
      name: '税务局：IRPF',
      url: 'https://sede.agenciatributaria.gob.es/Sede/irpf.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'IRPF 计算器 2026：新税务方案完整指南',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '个人所得税 (IRPF) 是西班牙税收体系中最重要的税种，直接影响数百万劳动者的每月工资。2026 年，我们看到旨在提高累进性和适应新经济现实的各项改革得到了整合，例如跨代公平机制 (MEI) 的增加以及多个自治区税率的通胀调整。',
    },
    {
      type: 'paragraph',
      html: '我们的 <strong>2026 年 IRPF 计算器</strong>旨在为您真实到账的金额提供准确且最新的视角。计算税后净工资不仅仅是减去一个固定的百分比；它是一个数学过程，需要考虑到您的个人情况、受抚养人、残疾状况，以及至关重要的纳税居住地，因为西班牙的每个地区对大区级税率阶梯都有管辖权。',
    },
    {
      type: 'title',
      text: '2026 年的工资单有哪些变化？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '要理解您的模拟结果，了解今年代扣计算的支柱至关重要：',
    },
    {
      type: 'list',
      items: [
        '<strong>MEI 的影响：</strong> 跨代公平机制继续其上升路径以保障养老金，2026 年将达到 0.90%。大部分由雇主支付，但员工的缴费将增加到约 0.15%，略微减少了净收入。',
        '<strong>SMI 与扣除：</strong> 最低跨行业薪资 (SMI) 起到了一定的屏障作用。低收入者受益于扩大的就业收入扣除，以确保税前总薪水的增加不会被更高的代扣税款所抵消。',
        '<strong>大区阶梯：</strong> 马德里、安达卢西亚或穆尔西亚等地区通常采用低于国家平均水平的税率，而加泰罗尼亚或巴伦西亚大区则有自己的阶梯，这可能会在较高收入水平时增加代扣额。',
      ],
    },
    {
      type: 'title',
      text: '理解净工资的关键概念',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>应纳税额 vs 税前薪水：</strong> 您并不是为您赚到的所有钱纳税。计算 IRPF 的基础是从您的税前总薪水中减去社会保障缴费（约 6.45%）和一项针对难以证明的费用的通用扣除（每年 2,000 欧元）后的结果。然后在此结果上应用免税最低标准。',
    },
    {
      type: 'title',
      text: '基础术语',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>边际税率：</strong> 您赚取的最后一欧元的税率百分比。了解加薪或奖金在税收方面的实际成本至关重要。',
        '<strong>生活最低限度 (Vital Minimum)：</strong> 国家认为满足纳税人及其家庭基本需求所必需的收入，因此不予征税。',
        '<strong>工资代扣：</strong> 雇主根据对您年终应纳税额的估算，每月代表您向税务局缴纳的预付款。',
        '<strong>净收入：</strong> 税前薪水减去社会保障缴费和税务法律允许的可抵扣费用。',
      ],
    },
    {
      type: 'title',
      text: '如何优化您的 IRPF 代扣',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '许多劳动者想知道他们是否应该要求雇主多扣或少扣。现实情况是，代扣是向税务局进行的“预付”。如果您在一年中代扣不足，您的纳税申报表可能会显示需要补税；如果代扣过多，您将获得退税。',
    },
    {
      type: 'paragraph',
      html: '<strong>跳阶梯的迷思：</strong> 有一种迷思认为，进入更高的阶梯意味着您的净收入会减少。这是错误的。IRPF 是累进的；只有超过阶梯限制的那部分收入才会按更高的税率征税。即使边际税率更高，您也永远不会因为税前加薪而获得更少的净额。',
    },
    {
      type: 'paragraph',
      html: '<strong>给家庭的建议：</strong> 请确保您已通过 145 表正确报告了子女的出生或家庭成员残疾状况的变化。这将调整您每月的代扣额，并避免在次年 6 月的纳税申报季出现意外。',
    },
    {
      type: 'title',
      text: '各自治区的差异',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '西班牙的财政分权意味着两个薪资和家庭状况相同的人，会因为住在托莱多还是巴塞罗那而获得不同的净收入。大区级政府控制着一半的税收（大区阶梯）。例如，马德里几乎在所有收入水平上的税率都是最低的，而其他地区则应用了国家层面没有的房租或子女教育抵扣。我们的计算器考虑了这些变化，根据您的位置为您提供最真实的数值。',
    },
    {
      type: 'paragraph',
      html: '总之，<strong>2026 年净工资模拟</strong>是一项基础财务规划工具。了解您的实际储蓄能力并理解您的收入中哪部分用于支持公共服务，可以让您在投资、抵押贷款或职业变动方面做出明智的决策。',
    },
  ],
};
