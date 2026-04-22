import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EarlyRetirementSimulatorUI } from '../ui';

const slug = 'early-retirement-simulator-spain';
const title = 'スペイン早期退職シミュレーター: あなたの年金を計算しましょう';
const description =
  '退職年齢、削減係数、および予測される年金額を無料で計算します。スペインの自発的および非自発的早期退職に対応した最新のシミュレーター。';

const faqData = [
  {
    question: 'スペインの早期退職の最低年齢は何歳ですか？',
    answer:
      '自発的な早期退職の場合、最低年齢は法定年齢の2年前（拠出額に応じて通常63歳または65歳）です。非自発的な退職の場合は、最大4年前（61歳または63歳）まで可能です。',
  },
  {
    question: '拠出期間は何年必要ですか？',
    answer:
      '自発的な早期退職には、少なくとも35年間の実効拠出期間が必要です。非自発的または強制的な退職の場合、最低33年間必要です。',
  },
  {
    question: '早期退職することでいくら失うことになりますか？',
    answer:
      '削減額は、退職を早める月数と合計拠出年数によって異なります。削減率は、1ヶ月前倒しの2.81%から、自発的な2年前倒しの場合の最大約21%までの範囲になります。',
  },
  {
    question: '失業期間は退職金計算に含まれますか？',
    answer:
      'はい。失業手当（paro）の受給期間は、SEPEが社会保障局へ対応する拠出を行うため、退職金計算に含まれます。',
  },
];

const howToData = [
  {
    name: '生年月日を入力する',
    text: 'これにより、2026年に施行されている規制に基づいた法定の通常退職年齢が決まります。',
  },
  {
    name: '拠出年数を推定する',
    text: '雇用、自営業、および拠出型失業期間を含めます。',
  },
  {
    name: '退職の種類を選択する',
    text: '正しい係数を適用するために、自発的な退職か強制的な退職かを選択します。',
  },
  {
    name: '推定年金額を確認する',
    text: '適用された削減額と、仕事を辞めることができる正確な日付を確認します。',
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
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<EarlyRetirementSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelBirthYear: '生年',
    labelContributions: '拠出年数',
    labelBasePension: '月間総額基礎',
    labelRetirementAge: '退職年齢',
    labelExpectedDate: '予定日',
    labelEstimatedPension: '推定年金額',
    labelPermanentReduction: '恒久的削減',
    labelYears: '年',
    btnLegalTitle: '標準',
    btnLegalDesc: '法定退職年齢。削減なし。基礎額の100%。',
    btnVoluntaryTitle: '自発的早期',
    btnVoluntaryDesc: '個人的な選択による退職。月次削減が適用されます。',
    btnInvoluntaryTitle: '非自発的 / ERE',
    btnInvoluntaryDesc: '強制終了。より有利な係数が適用されます。',
    defaultBirthYear: '1975',
    defaultContributions: '30',
    defaultBasePension: '2500',
    adviceDefault: 'スライダーを動かして退職のスケジュールを予測しましょう。',
    adviceDefaultWithParams: 'スライダーを動かして退職のスケジュールを予測しましょう。',
    adviceDelay:
      '退職を <strong>[AGE]</strong> 歳まで遅らせると、月額約 <strong>[GAIN] ユーロ</strong> 多く受け取ることができます。',
    adviceBonus: '遅延ボーナスが加算されています。年金額は基礎額の100%を超えます。',
    adviceOptimal: '100%の権利を持つ、最適な標準年齢に達しました。',
  },
  faqTitle: 'よくある質問',
  faq: faqData: '出典',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'スペイン早期退職シミュレーター：2026年ガイド',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>早期退職</strong>は、スペインで働く人々にとって最大の経済的懸念事項の一つです。いつ仕事を辞めることができるか、そして何よりも削減係数によってどれだけの資金を失うことになるかを理解することは、健全な将来設計に不可欠です。',
    },
    {
      type: 'list',
      items: [
        '<strong>標準法定年齢：</strong> 67歳（または十分な拠出がある場合は65歳）。',
        '<strong>自発的早期退職：</strong> 法定年齢の最大2年前まで。',
        '<strong>非自発的早期退職：</strong> 最大4年前まで（解雇やその他の理由による）。',
        '<strong>削減係数：</strong> 年金に対する恒久的な月次削減。',
        '<strong>拠出要件：</strong> 自発的退職は最低35年、強制退職は33年。',
      ],
    },
    {
      type: 'title',
      text: 'スペインで合法的に退職できるのは何歳からですか？',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>65歳ルート：</strong> 38年6ヶ月以上の拠出がある場合、基礎額の100%で65歳で退職できます。',
        '<strong>67歳ルート：</strong> 拠出がその基準を下回る場合、標準退職年齢は67歳になります。',
        '<strong>兵役：</strong> 義務兵役または社会奉仕活動は、最大1年間の拠出として加算される場合があります。',
      ],
    },
    {
      type: 'title',
      text: '自発的早期退職',
      level: 2,
    },
    {
      type: 'card',
      title: '自発的早期退職の要件',
      html: '<ul><li>標準法定年齢の2歳下であること。</li><li>最低35年間の実効拠出期間があること。</li><li>受け取る年金額が最低年金額を上回ること。</li></ul>',
    },
    {
      type: 'title',
      text: '削減係数：早期退職のコスト',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>拠出期間38.5年未満：</strong> 最大21%の削減（2年前倒し）。',
        '<strong>38.5年以上41.5年未満：</strong> 最大約19%の削減。',
        '<strong>41.5年以上44.5年未満：</strong> 最大約17%の削減。',
        '<strong>44.5年以上：</strong> 最大約15%の削減。',
      ],
    },
    {
      type: 'tip',
      html: '<strong>重要なヒント：</strong> 早期退職をわずか1ヶ月遅らせるだけで、削減係数に大きな差が出ることがあります。月ごとの区切りの境界に近い場合は、あと数日待つことの利点を必ず検討してください。',
    },
    {
      type: 'title',
      text: '非自発的または強制的な早期退職',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>最大前倒し：</strong> 標準年齢の4年前（48ヶ月前）まで。',
        '<strong>拠出要件：</strong> 33年。',
        '<strong>条件：</strong> 退職の少なくとも6ヶ月前から求職者登録をしている必要があります。',
        '<strong>係数：</strong> 自発的な場合よりも有利ですが、4年間の影響は依然として深刻です。',
      ],
    },
    {
      type: 'card',
      title: '具体例',
      html: '<p>基礎額が2,000ユーロで、36年間の拠出期間がある労働者が2年早く自発的に退職する場合、削減率は約21%となり、生涯受け取る年金額は毎月約 <strong>1,580ユーロ</strong> になります。</p>',
    },
  ],
};
