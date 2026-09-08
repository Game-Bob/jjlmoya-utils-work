import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { InvoiceLateFeeCalculatorUI } from '../ui';

const slug = 'invoice-late-fee-calculator';
const title = '請求書の遅延料金計算機';
const description = '未払い請求書の金額、猶予期間、契約で合意した料率から、シンプルな遅延料金を計算します。対象日数、料金、請求合計をわかりやすく確認できます。';

const faq = [
  { question: '請求書の遅延料金はどのように計算されますか？', answer: '支払期日から計算日までの暦日数から猶予日数を引きます。年率または月率の場合は、合意したパーセントを対象日数に応じて按分します。一回限りの料率は、猶予期間が終わった後に一度だけ適用されます。' },
  { question: '法定の遅延利率を使えますか？', answer: '利率を確認し、契約または適用される法律が使用を認めている場合は使えます。利率は自分で入力してください。このツールは国を選択したり、法定利率を推測したり、料金を請求できるか判断したりしません。' },
  { question: '猶予期間で何が変わりますか？', answer: '支払期日の後、料金が始まる前の猶予日数を対象期間から除外します。請求書がまだ猶予期間内なら、遅延料金はゼロのままで、猶予中であることが表示されます。' },
  { question: '合計に税金、回収費用、複利は含まれますか？', answer: 'いいえ。結果は選択した通貨の元金に、入力から計算した単純な料金を加えたものです。通貨変更には固定の目安係数を使い、リアルタイム為替レートは使いません。税金、固定回収費用、法務費用、複利、支払履歴は含まれません。' },
];

const howTo = [
  { name: '請求書の金額を入力する', text: '未払いの元金を入力し、請求書の通貨を選択します。後で通貨を変更すると、表示された目安係数で換算されます。リアルタイムの為替レートではありません。' },
  { name: '日付を設定する', text: '契約上の支払期日と、確認したい計算日を選択します。2つの日付の間にある完全な暦日を数えます。' },
  { name: '猶予と料率を入力する', text: '猶予日数と請求書に合意されたパーセントを入力します。年率、月率、一回限りの料金から選択します。' },
  { name: '結果の明細を確認する', text: '支払期日からの日数、対象日数、遅延料金、合計を確認します。明細を請求書と一緒に保存し、請求する前に契約を確認してください。' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const applicationSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'BusinessApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' }, inLanguage: 'ja' };

export const content: ToolLocaleContent<InvoiceLateFeeCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    eyebrow: '支払遅延請求書 / シンプルな明細',
    intro: '過ぎた支払期日を、わかりやすい請求に変えます。',
    sectionTerms: '請求書の条件を設定',
    labelAmount: '未払いの請求金額',
    labelCurrency: '請求書の通貨',
    currencyConversionHint: '通貨を変更すると、リアルタイム為替ではなく固定の目安係数で金額を換算します。',
    currencyRateTemplate: '1 EUR ≈ {value} {currency}。',
    labelDueDate: '契約上の支払期日',
    labelCalculationDate: '計算する日',
    labelGraceDays: '猶予期間',
    labelRate: '合意した遅延料金率',
    labelRatePeriod: '料率の期間',
    rateAnnual: '年',
    rateMonthly: '月',
    rateOneTime: '一回',
    sectionReceipt: '請求明細',
    labelDaysSinceDue: '支払期日からの日数',
    labelChargedDays: '対象日数',
    labelAppliedRate: '適用料率',
    labelLateFee: '遅延料金',
    labelTotalDue: '請求する合計',
    statusNotDue: '支払期日前',
    statusGrace: '猶予期間中',
    statusOverdue: '遅延料金が発生中',
    timelineDue: '支払期日',
    timelineToday: '確認日',
    timelineGrace: '猶予後の対象日数',
    noteDisclaimer: '入力内容による簡易計算です。請求前に契約、管轄、税務上の扱い、固定回収費用を確認してください。',
    buttonReset: '保存した条件を消去',
    numberLocale: 'ja-JP',
  },
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, applicationSchema],
  seo: [
    { type: 'title', text: '遅延した請求書をわかりやすく説明する', level: 2 },
    { type: 'paragraph', html: '支払請求は、元金、日付、猶予期間、料率、料金が一か所で確認できると見直しやすくなります。この計算機は契約条件をレシート形式の明細にまとめます。' },
    { type: 'card', title: 'シンプルな計算式', html: '<p><strong>対象日数</strong> = 支払期日から計算日までの日数 - 猶予日数。</p><p><strong>遅延料金</strong> = 請求金額 × 料率 ÷ 100 × 期間係数。年率は対象日数 ÷ 365、月率は対象日数 ÷ 30、一回限りの料率は猶予後に一度適用します。</p>' },
    { type: 'paragraph', html: 'この計算は意図的に明示的で、法定利率を自動選択しません。契約によって固定料金、年率、異なる日数計算が定められている場合があります。通貨換算は選択した係数による目安であり、リアルタイムの為替情報ではありません。契約が異なる場合は条項を確認し、このツールの外で計算を調整してください。' },
    { type: 'title', text: '請求前に結果を確認する', level: 2 },
    { type: 'code', code: '請求書: 125,000 円\n確認まで: 38 日\n猶予期間: 5 日\n年率: 10%\n対象日数: 33 日\n遅延料金: 125,000 × 0.10 × 33 / 365 = 1,130 円\n合計: 126,130 円' },
    { type: 'list', items: ['支払期日を注文書、請求書、署名済み契約と照合します。', '想定した支払日ではなく、実際に請求を準備する日を使います。', '受取人が両方の金額を照合できるよう、元金と遅延料金を分けて表示します。', '税金、固定回収費用、法定上限によって請求額が変わらないか確認します。'] },
    { type: 'tip', html: '<strong>証拠を残すコツ:</strong> 請求書、納品または受領の証拠、契約条項、この計算を一緒に保存してください。このツールは計算を説明しますが、債務の支払期日や料金の請求可能性を証明するものではありません。' },
  ],
};
