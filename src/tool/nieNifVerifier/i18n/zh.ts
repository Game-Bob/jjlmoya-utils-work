import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NieNifVerifierUI } from '../ui';

const slug = 'nie-nif-verifier-spain';
const title = '西班牙 NIE/NIF/CIF 验证器：西班牙税务 ID 校验工具';
const description =
  '免费验证西班牙 NIF（公民身份证）、NIE（外国人身份号）和 CIF（公司税号）的有效性。校验控制位和官方格式。';

const faqData = [
  {
    question: '在此工具中输入我的 NIF 或 NIE 安全吗？',
    answer:
      '是的，非常安全。验证过程完全使用 JavaScript 在您的浏览器中运行。您的数据永远不会被发送到任何服务器或存储在任何数据库中。',
  },
  {
    question: 'NIF 和 CIF 有什么区别？',
    answer:
      'NIF（纳税人识别号）是目前所有税务 ID 的总称。然而，人们仍习惯用 CIF（税务识别码）来指代法人实体（公司和组织）的 NIF。',
  },
  {
    question: '如果我不知道最后一位字母，如何判断 NIF 是否有效？',
    answer:
      '在我们的验证器中输入 8 位数字，它会显示对应的校验字母。算法通过将数字部分除以 23 来计算精确的字母。',
  },
  {
    question: '此工具支持以 Y 或 Z 开头的 NIE 号码吗？',
    answer:
      '是的，我们的验证器支持所有 NIE 格式：包括以 X 开头的旧格式，以及以 Y 或 Z 开头的新格式，均应用官方的数值转换规则。',
  },
  {
    question: '它能验证该号码是否真的存在于税务局系统中吗？',
    answer:
      '不能。此工具执行的是算法和数学层面的验证。它确认号码是否符合法定结构和正确的校验位，但不查核税务局（Agencia Tributaria）的真实注册状态。',
  },
];

const howToData = [
  {
    name: '找到标识符',
    text: '在身份证件（DNI、居留证或税务识别卡）上找到字母数字代码。',
  },
  {
    name: '输入代码',
    text: '在文本框中输入 NIF、NIE 或 CIF。无需担心空格或连字符。',
  },
  {
    name: '查看结果',
    text: '工具将立即分析结构是否有效以及校验字符是否匹配。',
  },
  {
    name: '复制结果',
    text: '如果代码有效，您可以直接复制并粘贴到您的发票、合同或行政表格中。',
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

export const content: ToolLocaleContent<NieNifVerifierUI> = {
  slug,
  title,
  description,
  ui: {
    labelInput: '输入西班牙税务标识符',
    placeholder: '45938210Y',
    typeNIF: 'NIF / DNI',
    typeNIE: 'NIE',
    typeCIF: 'CIF',
    msgValidSuffix: '有效',
    msgInvalidControl: '校验位错误',
    msgInvalidNIEControl: '控制字符错误',
    msgInvalidCIF: '组合不正确',
    msgIncomplete: '未完成',
  },
  faqTitle: '常见问题',
  faq: faqData: '参考资料',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '在西班牙验证 NIF、NIE 和 CIF 的重要性',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在西班牙的行政和商务生态中，税务识别是所有交易、合同和公共事务的基石。无论您是开具发票的自由职业者，还是管理供应商的公司，或是个体采购商，一个可靠的 <strong>NIF、NIE 和 CIF 验证器</strong> 都是避免行政错误和潜在欺诈的必备工具。',
    },
    {
      type: 'title',
      text: '什么是 NIF、NIE 和 CIF？核心区别',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>NIF (Número de Identificación Fiscal):</strong> 西班牙税务识别的总称。对于西班牙国民，NIF 与 DNI 号码一致，后跟一个校验字母（8 位数字 + 1 位字母）。',
        '<strong>NIE (Número de Identidad de Extranjero):</strong> 在西班牙有税务活动的非西班牙籍个人的识别码。以 X、Y 或 Z 开头，后跟 7 位数字和 1 位校验字母。',
        '<strong>CIF (Código de Identificación Fiscal):</strong> 法人实体（公司、协会）NIF 的常用名称。由一个表示组织类型的字母 + 7 位数字 + 1 位校验数字或字母组成。',
      ],
    },
    {
      type: 'title',
      text: '校验算法的工作原理',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '对于 NIF/DNI，最后一位字母是通过将数字部分除以 23（取模 23）并映射到序列 <strong>TRWAGMYFPDXBNJZSQVHLCKE</strong> 中获得的。对于 CIF，则通过加权求和规则来验证控制位。整个计算在毫秒级内即可完成。',
    },
    {
      type: 'title',
      text: '准确验证的建议',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '如果验证器显示错误，请检查是否混淆了数字 0 和字母 O —— 这是 NIE 中非常常见的错误。',
        '对于 CIF，请务必包含标识实体类型的首位字母（如 A=匿名公司 S.A., B=有限责任公司 S.L. 等）。',
        '此工具检查的是数学上的有效性，而非该号码是否在税务局普查中处于激活状态。',
      ],
    },
    {
      type: 'tip',
      html: '<strong>隐私保障：</strong> 验证过程完全在您的浏览器本地运行。您输入的号码绝不会被发送到任何外部服务器。',
    },
  ],
};
