import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReverseVatCalculatorUI } from '../ui';

const slug = 'reverse-vat-calculator-spain';
const title = '인보이스 부가세 역산기: 세전 금액 계산';
const description =
  '온라인 부가세(IVA) 역산 도구입니다. 부가세가 포함된 총액에서 세전 금액(과세 표준)을 분리하여 계산합니다. 스페인 프리랜서 및 사업자 인보이스 발행 필수 도구입니다.';

const faqData = [
  {
    question: '부가세 역산(Scorporo/Breaking down)이란 무엇입니까?',
    answer:
      '세금이 이미 포함된 최종 가격에서 세금 이전의 금액(과세 표준)을 산출하는 과정입니다. 미리 약정된 최종 가격을 기준으로 인보이스를 발행해야 하는 프리랜서에게 필수적입니다.',
  },
  {
    question: '수동으로 부가세를 역산하려면 어떻게 하나요?',
    answer:
      '부가세율이 21%인 경우, 총액을 1.21로 나눕니다. 그 결과값이 과세 표준(세전 금액)이 됩니다. 총액에서 세전 금액을 뺀 나머지가 부가세액입니다.',
  },
  {
    question: '스페인의 부가세(IVA) 종류에는 무엇이 있나요?',
    answer:
      '세 가지 주요 유형이 있습니다: 일반(21%), 경감(10%: 식료품, 보건, 주거 등), 특별 경감(4%: 빵, 우유와 같은 기본 식료품, 책, 신문, 의약품).',
  },
  {
    question: '부가세 내역을 분리 기재하는 것이 의무인가요?',
    answer:
      '네, 그렇습니다. 정식 또는 간이 영수증/인보이스를 발행할 때마다 과세 표준액, 적용 세율, 부가세액을 별도로 명시해야 합니다.',
  },
];

const howToData = [
  {
    name: '총액 입력',
    text: '부가세가 포함된 최종 합계 금액을 입력하세요.',
  },
  {
    name: '부가세율 선택',
    text: '제품이나 서비스의 카테고리에 따라 21%, 10% 또는 4%를 선택하세요.',
  },
  {
    name: '세전 금액 확인',
    text: '세금을 제하고 실제 귀하의 수익이 되는 세전 금액이 얼마인지 확인하세요.',
  },
  {
    name: '인보이스 데이터 복사',
    text: '계산된 결과값을 복사하여 인보이스 발행 소프트웨어의 과세표준 및 부가세 항목에 입력하세요.',
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
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<ReverseVatCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelTotal: '총액 (부가세 포함)',
    labelVatType: '부가세(IVA) 세율',
    btn21: '21 %',
    btn10: '10 %',
    btn4: '4 %',
    btn0: '0 %',
    labelBase: '과세 표준 (세전 금액)',
    labelVat: '부가세액',
  },
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '출처',
  bibliography: [],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '부가세 역산 시 가장 흔히 하는 실수',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '많은 프리랜서와 소상공인들이 총액에서 세전 금액을 계산할 때 실수를 합니다. 21%의 부가세를 빼기 위해 총액에서 단순히 21%를 곱한 금액을 빼면 안 됩니다. <strong>이것은 틀린 계산입니다!</strong> 이렇게 하면 매 분기 세금 신고 시 실제보다 더 많은 세금을 내게 되어 금전적 손해를 입게 됩니다.',
    },
    {
      type: 'title',
      text: '수학적 계산 원리',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '부가세는 세전 금액 <strong>위에</strong> 얹어지는 것입니다. 따라서 21% 세율일 때 최종 가격은 세전 금액의 121%가 됩니다. 원래대로 돌리려면 뺄셈이 아니라 <strong>나눗셈</strong>을 해야 합니다. <code>과세표준 = 총액 / 1.21</code> 규칙을 기억하세요.',
    },
    {
      type: 'code',
      code: '세전 금액 = 총액 / (1 + 부가세율)\n부가세액 = 총액 - 세전 금액',
    },
  ],
};
