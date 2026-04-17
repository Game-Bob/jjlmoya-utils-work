import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SettlementCalculatorUI } from '../ui';

const slug = 'severance-pay-calculator-spain-ja';
const title = 'スペイン退職金・清算額計算シミュレーター 2026';
const description =
  '未使用の有給休暇、賞与の按分額、およびスペインの労働法に基づく退職慰労金をステップバイステップで計算します。';

const faqData = [
  {
    question: '自己都合退職でも清算金（Finiquito）はもらえますか？',
    answer:
      'はい、もちろんです。清算金（Finiquito）には、当月の勤務日数分の給与、未消化の有給休暇、および賞与の按分額が含まれます。ただし、法的な退職慰労金（Indemnización）や失業保険の受給権利は発生しません。',
  },
  {
    question: '不当解雇の場合、退職金はいくらになりますか？',
    answer:
      '2012年2月12日以降に締結された契約の場合、勤続1年につき給与の33日分が支給され、最大で月給の24ヶ月分までとなります。',
  },
  {
    question: '予告期間を守らなかった場合、清算金から差し引かれますか？',
    answer:
      'はい。契約で予告期間（通常15日）が定められているにもかかわらず、それを遵守せずに退職した場合、会社は不足している日数分の給与を清算金から差し引く権利があります。',
  },
  {
    question: '清算金に含まれる有給休暇の扱いはどうなりますか？',
    answer:
      '未消化の有給休暇が買い取られる場合、会社はその日数分についても社会保険料を支払う義務があります。そのため、その期間が終わるまで失業保険の申請や他社での就労開始はできません。',
  },
];

const howToData = [
  {
    name: '年収を入力する',
    text: '税引前の年間総支給額を入力し、年間の給与支払い回数（12回または14回）を選択します。',
  },
  {
    name: '日付を設定する',
    text: '入社日と、予定している最終勤務日（退職日）を正確に入力します。',
  },
  {
    name: '未使用の有給休暇を入力',
    text: '現時点で消化しきれていない有給休暇の日数を入力します。',
  },
  {
    name: '退職理由を選択',
    text: '退職理由を選択することで、シミュレーターが適切な退職金の算出基準を適用します。',
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

export const content: ToolLocaleContent<SettlementCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelSalary: '年間総支給額 (Gross)',
    labelExtraPayments: '年間の給与支払い回数',
    labelStartDate: '入社日',
    labelEndDate: '退職日',
    labelVacationDays: '未消化の有給休暇日数',
    labelDepartureReason: '退職理由',
    opt12pays: '12回払い (端数なし)',
    opt14pays: '14回払い (標準的)',
    optImprocedente: '不当解雇 (33日分)',
    optObjetivo: '客観的理由による解雇 (20日分)',
    optTemporal: '有期契約の終了 (12日分)',
    optVoluntaria: '自己都合退職 (退職金なし)',
    labelTotal: '推定清算総額',
    labelSeverance: '退職慰労金',
    labelVacation: '未消化有給の買い取り',
    labelExtras: '賞与の按分額',
    labelMonthSalary: '月給換算',
    disclaimer:
      '注：これはスペインの労働法に基づく概算です。最終的な金額は労働協約や源泉徴収税、社会保険料によって変動する場合があります。',
    btnCopy: '概要をコピー',
    copySuccess: 'コピー完了',
    copySummaryTitle: '推定清算額の概要',
    defaultSalary: '24000',
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
      text: 'スペインにおける退職金と清算金の解説',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'スペインで雇用契約が終了する際、<strong>解雇</strong>、<strong>自己都合退職</strong>、または<strong>契約期間満了</strong>のいずれであっても、自分がいくら受け取る権利があるのかを理解することは非常に重要です。',
    },
    {
      type: 'title',
      text: 'Finiquito と Indemnización の違い',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Finiquito（フィニキート）：</strong> 雇用関係の終了時に精算される未払いの債権（当月の給与、有給の買い取りなど）。理由を問わず常に発生します。',
        '<strong>Indemnización（インデムニサシオン）：</strong> 解雇などの場合に会社が支払う「賠償金/退職金」です。自己都合退職の場合は原則として発生しません。',
      ],
    },
  ],
};
