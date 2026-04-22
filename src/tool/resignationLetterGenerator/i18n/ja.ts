import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResignationLetterGeneratorUI } from '../ui';

const slug = 'resignation-letter-generator';
const title = '退職願・退職届作成ジェネレーター';
const description =
  '数秒でパーソナライズされた退職願を作成。コピーやPDFダウンロードが可能なプロフェッショナルなテンプレートを即座に生成します。';

const faqData = [
  {
    question: '退職の何日前に申し出る必要がありますか？',
    answer:
      '日本の民法では、期間の定めのない雇用契約の場合、退職の2週間前までに申し出ることとされています。ただし、円満退職のためには就業規則に従い、1ヶ月から3ヶ月前までに直属の上司に伝えるのが一般的です。',
  },
  {
    question: '自己都合退職でも失業保険はもらえますか？',
    answer:
      'はい、受給可能です。ただし、自己都合退職の場合は「特定理由離職者」などに該当しない限り、原則として2ヶ月から3ヶ月の給付制限期間（待機期間終了後）があります。',
  },
  {
    question: '退職願と退職届の違いは何ですか？',
    answer:
      '「退職願」は会社に対して退職を「願い出る」ための書類で、受理されるまでは撤回が可能です。「退職届」は退職が確定した後に私的な意思として「届け出る」書類で、原則として撤回はできません。',
  },
  {
    question: '退職代行サービスを利用しても大丈夫ですか？',
    answer:
      '法律上は可能ですが、引き継ぎや私物の整理など、後々のトラブルを避けるためにも、まずは自身で意思を伝えることが推奨されます。困難な場合は専門の弁護士や資格を持つ業者に相談してください。',
  },
];

const howToData = [
  {
    name: '基本情報の入力',
    text: '氏名、部署名、宛先（代表者名や人事担当者）、会社名を入力します。',
  },
  {
    name: '退職日の設定',
    text: '契約や就業規則に基づき、計算された最終出勤日または退職日を選択します。',
  },
  {
    name: '退職理由の選択',
    text: '状況に合わせて最も適切な理由を選択し、文章をパーソナライズします。',
  },
  {
    name: 'コピーまたはPDF出力',
    text: '作成された文章をコピーするか、そのままPDF形式でダウンロードして印刷します。',
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

export const content: ToolLocaleContent<ResignationLetterGeneratorUI> = {
  slug,
  title,
  description,
  ui: {
    labelUserName: 'あなたの氏名',
    labelManagerName: '宛先名（代表者・人事担当）',
    labelManagerGender: '敬称',
    labelCompanyName: '会社名',
    labelLastDay: '退職日（最終日）',
    labelReasonType: '退職理由のパターン',
    labelCity: '提出場所（市区町村）',
    optGenderNeutral: '殿（汎用）',
    optGenderM: '様（一般）',
    optGenderF: '様（一般）',
    optReasonStandard: '一身上の都合（標準的）',
    optReasonOpportunity: '新たな挑戦・キャリアアップ',
    optReasonPersonal: '家庭の事情・個人的な理由',
    optReasonEducation: '学業・留学・研修',
    optReasonGrowth: 'キャリアの方向性の違い',
    optReasonDirect: '端的な表現',
    btnCopy: '文章をコピー',
    btnDownload: 'PDFで保存',
    copyFeedback: 'クリップボードにコピーしました',
    defaultUserName: '山田 太郎',
    defaultManagerName: '代表取締役 佐藤 次郎',
    defaultCompanyName: '株式会社サンプル',
    defaultCity: '東京都',
    dateLocale: 'ja-JP',
    datePrefix: '',
    managerPrefix: '',
    managerFallback: '人事部 御中',
    companyFallback: '貴社',
    salutationNeutral: '',
    salutationM: '様',
    salutationF: '様',
    salutationFallback: '担当者様',
    signatureFallback: '本人の署名・捺印',
    thanksParagraph:
      '在職中は多大なるご指導を賜り、公私ともに成長の機会をいただけましたことを心より感謝申し上げます。',
    transitionParagraph:
      '後任の方への引き継ぎおよび業務の整理につきましては、円滑に進むよう最後まで責任を持って努めさせていただきます。',
    closingWord: '以上',
    reasonStandard:
      'この度、一身上の都合により退職いたしたく、ここにお願い申し上げます。退職日は[DATE]とさせていただきたく存じます。',
    reasonOpportunity:
      '誠に勝手ながら、新たな分野に挑戦したいという意思が固まり、[DATE]をもちまして退職させていただくこととなりました。',
    reasonPersonal:
      '家庭などの諸般の事情により、現在の職務を継続することが困難な状況となりましたため、[DATE]をもちまして退職させていただきます。',
    reasonEducation:
      'この度、将来の目標に向けて専念するため、[DATE]をもちまして退職させていただきたくお願い申し上げます。',
    reasonGrowth:
      '自身のキャリア形成について熟考した結果、より異なる環境での成長を目指すこととし、[DATE]に退職させていただきたく存じます。',
    reasonDirect:
      '[DATE]をもちまして、本件職務を辞任させていただきます。',
  },
  faqTitle: 'よくある質問',
  faq: faqData: '出典・参考資料',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'プロフェッショナルな退職書類の書き方',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '退職の決断はキャリアにおける重要な節目です。<strong>退職願や退職届</strong>の提出は単なる事務手続きではなく、組織に残す最後の印象であり、法的な意味を持つ重要な書類です。',
    },
    {
      type: 'tip',
      html: '<strong>アドバイス：</strong> 上司と親しい間柄であっても、退職の意思は<strong>必ず文書で</strong>提出しましょう。文書化することで退職交渉が正式に開始され、トラブルを防ぐことができます。',
    },
    {
      type: 'list',
      items: [
        '提出日および退職日を明記する',
        '「一身上の都合」という定型句を適切に使う',
        '宛名は代表者（社長など）にする',
        '自署と捺印を忘れない（書面の場合）',
      ],
    },
    {
      type: 'code',
      code: '退職願\n\n私儀\n\nこの度、一身上の都合により、\n令和〇年〇月〇日をもって退職いたしたく、\nここにお願い申し上げます。\n\n令和〇年〇月〇日\n[氏名]\n\n[会社名]\n代表取締役 [代表者名] 殿',
    },
  ],
};
