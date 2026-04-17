import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EarlyRetirementSimulatorUI } from '../ui';

const slug = 'early-retirement-simulator-spain-ko';
const title = '스페인 조기 은퇴 시뮬레이터: 당신의 연금을 계산해 보세요';
const description =
  '은퇴 연령, 감액 계수 및 예상 연금액을 무료로 계산해 보세요. 스페인의 자발적 및 비자발적 조기 은퇴에 대응하는 최신 시뮬레이터입니다.';

const faqData = [
  {
    question: '스페인 조기 은퇴 최소 연령은 몇 세인가요?',
    answer:
      '자발적 조기 은퇴의 경우, 최소 연령은 법정 연령의 2년 전입니다(기여도에 따라 일반적으로 63세 또는 65세). 비자발적 조기 은퇴의 경우 법정 연령 대비 최대 4년 전(61세 또는 63세)까지 가능합니다.',
  },
  {
    question: '기여 기간은 몇 년이 필요한가요?',
    answer:
      '자발적 조기 은퇴를 위해서는 최소 35년의 유효한 기여 기간이 필요합니다. 비자발적 또는 강제 조기 은퇴의 경우 최소 33년이 권장됩니다.',
  },
  {
    question: '조기 은퇴를 하면 연금이 얼마나 줄어드나요?',
    answer:
      '감액률은 은퇴를 앞당긴 개월 수와 총 기여 연수에 따라 달라집니다. 감액률은 한 달 앞당길 때 2.81%부터, 자발적 조기 은퇴로 2년을 앞당길 때 최대 약 21%까지 적용됩니다.',
  },
  {
    question: '실업 기간도 은퇴 기여 기간에 포함되나요?',
    answer:
      '네, 실업 급여(paro)를 받는 기간은 SEPE(스페인 공공 고용 서비스)에서 사회 보장국에 해당 기여금을 납부하므로 은퇴 기여 기간에 포함됩니다.',
  },
];

const howToData = [
  {
    name: '출생 연도 입력',
    text: '이는 2026년에 시행되는 규정에 따른 법정 통상 은퇴 연령을 결정하는 기초가 됩니다.',
  },
  {
    name: '기여 연수 추정',
    text: '고용 기간, 자영업 활동 기간 및 기여형 실업 기간을 포함해 보세요.',
  },
  {
    name: '은퇴 유형 선택',
    text: '정확한 감액 계수를 적용하기 위해 자발적 은퇴인지 또는 강제 은퇴인지 선택하세요.',
  },
  {
    name: '예상 연금액 확인',
    text: '적용된 감액률과 일을 그만둘 수 있는 구체적인 날짜를 확인하세요.',
  },
];

const bibliography = [
  {
    name: '스페인 사회 보장국: 통상 은퇴 및 조기 은퇴',
    url: 'https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/PrestacionesPensionesTrabajadores/10963',
  },
  {
    name: '연금 구매력 보장에 관한 법률 21/2021',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-21652',
  },
  {
    name: '공식 시뮬레이터 - Tu Seguridad Social',
    url: 'https://prestaciones.seg-social.es/simulador-servicio/simulador-pension-jubilacion.html',
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

export const content: ToolLocaleContent<EarlyRetirementSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelBirthYear: '출생 연도',
    labelContributions: '기여 연수',
    labelBasePension: '월간 총 세전 기초금액',
    labelRetirementAge: '은퇴 연령',
    labelExpectedDate: '예정 날짜',
    labelEstimatedPension: '예상 연금액',
    labelPermanentReduction: '영구 감액률',
    labelYears: '년',
    btnLegalTitle: '표준',
    btnLegalDesc: '법정 은퇴 연령. 감액 없음. 기초금액의 100% 지급.',
    btnVoluntaryTitle: '자발적 조기',
    btnVoluntaryDesc: '개인적 선택에 의한 은퇴. 월별 감액률 적용.',
    btnInvoluntaryTitle: '비자발적 / ERE',
    btnInvoluntaryDesc: '비자발적 종료. 더 유리한 감액 계수 적용.',
    defaultBirthYear: '1975',
    defaultContributions: '30',
    defaultBasePension: '2500',
    adviceDefault: '슬라이더를 움직여 당신의 은퇴 타임라인을 예측해 보세요.',
    adviceDefaultWithParams: '슬라이더를 움직여 당신의 은퇴 타임라인을 예측해 보세요.',
    adviceDelay:
      '은퇴를 <strong>[AGE]</strong>세로 미루면, 매달 약 <strong>[GAIN]유로</strong>를 추가로 더 받을 수 있습니다.',
    adviceBonus: '지연 보너스가 누적되고 있습니다. 연금액이 기초금액의 100%를 초과하게 됩니다.',
    adviceOptimal: '당신은 100% 자격을 갖춘 최적의 표준 연령에 도달했습니다.',
  },
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '출처',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '스페인 조기 은퇴 시뮬레이터: 2026년 가이드',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>조기 은퇴</strong>는 스페인 노동자들이 가장 걱정하는 재정적 문제 중 하나입니다. 언제 일을 그만둘 수 있는지, 그리고 무엇보다 감액 계수를 통해 연금이 얼마나 삭감되는지 이해하는 것은 안정적인 인생 설계에 매우 중요합니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>표준 법정 연령:</strong> 67세(또는 기여 기간이 충분한 경우 65세).',
        '<strong>자발적 조기 은퇴:</strong> 법정 연령보다 최대 2년 전까지 가능.',
        '<strong>비자발적 조기 은퇴:</strong> 구조조정 등의 사유로 최대 4년 전까지 가능.',
        '<strong>감액 계수:</strong> 연금 수령액에 대한 영구적인 월별 삭감.',
        '<strong>기여 요구 사항:</strong> 자발적 은퇴 최소 35년, 강제 조기 은퇴 33년.',
      ],
    },
    {
      type: 'title',
      text: '스페인에서 법적으로 은퇴할 수 있는 연령은 언제인가요?',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>65세 루트:</strong> 38년 6개월 이상 기여한 경우, 65세에 기초금액의 100%를 받으며 은퇴할 수 있습니다.',
        '<strong>67세 루트:</strong> 기여 기간이 해당 기준에 미달하는 경우, 표준 은퇴 연령은 67세가 됩니다.',
        '<strong>군 복무 기간:</strong> 의무 군 복무 또는 사회봉사 기간은 최대 1년까지 기여 기간으로 합산될 수 있습니다.',
      ],
    },
    {
      type: 'title',
      text: '자발적 조기 은퇴',
      level: 2,
    },
    {
      type: 'card',
      title: '자발적 조기 은퇴 요건',
      html: '<ul><li>표준 법정 은퇴 연령보다 2년 이내의 연령이어야 함.</li><li>최소 35년의 유효 기여 기간을 보유해야 함.</li><li>수령할 연금액이 최소 연금액을 초과해야 함.</li></ul>',
    },
    {
      type: 'title',
      text: '감액 계수: 조기 은퇴의 비용',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>38.5년 미만 기여 시:</strong> 최대 21% 감액(2년 앞당길 경우).',
        '<strong>38.5년 이상 41.5년 미만 기여 시:</strong> 최대 약 19% 감액.',
        '<strong>41.5년 이상 44.5년 미만 기여 시:</strong> 최대 약 17% 감액.',
        '<strong>44.5년 이상 기여 시:</strong> 최대 약 15% 감액.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>황금 팁:</strong> 조기 은퇴를 단 한 달만 늦춰도 감액 계수에서 큰 차이가 발생할 수 있습니다. 월별 구간 경계에 있는 경우, 며칠 더 기다리는 것이 유리한지 항상 계산해 보세요.',
    },
    {
      type: 'title',
      text: '비자발적 또는 강제 조기 은퇴',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>최대 조기 은퇴:</strong> 표준 연령 대비 최대 4년(48개월) 전.',
        '<strong>필요 기여 연수:</strong> 33년.',
        '<strong>조건:</strong> 은퇴 최소 6개월 전부터 구직자로 등록되어 있어야 함.',
        '<strong>계수:</strong> 자발적 조기 은퇴보다 유리하지만, 4년의 공백에 대한 타격은 여전히 큽니다.',
      ],
    },
    {
      type: 'card',
      title: '실제 사례',
      html: '<p>기초금액이 2,000유로인 노동자가 36년을 기여하고 2년 일찍 자발적 조기 은퇴를 하는 경우, 약 21%의 감액률이 적용되어 평생 매달 약 <strong>1,580유로</strong>의 연금을 받게 됩니다.</p>',
    },
  ],
};
