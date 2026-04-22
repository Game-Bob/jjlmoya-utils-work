import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NieNifVerifierUI } from '../ui';

const slug = 'nie-nif-verifier-spain';
const title = '스페인 NIE/NIF/CIF 검증기: 스페인 납세자 번호 판별기';
const description =
  '스페인의 NIF(DNI), NIE(외국인), CIF(법인) 번호의 유효성을 무료로 확인하세요. 체크 디지트와 공식 규격을 즉시 검증합니다.';

const faqData = [
  {
    question: '이 도구에 내 NIF나 NIE를 입력해도 안전한가요?',
    answer:
      '네, 완전히 안전합니다. 모든 검증은 JavaScript를 통해 귀하의 브라우저 내에서만 수행됩니다. 데이터는 서버로 전송되거나 어떠한 데이터베이스에도 저장되지 않습니다.',
  },
  {
    question: 'NIF와 CIF의 차이점은 무엇인가요?',
    answer:
      'NIF(납세자 번호)는 현재 모든 식별 번호를 지칭하는 공식 용어입니다. 하지만 법인(회사 및 단체)의 NIF를 지칭할 때 여전히 CIF라는 용어가 관습적으로 널리 쓰이고 있습니다.',
  },
  {
    question: '알파벳을 모를 때 NIF가 유효한지 어떻게 알 수 있나요?',
    answer:
      '우리 검증기에 숫자 8자리를 입력해 보세요. 알고리즘이 해당 숫자를 23으로 나눈 나머지를 계산하여 정확한 알파벳 자리를 알려줍니다.',
  },
  {
    question: 'Y나 Z로 시작하는 NIE 번호도 확인 가능한가요?',
    answer:
      '네, 본 검증기는 X로 시작하는 이전 형식부터 Y나 Z로 시작하는 최신 형식까지 모든 NIE 규격을 지원하며 공식 수치 변환 공식을 적용합니다.',
  },
  {
    question: '해당 번호가 실제로 세무 당국에 등록되어 있는지 확인해 주나요?',
    answer:
      '아니요. 이 도구는 알고리즘 및 수학적 유효성만을 검증합니다. 번호가 법적 구조와 올바른 체크 디지트를 갖췄는지는 확인하지만, 실제 세무국(Agencia Tributaria) 조회를 수행하지는 않습니다.',
  },
];

const howToData = [
  {
    name: '식별 번호 확인',
    text: '신분증(DNI, 거주 카드 또는 세무 증명서)에 기재된 영문·숫자 혼합 코드를 확인하세요.',
  },
  {
    name: '코드 입력',
    text: '텍스트 필드에 NIF, NIE 또는 CIF를 입력하세요. 공백이나 하이픈은 무시됩니다.',
  },
  {
    name: '결과 확인',
    text: '도구가 즉시 구조가 유효한지, 그리고 체크 문자가 일치하는지 분석합니다.',
  },
  {
    name: '결과 복사',
    text: '유효한 코드인 경우, 바로 복사하여 인보이스, 계약서 또는 행정 서류에 활용하세요.',
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

export const content: ToolLocaleContent<NieNifVerifierUI> = {
  slug,
  title,
  description,
  ui: {
    labelInput: '스페인 납세자 식별 번호 입력',
    placeholder: '45938210Y',
    typeNIF: 'NIF / DNI',
    typeNIE: 'NIE',
    typeCIF: 'CIF',
    msgValidSuffix: '유효함',
    msgInvalidControl: '체크 디지트 오류',
    msgInvalidNIEControl: '제어 문자 오류',
    msgInvalidCIF: '잘못된 조합',
    msgIncomplete: '불완전함',
  },
  faqTitle: '자주 묻는 질문',
  faq: faqData: '출처',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '스페인에서 NIF, NIE, CIF 검증의 중요성',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '스페인의 행정 및 비즈니스 환경에서 납세자 식별은 모든 거래, 계약 및 공공 업무의 기초입니다. 인보이스를 발행하는 프리랜서든, 공급업체를 관리하는 법인이든, 신뢰할 수 있는 <strong>NIF, NIE 및 CIF 검증기</strong>는 행정적 오류와 사기를 방지하기 위한 필수 도구입니다.',
    },
    {
      type: 'title',
      text: 'NIF, NIE, CIF란 무엇인가요? 주요 차이점',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>NIF (납세자 식별 번호):</strong> 스페인의 세무 식별을 위한 일반적인 용어입니다. 스페인 국적자의 경우 DNI 번호 뒤에 알파벳 한 자리가 붙습니다 (숫자 8자리 + 문자 1자리).',
        '<strong>NIE (외국인 등록 번호):</strong> 스페인에서 세무 활동을 하는 외국인을 위한 식별 코드입니다. X, Y 또는 Z로 시작하며 숫자 7자리와 알파벳 한 자리가 뒤따릅니다.',
        '<strong>CIF (법인 식별 코드):</strong> 기업, 협회 등 법인의 NIF를 부르는 관용적인 명칭입니다. 조직 유형을 나타내는 알파벳 + 숫자 7자리 + 체크 숫자 또는 문자로 구성됩니다.',
      ],
    },
    {
      type: 'title',
      text: '검증 알고리즘 작동 방식',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'NIF/DNI의 경우, 숫자 부분을 23으로 나눈 나머지(나머지 연산)를 구한 뒤 이를 <strong>TRWAGMYFPDXBNJZSQVHLCKE</strong> 문자열의 위치와 매칭하여 마지막 알파벳을 결정합니다. CIF의 경우 각 자릿수의 가중치를 이용한 합산 방식으로 유효성을 판단합니다.',
    },
    {
      type: 'title',
      text: '실생활 활용 사례',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>회계 및 세무 법인:</strong> 세무 신고 모델에 고객이나 공급업체를 등록하기 전에 번호를 교차 확인합니다.',
        '<strong>전자상거래:</strong> 결제 단계에서 NIF를 검증하여 올바른 영수증을 발행하고 데이터 오류를 줄입니다.',
        '<strong>인사팀 (HR):</strong> 외국인 직원을 사회 보장국에 등록하기 전에 NIE의 정확성을 확인합니다.',
      ],
    },
    {
      type: 'title',
      text: '정확한 검증을 위한 팁',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '검증 오류가 발생하면 숫자 0(영)과 알파벳 O(오)를 혼동하지 않았는지 확인하세요. NIE 번호에서 매우 흔하게 발생하는 실수입니다.',
        'CIF의 경우, 조직의 유형을 나타내는 첫 번째 알파벳(A=주식회사, B=유한회사 등)을 반드시 포함해야 합니다.',
        '이 도구는 수학적 유효성을 확인하는 것이지, 현재 해당 번호가 세무국에서 활성 상태인지를 확인하는 것은 아닙니다.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>개인정보 보호 보장:</strong> 모든 검증 작업은 귀하의 브라우저에서만 실행됩니다. 입력된 번호는 서버로 전송되지 않습니다.',
    },
  ],
};
