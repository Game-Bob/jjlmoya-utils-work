import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MeetingCostCalculatorUI } from '../ui';

const slug = 'meeting-cost-calculator';
const title = '会議コスト計算リアルタイムカウンター';
const description =
  '会議にどれだけの費用がかかっているかをリアルタイムで確認。参加人数と平均給与を入力するだけで、1秒ごとに金額が増えていく様子を可視化します。';

const faqData = [
  {
    question: '会議のコストを測定することにどのようなメリットがありますか？',
    answer:
      '会議時間に具体的な金額を割り当てることで、生産性に対する意識が高まります。不要な会議の削減、時間の厳守を促し、議論されている内容がチームの経済的投資に見合っているかを確認するのに役立ちます。',
  },
  {
    question: 'リアルタイムのコストはどのように計算されますか？',
    answer:
      '各参加者の推定年収または時給に基づき、1秒あたりの消費額を算出します。カウンターはアニメーションフレームごとに更新され、累積コストをリアルタイムで表示します。',
  },
  {
    question: 'このツールに含まれていない間接コストは何ですか？',
    answer:
      'この計算機は直接的な人件費に焦点を当てています。機会費用（その時間に他のことができたはずの損失）や、オフィスの賃料、ソフトウェアのライセンス料、光熱費などの固定費は含まれません。',
  },
  {
    question: '会議のコストを削減するにはどうすればよいですか？',
    answer:
      '明確なアジェンダの定義、必須メンバー以外の参加者の制限、厳格な時間制限の設定を行い、チャットやメールなどの非同期コミュニケーションで代用できないかを検討します。',
  },
];

const howToData = [
  {
    name: '参加人数を入力する',
    text: '現在会議に参加している人数を入力してください。',
  },
  {
    name: '平均給与を設定する',
    text: '正確な計算のために、参加者の平均的な年間総支給額または時給の推定値を入力します。',
  },
  {
    name: 'カウンターを開始する',
    text: '会議が始まったら「会議開始」ボタンを押し、リアルタイムで加算されるコストを確認します。',
  },
  {
    name: '停止して振り返る',
    text: '会議が終了したらカウンターを一時停止します。総コストを見直し、得られた成果が投資に見合っていたかを評価します。',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<MeetingCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelAccumulated: '累積コスト',
    labelAttendees: '参加者人数',
    labelSalary: '平均給与',
    optAnnual: '年間総支給額',
    optHourly: '時給額',
    btnStart: '会議開始',
    btnPause: '一時停止',
    btnResume: '再開',
    btnReset: 'リセット',
    currencySymbol: '¥',
    defaultSalary: '6000000',
    numberLocale: 'ja-JP',
  },
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '出典',
  bibliography: [
    { name: 'Stop the Meeting Madness (Harvard Business Review)', url: 'https://hbr.org/2017/07/stop-the-meeting-madness' },
    { name: 'Time Wasting at Work (Atlassian)', url: 'https://www.atlassian.com/time-wasting-at-work-infographic' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '会議コストを可視化すべき理由',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '時間は組織において最も高価で、かつ再生不可能なリソースです。このツールはコラボレーションを否定するためのものではなく、<strong>生産性への意識</strong>を高めるために設計されました。リアルタイムで費用が消費される様子を見ることで、参加者はより時間を守り、簡潔に話し、アジェンダの内容を精査するようになります。',
    },
    {
      type: 'card',
      title: 'コスト計算の仕組み',
      html: '<p>年間総支給額または時給に基づいてコストを算出します。年収の場合、業界標準の<strong>年間1,750労働時間</strong>（休暇や祝日を考慮）を基準として、給与を時給に換算します。</p><p>1秒あたりの消費額の計算式は以下の通りです：<br><code>(時給 × 参加人数) / 3600</code><br>これにより、カウンターに表示される正確な秒単位のコストが得られます。</p>',
    },
    {
      type: 'code',
      code: '年収: 6,000,000円\n時給換算: 6,000,000 / 1,750 = 約3,428円/時\n消費率 (4名): (3,428 × 4) / 3600 = 約3.80円/秒\n1時間の会議コスト: 約13,712円',
    },
    {
      type: 'title',
      text: '効率的な会議のためのヒント',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>2枚のピザのルール：</strong> ジェフ・ベゾスが提唱。2枚のピザで全員のお腹を満たせないなら、参加者が多すぎるという考え方。',
        '<strong>アジェンダなしなら会議なし：</strong> 明確なアジェンダと定義された目標がない会議は決して受け入れないようにしましょう。',
        '<strong>スタンディング・ミーティング：</strong> 毎日のミーティングを立った状態で行います。肉体的な疲労感が議論を簡潔にする動機になります。',
        '<strong>パーキンソンの法則：</strong> 仕事は、完了するために割り当てられた時間を満たすまで膨張します。デフォルトの1時間ではなく、25分や50分といった短い枠を設定しましょう。',
      ],
    },
    {
      type: 'tip',
      html: '<strong>ライブカウンターを意識付けに使用する：</strong> 会議中に画面共有でコスト計算カウンターを表示させてください。視覚化された金額が、トピックから逸れないための自然なインセンティブになります。',
    },
  ],
};
