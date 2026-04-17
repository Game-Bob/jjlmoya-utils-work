import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InvoiceGeneratorUI } from '../ui';

const slug = 'invoice-generator';
const title = 'フリーランス・小規模ビジネス向け無料請求書作成ツール';
const description =
  'プロフェッショナルな請求書をオンラインで無料作成。詳細入力、品目追加、税金設定を行うだけで、印刷可能なPDFを生成。アカウント登録不要。';

const faqData = [
  {
    question: 'プロフェッショナルな請求書にはどのような情報を含める必要がありますか？',
    answer:
      '請求書には、一意の請求書番号、発行日、あなたの会社名と連絡先情報（登録番号など）、クライアントの会社情報、数量と単価を含む品目リスト、適用される税金、および明確な支払い条件を含める必要があります。',
  },
  {
    question: 'フリーランスはサービスに対して消費税を請求する必要がありますか？',
    answer:
      'お住まいの地域と事業形態（課税事業者かどうか）によって異なります。日本では、適格請求書発行事業者（インボイス制度）に登録している場合、消費税額を明記した請求書を発行する必要があります。詳細は税理士にご相談ください。',
  },
  {
    question: '源泉徴収とは何ですか？いつ適用されますか？',
    answer:
      '源泉徴収は、クライアントがあなたの報酬から税金を差し引き、あなたに代わって国に納付する制度です。日本では、個人事業主が特定の専門サービスを法人に提供する場合に適用されることが一般的です。',
  },
  {
    question: '請求書にはマイナンバーと法人番号のどちらを使用すべきですか？',
    answer:
      '法人（株式会社等）の場合は法人番号を使用します。個人事業主の場合は、マイナンバーを請求書に直接記載することは避けるべきです。インボイス制度の登録番号を使用するか、番号不要の範囲で運用するのが一般的です。',
  },
];

const howToData = [
  {
    name: 'ビジネス情報を入力する',
    text: '「My Company LLC」をクリックし、実際の会社名、登録番号、住所、連絡先メールアドレスに置き換えます。',
  },
  {
    name: 'クライアントの詳細を記入する',
    text: '「請求先:」の下にある各フィールドをクリックして、クライアントの会社名、住所、連絡先を入力します。',
  },
  {
    name: 'サービスを追加し価格を設定する',
    text: 'テーブル内の各サービス内容、数量、単価を記入します。「行を追加」をクリックして項目を増やせます。',
  },
  {
    name: '合計を確認しPDFを生成する',
    text: 'すべての金額が正しいことを確認し、適用される場合は消費税率を設定し、「PDFを生成」をクリックして保存または印刷します。',
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

export const content: ToolLocaleContent<InvoiceGeneratorUI> = {
  slug,
  title,
  description,
  ui: {
    labelEditor: '対話型エディター',
    labelEditHint: 'ドキュメント内のテキストをクリックして直接編集できます。',
    btnGenerate: 'PDFを生成',
    labelFrom: '発行元:',
    labelTo: '請求先:',
    labelDesc: 'サービス・商品の内容',
    labelQty: '数量',
    labelPrice: '単価',
    labelAmount: '金額',
    btnAddRow: '行を追加',
    labelSubtotal: '小計:',
    labelTax: '消費税',
    labelWithholding: '源泉徴収',
    labelTotal: '合計:',
    defaultInvoiceTitle: '請求書',
    defaultInvoiceNum: 'INV-24-001',
    defaultCompanyName: '株式会社サンプル',
    defaultCompanyId: '登録番号 T1234567890123',
    defaultAddress: '東京都千代田区1-2-3',
    defaultCity: 'サンプルビル 101',
    defaultEmail: 'admin@example.co.jp',
    placeholderDesc: '説明を追加...',
    placeholderNotes: '例：支払期限は発行から30日以内です。銀行振込にてお願いします。',
    labelNotes: '備考 / 支払い条件',
    currencySymbol: '¥',
    defaultTaxRate: '10',
    defaultRetRate: '0',
  },
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '出典',
  bibliography: [
    { name: '国税庁：インボイス制度の概要', url: 'https://www.nta.go.jp/' },
    { name: '請求書の書き方ガイド', url: 'https://www.nta.go.jp/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'プロフェッショナルな請求書に不可欠な要素',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '有効な請求書は単なる支払いの依頼ではなく、あなたとクライアントの双方を保護する法的文書です。必要な項目が不足していると、支払いが遅れたり、税務上の問題が発生したり、あるいは請求書が無効になる可能性もあります。フリーランスにとって、最初から正しく作成することは極めて重要です。',
    },
    {
      type: 'card',
      title: '請求書の必須項目',
      html: '<ul><li><strong>請求書番号：</strong> 欠番のない連番であること。</li><li><strong>請求日：</strong> サービス提供日ではなく、発行した日付。</li><li><strong>発行者・受領者情報：</strong> 正式名称、登録番号（インボイス）、住所。</li><li><strong>品目詳細：</strong> 各項目の内容、数量、単価。</li><li><strong>支払い条件：</strong> 期限、振込先口座、遅延時の対応など。</li></ul>',
    },
    {
      type: 'title',
      text: '請求書における税金と源泉徴収',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '支払額に影響する2つの要素があります。<strong>消費税</strong>はクライアントから預かり国に納めるもので、クライアントの負担増となります。<strong>源泉徴収</strong>はクライアントがあなたの報酬から差し引き代わりに納税するもので、あなたが実際に受け取る手取り額が減ることになります。',
    },
    {
      type: 'code',
      code: '報酬額                      100,000円\n+ 消費税 (10%)               10,000円\n- 源泉徴収税額 (10.21%)      -10,210円\n-----------------------------------------\n差引支払額                   99,790円',
    },
    {
      type: 'title',
      text: 'フリーランスの個人情報保護',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '請求書にはマイナンバーではなく、法人番号やインボイス制度の登録番号を使用するようにしましょう。これにより、多くの部署で共有される書類上で不要な個人情報の露出を避けることができます。',
    },
    {
      type: 'tip',
      html: '<strong>すべての請求書をPDFで保存しましょう：</strong> 税法上、帳簿書類は原則7年間の保存が義務付けられています。「PDFを生成」ボタンを活用し、年別・クライアント別に整理されたフォルダに保管することをお勧めします。',
    },
  ],
};
