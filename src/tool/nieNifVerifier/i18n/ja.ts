import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NieNifVerifierUI } from '../ui';

const slug = 'nie-nif-verifier-spain';
const title = 'スペインNIE/NIF/CIF検証：納税者番号バリデーター';
const description =
  'スペインのNIF（DNI）、NIE（外国人）、CIF（企業）の有効性を無料で検証。チェックディジットと公式フォーマットを確認します。';

const faqData = [
  {
    question: 'このツールにNIFやNIEを入力しても安全ですか？',
    answer:
      'はい、完全に安全です。検証はJavaScriptを使用してブラウザ内で完結します。データがサーバーに送信されたり、データベースに保存されたりすることはありません。',
  },
  {
    question: 'NIFとCIFの違いは何ですか？',
    answer:
      'NIF（納税者番号）は現在すべてのIDを指す用語です。ただし、法人（企業や団体）のNIFを指す際にCIFという用語が今でも一般的に使われています。',
  },
  {
    question: '末尾のアルファベットが分からない場合、どうすれば確認できますか？',
    answer:
      '8桁の数字を入力すると、正しいアルファベットが表示されます。アルゴリズムは数字を23で割ることで正確な文字を算出します。',
  },
  {
    question: 'YやZで始まるNIE番号にも対応していますか？',
    answer:
      'はい、Xで始まる古い形式から、YやZで始まる新しい形式まで、すべてのNIEフォーマットに対応しており、公式の数値変換を適用して検証します。',
  },
  {
    question: '実際に税務当局に登録されている番号かどうかを確認できますか？',
    answer:
      'いいえ。このツールはアルゴリズムと数学的な妥当性を検証するものです。形式が正しいかどうかを確認しますが、税務署（Agencia Tributaria）のデータベースに照会するわけではありません。',
  },
];

const howToData = [
  {
    name: '識別番号を確認する',
    text: 'カード（DNI、居住カード、または納税者番号通知）に記載されている英数字コードを確認します。',
  },
  {
    name: 'コードを入力する',
    text: 'テキストフィールドにNIF、NIE、またはCIFを入力します。スペースやハイフンは無視されます。',
  },
  {
    name: '結果を確認する',
    text: 'ツールの構造が有効か、チェックディジットが一致するかを即座に分析します。',
  },
  {
    name: '結果をコピーする',
    text: '有効なコードであれば、そのままコピーして請求書や契約書、行政書類などに貼り付けることができます。',
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

export const content: ToolLocaleContent<NieNifVerifierUI> = {
  slug,
  title,
  description,
  ui: {
    labelInput: 'スペインの納税者番号を入力',
    placeholder: '45938210Y',
    typeNIF: 'NIF / DNI',
    typeNIE: 'NIE',
    typeCIF: 'CIF',
    msgValidSuffix: '有効',
    msgInvalidControl: 'チェックディジットが正しくありません',
    msgInvalidNIEControl: '制御文字エラー',
    msgInvalidCIF: '不正な組み合わせ',
    msgIncomplete: '不完全',
  },
  faqTitle: 'よくある質問',
  faq: faqData: '出典',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'スペインにおけるNIF、NIE、CIF検証の重要性',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'スペインの行政およびビジネスにおいて、納税者識別番号はあらゆる取引、契約、公的手続きの基盤となります。請求書を発行するフリーランス、サプライヤーを管理する企業、あるいは商品を購入する個人であっても、信頼できる<strong>NIF、NIE、CIF検証ツール</strong>は、事務ミスの回避や不正防止に不可欠です。',
    },
    {
      type: 'title',
      text: 'NIF、NIE、CIFとは？主な違い',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>NIF（納税者番号）：</strong> スペインにおける識別番号の総称。スペイン国民の場合、DNI番号の後にアルファベットを1文字加えた形式（数字8桁＋文字1文字）です。',
        '<strong>NIE（外国人登録番号）：</strong> スペインで活動する外国人のための識別コード。X、Y、Zのいずれかで始まり、数字7桁とアルファベット1文字で構成されます。',
        '<strong>CIF（法人納税番号）：</strong> 企業や団体などの法人のための番号。組織の種類を示すアルファベット1文字＋数字7桁＋チェック文字で構成されます。',
      ],
    },
    {
      type: 'title',
      text: '検証アルゴリズムの仕組み',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'NIF/DNIの場合、数字部分を23で割った余り（モジュロ23）を算出し、その結果を <strong>TRWAGMYFPDXBNJZSQVHLCKE</strong> という数列にマッピングして末尾のアルファベットを決定します。CIFの場合は、各桁の重み付け計算を行い、チェックディジットを照合します。',
    },
    {
      type: 'title',
      text: '主な利用シーン',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>経理・税理士：</strong> 税務申告のために顧客や仕入先の番号を検証。',
        '<strong>ECサイト：</strong> 購入時に正しい請求書を発行するためにNIFをチェック。',
        '<strong>人事部門：</strong> 外国人従業員を社会保障に登録する前にNIEの正確性を確認。',
      ],
    },
    {
      type: 'title',
      text: '正確な検証のためのヒント',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'エラーが出る場合、「0（数字のゼロ）」と「O（アルファベットのオー）」を間違えていないか確認してください（NIEでよくあるミスです）。',
        'CIFの場合、団体種別を示す先頭のアルファベット（A=株式会社、B=有限会社など）を必ず含めてください。',
        'このツールは数学的なValid（妥当性）を確認するものであり、現在の登録状態を保証するものではありません。',
      ],
    },
    {
      type: 'tip',
      html: '<strong>プライバシーを保護：</strong> 検証はすべてあなたのブラウザ上で行われます。入力した番号が外部に送信されることはありません。',
    },
  ],
};
