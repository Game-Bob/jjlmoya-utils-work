import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AutonomosCalculatorUI } from '../ui';

const slug = 'salary-calculator-autonomos-spain-zh';
const title = '2026 年西班牙自雇人士（Autónomo）缴费计算器：RETA 实际收入系统';
const description =
  '2026 年西班牙自雇人士缴费免费模拟器。根据新的 0.9% MEI（代际公平机制）计算您的实际净收入、缴费档次和每月费用。';

const faqData = [
  {
    question: '2026 年的新缴费系统是如何运作的？',
    answer:
      '该系统基于 15 个实际净收入档次。您必须申报自己的利润预测（收入减去支出），并按照该月度档次缴纳相应的费用。',
  },
  {
    question: '什么是 MEI，它如何影响我的自雇人士费用？',
    answer:
      '代际公平机制（MEI）是一种专用于养老金的税收。2026 年该税率升至 0.9%，使得所有自雇人士的缴费较 2025 年略有增加。',
  },
  {
    question: '我一年可以更改几次缴费基数？',
    answer:
      '您每年最多可以更改 6 次缴费基数（以及自雇人士费用），以使其符合您每月利润的实际情况。',
  },
  {
    question: '如果我的实际收入与预测不符会怎样？',
    answer:
      '社保局将通过与税务局交换数据进行年度核算。如果您缴少了，他们会追缴差额；如果您缴多了，多出的部分会自动退还。',
  },
  {
    question: '80 欧元的定额阶梯（Tarifa Plana）还存在吗？',
    answer:
      '存在。对于新注册的自雇人士，前 12 个月的优惠费用维持在 80 欧元；如果收入低于最低工资，可以再延长 12 个月。',
  },
];

const howToData = [
  {
    name: '输入收入和支出',
    text: '输入您专业活动中预期的月营业额和可扣除支出。',
  },
  {
    name: '定义工作概况',
    text: '选择您是个人自雇人士（7% 扣除）还是公司法人自雇人士（3% 扣除）。',
  },
  {
    name: '查看您的实际档次',
    text: '模拟器将计算您的净收入，并显示适用于 2026 年的缴费档次。',
  },
  {
    name: '检查 MEI 的影响',
    text: '您将看到最终费用的详细明细，包括各项保险和新的代际公平系数。',
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

export const content: ToolLocaleContent<AutonomosCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelIncome: '每月税前收入',
    labelExpenses: '每月可扣除支出',
    labelType: '从业者概况',
    labelFlatRate: '定额阶梯（新注册）',
    optStandard: '个人自雇人士（7% 扣除）',
    optSocietario: '公司法人自雇人士（3% 扣除）',
    optNoFlatRate: '不适用（实际费用）',
    optFlatRate: '是，第一年（80 欧元/月）',
    labelBracket: '您的净收入档次',
    labelNetDisplay: '每月净收入',
    labelCuota: '社会保障缴费',
    labelBase: '缴费基数',
    labelNetAfter: '实际净得（扣除缴费后）',
    labelProjection: '2026 年预测 (MEI 0.9%)',
    infoText:
      'RETA 2026 系统：计算包含应用了通用支出扣除（7% 或 3%）后的每月净收入。显示的缴费包含一般保险、职业保险、停止活动、培训以及针对 2026 年更新为 0.9% 的代际公平机制（MEI）。',
  },
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '来源',
  bibliography: [
    {
      name: '社会保障局：新缴费系统',
      url: 'https://portal.seg-social.gob.es/wps/portal/importass/importass/Colectivos/Trabajo+Autonomo/guia',
    },
    {
      name: '税务局：经济活动收入',
      url: 'https://sede.agenciatributaria.gob.es/Sede/irpf/empresarios-individuales-profesionales/rendimientos-actividades-economicas.html',
    },
    {
      name: 'BOE：关于 RETA 改革的第 13/2022 号皇家法令',
      url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2022-12482',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '2026 年自雇人士费用计算器：新系统指南',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在西班牙成为自雇人士意味着要面对最具动态性、有时也最令人困惑的任务之一：<strong>社会保障缴费</strong>。自从基于<strong>实际净收入</strong>的新系统生效以来，“固定费用”的概念已经消失，取而代之的是累进模型。',
    },
    {
      type: 'title',
      text: '新的 RETA 缴费系统是如何运作的？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '直到 2023 年，每位自雇人士都可以自由选择自己的缴费基数，这导致大多数人按最低标准缴纳。改革旨在确保高收入者缴纳更多，而低收入者的每月负担则有所减轻。',
    },
    {
      type: 'paragraph',
      html: '该系统基于<strong>净收入档次</strong>。这意味着您的费用不取决于您的税前总收入（营业额），而取决于在扣除专业支出并应用额外的通用支出扣除后，您实际拿到的“净”收入。',
    },
    {
      type: 'title',
      text: '2026 年的关键变化：MEI 系数',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '2026 年标志着改革第二阶段的巩固。最重要的更新之一是<strong>代际公平机制（MEI）</strong>的提高。',
    },
    {
      type: 'list',
      items: [
        '<strong>MEI 提高：</strong> 2026 年，MEI 升至 0.9%，这意味着所有档次的缴费较 2025 年都有轻微增加。',
        '<strong>档次审查：</strong> 净收入档次得以维持，但每个区间的最低和最高缴费额都进行了调整，以向实际收入缴费系统靠拢。',
        '<strong>年度核算：</strong> 年底，社保局将与税务局核对数据。如果您根据实际利润多缴或少缴了费用，将进行退款或追缴。',
      ],
    },
    {
      type: 'title',
      text: '如何计算您的每月净收入',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '为了准确使用我们的计算器，理解输入哪个数字至关重要。社保局采用的公式是：',
    },
    {
      type: 'code',
      code: '净收入 = (税前收入 - 可扣除支出) / (1 - 通用支出扣除)',
    },
    {
      type: 'paragraph',
      html: '<strong>通用支出扣除</strong>对个人自雇人士为 <strong>7%</strong>，对公司法人自雇人士为 <strong>3%</strong>。',
    },
    {
      type: 'card',
      title: '2026 年计算示例',
      html: '<ul><li>营业额：4,000 欧元 / 支出：1,000 欧元</li><li>利润空间：3,000 欧元</li><li>通用扣除 (7%)：210 欧元</li><li>可计净收入：2,790 欧元</li><li><strong>2026 年估算费用：</strong> 第 8 档，约 350 欧元 + MEI 调整。</li></ul>',
    },
    {
      type: 'title',
      text: '累进系统的优势',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>更好的社会保障：</strong> 通过基于更现实的基数缴纳费用，临时丧失劳动能力津贴、产假、陪产假，尤其是养老金，都将显著提高。',
        '<strong>充分的灵活性：</strong> 您每年最多可以更改 6 次缴费基数。如果您预见到收入会大幅下降，可以转入较低的档次，以避免现金流紧张。',
        '<strong>80 欧元定额费：</strong> 第一年对新创业者维持不变，允许在固定成本受控的情况下起步。',
      ],
    },
    {
      type: 'title',
      text: '公司法人自雇人士 vs 个人自雇人士',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>公司法人自雇人士</strong>（拥有 SL 公司的人）的最低缴费基数略高，且通用支出扣除较低（3%）。这是因为法律认为股东的控制权使他们在面对市场风险时处于不同的地位。',
    },
    {
      type: 'tip',
      html: '<strong>专家建议：</strong> 如果您的月净收入波动很大，请尝试选择一个审慎的中间档次。事后核算是不可避免的，但这样做可以避免年底收到社保局“账单”时产生的数千欧元意外支出。',
    },
    {
      type: 'title',
      text: '您的每月缴费包含哪些内容？',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>一般保险 (28.30%)：</strong> 涵盖因普通疾病或非工伤事故造成的缺勤。',
        '<strong>职业保险 (1.30%)：</strong> 工伤和职业病。',
        '<strong>停止活动 (0.90%)：</strong> 自雇人士的“失业”救济。',
        '<strong>职业培训 (0.10%)：</strong> 参与课程和培训的权利。',
        '<strong>MEI（2026 年为 0.90%）：</strong> 保证养老金可持续性的基金。',
      ],
    },
    {
      type: 'title',
      text: '核算流程（税务局与社保局）',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '每年在报税季结束后，税务局会将您的实际净收入告知社保局。如果您选择的档次低于实际收入的要求，您将收到差额补缴通知。相反，如果您缴纳的费用高于利润所得，社保局会自动退还多余部分，无需您明确申请。',
    },
    {
      type: 'title',
      text: '结论与建议',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '对于每位自由职业者来说，<strong>2026 年自雇人士计算器</strong>是税务规划中不可或缺的工具。我们建议在您签订重要合同或更改固定成本时都使用此模拟器，以确保您的自雇人士费用始终符合您的业务实际情况。',
    },
  ],
};
