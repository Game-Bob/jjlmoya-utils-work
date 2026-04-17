import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SalaryCalculatorUI } from '../ui';

const slug = 'salary-calculator-spain';
const title = 'スペイン給与計算機: IRPFおよび社会保障純給与シミュレーター';
const description =
  '毎月実際にいくら稼げるかを確認しましょう。スペインの規制に基づいた源泉徴収、課税標準、および純収入の正確な計算。';

const faqData = [
  {
    question: 'スペインでは純給与はどのように計算されますか？',
    answer:
      '純給与は、総額からIRPF源泉徴収（階層別）および社会保障拠出金（総額の約6.35%）を差し引いて計算されます。IRPFの割合は、個人の状況や給与レベルによって異なります。',
  },
  {
    question: '12回払いと14回払いの違いは何ですか？',
    answer:
      '12回払いでは、ボーナス分が毎月分配されます。14回払いでは、2回のボーナス支払い（通常は6月/7月と12月）を受け取ります。年間総額は同じで、分配方法だけが異なります。',
  },
  {
    question: 'なぜ私の給与明細はこの計算機と正確に一致しないのですか？',
    answer:
      'この計算機は標準的な近似値を使用しています。実際の給与明細は、会社固有の控除、福利厚生、扶養児童、障害、またはIRPFに影響を与える個人の状況により異なる場合があります。',
  },
  {
    question: '私の給与の何パーセントが税務署に徴収されますか？',
    answer:
      '給与によります。一般的に、IRPFと社会保障を合わせて、総額の25%から45%が源泉徴収されます。給与が高いほど、IRPFの累進課税制度により源泉徴収率が高くなります。',
  },
  {
    question: 'IRPFとは何ですか？',
    answer:
      '個人所得税です。累進課税であり、より多く稼ぐ人は給与の高い階層に対してより高い割合を支払います。',
  },
];

const howToData = [
  {
    name: '年間総給与を入力する',
    text: '税金や源泉徴収が行われる前の、契約で合意された総額を入力します。',
  },
  {
    name: '家族状況を設定する',
    text: '子供や扶養家族がいる場合は指定してください。これにより、適用されるIRPFの割合が減少します。',
  },
  {
    name: '給与支払い回数',
    text: '給与を12回払い（ボーナス分配）で受け取るか、14回払いで受け取るかを選択します。',
  },
  {
    name: '月間の内訳を確認する',
    text: '社会保障やIRPFにいくら支払われ、銀行口座に振り込まれる正確な純収入がいくらになるかを確認します。',
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
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<SalaryCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelGross: '年間総給与',
    labelPays: '給与支払い回数',
    btn12: '12回払い',
    btn14: '14回払い',
    labelAge: '年齢',
    labelContract: '契約形態',
    optIndefinite: '無期雇用 / 一般',
    optTemporal: '有期雇用',
    btnCalculate: '純給与を計算',
    labelNetMonthly: '月間純給与',
    labelNetAnnual: '年間純給与',
    labelPaysDisplay: '支払い期間',
    labelBreakdown: '源泉徴収の内訳（概算）',
    labelIRPF: 'IRPF',
    labelSS: '社会保障',
    disclaimer:
      '*子供なし、65歳未満、独身労働者のための簡略化された計算です。',
  },
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '出典',
  bibliography: [],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '私の総給与はどこへ消えてしまうのか？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '初めての仕事で最もよくある驚きです。年俸24,000ユーロの契約を結び、毎月2,000ユーロもらえると思って12で割ってみると、口座には1,600ユーロしか入っていません。残りの400ユーロはどこへ行ったのでしょうか？',
    },
    {
      type: 'paragraph',
      html: 'スペインでは、<strong>額面（Gross）</strong>（会社が支払う額）と<strong>手取り（Net）</strong>（あなたが受け取る額）の差は、主に2つの項目に分配されます：IRPFと社会保障です。これらを理解することは、昇給交渉の鍵となります。',
    },
    {
      type: 'title',
      text: '社会保障：あなたの将来を支える約6.35%',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'これはほぼすべての労働者にとって固定の拠出金です。独身か既婚かには依存しません。この資金で以下が賄われます：',
    },
    {
      type: 'list',
      items: [
        '<strong>一般事由 (4.70%)</strong>：一般的な病気、仕事外の事故による欠勤、年金、および産休をカバーします。',
        '<strong>失業 (1.55% または 1.60%)</strong>：仕事を失った場合に失業手当を請求するための拠出金です。有期契約の場合はわずかに異なります。',
        '<strong>職業訓練 (0.10%)</strong>：補助金付きの訓練コースや再訓練のため。',
      ],
    },
    {
      type: 'title',
      text: 'IRPF：最も痛い税金',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'これは累進課税であり、給与や個人の状況に応じて2%から47%の範囲になります。固定税ではなく、税務署への前払いです。会社は、あなたが来年支払うべき税額を計算し、月ごとに差し引きます。',
    },
    {
      type: 'title',
      text: 'IRPFを下げる要因',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '子供がいること（特に3歳未満）。',
        '認定された障害があること（33%超）。',
        '収入の低い扶養配偶者がいること。',
      ],
    },
    {
      type: 'title',
      text: '国家IRPF階層（2026年概算）',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '€0 - €12,450: 19%',
        '€12,450 - €20,200: 24%',
        '€20,200 - €35,200: 30%',
        '€35,200 - €60,000: 37%',
        '> €60,000: 45%',
      ],
    },
    {
      type: 'title',
      text: '永遠の疑問：12回払いか14回払いか？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '多くの労働者は、夏とクリスマスの臨時支払いのために14回払いを好みます。他の人は、給与を12ヶ月に分散させることを好みます（または会社が強制します）。数学的には、年間で稼ぐ額は全く同じです。',
    },
    {
      type: 'list',
      items: [
        '<strong>12回払い</strong>：毎月の手取りは多くなりますが、ボーナスはありません。一定の月間キャッシュフローを好む場合に適しています。',
        '<strong>14回払い</strong>：毎月の手取りは少し少なくなりますが、年に2回、2倍の支払いを受け取ります。「強制貯金」のように機能します。',
      ],
    },
  ],
};
