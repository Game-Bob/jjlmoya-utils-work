import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IrpfCalculatorUI } from '../ui';

const slug = 'irpf-calculator-spain';
const title = 'IRPF 계산기 2026: 스페인 순급여 시뮬레이터';
const description =
  '2026년 스페인의 월별 및 연간 실수령액을 계산해 보세요. 주 정부, 지방 자치 단체, MEI 요율 및 가족 상황이 반영된 최신 시뮬레이터입니다.';

const faqData = [
  {
    question: '2026년 MEI는 제 순급여에 어떤 영향을 미치나요?',
    answer:
      '세대 간 공평성 메커니즘(MEI)은 연금의 지속 가능성을 보장하기 위해 2026년에 0.90%로 인상됩니다. 대부분은 고용주가 부담하지만, 근로자도 기여 비율에 따라 순급여가 일정 부분 감소합니다.',
  },
  {
    question: '마드리드와 카탈루냐의 순급여가 다른 이유는 무엇인가요?',
    answer:
      'IRPF(개인 소득세)는 50%가 자치주로 이양된 세금입니다. 마드리는 주 정부 요율보다 낮은 세율을 적용하는 반면, 카탈루냐는 자체적인 요율 체계를 가지고 있어 초기 원천징수액이 더 높을 수 있습니다.',
  },
  {
    question: '한계세율이란 무엇이며 저에게 어떤 영향을 주나요?',
    answer:
      '한계세율은 마지막으로 번 1유로에 적용되는 세금 비율입니다. 이는 급여 인상이나 보너스가 실제 세금 측면에서 어느 정도의 비용이 드는지 보여줍니다.',
  },
  {
    question: '월별 계산을 위해 몇 번의 급여 지급 횟수를 선택해야 하나요?',
    answer:
      '일반적으로 12회 또는 14회(여름 및 크리스마스 보너스 포함) 급여를 받습니다. 회사가 사용하는 옵션을 선택하여 실제 월별 가처분 소득을 확인하세요.',
  },
  {
    question: '이 계산기는 연말 정산에 신뢰할 수 있나요?',
    answer:
      '이 도구는 2026년 규정을 바탕으로 한 추정치를 제공합니다. 월별 원천징수는 근사치이며, 실제 최종 결과는 6월 세금 신고 시 결정됩니다.',
  },
];

const howToData = [
  {
    name: '총급여 입력',
    text: '공제나 원천징수 전, 계약서에 기재된 연간 총액을 입력하세요.',
  },
  {
    name: '개인 상황 설정',
    text: '법적 비과세 수당 적용을 위해 자녀 수, 장애 여부 및 결혼 상태를 입력하세요.',
  },
  {
    name: '자치주 선택',
    text: '세법상 거주지에 따라 적용되는 지역 세율이 결정되며, 이는 최종 실수령액에 영향을 미칩니다.',
  },
  {
    name: '상세 내역 확인',
    text: 'IRPF, 사회 보장 기여금 및 실제 월별/연간 순급여가 얼마인지 확인하세요.',
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

export const content: ToolLocaleContent<IrpfCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    titleVariables: '계산 변수',
    titleCalculo: '2026년 투명한 계산',
    labelBruto: '연간 총급여 (€)',
    labelPagas: '급여 지급 횟수',
    labelComunidad: '세법상 거주지',
    labelHijos: '자녀 (25세 미만)',
    labelDiscapacidad: '장애 등급',
    labelUnidad: '가족 단위 또는 동거',
    opt12pagas: '12회 지급',
    opt14pagas: '14회 지급',
    optGen: '일반 지역',
    optMad: '마드리드',
    optCat: '카탈루냐',
    optAnd: '안달루시아',
    optVal: '발렌시아 지역',
    optPV: '바스크(포랄)',
    optNav: '나바라(포랄)',
    optNinguna: '없음',
    opt33: '> 33%',
    opt65: '> 65%',
    optSoltero: '미혼, 이혼 또는 사별',
    optCasadoLow: '기혼 (배우자 연 소득 1,500€ 미만)',
    optCasadoHigh: '기혼 (배우자 소득 있음)',
    labelSalarioBruto: '총급여',
    labelSS: '사회 보장 / MEI (-)',
    labelGastos: '공제 비용 (제20조)',
    labelNetoAnual: '연간 순급여',
    labelRetencionIRPF: 'IRPF 원천징수율 (%)',
    labelNetoMensual: '월별 가처분 실수령액',
    labelMarginal: '적용된 한계세율',
    resultRetention: 'IRPF 원천징수율 (%)',
    resultAnual: '/ 년',
    infoText:
      '2026년 검증된 AEAT 알고리즘(총 세액 - 최소 세액) 사용. 6.47%의 MEI 기여금 및 근로 소득 공제를 포함합니다. jjlmoya.es',
  },
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '출처',
  bibliography: [
    {
      name: '세무청: IRPF',
      url: 'https://sede.agenciatributaria.gob.es/Sede/irpf.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'IRPF 계산기 2026: 새로운 세무 시나리오 완벽 가이드',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '개인 소득세(IRPF)는 스페인 조세 체계에서 가장 중요한 세금으로, 수백만 근로자의 월급에 직접적인 영향을 미칩니다. 2026년에는 세대 간 공평성 메커니즘(MEI)의 인상과 여러 자치주의 세율 조정 등, 누진성과 새로운 경제 현실에 부합하기 위한 다양한 개혁의 통합을 목격하게 됩니다.',
    },
    {
      type: 'paragraph',
      html: '당사의 <strong>2026년 IRPF 계산기</strong>는 실제로 여러분의 은행 계좌에 입금될 금액에 대해 정확하고 최신 정보를 제공하도록 설계되었습니다. 순급여 계산은 단순히 고정된 비율을 빼는 것이 아닙니다. 이는 개인 상황, 부양가족, 장애 여부, 그리고 결정적으로 세법상 거주지를 고려하는 수학적 과정입니다. 스페인의 각 지역은 지역 세금 구간에 대한 권한을 가지고 있기 때문입니다.',
    },
    {
      type: 'title',
      text: '2026년 급여 명세서에서 달라지는 점은 무엇인가요?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '시뮬레이션 결과를 이해하려면 올해 원천징수 계산의 핵심 요소들을 알아야 합니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>MEI 영향:</strong> 세대 간 공평성 메커니즘은 연금 보장을 위해 상승세를 이어가며 2026년에는 0.90%에 도달합니다. 대부분 고용주가 부담하지만 근로자의 기여도 약 0.15%로 증가하여 실수령액이 소폭 감소합니다.',
        '<strong>SMI 및 공제:</strong> 최저 임금(SMI)은 하나의 기준선 역할을 합니다. 저소득층은 총급여 인상이 높은 세금 원천징수로 인해 상쇄되지 않도록 확대된 근로 소득 공제 혜택을 받습니다.',
        '<strong>지역별 구간:</strong> 마드리드, 안달루시아, 무르시아 같은 지역은 대개 국가 평균보다 낮은 세율을 적용하는 반면, 카탈루냐나 발렌시아 지역은 자체 요율 체계를 통해 고소득 구간의 원천징수액이 더 높을 수 있습니다.',
      ],
    },
    {
      type: 'title',
      text: '실수령액 이해를 위한 핵심 개념',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>과세 표준 vs. 총급여:</strong> 번 돈 전체에 대해 세금을 내는 것은 아닙니다. IRPF가 적용되는 기준은 총급여에서 사회 보장 기여금(약 6.45%)과 증명이 어려운 비용에 대한 일반 공제(연간 2,000유로)를 뺀 결과입니다. 이 결과에 비과세 한도가 적용됩니다.',
    },
    {
      type: 'title',
      text: '기본 개념',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>한계세율:</strong> 마지막으로 번 1유로에 적용되는 세율입니다. 급여 인상이나 보너스가 실제로 얼마나 세금으로 나가는지 아는 데 중요합니다.',
        '<strong>면세점(Vital Minimum):</strong> 국가가 납세자와 가족의 기본적 필요를 충족하기 위해 필수적이라고 간주하여 세금을 부과하지 않는 소득 수준입니다.',
        '<strong>급여 원천징수:</strong> 연말 정산을 대비하여 고용주가 근로자를 대신해 매달 세무서에 미리 납부하는 금액입니다.',
        '<strong>순소득:</strong> 총급여에서 세법상 허용되는 사회 보장 기여금 및 공제 비용을 뺀 금액입니다.',
      ],
    },
    {
      type: 'title',
      text: 'IRPF 원천징수 최적화 방법',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '많은 근로자들이 원천징수 비율을 조정해야 하는지 고민합니다. 사실 원천징수는 세무서에 하는 "선불"입니다. 일 년 동안 적게 냈다면 연말 정산에서 추가 납부가 발생할 수 있고, 많이 냈다면 환급을 받게 됩니다.',
    },
    {
      type: 'paragraph',
      html: '<strong>과세 구간 점프의 오해:</strong> 높은 구간으로 올라가면 실수령액이 줄어든다는 소문은 사실이 아닙니다. IRPF는 누진세입니다. 구간 한도를 넘는 소득에 대해서만 더 높은 세율이 적용됩니다. 한계세율이 높아지더라도 총액이 오르면 실수령액은 반드시 늘어납니다.',
    },
    {
      type: 'paragraph',
      html: '<strong>가족을 위한 팁:</strong> 자녀 출산이나 가족의 장애 상황 변화가 있다면 양식 145를 통해 정확히 보고했는지 확인하세요. 이를 통해 월별 원천징수가 조정되어 6월 세금 신고 시 당황스러운 일을 피할 수 있습니다.',
    },
    {
      type: 'title',
      text: '자치주별 차이',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '스페인의 재정 분권화로 인해 같은 급여와 가족 상황이라도 톨레도에 사느냐 바르셀로나에 사느냐에 따라 실수령액이 달라집니다. 자치주는 세금의 절반(지역 구간)에 대한 결정권을 가집니다. 예를 들어, 마드리드는 거의 모든 소득 수준에서 가장 낮은 세율을 책정하는 것으로 유명한 반면, 다른 지역은 월세나 자녀 교육비에 대해 국가 수준에서 제공되지 않는 공제를 적용하기도 합니다. 저희 계산기는 여러분의 위치에 따른 가장 현실적인 수치를 제공하기 위해 이러한 차이를 반영합니다.',
    },
    {
      type: 'paragraph',
      html: '결론적으로, <strong>2026년 실수령액 시뮬레이션</strong>은 기본적인 재무 계획 도구입니다. 실제 저축 능력을 파악하고 수입의 어느 부분이 공공 서비스 유지에 기여하는지 이해하면 투자, 주택 담보 대출 또는 이직에 대해 정보에 입각한 결정을 내릴 수 있습니다.',
    },
  ],
};
