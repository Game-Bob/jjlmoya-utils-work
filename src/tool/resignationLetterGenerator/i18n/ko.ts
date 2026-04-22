import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResignationLetterGeneratorUI } from '../ui';

const slug = 'resignation-letter-generator';
const title = '전문 사직서 자동 생성기';
const description =
  '몇 초 만에 나만의 맞춤 사직서를 작성하세요. 복사하거나 PDF로 즉시 다운로드할 수 있는 전문 템플릿을 제공합니다.';

const faqData = [
  {
    question: '사직서는 퇴사 며칠 전에 제출해야 하나요?',
    answer:
      '대한민국 민법상으로는 1개월 전 고지를 원칙으로 하지만, 대부분의 경우 사내 취업규칙이나 근로계약서에 명시된 기간을 따릅니다. 원활한 인수인계를 위해 통상적으로 30일 전에 제출하는 것이 권장됩니다.',
  },
  {
    question: '자발적 퇴사 시에도 퇴직금을 받을 수 있나요?',
    answer:
      '네, 가능합니다. 계속 근로 기간이 1년 이상이고, 4주간을 평균하여 1주간의 소정근로시간이 15시간 이상인 근로자라면 퇴사 사유와 관계없이 퇴직금을 받을 권리가 있습니다.',
  },
  {
    question: '사직 의사를 밝힌 후 철회할 수 있나요?',
    answer:
      '사직서가 수리되기 전(회사가 승낙하기 전)이라면 철회가 가능할 수 있으나, 이미 수리된 후라면 회사의 동의가 있어야만 철회가 가능합니다. 따라서 신중하게 결정 후 제출해야 합니다.',
  },
  {
    question: '사표를 수리해 주지 않으면 어떻게 하나요?',
    answer:
      '근로자가 사직서를 제출했음에도 회사가 수리하지 않을 경우, 제출일로부터 1개월이 경과하면 민법 제627조에 따라 고용 해지의 효력이 발생하여 퇴사가 가능해집니다.',
  },
];

const howToData = [
  {
    name: '개인 정보 입력',
    text: '본인의 성명, 소속 부서, 수신인(상사 또는 인사담당자), 회사명을 입력합니다.',
  },
  {
    name: '희망 퇴사일 설정',
    text: '인수인계 기간을 고려하여 마지막 근무일(또는 퇴사 예정일)을 선택합니다.',
  },
  {
    name: '퇴사 사유 선택',
    text: '상황에 가장 적합한 사유를 선택하여 본문을 자동으로 구성합니다.',
  },
  {
    name: '복사 또는 PDF 다운로드',
    text: '작성된 사직서를 복사하여 이메일에 붙여넣거나 PDF로 다운로드하여 출력합니다.',
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

export const content: ToolLocaleContent<ResignationLetterGeneratorUI> = {
  slug,
  title,
  description,
  ui: {
    labelUserName: '성명',
    labelManagerName: '수신인 (상사 또는 대표자)',
    labelManagerGender: '호칭',
    labelCompanyName: '회사명',
    labelLastDay: '퇴사 예정일 (마지막 근무일)',
    labelReasonType: '퇴사 사유 유형',
    labelCity: '작성 지역',
    optGenderNeutral: '귀하 (중립)',
    optGenderM: '님 (남성)',
    optGenderF: '님 (여성)',
    optReasonStandard: '일신상의 사유 (표준)',
    optReasonOpportunity: '이직 및 새로운 도전',
    optReasonPersonal: '개인적인 사정',
    optReasonEducation: '학업 및 자기계발',
    optReasonGrowth: '경력 발전 방향의 차이',
    optReasonDirect: '핵심 요약 (사유 생략)',
    btnCopy: '사직서 복사',
    btnDownload: 'PDF 다운로드',
    copyFeedback: '클립보드에 복사되었습니다',
    defaultUserName: '홍길동',
    defaultManagerName: '대표이사 김철수',
    defaultCompanyName: '(주)샘플소프트',
    defaultCity: '서울특별시',
    dateLocale: 'ko-KR',
    datePrefix: '',
    managerPrefix: '수신:',
    managerFallback: '인사팀 담당자',
    companyFallback: '귀사',
    salutationNeutral: '귀하',
    salutationM: '님',
    salutationF: '님',
    salutationFallback: '담당자님',
    signatureFallback: '성명 (인/서명)',
    thanksParagraph:
      '재직 기간 동안 베풀어 주신 관심과 배려, 그리고 저에게 주어졌던 성장의 기회들에 대해 깊은 감사를 드립니다.',
    transitionParagraph:
      '퇴사 전까지 맡은바 업무를 충실히 수행하고, 원활한 인수인계가 이루어질 수 있도록 최선을 다하겠습니다.',
    closingWord: '사 직 서',
    reasonStandard:
      '본인은 일신상의 사유로 인하여 현재 담당하고 있는 직무를 사직하고자 합니다. 마지막 근무일은 근로계약상의 고지 기간을 준수하여 [DATE]로 정하고자 합니다.',
    reasonOpportunity:
      '본인은 새로운 환경에서의 도전과 성장을 위해 현 직무를 사직하기로 결정하였습니다. 이에 따라 [DATE]자를 기해 사직하고자 합니다.',
    reasonPersonal:
      '본인의 개인적인 사정으로 인해 부득이하게 현 직무를 계속 수행하기 어려워 사직서를 제출합니다. 마지막 근무일은 [DATE]입니다.',
    reasonEducation:
      '본인은 전문성 강화를 위한 학업 및 자기계발에 전념하고자 자진 사직하고자 합니다. 사직 효력 발생일은 [DATE]입니다.',
    reasonGrowth:
      '심사숙고 끝에 본인의 장기적인 커리어 목표 달성을 위해 사직을 결정하였습니다. [DATE]를 마지막으로 퇴사하고자 합니다.',
    reasonDirect:
      '본인은 [DATE]자를 기해 현 회사와의 근로 관계를 종료하고자 사직서를 제출합니다.',
  },
  faqTitle: '자주 묻는 질문',
  faq: faqData: '출처 및 참고',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '전문적이고 깔끔한 사직서 작성법',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '퇴사를 결정하는 것은 커리어에서 매우 중요한 과정입니다. <strong>사직서 제출</strong>은 단순한 행정 절차를 넘어 조직에 남기는 마지막 인상이며, 법적인 의미를 담고 있는 문서이므로 신중하고 전문적으로 다루어야 합니다.',
    },
    {
      type: 'tip',
      html: '<strong>전문가의 팁:</strong> 상사와 아무리 친한 관계라도 사직 의사를 밝힐 때는 <strong>반드시 서면(또는 전자 문서)으로 제출</strong>해야 합니다. 이는 법적 고지 기간의 증거가 되며 양측을 보호합니다.',
    },
    {
      type: 'list',
      items: [
        '정확한 퇴사 날짜 명시하기',
        '사유는 깔끔하게 "일신상의 사유"로 기재하는 것이 관례',
        '수신인은 회사 대표자로 설정',
        '수동 서명 또는 공인 전자 서명 포함',
      ],
    },
    {
      type: 'code',
      code: '[작성일자]\n\n수신: [대표이사 성명]\n[회사명]\n\n사직서\n\n본인은 일신상의 사유로 사직하고자 합니다.\n퇴사 예정일: [날짜]\n\n[본인 성명] (인)',
    },
  ],
};
