import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MeetingCostCalculatorUI } from '../ui';

const slug = 'meeting-cost-calculator-ko';
const title = '회의 비용 계산기 실시간 티커';
const description =
  '현재 회의에 소요되고 있는 비용을 실시간으로 확인하세요. 참석 인원과 평균 급여를 입력하면 1초마다 늘어나는 금액을 시각화하여 보여줍니다.';

const faqData = [
  {
    question: '회의 비용을 측정하는 것이 왜 유용한가요?',
    answer:
      '회의 시간의 가치를 금액으로 환산하면 생산성에 대한 인식을 높일 수 있습니다. 불필요한 회의를 줄이고, 시간을 엄수하도록 독려하며, 논의된 주제가 팀의 경제적 투자 가치가 있는지 판단하는 데 도움이 됩니다.',
  },
  {
    question: '실시간 비용은 어떻게 계산되나요?',
    answer:
      '각 참석자의 추정 연봉 또는 시급을 바탕으로 초당 소모되는 비용을 산출합니다. 티커는 애니메이션 프레임마다 업데이트되어 누적된 비용을 실시간으로 보여줍니다.',
  },
  {
    question: '이 도구에 포함되지 않는 간접 비용은 무엇인가요?',
    answer:
      '이 계산기는 직접적인 인건비에 집중합니다. 기회 비용(직원이 그 시간에 생산했을 다른 업무 가치)이나 사무실 임대료, 소프트웨어 라이선스, 공공요금 같은 고정 유지비는 포함되지 않습니다.',
  },
  {
    question: '회의 비용을 줄이려면 어떻게 해야 하나요?',
    answer:
      '명확한 의제를 설정하고, 필수 인원만 참석시키며, 엄격한 시간 제한을 두세요. 또한 비동기 메시지나 이메일로 같은 결과를 얻을 수 있지는 않은지 고려해 보세요.',
  },
];

const howToData = [
  {
    name: '참석 인원 입력',
    text: '현재 회의에 참여하고 있는 인원수를 입력하세요.',
  },
  {
    name: '평균 급여 설정',
    text: '정확한 계산을 위해 참석자들의 평균 연봉 총액 또는 시급 추정치를 입력하세요.',
  },
  {
    name: '티커 시작',
    text: '회의가 시작되는 즉시 시작 버튼을 눌러 실시간으로 누적되는 비용을 확인하세요.',
  },
  {
    name: '중단 및 검토',
    text: '회의가 끝나면 티커를 일시 중지하세요. 총 소요 비용을 확인하고 얻은 성과가 투자할 가치가 있었는지 평가해 보세요.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<MeetingCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelAccumulated: '누적 비용',
    labelAttendees: '참석 인원',
    labelSalary: '평균 급여',
    optAnnual: '연봉 총액',
    optHourly: '시급 기준',
    btnStart: '회의 시작',
    btnPause: '일시 중지',
    btnResume: '재시작',
    btnReset: '초기화',
    currencySymbol: '₩',
    defaultSalary: '60000000',
    numberLocale: 'ko-KR',
  },
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '출처',
  bibliography: [
    { name: 'Stop the Meeting Madness (Harvard Business Review)', url: 'https://hbr.org/2017/07/stop-the-meeting-madness' },
    { name: 'Time Wasting at Work (Atlassian)', url: 'https://www.atlassian.com/time-wasting-at-work-infographic' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '회의 비용을 시각화해야 하는 이유',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '시간은 조직에서 가장 비싸고 재생 불가능한 자원입니다. 이 도구는 협업을 저해하려는 것이 아니라 <strong>생산적인 인식</strong>을 키우기 위해 설계되었습니다. 실시간으로 돈이 "타들어 가는" 것을 보면, 사람들은 더 정시에 도착하고, 더 간결하게 말하며, 회의 의제에 더 신중해집니다.',
    },
    {
      type: 'card',
      title: '숨겨진 비용 계산 방식',
      html: '<p>비용은 연봉 총액 또는 시급을 기준으로 계산됩니다. 연봉 기반일 경우, 업계 표준 기준인 <strong>연간 1,750 노동 시간</strong>(휴가 및 공휴일 고려)을 적용하여 급여를 시급으로 변환합니다.</p><p>초당 소모 비용 공식은 다음과 같습니다:<br><code>(시급 × 참석 인원) / 3600</code><br>이를 통해 티커에 표시되는 정확한 초단위 비용이 도출됩니다.</p>',
    },
    {
      type: 'code',
      code: '연봉: 60,000,000원\n시급 환산: 60,000,000 / 1,750 = 약 34,285원/시\n소모율 (4인): (34,285 × 4) / 3600 = 약 38원/초\n1시간 회의 비용: 약 137,140원',
    },
    {
      type: 'title',
      text: '효율적인 회의를 위한 팁',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>2판의 피자 규칙:</strong> 제프 베조스가 대중화한 규칙으로, 피자 두 판으로 회의 참석자 전원을 먹일 수 없다면 회의에 참석하는 인원이 너무 많음을 의미합니다.',
        '<strong>의제 없이는 회의도 없다:</strong> 명확한 의제와 정의된 목표가 없는 회의는 절대 수락하지 마세요. 단순한 "잡담 세션"은 대개 시간 낭비를 미화하는 말입니다.',
        '<strong>스탠딩 회의:</strong> 일일 회의는 서서 진행하세요. 신체적 불편함은 발언을 간결하게 만들고 논점에서 벗어나지 않게 해줍니다.',
        '<strong>파킨슨의 법칙:</strong> 업무는 할당된 시간을 다 채울 때까지 늘어납니다. 기본적으로 한 시간 단위로 설정하기보다 25분 또는 50분 단위로 설정해 보세요.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>라이브 티커를 적극 활용하세요:</strong> 팀 회의 중에 회의 비용 티커를 함께 화면에 띄워보세요. 눈에 보이는 금액은 주제에서 벗어나지 않고 제시간에 회의를 마무리하도록 하는 강력한 동기가 됩니다.',
    },
  ],
};
