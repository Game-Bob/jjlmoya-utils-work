import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { InvoiceLateFeeCalculatorUI } from '../ui';

const slug = 'invoice-late-fee-calculator';
const title = '청구서 연체료 계산기';
const description = '미납 청구서 금액, 유예 기간, 계약에서 합의한 요율로 간단한 연체료를 계산합니다. 청구 일수, 연체료, 총액을 명확한 내역으로 확인할 수 있습니다.';

const faq = [
  { question: '청구서 연체료는 어떻게 계산하나요?', answer: '납부기한과 계산일 사이의 달력 일수에서 유예 일수를 뺍니다. 연간 또는 월간 요율은 합의한 비율을 청구 일수에 맞춰 일할 계산합니다. 일회성 요율은 유예 기간이 끝난 뒤 한 번 적용합니다.' },
  { question: '법정 지연 이율을 사용할 수 있나요?', answer: '요율을 확인했고 계약 또는 적용 법률에서 사용을 허용한다면 입력할 수 있습니다. 요율은 직접 입력해야 합니다. 이 도구는 국가를 선택하거나 법정 요율을 추정하지 않으며, 청구 가능 여부를 판단하지 않습니다.' },
  { question: '유예 기간은 무엇을 바꾸나요?', answer: '납부기한 뒤 연체료가 시작되기 전의 유예 일수를 대상 기간에서 제외합니다. 청구서가 아직 유예 기간 안에 있으면 연체료는 0이고 유예 중이라는 상태가 표시됩니다.' },
  { question: '총액에 세금, 추심 비용 또는 복리가 포함되나요?', answer: '아니요. 결과는 선택한 통화의 원금에 입력값으로 계산한 단순 연체료를 더한 금액입니다. 통화 변경에는 고정된 참고 계수를 사용하며 실시간 환율은 사용하지 않습니다. 세금, 고정 추심 비용, 법률 비용, 복리, 결제 내역은 포함되지 않습니다.' },
];

const howTo = [
  { name: '청구서 금액 입력', text: '미납 원금을 입력하고 청구서 통화를 선택합니다. 나중에 통화를 바꾸면 표시된 참고 계수로 환산되며 실시간 외환 시세가 적용되는 것은 아닙니다.' },
  { name: '날짜 설정', text: '계약상 납부기한과 계정을 확인할 날짜를 선택합니다. 두 날짜 사이의 완전한 달력 일수를 계산합니다.' },
  { name: '유예와 요율 입력', text: '유예 일수와 청구서에 합의한 비율을 입력합니다. 연간, 월간 또는 일회성 요율을 선택합니다.' },
  { name: '내역 확인', text: '납부기한 이후 일수, 청구 일수, 연체료, 총액을 확인합니다. 내역을 청구서와 함께 보관하고 청구 전에 계약을 확인하세요.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const applicationSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'BusinessApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' }, inLanguage: 'ko' };

export const content: ToolLocaleContent<InvoiceLateFeeCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    eyebrow: '연체 청구서 / 간단한 내역',
    intro: '지나간 납부기한을 명확한 청구 근거로 바꿔 보세요.',
    sectionTerms: '청구서 조건 설정',
    labelAmount: '미납 청구서 금액',
    labelCurrency: '청구서 통화',
    currencyConversionHint: '통화를 바꾸면 실시간 환율이 아닌 고정 참고 계수로 금액을 환산합니다.',
    currencyRateTemplate: '1 EUR ≈ {value} {currency}.',
    labelDueDate: '계약상 납부기한',
    labelCalculationDate: '계산 기준일',
    labelGraceDays: '유예 기간',
    labelRate: '합의한 연체료 요율',
    labelRatePeriod: '요율 적용 기간',
    rateAnnual: '연간',
    rateMonthly: '월간',
    rateOneTime: '일회성',
    sectionReceipt: '추심 내역',
    labelDaysSinceDue: '납부기한 이후 일수',
    labelChargedDays: '청구 일수',
    labelAppliedRate: '적용 요율',
    labelLateFee: '연체료',
    labelTotalDue: '청구할 총액',
    statusNotDue: '아직 연체되지 않음',
    statusGrace: '아직 유예 기간',
    statusOverdue: '연체료 계산 중',
    timelineDue: '납부기한',
    timelineToday: '확인 기준일',
    timelineGrace: '유예 후 청구 일수',
    noteDisclaimer: '입력값을 바탕으로 한 간단한 추정입니다. 청구 전에 계약, 관할, 세무 처리, 고정 추심 비용을 확인하세요.',
    buttonReset: '저장된 조건 지우기',
    numberLocale: 'ko-KR',
  },
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, applicationSchema],
  seo: [
    { type: 'title', text: '연체 청구서를 쉽게 설명하는 방법', level: 2 },
    { type: 'paragraph', html: '원금, 날짜, 유예 기간, 요율, 연체료가 한곳에 보이면 지급 요청을 검토하기 쉽습니다. 이 계산기는 계약 조건을 영수증 형태의 간단한 내역으로 정리합니다.' },
    { type: 'card', title: '간단한 공식', html: '<p><strong>청구 일수</strong> = 납부기한과 계산일 사이의 일수 - 유예 일수.</p><p><strong>연체료</strong> = 청구서 금액 × 요율 ÷ 100 × 기간 계수. 연간 요율은 청구 일수 ÷ 365, 월간 요율은 청구 일수 ÷ 30, 일회성 요율은 유예 후 한 번 적용합니다.</p>' },
    { type: 'paragraph', html: '이 계산은 법정 이율을 대신 선택하지 않고 의도적으로 투명하게 보여 줍니다. 계약에 고정 금액, 연간 요율 또는 다른 날짜 계산 방식이 있을 수 있습니다. 통화 환산은 선택한 계수에 따른 참고값일 뿐 실시간 환율이 아닙니다. 계약 내용이 다르면 조항을 확인하고 이 도구 밖에서 계산을 조정하세요.' },
    { type: 'title', text: '청구 전에 결과 확인', level: 2 },
    { type: 'code', code: '청구서: 1,250,000원\n확인까지: 38일\n유예 기간: 5일\n연간 요율: 10%\n청구 일수: 33일\n연체료: 1,250,000 × 0.10 × 33 / 365 = 1,130원\n총액: 1,251,130원' },
    { type: 'list', items: ['납부기한을 주문서, 청구서 또는 서명한 계약과 대조합니다.', '예상한 결제일이 아니라 실제로 청구를 준비하는 날짜를 사용합니다.', '수취인이 두 금액을 확인할 수 있도록 원금과 연체료를 분리합니다.', '세금, 고정 회수 비용, 법정 한도가 청구 가능한 금액을 바꾸는지 확인합니다.'] },
    { type: 'tip', html: '<strong>증빙 팁:</strong> 청구서, 배송 또는 인수 증명, 계약 조항, 이 계산 결과를 함께 보관하세요. 이 도구는 산술을 설명하지만 채무의 기한 도래나 연체료의 청구 가능성을 증명하지는 않습니다.' },
  ],
};
