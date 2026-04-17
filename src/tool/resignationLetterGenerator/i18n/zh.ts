import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResignationLetterGeneratorUI } from '../ui';

const slug = 'resignation-letter-generator-zh';
const title = '专业辞职信在线生成器';
const description =
  '在几秒钟内创建您的个性化辞职信。提供专业的模板，可直接复制或立即下载为 PDF 格式。';

const faqData = [
  {
    question: '我需要提前多少天提交辞职申请？',
    answer:
      '根据《中国劳动合同法》，在转正后，员工通常需要提前 30 天以书面形式通知用人单位。如果在试用期内，通常只需提前 3 天通知。',
  },
  {
    question: '离职时我有权结清工资和补偿吗？',
    answer:
      '是的。用人单位应当在解除或者终止劳动合同时一次付清劳动者工资。此外，未休完的年休假应当折现支付。除非是解除劳动合同的法定情形，自发辞职通常没有经济补偿金。',
  },
  {
    question: '辞职后可以撤回吗？',
    answer:
      '辞职信一经递交并送达公司（或被公司签署确认），即产生法律效力。撤回辞职申请通常需要得到公司的书面同意，因此请在递交前慎重考虑。',
  },
  {
    question: '辞职信一定要手写吗？',
    answer:
      '法律上没有强制要求手写。打印后的纸质版并亲笔签名与手写信具有同等的法律效力。关键在于确保公司留存了您的签名版原件或有收据记录。',
  },
];

const howToData = [
  {
    name: '填写个人信息',
    text: '输入您的全名、主管或 HR 的称呼以及公司名称。',
  },
  {
    name: '设定最后工作日',
    text: '选择您的离职日期，确保符合合同约定的通知期。',
  },
  {
    name: '选择辞职原因',
    text: '选择最适合您当前情况的原因类型，以自动化生成得体的正文内容。',
  },
  {
    name: '复制或下载',
    text: '点击按钮将文本复制到剪贴板，或直接下载为 PDF 文件。',
  },
];

const bibliography = [
  {
    name: '中华人民共和国劳动合同法',
    url: 'https://www.gov.cn',
  },
  {
    name: '人社部 - 离职管理相关规定',
    url: 'https://www.mohrss.gov.cn',
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

export const content: ToolLocaleContent<ResignationLetterGeneratorUI> = {
  slug,
  title,
  description,
  ui: {
    labelUserName: '您的姓名',
    labelManagerName: '经理或 HR 的姓名',
    labelManagerGender: '称谓',
    labelCompanyName: '公司名称',
    labelLastDay: '最后工作日（离职日期）',
    labelReasonType: '辞职原因类型',
    labelCity: '所在城市',
    optGenderNeutral: '尊敬的（通用）',
    optGenderM: '先生（男士）',
    optGenderF: '女士（女士）',
    optReasonStandard: '标准原因（职业且委婉）',
    optReasonOpportunity: '新的职业发展机会',
    optReasonPersonal: '个人/家庭原因',
    optReasonEducation: '深造/学术深造',
    optReasonGrowth: '内部成长空间有限',
    optReasonDirect: '直接且简短（不提供解释）',
    btnCopy: '复制信件内容',
    btnDownload: '下载 PDF',
    copyFeedback: '内容已复制到剪贴板',
    defaultUserName: '张三',
    defaultManagerName: '李经理',
    defaultCompanyName: '某某科技有限公司',
    defaultCity: '北京',
    dateLocale: 'zh-CN',
    datePrefix: '',
    managerPrefix: '致：',
    managerFallback: '人力资源部',
    companyFallback: '公司名称',
    salutationNeutral: '尊敬的',
    salutationM: '先生',
    salutationF: '女士',
    salutationFallback: '负责人',
    signatureFallback: '员工签名',
    thanksParagraph:
      '我非常感谢在公司工作期间所获得的职业成长机会和个人锻炼平台。',
    transitionParagraph:
      '我会全力支持工作交接流程，确保在该日期前完成所有职责和未竞事项的无缝移交。',
    closingWord: '此致，敬礼',
    reasonStandard:
      '我由于个人职业规划的原因，现正式提出辞职申请。根据劳动合同约定，我的最后工作日将是 [DATE]。',
    reasonOpportunity:
      '我写这封信旨在通知您我辞职的决定。由于接受了一个新的职业发展机会，我将于 [DATE] 正式离职。',
    reasonPersonal:
      '由于近期需要处理私人事务，我决定辞去目前的职位。我的雇佣关系将于 [DATE] 终止。',
    reasonEducation:
      '我决定重返校园全职深造，因此向公司提出辞职。我的最后服务日期为 [DATE]。',
    reasonGrowth:
      '经过深思熟虑，我决定重塑职业方向，寻求不同领域的成长环境。离职生效日期为 [DATE]。',
    reasonDirect:
      '本人现决定终止劳动合同关系，离职日期定于 [DATE]。',
  },
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考资料',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '如何写一份得体且专业的辞职信',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '决定离职是职业生涯中的重要一步。<strong>递交辞职信</strong>不仅是行政手续，更是您留给组织最后的职业印象。',
    },
    {
      type: 'tip',
      html: '<strong>提示：</strong> 即使与上司关系良好，辞职也<strong>应以书面形式提交</strong>。这标志着法定通知期的正式开始，并保护买卖双方的合法权益。',
    },
    {
      type: 'list',
      items: [
        '明确写出具体的最后工作日',
        '理由建议使用“个人原因”等得体表述',
        '确保抬头指向具体的决策人或部门',
        '下载后手工签署日期',
      ],
    },
    {
      type: 'code',
      code: '[城市, 日期]\n\n致：[经理姓名]\n[公司名称]\n\n辞职报告\n\n尊敬的 [姓名]：\n\n我在此申请辞职。我的最后工作日将是 [日期]。\n\n感谢公司在这一期间对我的培养。\n\n[您的签名]\n日期',
    },
  ],
};
