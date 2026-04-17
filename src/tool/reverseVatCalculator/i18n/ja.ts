import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReverseVatCalculatorUI } from '../ui';

const slug = 'reverse-vat-calculator-spain';
const title = '内税逆算シミュレーター：スペインのIVAを差し引く';
const description =
  'オンラインの内税（IVA）逆算ツールです。税込総額から税抜価格（課税標準額）を算出します。スペインでのインボイス作成やフリーランスの業務に不可欠なツールです。';

const faqData = [
  {
    question: '内税逆算（Scorporo/Break down）とは何ですか？',
    answer:
      'すでに税金が含まれている税込価格から、税抜きの価格（課税標準額）を算出するプロセスのことです。あらかじめ合意した最終価格に基づいて請求書を発行する必要があるフリーランスにとって非常に重要です。',
  },
  {
    question: '手動で内税を逆算するにはどうすればよいですか？',
    answer:
      'IVA（付加価値税）率が21%の場合、税込総額を1.21で割ります。その結果が課税標準額（ネット）になります。総額と標準額の差が消費税額になります。',
  },
  {
    question: 'スペインにはどのような種類のIVAがありますか？',
    answer:
      '主に3つの種類があります：一般（21%）、軽減（10%：食料品、保健、住宅など）、特別軽減（4%：パン、乳製品、書籍、新聞など）。',
  },
  {
    question: 'IVAの内訳を明記することは義務ですか？',
    answer:
      'はい。請求書（正式なもの、または簡略化されたもの）を発行する際は、課税標準額、適用される税率、およびIVAの金額を個別に記載する必要があります。',
  },
];

const howToData = [
  {
    name: '税込価格を入力する',
    text: '内訳を算出したい、IVAが含まれた最終金額を入力してください。',
  },
  {
    name: '税率を選択する',
    text: '製品やサービスのカテゴリーに応じて、21%、10%、または4%から選択します。',
  },
  {
    name: '課税標準額を確認する',
    text: '税引前の本来の金額がいくらになるか、自動計算結果を確認します。',
  },
  {
    name: 'データをコピーする',
    text: '算出された値をインボイス作成ソフトの「課税標準額」と「IVA」の欄に入力するために使用します。',
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

export const content: ToolLocaleContent<ReverseVatCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelTotal: '税込総額',
    labelVatType: 'IVA（付加価値税）率',
    btn21: '21 %',
    btn10: '10 %',
    btn4: '4 %',
    btn0: '0 %',
    labelBase: '課税標準額（税抜価格）',
    labelVat: 'IVA（付加価値税）額',
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
      text: '内税逆算におけるよくある間違い',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '多くのフリーランスや中小企業にとって、税込価格から税抜価格を計算するのは混乱の元です。最も多い間違いは、21%のIVAを差し引くために、総額から単純に21%を引いてしまうことです。<strong>これは間違いです！</strong> これを行ってしまうと、四半期ごとの納税時に損をしてしまいます。',
    },
    {
      type: 'title',
      text: '計算式の解説',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '消費税（IVA）は税抜価格の<strong>上に</strong>加算されるものです。したがって、最終価格は税抜価格の121%になります（税率21%の場合）。元に戻すには、引き算ではなく<strong>割り算</strong>を行います。<code>税抜価格 = 総額 / 1.21</code> となります。',
    },
    {
      type: 'code',
      code: '課税標準額 = 税込総額 / (1 + IVA税率)\nIVA金額 = 税込総額 - 課税標準額',
    },
  ],
};
