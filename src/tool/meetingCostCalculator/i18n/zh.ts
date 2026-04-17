import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MeetingCostCalculatorUI } from '../ui';

const slug = 'meeting-cost-calculator-zh';
const title = '会议成本实时计时器';
const description =
  '实时查看您的会议成本。输入参会人数和平均薪资，观察金额每秒钟跳动增加。';

const faqData = [
  {
    question: '为什么要测量会议成本？',
    answer:
      '为会议时间标注货币价值可以建立生产力意识。它有助于减少不必要的会议，鼓励守时，并确保讨论的主题能够覆盖团队的经济投入。',
  },
  {
    question: '实时成本是如何计算的？',
    answer:
      '系统根据每位参会者的估算年薪或时薪，计算出每秒的燃烧率。计时器在每个动画帧更新，实时显示累计成本。',
  },
  {
    question: '此工具不包括哪些间接成本？',
    answer:
      '此计算器专注于直接的工资成本。它不包括机会成本（员工本可以创造的价值），也不包括办公室租金、软件许可或水电费等固定间接费用。',
  },
  {
    question: '我该如何降低会议成本？',
    answer:
      '定义清晰的议程，仅限制必要的参会者，设定严格的时间限制，并考虑异步消息或电子邮件是否可以达到同样的效果。',
  },
];

const howToData = [
  {
    name: '输入参会人数',
    text: '输入当前参加会议的人数。',
  },
  {
    name: '设置平均薪资',
    text: '为了计算准确，请输入参会者的平均年薪总额或时薪估算值。',
  },
  {
    name: '启动计时器',
    text: '会议开始时按下“开始会议”按钮，观察成本实时累计。',
  },
  {
    name: '停止并反思',
    text: '会议结束时暂停计时器。查阅总成本，评估所取得的成果是否值得这笔投入。',
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

export const content: ToolLocaleContent<MeetingCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelAccumulated: '累计成本',
    labelAttendees: '参会人数',
    labelSalary: '平均薪资',
    optAnnual: '年薪总额',
    optHourly: '时薪标准',
    btnStart: '开始会议',
    btnPause: '暂停',
    btnResume: '继续',
    btnReset: '重置',
    currencySymbol: '¥',
    defaultSalary: '300000',
    numberLocale: 'zh-CN',
  },
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '来源',
  bibliography: [
    { name: '停止会议疯狂 (哈佛商业评论)', url: 'https://hbr.org/2017/07/stop-the-meeting-madness' },
    { name: '工作中的时间浪费 (Atlassian)', url: 'https://www.atlassian.com/time-wasting-at-work-infographic' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '为什么要将会议成本可视化？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '时间是任何组织中最昂贵且最不可再生的资源。此工具并非为了阻碍协作，而是为了培养<strong>效率意识</strong>。当我们看到金额每秒跳动时，我们会变得更加守时、言简意赅，并更加谨慎地制定会议议程。',
    },
    {
      type: 'card',
      title: '隐藏成本的计算逻辑',
      html: '<p>我们根据年薪总额或时薪计算成本。对于年薪，我们采用行业标准的<strong>每年 1,750 个工作小时</strong>（扣除假期和法定假日）来将薪资转换为时薪。</p><p>成本计算公式为：<br><code>(时薪 × 参会人数) / 3600</code><br>这得出了计时器显示的精确每秒成本。</p>',
    },
    {
      type: 'code',
      code: '平均年薪: ¥350,000\n时薪换算: ¥350,000 / 1,750 = ¥200/时\n消耗率 (4人): (200 × 4) / 3600 = ¥0.22/秒\n一小时会议成本: ¥800',
    },
    {
      type: 'title',
      text: '提升会议效率的小贴士',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>两张披萨原则：</strong> 由杰夫·贝佐斯推广——如果两张披萨不够喂饱会议上的所有人，说明参会人数太多了。',
        '<strong>无议程，不会议：</strong> 永远不要接受没有清晰议程和明确目标定义的会议。',
        '<strong>站立会议：</strong> 保持每日同步会站着开。身体的不适感会促使发言简练，让讨论更有针对性。',
        '<strong>帕金森定律：</strong> 工作会自动膨胀，直至占满所有可用的时间。设定强硬的 25 分钟或 50 分钟时段，而不是默认的一小时。',
      ],
    },
    {
      type: 'tip',
      html: '<strong>将计时器作为现场提示：</strong> 在团队会议期间共享运行会议成本计时器的屏幕。可见的金额会产生一种自然的激励，促使大家紧紧围绕主题并准时结束。',
    },
  ],
};
