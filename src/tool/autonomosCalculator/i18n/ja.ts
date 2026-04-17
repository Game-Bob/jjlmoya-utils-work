import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AutonomosCalculatorUI } from '../ui';

const slug = 'freelance-quota-calculator-spain-ja';
const title = '2026年個人事業主（Autónomos）費用計算機: スペイン RETA 実績ベースシステム';
const description =
  '2026年スペイン個人事業主拠出金の無料シミュレーター。新しい0.9%のMEI（世代間公平メカニズム）を反映し、実質的な純所得、拠出金ランク、および月額費用を計算します。';

const faqData = [
  {
    question: '2026年の新しい拠出システムはどのようになっていますか？',
    answer:
      'このシステムは、実質的な純所得に応じた15のランクに基づいています。予想利益（収益から経費を差し引いた額）を申告し、その月額ランクに関連付けられた拠出金を支払う必要があります。',
  },
  {
    question: 'MEIとは何ですか、また私の個人事業主費用にどのように影響しますか？',
    answer:
      '世代間公平メカニズム（MEI）は、年金のための目的税です。2026年には0.9%に上昇し、すべての個人事業主において2025年比で拠出金がわずかに増加します。',
  },
  {
    question: '拠出基準額（Base de cotización）は年に何回変更できますか？',
    answer:
      '月々の利益の実績に合わせて、拠出基準額（したがって個人事業主費用）を年に最大6回まで変更できます。',
  },
  {
    question: '実際の所得が予想と異なる場合はどうなりますか？',
    answer:
      '社会保障庁は税務署とデータを照合し、年次精算を行います。不足分があれば後で請求され、過払いがあれば自動的に払い戻されます。',
  },
  {
    question: '80ユーロの定額制（Tarifa Plana）はまだありますか？',
    answer:
      'はい。新規登録の個人事業主には、最初の12ヶ月間は80ユーロの軽減費用が維持されます。所得が最低賃金以下の場合は、さらに12ヶ月間延長可能です。',
  },
];

const howToData = [
  {
    name: '収益と経費を入力する',
    text: '専門家活動における月間の予想売上高と控除対象経費を入力します。',
  },
  {
    name: '活動プロフィールを定義する',
    text: '個人事業主（7%控除）か、会社役員（3%控除）かを選択します。',
  },
    {
    name: '現在のランクを表示する',
    text: 'シミュレーターが純所得を計算し、2026年に適用される拠出金ランクを示します。',
  },
  {
    name: 'MEIの影響を確認する',
    text: '不測の事態および新しい世代間公平係数を含む、最終的な費用の内訳が表示されます。',
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

export const content: ToolLocaleContent<AutonomosCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelIncome: '月間総所得',
    labelExpenses: '月間控除対象経費',
    labelType: '活動プロフィール',
    labelFlatRate: '定額制（新規登録）',
    optStandard: '個人事業主（7%控除）',
    optSocietario: '会社役員（3%控除）',
    optNoFlatRate: '適用なし（実費）',
    optFlatRate: 'はい、1年目（月額80ユーロ）',
    labelBracket: 'あなたの純所得ランク',
    labelNetDisplay: '月間純所得',
    labelCuota: '社会保障拠出金',
    labelBase: '拠出基準額',
    labelNetAfter: '実質手取り（拠点金控除後）',
    labelProjection: '2026年予測 (MEI 0.9%)',
    infoText:
      'RETA 2026システム：計算には、一般経費控除（7%または3%）を適用した月間純所得が含まれます。表示される拠出金には、一般事由、職業事由、活動停止、教育、および2026年に0.9%に更新された世代間公平メカニズム（MEI）が含まれます。',
  },
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '出典',
  bibliography: [
    {
      name: '社会保障庁：新しい拠出システム',
      url: 'https://portal.seg-social.gob.es/wps/portal/importass/importass/Colectivos/Trabajo+Autonomo/guia',
    },
    {
      name: '税務署：経済活動からの所得',
      url: 'https://sede.agenciatributaria.gob.es/Sede/irpf/empresarios-individuales-profesionales/rendimientos-actividades-economicas.html',
    },
    {
      name: 'BOE：RETA改革に関する王立政令第13/2022号',
      url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2022-12482',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '2026年個人事業主費用計算機：新システムガイド',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'スペインで個人事業主になることは、最も動的であり、時には混乱を招く課題の一つである<strong>社会保障拠出金</strong>に向き合うことを意味します。<strong>実質純所得</strong>に基づく新システムが施行されて以来、「一律費用」という概念は消え、進歩的なモデルに置き換わりました。',
    },
    {
      type: 'title',
      text: '新しいRETA拠点システムはどのように機能しますか？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '2023年までは、各個人事業主が拠出基準額を自由に選択できたため、多くの人が最低額を支払っていました。改革の目的は、高所得者がより多く貢献し、低所得者の月々の負担を軽減することにあります。',
    },
    {
      type: 'paragraph',
      html: 'システムは<strong>純所得ランク</strong>に基づいています。つまり、あなたの費用は総所得（売上）ではなく、専門的な経費を差し引き、追加の一般経費控除を適用した後に実際に手元に残る「クリーンな」金額に依存します。',
    },
    {
      type: 'title',
      text: '2026年の主な変更点：MEI係数',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '2026年は改革の第2フェーズの定着を意味します。最も重要な更新の一つは、<strong>世代間公平メカニズム（MEI）</strong>の引き上げです。',
    },
    {
      type: 'list',
      items: [
        '<strong>MEIの引き上げ：</strong> 2026年にはMEIが0.9%に上昇し、すべてのランクで2025年比で拠出金がわずかに増加します。',
        '<strong>ランクの見直し：</strong> 純所得ランクは維持されますが、実績ベースの所得拠出システムに収束させるため、各範囲の最低および最高拠出額が調整されます。',
        '<strong>年次精算：</strong> 年末に社会保障庁は税務署とデータを照合します。実際の利益に基づいて過不足があれば、還付または追加請求が行われます。',
      ],
    },
    {
      type: 'title',
      text: '月間純所得の計算方法',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '計算機を正確に使用するには、どの数字を入力すべきかを理解することが不可欠です。社会保障庁が適用する公式は以下の通りです：',
    },
    {
      type: 'code',
      code: '純所得 = (総所得 - 控除対象経費) / (1 - 一般経費控除)',
    },
    {
      type: 'paragraph',
      html: '<strong>一般経費控除</strong>は、個人事業主の場合は<strong>7%</strong>、会社役員の場合は<strong>3%</strong>です。',
    },
    {
      type: 'card',
      title: '2026年の計算例',
      html: '<ul><li>売上：4,000ユーロ / 経費：1,000ユーロ</li><li>利益マージン：3,000ユーロ</li><li>一般控除 (7%)：210ユーロ</li><li>算定純所得：2,790ユーロ</li><li><strong>2026年の推定費用：</strong> ランク8、約350ユーロ + MEI調整。</li></ul>',
    },
    {
      type: 'title',
      text: '進歩的システムの利点',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>より良い社会保障：</strong> より現実的な基準で拠出することで、一時的就労不能手当、出産、育児、そして特に年金の受給額が大幅に増加します。',
        '<strong>完全な柔軟性：</strong> 拠点基準額は年に最大6回変更できます。所得の大幅な減少が予想される場合は、低いランクに移動して資金繰りの悪化を防ぐことができます。',
        '<strong>80ユーロの定額制：</strong> 新規起業家向けに初年度は維持され、固定費を抑えたスタートが可能です。',
      ],
    },
    {
      type: 'title',
      text: '会社役員（Autónomo Societario）vs 個人事業主',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>会社役員</strong>（SLなどの法人の役員）は、最低拠出基準額がわずかに高く、一般経費控除は低く（3%）設定されています。これは、株主としての支配権があることで、市場リスクに対して異なる立場にあると法律がみなしているためです。',
    },
    {
      type: 'tip',
      html: '<strong>プロのアドバイス：</strong> 月々の純所得が大きく変動する場合は、慎重に中間のランクに位置づけるようにしてください。後の精算は避けられませんが、そうすることで、年末に社会保障庁から「請求書」が届いたときに、何千ユーロもの予期せぬ支払いを避けることができます。',
    },
    {
      type: 'title',
      text: '月額費用には何が含まれていますか？',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>一般事由 (28.30%)：</strong> 一般的な病気や仕事外の事故による欠勤をカバーします。',
        '<strong>職業事由 (1.30%)：</strong> 労働災害や職業病。',
        '<strong>活動停止 (0.90%)：</strong> 個人事業主のための「失業手当」。',
        '<strong>職業訓練 (0.10%)：</strong> コースやトレーニングへのアクセス。',
        '<strong>MEI (2026年は0.90%)：</strong> 年金の持続可能性を保証するための基金。',
      ],
    },
    {
      type: 'title',
      text: '精算プロセス（税務署と社会保障庁）',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '毎年、確定申告キャンペーンの後、税務署はあなたの実際の純所得を社会保障庁に伝えます。実際の所得が必要とするランクよりも低いランクを選択していた場合は、差額の支払通知が届きます。逆に、利益以上に拠出していた場合は、社会保障庁が明示的な申請なしに自動的に過払い分を払い戻します。',
    },
    {
      type: 'title',
      text: '結論と推奨事項',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>2026年個人事業主計算機</strong>は、すべてのフリーランサーにとって税務計画に不可欠なツールです。重要な契約を結んだり、固定費を変更したりするたびに、このシミュレーターを使用して、自分の個人事業主費用が常にビジネスの実態に合っているか確認することをお勧めします。',
    },
  ],
};
