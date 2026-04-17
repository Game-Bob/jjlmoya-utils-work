import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SettlementCalculatorUI } from '../ui';

const slug = 'severance-pay-calculator-spain';
const title = '스페인 퇴직금 및 정산금 계산기 2026';
const description =
  '스페인 노동법에 따른 미사용 연차 수당, 상여금 안분액, 퇴직 위로금 등을 포함한 최종 정산금(Finiquito)을 단계별로 계산해보세요.';

const faqData = [
  {
    question: '자발적 퇴사 시에도 정산금(Finiquito)을 받을 수 있나요?',
    answer:
      '네, 당연합니다. 정산금(Finiquito)은 당월 근무 일수에 대한 급여, 미사용 연차 수당, 상여금의 비례 배분액 등 이미 발생한 채권을 정산하는 것입니다. 다만, 자발적 퇴사 시에는 퇴직 위로금(Indemnización)이나 실업 급여 권리는 발생하지 않습니다.',
  },
  {
    question: '부당 해고 시 퇴직금은 얼마인가요?',
    answer:
      '2012년 2월 12일 이후 체결된 계약의 경우, 근속 1년당 33일분의 급여가 지급되며, 최대 월급 24개월분까지 인정됩니다.',
  },
  {
    question: '사전 통보 기간을 지키지 않으면 정산금에서 차감되나요?',
    answer:
      '네. 계약상 고지 기간(통상 15일)이 정해져 있음에도 이를 지키지 않고 퇴사할 경우, 회사는 부족한 고지 일수만큼의 급여를 정산금에서 공제할 권리가 있습니다.',
  },
  {
    question: '미사용 연차 수당 정산 시 사회보장 기여금은 어떻게 되나요?',
    answer:
      '미사용 연차를 수당으로 지급할 때, 회사는 해당 일수만큼 근로자를 대신해 사회보장국(Social Security)에 기여금을 계속 납부해야 합니다. 이 기간 동안은 실업 급여를 신청하거나 타사에 입사할 수 없습니다.',
  },
];

const howToData = [
  {
    name: '연봉 입력',
    text: '세전 연봉(Gross)을 입력하고 연간 급여 지급 횟수(12회 또는 14회)를 선택합니다.',
  },
  {
    name: '날짜 설정',
    text: '입사일과 예상되는 마지막 근무일(퇴사일)을 정확히 입력합니다.',
  },
  {
    name: '미사용 연차 입력',
    text: '현재까지 사용하지 않고 남은 연차 일수를 입력합니다.',
  },
  {
    name: '퇴사 사유 선택',
    text: '시뮬레이터가 올바른 퇴직금 비율을 적용할 수 있도록 퇴사 사유를 선택합니다.',
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

export const content: ToolLocaleContent<SettlementCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelSalary: '연간 총급여 (세전)',
    labelExtraPayments: '연간 급여 지급 횟수',
    labelStartDate: '입사일',
    labelEndDate: '퇴사일',
    labelVacationDays: '미사용 연차 일수',
    labelDepartureReason: '퇴사 사유',
    opt12pays: '12회 지급 (안분 포함)',
    opt14pays: '14회 지급 (표준)',
    optImprocedente: '부당 해고 (33일 분)',
    optObjetivo: '합리적/객관적 해고 (20일 분)',
    optTemporal: '한시적 계약 종료 (12일 분)',
    optVoluntaria: '자발적 퇴사 (위로금 없음)',
    labelTotal: '예상 총 정산금',
    labelSeverance: '퇴직 위로금',
    labelVacation: '미사용 연차 수당',
    labelExtras: '상여금 안분액',
    labelMonthSalary: '월 급여 환산액',
    disclaimer:
      '참고: 본 계산기는 스페인 노동법을 바탕으로 한 대략적인 추정치입니다. 최종 금액은 단체 협약, 소득세 원천징수 및 사회보장 기여금에 따라 달라질 수 있습니다.',
    btnCopy: '요약 복사하기',
    copySuccess: '복사됨',
    copySummaryTitle: '예상 정산 내역 요약',
    defaultSalary: '24000',
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
      text: '스페인에서의 퇴직금 및 정산금(Finiquito) 안내',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '스페인에서 근로 계약이 종료되는 시점(<strong>해고</strong>, <strong>사직</strong>, <strong>계약 만료</strong> 등)에 본인이 받을 권리가 있는 금액을 정확히 이해하는 것은 매우 중요합니다.',
    },
    {
      type: 'title',
      text: 'Finiquito와 Indemnización의 차이점',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Finiquito（피니키토）:</strong> 근로 관계 종료 시 청산해야 할 모든 채권(당월 임금, 미사용 연차, 상여금 잔액 등). 퇴사 사유와 관계없이 항상 발생합니다.',
        '<strong>Indemnización（인뎀니사시온/위로금）:</strong> 특정 사유의 해고 시 회사가 지급해야 하는 경제적 보상금입니다. 자발적 퇴사 시에는 원칙적으로 지급되지 않습니다.',
      ],
    },
  ],
};
