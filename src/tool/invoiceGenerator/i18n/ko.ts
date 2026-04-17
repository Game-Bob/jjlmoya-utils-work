import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InvoiceGeneratorUI } from '../ui';

const slug = 'invoice-generator-ko';
const title = '프리랜서 및 소규모 비즈니스를 위한 무료 인보이스 생성기';
const description =
  '전문적인 인보이스를 온라인에서 무료로 만드세요. 정보를 입력하고 서비스를 추가하고 세율을 설정한 후 인쇄 가능한 PDF를 생성하세요. 계정이 필요 없습니다.';

const faqData = [
  {
    question: '전문적인 인보이스에는 어떤 정보가 포함되어야 하나요?',
    answer:
      '인보이스에는 고유한 인보이스 번호, 발행일, 귀하의 회사명 및 연락처 정보(사업자 등록 번호 포함), 고객의 회사 정보, 수량과 단가가 포함된 항목별 서비스/제품 목록, 해당 세금 및 명확한 지급 조건이 포함되어야 합니다.',
  },
  {
    question: '프리랜서가 서비스에 대해 부가가치세를 부과해야 하나요?',
    answer:
      '국가와 비즈니스 유형(과세 사업자 여부)에 따라 다릅니다. 대부분의 경우 과세 대상자로 등록되어 있다면 부가세를 청구해야 합니다. 정확한 사항은 세무 전문가에게 문의하세요.',
  },
  {
    question: '원천징수란 무엇이며 언제 적용되나요?',
    answer:
      '원천징수는 고객이 귀하에게 지급할 금액에서 세금을 미리 떼어 국가에 대납하는 제도입니다. 특정 전문 서비스를 제공하는 프리랜서에게 적용되는 경우가 많습니다.',
  },
  {
    question: '인보이스에 주민등록번호를 기재해야 하나요?',
    answer:
      '개인정보 보호와 전문적인 업무 처리를 위해 주민등록번호 대신 사업자 등록 번호를 사용하는 것이 훨씬 안전합니다. 사업자 번호가 없는 경우에도 개인정보 보호를 위해 주의가 필요합니다.',
  },
];

const howToData = [
  {
    name: '비즈니스 정보 입력',
    text: '"My Company LLC" 부분을 클릭하여 실제 회사명, 사업자 번호, 주소 및 연락처 이메일로 변경하세요.',
  },
  {
    name: '고객 정보 입력',
    text: '"청구 대상:" 아래의 각 필드를 클릭하여 고객사 이름, 사업자 번호, 주소 및 이메일을 입력하세요.',
  },
  {
    name: '서비스 추가 및 가격 설정',
    text: '표에 서비스 내용을 설명하고 수량과 단가를 설정하세요. "행 추가"를 클릭하여 추가 항목을 넣을 수 있습니다.',
  },
  {
    name: '총액 확인 및 PDF 생성',
    text: '모든 금액이 정확한지 확인하고 필요한 경우 세율을 설정한 후 "PDF 생성"을 클릭하여 저장하거나 인쇄하세요.',
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

export const content: ToolLocaleContent<InvoiceGeneratorUI> = {
  slug,
  title,
  description,
  ui: {
    labelEditor: '대화형 편집기',
    labelEditHint: '문서의 텍스트를 클릭하여 바로 편집할 수 있습니다.',
    btnGenerate: 'PDF 생성',
    labelFrom: '발행인:',
    labelTo: '청구 대상:',
    labelDesc: '서비스 또는 제품 설명',
    labelQty: '수량',
    labelPrice: '단가',
    labelAmount: '금액',
    btnAddRow: '행 추가',
    labelSubtotal: '소계:',
    labelTax: '세금',
    labelWithholding: '원천징수',
    labelTotal: '합계:',
    defaultInvoiceTitle: '인보이스',
    defaultInvoiceNum: 'INV-24-001',
    defaultCompanyName: '주식회사 샘플',
    defaultCompanyId: '사업자 123-45-67890',
    defaultAddress: '서울시 강남구 테헤란로 123',
    defaultCity: '샘플빌딩 101호',
    defaultEmail: 'admin@example.co.kr',
    placeholderDesc: '설명 추가...',
    placeholderNotes: '예: 발행 후 30일 이내에 은행 송금으로 결제 바랍니다...',
    labelNotes: '비고 / 결제 조건',
    currencySymbol: '₩',
    defaultTaxRate: '10',
    defaultRetRate: '0',
  },
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '출처',
  bibliography: [
    { name: '홈택스 사업자 인보이스 가이드', url: 'https://www.hometax.go.kr/' },
    { name: '국세청 부가가치세 안내', url: 'https://www.nts.go.kr/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '전문적인 인보이스 구성의 핵심 요소',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '유효한 비즈니스 인보이스는 단순한 지급 요청서 그 이상입니다. 이는 귀하와 고객 모두를 보호하는 법적 문서입니다. 필수 항목이 하나라도 누락되면 대금 지급이 지연되거나 세무 신고 문제가 발생할 수 있습니다. 프리랜서라면 처음부터 올바르게 작성하는 것이 매우 중요합니다.',
    },
    {
      type: 'card',
      title: '인보이스 필수 포함 항목',
      html: '<ul><li><strong>인보이스 번호:</strong> 누락 없는 일련번호(예: 2024-001, 2024-002).</li><li><strong>발행일:</strong> 서비스 제공일이 아닌 실제 발행 날짜.</li><li><strong>공급자 및 공급받는 자 정보:</strong> 상호명, 사업자 번호, 주소.</li><li><strong>상세 서비스 내역:</strong> 품목명, 수량, 단가.</li><li><strong>지급 조건:</strong> 지급 기한, 입금 계좌 정보.</li></ul>',
    },
    {
      type: 'title',
      text: '프리랜서 인보이스와 세금 및 원천징수',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '최종 지급액에 영향을 미치는 두 가지 요소가 있습니다. <strong>부가가치세</strong>는 고객으로부터 징수하여 국가에 납부하는 것으로 고객의 비용을 증가시킵니다. <strong>원천징수</strong>는 고객이 귀하의 소득에서 미리 세금을 떼어 국가에 납부하는 것으로, 실제 귀하가 수령하는 현금이 줄어들게 됩니다.',
    },
    {
      type: 'code',
      code: '공급가액                1,000,000원\n+ 부가세 (10%)           100,000원\n- 원천징수 (3.3%)        -33,000원\n-----------------------------------\n실수령액                1,067,000원',
    },
    {
      type: 'title',
      text: '프리랜서 개인정보 및 사업자 정보 보호',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '인보이스에 주민등록번호 대신 사업자 등록 번호를 사용하세요. 이를 통해 여러 담당자가 공유하는 비즈니스 문서에서 불필요한 개인정보 노출을 방지할 수 있습니다. 사업자 등록을 하는 것은 프리랜서로서의 신뢰도를 높이는 방법이기도 합니다.',
    },
    {
      type: 'tip',
      html: '<strong>모든 인보이스를 PDF로 저장하세요:</strong> 세무 조사를 대비하여 모든 비즈니스 기록은 최소 5년 이상 보관하는 것이 좋습니다. 인보이스 생성 후 반드시 PDF로 저장하여 연도별, 고객별로 정리된 폴더에 보관하세요.',
    },
  ],
};
