import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AutonomosCalculatorUI } from '../ui';

const slug = 'freelance-quota-calculator-spain-ko';
const title = '2026년 자영업자(Autónomos) 분담금 계산기: 스페인 RETA 실질 소득 시스템';
const description =
  '2026년 스페인 자영업자 기여금 무료 시뮬레이터. 새로운 0.9% MEI(세대 간 공평성 매커니즘)를 반영하여 실질 순소득, 기여금 등급 및 월별 분담금을 계산합니다.';

const faqData = [
  {
    question: '2026년 새로운 기여금 시스템은 어떻게 작동하나요?',
    answer:
      '이 시스템은 실질 순소득에 따른 15개 등급을 기반으로 합니다. 예상 이익(수입에서 비용을 뺀 금액)을 신고하고 해당 월별 등급에 지정된 기여금을 납부해야 합니다.',
  },
  {
    question: 'MEI란 무엇이며 자영업자 분담금에 어떤 영향을 미치나요?',
    answer:
      '세대 간 공평성 매커니즘(MEI)은 연금을 위한 목적세입니다. 2026년에는 0.9%로 인상되어 모든 자영업자의 기여금이 2025년 대비 약간 증가합니다.',
  },
  {
    question: '기여 기준액을 1년에 몇 번 변경할 수 있나요?',
    answer:
      '월별 실제 이익에 맞춰 기여 기준액(따라서 자영업자 분담금)을 1년에 최대 6번까지 변경할 수 있습니다.',
  },
  {
    question: '실제 소득이 예상치와 다를 경우 어떻게 되나요?',
    answer:
      '사회보장청은 국세청과 데이터를 대조하여 연례 정산을 실시합니다. 적게 납부한 경우 차액이 청구되고, 더 많이 납부한 경우 초과분이 자동으로 환급됩니다.',
  },
  {
    question: '80유로 정액 요금제(Tarifa Plana)가 아직 유효한가요?',
    answer:
      '네, 신규 자영업자를 위한 80유로 감면 혜택은 활동 첫 12개월 동안 유지되며, 소득이 최저임금 미만인 경우 추가로 12개월 연장이 가능합니다.',
  },
];

const howToData = [
  {
    name: '수입 및 비용 입력',
    text: '전문 활동에서 예상되는 월 매출액과 공제 가능한 비용을 입력하세요.',
  },
  {
    name: '업무 프로필 정의',
    text: '개인 자영업자(7% 공제) 또는 법인 대표(3% 공제) 여부를 선택하세요.',
  },
  {
    name: '현재 등급 확인',
    text: '시뮬레이터가 순소득을 계산하고 2026년에 적용되는 기여금 등급을 보여줍니다.',
  },
  {
    name: 'MEI 영향 확인',
    text: '우발 상황 및 새로운 세대 간 공평성 계수를 포함한 최종 분담금 내역이 표시됩니다.',
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

export const content: ToolLocaleContent<AutonomosCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelIncome: '월간 총소득',
    labelExpenses: '월간 공제 가능 비용',
    labelType: '근로자 프로필',
    labelFlatRate: '정액 요금제 (신규 등록)',
    optStandard: '개인 자영업자 (7% 공제)',
    optSocietario: '법인 대표 (3% 공제)',
    optNoFlatRate: '적용 안 함 (실제 분담금)',
    optFlatRate: '예, 첫해 (80유로/월)',
    labelBracket: '귀하의 순소득 등급',
    labelNetDisplay: '월간 순소득',
    labelCuota: '사회보장 기여금',
    labelBase: '기여 기준액',
    labelNetAfter: '실질 실수령액 (분담금 공제 후)',
    labelProjection: '2026년 예측 (MEI 0.9%)',
    infoText:
      'RETA 2026 시스템: 계산에는 일반 비용 공제(7% 또는 3%)가 적용된 월간 순소득이 포함됩니다. 표시된 기여금에는 일반 우발 상황, 직업적 우발 상황, 활동 중단, 교육 및 2026년에 0.9%로 업데이트된 세대 간 공평성 매커니즘(MEI)이 포함됩니다.',
  },
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '출처',
  bibliography: [
    {
      name: '사회보장청: 새로운 기여금 시스템',
      url: 'https://portal.seg-social.gob.es/wps/portal/importass/importass/Colectivos/Trabajo+Autonomo/guia',
    },
    {
      name: '국세청: 경제 활동 소득',
      url: 'https://sede.agenciatributaria.gob.es/Sede/irpf/empresarios-individuales-profesionales/rendimientos-actividades-economicas.html',
    },
    {
      name: 'BOE: RETA 개혁에 관한 왕립 법령 13/2022',
      url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2022-12482',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '2026년 자영업자 분담금 계산기: 신규 시스템 가이드',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '스페인에서 자영업을 한다는 것은 가장 역동적이고 때로는 혼란스러운 과제 중 하나인 <strong>사회보장 기여금</strong>을 관리하는 것을 의미합니다. <strong>실질 순소득</strong>에 기반한 새로운 시스템이 시행된 이후, "고정 분담금" 개념은 사라지고 누진적 모델로 대체되었습니다.',
    },
    {
      type: 'title',
      text: '새로운 RETA 기여 시스템은 어떻게 작동하나요?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '2023년까지는 각 자영업자가 자신의 기여 기준액을 자유롭게 선택할 수 있어 대부분 최저액을 납부했습니다. 이번 개혁은 고소득자가 더 많이 기여하도록 보장하는 동시에 저소득자의 월별 부담을 줄이는 것을 목표로 합니다.',
    },
    {
      type: 'paragraph',
      html: '시스템은 <strong>순소득 등급</strong>을 기반으로 합니다. 즉, 귀하의 분담금은 총 수입(매출)이 아니라, 전문적인 비용을 공제하고 추가적인 일반 비용 공제를 적용한 후 실제로 "깨끗하게" 남는 금액에 따라 결정됩니다.',
    },
    {
      type: 'title',
      text: '2026년 주요 변경 사항: MEI 계수',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '2026년은 개혁의 두 번째 단계가 정착되는 시기입니다. 가장 중요한 업데이트 중 하나는 <strong>세대 간 공평성 매커니즘(MEI)</strong>의 인상입니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>MEI 인상:</strong> 2026년에는 MEI가 0.9%로 인상되어 모든 등급에서 2025년 대비 분담금이 약간 증가합니다.',
        '<strong>등급 검토:</strong> 순소득 등급은 유지되지만, 실질 소득 기여 시스템에 부합하도록 각 구간의 최소 및 최대 기여금이 조정됩니다.',
        '<strong>연례 정산:</strong> 연말에 사회보장청은 국세청과 데이터를 대조합니다. 실제 이익을 바탕으로 더 많이 또는 적게 납부한 경우 환급 또는 추가 청구가 이루어집니다.',
      ],
    },
    {
      type: 'title',
      text: '월간 순소득 계산 방법',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '계산기를 정확하게 사용하려면 어떤 수치를 입력해야 하는지 이해하는 것이 중요합니다. 사회보장청이 적용하는 공식은 다음과 같습니다.',
    },
    {
      type: 'code',
      code: '순소득 = (총소득 - 공제 가능 비용) / (1 - 일반 비용 공제)',
    },
    {
      type: 'paragraph',
      html: '<strong>일반 비용 공제</strong>는 개인 자영업자의 경우 <strong>7%</strong>, 법인 대표의 경우 <strong>3%</strong>입니다.',
    },
    {
      type: 'card',
      title: '2026년 계산 예시',
      html: '<ul><li>매출: 4,000유로 / 비용: 1,000유로</li><li>이익 마진: 3,000유로</li><li>일반 공제(7%): 210유로</li><li>산정 순소득: 2,790유로</li><li><strong>2026년 예상 분담금:</strong> 8구간, 약 350유로 + MEI 조정.</li></ul>',
    },
    {
      type: 'title',
      text: '누진적 시스템의 장점',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>더 나은 사회적 보호:</strong> 보다 현실적인 기준에 근거해 기여함으로써 일시적 근로 불능 수당, 출산, 육아, 특히 연금 수령액이 크게 높아집니다.',
        '<strong>유연한 조정:</strong> 기여 기준액을 1년에 최대 6번 변경할 수 있습니다. 소득이 크게 감소할 것으로 예상되는 경우 낮은 등급으로 이동하여 자금 압박을 피할 수 있습니다.',
        '<strong>80유로 정액제:</strong> 신규 창업자를 위해 첫해 동안 유지되어 고정 비용을 관리하며 시작할 수 있도록 돕습니다.',
      ],
    },
    {
      type: 'title',
      text: '법인 대표 vs. 개인 자영업자',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>법인 대표</strong>(SL 법인 등)는 최저 기여 기준액이 약간 더 높고 일반 비용 공제 비율이 낮습니다(3%). 이는 법적으로 주주로서의 통제권이 시장 위험에 대해 다른 입장을 부여한다고 간주하기 때문입니다.',
    },
    {
      type: 'tip',
      html: '<strong>전문가 팁:</strong> 월별 순소득 변동이 큰 경우 신중하게 중간 정도의 등급을 선택해 보세요. 나중에 정산하는 과정은 피할 수 없지만, 이렇게 하면 연말에 "사회보장 청구서"를 받았을 때 수천 유로의 예상치 못한 지출을 방지할 수 있습니다.',
    },
    {
      type: 'title',
      text: '월별 분담금에 포함된 항목은 무엇인가요?',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>일반 우발 상황 (28.30%):</strong> 일반 질병이나 비업무적 사고로 인한 부재를 보장합니다.',
        '<strong>직업적 우발 상황 (1.30%):</strong> 산업 재해 및 직업병을 보장합니다.',
        '<strong>활동 중단 (0.90%):</strong> 자영업자를 위한 "실업 수당"입니다.',
        '<strong>직업 교육 (0.10%):</strong> 강의 및 교육 과정 이용 권한입니다.',
        '<strong>MEI (2026년 0.90%):</strong> 연금의 지속 가능성을 보장하기 위한 기금입니다.',
      ],
    },
    {
      type: 'title',
      text: '정산 프로세스 (국세청 및 사회보장청)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '매년 소득세 신고 캠페인이 끝나면 국세청은 귀하의 실제 순소득을 사회보장청에 통보합니다. 실제 소득에 필요한 등급보다 낮은 등급을 선택한 경우 차액에 대한 납부 통지서를 받게 됩니다. 반대로 이익보다 더 많이 납부한 경우 사회보장청은 별도의 신청 없이 자동으로 초과분을 환급해 줍니다.',
    },
    {
      type: 'title',
      text: '결론 및 권장 사항',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>2026 자영업자 계산기</strong>는 모든 프리랜서의 세무 계획을 위해 없어서는 안 될 도구입니다. 중요한 계약을 맺거나 고정 비용을 변경할 때마다 이 시뮬레이터를 사용하여 자영업자 분담금이 항상 비즈니스 현실에 부합하는지 확인하시기를 권장합니다.',
    },
  ],
};
