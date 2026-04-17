import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SalaryCalculatorUI } from '../ui';

const slug = 'salary-calculator-spain';
const title = '스페인 급여 계산기: IRPF 및 사회 보장 순급여 시뮬레이터';
const description =
  '매달 실제로 얼마를 받게 될지 확인해 보세요. 스페인 규정에 따른 원천징수, 과세 표준 및 순소득의 정확한 계산.';

const faqData = [
  {
    question: '스페인에서 순급여는 어떻게 계산되나요?',
    answer:
      '순급여는 총액에서 IRPF 원천징수(구간별 적용)와 사회 보장 기여금(총액의 약 6.35%)을 빼서 계산합니다. IRPF 비율은 개인 상황과 급여 수준에 따라 달라집니다.',
  },
  {
    question: '12회 지급과 14회 지급의 차이점은 무엇인가요?',
    answer:
      '12회 지급은 상여금이 매달 분할되어 지급됩니다. 14회 지급은 두 번의 추가 상여금(보통 6/7월과 12월)을 받게 됩니다. 연간 총액은 동일하며 지급 방식만 다릅니다.',
  },
  {
    question: '내 월급 명세서가 계산기와 정확히 일치하지 않는 이유는 무엇인가요?',
    answer:
      '이 계산기는 표준 근사치를 사용합니다. 실제 명세서는 회사별 공제, 복리후생, 자녀 부양, 장애 여부 또는 IRPF에 영향을 미치는 개인 상황에 따라 달라질 수 있습니다.',
  },
  {
    question: '급여의 몇 퍼센트가 세금으로 나가나요?',
    answer:
      '급여에 따라 다릅니다. 일반적으로 IRPF와 사회 보장 기여금을 합쳐 총액의 25%에서 45%가 원천징수됩니다. 급여가 높을수록 IRPF의 누진세 체계로 인해 원천징수 비율이 높아집니다.',
  },
  {
    question: 'IRPF란 무엇인가요?',
    answer:
      '개인 소득세입니다. 누진세로, 더 많이 벌수록 높은 급여 구간에 대해 더 높은 세율을 적용받습니다.',
  },
];

const howToData = [
  {
    name: '연간 총급여 입력',
    text: '세금과 원천징수 전, 계약서에 기재된 합의된 총액을 입력하세요.',
  },
  {
    name: '가족 상황 설정',
    text: '자녀나 부양가족이 있는 경우 표시해 주세요. 이는 적용되는 IRPF 비율을 낮춰줍니다.',
  },
  {
    name: '급여 지급 횟수',
    text: '급여를 12회(상여금 포함)로 받을지 14회로 받을지 선택하세요.',
  },
  {
    name: '월별 상세 내역 확인',
    text: '사회 보장 기여금과 IRPF로 얼마가 나가는지, 그리고 실제로 입금될 정확한 실수령액을 확인하세요.',
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
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<SalaryCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelGross: '연간 총급여',
    labelPays: '급여 지급 횟수',
    btn12: '12회 지급',
    btn14: '14회 지급',
    labelAge: '연령',
    labelContract: '계약 유형',
    optIndefinite: '무기 계약 / 일반',
    optTemporal: '한시적 계약',
    btnCalculate: '순급여 계산',
    labelNetMonthly: '월간 순급여',
    labelNetAnnual: '연간 순급여',
    labelPaysDisplay: '지급 기간',
    labelBreakdown: '원천징수 내역 (추정)',
    labelIRPF: 'IRPF',
    labelSS: '사회 보장',
    disclaimer:
      '*자녀가 없고 65세 미만인 미혼 근로자를 위한 간소화된 계산입니다.',
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
      text: '제 총급여는 다 어디로 사라지나요?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '첫 직장에서 가장 흔히 겪는 놀라움입니다. 연봉 24,000유로 계약서에 서명하고 매달 2,000유로를 기대하며 12로 나누었는데, 계좌에는 1,600유로만 찍혀 있습니다. 나머지 400유로는 어디로 갔을까요?',
    },
    {
      type: 'paragraph',
      html: '스페인에서 <strong>총액(Gross)</strong>(회사가 지급하는 금액)과 <strong>실수령액(Net)</strong>(실제로 받는 금액)의 차이는 주로 두 가지 항목인 IRPF와 사회 보장 기여금으로 나뉩니다. 이를 이해하는 것은 연봉 협상의 핵심입니다.',
    },
    {
      type: 'title',
      text: '사회 보장 기여금: 미래를 위한 약 6.35%',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '거의 모든 근로자에게 적용되는 고정 기여금입니다. 미혼이든 기혼이든 상관없습니다. 이 돈으로 다음이 충당됩니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>일반 질병 및 상황 (4.70%)</strong>: 일반적인 질병, 비업무적 사고, 퇴직 및 출산으로 인한 부재를 보장합니다.',
        '<strong>실업 (1.55% 또는 1.60%)</strong>: 실직 시 실업 급여를 청구하기 위한 기여금입니다. 계약 유형에 따라 약간 다를 수 있습니다.',
        '<strong>직업 교육 (0.10%)</strong>: 보조금을 받는 교육 과정 및 재교육을 위해 사용됩니다.',
      ],
    },
    {
      type: 'title',
      text: 'IRPF: 가장 뼈아픈 세금',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '누진세로, 급여와 개인 상황에 따라 2%에서 47%까지 다양할 수 있습니다. 고정된 세금이 아니라 세무서에 하는 선불금입니다. 회사는 여러분이 내년에 내야 할 예상 세금을 계산하여 매달 공제합니다.',
    },
    {
      type: 'title',
      text: 'IRPF를 낮추는 요인',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '자녀가 있는 경우(특히 3세 미만).',
        '장애가 있는 경우(33% 이상).',
        '소득이 낮은 부양 배우자가 있는 경우.',
      ],
    },
    {
      type: 'title',
      text: '주요 IRPF 구간 (2026년 추정)',
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
      text: '영원한 질문: 12회 지급인가 14회 지급인가?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '많은 근로자들이 여름과 크리스마스의 추가 수당을 위해 14회 지급을 선호합니다. 반면 매달 일정한 금액을 선호하여 12회로 나누어 받기도 합니다. 수학적으로 연간 총 수입은 정확히 같습니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>12회 지급</strong>: 매달 더 많은 금액을 받지만 보너스 달은 없습니다. 일정한 현금 흐름에 유리합니다.',
        '<strong>14회 지급</strong>: 매달 조금 적게 받지만 일 년에 두 번 두 배의 금액을 받습니다. "강제 저축"과 같은 효과가 있습니다.',
      ],
    },
  ],
};
