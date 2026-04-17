import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IrpfCalculatorUI } from '../ui';

const slug = 'irpf-calculator-spain';
const title = 'IRPF計算機 2026: スペイン純給与シミュレーター';
const description =
  '2026年のスペインにおける月間および年間の手取り給与を計算します。州、地方自治体、MEIのスケール、および家族状況を反映した最新のシミュレーターです。';

const faqData = [
  {
    question: '2026年のMEIは手取り給与にどのように影響しますか？',
    answer:
      '世代間公平性メカニズム（MEI）は、年金の持続可能性を確保するために2026年に0.90%に引き上げられます。大部分は雇用主が負担しますが、従業員も拠出割合に応じて手取り給与が減少します。',
  },
  {
    question: 'マドリードとカタルーニャで手取り給与が異なるのはなぜですか？',
    answer:
      'IRPF（個人所得税）は、50%が自治州に委譲されている税金です。マドリードは州のスケールよりも低い税率を適用していますが、カタルーニャは独自のスケールを持っており、初期の源泉徴収額が高くなる場合があります。',
  },
  {
    question: '限界税率とは何ですか？私にどう影響しますか？',
    answer:
      '限界税率とは、最後に稼いだ1ユーロに対してかかる税金の割合のことです。昇給やボーナスが税金面で実際にどれくらいのコストになるかを示しています。',
  },
  {
    question: '月間の計算には何回の給与支払い回数を選択すべきですか？',
    answer:
      '通常、12回または14回（夏とクリスマスのボーナスを含む）の給与支払いを受け取ります。会社が採用しているオプションを選択して、実際の月間の手取り収入を確認してください。',
  },
  {
    question: 'この計算機は確定申告に信頼できますか？',
    answer:
      'このツールは2026年の規定に基づいた概算を提供します。月々の源泉徴収は近似値であり、最終的な実際の結果は6月の確定申告で決定されます。',
  },
];

const howToData = [
  {
    name: '総給与を入力する',
    text: '控除や源泉徴収が行われる前の、契約書に記載されている年間の総額を入力します。',
  },
  {
    name: '個人の状況を定義する',
    text: '子供の数、認定された障害の有無、および配偶者の有無を指定して、法的非課税枠を適用します。',
  },
  {
    name: '自治州を選択する',
    text: '納税地によって適用される地方税のスケールが決まり、最終的な手取り収入に影響します。',
  },
  {
    name: '内訳を確認する',
    text: 'IRPFや社会保障にいくら支払われ、実際の月間および年間の手取り給与がいくらになるかを確認します。',
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

export const content: ToolLocaleContent<IrpfCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    titleVariables: '計算変数',
    titleCalculo: '2026年 透明な計算',
    labelBruto: '年間総給与 (€)',
    labelPagas: '給与支払い回数',
    labelComunidad: '納税地',
    labelHijos: '子供（25歳未満）',
    labelDiscapacidad: '障害等級',
    labelUnidad: '家族世帯または同居',
    opt12pagas: '12回払い',
    opt14pagas: '14回払い',
    optGen: '共通領土（一般）',
    optMad: 'マドリード',
    optCat: 'カタルーニャ',
    optAnd: 'アンダルシア',
    optVal: 'バレンシア州',
    optPV: 'バスク州（特別令）',
    optNav: 'ナバラ州（特別令）',
    optNinguna: 'なし',
    opt33: '> 33%',
    opt65: '> 65%',
    optSoltero: '独身、離婚、または死別',
    optCasadoLow: '既婚（配偶者の年収が1,500€未満）',
    optCasadoHigh: '既婚（配偶者に所得あり）',
    labelSalarioBruto: '総給与',
    labelSS: '社会保障 / MEI (-)',
    labelGastos: '控除対象費用（第20条）',
    labelNetoAnual: '年間手取り給与',
    labelRetencionIRPF: 'IRPF源泉徴収率 (%)',
    labelNetoMensual: '月間使用可能手取り額',
    labelMarginal: '適用された限界税率',
    resultRetention: 'IRPF源泉徴収率 (%)',
    resultAnual: '/ 年',
    infoText:
      '2026年に向けて検証されたAEATアルゴリズム（総税額 - 最低税額）を使用。6.47%のMEI拠出と就業所得控除を含みます。jjlmoya.es',
  },
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '出典',
  bibliography: [
    {
      name: '税務署: IRPF',
      url: 'https://sede.agenciatributaria.gob.es/Sede/irpf.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'IRPF計算機 2026: 新しい税務シナリオの完全ガイド',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '個人所得税（IRPF）はスペインの税制において最も関連性の高い賦課金であり、数百万人の労働者の月々の給与明細に直接影響を与えます。2026年には、世代間公平性メカニズム（MEI）の引き上げや、さまざまな自治州での税率のデフレ調整など、進歩性と新しい経済情勢への適応を目的としたさまざまな改革の統合が見られます。',
    },
    {
      type: 'paragraph',
      html: '当社の<strong>2026年用IRPF計算機</strong>は、実際に銀行口座に振り込まれる額について正確で最新の視点を提供するように設計されています。手取り給与の計算は、単に固定の割合を差し引くことではありません。個人の状況、扶養家族、障害、そして非常に重要なことに、納税地を考慮した数学的なプロセスです。なぜなら、スペインの各地域は地方税の区分に対して権限を持っているからです。',
    },
    {
      type: 'title',
      text: '2026年の給与明細で何が変わりますか？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'シミュレーション結果を理解するために、今年の源泉徴収計算の柱を知ることが重要です。',
    },
    {
      type: 'list',
      items: [
        '<strong>MEIの影響:</strong> 年金を保証するための世代間公平性メカニズムは上昇を続けており、2026年には0.90%に達します。大部分は雇用主が支払いますが、従業員の拠出額は約0.15%に増加し、手取り収入がわずかに減少します。',
        '<strong>SMIと控除:</strong> 最低賃金（SMI）がバリアとして機能します。低所得層は、総給与の増加が源泉徴収税の増加によって吸収されないように、拡大された就業所得控除の恩恵を受けます。',
        '<strong>地方区分:</strong> マドリード、アンダルシア、ムルシアなどの地域は通常、州平均よりも低い税率を適用しますが、カタルーニャやバレンシア州は独自のスケールを持ち、所得水準が高い場合に源泉徴収額が増加することがあります。',
      ],
    },
    {
      type: 'title',
      text: '手取り給与を理解するための重要な概念',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>課税標準額 vs. 総給与:</strong> 稼いだ額すべてに対して税金を支払うわけではありません。IRPFが適用される基準は、総給与から社会保障拠出金（約6.45%）と、証明が困難な費用に対する一般的な控除（年間2,000ユーロ）を差し引いた結果です。この結果に、さらに非課税枠が適用されます。',
    },
    {
      type: 'title',
      text: '基本用語',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>限界税率:</strong> 最後に稼いだ1ユーロに対する税率。昇給やボーナスが実際にどれくらいの税負担になるかを知るために重要です。',
        '<strong>基礎控除（Vital Minimum）:</strong> 納税者とその家族の基本的なニーズを満たすために不可欠であると国がみなす所得で、そのため非課税となります。',
        '<strong>給与源泉徴収:</strong> 雇用主が確定申告の結果を見越して、あなたの代わりに毎月税務署に納付する前納金です。',
        '<strong>純所得:</strong> 総給与から、税法で認められた社会保障拠出金と控除対象費用を差し引いた額です。',
      ],
    },
    {
      type: 'title',
      text: 'IRPF源泉徴収を最適化する方法',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '多くの労働者は、雇用主に源泉徴収を増やすべきか減らすべきか尋ねるべきか迷います。現実には、源泉徴収は税務署への「前払い」です。年間を通じて少なすぎる源泉徴収を受けていた場合、確定申告で支払いが発生する可能性があり、多すぎた場合は還付を受けられます。',
    },
    {
      type: 'paragraph',
      html: '<strong>税率区分の飛び越え神話:</strong> 高い区分に移ると手取りが減るという神話がありますが、これは間違いです。IRPFは累進課税です。区分の制限を超えた所得のみが高い税率で課税されます。区分が上がって限界税率が高くなったとしても、総給与の昇給によって手取りが減ることは決してありません。',
    },
    {
      type: 'paragraph',
      html: '<strong>家族へのヒント:</strong> 子供の誕生や家族の障害状況の変化については、フォーム145を使用して正しく報告していることを確認してください。これにより月々の源泉徴収が調整され、6月の確定申告での不測の事態を防ぐことができます。',
    },
    {
      type: 'title',
      text: '自治州による違い',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'スペインの財政分権化により、同じ給与で同じ家族状況の2人でも、トレドに住んでいるかバルセロナに住んでいるかによって手取り収入が異なります。自治州は税金の半分（地方区分）をコントロールしています。例えば、マドリードはほぼすべての所得水準で最も低い税率を設定していることで知られていますが、他の地域では家賃や子供の教育費に対する全国的には利用できない控除を適用している場合があります。当社の計算機は、場所に基づいた最も現実的な数値を提供するために、これらの変動を考慮しています。',
    },
    {
      type: 'paragraph',
      html: '結論として、<strong>2026年手取り給与シミュレーション</strong>は基本的な財務計画ツールです。実際の貯蓄能力を知り、収入のどの部分が公共サービスを支えているかを理解することで、投資、住宅ローン、または転職について十分な情報に基づいた意思決定が可能になります。',
    },
  ],
};
